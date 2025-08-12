import SectionHeader from "@/components/section-header";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Cultur3",
    description:
      "Members-only music events with R&B, Hip Hop, Afrobeats & Desi sounds in curated venues. Built with Next.js, Supabase, and Stripe.",
    image: "/cultur3.jpg",
    tags: ["Next.js", "Supabase", "Stripe", "S3"],
    links: { live: "https://www.cultur3.co.uk" },
  },
  {
    title: "Cultur3 Dashboard",
    description: "Admin dashboard for members, tickets, and event data.",
    image: "/cultur3-dashboard.jpg",
    tags: ["Next.js", "Supabase", "S3"],
    links: { live: "https://dashboard.cultur3.co.uk" },
  },
  {
    title: "Nimkish",
    description:
      "A modern, responsive website for spicy pack distributor, showcasing their menu and ambiance. Built with Next.js and Tailwind CSS.",
    image: "/nimkish.jpg",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    links: { live: "https://www.nimkishpt.com/" },
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Selected Work"
          title="Purposefully crafted. Performance obsessed."
          subtitle="A snapshot of what I’ve built recently—clean architecture, intentional UX, and reliable deploys."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              index={i}
              title={p.title}
              description={p.description}
              image={p.image}
              tags={p.tags}
              links={p.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
