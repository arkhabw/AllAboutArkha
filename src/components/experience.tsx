"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { timeline } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-12">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.title + entry.date}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative pl-8 sm:pl-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 sm:left-1/2 sm:-translate-x-1/2">
                  <div className="flex h-3 w-3 items-center justify-center">
                    <div className="h-3 w-3 rounded-full border-2 border-zinc-700 bg-zinc-900" />
                  </div>
                </div>

                <div
                  className={`sm:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? "sm:mr-auto sm:pr-8 sm:text-right"
                      : "sm:ml-auto sm:pl-8"
                  }`}
                >
                  <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 transition-all duration-300 hover:border-zinc-700/50 hover:bg-zinc-900/50">
                    <div className="mb-1 flex items-center gap-2 text-sm text-zinc-500">
                      <entry.icon className="h-4 w-4" />
                      <span>{entry.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-zinc-400">
                      {entry.organization}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
