"use client"

import { motion } from "framer-motion"

const MONO = "var(--font-geist-mono, monospace)"

const cbPos = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
]
function CB() {
  return (
    <>
      {cbPos.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute h-3 w-3 ${pos} border-[rgba(200,180,160,0.35)]`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
        />
      ))}
    </>
  )
}

const items = [
  {
    company: "Prep-Piper",
    role: "Software Developer",
    period: "2025 — Present",
    status: "active",
    points: [
      "Developed and maintained the core AI and full-stack architecture for Prep-Piper, an AI-powered interview preparation platform.",
      "Implemented advanced Agentic Workflows and RAG Systems to deliver personalized, real-time interview analysis and feedback.",
      "Key technologies: Next.js, React, TypeScript, Node.js, LangChain, LangGraph.",
    ],
  },
  {
    company: "TruPass",
    role: "Full Stack Developer",
    period: "2025 — 2026",
    status: "complete",
    points: [
      "Owned end-to-end architecture and development of the TruPass merchant platform — from system design and PostgreSQL schema to frontend UI and Python backend APIs, containerized with Docker and deployed on AWS.",
      "Designed and built RESTful backend services in Python with Redis caching to power merchant operations including billing, access control, and team management.",
      "Engineered a full-featured merchant dashboard with real-time analytics and transaction visibility using Next.js, React, and Tailwind CSS.",
    ],
  },
  {
    company: "Chingu",
    role: "Frontend Developer",
    period: "Dec 2023 — Mar 2024",
    status: "complete",
    points: [
      "Developed interactive web experiences with dynamic motion and spotlight-driven visual depth using Next.js, Framer Motion, and Tailwind CSS.",
      "Mentored a team of five developers using Agile methodology, improving delivery predictability by 60%.",
    ],
  },
  {
    company: "0101 DIGIT ALL",
    role: "Trainee Full Stack Developer",
    period: "Feb 2023 — Apr 2023",
    status: "complete",
    points: [
      "Developed and deployed a resumeless hiring platform using reusable React components, improving future development speed by 25%.",
      "Collaborated with senior developers during daily stand-ups, increasing sprint velocity by 30% and reducing bug-related rework by 45%.",
    ],
  },
]

export default function Experience() {
  return (
    <section className="relative bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <div className="relative mb-2 overflow-hidden border border-white/8 px-4 py-5 sm:px-6 sm:py-6 md:px-8">
          <div className="panel-shimmer absolute inset-x-0 top-0 h-px" />
          <div className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-[rgba(106,213,138,0.03)] blur-3xl" />
          <CB />
          <div
            className="mb-4 flex items-center justify-between border-b border-white/8 pb-4"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Experience</span>
            <span className="uppercase opacity-50">{items.length} Roles</span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#e6e1d7] sm:text-3xl md:text-4xl lg:text-5xl">
            Roles, teams, and product impact.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c8b4a0] sm:text-base">
            A cleaner view of the work done across product delivery, full-stack systems, and AI engineering.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative overflow-hidden border border-white/8 border-t-0">
          {/* Vertical center line — desktop */}
          <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-white/8 md:left-1/2 md:-translate-x-1/2" />

          <div className="divide-y divide-white/5">
            {items.map((item, index) => {
              const isRight = index % 2 === 1
              return (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="relative"
                >
                  {/* Timeline dot — mobile: left rail; desktop: center */}
                  <div
                    className={`absolute left-[1.5rem] top-8 z-10 flex h-6 w-6 items-center justify-center border md:left-1/2 md:-translate-x-1/2 md:top-10 ${
                      item.status === "active"
                        ? "border-[rgba(200,180,160,0.6)] bg-[rgba(200,180,160,0.1)]"
                        : "border-white/15 bg-[rgba(255,255,255,0.03)]"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 ${
                        item.status === "active"
                          ? "bg-[#c8b4a0]"
                          : "bg-white/20"
                      }`}
                      style={item.status === "active" ? { animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" } : {}}
                    />
                  </div>

                  <div className={`grid gap-0 pl-14 pr-4 py-6 sm:pr-6 sm:py-8 md:grid-cols-2 md:pl-0 md:pr-0`}>
                    {/* Meta — left on desktop for even, right for odd */}
                    <div
                      className={`mb-4 md:mb-0 md:px-10 md:py-2 ${
                        isRight ? "md:order-2 md:pl-10 md:pr-8" : "md:order-1 md:pr-10 md:pl-8 md:text-right"
                      }`}
                    >
                      <span
                        className="uppercase"
                        style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.22em", color: "rgba(200,180,160,0.5)" }}
                      >
                        {item.company}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-[#e6e1d7] sm:text-xl md:text-2xl">
                        {item.role}
                      </h3>
                      <span
                        className={`mt-2 inline-block border border-white/10 px-3 py-1 text-[#c8b4a0] ${
                          item.status === "active" ? "border-[rgba(200,180,160,0.3)] bg-[rgba(200,180,160,0.06)]" : ""
                        }`}
                        style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.14em" }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Points */}
                    <div
                      className={`flex flex-col gap-2 md:px-10 md:py-2 ${
                        isRight ? "md:order-1 md:pr-10 md:pl-8" : "md:order-2 md:pl-10 md:pr-8"
                      }`}
                    >
                      {item.points.map((point, pi) => (
                        <div
                          key={pi}
                          className="border border-white/8 bg-[rgba(255,255,255,0.02)] px-3 py-2.5 text-xs leading-6 text-[#c8b4a0] sm:px-4 sm:py-3 sm:text-sm"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom label */}
          <div
            className="border-t border-white/8 bg-white/[0.01] px-6 py-3 text-right"
            style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.22em", color: "rgba(200,180,160,0.3)" }}
          >
            MISSION STATUS // ALL SYSTEMS
          </div>
        </div>

      </div>
    </section>
  )
}
