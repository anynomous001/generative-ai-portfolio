'use client'

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, Bot, Sparkles, Boxes, Flag, Repeat, Waypoints } from "lucide-react"

const MONO = "var(--font-geist-mono, monospace)"

/* ── Corner brackets ──────────────────────────────────────────── */
const cbPos = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
]
function CB({ color = "rgba(200,180,160,0.35)" }: { color?: string }) {
  return (
    <>
      {cbPos.map((pos, i) => (
        <div key={i} className={`absolute h-3 w-3 ${pos}`} style={{ borderColor: color }} />
      ))}
    </>
  )
}

/* ── Data ─────────────────────────────────────────────────────── */
const services = [
  {
    index: "01",
    label: "END-TO-END BUILD",
    heading: "You have the idea. I build the product.",
    summary: "For founders who want one person to own the entire AI product stack — architecture to deployment.",
    body: "I handle the full build: architecture decisions, Python backend, Next.js frontend, LangGraph AI layer, and AWS deployment. The goal is not a prototype or a stitched-together demo. It is a production-ready product you can ship, test with real users, and build on confidently.",
    deliverables: "A deployed product, a codebase you own, clear documentation, and a system built with long-term maintainability in mind.",
    businessCase: "Agency builds for AI products often stretch to 5–8 months and ₹25–45L. This model gets you to market materially faster and with less coordination drag.",
    bestFit: "Pre-seed or seed founders with a validated idea, a short runway, and no technical co-founder yet.",
    timeline: "8–12 wks",
    scope: "Full product build",
    examples: ["Founder-led MVP", "Investor demo build", "AI-first SaaS"],
    accentColor: "#3ec9ff",
    icon: Rocket,
  },
  {
    index: "02",
    label: "AUTOMATION SYSTEMS",
    heading: "Your team should be doing the work only humans can do.",
    summary: "For teams with repeatable operational work that simple automations cannot handle cleanly or reliably.",
    body: "I build agentic systems for real business workflows: multi-step reasoning, messy inputs, internal tooling, and custom integrations. This is for processes where Zapier starts breaking because the work requires judgment, context, or non-trivial orchestration.",
    deliverables: "A workflow taken off your team's plate, production automation that runs daily, and documentation that explains how the system works.",
    businessCase: "If team members spend hours daily on repeatable work, the cost of not automating compounds quickly. A well-built system usually pays for itself in a few months.",
    bestFit: "Operators, agencies, and team-heavy businesses with one painful workflow they want removed for good.",
    timeline: "3–8 wks",
    scope: "Workflow automation",
    examples: ["Lead processing", "Ops copilots", "Back-office agents"],
    accentColor: "#6ad58a",
    icon: Bot,
  },
  {
    index: "03",
    label: "AI FEATURE INTEGRATION",
    heading: "Your product already works. Let's make it intelligent.",
    summary: "For teams that do not need a rebuild — just one strong AI feature integrated properly into the existing product.",
    body: "I work inside your codebase to add LLM-powered capabilities — retrieval, assistants, document Q&A, semantic search, summarisation — without destabilising what users already rely on. The integration is tested, documented, and handed back cleanly.",
    deliverables: "A live AI feature in your product, maintainable implementation, and handoff notes so your team can keep iterating after launch.",
    businessCase: "A meaningful AI feature can improve retention, sharpen demos, and turn roadmap promises into something sales and users can experience immediately.",
    bestFit: "Product teams with live software, real users, and a need for focused AI capability without hiring a specialist full-time.",
    timeline: "2–6 wks",
    scope: "Targeted integration",
    examples: ["Semantic search", "Document Q&A", "Product copilot"],
    accentColor: "#c8b4a0",
    icon: Sparkles,
  },
  {
    index: "04",
    label: "FIXED-SCOPE MVP",
    heading: "Scope fixed. Timeline fixed. 6–8 weeks. No surprises.",
    summary: "For founders who need a defined scope, defined timeline, and a live product by a real deadline.",
    body: "We set the scope together in week one: what is in, what is out, and what done means. Then I build to that agreement. By the end, you have a functional deployed product with core features working and ready for real users.",
    deliverables: "A live URL, a codebase you own, working core features, and documentation to support a future hire or investor walkthrough.",
    businessCase: "A working MVP changes investor conversations, sharpens market signal, and avoids the open-ended burn that comes with vague freelance builds.",
    bestFit: "Founders with a clear idea, a hard deadline, and very little appetite for open-ended execution.",
    timeline: "6–8 wks",
    scope: "Fixed-scope MVP",
    examples: ["Pitch deadline", "Cohort launch", "Fast validation"],
    accentColor: "#f0c674",
    icon: Boxes,
  },
]

const personas = [
  {
    icon: Flag,
    accentColor: "#3ec9ff",
    title: "Founder without a technical co-founder",
    situation: "You have the product idea and market instinct, but no one senior enough to own the full technical build.",
    need: "One person who can define architecture, ship fast, and think like a product partner — not a task-taker.",
    fit: "End-to-end builds, MVPs, and founder-led products that need momentum quickly.",
  },
  {
    icon: Repeat,
    accentColor: "#6ad58a",
    title: "Operator with a manual workflow problem",
    situation: "Your business runs on repetitive, judgment-heavy tasks that keep stealing hours from the team every week.",
    need: "Workflow automation that can handle messy inputs, multi-step reasoning, and production reliability.",
    fit: "Internal tools, agentic automations, and operational systems that save real time every month.",
  },
  {
    icon: Waypoints,
    accentColor: "#c8b4a0",
    title: "Technical team that needs AI expertise",
    situation: "Your product is already live, but the team needs AI capability without slowing down the existing roadmap.",
    need: "Someone who can slot into the codebase, add AI features properly, and hand the work back cleanly.",
    fit: "AI integrations, retrieval systems, assistants, and focused product upgrades with low disruption.",
  },
]

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1",
    body: "We spend the first week understanding the actual problem — not the solution you have in mind, but the business outcome you need. What does success look like in 90 days? What's the cost of not solving this? This shapes everything that comes after.",
  },
  {
    number: "02",
    title: "Scope & Proposal",
    duration: "End of Week 1",
    body: "I come back with a written scope: what we're building, what we're not, the timeline, and the cost. Everything is defined before work starts. You don't commit to anything until you agree the scope is right.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Weekly check-ins",
    body: "Work happens in weekly cycles. Every week you see progress — a working feature, a deployed integration, a tested workflow. No disappearing for weeks. You're in the loop without needing to manage the details.",
  },
  {
    number: "04",
    title: "Ship & Hand Off",
    duration: "At agreed deadline",
    body: "The product is deployed and working. You get the codebase, documentation, and a walkthrough session. If you want to continue iterating, we scope what's next. If you're taking it in-house, you have everything you need.",
  },
]

/* ── Page ─────────────────────────────────────────────────────── */
export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]
  const ActiveIcon = active.icon

  return (
    <div
      className="min-h-dvh bg-[#050505] text-[#e6e1d7] overflow-x-hidden"
      style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}
    >
      {/* subtle grid bg */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundSize: "44px 44px",
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.018) 1px,transparent 1px)," +
            "linear-gradient(to bottom,rgba(255,255,255,0.018) 1px,transparent 1px)",
        }}
      />

      {/* ── Nav ───────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 z-50 w-full border-b border-white/5"
        style={{ background: "rgba(5,5,5,0.82)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3 transition-colors hover:text-[#e6e1d7]"
            style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.2em", color: "#c8b4a0" }}
          >
            <span>←</span>
            <span className="uppercase">Portfolio</span>
          </Link>

          <div
            className="hidden items-center gap-2 sm:flex"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.22em", color: "#c8b4a0" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }} />
            <span className="uppercase">Avail · Open</span>
          </div>

          <Link
            href="https://calendly.com/chakrobortypritam1/booking-link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 px-3 py-1.5 text-[10px] transition-all hover:border-[rgba(200,180,160,0.4)] hover:bg-[rgba(200,180,160,0.07)] hover:text-[#e6e1d7] sm:px-4 sm:py-2 sm:text-[11px]"
            style={{ fontFamily: MONO, letterSpacing: "0.18em", color: "#c8b4a0" }}
          >
            BOOK A CALL →
          </Link>
        </div>
      </nav>

      {/* ── Main ──────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl space-y-12 px-4 pt-24 pb-20 sm:space-y-16 sm:px-6 sm:pt-28 sm:pb-28 md:space-y-20">

        {/* ══════════════════════════════════════════════════════
            1 — INTRO
        ══════════════════════════════════════════════════════ */}
        <motion.div
          className="relative overflow-hidden border border-white/8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <CB />
          <div
            className="flex items-center justify-between border-b border-white/8 px-4 py-3 sm:px-6 md:px-8"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Services // 2026</span>
            <span className="uppercase opacity-50">Kolkata, India</span>
          </div>

          <div className="grid gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-2xl font-semibold leading-snug tracking-tight text-[#e6e1d7] sm:text-3xl md:text-4xl lg:text-5xl">
                I build AI products and automation systems for founders and operators.
              </p>
              <p className="mt-3 max-w-xl text-sm text-[#c8b4a0] sm:mt-4 sm:text-base md:text-lg">
                If you have a problem that fits, here's how we work — scope, timeline, and what you walk away with.
              </p>
            </div>

            {/* quick stats sidebar */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 lg:flex lg:flex-col lg:justify-center lg:gap-4">
              {[
                { value: "4", label: "Engagement types" },
                { value: "2–12", label: "Weeks to ship" },
                { value: "100%", label: "Production-grade" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-0 flex-col border border-white/8 px-2 py-2 sm:px-3 sm:py-3 md:px-4 lg:px-5 lg:py-4"
                >
                  <span className="text-base font-semibold text-[#e6e1d7] sm:text-lg md:text-xl lg:text-2xl">{stat.value}</span>
                  <span style={{ fontFamily: MONO, fontSize: "8px", letterSpacing: "0.12em", color: "#c8b4a0" }} className="mt-0.5 uppercase leading-tight sm:mt-1 sm:text-[9px] sm:tracking-[0.14em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            2 — WHO THIS IS FOR
        ══════════════════════════════════════════════════════ */}
        <div className="relative overflow-hidden border border-white/8">
          <CB />
          <div
            className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-4 py-3 sm:px-6 md:px-8"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Who This Is For</span>
            <span className="uppercase opacity-50">3 profiles</span>
          </div>

          <div className="grid gap-0 divide-y divide-white/5 md:grid-cols-3 md:divide-x md:divide-y-0 px-0">
            {personas.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  className="group relative flex flex-col gap-4 px-4 py-6 transition-colors hover:bg-white/[0.015] sm:gap-5 sm:px-6 sm:py-8 md:px-7"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  {/* top accent line on hover */}
                  <div
                    className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, transparent, ${p.accentColor}, transparent)` }}
                  />

                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center border border-white/10"
                      style={{ color: p.accentColor }}
                    >
                      <Icon size={15} />
                    </div>
                    <span
                      style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.4)" }}
                      className="uppercase"
                    >
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold leading-snug text-[#e6e1d7] sm:text-lg md:text-xl">
                    {p.title}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.5)" }} className="mb-2 uppercase">
                        Situation
                      </p>
                      <p className="text-base leading-7 text-[#c8b4a0]">{p.situation}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.5)" }} className="mb-2 uppercase">
                        What you need
                      </p>
                      <p className="text-base leading-7 text-[#c8b4a0]">{p.need}</p>
                    </div>
                    <div
                      className="border border-white/8 px-2.5 py-1.5 text-xs leading-6 sm:px-3 sm:py-2 sm:text-sm"
                      style={{ color: p.accentColor, fontFamily: MONO, letterSpacing: "0.08em" }}
                    >
                      → {p.fit}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* not a fit footer */}
          <div
            className="border-t border-white/8 bg-white/[0.01] px-4 py-3 sm:px-6 sm:py-4 md:px-8"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.18em", color: "rgba(200,180,160,0.4)" }}
          >
            <span className="uppercase">Not a fit if:</span>
            <span className="mt-1 block sm:ml-3 sm:mt-0 sm:inline">you need a generalist backlog executor, an undefined brief, or a team of 10.</span>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            3 — SERVICES (interactive)
        ══════════════════════════════════════════════════════ */}
        <div className="relative overflow-hidden border border-white/8">
          <CB />
          <div
            className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-4 py-3 sm:px-6 md:px-8"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Engagement Types</span>
            <span className="uppercase opacity-50">4 active</span>
          </div>

          {/* ── Mobile accordion (< lg) ──────────────────────── */}
          <div className="divide-y divide-white/5 lg:hidden">
            {services.map((s, i) => {
              const isOpen = i === activeIndex
              const Icon = s.icon
              return (
                <div key={s.label}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="relative w-full px-4 py-3.5 text-left transition-colors sm:px-5 sm:py-4"
                    style={{ background: isOpen ? "rgba(255,255,255,0.03)" : "transparent" }}
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-px"
                      style={{
                        background: `linear-gradient(180deg, transparent, ${s.accentColor}, transparent)`,
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 0.3s",
                      }}
                    />
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-white/10"
                        style={{ color: s.accentColor }}
                      >
                        <Icon size={13} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="uppercase" style={{ fontFamily: MONO, fontSize: "8px", letterSpacing: "0.18em", color: s.accentColor }}>
                          {s.label}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold leading-snug text-[#e6e1d7] sm:text-sm md:text-base">
                          {s.heading}
                        </p>
                      </div>
                      <span
                        className="flex-shrink-0 text-[#c8b4a0] opacity-40"
                        style={{ fontFamily: MONO, fontSize: "11px", transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none", display: "inline-block" }}
                      >
                        ↓
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`${s.label}-detail`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.accentColor}50, transparent)` }} />
                        <div className="flex flex-col gap-3 px-4 pb-5 pt-3 sm:gap-4 sm:px-5 sm:pb-6 sm:pt-4 md:px-6">
                          <p className="text-xs leading-6 text-[#c8b4a0] sm:text-sm sm:leading-7 md:text-base md:leading-8">{s.body}</p>
                          <div className="grid gap-2 sm:grid-cols-2">
                            <div className="border border-white/8 bg-white/[0.02] px-4 py-3 sm:col-span-2">
                              <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.18em", color: "rgba(200,180,160,0.5)" }} className="mb-2 uppercase">What you get</p>
                              <p className="text-sm leading-6 text-[#e6e1d7]">{s.deliverables}</p>
                            </div>
                            <div className="border border-white/8 bg-white/[0.02] px-4 py-3">
                              <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.18em", color: "rgba(200,180,160,0.5)" }} className="mb-2 uppercase">Best fit</p>
                              <p className="text-sm leading-6 text-[#c8b4a0]">{s.bestFit}</p>
                            </div>
                            <div className="border border-white/8 bg-white/[0.02] px-4 py-3">
                              <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.18em", color: "rgba(200,180,160,0.5)" }} className="mb-2 uppercase">Why it matters</p>
                              <p className="text-sm leading-6 text-[#c8b4a0] italic">{s.businessCase}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-3">
                            <div className="flex flex-wrap gap-1.5">
                              {s.examples.map((ex) => (
                                <span key={ex} className="border border-white/8 px-2.5 py-1 text-xs text-[#c8b4a0]" style={{ fontFamily: MONO, letterSpacing: "0.08em" }}>
                                  {ex}
                                </span>
                              ))}
                            </div>
                            <span className="border px-2.5 py-1 text-xs" style={{ fontFamily: MONO, letterSpacing: "0.12em", borderColor: `${s.accentColor}50`, color: s.accentColor }}>
                              {s.timeline}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* ── Desktop side-by-side (>= lg) ─────────────────── */}
          <div className="hidden lg:grid lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:divide-x lg:divide-white/5">
            {/* left rail */}
            <div className="divide-y divide-white/5">
              {services.map((s, i) => {
                const isActive = i === activeIndex
                const Icon = s.icon
                return (
                  <motion.button
                    key={s.label}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className="group relative w-full px-6 py-6 text-left transition-colors lg:px-7"
                    style={{ background: isActive ? "rgba(255,255,255,0.03)" : "transparent" }}
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-px transition-opacity duration-300"
                      style={{ background: `linear-gradient(180deg, transparent, ${s.accentColor}, transparent)`, opacity: isActive ? 1 : 0 }}
                    />
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-white/10" style={{ color: s.accentColor }}>
                        <Icon size={13} />
                      </div>
                      <span style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.18em", color: "rgba(200,180,160,0.4)" }} className="mt-1 uppercase">
                        {s.index}
                      </span>
                    </div>
                    <p className="mt-4 uppercase" style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.22em", color: s.accentColor }}>
                      {s.label}
                    </p>
                    <p className="mt-2 text-base font-semibold leading-snug text-[#e6e1d7]">{s.heading}</p>
                    <div className="mt-4 flex gap-2">
                      <span className="border border-white/8 px-2 py-1 text-[#c8b4a0]" style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.14em" }}>
                        {s.timeline}
                      </span>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* detail panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
                className="relative"
              >
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${active.accentColor}60, transparent)` }} />
                <div className="flex flex-col gap-6 px-7 py-8 xl:py-9">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-white/10" style={{ color: active.accentColor }}>
                      <ActiveIcon size={16} />
                    </div>
                    <div>
                      <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.22em", color: active.accentColor }} className="uppercase">
                        {active.label}
                      </p>
                      <h2 className="mt-1.5 text-xl font-semibold leading-snug text-[#e6e1d7] xl:text-2xl">{active.heading}</h2>
                    </div>
                  </div>
                  <p className="text-base leading-8 text-[#c8b4a0] xl:text-lg">{active.body}</p>
                  <div className="grid gap-3 xl:grid-cols-3">
                    <div className="border border-white/8 bg-white/[0.02] px-5 py-4 xl:col-span-2">
                      <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.5)" }} className="mb-3 uppercase">What you get</p>
                      <p className="text-base leading-7 text-[#e6e1d7]">{active.deliverables}</p>
                    </div>
                    <div className="border border-white/8 bg-white/[0.02] px-5 py-4">
                      <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.5)" }} className="mb-3 uppercase">Best fit</p>
                      <p className="text-base leading-7 text-[#c8b4a0]">{active.bestFit}</p>
                    </div>
                    <div className="border border-white/8 bg-white/[0.02] px-5 py-4 xl:col-span-3">
                      <p style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.5)" }} className="mb-3 uppercase">Why it matters</p>
                      <p className="text-base leading-7 text-[#c8b4a0] italic">{active.businessCase}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-5">
                    <div className="flex flex-wrap gap-2">
                      {active.examples.map((ex) => (
                        <span key={ex} className="border border-white/8 px-3 py-1.5 text-sm text-[#c8b4a0]" style={{ fontFamily: MONO, letterSpacing: "0.08em" }}>
                          {ex}
                        </span>
                      ))}
                    </div>
                    <span className="border px-3 py-1.5 text-sm" style={{ fontFamily: MONO, letterSpacing: "0.12em", borderColor: `${active.accentColor}50`, color: active.accentColor }}>
                      {active.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            4 — PROCESS
        ══════════════════════════════════════════════════════ */}
        <div className="relative overflow-hidden border border-white/8">
          <CB />
          <div
            className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-4 py-3 sm:px-6 md:px-8"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Mission Sequence</span>
            <span className="uppercase" style={{ color: "#c8b4a0", animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}>
              T-Minus: On Request
            </span>
          </div>

          <div className="grid gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:grid-cols-[14rem_1fr]">
            {/* sidebar */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:pt-1">
              {["Defined scope", "Weekly visibility", "No open-ended burn", "Full handoff"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border border-white/8 px-3 py-2.5 text-sm text-[#c8b4a0] sm:px-4 sm:py-3 sm:text-base"
                >
                  <span style={{ color: "rgba(200,180,160,0.4)" }}>→</span>
                  {item}
                </div>
              ))}
            </div>

            {/* timeline */}
            <div className="relative">
              <div className="absolute bottom-0 left-3 top-2 w-px bg-white/8 sm:left-4 md:left-5" />
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    className="relative border border-white/8 bg-white/[0.015] ml-8 sm:ml-10 md:ml-12"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.38, delay: i * 0.08 }}
                  >
                    {/* timeline dot */}
                    <div
                      className="absolute -left-[1.65rem] top-6 flex h-5 w-5 items-center justify-center border border-white/15 bg-[#050505] sm:-left-[2.15rem] sm:h-5 sm:w-5 md:-left-[2.65rem] md:h-6 md:w-6"
                    >
                      <span className="h-1.5 w-1.5 bg-[rgba(200,180,160,0.5)]" />
                    </div>

                    <div className="flex flex-wrap items-start justify-between gap-2 px-3 py-4 sm:gap-3 sm:px-5 sm:py-5 md:px-6">
                      <div className="flex items-baseline gap-3 sm:gap-4">
                        <span
                          className="text-3xl font-bold leading-none opacity-15"
                          style={{ color: "#c8b4a0", fontVariantNumeric: "tabular-nums" }}
                        >
                          {step.number}
                        </span>
                        <h3 className="text-base font-semibold text-[#e6e1d7] sm:text-lg md:text-xl">{step.title}</h3>
                      </div>
                      <span
                        className="border border-white/10 px-3 py-1 text-[#c8b4a0]"
                        style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.16em" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="px-3 pb-4 text-xs leading-7 text-[#c8b4a0] sm:px-5 sm:pb-5 sm:text-sm sm:leading-8 md:px-6 md:pb-6 md:text-base">{step.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            5 — CTA
        ══════════════════════════════════════════════════════ */}
        <motion.div
          className="relative overflow-hidden border border-white/8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <CB />
          <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
            <p
              className="uppercase"
              style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
            >
              To Start
            </p>
            <p className="mt-3 max-w-2xl text-lg font-semibold text-[#e6e1d7] sm:mt-4 sm:text-xl md:text-2xl">
              Book a 30-minute discovery call. No pitch, no proposal until I understand what you're actually trying to solve.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                href="https://calendly.com/chakrobortypritam1/booking-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border px-5 py-3 text-sm font-semibold transition-all hover:bg-[rgba(200,180,160,0.08)] sm:px-7 sm:py-3.5 sm:text-base"
                style={{
                  borderColor: "rgba(200,180,160,0.45)",
                  color: "#e6e1d7",
                  fontFamily: MONO,
                  letterSpacing: "0.1em",
                }}
              >
                BOOK A CALL →
              </Link>
              <Link
                href="mailto:chakrobortypritam.work@gmail.com"
                className="inline-flex items-center justify-center gap-3 border border-white/10 px-5 py-3 text-sm transition-all hover:bg-white/[0.03] sm:px-7 sm:py-3.5 sm:text-base"
                style={{ color: "#c8b4a0", fontFamily: MONO, letterSpacing: "0.1em" }}
              >
                SEND AN EMAIL
              </Link>
            </div>
          </div>

          <div
            className="absolute bottom-3 right-5 hidden sm:block"
            style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.3)" }}
          >
            LANGGRAPH // PRODUCTION-GRADE
          </div>
        </motion.div>

      </div>
    </div>
  )
}
