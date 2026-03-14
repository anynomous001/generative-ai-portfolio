import React from 'react'
import { motion } from "framer-motion"
import PageBg from '../backgrounds/page-bg'
import Section from '../section'
import { GlowCard } from "@/components/ui/spotlight-card"

const Blog = () => {
    return (
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
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="warm-heading flex items-center justify-center text-center font-sans text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:justify-start md:text-left md:text-6xl lg:text-[75px]">
                            My <span className="warm-heading-strong ml-1 font-bold">Writings</span>
                        </h1>

                        <p className="mt-4 max-w-4xl text-base leading-7 font-extralight text-muted-foreground md:text-lg md:leading-9">
                            Sharing my learnings, insights, and explorations in{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">generative AI</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            ,{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">fullstack development</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            , and the journey of building{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">products that matter</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . Read on for deep dives, practical tips, and late-night thoughts.
                        </p>

                        {/* Blog Cards Grid */}
                        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                            {[
                                {
                                    title: "Prompting Techniques: Your Toolkit for Mastering AI Communication",
                                    excerpt: "A Beginner's guide on basics of prompting techniques. Learn how to craft effective prompts to get the best results from AI models like GPT-4 and Claude.",
                                    category: "AI & LLMs",
                                    readTime: "12 min read",
                                    date: "Nov 4, 2025",
                                    gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(5, 5, 5, 0.02))",
                                    url: "https://prompt-engineering-effective-way-to-communicate-with-ai.hashnode.dev/prompting-techniques-your-toolkit-for-mastering-ai-communication",
                                    bgGradient: "from-black/95 via-black/92 to-black/80",
                                },
                                {
                                    title: "Real-time Voice Processing with WebSockets and Deepgram",
                                    excerpt: "A comprehensive guide to implementing real-time voice transcription in your web applications using WebSockets, Deepgram API, and optimized event handling.",
                                    category: "Backend & API",
                                    readTime: "15 min read",
                                    date: "Oct 28, 2025",
                                    gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(5, 5, 5, 0.02))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-black/95 via-black/92 to-black/80",
                                },
                                {
                                    title: "Automating Your Workflow: n8n Patterns and Best Practices",
                                    excerpt: "Master advanced n8n automation patterns including error handling, conditional logic, and integrations with third-party APIs for enterprise-grade automation.",
                                    category: "Automation",
                                    readTime: "10 min read",
                                    date: "Oct 15, 2025",
                                    gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(5, 5, 5, 0.02))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-black/95 via-black/92 to-black/80",
                                },
                                {
                                    title: "Next.js Performance Optimization: From SSR to ISR",
                                    excerpt: "Deep dive into Next.js rendering strategies. Learn when to use SSG, SSR, ISR, and CSR for optimal performance, SEO, and user experience.",
                                    category: "Frontend",
                                    readTime: "14 min read",
                                    date: "Oct 8, 2025",
                                    gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(5, 5, 5, 0.02))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-black/95 via-black/92 to-black/80",
                                },
                                {
                                    title: "RAG Systems Explained: Building Intelligent Document Assistants",
                                    excerpt: "Understand Retrieval-Augmented Generation from first principles. Build a document Q&A system using embeddings, vector databases, and LLMs.",
                                    category: "AI & LLMs",
                                    readTime: "18 min read",
                                    date: "Sep 30, 2025",
                                    gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(5, 5, 5, 0.02))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-black/95 via-black/92 to-black/80",
                                },
                                {
                                    title: "PostgreSQL & Prisma: Building Type-Safe Database Applications",
                                    excerpt: "Learn how to leverage Prisma ORM with PostgreSQL to write type-safe, scalable database code with zero runtime errors and incredible developer experience.",
                                    category: "Database",
                                    readTime: "11 min read",
                                    date: "Sep 22, 2025",
                                    gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(5, 5, 5, 0.02))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-black/95 via-black/92 to-black/80",
                                },
                            ].map((blog, i) => (
                                <motion.div
                                    key={blog.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -8,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    className="h-full"
                                >
                                    <GlowCard
                                        glowColor="warm"
                                        customSize
                                        className={`group h-full overflow-hidden rounded-2xl bg-gradient-to-br ${blog.bgGradient} p-5 sm:p-6`}
                                    >
                                        {/* Glassy overlay effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#e6e1d7]/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                        {/* Animated border gradient on hover */}
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                background: blog.gradient,
                                                opacity: 0,
                                                transition: "opacity 0.3s ease",
                                            }}
                                        />

                                        <a
                                            href={blog.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative z-10 block h-full"
                                        >
                                        {/* Category Badge */}
                                        <div className="mb-4 inline-block">
                                            <motion.span
                                                initial={{ opacity: 0.7 }}
                                                whileHover={{ opacity: 1 }}
                                                className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
                                            >
                                                {blog.category}
                                            </motion.span>
                                        </div>

                                        {/* Title */}
                                            <h3 className="mb-3 text-lg font-semibold leading-tight text-foreground transition-colors duration-300 line-clamp-2 group-hover:text-foreground sm:text-xl">
                                            {blog.title}
                                        </h3>

                                        {/* Excerpt */}
                                            <p className="mb-4 text-sm leading-6 text-muted-foreground line-clamp-3">
                                            {blog.excerpt}
                                        </p>

                                        {/* Meta Information */}
                                        <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                                <span>{blog.date}</span>
                                                <span className="text-foreground/20">•</span>
                                                <span>{blog.readTime}</span>
                                            </div>

                                            {/* Arrow Icon */}
                                            <motion.div
                                                initial={{ x: 0, opacity: 0.6 }}
                                                whileHover={{ x: 4, opacity: 1 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                                className="text-muted-foreground group-hover:text-foreground transition-colors"
                                            >
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                    />
                                                </svg>
                                            </motion.div>
                                        </div>
                                        </a>
                                    </GlowCard>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA to Hashnode */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-10 flex justify-center md:mt-12"
                        >
                            <a
                                href="https://hashnode.com/@yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/25 hover:bg-white/10 hover:text-foreground hover:shadow-lg hover:shadow-black/30 sm:px-8"
                            >
                                <span>View All Articles on Hashnode</span>
                                <motion.svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </motion.svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}

export default Blog
