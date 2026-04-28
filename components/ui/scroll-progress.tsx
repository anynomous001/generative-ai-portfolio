"use client"

import { useScroll, useSpring, motion } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-px origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgba(200,180,160,0.3), rgba(200,180,160,0.8), rgba(200,180,160,0.3))",
      }}
    />
  )
}
