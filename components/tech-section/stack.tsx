import React from 'react'
import { motion } from "framer-motion"
import Section from '../section'



const Stack = () => {
    return (
        <div className="relative overflow-hidden">
            <Section>
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="warm-heading mt-6 flex items-center justify-center text-center font-sans text-4xl font-semibold leading-[1.05] tracking-tight sm:mt-8 sm:text-5xl md:justify-start md:text-left md:text-6xl lg:text-[75px]">
                            My <span className="warm-heading-strong font-bold">Arsenal</span>
                        </h1>

                        <p className="mt-4 max-w-4xl text-base leading-7 font-extralight text-muted-foreground md:text-lg md:leading-9">
                            My toolkit evolves with every project — from crafting{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">seamless user interfaces</span>
                                <motion.span
                                    className="warm-underline"
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
                                    className="warm-underline"
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
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . These are the tools I wield to bring ideas to life.
                        </p>

                        {/* Tech Stack Grid */}
                        <div className="mt-8 space-y-8 md:mt-10">



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
                                        { name: "JavaScript", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                        { name: "Python", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                        { name: "TypeScript", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
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
                                            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-foreground cursor-default select-none"
                                        >
                                            {tech.name}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Grid Container for Multi-Column Layout */}
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                                            { name: "React", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Next.js", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "TypeScript", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Tailwind CSS", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
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
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-foreground cursor-default select-none"
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
                                            { name: "Node.js", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Express", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
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
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-foreground cursor-default select-none"
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
                                            { name: "PostgreSQL", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Prisma", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Docker", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Redis", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Pub/Sub", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
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
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-foreground cursor-default select-none"
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
                                            { name: "LangChain", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "LangGraph", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Crew AI", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Manus AI", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "RAG Systems", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Agentic Workflows", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
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
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-foreground cursor-default select-none"
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
                                            { name: "Clean UX", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Accessibility", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Motion Design", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
                                            { name: "Web Performance", gradient: "linear-gradient(135deg, rgba(230, 225, 215, 0.14), rgba(230, 225, 215, 0.04))" },
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
                                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-muted-foreground hover:text-foreground cursor-default select-none"
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
