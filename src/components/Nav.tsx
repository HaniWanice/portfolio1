"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { Arrow } from "./Arrow";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" data-scrolled={scrolled ? "true" : "false"}>
      <div className="nav__inner">
        <Link href="/" className="nav__brand" aria-label="Hani, retour en haut">
          <span>Hani</span>
          <i aria-hidden="true" />
        </Link>

        <nav className="nav__links" aria-label="Sections">
          <a href="#projets">Projets</a>
          <a href="#parcours">Parcours</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav__actions">
          <span className="nav__avail">
            <i aria-hidden="true" />
            Stage · avril 2027
          </span>
          <a
            className="btn btn--accent btn--sm"
            href={site.cv}
            data-magnetic
            target="_blank"
            rel="noreferrer"
          >
            CV
            <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}
