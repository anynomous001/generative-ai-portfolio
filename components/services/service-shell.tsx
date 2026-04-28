"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const servicePalette = {
  base: "#050505",
  text: "#e6e1d7",
  muted: "#c8b4a0",
  line: "rgba(248,247,245,0.1)",
  panel: "rgba(255,255,255,0.03)",
  panelStrong: "rgba(255,255,255,0.05)",
};

type ServiceShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  asideTitle?: string;
  asideBody?: string;
  children: ReactNode;
  className?: string;
};

export default function ServiceShell({
  eyebrow,
  title,
  description,
  asideTitle,
  asideBody,
  children,
  className,
}: ServiceShellProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#050505] px-4 py-20 sm:px-6 md:px-12 md:py-24 lg:px-16", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(248,247,245,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(248,247,245,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "88px 88px",
            maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        />
        <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-[rgba(248,247,245,0.06)] lg:block" />
        <div className="absolute left-[8%] top-16 h-24 w-24 rounded-full bg-[rgba(62,201,255,0.07)] blur-3xl" />
        <div className="absolute bottom-16 right-[8%] h-28 w-28 rounded-full bg-[rgba(200,180,160,0.06)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(248,247,245,0.1)] bg-[rgba(255,255,255,0.02)]">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(248,247,245,0.45),transparent)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(248,247,245,0.16),transparent)]" />
          <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-[rgba(230,225,215,0.55)]" />
          <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[rgba(230,225,215,0.22)]" />
          <div className="absolute bottom-5 left-5 h-2 w-2 rounded-full bg-[rgba(230,225,215,0.22)]" />

          <div className="border-b border-[rgba(248,247,245,0.08)] px-6 py-3 text-[10px] uppercase tracking-[0.24em] text-[#c8b4a0] sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>{eyebrow}</span>
              <span className="opacity-70">SERVICE PROFILE / 2026</span>
            </div>
          </div>

          <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.7fr)] lg:gap-12">
            <div>
              <h2 className="max-w-4xl text-3xl font-semibold leading-[1.02] tracking-tight text-[#e6e1d7] sm:text-4xl md:text-5xl lg:text-[3.75rem]">
                {title}
              </h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[#c8b4a0] sm:text-base sm:leading-8 md:text-lg">
                {description}
              </p>
            </div>

            {(asideTitle || asideBody) && (
              <div className="self-start rounded-[1.5rem] border border-[rgba(248,247,245,0.1)] bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
                {asideTitle && (
                  <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#e6e1d7]">
                    {asideTitle}
                  </p>
                )}
                {asideBody && (
                  <p className="mt-4 text-sm leading-7 text-[#c8b4a0] sm:text-[15px]">
                    {asideBody}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="px-6 pb-6 sm:px-8 sm:pb-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
