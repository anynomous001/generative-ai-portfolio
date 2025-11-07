import React from 'react'
import { motion } from "framer-motion"
import PageBg from '../backgrounds/page-bg'
import Section from '../section'



const Stack = () => {
    return (
        <div className="relative bg-oklch(0.145 0 0) overflow-hidden">

            <PageBg variant="stripe" />

            <Section>
                {/* Smoother curved top blend */}
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        clipPath: "ellipse(100% 100% at 40% 40%)",
                        background: "linear-gradient(to bottom, color-mix(in oklch, #0A0A0A 100%, transparent) 0%, color-mix(in oklch, #0A0A0A 80%, transparent) 10%, transparent 32%)",
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
                            className="font-sans mt-8 font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left"
                            style={{
                                background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent"
                            }}
                        >
                            My <span className=" font-bold"
                                style={{
                                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent"
                                }}
                            >Arsenal</span>
                        </h1>

                        <p className="mt-4 text-muted-foreground font-extralight text-base md:text-lg leading-7 md:leading-9">
                            My toolkit evolves with every project — from crafting{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">seamless user interfaces</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            to building{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">intelligent backend systems</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            and deploying{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">production-grade AI workflows</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-500 to-emerald-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . These are the tools I wield to bring ideas to life.
                        </p>

                        {/* Tech Stack Grid */}
                        <div className="mt-10 space-y-8">



                            {/* Languages */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase">
                                    Languages
                                </h3>
                                <ul className="flex flex-wrap gap-3">
                                    {[
                                        { name: "JavaScript", gradient: "linear-gradient(135deg, rgba(234, 179, 8, 0.15), rgba(250, 204, 21, 0.15))" },
                                        { name: "Python", gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.15))" },
                                        { name: "TypeScript", gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(34, 211, 238, 0.15))" },
                                    ].map((tech, i) => (
                                        <motion.li
                                            key={tech.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            viewport={{ once: true }}
                                            whileHover={{
                                                scale: 1.1,
                                                background: tech.gradient
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            style={{
                                                backdropFilter: "blur(6px)",
                                            }}
                                            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-white cursor-default select-none"
                                        >
                                            {tech.name}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Grid Container for Multi-Column Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Frontend */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase">
                                        Frontend
                                    </h3>
                                    <ul className="flex flex-wrap gap-3">
                                        {[
                                            { name: "React", gradient: "linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(96, 165, 250, 0.15))" },
                                            { name: "Next.js", gradient: "linear-gradient(135deg, rgba(148, 163, 184, 0.15), rgba(203, 213, 225, 0.15))" },
                                            { name: "TypeScript", gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(34, 211, 238, 0.15))" },
                                            { name: "Tailwind CSS", gradient: "linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(34, 211, 238, 0.15))" },
                                        ].map((tech, i) => (
                                            <motion.li
                                                key={tech.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    background: tech.gradient
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                style={{
                                                    backdropFilter: "blur(6px)",
                                                }}
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-white cursor-default select-none"
                                            >
                                                {tech.name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Backend */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase">
                                        Backend
                                    </h3>
                                    <ul className="flex flex-wrap gap-3">
                                        {[
                                            { name: "Node.js", gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(52, 211, 153, 0.15))" },
                                            { name: "Express", gradient: "linear-gradient(135deg, rgba(148, 163, 184, 0.15), rgba(203, 213, 225, 0.15))" },
                                        ].map((tech, i) => (
                                            <motion.li
                                                key={tech.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    background: tech.gradient
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                style={{
                                                    backdropFilter: "blur(6px)",
                                                }}
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-white cursor-default select-none"
                                            >
                                                {tech.name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Database & Infrastructure */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase">
                                        Database & Infrastructure
                                    </h3>
                                    <ul className="flex flex-wrap gap-3">
                                        {[
                                            { name: "PostgreSQL", gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(96, 165, 250, 0.15))" },
                                            { name: "Prisma", gradient: "linear-gradient(135deg, rgba(148, 163, 184, 0.15), rgba(203, 213, 225, 0.15))" },
                                            { name: "Docker", gradient: "linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(59, 130, 246, 0.15))" },
                                            { name: "Redis", gradient: "linear-gradient(135deg, rgba(239, 68, 68, 0.15), rgba(248, 113, 113, 0.15))" },
                                            { name: "Pub/Sub", gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(251, 146, 60, 0.15))" },
                                        ].map((tech, i) => (
                                            <motion.li
                                                key={tech.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    background: tech.gradient
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                style={{
                                                    backdropFilter: "blur(6px)",
                                                }}
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-white cursor-default select-none"
                                            >
                                                {tech.name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* AI Toolkit */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase">
                                        AI Toolkit
                                    </h3>
                                    <ul className="flex flex-wrap gap-3">
                                        {[
                                            { name: "LangChain", gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(52, 211, 153, 0.15))" },
                                            { name: "LangGraph", gradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(52, 211, 153, 0.15))" },
                                            { name: "Crew AI", gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(192, 132, 252, 0.15))" },
                                            { name: "Manus AI", gradient: "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(168, 85, 247, 0.15))" },
                                            { name: "RAG Systems", gradient: "linear-gradient(135deg, rgba(244, 114, 182, 0.15), rgba(251, 146, 188, 0.15))" },
                                            { name: "Agentic Workflows", gradient: "linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(244, 114, 182, 0.15))" },
                                        ].map((tech, i) => (
                                            <motion.li
                                                key={tech.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    background: tech.gradient
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                style={{
                                                    backdropFilter: "blur(6px)",
                                                }}
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-white cursor-default select-none"
                                            >
                                                {tech.name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>

                                {/* Specializations */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-sm font-medium text-muted-foreground mb-3 tracking-wider uppercase">
                                        Specializations
                                    </h3>
                                    <ul className="flex flex-wrap gap-3">
                                        {[
                                            { name: "Clean UX", gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(34, 211, 238, 0.15))" },
                                            { name: "Accessibility", gradient: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(52, 211, 153, 0.15))" },
                                            { name: "Motion Design", gradient: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(244, 114, 182, 0.15))" },
                                            { name: "Web Performance", gradient: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(248, 113, 113, 0.15))" },
                                        ].map((tech, i) => (
                                            <motion.li
                                                key={tech.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    background: tech.gradient
                                                }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                                style={{
                                                    backdropFilter: "blur(6px)",
                                                }}
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-white cursor-default select-none"
                                            >
                                                {tech.name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </Section>
        </div>
    )
}

export default Stack