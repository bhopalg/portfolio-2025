"use client";

import { Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import SectionHeader from "@/components/section-header";
import { Badge } from "@/components/ui/badge";

export default function AboutExperience() {
  return (
    <section id="about" className="relative py-20 scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="About"
          title="11 years building software that ships"
          subtitle="From scrappy MVPs to planet-scale platforms—my work balances developer experience, product velocity, and reliability."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <LeftPanel />
          <RightPanel />
        </div>
        <p className="sr-only">
          Each page has a unique title to ensure accessible route announcements
          in Next.js. [a11y]
        </p>
      </div>
    </section>
  );
}

function RightPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className="absolute -inset-1 rounded-2xl opacity-20 blur-2xl"
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--accent))",
        }}
        aria-hidden="true"
      />
      <div className="relative rounded-2xl border border-[#7C3AED40] bg-[#0D0F14] p-6">
        <Image
          src="/developer-workspace-violet-teal.png"
          alt="Developer workspace"
          width={960}
          height={640}
          className="rounded-xl object-cover"
        />
        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <Stat label="Products shipped" value="30+" />
          <Stat label="Teams led" value="6" />
          <Stat label="Prod deployments" value="1k+" />
        </div>
      </div>
    </motion.div>
  );
}

function LeftPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <p className="text-foreground/90 leading-relaxed">
        I specialize in modern web platforms with Next.js, TypeScript, and
        cloud-native architectures. I love building end-to-end: designing system
        boundaries, crafting delightful UIs, and automating the path to prod.
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          "Next.js",
          "TypeScript",
          "Node.js",
          "Postgres",
          "Edge/Serverless",
          "AI SDK",
          "Tailwind",
          "Testing",
          "Observability",
        ].map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="border border-[#7C3AED66] bg-transparent text-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-accent" />
          <span className="text-sm text-foreground/80">
            11+ years experience
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm text-foreground/80">
            Impact-focused delivery
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[#7C3AED33] bg-background p-4">
      <div className="text-2xl font-semibold text-accent">{value}</div>
      <div className="text-xs text-foreground/70">{label}</div>
    </div>
  );
}
