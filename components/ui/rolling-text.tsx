import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RollingTextProps {
  text: string;
  speed?: number; // delay between letters (default 0.05)
  duration?: number; // total animation duration in seconds (default 4)
  className?: string;
}

export const RollingText: React.FC<RollingTextProps> = ({
  text,
  speed = 0.05,
  duration = 4,
  className = "",
}) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true });

  const letters = text.split("");

  // To stagger letters rolling from center, calculate stagger order around center index
  const centerIndex = Math.floor(letters.length / 2);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const letterVariants = {
    hidden: { rotateX: 90, opacity: 0 },
    visible: (i: number) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        rotateX: { type: "spring", stiffness: 300, damping: 20, duration },
        opacity: { duration: 0.2 },
        delay: Math.abs(centerIndex - i) * speed,
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={`flex justify-center gap-[2px] perspective-1000 ${className}`}
      style={{ perspective: 1000 }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={`letter-${i}`}
          custom={i}
          initial="hidden"
          animate={controls}
          variants={letterVariants}
          className="inline-block origin-center"
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};
