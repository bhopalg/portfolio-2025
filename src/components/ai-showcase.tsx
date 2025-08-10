"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BrainCircuit,
  Webhook,
  Bot,
  Link2,
  Zap,
  Send,
  MessagesSquare,
  Sparkles,
  ShieldCheck,
  Gauge,
  LucideIcon,
} from "lucide-react";

import SectionHeader from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DETAILS } from "@/constants";

export default function AIShowcase() {
  return (
    <section id="ai" className="relative py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="AI & Automations"
          title="Operational superpowers with n8n + LLMs"
          subtitle="I build pragmatic AI workflows that measurably reduce toil—guardrails, retries, and observability included."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Highlight Card */}
          <div className="relative">
            <div
              className="absolute -inset-1 rounded-2xl opacity-20 blur-2xl"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #22D3EE)",
              }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-2xl border border-[#7C3AED40] bg-background">
              <div className="flex items-center justify-between p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="grid h-10 w-10 place-items-center rounded-lg"
                    style={{
                      backgroundColor: "#7C3AED22",
                      border: "1px solid #7C3AED55",
                    }}
                  >
                    <BrainCircuit className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">n8n AI Automation</h3>
                    <p className="text-sm text-foreground/70">
                      LLM reasoning in the loop. Reliable, observable, and fast.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <Badge className="border border-[#7C3AED66] bg-transparent text-foreground">
                    n8n
                  </Badge>
                  <Badge className="border border-[#7C3AED66] bg-transparent text-foreground">
                    LLM
                  </Badge>
                  <Badge className="border border-[#7C3AED66] bg-transparent text-foreground">
                    Webhooks
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/n8n-ai-automation.png"
                  alt="n8n workflow canvas with AI reasoning steps"
                  width={1400}
                  height={900}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D0F14] to-transparent p-5">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="inline-flex items-center gap-1">
                      <Webhook className="h-4 w-4 text-accent" /> Triggers
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Bot className="h-4 w-4 text-accent" /> LLM node
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Link2 className="h-4 w-4 text-accent" /> Integrations
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Zap className="h-4 w-4 text-accent" /> Retries & guards
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 pt-4 text-sm text-foreground/80">
                Built with idempotent webhooks, rate-limit aware retries, prompt
                guardrails, and per-node observability.
              </div>
            </div>
          </div>

          {/* Work With Me (no form) */}
          <div className="relative overflow-hidden rounded-2xl border border-[#7C3AED40] bg-[#0D0F14]">
            {/* subtle gradient wash for "liquid" vibe */}
            <div
              className="pointer-events-none absolute -inset-px opacity-20"
              style={{
                background:
                  "radial-gradient(80% 50% at 20% 0%, #7C3AED33 0%, transparent 60%), radial-gradient(60% 40% at 100% 100%, #22D3EE33 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="relative p-5 border-b border-[#7C3AED33]">
              <h3 className="font-semibold">Work with me</h3>
              <p className="text-sm text-foreground/70">
                Share your goals and I’ll propose a pragmatic approach,
                timeline, and fixed‑fee options.
              </p>
            </div>

            <div className="relative grid gap-6 p-5">
              {/* Outcomes */}
              <div className="grid gap-2">
                <div className="text-sm font-medium text-accent">
                  Outcomes I optimize for
                </div>
                <ul className="grid gap-2 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-accent" />
                    10–50% reduction in manual ops within 30–60 days
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    Guardrailed prompts, retries, and idempotent webhooks
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />
                    Clear dashboards and logs for every node
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="grid gap-3">
                <div className="text-sm font-medium">Services</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <Feature
                    icon={Webhook}
                    label="Integrations (Teams, Slack, Notion…)"
                  />
                  <Feature icon={Bot} label="LLM prompting + evaluation" />
                  <Feature icon={Link2} label="Enrichment & data stitching" />
                  <Feature icon={Zap} label="Retries, queues, cost controls" />
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="text-[#0D0F14]"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #7C3AED 0%, #22D3EE 100%)",
                  }}
                >
                  <Link
                    href={`mailto:${DETAILS.contactEmail}`}
                    aria-label="Email me to start a conversation"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Start a conversation
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-transparent border border-[#7C3AED66] text-foreground hover:bg-[#7C3AED1a]"
                >
                  <Link
                    href={DETAILS.socials.linkedIn.href}
                    aria-label="Message me on LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessagesSquare className="mr-2 h-4 w-4" />
                    Message on LinkedIn
                  </Link>
                </Button>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-foreground/60">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED66] px-2 py-1">
                  Response time:{" "}
                  <strong className="text-foreground">~24h</strong>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED66] px-2 py-1">
                  Availability:{" "}
                  <strong className="text-foreground">1 project / month</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#7C3AED33] bg-[#0D0F14] px-3 py-2 text-sm">
      <div
        className="grid h-7 w-7 place-items-center rounded-md"
        style={{ backgroundColor: "#22D3EE22", border: "1px solid #22D3EE55" }}
      >
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <span className="text-foreground/85">{label}</span>
    </div>
  );
}
