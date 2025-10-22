import PageBg from "@/components/backgrounds/page-bg"
import Section from "@/components/section"
import SkillBar from "@/components/skills/skill-bar"

export const metadata = { title: "Skills" }

const skills = [
  ["TypeScript", 90],
  ["React / Next.js", 92],
  ["CSS / Tailwind", 95],
  ["Framer Motion", 88],
  ["Accessibility (a11y)", 85],
  ["Performance", 87],
] as const

export default function SkillsPage() {
  return (
    <>
      <PageBg variant="skills" />
      <Section>
        <h1 className="h1 ">Skills & Expertise</h1>
        <p className="lead mt-2">Visualizing proficiency across core areas.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map(([name, lvl], i) => (
            <SkillBar key={name} name={name} level={lvl} index={i} />
          ))}
        </div>
      </Section>
    </>
  )
}
