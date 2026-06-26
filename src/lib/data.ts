import {
  Mail,
  Server,
  Smartphone,
  Database,
  Wrench,
  Brain,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arkha",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/arkha",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:arkha@email.com",
    icon: Mail,
  },
] as const;

export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  title: string;
  icon: typeof Server;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: "⬢" },
      { name: "Express.js", icon: "⚡" },
      { name: "PHP", icon: "🐘" },
      { name: "REST API", icon: "🔗" },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: [
      { name: "Kotlin", icon: "🟣" },
      { name: "Jetpack Compose", icon: "🎨" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      { name: "MySQL", icon: "🐬" },
      { name: "PostgreSQL", icon: "🐘" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "Postman", icon: "📮" },
    ],
  },
  {
    title: "AI & Algorithms",
    icon: Brain,
    items: [
      { name: "A* Search", icon: "🔍" },
      { name: "Uniform Cost Search", icon: "📊" },
      { name: "Fuzzy Logic", icon: "🌀" },
      { name: "Bayesian Network", icon: "🧠" },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Cross-Language API Gateway",
    description:
      "High-performance API gateway integrating Node.js and PHP microservices through Express. Features request routing, rate limiting, authentication middleware, and unified error handling across different runtime environments.",
    tech: ["Node.js", "Express.js", "PHP", "REST API", "Docker"],
    github: "https://github.com/arkha/api-gateway",
    demo: "https://api-gateway-demo.vercel.app",
    gradient: "from-zinc-800 to-zinc-900",
  },
  {
    title: "Event Kampus Hub",
    description:
      "Full-stack campus activity management platform enabling students and organizations to create, discover, and manage university events. Includes real-time notifications, RSVP tracking, and admin dashboard.",
    tech: ["PHP", "MySQL", "REST API", "Node.js"],
    github: "https://github.com/arkha/event-kampus",
    gradient: "from-zinc-900 to-zinc-800",
  },
  {
    title: "AI Search Algorithm Visualizer",
    description:
      "Interactive visualization tool for informed and uninformed search algorithms including A*, UCS, BFS, and DFS. Features step-by-step execution, adjustable speed, custom graph creation, and performance metrics comparison.",
    tech: ["Node.js", "A* Search", "UCS", "Fuzzy Logic"],
    github: "https://github.com/arkha/search-visualizer",
    demo: "https://search-viz-demo.vercel.app",
    gradient: "from-zinc-800 via-zinc-900 to-zinc-800",
  },
  {
    title: "Modern Android Application",
    description:
      "Feature-rich Android application built with modern development practices. Utilizes Jetpack Compose for declarative UI, Kotlin coroutines for async operations, and clean architecture with MVVM pattern.",
    tech: ["Kotlin", "Jetpack Compose", "REST API", "PostgreSQL"],
    github: "https://github.com/arkha/modern-android",
    gradient: "from-zinc-900 to-zinc-800",
  },
];

export interface TimelineEntry {
  date: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education";
  icon: typeof Briefcase;
}

export const timeline: TimelineEntry[] = [
  {
    date: "2024 — Present",
    title: "Software Developer",
    organization: "Freelance & Open Source",
    description:
      "Building scalable backend systems and mobile applications. Contributing to open-source projects focused on developer tooling and API infrastructure.",
    type: "work",
    icon: Briefcase,
  },
  {
    date: "2023 — 2024",
    title: "Backend Developer Intern",
    organization: "Tech Startup",
    description:
      "Designed and implemented RESTful APIs serving 10k+ daily requests. Optimized database queries reducing response times by 40%. Collaborated with cross-functional teams using agile methodologies.",
    type: "work",
    icon: Briefcase,
  },
  {
    date: "2021 — Present",
    title: "Bachelor of Computer Science",
    organization: "University",
    description:
      "Focused on software engineering, algorithms, and artificial intelligence. Active participant in coding competitions and tech community events. Maintaining strong academic performance.",
    type: "education",
    icon: GraduationCap,
  },
];

export const aboutContent = {
  intro:
    "I am a software developer with a deep focus on backend architecture and mobile development. I approach every project with an engineering mindset — prioritizing clean code, scalable systems, and thoughtful design decisions.",
  detail:
    "My expertise spans building robust API services with Node.js and PHP, crafting native Android experiences with Kotlin and Jetpack Compose, and exploring intelligent algorithms to solve complex computational problems. I believe in writing code that is not just functional, but maintainable and elegant.",
  focusAreas: [
    "Problem Solving",
    "Backend Engineering",
    "Android Development",
    "Software Architecture",
    "Continuous Learning",
  ],
};
