"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type AnimatedNumberProps = {
  end?: number;
  durationMs?: number;
  decimals?: number;
  compact?: boolean;
  suffix?: string;
  prefix?: string;
  className?: string;
  ariaLabel?: string;
};

export default function AnimatedNumber({
  end = 100,
  durationMs = 1200,
  decimals = 0,
  compact = false,
  suffix = "",
  prefix = "",
  className = "",
  ariaLabel,
}: AnimatedNumberProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });
  const [val, setVal] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    if (prefersReducedMotion) {
      setVal(end);
      return;
    }

    const start = 0;
    const change = end - start;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      setVal(start + change * eased);
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVal(end);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReducedMotion, end, durationMs]);

  const formatter = compact
    ? new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: Math.min(1, decimals),
      })
    : new Intl.NumberFormat("en", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  const display = `${prefix}${formatter.format(val)}${suffix}`;

  return (
    <span
      ref={containerRef}
      className={`tabular-nums ${className}`}
      aria-label={ariaLabel ?? `${prefix}${formatter.format(end)}${suffix}`}
    >
      {display}
    </span>
  );
}
