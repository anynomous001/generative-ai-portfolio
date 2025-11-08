// navbar.tsx
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ThemeToggle from "./theme-toggle"
import { usePathname, useRouter } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
]

// Alternative version with more pronounced glass effect:

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div
        className={`
          backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 ease-out
          ${scrolled
            ? 'bg-black/30 border-b border-white/20 shadow-2xl shadow-black/20'
            : 'bg-black/10 border-b border-white/5'
          }
        `}
      >
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />

        <div className="relative container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with glow effect */}
            <a href="/" onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || (e as any).button === 1) return
              e.preventDefault()
              router.push('/')
            }} className="group text-2xl font-bold">
              <span className="bg-linear-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                Portfolio
              </span>
              <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-all duration-300" />
            </a>

            {/* Navigation Links with hover effects */}
            {/* <div className="hidden md:flex items-center space-x-1">
              {links.map((link) => {
                const active = pathname === link.href
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      if (e.metaKey || e.ctrlKey || e.shiftKey || (e as any).button === 1) return
                      e.preventDefault()
                      router.push(link.href)
                    }}
                    className={`
                      relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                      hover:bg-white/10 hover:backdrop-blur-sm hover:text-white
                      ${active
                        ? 'text-white bg-white/15 shadow-lg'
                        : 'text-white/70'
                      }
                    `}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-white/10 via-white/20 to-white/10 rounded-lg border border-white/20"
                        layoutId="activeLinkBg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </div> */}

            {/* Theme Toggle with glass container */}
            {/* <div className="flex items-center">
              <div className={`
                p-1 rounded-lg transition-all duration-300
                ${scrolled ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'}
              `}>
                <ThemeToggle />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}