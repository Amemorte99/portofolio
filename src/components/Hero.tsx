import Image from "next/image";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-content px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-fadeUp">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Available for new opportunities
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {site.role}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-300">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="focus-ring rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="focus-ring rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700 transition-transform hover:-translate-y-0.5 dark:border-neutral-800 dark:text-neutral-200"
            >
              View projects
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-xs animate-fadeUp">
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-accent/20" aria-hidden="true" />
          <Image
            src="/images/profile.jpg"
            alt={`Portrait of ${site.name}`}
            fill
            sizes="(min-width: 768px) 320px, 60vw"
            className="rounded-3xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
