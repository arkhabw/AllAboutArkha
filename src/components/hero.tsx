"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";
import { DevCard } from "@/components/dev-card";

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
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 md:py-32"
    >
      {/* Subtle background gradient orbs */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 pointer-events-none">
        <div className="h-[500px] w-[500px] rounded-full bg-zinc-800/10 blur-[100px]" />
      </div>
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 pointer-events-none">
        <div className="h-[300px] w-[300px] rounded-full bg-zinc-900/20 blur-[80px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
          
          {/* Left Column: Bio & Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl font-sans"
            >
              Software Developer
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-lg font-medium text-zinc-500 sm:text-xl lg:text-2xl"
            >
              Web Architecture · Mobile Development
            </motion.p>

            <motion.p
              variants={item}
              className="mt-8 text-base leading-relaxed text-zinc-400 sm:text-lg max-w-2xl lg:max-w-none"
            >
              I craft creative websites and mobile experiences.
              Focused on writing clean, scalable code that solves real problems
              with thoughtful engineering.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col items-center justify-center lg:justify-start gap-4 sm:flex-row w-full sm:w-auto"
            >
              <Button size="lg" onClick={handleScrollToProjects} className="w-full sm:w-auto">
                <ArrowDown className="h-4 w-4" />
                View Projects
              </Button>
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex items-center justify-center lg:justify-start gap-4"
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
          </div>

          {/* Right Column: 3D Developer ID Card */}
          <motion.div
            variants={item}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <DevCard />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
