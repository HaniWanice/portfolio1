"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { Arrow } from "./Arrow";
import { PointerGlow } from "./PointerGlow";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <PointerGlow dark />
      <div className="wrap">
        <div className="contact__grid">
          <Reveal>
            <p className="kicker kicker--light">
              <span>05</span>
              Contact
            </p>

            <h2 id="contact-title">
              On parle
              <br />
              de votre <em>équipe&nbsp;?</em>
            </h2>

            <p className="contact__sub">
              Stage de 2 à 4 mois à partir d&apos;avril 2027, alternance à
              partir de septembre 2027. Je réponds vite, et je peux être en
              entretien dès cette semaine.
            </p>

            <div className="contact__actions">
              <a
                className="btn btn--ink"
                href={`mailto:${site.email}`}
                data-magnetic
              >
                {site.email}
                <Arrow />
              </a>
              <a
                className="btn btn--line"
                href={site.cv}
                target="_blank"
                rel="noreferrer"
              >
                CV — PDF
                <span className="btn__down" aria-hidden="true">
                  ↓
                </span>
              </a>
              <button
                type="button"
                className="btn btn--line btn--copy"
                onClick={copy}
                aria-live="polite"
              >
                {copied ? "Adresse copiée" : "Copier l’adresse"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={120} className="contact__side">
            <dl>
              <div className="contact__row">
                <dt>Téléphone</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>LinkedIn</dt>
                <dd>
                  <a href={site.linkedin} target="_blank" rel="noreferrer">
                    /in/aniwanis
                  </a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>GitHub</dt>
                <dd>
                  <a href={site.github} target="_blank" rel="noreferrer">
                    /HaniWanice
                  </a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>Zone</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>

            <p className="contact__avail">
              <span>Stage · avril 2027</span>
              <span>Alternance · septembre 2027</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
