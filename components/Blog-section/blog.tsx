import React from 'react'
import { motion } from "framer-motion"
import PageBg from '../backgrounds/page-bg'
import Section from '../section'

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
                {/* Smoother curved top blend */}
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        clipPath: "ellipse(100% 100% at 20% 20%)",
                        background: "linear-gradient(to bottom, color-mix(in oklch, #0A0A0A 100%, transparent) 0%, color-mix(in oklch, #0A0A0A 80%, transparent) 10%, transparent 12%)",
                        opacity: 1,
                    }}
                />

                <div className="">
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
                            My <span className="ml-1 font-bold"
                                style={{
                                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent"
                                }}
                            >Writings</span>
                        </h1>

                        <p className="mt-4 text-muted-foreground font-extralight text-base md:text-lg leading-7 md:leading-9">
                            Sharing my learnings, insights, and explorations in{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">generative AI</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-400"
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
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"
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
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-500 to-emerald-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . Read on for deep dives, practical tips, and late-night thoughts.
                        </p>

                        {/* Blog Cards Grid */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Prompting Techniques: Your Toolkit for Mastering AI Communication",
                                    excerpt: "A Beginner's guide on basics of prompting techniques. Learn how to craft effective prompts to get the best results from AI models like GPT-4 and Claude.",
                                    category: "AI & LLMs",
                                    readTime: "12 min read",
                                    date: "Nov 4, 2025",
                                    gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(192, 132, 252, 0.15))",
                                    url: "https://prompt-engineering-effective-way-to-communicate-with-ai.hashnode.dev/prompting-techniques-your-toolkit-for-mastering-ai-communication",
                                    bgGradient: "from-purple-500/10 to-pink-500/10",
                                },
                                {
                                    title: "Real-time Voice Processing with WebSockets and Deepgram",
                                    excerpt: "A comprehensive guide to implementing real-time voice transcription in your web applications using WebSockets, Deepgram API, and optimized event handling.",
                                    category: "Backend & API",
                                    readTime: "15 min read",
                                    date: "Oct 28, 2025",
                                    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.15))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-blue-500/10 to-cyan-500/10",
                                },
                                {
                                    title: "Automating Your Workflow: n8n Patterns and Best Practices",
                                    excerpt: "Master advanced n8n automation patterns including error handling, conditional logic, and integrations with third-party APIs for enterprise-grade automation.",
                                    category: "Automation",
                                    readTime: "10 min read",
                                    date: "Oct 15, 2025",
                                    gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(52, 211, 153, 0.15))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-green-500/10 to-emerald-500/10",
                                },
                                {
                                    title: "Next.js Performance Optimization: From SSR to ISR",
                                    excerpt: "Deep dive into Next.js rendering strategies. Learn when to use SSG, SSR, ISR, and CSR for optimal performance, SEO, and user experience.",
                                    category: "Frontend",
                                    readTime: "14 min read",
                                    date: "Oct 8, 2025",
                                    gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 211, 238, 0.15))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-teal-500/10 to-cyan-500/10",
                                },
                                {
                                    title: "RAG Systems Explained: Building Intelligent Document Assistants",
                                    excerpt: "Understand Retrieval-Augmented Generation from first principles. Build a document Q&A system using embeddings, vector databases, and LLMs.",
                                    category: "AI & LLMs",
                                    readTime: "18 min read",
                                    date: "Sep 30, 2025",
                                    gradient: "linear-gradient(135deg, rgba(244, 114, 182, 0.15), rgba(251, 146, 188, 0.15))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-pink-500/10 to-rose-500/10",
                                },
                                {
                                    title: "PostgreSQL & Prisma: Building Type-Safe Database Applications",
                                    excerpt: "Learn how to leverage Prisma ORM with PostgreSQL to write type-safe, scalable database code with zero runtime errors and incredible developer experience.",
                                    category: "Database",
                                    readTime: "11 min read",
                                    date: "Sep 22, 2025",
                                    gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(248, 113, 113, 0.15))",
                                    url: "https://hashnode.com/@yourusername",
                                    bgGradient: "from-orange-500/10 to-red-500/10",
                                },
                            ].map((blog, i) => (
                                <motion.a
                                    key={blog.title}
                                    href={blog.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -8,
                                        transition: { type: "spring", stiffness: 300 }
                                    }}
                                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${blog.bgGradient} p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-white/5 cursor-pointer`}
                                >
                                    {/* Glassy overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Animated border gradient on hover */}
                                    <div
                                        className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: blog.gradient,
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                        }}
                                    // className="group-hover:opacity-20"
                                    />

                                    <div className="relative z-10">
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
                                        <h3 className="mb-3 text-xl font-semibold text-foreground leading-tight group-hover:text-white transition-colors duration-300 line-clamp-2">
                                            {blog.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="mb-4 text-sm text-muted-foreground leading-6 line-clamp-3">
                                            {blog.excerpt}
                                        </p>

                                        {/* Meta Information */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <span>{blog.date}</span>
                                                <span className="text-white/20">•</span>
                                                <span>{blog.readTime}</span>
                                            </div>

                                            {/* Arrow Icon */}
                                            <motion.div
                                                initial={{ x: 0, opacity: 0.6 }}
                                                whileHover={{ x: 4, opacity: 1 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                                className="text-muted-foreground group-hover:text-white transition-colors"
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
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA to Hashnode */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-12 flex justify-center"
                        >
                            <a
                                href="https://hashnode.com/@yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/10"
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