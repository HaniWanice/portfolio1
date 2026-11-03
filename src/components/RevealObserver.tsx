"use client";

import { useEffect } from "react";

// Les éléments .reveal sont visibles par défaut. Ce composant ne les masque
// qu'une fois le JS chargé (classe .js), puis les révèle à l'entrée dans l'écran.
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.in = "true";
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    // Ce qui est déjà à l'écran au chargement ne doit pas clignoter.
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.92) el.dataset.in = "true";
      else io.observe(el);
    }
    root.classList.add("js");
    return () => io.disconnect();
  }, []);
  return null;
}
