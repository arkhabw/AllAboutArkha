import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-7xl">
        <div className="border-t border-zinc-800/30" />
      </div>

      <TechStack />

      <div className="mx-auto max-w-7xl">
        <div className="border-t border-zinc-800/30" />
      </div>

      <Projects />

      <div className="mx-auto max-w-7xl">
        <div className="border-t border-zinc-800/30" />
      </div>

      <About />

      <div className="mx-auto max-w-7xl">
        <div className="border-t border-zinc-800/30" />
      </div>

      <Experience />

      <div className="mx-auto max-w-7xl">
        <div className="border-t border-zinc-800/30" />
      </div>

      <Contact />

      <Footer />
    </>
  );
}
