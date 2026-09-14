// Central place for all editable site content.
// Replace the placeholder values below with your real information.

export const site = {
  name: "Your Name",
  role: "Full-Stack Developer",
  tagline: "I design and build fast, accessible web applications.",
  email: "hello@example.com",
  location: "Remote",
  url: "https://example.com",
  intro:
    "I'm a full-stack developer focused on building clean, performant, and maintainable web products — from interface to infrastructure.",
  social: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Twitter", href: "https://twitter.com/" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a developer who enjoys turning ideas into reliable products. I care about clean architecture, accessible interfaces, and code that's easy for a team to build on.",
    "I've worked across the stack — from designing component systems to building APIs and shipping to production — and I like being involved in a project from its first sketch to its first user.",
  ],
  facts: [
    { label: "Based in", value: "Remote / Worldwide" },
    { label: "Focus", value: "Web & Product Engineering" },
    { label: "Available for", value: "Freelance & Full-time roles" },
  ],
};

export const skills = {
  categories: [
    {
      title: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Accessibility"],
    },
    {
      title: "Backend",
      items: ["Node.js", "REST APIs", "PostgreSQL", "Authentication", "Testing"],
    },
    {
      title: "Tooling & Practice",
      items: ["Git", "CI/CD", "Performance", "Code Review", "Docker"],
    },
  ],
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Company Name",
    period: "2022 — Present",
    description:
      "Lead development of core product features, mentor teammates, and drive decisions on architecture and code quality.",
  },
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "2019 — 2022",
    description:
      "Built and maintained customer-facing features end to end, from UI components to backend services.",
  },
  {
    role: "Junior Developer",
    company: "Company Name",
    period: "2017 — 2019",
    description:
      "Started my professional path building web interfaces and learning the fundamentals of shipping production software.",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    image: "/images/projects/project-01.jpg",
    tags: ["Web", "React"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    image: "/images/projects/project-02.jpg",
    tags: ["Design", "Branding"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A short description of what this project does and the problem it solves.",
    image: "/images/projects/project-03.jpg",
    tags: ["Web", "API"],
    href: "#",
  },
  {
    title: "Project Four",
    description: "A short description of what this project does and the problem it solves.",
    image: "/images/projects/project-04.jpg",
    tags: ["Mobile"],
    href: "#",
  },
  {
    title: "Project Five",
    description: "A short description of what this project does and the problem it solves.",
    image: "/images/projects/project-05.jpg",
    tags: ["Web"],
    href: "#",
  },
  {
    title: "Project Six",
    description: "A short description of what this project does and the problem it solves.",
    image: "/images/projects/project-06.jpg",
    tags: ["Design"],
    href: "#",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
