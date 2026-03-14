"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Section({
  className,
  children,
  delay = 0,
}: {
  className?: string
  children: React.ReactNode
  delay?: number
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.section
      ref={ref}
      className={cn("section", className)}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  )
}
