import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { allProjects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Les projets de Hani Wanice : pont GLPI, labo de performance, Todo Smart, Keewic et une application Laravel.",
  alternates: { canonical: "/projets" },
};

export default function Projets() {
  return (
    <div className="page wrap">
      <Link className="back" href="/">
        <ArrowRight />
        Accueil
      </Link>
      <h1 className="page-title">Projets.</h1>
      <p className="lead">
        Ce que j&apos;ai construit en stage, en cours ou à côté. Les pages détaillées expliquent les choix. Le code des
        projets publics est sur GitHub.
      </p>
      <p className="page-caption">Le code du stage n&apos;est pas public : il appartient à l&apos;université.</p>
      <ul className="plist">
        {allProjects.map((p) => {
          const inner = (
            <>
              <b>{p.name}</b>
              <span>{p.kind}</span>
              <em>{p.stack}</em>
              <em>{p.year}</em>
              {p.href ? <ArrowUpRight /> : <span />}
            </>
          );
          return (
            <li key={p.id}>
              {p.href ? (
                "external" in p && p.external ? (
                  <a className="prow" href={p.href} target="_blank" rel="noreferrer">
                    {inner}
                  </a>
                ) : (
                  <Link className="prow" href={p.href}>
                    {inner}
                  </Link>
                )
              ) : (
                <div className="prow">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
      <div className="cta-row">
        <a className="btn btn-line" href={site.github} target="_blank" rel="noreferrer">
          Mon GitHub
          <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
