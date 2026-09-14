import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email address").max(200),
  // Honeypot field: real users never fill this in, bots often do.
  company: z.string().max(0).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    // No email provider configured yet. Log server-side so the submission
    // isn't silently lost, and tell the client honestly what happened.
    console.warn(
      "[contact] RESEND_API_KEY / CONTACT_TO_EMAIL not set — submission logged only:",
      { name, email, message }
    );
    return NextResponse.json(
      {
        error:
          "The contact form isn't fully configured yet (missing email provider). Your message was logged on the server.",
      },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[contact] Resend API error:", res.status, detail);
    return NextResponse.json({ error: "Failed to send your message. Please try again later." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
