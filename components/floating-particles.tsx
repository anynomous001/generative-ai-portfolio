"use client"

import { useEffect, useRef } from "react"

type Particle = {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    opacity: number
}

export default function FloatingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationId: number
        let particles: Particle[] = []

        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            canvas.width = canvas.offsetWidth * dpr
            canvas.height = canvas.offsetHeight * dpr
            ctx.scale(dpr, dpr)
        }

        const createParticles = () => {
            const count = 25
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.12 + 0.04,
            }))
        }

        const draw = () => {
            const w = canvas.offsetWidth
            const h = canvas.offsetHeight
            ctx.clearRect(0, 0, w, h)

            for (const p of particles) {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0) p.x = w
                if (p.x > w) p.x = 0
                if (p.y < 0) p.y = h
                if (p.y > h) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(58, 190, 255, ${p.opacity})`
                ctx.fill()

                // Subtle glow
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(58, 190, 255, ${p.opacity * 0.3})`
                ctx.fill()
            }

            animationId = requestAnimationFrame(draw)
        }

        resize()
        createParticles()
        draw()

        window.addEventListener("resize", () => {
            resize()
            createParticles()
        })

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0"
            style={{ width: "100%", height: "100%" }}
            aria-hidden
        />
    )
}
