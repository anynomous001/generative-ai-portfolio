"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { sendContact } from "./_actions"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setStatus("loading")
    setError(null)
    const res = await sendContact(formData)
    if (res.ok) setStatus("success")
    else {
      setStatus("error")
      setError(res.message)
    }
  }

  return (
    <div className="glass rounded-xl p-6">
      <form action={onSubmit} className="space-y-4" aria-label="Contact form">
        <div>
          <label className="mb-1 block text-sm" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 outline-none transition-all duration-300 focus:border-white/30 hover:border-white/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 outline-none transition-all duration-300 focus:border-white/30 hover:border-white/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 outline-none transition-all duration-300 focus:border-white/30 hover:border-white/20"
          />
        </div>

        <button className="btn-gradient rounded-lg p-[1px]" disabled={status === "loading"}>
          <span className="inline-flex items-center justify-center px-5 py-3">
            {status === "loading" ? "Sending..." : "Send Message"}
          </span>
        </button>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              className="text-green-400"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              Thanks! Your message has been sent.
            </motion.p>
          )}
          {status === "error" && error && (
            <motion.p className="text-red-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
