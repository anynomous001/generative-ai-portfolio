"use client"

import Link from "next/link"
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

const lines = [
  "Building an AI product with no technical co-founder — I own the full build end to end.",
  "Running a team on manual workflows that should be automated — I build the agentic system that runs it instead.",
  "Have a working product that needs AI features — I integrate cleanly without breaking what's live.",
]

export default function WorkingWithClients() {
  return (
    <section className="relative bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="relative overflow-hidden border border-white/8 px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
        >
          <CB />

          {/* Section label */}
          <p
            className="mb-6 uppercase"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            Working with Clients
          </p>

          {/* Heading */}
          <h2 className="max-w-2xl text-xl font-semibold leading-snug tracking-tight text-[#e6e1d7] sm:text-2xl md:text-3xl lg:text-4xl">
            I also build for founders and operators who need AI execution, not just advice.
          </h2>

          {/* Recognition lines */}
          <ul className="mt-8 flex flex-col gap-0 border-l border-white/8">
            {lines.map((line, i) => (
              <motion.li
                key={i}
                className="flex items-baseline gap-4 py-4 pl-5 pr-2"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: 0.1 + i * 0.08 }}
              >
                <span
                  className="mt-px flex-shrink-0"
                  style={{ fontFamily: MONO, fontSize: "10px", color: "rgba(200,180,160,0.45)" }}
                >
                  →
                </span>
                <span className="text-sm leading-7 text-[#c8b4a0] sm:text-base">
                  {line}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-white/10 px-5 py-2.5 text-sm transition-all hover:border-[rgba(200,180,160,0.35)] hover:bg-[rgba(200,180,160,0.05)] hover:text-[#e6e1d7]"
              style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.14em", color: "#c8b4a0" }}
            >
              SEE HOW I WORK WITH CLIENTS →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
