import PageBg from "@/components/backgrounds/page-bg"
import Section from "@/components/section"
import ProjectCard from "@/components/projects/project-card"

export const metadata = { title: "Projects" }

const projects = [
  {
    title: "3D Product Viewer",
    description: "Real-time WebGL renderer with optimized texture streaming.",
    tech: ["Next.js", "Three.js", "WebGL"],
    demo: "#",
    repo: "#",
  },
  {
    title: "AI Notes",
    description: "Structured note-taking with semantic search.",
    tech: ["Next.js", "AI SDK", "Postgres"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Realtime Dashboard",
    description: "Live metrics with elegant charts and alerts.",
    tech: ["Next.js", "SWR", "Recharts"],
    demo: "#",
    repo: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-[calc(100dvh-64px)] relative overflow-hidden">
      <PageBg variant="projects" className=" h-full z-0" />
      <Section>
        <h1 className="h1">Projects</h1>
        <p className="lead mt-2">A selection of recent work and explorations.</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </Section>
    </div>
  )
}
