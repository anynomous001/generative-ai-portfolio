"use server"

export async function sendContact(formData: FormData) {
  const name = String(formData.get("name") || "").trim()
  const email = String(formData.get("email") || "").trim()
  const message = String(formData.get("message") || "").trim()

  if (!name || !email || !message || !email.includes("@")) {
    return { ok: false, message: "Please provide a valid name, email and message." }
  }

  // Simulate sending (replace with email/SaaS of choice)
  console.log("[v0] Contact form:", { name, email, message })

  await new Promise((r) => setTimeout(r, 600))
  return { ok: true }
}
