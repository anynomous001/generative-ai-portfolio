"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { BookOpenText, Github, Linkedin, Twitter } from "lucide-react";
import ShaderBackground from "@/components/ui/shader-background";

const colors = {
  50: "#f8f7f5",
  100: "#e6e1d7",
  200: "#c8b4a0",
  300: "#a89080",
  400: "#8a7060",
  500: "#6b5545",
  600: "#544237",
  700: "#3c4237",
  800: "#2a2e26",
  900: "#1a1d18",
};

export function Component() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate words
    const words = document.querySelectorAll<HTMLElement>(".word");
    words.forEach((word) => {
      const delay = parseInt(word.getAttribute("data-delay") || "0", 10);
      setTimeout(() => {
        word.style.animation = "word-appear 0.8s ease-out forwards";
      }, delay);
    });

    // Mouse gradient
    const gradient = gradientRef.current;
    function onMouseMove(e: MouseEvent) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }

    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Word hover effects
    words.forEach((word) => {
      word.addEventListener("mouseenter", () => {
        word.style.textShadow = "0 0 20px rgba(200, 180, 160, 0.5)";
      });
      word.addEventListener("mouseleave", () => {
        word.style.textShadow = "none";
      });
    });

    // Click ripple effect
    function onClick(e: MouseEvent) {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.left = e.clientX + "px";
      ripple.style.top = e.clientY + "px";
      ripple.style.width = "4px";
      ripple.style.height = "4px";
      ripple.style.background = "rgba(200, 180, 160, 0.6)";
      ripple.style.borderRadius = "50%";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.pointerEvents = "none";
      ripple.style.animation = "pulse-glow 1s ease-out forwards";
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }

    document.addEventListener("click", onClick);

    // Floating elements on load and scroll
    const floatingElements = document.querySelectorAll<HTMLElement>(".floating-element");
    let floatingStarted = false;
    function revealFloatingElements() {
      if (floatingStarted) return;
      floatingStarted = true;
      floatingElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.animationPlayState = "running";
          el.style.opacity = "0.7";
        }, index * 180);
      });
    }

    const startId = window.setTimeout(revealFloatingElements, 600);

    function onScroll() {
      revealFloatingElements();
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(startId);
    };
  }, []);

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#050505] font-primary text-[#e6e1d7]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ShaderBackground className="opacity-72" />
      </div>
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      <div className="corner-element left-4 top-4 hidden sm:block md:left-8 md:top-8" style={{ animationDelay: "4s" }}>
        <div className="absolute left-0 top-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>
      <div className="corner-element right-4 top-4 hidden sm:block md:right-8 md:top-8" style={{ animationDelay: "4.2s" }}>
        <div className="absolute right-0 top-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>
      <div className="corner-element bottom-4 left-4 hidden sm:block md:bottom-8 md:left-8" style={{ animationDelay: "4.4s" }}>
        <div className="absolute bottom-0 left-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>
      <div className="corner-element bottom-4 right-4 hidden sm:block md:bottom-8 md:right-8" style={{ animationDelay: "4.6s" }}>
        <div className="absolute bottom-0 right-0 h-2 w-2 opacity-30" style={{ background: colors[200] }} />
      </div>

      <div className="floating-element hidden sm:block" style={{ top: "25%", left: "15%", animationDelay: "5s" }}></div>
      <div className="floating-element hidden sm:block" style={{ top: "60%", left: "85%", animationDelay: "5.5s" }}></div>
      <div className="floating-element hidden sm:block" style={{ top: "40%", left: "10%", animationDelay: "6s" }}></div>
      <div className="floating-element hidden sm:block" style={{ top: "75%", left: "90%", animationDelay: "6.5s" }}></div>

      <div className="relative z-10 flex min-h-dvh items-center px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16">
        <div className="mx-auto w-full max-w-6xl text-center">
            <p
              className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-80 sm:text-[11px] md:text-xs"
              style={{ color: colors[200] }}
            >
              <span className="word" data-delay="0">PORTFOLIO</span>
              <span className="word" data-delay="180">/</span>
              <span className="word" data-delay="360">2026</span>
            </p>

            <h1
              className="mt-5 text-decoration text-4xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.8rem]"
              style={{ color: colors[200] }}
            >
              <span className="block">Pritam</span>
              <span className="block">Chakroborty</span>
            </h1>

            <div
              className="mx-auto mt-6 max-w-4xl text-base font-normal leading-[1.5] tracking-[-0.02em] sm:text-xl md:mt-8 md:max-w-5xl md:text-[1.95rem]"
              style={{ color: colors[50] }}
            >
              <span>Full Stack Generative AI Developer </span>
              <span style={{ color: colors[200] }}>crafting digital experiences at the intersection of </span>
              <span className="underline decoration-2 underline-offset-6" style={{ textDecorationColor: "#3ec9ff" }}>
                design,
              </span>
              <span> </span>
              <span className="underline decoration-2 underline-offset-6" style={{ textDecorationColor: "#6ad58a" }}>
                technology,
              </span>
              <span style={{ color: colors[200] }}> and </span>
              <span className="underline decoration-2 underline-offset-6" style={{ textDecorationColor: colors[200] }}>
                user experience.
              </span>
            </div>

            <div className="mx-auto mt-10 max-w-5xl md:mt-12">
              <div className="flex flex-col items-center gap-6">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.22em] sm:text-xs" style={{ color: colors[50] }}>
                    FOCUS
                  </p>
                  <ul className="mt-4 flex flex-wrap justify-center gap-2">
                    {["Next.js", "React", "TypeScript", "LangChain", "LangGraph", "Node.js", "RAG", "Agentic Workflows", "Automation"].map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border px-3 py-1.5 text-xs sm:text-sm"
                        style={{
                          borderColor: "rgba(248,247,245,0.22)",
                          background: "transparent",
                          color: colors[50],
                        }}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm sm:text-base" style={{ color: colors[200] }}>
              <span className="inline-flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Available for work
              </span>
              <span className="opacity-70">Kolkata, India</span>
              <span className="hidden h-1 w-1 rounded-full opacity-50 lg:block" style={{ background: colors[200] }} />
              <span className="opacity-90">Software Developer @ Prep-Piper</span>
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/Generative_AI_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-6 py-3.5 text-base font-medium transition hover:bg-white/[0.04] sm:w-auto sm:px-6 sm:py-4 sm:text-lg"
                style={{ borderColor: "rgba(248,247,245,0.22)", color: colors[50] }}
              >
                Resume
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="mailto:chakrobortypritam1@gmail.com"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-6 py-3.5 text-base font-medium transition hover:bg-white/[0.04] sm:w-auto sm:px-6 sm:py-4 sm:text-lg"
                style={{ borderColor: "rgba(200,180,160,0.18)", color: colors[50], background: "rgba(255,255,255,0.04)" }}
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                { label: "GitHub", href: "https://github.com/anynomous001", icon: Github },
                { label: "X", href: "https://x.com/Pritamchak001", icon: Twitter },
                { label: "Hashnode", href: "https://hashnode.com/@Pritam-dev", icon: BookOpenText },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/pritamchakroborty/", icon: Linkedin },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-white/[0.05] sm:h-12 sm:w-12"
                    style={{
                      borderColor: "rgba(248,247,245,0.15)",
                      background: "rgba(255,255,255,0.025)",
                      color: colors[50],
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
        </div>
      </div>

      <div
        id="mouse-gradient"
        ref={gradientRef}
        className="pointer-events-none fixed h-72 w-72 rounded-full opacity-0 blur-3xl transition-all duration-500 ease-out sm:h-96 sm:w-96"
        style={{
          background: `radial-gradient(circle, ${colors[500]}0D 0%, transparent 100%)`,
        }}
      ></div>
    </div>
  );
}
