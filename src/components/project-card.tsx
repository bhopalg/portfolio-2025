"use client";
import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
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
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const letters = Array.from(title);
  const charVariants = {
    rest: { y: 0, rotate: 0 },
    hover: prefersReducedMotion ? { y: 0, rotate: 0 } : { y: -2, rotate: 0.15 },
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative h-full"
    >
      {/* Card */}
      <div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative h-full rounded-2xl border border-[#7C3AED40] bg-primary-foreground overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-200"
      >
        {/* Media */}
        <div className="relative">
          <Image
            src={
              image ||
              "/placeholder.svg?height=720&width=1280&query=project%20preview" ||
              "/placeholder.svg"
            }
            alt={`${title} preview`}
            title={title}
            width={1280}
            height={720}
            className="h-44 sm:h-48 md:h-44 lg:h-48 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-foreground via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="relative p-5 flex flex-col gap-3 grow">
          {/* Animated title */}
          <h3 className="text-lg font-semibold">
            <span className="relative inline-block">
              {letters.map((ch, i) => (
                <motion.span
                  key={`${ch}-${i}`}
                  variants={charVariants}
                  initial="rest"
                  animate={hovered ? "hover" : "rest"}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    delay: hovered ? i * 0.015 : 0,
                  }}
                  className="inline-block will-change-transform"
                  aria-hidden="true"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
              <span className="sr-only">{title}</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0, opacity: 0.7 }}
                animate={{
                  scaleX: hovered ? 1 : 0,
                  opacity: hovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              />
            </span>
          </h3>

          <p className="text-sm text-[#E5E7EB]/75">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#7C3AED66]/70 px-2 py-0.5 text-xs text-foreground/90"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions pinned to bottom */}
          <div className="flex items-center gap-3 pt-1 mt-auto">
            {links.live ? (
              <Link
                href={links.live}
                target="_blank"
                className="inline-flex items-center gap-1 text-sm text-accent hover:opacity-90"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </Link>
            ) : null}
            {links.repo ? (
              <Link
                target="_blank"
                href={links.repo}
                className="inline-flex items-center gap-1 text-sm text-foreground hover:text-accent"
              >
                <Github className="h-4 w-4" />
                Code
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
