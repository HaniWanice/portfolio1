"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { projects } from "@/lib/content";
import { ArrowUpRight } from "./Icons";

// Liste éditoriale. Sur ordinateur, l'aperçu du projet suit le pointeur avec un
// léger ressort ; sur mobile, l'image est affichée dans la ligne.
export function Projects() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);
  const [fine, setFine] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const mq = matchMedia("(hover: hover) and (pointer: fine) and (min-width: 900px)");
    const on = () => setFine(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const current = projects.find((p) => p.id === hover && p.image);

  return (
    <>
      <ul
        className="plist"
        ref={listRef}
        onPointerMove={(e) => {
          x.set(e.clientX + 24);
          y.set(e.clientY - 110);
        }}
        onPointerLeave={() => setHover(null)}
      >
        {projects.map((p, i) => {
          const external = p.href?.startsWith("http");
          const Tag = p.href ? "a" : "div";
          return (
            <li key={p.id} className="prow reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
              <Tag
                className="prow-link"
                {...(p.href ? { href: p.href, ...(external ? { target: "_blank", rel: "noreferrer" } : {}) } : {})}
                onPointerEnter={() => setHover(p.id)}
              >
                <span className="yr">{p.year}</span>
                <div>
                  <h3>{p.name}</h3>
                  <span className="kind">{p.kind}</span>
                </div>
                <div>
                  <p>{p.text}</p>
                  <span className="stack">{p.stack}</span>
                  {p.image && (
                    <span className="thumb">
                      <Image src={p.image} alt="" width={640} height={400} sizes="100vw" />
                    </span>
                  )}
                </div>
                {p.href ? <ArrowUpRight className="arrow" /> : <span />}
              </Tag>
              {p.code && (
                <a className="code" href={p.code} target="_blank" rel="noreferrer">
                  Code source sur GitHub
                </a>
              )}
            </li>
          );
        })}
      </ul>

      {fine && (
        <AnimatePresence>
          {current && (
            <motion.div
              key="preview"
              className="preview"
              style={{ x: sx, y: sy }}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden="true"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={current.id}
                  style={{ position: "absolute", inset: 0 }}
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  animate={{ clipPath: "inset(0 0 0% 0)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image src={current.image!} alt="" fill sizes="340px" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
