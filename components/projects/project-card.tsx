"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

type Project = {
  title: string
  description: string
  image?: string
  tech: string[]
  demo?: string
  repo?: string
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="group glass rounded-xl p-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.06 }}
    >
      {/* Corner Glow Effects */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Top Left */}
        <span className="absolute top-2 left-2 block w-6 h-6 rounded-full bg-linear-to-tr from-blue-400 to-transparent opacity-40 blur-lg animate-pulse-slow" />
        {/* Top Right */}
        <span className="absolute top-2 right-2 block w-6 h-6 rounded-full bg-linear-to-tl from-pink-400 to-transparent opacity-40 blur-lg animate-pulse-slow" />
        {/* Bottom Left */}
        <span className="absolute bottom-2 left-2 block w-6 h-6 rounded-full bg-linear-to-br from-yellow-400 to-transparent opacity-40 blur-lg animate-pulse-slow" />
        {/* Bottom Right */}
        <span className="absolute bottom-2 right-2 block w-6 h-6 rounded-full bg-linear-to-bl from-green-400 to-transparent opacity-40 blur-lg animate-pulse-slow" />
      </div>

      <div className="relative z-20">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
          <Image
            src={project.image || "/placeholder.svg?height=320&width=640&query=project%20preview"}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-1 text-foreground/85">{project.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs text-foreground/75"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
            {project.repo && (
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition"
                href={project.repo}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
              </a>
            )}
            {project.demo && (
              <a
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition"
                href={project.demo}
                aria-label="Live demo"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

