import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-neutral-200 py-20 dark:border-neutral-800">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Experience</h2>
        <ol className="mt-6 space-y-10 border-l border-neutral-200 dark:border-neutral-800">
          {experience.map((item) => (
            <li key={`${item.company}-${item.period}`} className="relative pl-8">
              <span
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                {item.period}
              </span>
              <h3 className="mt-1 font-semibold">
                {item.role} · <span className="text-neutral-500 dark:text-neutral-400">{item.company}</span>
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
