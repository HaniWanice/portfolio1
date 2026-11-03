import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { GlpiSim } from "@/components/GlpiSim";
import { Projects } from "@/components/Projects";
import { Figure } from "@/components/Figure";
import { RevealObserver } from "@/components/RevealObserver";
import { ArrowRight, Key, Shield, Users } from "@/components/Icons";
import { methode, notYet, outside, site, stage } from "@/lib/content";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Hero />

      <section id="parcours" className="chapter wrap" aria-labelledby="t-parcours">
        <header className="chapter-head reveal">
          <h2 id="t-parcours">D&apos;une page HTML bancale à un vrai sujet de DSI</h2>
          <p>Du premier site à aujourd&apos;hui, en six étapes.</p>
        </header>
        <Story />
      </section>

      <section id="stage" className="night chapter" aria-labelledby="t-stage">
        <div className="wrap">
          <header className="chapter-head reveal">
            <p className="stage-meta">
              <span>{stage.org}</span>
              <span>{stage.when}</span>
            </p>
            <h2 id="t-stage">{stage.title}</h2>
          </header>

          <div className="split">
            <div className="stage-intro reveal">
              {stage.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="reveal" style={{ maxWidth: 420, justifySelf: "end", width: "100%" }}>
              <Figure name="vault" label="Un coffre dont les verrous s'ouvrent quand on tourne la molette" />
            </div>
          </div>

          <GlpiSim />

          <div className="split">
            <div className="reveal">
              <h3 className="sub">Ce que j&apos;ai essayé, puis écarté</h3>
              <ul className="rejected">
                {stage.rejected.map((r) => (
                  <li key={r.name}>
                    <strong>{r.name}</strong>
                    <span>{r.why}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <h3 className="sub">Ce que j&apos;ai construit</h3>
              <ol className="built">
                {stage.built.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="split" style={{ marginTop: "clamp(56px, 8vw, 96px)", alignItems: "end" }}>
            <p className="quote reveal">{stage.lesson}</p>
            <p className="muted reveal" style={{ maxWidth: "52ch" }}>
              {stage.limits}
            </p>
          </div>
        </div>
      </section>

      <section id="projets" className="chapter wrap" aria-labelledby="t-projets">
        <header className="chapter-head reveal">
          <h2 id="t-projets">Ce que j&apos;ai construit d&apos;autre</h2>
          <p>Des projets perso, un projet de licence, une mission de design. Ceux qui ont un lien sont en ligne.</p>
        </header>
        <Projects />
      </section>

      <section id="labo" className="chapter wrap" aria-labelledby="t-labo" style={{ paddingTop: 0 }}>
        <div className="labo-card reveal">
          <div>
            <h2 id="t-labo" className="serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.05 }}>
              Labo : une page, deux versions
            </h2>
            <p>
              La même page produit, codée deux fois avec Next.js : une version qui accumule les erreurs courantes, et une
              version optimisée. Sur Lighthouse mobile, 57 contre 97, et 4,2 Mo contre 219 ko. Les deux tournent aussi
              côte à côte, mesurées en direct dans votre navigateur.
            </p>
            <Link className="btn btn-ink" href="/labo">
              Ouvrir le labo
              <ArrowRight />
            </Link>
          </div>
          <Link href="/labo" aria-label="Ouvrir le labo" style={{ borderRadius: 14, overflow: "hidden", display: "block" }}>
            <Image src="/images/labo.jpg" alt="Les deux versions de la page, côte à côte, avec leurs mesures" width={1200} height={750} sizes="(min-width: 900px) 560px, 100vw" />
          </Link>
        </div>
      </section>

      <section id="methode" className="chapter wrap" aria-labelledby="t-methode" style={{ paddingTop: 0 }}>
        <header className="chapter-head reveal">
          <h2 id="t-methode">{methode.title}</h2>
          <p>{methode.intro}</p>
        </header>
        <ol className="steps">
          {methode.steps.map((s, i) => (
            <li key={s.t} className="reveal" style={{ ["--d" as string]: `${i * 50}ms` }}>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
        <div className="guard">
          <div className="figure-box reveal">
            <Figure name="branches" label="Un graphe de commits : une branche part de main et y revient" />
          </div>
          <div className="reveal">
            <h3 className="sub">Les garde-fous</h3>
            <ul>
              {methode.guardrails.map((g, i) => {
                const Ico = [Shield, Key, Users][i] ?? Shield;
                return (
                  <li key={i}>
                    <Ico />
                    <span>{g}</span>
                  </li>
                );
              })}
            </ul>
            <p className="muted" style={{ marginTop: 22 }}>
              {methode.outro}{" "}
              <a href="https://github.com/haniwanice/portfolio1" target="_blank" rel="noreferrer">
                Voir le dépôt
              </a>{" "}
              et{" "}
              <a href="https://github.com/haniwanice/portfolio1/blob/main/CLAUDE.md" target="_blank" rel="noreferrer">
                les règles de l&apos;agent
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="chapter wrap" aria-labelledby="t-notyet" style={{ paddingTop: 0 }}>
        <div className="notyet reveal">
          <h2 id="t-notyet">{notYet.title}</h2>
          <p className="muted">{notYet.intro}</p>
          <ul>
            {notYet.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="chapter wrap" aria-labelledby="t-dehors" style={{ paddingTop: 0 }}>
        <header className="chapter-head reveal">
          <h2 id="t-dehors">En dehors de l&apos;écran</h2>
        </header>
        <div className="outside">
          {outside.map((o, i) => (
            <div key={o.t} className="reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
              <h3>{o.t}</h3>
              <p>{o.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact" aria-labelledby="t-contact">
        <div className="wrap">
          <h2 id="t-contact">Me contacter</h2>
          <p className="lead">
            Un stage de 2 à 5 mois, d&apos;avril à fin août 2027, à Paris ou ailleurs en Île-de-France.
          </p>
          <a className="mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="contact-grid">
            <a href={`tel:${site.phoneHref}`}>
              <span>Téléphone</span>
              <b>{site.phone}</b>
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <b>Hani Wanice</b>
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <b>HaniWanice</b>
            </a>
            <a href={site.cv} download>
              <span>CV</span>
              <b>Télécharger le PDF</b>
            </a>
          </div>
          <div className="foot">
            <span>© 2026 Hani Wanice</span>
            <span>
              Next.js, Motion et les figures{" "}
              <a href="https://hairline.lucasmarkes.com" target="_blank" rel="noreferrer">
                Hairline
              </a>
              . Pas de cookie, pas de traceur.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
