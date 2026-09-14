import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 dark:border-neutral-800">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-5">
          {site.social.map((link) => (
            <a key={link.label} href={link.href} className="focus-ring rounded hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
