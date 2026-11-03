"use client";
/* eslint-disable @next/next/no-img-element -- c'est précisément ce que cette version montre */

// VERSION NAÏVE, volontairement. Les erreurs ci-dessous sont celles qu'on croise
// souvent, chacune avec son numéro dans les notes du labo :
// (1) toute la page est un composant client, rien n'est rendu côté serveur ;
// (2) les données arrivent par fetch dans un useEffect, en cascade (produits, PUIS avis) ;
// (3) images brutes de 1800 px chargées pour des cases de 300 px, sans dimensions (décalages) ;
// (4) un calcul lourd fait dans le navigateur, à chaque visite.
import { useEffect, useState } from "react";
import { hero, heavyStats, type Velo } from "@/lib/demo/data";

type Review = { who: string; text: string };

export default function Naive() {
  const [velos, setVelos] = useState<Velo[] | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [stats, setStats] = useState<ReturnType<typeof heavyStats> | null>(null);

  useEffect(() => {
    // Anti-pattern volontaire (4) : le linter a raison de râler, c'est le but de la démo.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStats(heavyStats());
    fetch("/api/demo?what=velos") // (2)
      .then((r) => r.json())
      .then((v) => {
        setVelos(v);
        return fetch("/api/demo?what=reviews");
      })
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  useEffect(() => {
    if (reviews) performance.mark("contenu-pret");
  }, [reviews]);

  return (
    <div className="d-wrap">
      <div className="d-top">
        Atelier Roue Libre <span>version naïve</span>
      </div>
      <section className="d-hero">
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <div className="d-hero-img">
          <img src={hero.img} alt="" />
        </div>
      </section>
      {stats && (
        <p className="d-stats">
          {stats.count.toLocaleString("fr-FR")} vélos analysés · prix médian {stats.median} €
        </p>
      )}
      {!velos ? (
        <div className="d-spinner">Chargement des vélos…</div>
      ) : (
        <div className="d-grid">
          {velos.map((v) => (
            <article className="d-card" key={v.id}>
              <img src={v.img} alt={v.name} />
              <div>
                <span className="tag">{v.tag}</span>
                <h2>{v.name}</h2>
                <p>{v.text}</p>
                <b>{v.price} €</b>
              </div>
            </article>
          ))}
        </div>
      )}
      {reviews && (
        <div className="d-reviews">
          {reviews.map((r) => (
            <blockquote key={r.who}>
              {r.text}
              <cite>{r.who}</cite>
            </blockquote>
          ))}
        </div>
      )}
    </div>
  );
}
