"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DETAILS } from "@/constants";

export default function Hero() {
  return (
    <section
      id="content"
      className="relative pt-10 sm:pt-16 md:pt-24 pb-14 md:pb-24"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-[1.25fr_1fr]">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                <span className="block text-secondary-foreground">
                  {DETAILS.name}
                </span>
                <span
                  className="block mt-2 bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)",
                  }}
                >
                  {DETAILS.role}
                </span>
              </h1>
              <p className="text-[#E5E7EB]/80 text-base sm:text-lg md:text-xl max-w-prose">
                {DETAILS.tagLine}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="text-background"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
                  }}
                >
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-2"
                  >
                    Explore projects <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-transparent border border-[#7C3AED66] text-foreground hover:bg-[#7C3AED1a]"
                >
                  <Link href={`mailto:${DETAILS.contactEmail}`}>
                    Get in touch
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            {/* Orbiting gradient ring */}
            <motion.div
              className="absolute inset-0 -z-10 mx-auto h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full"
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, var(--primary) 0deg, var(--accent) 120deg, transparent 240deg, var(--primary) 360deg)",
                filter: "blur(40px)",
                opacity: 0.6,
              }}
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
              aria-hidden="true"
            />
            <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-2xl border border-[#7C3AED33] bg-primary/60 backdrop-blur overflow-hidden">
              <Image
                src="/developer-portrait-neon.png"
                alt={`Portrait of ${DETAILS.name}`}
                width={960}
                height={960}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-foreground via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 w-full p-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0D0F14cc] px-3 py-1 text-xs">
                  <span className="h-2 w-2 rounded-ful bg-accentl" />
                  Building with Next.js and TypeScript
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
