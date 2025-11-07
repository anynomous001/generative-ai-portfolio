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
                        <h1
                            className="font-sans font-semibold mb-8 text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left"
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
                            Hey there! I'm{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">Pritam Chakroborty</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            , a{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">Fullstack Generative AI Developer</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            from Kolkata, India — a computer science student turned{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">self-taught builder</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-green-500 to-emerald-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            with an endless curiosity for{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">all things AI</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-red-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.8 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            .
                            <br />From experimenting with the latest{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">Generative AI breakthroughs</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-blue-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.0 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            to setting up backend systems from scratch, I love staying at the{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">cutting edge</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-yellow-500 to-amber-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . With AI evolving at lightning speed, adaptability isn’t a skill — it’s survival.
                            <br />
                            I help individuals and businesses stay ahead of the curve — whether it’s{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">automating workflows</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal-500 to-cyan-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.4 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            ,{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">optimizing systems</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-rose-500 to-pink-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.6 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            , or building{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">AI-driven products</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 to-purple-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 1.8 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . My recent creation,{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">Prep-Piper</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sky-500 to-blue-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 2.0 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            , uses AI agents to streamline mock interviews and deliver feedback — redefining how interview prep works.
                            <br />
                            Outside of code, you’ll find me{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">writing blogs</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-lime-500 to-green-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 2.2 }}
                                    viewport={{ once: true }}
                                />
                            </span>{" "}
                            about my learnings, exploring new ideas, or recharging with a{" "}
                            <span className="relative inline-block group cursor-default">
                                <span className="relative z-10 text-foreground font-normal">good book or movie</span>
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-500 to-orange-400"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 0.8, delay: 2.4 }}
                                    viewport={{ once: true }}
                                />
                            </span>
                            . Always curious. Always building. Always learning.
                        </p>




                    </motion.div>
                </div>
            </Section>
        </div>)
}

export default About