import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "@/components/Icons";
import { Magnetic } from "@/components/Magnetic";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Qui je suis",
  description: "Hani Wanice, 24 ans, étudiant en L3 informatique à l'Université Paris-Est Créteil.",
  alternates: { canonical: "/a-propos" },
};

export default function APropos() {
  return (
    <div className="page wrap">
      <Link className="back" href="/">
        <ArrowRight />
        Accueil
      </Link>
      <section className="two">
        <div>
          <h1 className="page-title">{about.title}</h1>
          <p className="lead">{about.lead}</p>
        </div>
        <div className="about-photo" style={{ justifySelf: "end", marginRight: 20 }}>
          <Image src="/images/hani.jpg" alt="Hani Wanice" width={960} height={1200} sizes="(min-width: 900px) 420px, 90vw" priority />
        </div>
      </section>

      <section className="band">
        <h2>Le parcours</h2>
        <ul className="story">
          {about.story.map((s) => (
            <li key={s.when}>
              <b>{s.when}</b>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="band">
        <h2>En dehors de l&apos;écran</h2>
        <ul className="outside">
          {about.outside.map((o) => (
            <li key={o.t}>
              <b>{o.t}</b>
              <p>{o.d}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="cta-row">
        <Magnetic>
          <a className="btn btn-ink" href={`mailto:${site.email}`}>
            {site.email}
            <ArrowRight />
          </a>
        </Magnetic>
        <Magnetic>
          <a className="btn btn-line" href={site.cv} download>
            Télécharger mon CV
            <Download />
          </a>
        </Magnetic>
      </div>
    </div>
  );
}
