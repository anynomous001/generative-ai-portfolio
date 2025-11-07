import React from 'react'
import ProjectShowcase from './project-showcase'
import Section from '../section'

const Projects = () => {
    return (
        <div className="min-h-[calc(100dvh-64px)] relative overflow-hidden bg-oklch(0.145 0 0)">

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

            <div
                aria-hidden
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    clipPath: "ellipse(100% 100% at 40% 40%)",
                    background: "linear-gradient(to bottom, color-mix(in oklch, #0A0A0A 100%, transparent) 0%, color-mix(in oklch, #0A0A0A 80%, transparent) 10%, transparent 12%)",
                    opacity: 1,
                }}
            />

            <Section className="relative z-20">
                <h1 className="font-sans font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left mt-8"
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
                    > Works</span>
                </h1>

                <ProjectShowcase />
            </Section>


        </div>
    )
}

export default Projects