import React from 'react'
import Section from '../section'
import PageBg from '../backgrounds/page-bg'

const Contact = () => {
    return (
        <div className="relative overflow-hidden ">
            <PageBg variant="contact" />
            <Section>
                <div className="grid gap-10 md:grid-cols-2">
                    {/* Left column */}
                    <div>
                        <h1 className="font-sans font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-tight flex items-center justify-center md:justify-start text-center md:text-left"
                            style={{
                                background: "linear-gradient(90deg,#202020 10%,#c6c6c6 50%,#202020 90%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                color: "transparent"
                            }}
                        >
                            Let&apos;s  <span className="ml-1 font-bold"
                                style={{
                                    background: "linear-gradient(90deg,#ededed 20%,#515151 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    color: "transparent"
                                }}
                            > Connect</span>
                        </h1>
                        <p className="lead mt-3">
                            Always interested in new opportunities, collaborations, and conversations about technology and design.
                        </p>
                        <a
                            href="mailto:test@example.com"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 hover:bg-white/10 transition"
                            aria-label="Email"
                        >
                            test@example.com <span aria-hidden>→</span>
                        </a>
                    </div>

                    {/* Right column */}
                    <div>
                        <p className="text-xs tracking-widest text-muted-foreground">ELSEWHERE</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2">
                            {[
                                { label: "GitHub", handle: "@felixmacaspac", href: "https://github.com/anynomous001" },
                                { label: "v0.dev", handle: "@felixmacaspac", href: "https://v0.dev" },
                                { label: "HubSpot Community", handle: "@felixmacaspac", href: "https://community.hubspot.com" },
                                { label: "LinkedIn", handle: "felixmacaspac", href: "https://linkedin.com/in/anynomous001" },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="glass rounded-xl p-4 hover:scale-[1.01] transition"
                                >
                                    <div className="text-sm font-medium">{item.label}</div>
                                    <div className="mt-1 text-sm text-foreground/75">{item.handle}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Smoother curved top blend */}
                <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                        clipPath: "ellipse(100% 100% at 40% 40%)",
                        background: "linear-gradient(to bottom, color-mix(in oklch, #0A0A0A 100%, transparent) 0%, color-mix(in oklch, #0A0A0A 80%, transparent) 10%, transparent 45%)",
                        opacity: 1,
                    }}
                />


            </Section>
        </div>
    )
}

export default Contact