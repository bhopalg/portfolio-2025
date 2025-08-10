"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

type Links = { live?: string; repo?: string };

export default function ProjectCard({
  index = 0,
  title = "Project title",
  description = "Short description about the project and its outcomes.",
  image = "/project-management-dashboard.png",
  tags = ["Next.js", "TypeScript"],
  links = { live: "#", repo: "#" },
}: {
  index?: number;
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  links?: Links;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, s: 1 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 10; // rotateY
    const rx = (0.5 - py) * 10; // rotateX
    setT({ rx, ry, s: 1.01 });
  }
  function onLeave() {
    setT({ rx: 0, ry: 0, s: 1 });
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: index * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transform: `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${t.s})`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className="group relative rounded-2xl border border-[#7C3AED40] bg-[#0D0F14] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, #7C3AED55 0%, #22D3EE55 50%, transparent 80%)",
          filter: "blur(16px)",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} preview`}
          width={1280}
          height={720}
          className="h-44 sm:h-48 md:h-40 lg:h-44 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent opacity-60" />
      </div>
      <div className="relative p-5 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-[#E5E7EB]/75">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#7C3AED66]/70 px-2 py-0.5 text-xs text-[#E5E7EB]/90"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-1">
          {links.live ? (
            <Link
              href={links.live}
              className="inline-flex items-center gap-1 text-sm text-[#22D3EE] hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </Link>
          ) : null}
          {links.repo ? (
            <Link
              href={links.repo}
              className="inline-flex items-center gap-1 text-sm text-[#E5E7EB] hover:text-[#22D3EE]"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
