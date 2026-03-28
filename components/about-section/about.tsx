import React from 'react'
import { motion } from "framer-motion"
import PageBg from '../backgrounds/page-bg'
import Section from '../section'

const About = () => {
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
                        <h1 className="warm-heading mb-6 flex items-center justify-center text-center font-sans text-4xl font-semibold leading-[1.05] tracking-tight sm:mb-8 sm:text-5xl md:justify-start md:text-left md:text-6xl lg:text-[75px]">
                            About <span className="warm-heading-strong ml-1 font-bold"> Me</span>
                        </h1>

                        <p className="mt-4 max-w-5xl text-base leading-7 font-extralight text-muted-foreground md:text-lg md:leading-9">
                            I build{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">full-stack AI products</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            that{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">ship fast and scale smart</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . From{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">LangGraph agentic pipelines</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            to{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">production Next.js dashboards</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            , I take ownership of the full system: architecture, backend, frontend, and deployment.
                            <br />
                            Currently building{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">Prep-Piper</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.0 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            , an{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">AI-powered interview platform</span>
                                <motion.span
                                    className="warm-underline"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            , and always open to the right product opportunity.
                        </p>




                    </motion.div>
                </div>
            </Section>
        </div>)
}

export default About
