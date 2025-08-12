"use client";

import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import { useRef } from "react";

type Align = "left" | "center";

export default function SectionHeader({
  eyebrow = "Section",
  title = "Section title",
  subtitle = "Section subtitle",
  align = "center",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: Align;
}) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        align === "center" ? "text-center" : "text-left",
      )}
    >
      <Eyebrow eyebrow={eyebrow} align={align} />
      <Title title={title} />
      {subtitle && <Subtitle subtitle={subtitle} align={align} />}
    </div>
  );
}

function Subtitle({ subtitle, align }: { subtitle: string; align?: Align }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={cn(
        "mt-3 text-sm sm:text-base text-foreground/75",
        align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
      )}
    >
      {subtitle}
    </motion.p>
  );
}

function Title({ title }: { title: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="text-2xl mt-3 sm:text-3xl md:text-4xl font-semibold tracking-tight"
    >
      {title}
    </motion.h2>
  );
}

function Eyebrow({ eyebrow, align }: { eyebrow: string; align?: Align }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-secondary-foreground/75",
        align === "center" ? "mx-auto" : "",
      )}
      style={{ borderColor: "#7C3AED66" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {eyebrow}
    </motion.div>
  );
}
