"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { quick, site } from "@/lib/content";
import { ArrowRight } from "./Icons";
import photo from "../../public/images/hani.jpg";

const ease = [0.16, 1, 0.3, 1] as const;

function ParisTime() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const f = new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Paris",
    });
    const tick = () => setT(f.format(new Date()));
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, []);
  return <>{t ?? "--:--"}</>;
}

export function Hero() {
  const reduce = useReducedMotion();
  const line = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: "105%" },
          animate: { y: "0%" },
          transition: { duration: 1, ease, delay: 0.15 + i * 0.09 },
        };

  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div>
          <p className="status">
            <i aria-hidden="true" /> Paris, <ParisTime /> · cherche un stage pour avril 2027
          </p>
          <h1 id="hero-title">
            <span className="line">
              <motion.span {...line(0)}>Hani</motion.span>
            </span>
            <span className="line">
              <motion.span {...line(1)}>Wanice</motion.span>
            </span>
          </h1>
          <motion.p
            className="hero-lead"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
          >
            Je construis des applications web, et je peux vous expliquer{" "}
            <em>pourquoi elles tiennent debout</em>.
          </motion.p>
          <motion.p
            className="hero-sub"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            En L3 informatique à l&apos;Université Paris-Est Créteil. Je cherche un stage de
            développeur de 2 à 5 mois, d&apos;avril à fin août 2027.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.72 }}
          >
            <a className="btn btn-ink" href="#stage">
              Commencer par le stage
              <ArrowRight />
            </a>
            <a className="btn btn-line" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="portrait"
          initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0% round 20px)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0% round 20px)" }}
          transition={{ duration: 1.3, ease, delay: 0.1 }}
        >
          <motion.div
            style={{ height: "100%" }}
            initial={reduce ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease, delay: 0.1 }}
          >
            <Image
              src={photo}
              alt="Hani Wanice, portrait en extérieur"
              priority
              placeholder="blur"
              sizes="(min-width: 900px) 440px, 78vw"
            />
          </motion.div>
          <figcaption>Disponible dès avril 2027</figcaption>
        </motion.figure>
      </div>

      <dl className="quick reveal" aria-label="En vingt secondes">
        {quick.map((q) => (
          <div key={q.k}>
            <dt>{q.k}</dt>
            <dd>{q.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
