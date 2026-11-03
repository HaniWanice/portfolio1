import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/duel.css";
import { PerfDuel } from "@/components/PerfDuel";
import { ArrowRight } from "@/components/Icons";
import lh from "@/lib/demo/lighthouse.json";

export const metadata: Metadata = {
  title: "Labo perf",
  description: "Une boutique en ligne codée de deux façons, mesurée en direct dans votre navigateur et avec Lighthouse.",
  alternates: { canonical: "/labo" },
};

type LH = { score: number; lcp: number; fcp: number; tbt: number; cls: number; si: number; bytes: number };

const changes = [
  {
    title: "Où la page est fabriquée",
    bad: "Tout est rendu dans le navigateur : le serveur envoie une coquille vide, puis le JavaScript construit la page.",
    good: "Les pages sont rendues une fois au build. Le HTML arrive complet, et le JavaScript se limite aux onglets et au panier.",
  },
  {
    title: "Les données",
    bad: "Trois requêtes l'une après l'autre : le catalogue, puis les avis, puis les articles. Chacune attend la précédente.",
    good: "Les données sont lues côté serveur, avant l'envoi de la page. Aucune requête après le chargement.",
  },
  {
    title: "Le catalogue",
    bad: "8 000 lignes (près de 1 Mo de JSON) envoyées au navigateur, qui les trie pour afficher 16 produits et un prix médian.",
    good: "Le calcul est fait une fois au build. Le visiteur reçoit le résultat.",
  },
  {
    title: "Les photos",
    bad: "Les originaux de 2 000 px dans de petites cases, sans dimensions ni chargement différé : 11,8 Mo téléchargés.",
    good: "next/image choisit la bonne taille et le bon format (AVIF, WebP), réserve la place et charge sous le pli seulement.",
  },
  {
    title: "Les polices",
    bad: "Trois feuilles de style qui en appellent d'autres, sans préchargement : le texte attend ses polices.",
    good: "Polices locales préchargées, avec une police de secours ajustée pour éviter les sauts.",
  },
  {
    title: "Le widget tiers",
    bad: "Un faux widget d'avis chargé de façon bloquante, avec une boucle qui occupe le fil principal.",
    good: "Aucun script tiers.",
  },
];

function fmt(v: number, unit: "s" | "ms" | "cls" | "o") {
  if (unit === "s") return `${(v / 1000).toFixed(1).replace(".", ",")} s`;
  if (unit === "ms") return `${Math.round(v)} ms`;
  if (unit === "cls") return v.toFixed(3).replace(".", ",");
  return v > 1e6 ? `${(v / 1e6).toFixed(1).replace(".", ",")} Mo` : `${Math.round(v / 1000)} ko`;
}

export default function Labo() {
  const n = lh.naive as LH | null;
  const o = lh.optim as LH | null;
  return (
    <div className="page wrap">
      <Link className="back" href="/#projets">
        <ArrowRight />
        Accueil
      </Link>
      <h1 className="page-title">Même boutique, deux versions.</h1>
      <p className="lead">
        Maison Brume est une boutique fictive de café, de thé et de vaisselle, avec 16 produits, des fiches, un panier et
        de vraies photos. Elle est codée deux fois avec Next.js : une version qui accumule les erreurs courantes, et une
        version optimisée. Même rendu, même contenu. Les deux se chargent ci-dessous, dans votre navigateur.
      </p>

      <PerfDuel />

      <section className="band two" aria-label="Détails">
        <div>
          <h2>Ce qui change</h2>
          <ul className="changes">
            {changes.map((c) => (
              <li key={c.title}>
                <b>{c.title}</b>
                <span className="bad">{c.bad}</span>
                <span className="good">{c.good}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Mesure de laboratoire</h2>
          {n && o ? (
            <>
              <p className="muted" style={{ marginBottom: 16 }}>
                {lh.tool}, profil mobile (processeur ralenti, réseau lent simulé), {lh.date}. Médiane de 3 passages, sur un
                serveur local.
              </p>
              <table className="lab-table">
                <thead>
                  <tr>
                    <th scope="col">Indicateur</th>
                    <th scope="col">Naïf</th>
                    <th scope="col">Optimisé</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Score performance</td><td className="num">{n.score}</td><td className="num">{o.score}</td></tr>
                  <tr><td>Plus gros élément (LCP)</td><td className="num">{fmt(n.lcp, "s")}</td><td className="num">{fmt(o.lcp, "s")}</td></tr>
                  <tr><td>Premier affichage (FCP)</td><td className="num">{fmt(n.fcp, "s")}</td><td className="num">{fmt(o.fcp, "s")}</td></tr>
                  <tr><td>Speed Index</td><td className="num">{fmt(n.si, "s")}</td><td className="num">{fmt(o.si, "s")}</td></tr>
                  <tr><td>Fil principal bloqué (TBT)</td><td className="num">{fmt(n.tbt, "ms")}</td><td className="num">{fmt(o.tbt, "ms")}</td></tr>
                  <tr><td>Décalages (CLS)</td><td className="num">{fmt(n.cls, "cls")}</td><td className="num">{fmt(o.cls, "cls")}</td></tr>
                  <tr><td>Poids total</td><td className="num">{fmt(n.bytes, "o")}</td><td className="num">{fmt(o.bytes, "o")}</td></tr>
                </tbody>
              </table>
            </>
          ) : (
            <p className="muted">Mesure en cours de mise à jour.</p>
          )}

          <h2 style={{ marginTop: 48 }}>Les limites</h2>
          <p className="muted" style={{ maxWidth: "52ch" }}>
            La version naïve n&apos;est pas ralentie à la main : son API répond aussi vite que le serveur le permet. Le
            calcul sur 8 000 lignes est un exemple choisi pour qu&apos;on le sente. Les mesures en direct dépendent de
            votre machine et de votre connexion, et le deuxième chargement profite du cache. D&apos;où la mesure de
            laboratoire, plus stable. Le CLS de la version naïve est à zéro parce que ses images sans dimensions sont sous
            la ligne de flottaison sur mobile.
          </p>
          <p className="muted" style={{ marginTop: 16, maxWidth: "52ch" }}>
            Les photos viennent d&apos;Unsplash, leurs auteurs sont crédités dans le dépôt.
          </p>
        </div>
      </section>
    </div>
  );
}
