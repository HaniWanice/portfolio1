"use client";

import { useEffect } from "react";

/**
 * Page-level motion: a reading-progress hairline, magnetic buttons and a
 * pointer tilt on project cards. Everything is pointer-fine only, and
 * reduced motion gets the page without any of it.
 */
export function Effects() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const paint = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--progress",
        String(max > 0 ? Math.min(1, window.scrollY / max) : 0),
      );
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cleanups: Array<() => void> = [];

    if (fine && !reduced) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const strength = 0.24;
        let raf = 0;
        let x = 0;
        let y = 0;

        const apply = () => {
          raf = 0;
          el.style.setProperty("--mag-x", `${x.toFixed(1)}px`);
          el.style.setProperty("--mag-y", `${y.toFixed(1)}px`);
        };

        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          x = (event.clientX - (rect.left + rect.width / 2)) * strength;
          y = (event.clientY - (rect.top + rect.height / 2)) * strength;
          if (!raf) raf = requestAnimationFrame(apply);
        };

        const reset = () => {
          el.style.setProperty("--mag-x", "0px");
          el.style.setProperty("--mag-y", "0px");
        };

        el.addEventListener("pointermove", move, { passive: true });
        el.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
          if (raf) cancelAnimationFrame(raf);
        });
      });

      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        let raf = 0;
        let rx = 0;
        let ry = 0;

        const apply = () => {
          raf = 0;
          el.style.setProperty("--tilt-x", `${rx.toFixed(2)}deg`);
          el.style.setProperty("--tilt-y", `${ry.toFixed(2)}deg`);
        };

        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const nx = (event.clientX - rect.left) / rect.width - 0.5;
          const ny = (event.clientY - rect.top) / rect.height - 0.5;
          rx = -ny * 4;
          ry = nx * 4;
          if (!raf) raf = requestAnimationFrame(apply);
        };

        const reset = () => {
          el.style.setProperty("--tilt-x", "0deg");
          el.style.setProperty("--tilt-y", "0deg");
        };

        el.addEventListener("pointermove", move, { passive: true });
        el.addEventListener("pointerleave", reset);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", reset);
          if (raf) cancelAnimationFrame(raf);
        });
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      cleanups.forEach((off) => off());
    };
  }, []);

  return <div className="progress" aria-hidden="true" />;
}
