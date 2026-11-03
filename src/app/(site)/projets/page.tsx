import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { allProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projets",
  description: "Les projets de Hani Wanice : pont GLPI, labo de performance, Todo Smart, Keewic.",
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
    </div>
  );
}
