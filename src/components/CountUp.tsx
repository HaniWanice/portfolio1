"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// Un nombre qui monte jusqu'à sa valeur quand il entre dans l'écran.
export function CountUp({ to, from = 0, duration = 1.6 }: { to: number; from?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [v, setV] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    setV(from);
    const c = animate(from, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, reduce, from, to, duration]);

  return (
    <span ref={ref} suppressHydrationWarning>
      {v}
    </span>
  );
}
