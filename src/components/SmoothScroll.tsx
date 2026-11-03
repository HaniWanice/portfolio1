"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Défilement lissé (Lenis). Désactivé si l'utilisateur demande moins de mouvement.
// Les liens d'ancre (#projets) passent par Lenis pour glisser au lieu de sauter.
export function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]');
      if (!a) return;
      const hash = a.getAttribute("href")!.replace(/^\//, "");
      if (location.pathname !== "/" && a.getAttribute("href")!.startsWith("/#")) return;
      const el = hash.length > 1 ? document.querySelector<HTMLElement>(hash) : null;
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { duration: 1.4, easing: (x) => 1 - Math.pow(1 - x, 4) });
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);
  return null;
}
