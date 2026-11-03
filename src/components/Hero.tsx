"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { hero, site } from "@/lib/content";
import { ArrowUpRight, Download } from "./Icons";
import { Magnetic } from "./Magnetic";
import photo from "../../public/images/hani.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

function Word({ text, start }: { text: string; start: number }) {
  return (
    <span className="line" aria-hidden="true">
      {[...text].map((c, i) => (
        <span key={i} className="ch" style={{ ["--i" as string]: start + i }}>
          {c}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const hovering = useRef(false);

  // Pointeur dans la fenêtre : parallaxe douce (le portrait et son bloc bleu bougent en sens contraire).
  const px = useSpring(useMotionValue(0), { stiffness: 70, damping: 18, mass: 0.7 });
  const py = useSpring(useMotionValue(0), { stiffness: 70, damping: 18, mass: 0.7 });
  const pxRaw = px;
  const pyRaw = py;

  // Zone de couleur dans le portrait, en pourcentage de la photo.
  const mx = useMotionValue(55);
  const my = useMotionValue(38);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const radius = useSpring(useMotionValue(24), { stiffness: 120, damping: 16 });
  const radiusY = useTransform(radius, (r) => r * 0.8);
  const mask = useMotionTemplate`radial-gradient(ellipse ${radius}% ${radiusY}% at ${sx}% ${sy}%, #000 58%, transparent 100%)`;

  // Défilement : le portrait traîne, le nom monte plus vite.
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const portraitX = useTransform(pxRaw, (v) => v * -22);
  const portraitYp = useTransform(pyRaw, (v) => v * -14);
  const blockX = useTransform(pxRaw, (v) => v * 26);
  const blockYp = useTransform(pyRaw, (v) => v * 18);
  const nameX = useTransform(pxRaw, (v) => v * 10);

  // Sans souris, la zone de couleur se promène seule.
  useAnimationFrame((t) => {
    if (reduce || hovering.current) return;
    mx.set(52 + 30 * Math.sin(t / 2600));
    my.set(40 + 26 * Math.sin(t / 1900 + 1.2));
  });

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const chars = Array.from(el.querySelectorAll<HTMLElement>(".ch"));
    let raf = 0;
    const move = (e: PointerEvent) => {
      pxRaw.set((e.clientX / innerWidth - 0.5) * 2);
      pyRaw.set((e.clientY / innerHeight - 0.5) * 2);
      if (e.pointerType !== "mouse" || reduce) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        for (const c of chars) {
          const r = c.getBoundingClientRect();
          const d = Math.hypot(r.left + r.width / 2 - e.clientX, r.top + r.height / 2 - e.clientY);
          const p = Math.max(0, 1 - d / 340) ** 1.6;
          c.style.setProperty("--p", p.toFixed(3));
        }
      });
    };
    const leave = () => chars.forEach((c) => c.style.setProperty("--p", "0"));
    addEventListener("pointermove", move, { passive: true });
    el.addEventListener("pointerleave", leave);
    return () => {
      removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      cancelAnimationFrame(raf);
    };
  }, [pxRaw, pyRaw, reduce]);

  return (
    <section className="hero" ref={root} aria-labelledby="hero-title">
      <motion.div className="portrait-scroll" style={{ y: portraitY }}>
        <motion.div className="portrait-depth" style={{ x: portraitX, y: portraitYp }}>
          <motion.div
            className="portrait-block"
            style={{ x: blockX, y: blockYp }}
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.2, ease, delay: 0.35 }}
            aria-hidden="true"
          />
          <motion.figure
            className="portrait"
            initial={reduce ? false : { clipPath: "inset(100% 0 0 0 round 20px)" }}
            animate={{ clipPath: "inset(0% 0 0 0 round 20px)" }}
            transition={{ duration: 1.3, ease, delay: 0.15 }}
            onPointerMove={(e) => {
              if (e.pointerType !== "mouse") return;
              const r = e.currentTarget.getBoundingClientRect();
              hovering.current = true;
              mx.set(((e.clientX - r.left) / r.width) * 100);
              my.set(((e.clientY - r.top) / r.height) * 100);
              radius.set(32);
            }}
            onPointerLeave={() => {
              hovering.current = false;
              radius.set(24);
            }}
          >
            <Image
              className="portrait-gray"
              src={photo}
              alt="Hani Wanice, portrait"
              priority
              placeholder="blur"
              sizes="(min-width: 900px) 40vw, 80vw"
            />
            <motion.div className="portrait-color" style={{ maskImage: mask, WebkitMaskImage: mask }} aria-hidden="true">
              <Image src={photo} alt="" priority sizes="(min-width: 900px) 40vw, 80vw" />
            </motion.div>
          </motion.figure>
        </motion.div>
      </motion.div>

      <div className="hero-text">
        <p className="status in" style={{ ["--d" as string]: "100ms" }}>
          <i aria-hidden="true" />
          {hero.status}
        </p>
        <motion.h1 id="hero-title" className="name" aria-label={site.name} style={{ y: nameY, x: nameX }}>
          <Word text="Hani" start={0} />
          <Word text="Wanice" start={4} />
        </motion.h1>
        <div className="hero-bottom">
          <div>
            <p className="role in" style={{ ["--d" as string]: "700ms" }}>
              {site.role}
            </p>
            <p className="pitch in" style={{ ["--d" as string]: "800ms" }}>
              {hero.detail}
            </p>
          </div>
          <ul className="contacts in" style={{ ["--d" as string]: "900ms" }}>
            <li>
              <a className="ulink" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="ulink" href={`tel:${site.phoneHref}`}>
                {site.phone}
              </a>
            </li>
            <li>
              <a className="ulink" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <ArrowUpRight className="ico" />
              </a>
            </li>
            <li>
              <a className="ulink" href={site.github} target="_blank" rel="noreferrer">
                GitHub <ArrowUpRight className="ico" />
              </a>
            </li>
          </ul>
          <div className="hero-cta in" style={{ ["--d" as string]: "1000ms" }}>
            <Magnetic>
              <a className="btn btn-ink" href={site.cv} download>
                Télécharger mon CV
                <Download />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
