import Image from "next/image";
import { quick, site } from "@/lib/content";
import { ArrowRight } from "./Icons";
import photo from "../../public/images/hani.jpg";

// Composant serveur : l'entrée du hero est en CSS pur (classes .in-*), elle
// démarre dès que le HTML est peint, sans attendre que React se charge.
export function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div>
          <p className="status in-fade" style={{ ["--d" as string]: "0ms" }}>
            <i aria-hidden="true" /> Disponible pour un stage à partir d&apos;avril 2027
          </p>
          <h1 id="hero-title">
            <span className="line">
              <span className="in-rise" style={{ ["--d" as string]: "120ms" }}>Hani</span>
            </span>
            <span className="line">
              <span className="in-rise" style={{ ["--d" as string]: "200ms" }}>Wanice</span>
            </span>
          </h1>
          <p className="hero-lead in-fade" style={{ ["--d" as string]: "380ms" }}>
            Je développe des applications web, <em>de l&apos;interface à la base de données</em>.
          </p>
          <p className="hero-sub in-fade" style={{ ["--d" as string]: "480ms" }}>
            Étudiant en L3 informatique à l&apos;Université Paris-Est Créteil. Au printemps 2026, j&apos;ai passé huit
            semaines à la DSI de l&apos;université. Je cherche un stage de 2 à 5 mois, d&apos;avril à fin août 2027.
          </p>
          <div className="hero-actions in-fade" style={{ ["--d" as string]: "560ms" }}>
            <a className="btn btn-ink" href="#stage">
              Commencer par le stage
              <ArrowRight />
            </a>
            <a className="btn btn-line" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>

        <figure className="portrait in-reveal">
          <Image
            src={photo}
            alt="Hani Wanice, portrait en extérieur"
            priority
            placeholder="blur"
            sizes="(min-width: 900px) 440px, 78vw"
          />
        </figure>
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
