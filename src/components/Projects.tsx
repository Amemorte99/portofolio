import Image from "next/image";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-neutral-200 py-20 dark:border-neutral-800">
      <div className="mx-auto max-w-content px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="focus-ring group overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
