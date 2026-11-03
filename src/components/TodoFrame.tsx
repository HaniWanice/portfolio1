"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

// Une fenêtre de navigateur qui s'incline légèrement vers le pointeur.
export function TodoFrame() {
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });
  const ry = useSpring(useMotionValue(0), { stiffness: 120, damping: 16 });

  return (
    <div
      className="frame-wrap"
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 12);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 9);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <motion.div className="frame" style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}>
        <div className="frame-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>haniwanice.github.io/todo-smart</span>
        </div>
        <Image src="/images/todo-smart.jpg" alt="Capture de l'application Todo Smart" width={1200} height={750} sizes="(min-width: 900px) 52vw, 92vw" />
      </motion.div>
    </div>
  );
}
