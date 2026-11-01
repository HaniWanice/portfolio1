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
            Disponible pour un stage de 2 à 4 mois, dès avril 2027
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

          <p className="hero__text">
            Étudiant en L3 informatique à l&apos;université Paris-Est. Pendant
            deux mois, j&apos;ai relié deux GLPI isolés pour la DSI : un ticket
            miroir, un statut synchronisé, 40&nbsp;000 comptes étudiants d&apos;un
            côté et aucune donnée du personnel de l&apos;autre.
          </p>

          <div className="hero__actions">
            <a
              className="btn btn--ink"
              href={site.cv}
              target="_blank"
              rel="noreferrer"
            >
              Télécharger le CV
              <span className="btn__meta">PDF</span>
            </a>
            <a className="btn btn--line" href="#projets">
              Voir les projets
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
            <h2 className="search__title" id="search-title">
              Ce que je cherche
            </h2>
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
              Licence 3 informatique · Université Paris-Est
            </p>
            <p>
              <span className="search__key">Zone</span>
              Paris-Est et Île-de-France
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
