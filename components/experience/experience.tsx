import React from 'react'
import { motion } from 'framer-motion'
import Section from '../section'
import { GlowCard } from "@/components/ui/spotlight-card"

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
    {
        company: "PixelForge Studio",
        role: "Frontend Engineer Intern",
        period: "Jun 2022 — Aug 2022",
        points: [
            "Built responsive landing pages and campaign microsites for client launches, improving mobile engagement and reducing bounce rates across key pages.",
            "Worked closely with designers to translate high-fidelity Figma concepts into reusable React UI blocks with consistent interaction patterns.",
        ],
    },
    {
        company: "NovaStack Labs",
        role: "Web Development Intern",
        period: "Jan 2022 — May 2022",
        points: [
            "Implemented admin dashboard modules and data views for internal tools, helping teams monitor operations with clearer reporting interfaces.",
            "Supported API integration, bug fixing, and QA validation across product releases, improving delivery confidence during weekly deployments.",
        ],
    },
];

const Experience = () => {
    return (
        <div className="relative">
            <Section className="pt-16 sm:pt-20 md:pt-24">
                <div className="grid gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14">
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <p className="text-xs tracking-[0.28em] text-muted-foreground">EXPERIENCE</p>
                        <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
                            Roles, teams, and product impact.
                        </h2>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                            A cleaner view of the work I have done across product delivery, frontend systems, and team collaboration.
                        </p>

                        <GlowCard glowColor="warm" customSize className="mt-8 rounded-3xl bg-white/[0.03] p-4 sm:p-5">
                            <div className="relative z-10">
                                <p className="text-xs tracking-[0.22em] text-muted-foreground">SUMMARY</p>
                                <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                                    <div>
                                        <div className="text-2xl font-semibold text-foreground">{items.length}</div>
                                        <div className="text-sm text-muted-foreground">Experience blocks</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-semibold text-foreground">Frontend</div>
                                        <div className="text-sm text-muted-foreground">Primary strength</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-semibold text-foreground">Product</div>
                                        <div className="text-sm text-muted-foreground">Execution focus</div>
                                    </div>
                                </div>
                            </div>
                        </GlowCard>
                    </div>

                    <div className="relative space-y-6">
                        <div className="absolute bottom-3 left-3 top-3 hidden w-px bg-foreground/10 lg:block" />
                        {items.map((item, index) => (
                            <motion.article
                                key={`${item.company}-${item.role}`}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                className="relative lg:pl-12"
                            >
                                <div className="absolute left-0 top-8 hidden h-6 w-6 rounded-full border border-foreground/18 bg-foreground/10 shadow-[0_0_24px_rgba(230,225,215,0.14)] lg:block" />
                                <GlowCard glowColor="warm" customSize className="overflow-hidden rounded-[1.5rem] bg-white/[0.03] p-5 backdrop-blur-sm sm:rounded-[1.8rem] sm:p-6 md:p-8">
                                    <div className="relative z-10">
                                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                                            <div>
                                                <p className="text-xs tracking-[0.24em] text-muted-foreground">{item.company}</p>
                                                <h3 className="mt-3 text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">{item.role}</h3>
                                            </div>
                                            <div className="inline-flex rounded-full border border-foreground/10 bg-black/45 px-4 py-2 text-xs text-muted-foreground sm:text-sm">
                                                {item.period}
                                            </div>
                                        </div>

                                        <div className="mt-6 grid gap-3">
                                            {item.points.map((point) => (
                                                <div
                                                    key={point}
                                                    className="rounded-2xl border border-foreground/8 bg-black/35 px-4 py-4 text-sm leading-6 text-muted-foreground sm:leading-7 md:text-base"
                                                >
                                                    {point}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </GlowCard>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default Experience
