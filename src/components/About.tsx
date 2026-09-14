import Image from "next/image";
import { about, site } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="border-t border-neutral-200 py-20 dark:border-neutral-800">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">About</h2>
        <div className="mt-6 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-neutral-600 dark:text-neutral-300">
                {p}
              </p>
            ))}
            <Image
              src="/images/signature.png"
              alt={`${site.name}'s signature`}
              width={140}
              height={60}
              className="opacity-80 dark:invert"
            />
          </div>
          <dl className="grid gap-6 self-start sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
                <dt className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-sm font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
