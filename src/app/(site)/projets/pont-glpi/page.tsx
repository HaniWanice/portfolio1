import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/sim.css";
import { GlpiSim } from "@/components/GlpiSim";
import { Flow } from "@/components/Flow";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/Icons";
import { glpi, glpiDetail } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pont GLPI",
  description: "Stage à la DSI de l'UPEC : relier deux instances GLPI isolées sans que leurs bases se touchent.",
  alternates: { canonical: "/projets/pont-glpi" },
};

export default function PontGlpi() {
  const d = glpiDetail;
  return (
    <div className="page wrap">
      <Link className="back" href="/projets">
        <ArrowRight />
        Projets
      </Link>
      <h1 className="page-title">Pont GLPI</h1>
      <p className="page-caption">
        Stage à la DSI de l&apos;UPEC, du 4 mai au 1<sup>er</sup> juillet 2026
      </p>

      <Reveal className="flow-panel">
        <Flow />
        <ul className="chips" style={{ marginTop: 24 }}>
          {glpi.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Reveal>

      <section className="band two" aria-label="Le besoin">
        <div className="prose">
          {d.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="hairline-wrap">
          <Figure name="relay" label="Un relais : le pointeur allume le chemin d'un ticket, saut après saut." intensity={0.7} />
        </div>
      </section>

      <section className="sim-wrap" aria-labelledby="t-sim">
        <h2 id="t-sim" className="band-h" style={{ fontSize: "clamp(1.9rem,3.6vw,3.2rem)", lineHeight: 1 }}>
          Essayez le pont
        </h2>
        <p className="muted" style={{ marginTop: 10, maxWidth: "60ch" }}>
          Une simulation fidèle au prototype : rien n&apos;est appelé pour de vrai, mais les règles sont les mêmes.
        </p>
        <GlpiSim />
      </section>

      <section className="band two" aria-label="Pistes et réalisation">
        <div>
          <h2>Pistes écartées</h2>
          <ul className="rejected">
            {d.rejected.map((r) => (
              <li key={r.name}>
                <strong>{r.name}</strong>
                <span>{r.why}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Ce que j&apos;ai construit</h2>
          <ol className="built">
            {d.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="limits">
        <p className="quote">{d.lesson}</p>
        <p className="muted">{d.limits}</p>
      </section>
    </div>
  );
}
