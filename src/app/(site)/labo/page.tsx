import type { Metadata } from "next";
import Link from "next/link";
import { PerfDuel } from "@/components/PerfDuel";
import lh from "@/lib/demo/lighthouse.json";

export const metadata: Metadata = {
  title: "Labo perf",
  description: "La même page Next.js codée deux fois, mesurée en direct dans votre navigateur.",
  alternates: { canonical: "/labo" },
};

type LH = { score: number; lcp: number; fcp: number; tbt: number; cls: number; si: number; bytes: number } | null;

const fixes = [
  {
    bad: "Toute la page est un composant client. Le serveur envoie une coquille vide, le navigateur fait le reste.",
    good: "Composant serveur, rendu une fois au build. Le HTML arrive complet.",
  },
  {
    bad: "Les données arrivent par fetch dans un useEffect, en cascade : les vélos, puis les avis.",
    good: "Les données sont lues côté serveur. Aucune requête après le chargement.",
  },
  {
    bad: "Images brutes de 1 800 px pour des cases de 250 px, sans dimensions : la page saute quand elles arrivent.",
    good: "next/image : la bonne taille pour l'écran, en AVIF ou WebP, place réservée, chargement différé sous le pli.",
  },
  {
    bad: "Un calcul lourd (120 000 lignes de prix triées) refait dans le navigateur à chaque visite.",
    good: "Le même calcul, fait une seule fois au build. Le visiteur reçoit le résultat.",
  },
];

function fmt(v: number, unit: "s" | "ms" | "cls" | "o") {
  if (unit === "s") return `${(v / 1000).toFixed(1).replace(".", ",")} s`;
  if (unit === "ms") return `${Math.round(v)} ms`;
  if (unit === "cls") return v.toFixed(3).replace(".", ",");
  return v > 1e6 ? `${(v / 1e6).toFixed(1).replace(".", ",")} Mo` : `${Math.round(v / 1000)} ko`;
}

export default function Labo() {
  const n = lh.naive as LH;
  const o = lh.optim as LH;
  return (
    <div className="labo-page wrap">
      <Link className="back" href="/#labo">
        ← Retour au portfolio
      </Link>
      <h1>Une page, deux versions</h1>
      <p className="lead">
        Une boutique de vélos d&apos;occasion, fictive. Même stack (Next.js 16), mêmes données, mêmes images sources,
        même CSS. Seule la façon de l&apos;écrire change. Les deux versions tournent ci-dessous, et une petite sonde
        relève leurs Web Vitals avec les API de votre navigateur.
      </p>

      <PerfDuel />

      <div className="duel-notes">
        <div>
          <h2>Ce qui change</h2>
          <ol>
            {fixes.map((f, i) => (
              <li key={i}>
                <p>
                  <strong>Naïf :</strong> {f.bad}
                </p>
                <p className="muted">
                  <strong style={{ color: "var(--ok)" }}>Optimisé :</strong> {f.good}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2>Mesure de laboratoire</h2>
          {n && o ? (
            <>
              <p className="muted" style={{ marginBottom: 16 }}>
                {lh.tool}, profil mobile (CPU ralenti ×4, réseau 4G lent simulé), {lh.date}. Médiane de 3 passages.
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
                  <tr><td>LCP</td><td className="num">{fmt(n.lcp, "s")}</td><td className="num">{fmt(o.lcp, "s")}</td></tr>
                  <tr><td>Premier affichage (FCP)</td><td className="num">{fmt(n.fcp, "s")}</td><td className="num">{fmt(o.fcp, "s")}</td></tr>
                  <tr><td>Speed Index</td><td className="num">{fmt(n.si, "s")}</td><td className="num">{fmt(o.si, "s")}</td></tr>
                  <tr><td>TBT</td><td className="num">{fmt(n.tbt, "ms")}</td><td className="num">{fmt(o.tbt, "ms")}</td></tr>
                  <tr><td>CLS</td><td className="num">{fmt(n.cls, "cls")}</td><td className="num">{fmt(o.cls, "cls")}</td></tr>
                  <tr><td>Poids total</td><td className="num">{fmt(n.bytes, "o")}</td><td className="num">{fmt(o.bytes, "o")}</td></tr>
                </tbody>
              </table>
            </>
          ) : (
            <p className="muted">Mesure en cours de mise à jour.</p>
          )}
          <h2 style={{ marginTop: 40 }}>Les limites de cette démo</h2>
          <p className="muted">
            La latence de l&apos;API naïve est simulée (700 ms puis 450 ms), comme un back-end un peu lent. Le calcul
            lourd est un exemple, choisi pour qu&apos;on le sente. Les deux pages partagent votre navigateur et votre
            connexion, donc les chiffres en direct varient d&apos;un chargement à l&apos;autre, et le deuxième
            chargement profite du cache. C&apos;est pour ça qu&apos;il y a aussi la mesure de laboratoire, plus stable.
          </p>
        </div>
      </div>
    </div>
  );
}
