"use client"

import type React from "react"

import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useMemo } from "react"
import { useReducedMotion } from "framer-motion"

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  // Initialize persisted theme (dark by default)
  useEffect(() => {
    const root = document.documentElement
    const stored = localStorage.getItem("theme")
    const shouldDark = stored ? stored === "dark" : true
    root.classList.toggle("dark", shouldDark)
  }, [])

  const transition = useMemo(
    () => ({
      duration: prefersReducedMotion ? 0 : 0.35,
      ease: [0.16, 1, 0.3, 1],
    }),
    [prefersReducedMotion],
  )

  return (
    <MotionConfig transition={transition}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </MotionConfig>
  )
}
