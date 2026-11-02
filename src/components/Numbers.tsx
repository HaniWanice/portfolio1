"use client";

import { useEffect, useRef, useState } from "react";
import { Terrain } from "@lucasmarkes/hairline/react";
import { stats } from "@/lib/site";

type Format = "pad" | "space" | "raw";

function format(value: number, style: Format) {
  if (style === "pad") return String(Math.round(value)).padStart(2, "0");
  if (style === "space") return Math.round(value).toLocaleString("fr-FR");
  return String(Math.round(value));
}

export function Numbers() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [values, setValues] = useState<number[] | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1200;

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setValues(stats.map((stat) => stat.count * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
          else setValues(null);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="numbers" aria-label="Chiffres clés">
      <div className="wrap numbers__inner">
        <div className="numbers__data" ref={ref}>
          {stats.map((stat, index) => (
            <div className="stat" key={stat.label}>
              <span className="stat__num" aria-hidden="true">
                {format(values ? values[index] : stat.count, stat.format as Format)}
              </span>
              <span className="sr-only">
                {format(stat.count, stat.format as Format)} {stat.label}
              </span>
              <span className="stat__label">{stat.label}</span>
              <span className="stat__detail">{stat.detail}</span>
            </div>
          ))}
        </div>

        <div className="numbers__figure">
          <Terrain
            intensity={0.75}
            play
            theme="dark"
            label="Grille isométrique de piliers qui se lèvent autour du curseur : le système construit pendant le stage."
          />
          <p className="numbers__caption mono">
            Des systèmes réels, pas des exercices
          </p>
        </div>
      </div>
    </section>
  );
}
