"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { facts, statement } from "@/lib/content";

const QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReduced(cb: () => void) {
  const mq = matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
const getReduced = () => matchMedia(QUERY).matches;

type Tok = { w: string; mark: boolean };

function tokens(): Tok[] {
  const out: Tok[] = [];
  for (const seg of statement) {
    for (const w of seg.t.split(/\s+/).filter(Boolean)) out.push({ w, mark: !!seg.mark });
  }
  return out;
}

function W({ tok, i, n, p, still }: { tok: Tok; i: number; n: number; p: MotionValue<number>; still: boolean }) {
  const a = 0.04 + (i / n) * 0.62;
  const b = a + 0.1;
  const opacity = useTransform(p, [a, b], [0.14, 1]);
  const mark = useTransform(p, [b - 0.02, b + 0.08], [0, 1]);
  return (
    <>
      <motion.span className="w" style={{ opacity: still ? 1 : opacity }}>
        {tok.mark && <motion.span className="mark" style={{ scaleX: still ? 1 : mark }} aria-hidden="true" />}
        {tok.w}
      </motion.span>{" "}
    </>
  );
}

// Deuxième écran : la phrase de présentation s'éclaire mot après mot pendant le défilement.
export function Statement() {
  const ref = useRef<HTMLElement>(null);
  // Le rendu serveur suppose du mouvement ; le navigateur corrige juste après l'hydratation.
  const reduce = useSyncExternalStore(subscribeReduced, getReduced, () => false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const toks = tokens();
  const factsOpacity = useTransform(scrollYProgress, [0.68, 0.84], [0, 1]);
  const factsY = useTransform(scrollYProgress, [0.68, 0.84], [24, 0]);

  return (
    <section className="statement" data-still={reduce} ref={ref} aria-label="Présentation">
      <div className="statement-sticky">
        <div className="wrap">
          <p className="statement-text">
            {toks.map((t, i) => (
              <W key={i} tok={t} i={i} n={toks.length} p={scrollYProgress} still={reduce} />
            ))}
          </p>
          <motion.ul className="facts" style={reduce ? undefined : { opacity: factsOpacity, y: factsY }}>
            {facts.map((f) => (
              <li key={f.big}>
                <b>{f.big}</b>
                <span>{f.small}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
