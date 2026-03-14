"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Section from "@/components/section"
import { LampContainer } from "@/components/ui/lamp"

type Project = {
  title: string
  summary: string
  image: string
  tech: string[]
  accent: string
  demo?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: "Prep Piper AI Interviewer",
    summary:
      "AI-powered mock interviews with adaptive questioning, live feedback, analytics, and coaching flows built for serious interview prep.",
    image: "/images/Prep-piper.jpg",
    tech: ["Next.js", "TypeScript", "AI SDK", "LangChain", "Analytics"],
    accent: "from-sky-400/30 via-cyan-300/10 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "Zapier Automation",
    summary:
      "An event-driven automation platform with webhook ingestion, Kafka-powered workflow routing, and secure operational dashboards.",
    image: "/images/zapier.jpg",
    tech: ["Next.js", "Node.js", "Kafka", "PostgreSQL", "Prisma"],
    accent: "from-fuchsia-400/30 via-pink-300/10 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "PlayTM Demo App",
    summary:
      "A wallet experience with transfers, beneficiary management, money requests, and transaction visibility in a compact UI.",
    image: "/images/playtm.webp",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    accent: "from-amber-300/30 via-orange-300/10 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "Readium",
    summary:
      "A Medium-inspired reading product with writing, favorites, profile views, and a distraction-light content experience.",
    image: "/images/readium.webp",
    tech: ["React", "TypeScript", "Prisma", "Hono"],
    accent: "from-emerald-300/30 via-green-300/10 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "PictureWhisperAI",
    summary:
      "Image upload and AI-assisted visual interpretation with rate limiting, response generation, and a focused single-purpose flow.",
    image: "/images/PictureWhisperAI.webp",
    tech: ["Next.js", "OpenAI API", "TypeScript", "Image AI"],
    accent: "from-indigo-300/30 via-blue-300/10 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "Quizzicle",
    summary:
      "A custom quiz product for authoring, categorization, score tracking, and engaging participation across multiple topics.",
    image: "/images/quizzicle.webp",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    accent: "from-yellow-300/30 via-amber-300/10 to-transparent",
    demo: "#",
    repo: "#",
  },
]

const featuredProject = projects[0]
const supportingProjects = projects.slice(1)

export default function Projects() {
  return (
    <section className="relative z-20 overflow-hidden">
      <Section className="relative pt-36 pb-20 md:pt-48">
        <div className="relative z-10">
          <div className="flex flex-col gap-8">
            <div className="relative">
              <LampContainer
                className="mt-10 min-h-[30rem] overflow-visible rounded-none bg-transparent md:mt-14 md:min-h-[34rem]"
              >
                <div className="mx-auto max-w-5xl translate-y-40 text-center md:translate-y-32">
                  <p className="text-xs tracking-[0.28em] text-slate-400">SELECTED WORK</p>
                  <h2 className="mt-4 bg-gradient-to-b from-white to-slate-300 bg-clip-text text-4xl font-semibold leading-[1.02] text-transparent md:text-[4.15rem]">
                    Products with sharp UX and real-world utility.
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 md:text-xl">
                    I focus on interfaces that explain themselves quickly, ship fast, and hold up under real product use.
                  </p>
                </div>
              </LampContainer>
            </div>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="group relative mx-auto w-full max-w-[1080px] overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.03] p-5 md:p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredProject.accent}`} />
              <div className="relative">
                <div className="relative aspect-[16/8.6] overflow-hidden rounded-[1.2rem] border border-white/[0.08]">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                </div>

                <div className="mt-6 flex flex-col gap-5 px-1 pb-1 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-[11px] tracking-[0.24em] text-slate-300">
                      FEATURED BUILD
                    </div>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
                      {featuredProject.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                      {featuredProject.summary}
                    </p>
                  </div>

                  <div className="w-full max-w-lg rounded-[1.2rem] border border-white/[0.08] bg-slate-950/45 p-5 md:p-6">
                    <ul className="flex flex-wrap gap-2">
                      {featuredProject.tech.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/[0.12] bg-white/[0.06] px-3 py-1 text-xs text-slate-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {featuredProject.demo && (
                        <Link
                          href={featuredProject.demo}
                          className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-sm text-sky-100 transition hover:bg-sky-300/15"
                        >
                          Live Preview
                          <ArrowUpRight size={15} />
                        </Link>
                      )}
                      {featuredProject.repo && (
                        <Link
                          href={featuredProject.repo}
                          className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-sm text-slate-100 transition hover:bg-white/[0.09]"
                        >
                          Source
                          <Github size={15} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.03] p-4"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                <div className="relative">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.2rem] border border-white/[0.08]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.demo && (
                          <Link
                            href={project.demo}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-slate-100 transition hover:bg-white/[0.12]"
                            aria-label={`Open ${project.title} demo`}
                          >
                            <ArrowUpRight size={15} />
                          </Link>
                        )}
                        {project.repo && (
                          <Link
                            href={project.repo}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-slate-100 transition hover:bg-white/[0.12]"
                            aria-label={`Open ${project.title} repository`}
                          >
                            <Github size={15} />
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/[0.1] bg-slate-950/45 px-3 py-1 text-xs text-slate-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Section>
    </section>
  )
}
