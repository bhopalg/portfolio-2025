"use client";

import { Github, Linkedin, LucideIcon, Mail } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import SectionHeader from "@/components/section-header";
import { DETAILS } from "@/constants";
import { useRef } from "react";

interface Social {
  label: string;
  href: string;
  icon: LucideIcon;
  handle: string;
  color: string;
}

const socials: Social[] = [
  {
    label: DETAILS.socials.github.name,
    href: DETAILS.socials.github.href,
    icon: Github,
    handle: DETAILS.socials.github.handle,
    color: "#E5E7EB",
  },
  {
    label: DETAILS.socials.linkedIn.name,
    href: DETAILS.socials.linkedIn.href,
    icon: Linkedin,
    handle: DETAILS.socials.linkedIn.handle,
    color: "#22D3EE",
  },
  {
    label: "Email",
    href: `mailto:${DETAILS.contactEmail}`,
    icon: Mail,
    handle: DETAILS.contactEmail,
    color: "#7C3AED",
  },
];

export default function Socials() {
  return (
    <section
      id="socials"
      className="relative py-20 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Connect"
          title="Let’s build something remarkable"
          subtitle="I’m open to senior IC roles, technical leadership, and high-impact consulting."
        />
        <SocialLinks />
      </div>
    </section>
  );
}

function SocialLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {socials.map((s, i) => (
        <Link
          key={s.label}
          href={s.href}
          className="relative overflow-hidden rounded-xl border border-[#7C3AED33] bg-[#0D0F14] p-5 transition-transform hover:-translate-y-1"
        >
          <SocialLink {...s} index={i} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${s.color}44, transparent 40%)`,
            }}
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  );
}

function SocialLink(s: Social & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const Icon = s.icon;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: s.index * 0.12,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-20"
        style={{
          background: `linear-gradient(135deg, ${s.color}44, transparent 40%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-4">
        <div
          className="grid h-10 w-10 place-items-center rounded-lg"
          style={{
            backgroundColor: `${s.color}22`,
            border: `1px solid ${s.color}55`,
          }}
        >
          <Icon className="h-5 w-5" style={{ color: s.color }} />
        </div>
        <div>
          <div className="font-medium">{s.label}</div>
          <div className="text-sm text-foreground/70">{s.handle}</div>
        </div>
      </div>
    </motion.div>
  );
}
