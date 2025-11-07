import React from 'react'
import PageBg from '../backgrounds/page-bg'
import Timeline from '../timeline'
import Section from '../section'

const items = [
    {
        company: "Chingu",
        role: "Frontend Developer",
        period: "Dec 2023 — Mar 2024",
        points: [
            "Built an optimized to-do tracker with real-time collaboration and intuitive task categorization, reducing project completion times by 25%.",
            "Mentored a team of five developers using Agile methodology, improving delivery predictability by 60%.",
        ],
    },
    {
        company: "0101 DIGIT ALL",
        role: "Trainee Full Stack Developer",
        period: "Feb 2023 — Apr 2023",
        points: [
            "Developed and deployed a resumeless hiring platform using reusable React components, improving future development speed by 25%.",
            "Collaborated with senior developers during daily stand-ups, increasing sprint velocity by 30% and reducing bug-related rework by 45%.",
        ],
    },
];



const Experience = () => {
    return (
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

                <h1 className="font-sans font-semibold  text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left mt-8"
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


                <p className="lead ">A concise look at my professional journey.</p>
                <div className="mt-8">
                    <Timeline items={items} />
                </div>
            </Section>
        </div>)
}

export default Experience