"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-[#e6e1d7] to-[#bcae9f] py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[24rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background z-0 sm:min-h-[28rem] md:min-h-screen",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-110 items-center justify-center isolate z-0 sm:scale-y-125">
        <motion.div
          initial={{ opacity: 0.5, scaleX: 0.55 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-44 w-[min(38rem,92vw)] overflow-visible bg-gradient-conic from-[#e6e1d7] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] sm:h-52 md:h-56"
        >
          <div className="absolute bottom-0 left-0 z-20 h-32 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)] sm:h-40" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-24 bg-background [mask-image:linear-gradient(to_right,white,transparent)] sm:w-40" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, scaleX: 0.55 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-44 w-[min(38rem,92vw)] bg-gradient-conic from-transparent via-transparent to-[#e6e1d7] text-white [--conic-position:from_290deg_at_center_top] sm:h-52 md:h-56"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-24 bg-background [mask-image:linear-gradient(to_left,white,transparent)] sm:w-40" />
          <div className="absolute bottom-0 right-0 z-20 h-32 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)] sm:h-40" />
        </motion.div>
        <div className="absolute top-1/2 h-40 w-full translate-y-10 scale-x-150 bg-background blur-2xl sm:h-48 sm:translate-y-12"></div>
        <div className="absolute top-1/2 z-50 h-40 w-full bg-transparent opacity-10 backdrop-blur-md sm:h-48"></div>
        <div className="absolute inset-auto z-50 h-32 w-[min(40rem,95vw)] -translate-y-1/2 rounded-full bg-[#e6e1d7] opacity-25 blur-3xl sm:h-40"></div>
        <motion.div
          initial={{ scaleX: 0.45 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-32 w-[min(24rem,75vw)] -translate-y-[4.7rem] rounded-full bg-[#e6e1d7] opacity-70 blur-2xl sm:h-40 sm:-translate-y-[6rem]"
        ></motion.div>
        <motion.div
          initial={{ scaleX: 0.55 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[min(38rem,92vw)] -translate-y-[5.6rem] bg-[#e6e1d7] sm:-translate-y-[7rem]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-32 w-full -translate-y-[9.4rem] bg-background sm:h-44 sm:-translate-y-[12.5rem]"></div>
      </div>

      <div className="relative z-50 flex -translate-y-56 flex-col items-center px-4 sm:-translate-y-64 sm:px-5 md:-translate-y-80">
        {children}
      </div>
    </div>
  );
};
