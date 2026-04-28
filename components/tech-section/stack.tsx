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

const categories = [
  {
    label: "Languages",
    index: "01",
    tags: ["JavaScript", "Python", "TypeScript"],
    accent: null,
  },
  {
    label: "Frontend",
    index: "02",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    accent: null,
  },
  {
    label: "Backend",
    index: "03",
    tags: ["Node.js", "Express", "Python", "REST APIs"],
    accent: null,
  },
  {
    label: "Database & Infrastructure",
    index: "04",
    tags: ["PostgreSQL", "Prisma", "Docker", "Redis", "Kafka", "AWS"],
    accent: null,
  },
  {
    label: "AI Toolkit",
    index: "05",
    tags: ["LangChain", "LangGraph", "Crew AI", "RAG Systems", "Agentic Workflows", "OpenAI API"],
    accent: "#3ec9ff",
  },
  {
    label: "Production & Deployment",
    index: "06",
    tags: ["AWS", "Docker", "CI/CD", "Vercel", "Performance"],
    accent: null,
  },
]

export default function Stack() {
  return (
    <section className="relative bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">

        <div className="relative overflow-hidden border border-white/8">
          <div className="panel-shimmer absolute inset-x-0 top-0 h-px" />
          <CB />

          {/* Panel header */}
          <div
            className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-6 py-3"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">System Stack</span>
            <div className="flex items-end gap-0.5">
              <span className="block w-1 origin-bottom bg-zinc-700" style={{ height: "10px", animation: "signal-bar 1.8s ease-in-out infinite" }} />
              <span className="block w-1 origin-bottom bg-zinc-700" style={{ height: "10px", animation: "signal-bar 1.8s ease-in-out infinite 0.45s" }} />
              <span className="block w-1 origin-bottom bg-[rgba(200,180,160,0.55)]" style={{ height: "10px", animation: "signal-bar 1.8s ease-in-out infinite 0.9s" }} />
            </div>
          </div>

          {/* Heading block */}
          <div className="border-b border-white/8 px-6 py-8 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[#e6e1d7] sm:text-3xl md:text-4xl lg:text-5xl">
              My <span className="text-[#c8b4a0]">Arsenal</span>
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[#c8b4a0] sm:text-base">
              My toolkit evolves with every project — from crafting seamless user interfaces to building intelligent backend systems and deploying production-grade AI workflows.
            </p>
          </div>

          {/* Category rows */}
          <div className="divide-y divide-white/5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex flex-col gap-3 px-4 py-4 transition-colors hover:bg-white/[0.015] sm:flex-row sm:items-baseline sm:gap-8 sm:px-6 md:px-8 md:py-5"
                style={cat.accent ? { background: "rgba(62,201,255,0.025)" } : undefined}
              >
                {/* Row label */}
                <div className="flex w-full flex-shrink-0 items-center gap-3 sm:w-48">
                  <span
                    style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.16em", color: cat.accent ? `${cat.accent}55` : "rgba(200,180,160,0.35)" }}
                  >
                    {cat.index}
                  </span>
                  <span
                    className="uppercase transition-colors"
                    style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.2em", color: cat.accent ? cat.accent : "rgba(200,180,160,0.55)" }}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-[11px] transition-colors"
                      style={{
                        fontFamily: MONO,
                        letterSpacing: "0.08em",
                        border: `1px solid ${cat.accent ? `${cat.accent}35` : "rgba(255,255,255,0.1)"}`,
                        color: cat.accent ? cat.accent : "#c8b4a0",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom label */}
          <div
            className="border-t border-white/8 px-6 py-3 text-right"
            style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.22em", color: "rgba(200,180,160,0.3)" }}
          >
            FULL STACK // AI SYSTEMS // PRODUCTION GRADE
          </div>
        </div>
      </div>
    </section>
  )
}
