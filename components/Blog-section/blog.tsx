"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const MONO = "var(--font-geist-mono, monospace)"

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

const articles = [
  {
    index: "01",
    title: "Prompting Techniques: Your Toolkit for Mastering AI Communication",
    excerpt: "A beginner's guide on basics of prompting techniques. Learn how to craft effective prompts to get the best results from AI models like GPT-4 and Claude.",
    category: "AI & LLMs",
    readTime: "12 min",
    date: "Nov 4, 2025",
    url: "https://prompt-engineering-effective-way-to-communicate-with-ai.hashnode.dev/prompting-techniques-your-toolkit-for-mastering-ai-communication",
  },
  {
    index: "02",
    title: "Beyond Prompts: The Rise of Context Engineering",
    excerpt: "Why modern AI systems need more than good prompts, and how context engineering changes the way we design reliable model behavior.",
    category: "AI & LLMs",
    readTime: "15 min",
    date: "Oct 28, 2025",
    url: "https://prompt-engineering-effective-way-to-communicate-with-ai.hashnode.dev/beyond-prompts-the-rise-of-context-engineering",
  },
  {
    index: "03",
    title: "Prompt Engineering: The Art of Effective AI Communication",
    excerpt: "A practical look at how better prompt design improves output quality, control, and consistency across real product workflows.",
    category: "AI & LLMs",
    readTime: "10 min",
    date: "Oct 15, 2025",
    url: "https://prompt-engineering-effective-way-to-communicate-with-ai.hashnode.dev/prompt-engineering-the-art-of-effective-ai-communication",
  },
  {
    index: "04",
    title: "Deep Agents: LangChain Context Engineering in Action",
    excerpt: "A practical look at how deeper agent workflows and context engineering come together inside LangChain-based systems.",
    category: "AI & LLMs",
    readTime: "14 min",
    date: "Oct 8, 2025",
    url: "https://prompt-engineering-effective-way-to-communicate-with-ai.hashnode.dev/deep-agents-langchain-context-engineering-in-action",
  },
  {
    index: "05",
    title: "RAG Systems Explained: Building Intelligent Document Assistants",
    excerpt: "Understand Retrieval-Augmented Generation from first principles. Build a document Q&A system using embeddings, vector databases, and LLMs.",
    category: "AI & LLMs",
    readTime: "18 min",
    date: "Sep 30, 2025",
    url: "https://hashnode.com/@pritam-dev",
  },
  {
    index: "06",
    title: "PostgreSQL & Prisma: Building Type-Safe Database Applications",
    excerpt: "Leverage Prisma ORM with PostgreSQL to write type-safe, scalable database code with zero runtime errors.",
    category: "Database",
    readTime: "11 min",
    date: "Sep 22, 2025",
    url: "https://hashnode.com/@pritam-dev",
  },
]

export default function Blog() {
  return (
    <section className="relative bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-6xl">

        <div className="relative overflow-hidden border border-white/8">
          <div className="panel-shimmer absolute inset-x-0 top-0 h-px" />
          <CB />

          {/* Panel header */}
          <div
            className="flex items-center justify-between border-b border-white/8 bg-white/[0.015] px-6 py-3"
            style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.24em", color: "#c8b4a0" }}
          >
            <span className="uppercase">Published Work</span>
            <div className="flex items-end gap-0.5">
              <span className="block w-1 origin-bottom bg-zinc-700" style={{ height: "10px", animation: "signal-bar 1.8s ease-in-out infinite" }} />
              <span className="block w-1 origin-bottom bg-zinc-700" style={{ height: "10px", animation: "signal-bar 1.8s ease-in-out infinite 0.45s" }} />
              <span className="block w-1 origin-bottom bg-[rgba(200,180,160,0.55)]" style={{ height: "10px", animation: "signal-bar 1.8s ease-in-out infinite 0.9s" }} />
            </div>
          </div>

          {/* Section heading */}
          <div className="border-b border-white/8 px-6 py-8 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[#e6e1d7] sm:text-3xl md:text-4xl lg:text-5xl">
              My <span className="text-[#c8b4a0]">Writings</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#c8b4a0] sm:text-base">
              Sharing learnings and explorations in generative AI, fullstack development, and the journey of building products that matter.
            </p>
          </div>

          {/* Column header — desktop */}
          <div
            className="hidden border-b border-white/8 px-6 py-2 sm:px-8 md:grid md:grid-cols-[2rem_minmax(0,1fr)_8rem_7rem_5rem_2rem]"
            style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.4)" }}
          >
            <span className="uppercase">#</span>
            <span className="uppercase">Title</span>
            <span className="uppercase">Category</span>
            <span className="uppercase">Date</span>
            <span className="uppercase">Read</span>
            <span />
          </div>

          {/* Article rows */}
          <div className="divide-y divide-white/5">
            {articles.map((article, i) => (
              <motion.a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group block px-4 py-4 transition-colors hover:bg-white/[0.02] sm:px-6 sm:py-5 md:px-8"
              >
                {/* Mobile layout */}
                <div className="flex items-start gap-3 md:hidden">
                  <span
                    style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.12em", color: "rgba(200,180,160,0.35)", flexShrink: 0, paddingTop: "2px" }}
                  >
                    {article.index}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug text-[#e6e1d7] transition-colors group-hover:text-white">
                      {article.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-5 text-[#c8b4a0] line-clamp-2">{article.excerpt}</p>
                    <div
                      className="mt-2 flex flex-wrap gap-3 opacity-60"
                      style={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.14em", color: "#c8b4a0" }}
                    >
                      <span>{article.category}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[2rem_minmax(0,1fr)_8rem_7rem_5rem_2rem] md:items-center md:gap-4">
                  <span
                    style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.12em", color: "rgba(200,180,160,0.35)" }}
                  >
                    {article.index}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#e6e1d7] transition-colors group-hover:text-white">
                      {article.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#c8b4a0] opacity-70">{article.excerpt}</p>
                  </div>
                  <span
                    className="border border-white/10 px-2 py-1 text-[10px] text-[#c8b4a0] w-fit"
                    style={{ fontFamily: MONO, letterSpacing: "0.1em" }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", color: "rgba(200,180,160,0.55)" }}
                  >
                    {article.date}
                  </span>
                  <span
                    style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.1em", color: "rgba(200,180,160,0.55)" }}
                  >
                    {article.readTime}
                  </span>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className="flex-shrink-0 text-[#c8b4a0] opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="border-t border-white/8 bg-white/[0.01] px-4 py-3 sm:px-6 sm:py-4 md:px-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="https://hashnode.com/@pritam-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#c8b4a0] transition-colors hover:text-[#e6e1d7]"
                style={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.18em" }}
              >
                <span className="uppercase">View All on Hashnode →</span>
              </Link>
              <span
                style={{ fontFamily: MONO, fontSize: "9px", letterSpacing: "0.2em", color: "rgba(200,180,160,0.3)" }}
              >
                HASHNODE // @PRITAM-DEV
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
