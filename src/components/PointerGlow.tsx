"use client";

import { useEffect, useRef } from "react";

export function PointerGlow({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let left = 0;
    let top = 0;

    const paint = () => {
      frame = 0;
      el.style.setProperty("--mx", `${x - left}px`);
      el.style.setProperty("--my", `${y - top}px`);
      el.style.opacity = "1";
    };

    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      left = rect.left;
      top = rect.top;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    host.addEventListener("pointermove", onMove, { passive: true });
    host.addEventListener("pointerleave", onLeave);

    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={dark ? "glow glow--dark" : "glow"}
      ref={ref}
      aria-hidden="true"
    />
  );
}
