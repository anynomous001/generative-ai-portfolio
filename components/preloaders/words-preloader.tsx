"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

type WordsPreloaderProps = {
  show: boolean
  words?: string[]
  durationMs?: number // total time before exit
}

export default function WordsPreloader({ show, words, durationMs = 1800 }: WordsPreloaderProps) {
  const defaultWords = useMemo(() => words ?? ["design", "code", "create", "ship"], [words])

  const [index, setIndex] = useState(0)
  const intervalRef = useRef<number | null>(null)

  // Reduced motion support
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (!show) return
    const step = prefersReduced ? durationMs : 450
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % defaultWords.length)
    }, step)

    const stop = window.setTimeout(() => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }, durationMs - 50)

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
      window.clearTimeout(stop)
    }
  }, [show, defaultWords.length, durationMs, prefersReduced])

  return (
    <AnimatePresence mode="wait">
      {show ? (
        <motion.div
          key="section-preloader"
          className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-background/70 backdrop-blur-sm"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0.2 : 0.5 }}
          aria-hidden="true"
        >
          <div className="relative">
            {/* circular subtle glow */}
            <div className="absolute -inset-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
            <motion.span
              key={index}
              className="relative select-none text-4xl font-bold tracking-tight text-foreground md:text-6xl"
              initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
              transition={{
                duration: prefersReduced ? 0.2 : 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* chroma-like gradient text */}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,theme(colors.blue.400),theme(colors.violet.400),theme(colors.emerald.400))]">
                {defaultWords[index]}
              </span>
            </motion.span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
