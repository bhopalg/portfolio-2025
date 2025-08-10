import SectionHeader from "@/components/section-header";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "n8n AI Automation",
    description:
      "Composable automation with LLM-in-the-loop: webhook triggers, prompt guardrails, and reliable retries that route insights to Slack and Notion.",
    image: "/n8n-ai-automation.png",
    tags: ["n8n", "AI", "Webhooks", "LLM"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "Nebula Boards",
    description:
      "A real-time collaborative task board with multiplayer cursors, CRDT sync, and offline-first UX.",
    image: "/placeholder.png",
    tags: ["Next.js", "Edge Functions", "WebSockets", "CRDT"],
    links: { live: "#", repo: "#" },
  },
  {
    title: "Astra Vision",
    description:
      "AI-powered analytics for SaaS teams. Segment events, auto-build funnels, and forecast churn with explainable models.",
    image: "/ai-analytics-dashboard-neon.png",
    tags: ["TypeScript", "Postgres", "AI SDK", "Prisma"],
    links: { live: "#", repo: "#" },
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
