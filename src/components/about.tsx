"use client";

import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutContent } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="A bit more about who I am and what drives me"
        />

        <div className="space-y-8">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {aboutContent.intro}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {aboutContent.detail}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="pt-4">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutContent.focusAreas.map((area) => (
                  <Badge key={area} variant="outline">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
