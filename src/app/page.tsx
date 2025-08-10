import Hero from "@/components/hero";
import AIShowcase from "@/components/ai-showcase";
import Projects from "@/components/projects";
import Socials from "@/components/socials";
import AboutExperience from "@/components/about-experience";

export default function Home() {
  return (
    <main className="min-h-dvh text-foreground relative overflow-hidden bg-primary-foreground pt-16 md:pt-20">
      <Hero />
      <AIShowcase />
      <Projects />
      <AboutExperience />
      <Socials />
    </main>
  );
}
