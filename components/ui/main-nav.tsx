"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const MONO = "var(--font-geist-mono, monospace)"

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "#contact" },
]

export default function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full border-b border-white/5"
        style={{ background: "rgba(5,5,5,0.85)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Left — name */}
          <Link
            href="/"
            className="transition-colors hover:text-[#e6e1d7]"
            style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Pritam.dev</span>
          </Link>

          {/* Center — nav links (desktop only) */}
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="uppercase transition-colors hover:text-[#e6e1d7]"
                  style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.55)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <Link
              href="https://calendly.com/chakrobortypritam1/booking-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border border-white/10 px-4 py-2 transition-all hover:border-[rgba(200,180,160,0.4)] hover:bg-[rgba(200,180,160,0.07)] hover:text-[#e6e1d7] sm:inline-flex"
              style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.18em", color: "#c8b4a0" }}
            >
              BOOK A CALL →
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className="block h-px w-5 bg-[#c8b4a0] transition-all duration-200"
                style={{ transform: open ? "translateY(6px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-px w-5 bg-[#c8b4a0] transition-all duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-px w-5 bg-[#c8b4a0] transition-all duration-200"
                style={{ transform: open ? "translateY(-6px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/5 md:hidden"
              style={{ background: "rgba(5,5,5,0.97)" }}
            >
              <ul className="flex flex-col divide-y divide-white/5 px-4 py-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 uppercase transition-colors hover:text-[#e6e1d7]"
                      style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.22em", color: "rgba(200,180,160,0.7)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="https://calendly.com/chakrobortypritam1/booking-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="block py-4 uppercase transition-colors hover:text-[#e6e1d7]"
                    style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.22em", color: "#c8b4a0" }}
                  >
                    Book a Call →
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
