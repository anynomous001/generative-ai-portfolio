"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
    const [visible, setVisible] = useState(false)
    const [hovering, setHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springX = useSpring(cursorX, { damping: 28, stiffness: 300 })
    const springY = useSpring(cursorY, { damping: 28, stiffness: 300 })
    const isTouchRef = useRef(false)

    useEffect(() => {
        // Detect touch devices
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches
        if (!hasFinePointer) {
            isTouchRef.current = true
            return
        }

        const onMove = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
            if (!visible) setVisible(true)
        }

        const onEnter = () => setVisible(true)
        const onLeave = () => setVisible(false)

        const addHoverListeners = () => {
            const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select")
            interactives.forEach((el) => {
                el.addEventListener("mouseenter", () => setHovering(true))
                el.addEventListener("mouseleave", () => setHovering(false))
            })
        }

        document.addEventListener("mousemove", onMove)
        document.addEventListener("mouseenter", onEnter)
        document.addEventListener("mouseleave", onLeave)

        addHoverListeners()

        // Observe new elements for hover
        const observer = new MutationObserver(() => {
            addHoverListeners()
        })
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            document.removeEventListener("mousemove", onMove)
            document.removeEventListener("mouseenter", onEnter)
            document.removeEventListener("mouseleave", onLeave)
            observer.disconnect()
        }
    }, [cursorX, cursorY, visible])

    if (isTouchRef.current) return null

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: hovering ? 40 : 10,
                    height: hovering ? 40 : 10,
                    background: hovering
                        ? "rgba(58, 190, 255, 0.12)"
                        : "rgba(58, 190, 255, 0.8)",
                    border: hovering ? "1.5px solid rgba(58, 190, 255, 0.4)" : "none",
                    opacity: visible ? 1 : 0,
                    transition: "width 200ms ease, height 200ms ease, background 200ms ease, border 200ms ease",
                }}
            />
            {/* Trailing glow */}
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: hovering ? 60 : 32,
                    height: hovering ? 60 : 32,
                    background: "radial-gradient(circle, rgba(58, 190, 255, 0.1) 0%, transparent 70%)",
                    opacity: visible ? 1 : 0,
                    transition: "width 250ms ease, height 250ms ease",
                }}
            />
        </>
    )
}
