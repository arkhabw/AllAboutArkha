"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { techStack } from "@/lib/data";
import { Card } from "@/components/ui/card";

export function TechStack() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies and tools I work with daily"
        />

        <div className="space-y-16">
          {techStack.map((category, categoryIndex) => (
            <ScrollReveal key={category.title} delay={categoryIndex * 0.1}>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <category.icon className="h-5 w-5 text-zinc-500" />
                  <h3 className="text-lg font-semibold text-zinc-200">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {category.items.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: techIndex * 0.05,
                      }}
                    >
                      <Card className="group cursor-default p-4 hover:border-zinc-700/50 hover:bg-zinc-800/50">
                        <div className="flex items-center gap-3">
                          {tech.icon && (
                            <span className="text-xl" role="img" aria-hidden="true">
                              {tech.icon}
                            </span>
                          )}
                          <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100">
                            {tech.name}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
