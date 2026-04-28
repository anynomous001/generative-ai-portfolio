"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const MONO = "var(--font-geist-mono, monospace)"

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const duration = 1100
        const start = Date.now()
        const tick = () => {
          const p = Math.min((Date.now() - start) / duration, 1)
          setVal(Math.round(p * to))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.6 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{val}{suffix}</span>
}

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

const stats = [
  { label: "Years Building",   numeric: true,  numTo: 3,  suffix: "+", value: "" },
  { label: "Projects Shipped", numeric: true,  numTo: 6,  suffix: "",  value: "" },
  { label: "AI Specialty",     numeric: false, value: "LangGraph · RAG" },
  { label: "Availability",     numeric: false, value: "Open" },
]

export default function About() {
  return (
    <section className="relative bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden border border-white/8"
        >
          <div className="panel-shimmer absolute inset-x-0 top-0 h-px" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[rgba(200,180,160,0.04)] blur-3xl" />
          <CB />

          {/* Panel header */}
          <div
            className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-6 py-3"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">System Profile</span>
            <span className="uppercase opacity-50">Kolkata, India</span>
          </div>

          <div className="grid gap-6 px-4 py-6 sm:gap-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)]">
            {/* Main text */}
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#e6e1d7] sm:text-3xl md:text-4xl lg:text-5xl">
                About <span className="text-[#c8b4a0]">Me</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c8b4a0] sm:text-lg sm:leading-9">
                I build full-stack AI products that ship fast and hold up in production.
                From{" "}
                <span className="font-medium text-[#e6e1d7]">LangGraph agentic pipelines</span>{" "}
                to production Next.js dashboards, I take ownership of the full system — architecture, backend, frontend, and deployment.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#c8b4a0] sm:text-lg sm:leading-9">
                Currently building{" "}
                <span className="font-medium text-[#e6e1d7]">Prep-Piper</span>,
                an AI-powered interview platform, and open to the right product or consulting opportunity.
              </p>
            </div>

            {/* Stats panel */}
            <div className="border border-white/8 bg-white/[0.015]">
              <div
                className="border-b border-white/8 px-5 py-3"
                style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.22em", color: "rgba(200,180,160,0.5)" }}
              >
                <span className="uppercase">Telemetry</span>
              </div>
              <div className="divide-y divide-white/5">
                {stats.map((s) => (
                  <div key={s.label} className="group flex items-baseline justify-between px-5 py-4 transition-colors hover:bg-white/[0.02]">
                    <span
                      className="uppercase opacity-60 group-hover:opacity-80"
                      style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.16em", color: "#c8b4a0" }}
                    >
                      {s.label}
                    </span>
                    <span className="text-base font-semibold text-[#e6e1d7]">
                      {s.numeric ? <CountUp to={s.numTo!} suffix={s.suffix} /> : s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
