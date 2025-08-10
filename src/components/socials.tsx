import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import SectionHeader from "@/components/section-header";

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
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/your-handle",
      icon: Github,
      handle: "@your-handle",
      color: "#E5E7EB",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-handle",
      icon: Linkedin,
      handle: "in/your-handle",
      color: "#22D3EE",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
      icon: Mail,
      handle: "hello@example.com",
      color: "#7C3AED",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.label}
            href={s.href}
            className="relative overflow-hidden rounded-xl border border-[#7C3AED33] bg-[#0D0F14] p-5 transition-transform hover:-translate-y-1"
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
                <div className="text-sm text-[#E5E7EB]/70">{s.handle}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
