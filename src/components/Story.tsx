"use client";

import { useEffect, useRef } from "react";
import { story } from "@/lib/content";

// La ligne du parcours se remplit au rythme du défilement : c'est la seule
// animation liée au scroll du site, parce qu'ici le défilement EST le temps.
export function Story() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const ol = ref.current;
    if (!ol) return;
    const fill = ol.querySelector<HTMLElement>(".story-fill");
    const items = Array.from(ol.querySelectorAll<HTMLElement>("li"));
    let raf = 0;
    const update = () => {
      const r = ol.getBoundingClientRect();
      const pivot = innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (pivot - r.top) / r.height));
      fill?.style.setProperty("--fill", p.toFixed(4));
      for (const li of items) {
        const t = li.getBoundingClientRect().top;
        li.dataset.seen = String(t < pivot);
      }
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol className="story" ref={ref}>
      <span className="story-fill" aria-hidden="true" />
      {story.map((s, i) => (
        <li key={i} className="reveal">
          <span className="dot" aria-hidden="true" />
          <span className="when">{s.when}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            {s.tag && <p className="tag">{s.tag}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
