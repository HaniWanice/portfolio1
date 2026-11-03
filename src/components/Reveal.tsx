"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

// Apparition douce quand l'élément entre dans l'écran. Une seule fois.
export function Reveal({
  children,
  delay = 0,
  y = 28,
  as = "div",
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "p" | "section" | "h2" | "h3";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: reduce ? 0.01 : 1.1, ease: [0.16, 1, 0.3, 1], delay: reduce ? 0 : delay }}
    >
      {children}
    </M>
  );
}
