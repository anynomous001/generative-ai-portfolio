"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceShell from "@/components/services/service-shell";

const steps = [
  {
    number: "01",
    title: "Discovery",
    duration: "Week 1",
    body: "We spend the first week understanding the actual problem — not the solution you have in mind, but the business outcome you need. What does success look like in 90 days? What's the cost of not solving this? This shapes everything that comes after.",
  },
  {
    number: "02",
    title: "Scope & Proposal",
    duration: "End of Week 1",
    body: "I come back with a written scope: what we're building, what we're not building, the timeline, and the cost. Everything is defined before work starts. You don't commit to anything until you agree the scope is right.",
  },
  {
    number: "03",
    title: "Build",
    duration: "Weekly Check-ins",
    body: "Work happens in weekly cycles. Every week you see progress — a working feature, a deployed integration, a tested workflow. No disappearing for weeks and coming back with a surprise. You're in the loop without needing to manage the details.",
  },
  {
    number: "04",
    title: "Ship & Hand Off",
    duration: "At agreed deadline",
    body: "The product is deployed and working. You receive the codebase, documentation explaining how the system works, and a walkthrough session. If you want to continue iterating, we scope what comes next. If you're taking it in-house, you have everything you need to do that.",
  },
];

export default function Process() {
  return (
    <ServiceShell
      eyebrow="HOW IT WORKS"
      title="How We Work Together"
      description="No open-ended engagements. No disappearing for weeks. No surprise rebuilds. Every project follows the same four stages — scope defined before work starts, progress visible every week."
      asideTitle="The commitment"
      asideBody="Clarity first. We define the outcome, lock the scope, ship in cycles, and leave you with something that can actually survive handoff — whether that's to your team or to your next hire."
      className="pt-10 md:pt-14"
    >
      <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)]">
        <div className="rounded-[1.5rem] border border-[rgba(248,247,245,0.1)] bg-[rgba(255,255,255,0.03)] p-5 sm:p-6">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#c8b4a0]">
            Process snapshot
          </p>
          <div className="mt-5 space-y-3">
            {["Defined scope", "Weekly visibility", "Production handoff"].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[rgba(248,247,245,0.08)] px-3 py-2 text-sm text-[#e6e1d7]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-[rgba(248,247,245,0.1)] sm:block" />
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.5rem] border border-[rgba(248,247,245,0.1)] bg-[rgba(255,255,255,0.03)] p-6 sm:ml-12 sm:p-7"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(248,247,245,0.22),transparent)]" />
                <div className="absolute left-[-2.55rem] top-8 hidden h-4 w-4 rounded-full border border-[rgba(248,247,245,0.18)] bg-[#050505] sm:block" />
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="text-4xl font-semibold tracking-tight text-[rgba(200,180,160,0.22)]">
                      {step.number}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-[#e6e1d7]">
                      {step.title}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[rgba(248,247,245,0.1)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#c8b4a0]">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c8b4a0]">
                  {step.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </ServiceShell>
  );
}
