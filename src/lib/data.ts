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
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/arkhabw",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arkhabw",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:arkha.bw@gmail.com",
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
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Arnai",
    description:
      "Advanced AI-powered study companion designed to accelerate learning cycles. Features secure Google OAuth, dynamic vector RAG document queries, automatic AI quiz generation, interactive mind mapping, and a gamified level-up system.",
    tech: ["Next.js", "TypeScript", "Firebase", "Vector RAG", "OAuth"],
    github: "https://github.com/arkhabw/Arnai",
    demo: "https://arnai-ai.vercel.app",
    gradient: "from-indigo-950 to-zinc-900",
    image: "/projects/arnai.png",
  },
  {
    title: "LokalMarket",
    description:
      "A premier native Android e-commerce platform designed to bring authentic Indonesian traditional crafts and heritage goods to a global audience. Features a culturally rich UI, Jetpack Compose layout, secure local payment checkout, and lightning-fast product search.",
    tech: ["Kotlin", "Jetpack Compose", "Android SDK", "Payment Gateway"],
    github: "https://github.com/Alifsw21/LokalMarket",
    gradient: "from-zinc-900 to-zinc-800",
    image: "/projects/lokalmarket.png",
  },
  {
    title: "RacePace AI",
    description:
      "Interactive F1 Race Simulation & Pit Strategy Optimizer with motorsport telemetry aesthetics. Uses AI backtracking search with branch-and-bound pruning to evaluate thousands of compound and pit-lap combinations in milliseconds.",
    tech: ["JavaScript", "Chart.js", "AI Search", "Telemetry"],
    github: "https://github.com/arkhabw/F1PitStrategyPrediction",
    demo: "https://arkhabw.github.io/F1PitStrategyPrediction/",
    gradient: "from-red-950 to-zinc-900",
    image: "/projects/racepace-ai.png",
  },
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
    github: "https://github.com/arkhabw/EventKampus",
    gradient: "from-zinc-900 to-zinc-800",
    image: "/projects/event-kampus.jpg",
  },
  {
    title: "Courier Route Visualizer With Dijkstra's Algorithm",
    description:
      "Interactive web application visualizing courier delivery routes using Dijkstra's algorithm. Users can input locations, and the app computes the shortest path while displaying step-by-step route calculations.",
    tech: ["Python", "Streamlit", "Dijkstra's Algorithm", "Data Visualization"],
    github: "https://github.com/arkhabw/MATDIS",
    demo: "https://courierroutedijkstra.streamlit.app/",
    gradient: "from-zinc-800 via-zinc-900 to-zinc-800",
    image: "/projects/dijkstra.png",
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
    date: "2026 — Present",
    title: "Web Developer Member",
    organization: "KSM Multimedia",
    description:
      "Developing full-stack web applications by taking projects from initial frontend UI design through backend logic to final deployment. Mastering HTML/CSS and modern frameworks to build responsive user interfaces, and managing databases to create functional, secure systems.",
    type: "work",
    icon: Briefcase,
  },
  {
    date: "2025 — 2026",
    title: "Human Resource Development Staff",
    organization: "BEMF-IK UPNVJ",
    description:
      "Supported the management and development of BEMF-IK members by assisting in internal coordination, communication, and organizational discipline. Contributed to initiatives aimed at improving teamwork, member engagement, and cross-divisional effectiveness.",
    type: "work",
    icon: Briefcase,
  },
  {
    date: "2024 — Present",
    title: "Bachelor of Informatics",
    organization: "UPN \"Veteran\" Jakarta",
    description:
      "Focused on computer science fundamentals, software engineering, AI development, databases, and algorithms. Active participant in student organizations, developing relationship, and maintaining a strong academic foundation.",
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
