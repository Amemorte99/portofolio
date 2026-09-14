import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-neutral-200 py-20 dark:border-neutral-800">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Skills</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category) => (
            <div key={category.title} className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
              <h3 className="font-semibold">{category.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
