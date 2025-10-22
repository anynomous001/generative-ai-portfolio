"use client"

import { motion } from "framer-motion"

export default function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.8 }}
          style={{
            background: "linear-gradient(90deg, var(--brand-primary), var(--brand-accent), var(--brand-green))",
          }}
        />
      </div>
    </div>
  )
}
