"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react";

// Un nombre qui monte jusqu'à sa valeur quand il entre dans l'écran. Sans animation,
// la valeur finale est affichée directement (rendu serveur, JavaScript absent, mouvement réduit).
export function CountUp({ to, from = 0, duration = 1.6 }: { to: number; from?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const value = useMotionValue(to);
  const rounded = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!inView || reduce) return;
    value.set(from);
    const controls = animate(value, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduce, from, to, duration, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
