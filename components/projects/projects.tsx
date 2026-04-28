"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

const MONO = "var(--font-geist-mono, monospace)"

type Project = {
  index: string
  title: string
  summary: string
  image: string
  tech: string[]
  demo: string | null
  repo: string | null
}

const cbPos = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
]
function CB() {
  return (
    <>
      {cbPos.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute h-3 w-3 ${pos} border-[rgba(200,180,160,0.35)]`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
        />
      ))}
    </>
  )
}

const projects: Project[] = [
  {
    index: "01",
    title: "Trupas Merchant Identity Infrastructure",
    summary: "A hardware-meets-software verification system for front desks: kiosk scanning, offline resilience, tamper alerts, and an audit-ready operations console.",
    image: "/images/trupas-landing.png",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Dashboard UX", "Hardware Product"],
    demo: "https://trupas-landing.vercel.app/",
    repo: null,
  },
  {
    index: "02",
    title: "Prep Piper AI Interviewer",
    summary: "AI-powered mock interviews with adaptive questioning, live feedback, analytics, and coaching flows built for serious interview prep.",
    image: "/images/Prep-piper.jpg",
    tech: ["Next.js", "TypeScript", "AI SDK", "LangChain", "Analytics"],
    demo: "https://prep-piper-pritam-chakrobortys-projects.vercel.app/",
    repo: null,
  },
  {
    index: "03",
    title: "Zapier Automation",
    summary: "An event-driven automation platform with webhook ingestion, Kafka-powered workflow routing, and secure operational dashboards.",
    image: "/images/zapier.jpg",
    tech: ["Next.js", "Node.js", "Kafka", "PostgreSQL", "Prisma"],
    demo: null,
    repo: null,
  },
  {
    index: "04",
    title: "PlayTM Demo App",
    summary: "A wallet experience with transfers, beneficiary management, money requests, and transaction visibility in a compact UI.",
    image: "/images/playtm.webp",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demo: null,
    repo: null,
  },
  {
    index: "05",
    title: "Readium",
    summary: "A Medium-inspired reading product with writing, favorites, profile views, and a distraction-light content experience.",
    image: "/images/readium.webp",
    tech: ["React", "TypeScript", "Prisma", "Hono"],
    demo: null,
    repo: null,
  },
  {
    index: "06",
    title: "PictureWhisperAI",
    summary: "Image upload and AI-assisted visual interpretation with rate limiting, response generation, and a focused single-purpose flow.",
    image: "/images/PictureWhisperAI.webp",
    tech: ["Next.js", "OpenAI API", "TypeScript"],
    demo: "https://image-whisper-ai.vercel.app/",
    repo: null,
  },
]

export default function Projects() {
  return (
    <section className="relative bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* Section header panel */}
        <div className="relative mb-8 overflow-hidden border border-white/8 p-5 sm:p-8 md:mb-10 md:p-10">
          {/* shimmer top border */}
          <div className="panel-shimmer absolute inset-x-0 top-0 h-px" />
          {/* ambient orb */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgba(62,201,255,0.04)] blur-3xl" />
          <CB />
          <div
            className="mb-6 flex items-center justify-between border-b border-white/8 pb-4"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Selected Work</span>
            <span className="uppercase opacity-50">{projects.length} Projects</span>
          </div>
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[#e6e1d7] sm:text-3xl md:text-4xl lg:text-5xl">
            Products with sharp UX<br className="hidden sm:block" /> and real-world utility.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c8b4a0] sm:text-base sm:leading-8">
            I focus on interfaces that explain themselves quickly, ship fast, and hold up under real product use.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden border border-white/8 bg-[rgba(255,255,255,0.02)] transition-colors hover:bg-[rgba(255,255,255,0.035)]"
            >
              <CB />

              {/* Card header */}
              <div
                className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-5 py-3"
                style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.22em", color: "#c8b4a0" }}
              >
                <span className="uppercase opacity-60">Project {project.index}</span>
                <div className="flex items-center gap-3">
                  {!project.demo && !project.repo && (
                    <span className="uppercase opacity-40" style={{ fontSize: "9px", letterSpacing: "0.18em" }}>
                      Private
                    </span>
                  )}
                  {project.demo && (
                    <Link href={project.demo} target="_blank" rel="noreferrer" aria-label="Demo" className="transition-colors hover:text-[#e6e1d7]">
                      <ArrowUpRight size={13} />
                    </Link>
                  )}
                  {project.repo && (
                    <Link href={project.repo} target="_blank" rel="noreferrer" aria-label="Repo" className="transition-colors hover:text-[#e6e1d7]">
                      <Github size={13} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-base font-semibold text-[#e6e1d7] transition-colors group-hover:text-white sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#c8b4a0]">{project.summary}</p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="border border-white/10 px-2.5 py-1 text-[10px] text-[#c8b4a0]"
                      style={{ fontFamily: MONO, letterSpacing: "0.1em" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
