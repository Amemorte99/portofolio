"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(body.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="contact" className="border-t border-neutral-200 py-20 dark:border-neutral-800">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Contact</h2>
        <div className="mt-6 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Let&apos;s work together</h3>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="focus-ring mt-6 inline-block rounded text-lg font-medium text-accent"
            >
              {site.email}
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot field — hidden from real users, catches simple bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="focus-ring w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-2.5 text-sm dark:border-neutral-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="focus-ring w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-2.5 text-sm dark:border-neutral-800"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                minLength={10}
                className="focus-ring w-full rounded-lg border border-neutral-200 bg-transparent px-4 py-2.5 text-sm dark:border-neutral-800"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="focus-ring rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-60 dark:bg-white dark:text-neutral-900"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Thanks! Your message has been sent.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-600 dark:text-red-400">{errorMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
