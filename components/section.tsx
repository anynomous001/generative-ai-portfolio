"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import WordsPreloader from "@/components/preloaders/words-preloader"

export default function Section({
  className,
  children,
  delay = 0,
  preloader = true,
  preloaderWords,
  preloaderDurationMs = 1800,
}: {
  className?: string
  children: React.ReactNode
  delay?: number
  preloader?: boolean
  preloaderWords?: string[]
  preloaderDurationMs?: number
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const seenRef = useRef(false)
  const [showPre, setShowPre] = useState(false)

  useEffect(() => {
    if (!preloader) return
    if (inView && !seenRef.current) {
      seenRef.current = true
      setShowPre(true)
      const t = setTimeout(() => setShowPre(false), preloaderDurationMs)
      return () => clearTimeout(t)
    }
  }, [inView, preloader, preloaderDurationMs])

  return (
    <>
      {preloader ? <WordsPreloader show={showPre} words={preloaderWords} durationMs={preloaderDurationMs} /> : null}
      <motion.section
        ref={ref}
        className={cn("section", className)}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.section>
    </>
  )
}
