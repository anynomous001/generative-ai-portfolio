import { motion, useMotionValue, useMotionTemplate } from "framer-motion"
import { MouseEvent } from "react"

type Item = {
  company: string
  role: string
  period: string
  cta?: string
  onCtaClick?: () => void
}

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item, i) => (
        <SpotlightCard key={item.company + i} index={i} item={item} />
      ))}
    </div>
  )
}

function SpotlightCard({ item, index }: { item: Item; index: number }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const spotlight = useMotionTemplate`
    radial-gradient(
      250px circle at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,0.12),
      rgba(255,255,255,0.00) 80%
    )
  `

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.7, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className="
        relative overflow-hidden rounded-2xl border border-white/15
        bg-white/10 backdrop-blur-xl backdrop-saturate-150
        px-8 py-7 shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        transition-all duration-500 hover:border-white/30
      "
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to right,
            rgba(255,255,255,0.03) 0px,
            rgba(255,255,255,0.03) 1px,
            transparent 1px,
            transparent 180px
          )
        `,
      }}
    >

      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: spotlight,
        }}
      />
      
      <div className="relative z-10">
        <h2 className="font-semibold text-2xl text-white mb-2 tracking-tight">
          {item.role}
        </h2>
        <div className="flex flex-row items-center gap-6 mb-4">
          <span className="text-white/60 text-sm">{item.company}</span>
          <span className="text-white/40 text-xs">{item.period}</span>
        </div>

        <p className="text-white/70 text-sm leading-relaxed max-w-lg">
          {`Developed interactive web experiences with dynamic motion and spotlight-driven visual depth using Next.js, Framer Motion, and Tailwind CSS.`}
        </p>

        {item.cta && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-6 px-6 py-2 rounded-full border border-white/30 text-white/90 text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white/50 transition"
            onClick={item.onCtaClick}
          >
            {item.cta} →
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}
