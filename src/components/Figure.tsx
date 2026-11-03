"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";

// Figures Hairline (traits isométriques qui répondent au pointeur).
// Le module n'est chargé que lorsque la figure approche de l'écran : rien ne
// s'exécute au chargement de la page, et la boîte 5:4 réserve la place.
type Props = { "aria-label": string; intensity: number; play: boolean };
const loaders = {
  vault: () => import("@lucasmarkes/hairline/react").then((m) => m.Vault),
  branches: () => import("@lucasmarkes/hairline/react").then((m) => m.Branches),
} as const;

export function Figure({ name, label }: { name: keyof typeof loaders; label: string }) {
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
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [name]);

  return (
    <div ref={box} style={{ aspectRatio: "5 / 4", width: "100%" }} role={C ? undefined : "img"} aria-label={C ? undefined : label}>
      {C && <C aria-label={label} intensity={0.6} play />}
    </div>
  );
}
