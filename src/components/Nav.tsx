"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/content";
import { Download } from "./Icons";

// La barre se range quand on descend et revient dès qu'on remonte.
export function Nav() {
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = scrollY;
      const dy = y - last.current;
      if (Math.abs(dy) > 6) {
        setHidden(dy > 0 && y > 160);
        last.current = y;
      }
    };
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" data-hidden={hidden}>
      <div className="nav-bar">
        <Link href="/" className="brand" aria-label="Hani Wanice, accueil">
          Hani Wanice
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            <li><Link href="/#projets">Projets</Link></li>
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>
        <a className="btn btn-ink nav-cv" href={site.cv} download>
          CV
          <Download />
        </a>
      </div>
    </header>
  );
}
