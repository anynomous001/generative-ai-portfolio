"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function PageBg({
  variant,
  className
}: { variant: "hero" | "about" | "projects" | "skills" | "experience" | "contact", className?: string }) {
  const { scrollY } = useScroll()
  // Slightly increase starting scale and reduce max translate so the
  // image remains large enough to cover the container when it shifts up
  // for the parallax effect. This prevents a visible gap at the bottom.
  const scale = useTransform(scrollY, [0, 600], [1.12, 1.02])
  const y = useTransform(scrollY, [0, 600], [0, -40])

  const src =
    variant === "about"
      ? "/images/galaxy.png"
      : variant === "experience"
        ? "/images/blue.png"
        : variant === "projects"
          ? "/images/glass.jpg"
          : variant === "contact"
            ? "/images/black.jpg"
            : "/images/stripe.jpg"

  return (
    // Use box-border so the border thickness doesn't change the visual
    // size of the background container and avoid unexpected gaps.
    <div aria-hidden className={"box-border  pointer-events-none absolute inset-0 -z-10 overflow-hidden" + (className ? ` ${className}` : "")}>
      <motion.div className="absolute inset-0">
        <Image
          src={src || "/placeholder.svg"}
          alt=""
          fill
          priority={variant === "hero"}
          sizes="100vw"
          className={`object-cover object-center ${variant === "hero" ? "opacity-80" : "opacity-60"}`}
        />
      </motion.div>

      {variant === "hero" && (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(800px 400px at 20% 20%, color-mix(in oklch, var(--brand-accent) 18%, transparent), transparent), radial-gradient(1200px 600px at 80% 80%, color-mix(in oklch, var(--brand-primary) 16%, transparent), transparent)",
          }}
        />
      )}
      {variant === "skills" && (
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(1200px 600px at 70% 20%, color-mix(in oklch, var(--brand-primary) 40%, transparent), transparent), radial-gradient(1000px 500px at 20% 80%, color-mix(in oklch, var(--brand-accent) 35%, transparent), transparent), radial-gradient(800px 400px at 50% 40%, color-mix(in oklch, var(--brand-green) 35%, transparent), transparent)",
          }}
        />
      )}
      {variant === "contact" && <div className="grain" />}

      {/* {variant === "projects" && (
        <div
          className={`absolute inset-0 opacity-40 ${className}`}
          // style={{
          //   background:
          //     "radial-gradient(1200px 600px at 70% 20%, color-mix(in oklch, var(--brand-primary) 40%, transparent), transparent), radial-gradient(1000px 500px at 20% 80%, color-mix(in oklch, var(--brand-accent) 35%, transparent), transparent), radial-gradient(800px 400px at 50% 40%, color-mix(in oklch, var(--brand-green) 35%, transparent), transparent)",
          // }}
        />
      )} */}

    </div>
  )
}
