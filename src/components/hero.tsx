"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Subtle background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-zinc-800/20 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl"
        >
          Software Developer
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 text-lg font-medium text-zinc-500 sm:text-xl lg:text-2xl"
        >
          Web Architecture · Mobile Development
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
        >
          I craft creative websites and mobile experiences.
          Focused on writing clean, scalable code that solves real problems
          with thoughtful engineering.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={handleScrollToProjects}>
            <ArrowDown className="h-4 w-4" />
            View Projects
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-3 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/50"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-zinc-200" />
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
