import PageBg from "@/components/backgrounds/page-bg"
import Section from "@/components/section"
import Timeline from "@/components/timeline"

export const metadata = { title: "Experience" }

const items = [
  {
    company: "Acme Corp",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    points: [
      "Led migration to Next.js App Router and improved CWV by 25%",
      "Built design system components with accessibility baked in",
      "Established motion guidelines using Framer Motion",
    ],
  },
  {
    company: "Beta Studio",
    role: "Frontend Engineer",
    period: "2021 — 2023",
    points: [
      "Developed real-time dashboards and internal tools",
      "Drove UI performance optimization and bundle reduction",
    ],
  },
]

export default function ExperiencePage() {
  return (
    <>
      <PageBg variant="experience" />
      <Section>
        <h1 className="h1">Experience</h1>
        <p className="lead mt-2">A concise look at my professional journey.</p>
        <div className="mt-8">
          <Timeline items={items} />
        </div>
      </Section>
    </>
  )
}
