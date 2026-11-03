"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

// Figures Hairline : un objet isométrique qui répond au pointeur. Chaque figure
// illustre un projet (le relais pour le pont GLPI, le convoyeur qui ralentit pour
// le labo). Le module n'est chargé que lorsque la figure approche de l'écran.
type Props = { "aria-label": string; intensity: number; play: boolean; theme?: "light" | "dark" };
const loaders = {
  relay: () => import("@lucasmarkes/hairline/react").then((m) => m.Relay),
  slow: () => import("@lucasmarkes/hairline/react").then((m) => m.Slow),
} as const;

export function Figure({
  name,
  label,
  theme = "light",
  intensity = 0.7,
}: {
  name: keyof typeof loaders;
  label: string;
  theme?: "light" | "dark";
  intensity?: number;
}) {
  const box = useRef<HTMLDivElement>(null);
  const [C, setC] = useState<ComponentType<Props> | null>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          io.disconnect();
          loaders[name]().then((Comp) => setC(() => Comp as ComponentType<Props>));
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [name]);

  return (
    <div
      ref={box}
      className="hairline-fig"
      data-theme={theme}
      style={{ aspectRatio: "5 / 4", width: "100%" }}
      role={C ? undefined : "img"}
      aria-label={C ? undefined : label}
    >
      {C && <C aria-label={label} intensity={intensity} play theme={theme} />}
    </div>
  );
}
