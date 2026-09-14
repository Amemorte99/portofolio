# Portfolio

A personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS.

This project replaces a legacy static HTML template with a modern, secure, and
accessible codebase: semantic markup, dark/light theme, optimized images,
SEO metadata, and a working contact form backed by an API route.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # ESLint
```

## Personalizing the content

All editable copy — name, role, bio, skills, experience, projects, contact
email, and social links — lives in one place: [`src/lib/content.ts`](src/lib/content.ts).
Update the values there; no other file needs to change for a content edit.

Profile photo and project images live in `public/images/`. Swap them out
with your own (keeping the same file names, or updating the paths in
`src/lib/content.ts`).

The site metadata (title, description, Open Graph/Twitter tags, canonical
URL used by `robots.ts` and `sitemap.ts`) is derived from `site.url` and
`site.intro` in `src/lib/content.ts` — update `site.url` to your real domain
before deploying.

## Contact form

The contact form posts to `POST /api/contact` ([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)),
which validates the submission (including a honeypot field to filter basic
spam bots) and sends the message via [Resend](https://resend.com/).

To enable email delivery, set these environment variables (e.g. in a `.env.local`
file, or in your hosting provider's dashboard):

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=you@example.com
```

Until these are set, submissions are validated and logged on the server but
not emailed — the form tells the user honestly rather than pretending to
succeed.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/) for server-side form validation

## Deployment

The app is a standard Next.js project and deploys to any Next.js-compatible
host (e.g. [Vercel](https://vercel.com/)). No build-time secrets are required;
only `RESEND_API_KEY` / `CONTACT_TO_EMAIL` are needed at runtime for the
contact form to send email.
