"use client";

import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card } from "@/components/ui/card";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "arkha.bw@gmail.com",
    href: "mailto:arkha.bw@gmail.com",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/arkhabw",
    href: "https://github.com/arkhabw",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/arkhabw",
    href: "https://www.linkedin.com/in/arkhabw",
  },
  {
    icon: Download,
    label: "Resume",
    value: "Download CV",
    href: "/resume.pdf",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Feel free to reach out through any of these channels"
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {contactLinks.map((link, index) => (
            <ScrollReveal key={link.label} delay={index * 0.1}>
              <a
                href={link.href}
                target={link.label !== "Resume" ? "_blank" : undefined}
                rel={link.label !== "Resume" ? "noopener noreferrer" : undefined}
                download={link.label === "Resume" ? true : undefined}
                className="block"
              >
                <Card className="group cursor-pointer p-6 hover:border-zinc-700/50 hover:bg-zinc-800/30">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition-colors group-hover:border-zinc-700 group-hover:bg-zinc-800">
                      <link.icon className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-zinc-200" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500">{link.label}</p>
                      <p className="font-medium text-zinc-300 transition-colors group-hover:text-zinc-100">
                        {link.value}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
