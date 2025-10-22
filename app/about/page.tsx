import Image from "next/image"
import PageBg from "@/components/backgrounds/page-bg"
import Section from "@/components/section"

export const metadata = { title: "About" }

export default function AboutPage() {
  return (
    <>
      <PageBg variant="about" />
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10">
            <Image src="/diverse-person-portrait.png" alt="Portrait" fill className="object-cover" />
          </div>
          <div>
            <h1 className="h1">About Me</h1>
            <p className="lead mt-4">
              I’m a front‑end engineer focused on motion, accessibility, and performance. I love crafting immersive,
              minimal experiences that feel fast and polished.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Clean UX", "Accessibility", "Animations", "Web Perf"].map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
