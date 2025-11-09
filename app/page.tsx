'use client'

import Timeline from "@/components/timeline"
import PageBg from "@/components/backgrounds/page-bg"
import Section from "@/components/section"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { LightRays } from "@/components/ui/light-rays"

import React from "react";
import { Icon } from "@/components/ui/evervault-card";
import ProjectShowcase from "@/components/projects/project-showcase"
import { TextReveal } from "@/components/ui/text-reveal"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"
import Projects from "@/components/projects/projects"
import Experience from "@/components/experience/experience"
import Stack from "@/components/tech-section/stack"
import About from "@/components/about-section/about"
import Contact from "@/components/contact-section/contact"
import Blog from "@/components/Blog-section/blog"
import HighlightBg from "@/components/hi-light/hilight_text"
import HighlightUnderline from "@/components/hi-light/hilight_underline"

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






export default function HomePage() {
  return (
    <>
      {/* <PageBg variant="contact" /> */}
      <PageBg variant="about" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Section>
          <div className="relative">
            <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-start relative z-10">
              <div>
                <p className="text-xs tracking-widest text-muted-foreground">PORTFOLIO / 2025</p>

                <h1
                  className="font-sans font-semibold  text-5xl md:text-[5rem] lg:text-[6rem]lg:text-[75px] leading-[1.05] tracking-tight flex items-center text-white"
                  style={{
                    background: "linear-gradient(90deg, rgba(185,230,240,0.85) 10%, rgba(234,224,236,0.7) 40%, rgba(255,255,255,0.5) 60%, rgba(180,203,230,0.85) 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                >
                  <span className="block">Pritam</span>

                </h1>
                <h1 className="font-sans font-semibold  text-5xl md:text-[5rem] lg:text-[6rem]lg:text-[75px] leading-[1.05] tracking-tight flex items-center"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.8) 10%, rgba(202,218,232,0.7) 40%, rgba(217,227,233,0.6) 70%, rgba(121,156,210,0.9) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                >
                  Chakroborty
                </h1>




                <p className="  mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  <span
                    style={{
                      background: "linear-gradient(90deg, #00e4ff, #34d399)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Full Stack Generative AI Developer
                  </span> crafting digital experiences at the intersection of{" "}
                  <HighlightUnderline colorFrom="#00e4ff" colorTo="#0089ff" delay={0.2}>design</HighlightUnderline>,
                  <HighlightUnderline colorFrom=" #22c55e" colorTo="#34d399" delay={0.2}>technology</HighlightUnderline>, and{" "}
                  <HighlightUnderline colorFrom="#ffb100" colorTo="#ff2f00" delay={0.2}>user experience</HighlightUnderline>.
                </p>


                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                    Available for work
                  </span>
                  <span className="opacity-60">Kolkata, India</span>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/Generative_AI_Portfolio.pdf" target="_blank"
                    rel="noopener noreferrer" className="btn-gradient rounded-lg p-[1px]">
                    <span className="inline-flex items-center gap-2 px-5 py-3">
                      Resume <ArrowRight size={16} />
                    </span>
                  </Link>
                  <Link
                    href="mailto:chakrobortypritam1@gmail.com"
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   window.location.href = 'mailto:chakrobortypritam1@gmail.com';
                    // }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>

              {/* Right column */}
              <div className="w-full md:max-w-md md:mx-0 border border-black/20 dark:border-white/20 flex flex-col items-start p-4 sm:p-6 relative rounded-xl bg-white/5 dark:bg-black/20">
                {/* Decorative corner icons: hide on very small screens to avoid clutter */}
                <Icon className="hidden sm:block absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Icon className="hidden sm:block absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Icon className="hidden sm:block absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Icon className="hidden sm:block absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                <div>
                  <p className="text-xs tracking-widest text-muted-foreground dark:text-gray-300">CURRENTLY</p>
                  <div className="mt-2">
                    <p className="text-base font-semibold text-black dark:text-white">Software Developer</p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      @Prep-Piper <span className="opacity-60">· 2025 — Present</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 w-full">
                  <p className="text-xs tracking-widest text-muted-foreground dark:text-gray-300">FOCUS</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "LangChain", "LangGraph", "Node.js", "RAG", "Agentic Workflows", "Automation"].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-xs text-black/80 dark:border-white/20 dark:bg-white/10 dark:text-white/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 w-full">
                  {[
                    { label: "GitHub", handle: "@anynomous001", href: "https://github.com/anynomous001" },
                    { label: "X", handle: "@Pritamchak001", href: "https://x.com/Pritamchak001" },
                    { label: "Hashnode", handle: "@Pritam-dev", href: "https://hashnode.com/@Pritam-dev" },
                    { label: "LinkedIn", handle: "Pritam Chakroborty", href: "https://www.linkedin.com/in/pritamchakroborty/" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full rounded-xl p-4 hover:scale-[1.01] transition dark:text-white text-black border border-white/[0.2]"
                    >
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="mt-1 text-sm text-black/75 dark:text-white/75">{item.handle}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>


          </div>


          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
        </Section>
      </motion.div>
      <Projects />

      {/* Tech Stack Section */}
      <Stack />

      {/* about section */}
      <About />


      {/* Skill Pills with Animated Hover */}


      {/* Experience Section */}
      <Experience />



      {/* Blog Section */}
      <Blog />
      <Contact />
    </>
  )
}
