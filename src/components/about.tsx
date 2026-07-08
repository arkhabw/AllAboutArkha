"use client";

import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutContent } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Server, Smartphone, Brain } from "lucide-react";

// Core specialization pillars for a premium feel
const pillars = [
  {
    title: "Backend Architecture",
    description: "Designing REST APIs and robust data layers for heavy request loads.",
    icon: Server,
  },
  {
    title: "Mobile Development",
    description: "Crafting fluid native Android applications with Jetpack Compose.",
    icon: Smartphone,
  },
  {
    title: "Algorithmic Logic",
    description: "Applying search algorithms and fuzzy logic to solve computing tasks.",
    icon: Brain,
  },
];

// Simplified, clean core tech stack grouping
const coreSkills = [
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "PHP", "REST API"],
  },
  {
    category: "Mobile & Tools",
    skills: ["Kotlin", "Jetpack Compose", "Git", "Docker", "Postman"],
  },
  {
    category: "Database & Logic",
    skills: ["MySQL", "PostgreSQL", "Fuzzy Logic", "A* Search", "Bayesian Network"],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden border-t border-zinc-900/60">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none">
        <div className="h-[400px] w-[400px] rounded-full bg-zinc-900/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <SectionHeading
          title="About & Skills"
          subtitle="My design philosophy, engineering approach, and core stack"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Column: Biography & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
                  I am a software developer with a deep focus on <span className="text-zinc-100 font-semibold">backend architecture</span> and <span className="text-zinc-100 font-semibold">mobile development</span>. I approach every project with an engineering mindset—prioritizing clean code, scalable systems, and thoughtful design decisions.
                </p>
                <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {aboutContent.detail}
                </p>
              </div>
            </ScrollReveal>

            {/* Core Specialization Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <ScrollReveal key={pillar.title} delay={idx * 0.1}>
                    <Card className="group h-full p-5 bg-zinc-950/20 hover:bg-zinc-900/30 transition-all duration-300 hover:border-zinc-800">
                      <div className="flex flex-col h-full justify-between">
                        <div>
                          <div className="mb-4 inline-flex p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-850 text-zinc-400 group-hover:text-zinc-200 transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 group-hover:text-zinc-100 transition-colors">
                            {pillar.title}
                          </h4>
                          <p className="mt-2 text-[11px] leading-relaxed text-zinc-500 group-hover:text-zinc-450 transition-colors">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Simplified Skill Card Dashboard */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <ScrollReveal delay={0.2}>
              <Card className="p-6 bg-zinc-950/30 border-zinc-800/60 backdrop-blur-md">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  Core Technologies
                </h3>
                
                <div className="space-y-6">
                  {coreSkills.map((cat) => (
                    <div key={cat.category} className="space-y-3">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-650 uppercase block">
                        {cat.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="bg-zinc-900/40 hover:bg-zinc-900 text-zinc-300 border border-zinc-800/50 py-1 px-2.5 text-[10px] tracking-wide font-mono transition-all hover:border-zinc-700/80 hover:text-zinc-100"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
