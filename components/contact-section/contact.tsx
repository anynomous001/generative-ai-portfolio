"use client"

import { motion } from "framer-motion"
import Link from "next/link"

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

const socials = [
  { label: "GitHub", handle: "@anynomous001", href: "https://github.com/anynomous001" },
  { label: "X / Twitter", handle: "@Pritamchak001", href: "https://x.com/Pritamchak001" },
  { label: "Hashnode", handle: "@pritam-dev", href: "https://hashnode.com/@pritam-dev" },
  { label: "LinkedIn", handle: "Pritam Chakroborty", href: "https://www.linkedin.com/in/pritamchakroborty/" },
]

export default function Contact() {
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
          <div className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-[rgba(200,180,160,0.04)] blur-3xl" />
          <CB />

          {/* Panel header */}
          <div
            className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-6 py-3"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Establish Comms</span>
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                style={{ animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite" }}
              />
              <span className="uppercase opacity-70">Signal Open</span>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">

            {/* Left — primary CTA */}
            <div className="border-b border-white/8 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:border-b-0 lg:border-r">
              <h2 className="text-2xl font-semibold tracking-tight text-[#e6e1d7] sm:text-3xl md:text-4xl lg:text-5xl">
                Let&apos;s <span className="text-[#c8b4a0]">Connect</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#c8b4a0] sm:text-base sm:leading-8">
                If you're building with AI, need a workflow automated properly, or want an honest conversation about what's possible — this is the right place to start.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="https://calendly.com/chakrobortypritam1/booking-link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 border px-6 py-3.5 text-sm font-semibold transition-all hover:bg-[rgba(200,180,160,0.14)]"
                  style={{ fontFamily: MONO, letterSpacing: "0.1em", borderColor: "rgba(200,180,160,0.55)", color: "#e6e1d7", background: "rgba(200,180,160,0.07)" }}
                >
                  BOOK A CALL →
                </Link>
                <Link
                  href="mailto:chakrobortypritam.work@gmail.com"
                  className="inline-flex items-center justify-center gap-3 border border-white/10 px-6 py-3.5 text-sm transition-all hover:bg-white/[0.04] hover:text-[#e6e1d7]"
                  style={{ fontFamily: MONO, letterSpacing: "0.1em", color: "#c8b4a0" }}
                >
                  SEND EMAIL
                </Link>
              </div>

              {/* Email address as manifest row */}
              <div
                className="mt-8 border-t border-white/8 pt-5"
                style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.14em", color: "rgba(200,180,160,0.45)" }}
              >
                <span className="uppercase opacity-60">Direct</span>
                <div className="mt-1 text-[#c8b4a0]">chakrobortypritam.work@gmail.com</div>
              </div>
            </div>

            {/* Right — network / socials */}
            <div>
              <div
                className="border-b border-white/8 px-6 py-3 sm:px-8"
                style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "rgba(200,180,160,0.5)" }}
              >
                <span className="uppercase">Network</span>
              </div>
              <div className="divide-y divide-white/5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-white/[0.02] sm:px-8"
                  >
                    <div>
                      <p className="text-sm font-medium text-[#e6e1d7] transition-colors group-hover:text-white">
                        {s.label}
                      </p>
                      <p
                        className="mt-0.5"
                        style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", color: "rgba(200,180,160,0.55)" }}
                      >
                        {s.handle}
                      </p>
                    </div>
                    <svg
                      width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className="flex-shrink-0 text-[#c8b4a0] opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom label */}
          <div
            className="border-t border-white/8 bg-white/[0.01] px-6 py-3 text-right"
            style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.22em", color: "rgba(200,180,160,0.3)" }}
          >
            KOLKATA, INDIA // UTC+5:30
          </div>
        </motion.div>
      </div>
    </section>
  )
}
