import type { CSSProperties } from "react";
import { availability, site } from "@/lib/site";
import { Arrow } from "./Arrow";
import { Marquee } from "./Marquee";
import { PointerGlow } from "./PointerGlow";

const NAME = "Hani";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <PointerGlow />

      <div className="wrap hero__inner">
        <div className="hero__lead">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Stage 2 à 4 mois dès avril 2027 · alternance dès septembre 2027
          </p>


          <h1 className="hero__title" id="hero-title">
            <span className="hero__name" aria-label="Hani">
              <span aria-hidden="true">
                {NAME.split("").map((letter, index) => (
                  <span
                    className="hero__letter"
                    key={`${letter}-${index}`}
                    style={{ "--i": index } as CSSProperties}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </span>
            <span className="hero__role">
              développeur <em>full-stack</em>
            </span>
          </h1>

          <p className="hero__meta">
            <span>Hani Wanice · {site.age} ans</span>
            <span>Licence 3 informatique · université Paris‑Est</span>
          </p>

          <p className="hero__exp">
            <span className="hero__exp-badge">2 mois</span>
            d&apos;expérience en entreprise · DSI, université Paris‑Est
          </p>

          <p className="hero__text">
            Étudiant en licence 3 d&apos;informatique à l&apos;université
            Paris‑Est, j&apos;ai passé deux mois dans son service informatique.
            Mission : faire dialoguer deux outils qui s&apos;ignoraient, pour
            40&nbsp;000 étudiants — sans qu&apos;aucune donnée du personnel ne
            fuite.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--accent"
              href={site.cv}
              target="_blank"
              rel="noreferrer"
              data-magnetic
            >
              Télécharger mon CV
              <span className="btn__meta">PDF</span>
            </a>
            <a className="btn btn--line" href="#projets">
              Voir mes projets
              <span className="btn__down" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>

          <ul className="hero__contact">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
                <Arrow />
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer">
                GitHub
                <Arrow />
              </a>
            </li>
          </ul>
        </div>

        <aside className="search" aria-labelledby="search-title">
          <div className="search__head">
            <div>
              <p className="search__eyebrow">Ma recherche</p>
              <h2 className="search__title" id="search-title">
                Ce que je cherche
              </h2>
            </div>
            <span className="search__pulse" aria-hidden="true" />
          </div>

          <dl className="search__list">
            {availability.map((item) => (
              <div className="search__row" key={item.label}>
                <dt>
                  <span className="search__label">{item.label}</span>
                  <span className="search__value">{item.value}</span>
                </dt>
                <dd>
                  <strong>{item.when}</strong>
                  <span>{item.note}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="search__facts">
            <p>
              <span className="search__key">Formation</span>
              Licence 3 informatique · Université Paris‑Est
            </p>
            <p>
              <span className="search__key">Zone</span>
              Paris-Est et Île-de-France
            </p>
            <p>
              <span className="search__key">Langues</span>
              Français · anglais courant · espagnol
            </p>
          </div>

          <a
            className="search__mail"
            href={`mailto:${site.email}?subject=Stage%20ou%20alternance%20%E2%80%94%20Hani%20Wanice`}
          >
            Écrire un message
            <Arrow />
          </a>
        </aside>
      </div>

      <Marquee />
    </section>
  );
}
