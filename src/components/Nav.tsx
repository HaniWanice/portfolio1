"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { chapters, site } from "@/lib/content";

export function Nav() {
  const path = usePathname();
  const home = path === "/";
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const bar = document.querySelector<HTMLElement>(".nav-progress");
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        bar?.style.setProperty("--p", String(max > 0 ? scrollY / max : 0));
        setScrolled(scrollY > 12);
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!home) return;
    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [home]);

  return (
    <header className="nav" data-scrolled={scrolled || !home}>
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Hani Wanice, retour à l'accueil">
          Hani Wanice
        </Link>
        <nav aria-label="Chapitres">
          <ul className="nav-links">
            {chapters.map((c) => {
              const on = active === c.id;
              return (
                <li key={c.id}>
                  <a href={`/#${c.id}`} aria-current={on ? "true" : undefined}>
                    {on && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      />
                    )}
                    {c.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <a className="btn btn-ink nav-cta" href={site.cv} download>
          CV
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2.5v8m0 0L4.5 7M8 10.5 11.5 7M3 13.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <span className="nav-progress" aria-hidden="true" />
    </header>
  );
}
