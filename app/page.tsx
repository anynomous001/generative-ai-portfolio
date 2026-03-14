'use client'

import PageBg from "@/components/backgrounds/page-bg"
import Section from "@/components/section"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Icon } from "@/components/ui/evervault-card"
import Projects from "@/components/projects/projects"
import Experience from "@/components/experience/experience"
import Stack from "@/components/tech-section/stack"
import About from "@/components/about-section/about"
import Contact from "@/components/contact-section/contact"
import Blog from "@/components/Blog-section/blog"
import HighlightUnderline from "@/components/hi-light/hilight_underline"


export default function HomePage() {
  return (
    <>
      {/* <PageBg variant="contact" /> */}
      <PageBg variant="hero" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Section className="relative flex min-h-dvh items-center pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="relative w-full">
            <div className="relative z-10 grid gap-10 md:grid-cols-[1.3fr_.7fr] md:items-center">
              <div>
                <p className="text-xs tracking-widest text-muted-foreground">PORTFOLIO / 2025</p>

                <h1 className="mt-4 max-w-4xl font-sans text-5xl font-semibold leading-[0.96] tracking-tight text-slate-50 md:text-[5rem] lg:text-[6.3rem]">
                  <span className="block">Pritam</span>
                  <span className="block text-sky-200">Chakroborty</span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl lg:text-2xl">
                  <span className="font-medium text-amber-300">Full Stack Generative AI Developer</span> crafting digital experiences at the intersection of{" "}
                  <HighlightUnderline colorFrom="#8ed7ff" colorTo="#4ea7ff" delay={0.2}>design</HighlightUnderline>,
                  <HighlightUnderline colorFrom="#ffd37a" colorTo="#f59e0b" delay={0.2}>technology</HighlightUnderline>, and{" "}
                  <HighlightUnderline colorFrom="#c4f1ff" colorTo="#7dd3fc" delay={0.2}>user experience</HighlightUnderline>.
                </p>


                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
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
                    className="rounded-lg border border-white/15 bg-white/[0.06] px-5 py-3 text-slate-100 transition hover:bg-white/[0.12]"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>

              {/* Right column */}
              <div className="relative flex w-full flex-col items-start rounded-xl border border-white/15 bg-slate-950/35 p-4 backdrop-blur-md sm:p-6 md:mx-0 md:max-w-md">
                {/* Decorative corner icons: hide on very small screens to avoid clutter */}
                <Icon className="absolute -left-3 -top-3 hidden h-6 w-6 text-slate-100 sm:block" />
                <Icon className="absolute -bottom-3 -left-3 hidden h-6 w-6 text-slate-100 sm:block" />
                <Icon className="absolute -right-3 -top-3 hidden h-6 w-6 text-slate-100 sm:block" />
                <Icon className="absolute -bottom-3 -right-3 hidden h-6 w-6 text-slate-100 sm:block" />

                <div>
                  <p className="text-xs tracking-[0.28em] text-slate-400">CURRENTLY</p>
                  <div className="mt-2">
                    <p className="text-base font-semibold text-slate-50">Software Developer</p>
                    <p className="text-sm text-slate-400">
                      @Prep-Piper <span className="opacity-60">· 2025 — Present</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 w-full">
                  <p className="text-xs tracking-[0.28em] text-slate-400">FOCUS</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {["Next.js", "React", "TypeScript", "LangChain", "LangGraph", "Node.js", "RAG", "Agentic Workflows", "Automation"].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/[0.12] bg-white/[0.08] px-2 py-0.5 text-xs text-slate-200"
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
                      className="w-full rounded-xl border border-white/[0.12] bg-white/[0.03] p-4 text-slate-100 transition hover:scale-[1.01] hover:bg-white/[0.06]"
                    >
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="mt-1 text-sm text-slate-400">{item.handle}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>


          </div>
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
