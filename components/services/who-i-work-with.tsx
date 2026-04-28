"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flag, Repeat, Waypoints } from "lucide-react";
import ServiceShell from "@/components/services/service-shell";

const personas = [
  {
    title: "You're a founder without a technical co-founder.",
    signal: "You have the product idea and market instinct, but no one senior enough to own the full technical build.",
    need: "You need one person who can define architecture, ship fast, and think like a product partner instead of a task-taker.",
    engagement: "Best for end-to-end builds, MVPs, and founder-led products that need momentum quickly.",
    accentColor: "#3ec9ff",
    icon: Flag,
  },
  {
    title: "You're an operator whose team is doing work a system should be doing.",
    signal: "Your business runs on repetitive, judgment-heavy tasks that keep stealing hours from the team every week.",
    need: "You need workflow automation that can handle messy inputs, multi-step reasoning, and production reliability.",
    engagement: "Best for internal tools, agentic automations, and operational systems that save real time every month.",
    accentColor: "#6ad58a",
    icon: Repeat,
  },
  {
    title: "You're a technical team that needs AI expertise you don't have in-house.",
    signal: "Your product is already live, but the team needs AI capability without slowing down the existing roadmap.",
    need: "You need someone who can slot into the codebase, add AI features properly, and hand the work back cleanly.",
    engagement: "Best for AI integrations, retrieval systems, assistants, and focused product upgrades with low disruption.",
    accentColor: "#c8b4a0",
    icon: Waypoints,
  },
];

export default function WhoIWorkWith() {
  return (
    <ServiceShell
      eyebrow="WHO THIS IS FOR"
      title="Is This For You?"
      description="I work with a small number of founders and operators at a time. Before reading the services, it's worth checking whether your situation is one I can actually move the needle on."
      asideTitle="Not a fit if"
      asideBody="You need a generalist to execute a long backlog. You want someone to build something undefined and figure out the direction as you go. You need a team of 10 — I work lean and close."
      className="pt-12 md:pt-16"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {personas.map((persona, index) => (
          <motion.article
            key={persona.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[1.6rem] border border-[rgba(248,247,245,0.1)] bg-[rgba(255,255,255,0.03)] p-6 sm:p-7"
          >
            <div
              className="pointer-events-none absolute -right-8 top-8 h-20 w-20 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: `${persona.accentColor}20` }}
            />
            <div
              className="absolute inset-x-0 top-0 h-px opacity-70"
              style={{ background: `linear-gradient(90deg, transparent, ${persona.accentColor}, transparent)` }}
            />
            <div className="flex items-center justify-between gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(248,247,245,0.1)] bg-[rgba(255,255,255,0.03)]"
                style={{ color: persona.accentColor }}
              >
                <persona.icon size={16} />
              </div>
              <div
                className="h-1.5 w-10 rounded-full"
                style={{ background: persona.accentColor }}
              />
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#c8b4a0] opacity-70">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-6 max-w-xs text-lg font-semibold leading-snug text-[#e6e1d7] sm:text-xl">
              {persona.title}
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8b4a0] opacity-70">
                  Situation
                </p>
                <p className="mt-2 text-sm leading-7 text-[#e6e1d7]">
                  {persona.signal}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8b4a0] opacity-70">
                  What you need
                </p>
                <p className="mt-2 text-sm leading-7 text-[#c8b4a0]">
                  {persona.need}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8b4a0] opacity-70">
                  Best engagement
                </p>
                <p className="mt-2 text-sm leading-7 text-[#c8b4a0]">
                  {persona.engagement}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </ServiceShell>
  );
}
