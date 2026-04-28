"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Boxes, Rocket, Sparkles } from "lucide-react";
import ServiceShell from "@/components/services/service-shell";

const services = [
  {
    label: "END-TO-END BUILD",
    heading: "You have the idea. I build the product.",
    summary: "For founders who want one person to take ownership of the entire AI product stack, from product architecture to deployment.",
    body: "I handle the full build: architecture decisions, Python backend, Next.js frontend, LangGraph AI layer, and AWS deployment. The goal is not a prototype or a stitched-together demo. It is a production-ready product you can ship, test with users, and build on confidently.",
    deliverables: "A deployed product, a codebase you own, clear documentation, and a system built with long-term maintainability in mind.",
    businessCase: "Agency builds for AI products often stretch to 5-8 months and ₹25-45L. This model gets you to market materially faster and with less coordination drag.",
    bestFit: "Pre-seed or seed founders with a validated idea, a short runway, and no technical co-founder yet.",
    timeline: "8-12 weeks",
    scope: "Full product build",
    examples: ["Founder-led MVP", "Investor demo build", "AI-first SaaS product"],
    accentColor: "#3ec9ff",
    icon: Rocket,
  },
  {
    label: "AUTOMATION SYSTEMS",
    heading: "Your team should be doing the work only humans can do.",
    summary: "For teams with repeatable operational work that simple automations cannot handle cleanly or reliably.",
    body: "I build agentic systems for real business workflows: multi-step reasoning, messy inputs, internal tooling, and custom integrations. This is for processes where Zapier starts breaking because the work requires judgment, context, or non-trivial orchestration.",
    deliverables: "A workflow taken off your team's plate, production automation that runs daily, and documentation that explains how the system works.",
    businessCase: "If several team members spend hours every day on repeatable work, the cost of not automating compounds quickly. A well-built system usually pays for itself in a few months.",
    bestFit: "Operators, agencies, and team-heavy businesses with one painful workflow they want removed for good.",
    timeline: "3-8 weeks",
    scope: "Workflow automation",
    examples: ["Lead processing", "Ops copilots", "Back-office agent flows"],
    accentColor: "#6ad58a",
    icon: Bot,
  },
  {
    label: "AI FEATURE INTEGRATION",
    heading: "Your product already works. Let's make it intelligent.",
    summary: "For teams that do not need a rebuild, just one strong AI feature integrated properly into the existing product.",
    body: "I work inside your codebase to add LLM-powered capabilities like retrieval, assistants, document Q&A, semantic search, and summarisation without destabilizing what users already depend on. The integration is tested, documented, and handed back cleanly.",
    deliverables: "A live AI feature in your product, maintainable implementation, and handoff notes so your team can keep iterating after launch.",
    businessCase: "A meaningful AI feature can improve retention, create sharper demos, and turn roadmap promises into something sales and users can experience immediately.",
    bestFit: "Product teams with live software, real users, and a need for focused AI capability without hiring a specialist full-time.",
    timeline: "2-6 weeks",
    scope: "Targeted integration",
    examples: ["Semantic search", "Document Q&A", "Product copilot"],
    accentColor: "#c8b4a0",
    icon: Sparkles,
  },
  {
    label: "MVP IN FIXED TIME",
    heading: "A real product, deployed, in 6–8 weeks. Scope fixed. Timeline fixed. No surprises.",
    summary: "For founders who need a defined scope, defined timeline, and a live product by a real deadline.",
    body: "We set the scope together in week one: what is in, what is out, and what done means. Then I build to that agreement. By the end, you have a functional deployed product with core features working and ready for real users.",
    deliverables: "A live URL, a codebase you own, working core features, and enough documentation to support a future hire or investor walkthrough.",
    businessCase: "A working MVP changes investor conversations, sharpens market signal, and avoids the open-ended burn that usually comes with vague freelance builds.",
    bestFit: "Founders with a clear idea, a hard deadline, and very little appetite for open-ended execution.",
    timeline: "6-8 weeks",
    scope: "Fixed-scope MVP",
    examples: ["Pitch deadline", "Cohort launch", "Fast validation build"],
    accentColor: "#f0c674",
    icon: Boxes,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  return (
    <ServiceShell
      eyebrow="SERVICES"
      title="What We Can Build Together"
      description="I work with founders building AI products from scratch and operators who need to automate serious workflows. Here's what that looks like in practice, and what it does for your business."
      asideTitle="How to read this"
      asideBody="Start with the left rail and pick the offer that sounds closest to your situation. The right side gives you the actual structure: scope, timeline, outcome, and where it fits best."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        <div className="space-y-3">
          {services.map((service, index) => {
            const isActive = index === activeIndex;
            const ItemIcon = service.icon;

            return (
              <motion.button
                key={service.label}
                type="button"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onClick={() => setActiveIndex(index)}
                className="group relative w-full overflow-hidden rounded-[1.4rem] border p-5 text-left transition-colors sm:p-6"
                style={{
                  borderColor: isActive ? "rgba(248,247,245,0.18)" : "rgba(248,247,245,0.1)",
                  background: isActive ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.03)",
                }}
              >
                <div
                  className="absolute inset-y-0 left-0 w-px"
                  style={{
                    background: `linear-gradient(180deg, transparent, ${service.accentColor}, transparent)`,
                  }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(248,247,245,0.1)]"
                    style={{ color: service.accentColor }}
                  >
                    <ItemIcon size={16} />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#c8b4a0] opacity-60">
                    0{index + 1}
                  </span>
                </div>

                <p
                  className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: service.accentColor }}
                >
                  {service.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-[#e6e1d7]">
                  {service.heading}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#c8b4a0]">
                  {service.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-[#c8b4a0]">
                  <span className="rounded-full border border-[rgba(248,247,245,0.08)] px-2.5 py-1">
                    {service.timeline}
                  </span>
                  <span className="rounded-full border border-[rgba(248,247,245,0.08)] px-2.5 py-1">
                    {service.scope}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={activeService.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-[1.8rem] border border-[rgba(248,247,245,0.1)] bg-[rgba(255,255,255,0.03)]"
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background: `linear-gradient(90deg, transparent, ${activeService.accentColor}, transparent)`,
              }}
            />

            <div className="grid gap-6 p-6 sm:p-8 xl:grid-cols-[minmax(0,1fr)_18rem]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(248,247,245,0.1)]"
                    style={{ color: activeService.accentColor }}
                  >
                    <ActiveIcon size={18} />
                  </div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.24em]"
                    style={{ color: activeService.accentColor }}
                  >
                    {activeService.label}
                  </p>
                </div>

                <h3 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight text-[#e6e1d7] sm:text-3xl md:text-[2.2rem]">
                  {activeService.heading}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c8b4a0] sm:text-base sm:leading-8">
                  {activeService.body}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-[rgba(248,247,245,0.08)] bg-[rgba(255,255,255,0.025)] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8b4a0]">
                      What you get
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#e6e1d7]">
                      {activeService.deliverables}
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[rgba(248,247,245,0.08)] bg-[rgba(255,255,255,0.025)] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8b4a0]">
                      Why it matters
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#e6e1d7]">
                      {activeService.businessCase}
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[rgba(248,247,245,0.08)] bg-[rgba(255,255,255,0.025)] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8b4a0]">
                      Best fit
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#e6e1d7]">
                      {activeService.bestFit}
                    </p>
                  </div>

                  <div className="rounded-[1.25rem] border border-[rgba(248,247,245,0.08)] bg-[rgba(255,255,255,0.025)] p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c8b4a0]">
                      Typical use cases
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeService.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full border border-[rgba(248,247,245,0.08)] px-3 py-1.5 text-xs text-[#e6e1d7]"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(248,247,245,0.08)] bg-[rgba(255,255,255,0.025)] p-5">
                <div
                  className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{ borderColor: `${activeService.accentColor}40` }}
                />
                <div
                  className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                  style={{ borderColor: `${activeService.accentColor}20` }}
                />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 flex h-full min-h-[16rem] flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8b4a0]">
                      At a glance
                    </p>
                    <span
                      className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em]"
                      style={{
                        borderColor: `${activeService.accentColor}40`,
                        color: activeService.accentColor,
                      }}
                    >
                      {activeService.timeline}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div
                      className="inline-flex rounded-full border px-3 py-1.5 text-xs"
                      style={{
                        borderColor: `${activeService.accentColor}40`,
                        color: activeService.accentColor,
                      }}
                    >
                      {activeService.scope}
                    </div>
                    <div className="space-y-3">
                      {activeService.examples.map((example, index) => (
                        <motion.div
                          key={example}
                          animate={{ x: [0, index % 2 === 0 ? 8 : -8, 0] }}
                          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
                          className="rounded-[1rem] border border-[rgba(248,247,245,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-3 text-sm text-[#e6e1d7]"
                        >
                          {example}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <p className="max-w-xs text-sm leading-7 text-[#c8b4a0]">
                    {activeService.summary}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </ServiceShell>
  );
}
