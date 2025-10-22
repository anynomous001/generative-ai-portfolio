"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"

export default function Typewriter({ text, speed = 40 }: { text: string; speed?: number }) {
  const [out, setOut] = useState("")
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setOut(text)
      return
    }
    let i = 0
    const id = setInterval(() => {
      i += 1
      setOut(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed, reduce])

  return <span aria-live="polite">{out}</span>
}
