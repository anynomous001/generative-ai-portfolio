"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import Section from "@/components/section"
import { LampContainer } from "@/components/ui/lamp"
import { GlowCard } from "@/components/ui/spotlight-card"

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
    accent: "from-[#e6e1d7]/14 via-[#e6e1d7]/6 to-transparent",
    demo: "https://prep-piper-pritam-chakrobortys-projects.vercel.app/",
    repo: "#",
  },
  {
    title: "Zapier Automation",
    summary:
      "An event-driven automation platform with webhook ingestion, Kafka-powered workflow routing, and secure operational dashboards.",
    image: "/images/zapier.jpg",
    tech: ["Next.js", "Node.js", "Kafka", "PostgreSQL", "Prisma"],
    accent: "from-[#e6e1d7]/14 via-[#e6e1d7]/6 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "PlayTM Demo App",
    summary:
      "A wallet experience with transfers, beneficiary management, money requests, and transaction visibility in a compact UI.",
    image: "/images/playtm.webp",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    accent: "from-[#e6e1d7]/14 via-[#e6e1d7]/6 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "Readium",
    summary:
      "A Medium-inspired reading product with writing, favorites, profile views, and a distraction-light content experience.",
    image: "/images/readium.webp",
    tech: ["React", "TypeScript", "Prisma", "Hono"],
    accent: "from-[#e6e1d7]/14 via-[#e6e1d7]/6 to-transparent",
    demo: "#",
    repo: "#",
  },
  {
    title: "PictureWhisperAI",
    summary:
      "Image upload and AI-assisted visual interpretation with rate limiting, response generation, and a focused single-purpose flow.",
    image: "/images/PictureWhisperAI.webp",
    tech: ["Next.js", "OpenAI API", "TypeScript", "Image AI"],
    accent: "from-[#e6e1d7]/14 via-[#e6e1d7]/6 to-transparent",
    demo: "https://image-whisper-ai.vercel.app/",
    repo: "#",
  },
  {
    title: "Quizzicle",
    summary:
      "A custom quiz product for authoring, categorization, score tracking, and engaging participation across multiple topics.",
    image: "/images/quizzicle.webp",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    accent: "from-[#e6e1d7]/14 via-[#e6e1d7]/6 to-transparent",
    demo: "#",
    repo: "#",
  },
]

export default function Projects() {
  return (
    <section className="relative z-20 overflow-hidden">
      <Section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-20">
        <div className="relative z-10">
          <div className="flex flex-col gap-8">
            <div className="relative">
              <LampContainer
                className="mt-6 min-h-[24rem] overflow-visible rounded-none bg-transparent sm:mt-10 md:mt-14 md:min-h-[34rem]"
              >
                <div className="mx-auto max-w-5xl translate-y-28 px-2 text-center sm:translate-y-32 md:translate-y-32">
                  <p className="text-[11px] tracking-[0.24em] text-muted-foreground sm:text-xs sm:tracking-[0.28em]">SELECTED WORK</p>
                  <h2 className="mt-4 bg-gradient-to-b from-[#f8f7f5] to-[#c8b4a0] bg-clip-text text-3xl font-semibold leading-[1.04] text-transparent sm:text-4xl md:text-6xl md:leading-[1.02] lg:text-[4.15rem]">
                    Products with sharp UX and real-world utility.
                  </h2>
                  <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base md:mt-5 md:text-xl">
                    I focus on interfaces that explain themselves quickly, ship fast, and hold up under real product use.
                  </p>
                </div>
              </LampContainer>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="h-full"
              >
                <GlowCard
                  glowColor="warm"
                  customSize
                  className="group h-full overflow-hidden rounded-[1.4rem] bg-white/[0.03] p-3 sm:rounded-[1.6rem] sm:p-4"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                  <div className="relative">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.2rem] border border-foreground/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>

                  <div className="mt-4 sm:mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">{project.title}</h3>
                      <div className="flex gap-2">
                        {project.demo && project.demo !== "#" && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/12 bg-white/[0.06] text-foreground transition hover:bg-white/[0.12] sm:h-9 sm:w-9"
                            aria-label={`Open ${project.title} demo`}
                          >
                            <ArrowUpRight size={15} />
                          </Link>
                        )}
                        {project.repo && project.repo !== "#" && (
                          <Link
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-foreground/12 bg-white/[0.06] text-foreground transition hover:bg-white/[0.12] sm:h-9 sm:w-9"
                            aria-label={`Open ${project.title} repository`}
                          >
                            <Github size={15} />
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground sm:leading-7">{project.summary}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <li key={item} className="rounded-full border border-foreground/10 bg-black/45 px-3 py-1 text-[11px] text-muted-foreground sm:text-xs">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </section>
  )
}
