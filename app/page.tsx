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


export default function HomePage() {
  return (
    <>
      {/* <PageBg variant="contact" /> */}
      <PageBg variant="stripe" />

      <Section>
        <div className="relative">
          <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-start relative z-10">
            <div>
              <p className="text-xs tracking-widest text-muted-foreground">PORTFOLIO / 2025</p>
              {/* <h1 className=" mt-3 leading-[0.9] text-6xl md:text-[5rem] lg:text-[6rem] font-extrabold text-white">
                <span className="block">Pritam</span>
                <span className="block text-chroma">Chakroborty</span>
              </h1> */}

              <h1
                className="font-sans font-semibold  text-5xl md:text-[5rem] lg:text-[6rem]lg:text-[75px] leading-[1.05] tracking-tight flex items-center"
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


              {/* <h1 className="font-sans font-semibold  text-6xl md:text-[5rem] lg:text-[6rem]lg:text-[75px] leading-[1.05] tracking-tight flex items-center "
                style={{
                  background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                Pritam  <br />  <span className="ml-1 font-bold"
                  style={{
                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                > Chakroborty</span>
              </h1> */}

              <p className="  mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Full Stack Generative AI Developer crafting digital experiences at the intersection of{" "}
                <span className="font-semibold">design</span>, <span className="font-semibold">technology</span>, and{" "}
                <span className="font-semibold">user experience</span>.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                  Available for work
                </span>
                <span className="opacity-60">Kolkata, India</span>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/projects" className="btn-gradient rounded-lg p-[1px]">
                  <span className="inline-flex items-center gap-2 px-5 py-3">
                    View Projects <ArrowRight size={16} />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="w-full md:max-w-md md:mx-0 border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 sm:p-6 relative rounded-xl bg-white/5 dark:bg-black/20">
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
                  {["Next.js", "React", "TypeScript", "LangChain", "LangGraph", "Node.js"].map((tag) => (
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
                  { label: "GitHub", handle: "@felixmacaspac", href: "https://github.com/your" },
                  { label: "v0.dev", handle: "@felixmacaspac", href: "https://v0.dev" },
                  { label: "HubSpot Community", handle: "@felixmacaspac", href: "https://community.hubspot.com" },
                  { label: "LinkedIn", handle: "felixmacaspac", href: "https://linkedin.com/in/your" },
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


        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      </Section>





      <div className="min-h-[calc(100dvh-64px)]  ">



        <Section className="relative z-20">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              zIndex: 0,
              background: `
        repeating-linear-gradient(
          to right,
          rgba(255,255,255,0.03) 0px,
          rgba(255,255,255,0.03) 1px,
          transparent 1px,
          transparent 100px
        )
      `
            }}
          />
          {/* <PageBg variant="stripe" /> */}


          <h1 className="font-sans font-semibold text-5xl sm:text-5xl md:text-5xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left"
            style={{
              background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent"
            }}
          >
            My  <span className="ml-1 font-bold"
              style={{
                background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent"
              }}
            > Works</span>
          </h1>

          <ProjectShowcase />
        </Section>


      </div>




      <div className="min-h-[calc(100dvh-64px)] relative overflow-hidden ">
        <PageBg variant="projects" />
        {/* Smoother curved top blend */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            clipPath: "ellipse(100% 100% at 40% 40%)",
            background: "linear-gradient(to bottom, color-mix(in oklch, #0A0A0A 100%, transparent) 0%, color-mix(in oklch, #0A0A0A 80%, transparent) 10%, transparent 25%)",
            opacity: 1,
          }}
        />




        <Section>
          <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] mt-16 md:text-7xl md:leading-[5rem]  border-2 border-white border-solid">
            <ScrollVelocityRow baseVelocity={20} direction={1}>
              <h1 className="font-sans pl-6 font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left mt-8"
                style={{
                  background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                My <span className="ml-1 font-bold"
                  style={{
                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                > Experience</span>
              </h1>
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={20} direction={-1}>
              <h1 className="font-sans font-semibold pl-6 text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left mt-8"
                style={{
                  background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                My <span className="ml-1 font-bold"
                  style={{
                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                > Experience</span>
              </h1>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>



          <p className="lead mt-4">A concise look at my professional journey.</p>
          <div className="mt-8">
            <Timeline items={items} />
          </div>
        </Section>
      </div>


      {/* about section */}
      <div className="relative bg-oklch(0.145 0 0) overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 0,
            background: `
        repeating-linear-gradient(
          to right,
          rgba(255,255,255,0.03) 0px,
          rgba(255,255,255,0.03) 1px,
          transparent 1px,
          transparent 100px
        )
      `
          }}
        />

        <Section>
          {/* Smoother curved top blend */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              clipPath: "ellipse(100% 100% at 40% 40%)",
              background: "linear-gradient(to bottom, color-mix(in oklch, #0A0A0A 100%, transparent) 0%, color-mix(in oklch, #0A0A0A 80%, transparent) 10%, transparent 22%)",
              opacity: 1,
            }}
          />

          <div className="">
            {/* Right: About + Skills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1
                className="font-sans font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left"
                style={{
                  background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                About <span className="ml-1 font-bold"
                  style={{
                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                > Me</span>
              </h1>

              <p className="mt-4 text-muted-foreground font-extralight text-base md:text-lg leading-7 md:leading-9">
                I'm a{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">front‑end engineer</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(34, 211, 238, 0.1))",
                    }}
                  />
                </span>{" "}
                focused on{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">motion</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(168, 85, 247, 0.1), rgba(244, 114, 182, 0.1))",
                    }}
                  />
                </span>
                ,{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">accessibility</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-500 to-emerald-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(34, 197, 94, 0.1), rgba(52, 211, 153, 0.1))",
                    }}
                  />
                </span>
                , and{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">performance</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-red-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(249, 115, 22, 0.1), rgba(248, 113, 113, 0.1))",
                    }}
                  />
                </span>
                . I love crafting{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">immersive</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-blue-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(99, 102, 241, 0.1), rgba(96, 165, 250, 0.1))",
                    }}
                  />
                </span>
                ,{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">minimal web experiences</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-yellow-500 to-amber-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(234, 179, 8, 0.1), rgba(251, 191, 36, 0.1))",
                    }}
                  />
                </span>{" "}
                that feel{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">fast</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-rose-500 to-pink-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(244, 63, 94, 0.1), rgba(244, 114, 182, 0.1))",
                    }}
                  />
                </span>
                ,{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">responsive</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(20, 184, 166, 0.1), rgba(34, 211, 238, 0.1))",
                    }}
                  />
                </span>
                , and{" "}
                <span className="relative inline-block group cursor-default">
                  <span className="relative z-10 text-foreground font-normal">elegant</span>
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-purple-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 1.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.span
                    className="absolute inset-0 -z-10 rounded"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      background: "linear-gradient(90deg, rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1))",
                    }}
                  />
                </span>
                .
              </p>

              {/* Skill Pills with Animated Hover */}
              <ul className="mt-6 flex flex-wrap gap-3">
                {[
                  { name: "Clean UX", gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(34, 211, 238, 0.15))" },
                  { name: "Accessibility", gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(52, 211, 153, 0.15))" },
                  { name: "Motion Design", gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(244, 114, 182, 0.15))" },
                  { name: "Web Perf", gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(248, 113, 113, 0.15))" },
                  { name: "React/Next.js", gradient: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(96, 165, 250, 0.15))" },
                  { name: "Tailwind CSS", gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 211, 238, 0.15))" },
                ].map((skill, i) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      background: skill.gradient
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{
                      backdropFilter: "blur(6px)",
                    }}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground hover:text-white cursor-default select-none"
                  >
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Section>
      </div>


      <div className="relative overflow-hidden ">
        <PageBg variant="contact" />
        <Section>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left column */}
            <div>
              <h1 className="font-sans font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left"
                style={{
                  background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                Let&apos;s  <span className="ml-1 font-bold"
                  style={{
                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent"
                  }}
                > Connect</span>
              </h1>
              <p className="lead mt-3">
                Always interested in new opportunities, collaborations, and conversations about technology and design.
              </p>
              <a
                href="mailto:test@example.com"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
                aria-label="Email"
              >
                test@example.com <span aria-hidden>→</span>
              </a>
            </div>

            {/* Right column */}
            <div>
              <p className="text-xs tracking-widest text-muted-foreground">ELSEWHERE</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "GitHub", handle: "@felixmacaspac", href: "https://github.com/anynomous001" },
                  { label: "v0.dev", handle: "@felixmacaspac", href: "https://v0.dev" },
                  { label: "HubSpot Community", handle: "@felixmacaspac", href: "https://community.hubspot.com" },
                  { label: "LinkedIn", handle: "felixmacaspac", href: "https://linkedin.com/in/anynomous001" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-xl p-4 hover:scale-[1.01] transition"
                  >
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="mt-1 text-sm text-foreground/75">{item.handle}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Smoother curved top blend */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              clipPath: "ellipse(100% 100% at 40% 40%)",
              background: "linear-gradient(to bottom, color-mix(in oklch, #0A0A0A 100%, transparent) 0%, color-mix(in oklch, #0A0A0A 80%, transparent) 10%, transparent 45%)",
              opacity: 1,
            }}
          />


        </Section>
      </div>
    </>
  )
}
