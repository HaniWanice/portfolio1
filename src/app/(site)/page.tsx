import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Flow } from "@/components/Flow";
import { TodoFrame } from "@/components/TodoFrame";
import { CountUp } from "@/components/CountUp";
import { Figure } from "@/components/Figure";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, ArrowUpRight, Download } from "@/components/Icons";
import { about, contactBlock, glpi, labo, learning, others, site, strengths, todo } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />

      <section className="dating wrap" aria-label="En bref">
        {[strengths, learning].map((col, c) => (
          <div className="dating-col" key={col.title}>
            <Reveal as="h2" className="dating-title">
              {col.title}
            </Reveal>
            <ul>
              {col.items.map((it, i) => (
                <Reveal as="li" key={it} delay={0.08 * i + c * 0.1}>
                  {it}
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="projets" className="screen screen-f1" aria-labelledby="t-glpi">
        <div className="wrap screen-in">
          <Reveal>
            <h2 id="t-glpi" className="screen-title">
              {glpi.title}
            </h2>
            <p className="screen-caption">{glpi.caption}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <Flow />
          </Reveal>
          <Reveal delay={0.25} className="screen-foot">
            <ul className="chips">
              {glpi.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Magnetic>
              <Link className="btn btn-ink on-field" href="/projets/pont-glpi">
                Plus de détails
                <ArrowRight />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="screen screen-f2" aria-labelledby="t-todo">
        <div className="wrap screen-in screen-split">
          <div>
            <Reveal>
              <h2 id="t-todo" className="screen-title mega">
                {todo.title}
              </h2>
              <p className="screen-caption">{todo.caption}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <Magnetic>
                <a className="btn btn-ink on-field" href={site.todo} target="_blank" rel="noreferrer">
                  {todo.label}
                  <ArrowUpRight />
                </a>
              </Magnetic>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <TodoFrame />
          </Reveal>
        </div>
      </section>

      <section className="screen screen-f3" aria-labelledby="t-labo">
        <div className="wrap screen-in screen-split">
          <div>
            <Reveal>
              <h2 id="t-labo" className="screen-title">
                {labo.title}
              </h2>
              <p className="screen-caption">{labo.caption}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="score" aria-label={`Score Lighthouse mobile : ${labo.naive} contre ${labo.optim}`}>
                <span className="score-a">
                  <CountUp to={labo.naive} from={0} />
                </span>
                <ArrowRight className="score-arrow" />
                <span className="score-b">
                  <CountUp to={labo.optim} from={labo.naive} duration={2.2} />
                </span>
              </p>
              <Magnetic>
                <Link className="btn btn-ink on-field" href="/labo">
                  Ouvrir le labo
                  <ArrowRight />
                </Link>
              </Magnetic>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Figure name="slow" theme="light" intensity={0.8} label="Des caisses avancent sur un convoyeur ; quand on survole la figure, le temps ralentit." />
          </Reveal>
        </div>
      </section>

      <section className="others wrap" aria-labelledby="t-others">
        <Reveal as="h2" className="others-title">
          <span id="t-others">D&apos;autres projets.</span>
        </Reveal>
        <ul>
          {others.map((o, i) => (
            <Reveal as="li" key={o.name} delay={0.08 * i}>
              <b>{o.name}</b>
              <span>{o.kind}</span>
              <em>{o.year}</em>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.2}>
          <Link className="btn btn-line" href="/projets">
            Tous les projets
            <ArrowRight />
          </Link>
        </Reveal>
      </section>

      <section className="outside-home wrap" aria-labelledby="t-outside">
        <Reveal>
          <h2 id="t-outside" className="outside-home-title">
            En dehors de l&apos;écran.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="outside">
            {about.outside.map((o) => (
              <li key={o.t}>
                <b>{o.t}</b>
                <p>{o.d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.2}>
          <Link className="btn btn-line" href="/a-propos">
            Qui je suis
            <ArrowRight />
          </Link>
        </Reveal>
      </section>

      <footer id="contact" className="contact" aria-labelledby="t-contact">
        <div className="wrap">
          <Reveal>
            <h2 id="t-contact" className="contact-title">
              {contactBlock.title}
            </h2>
            <p className="contact-text">{contactBlock.text}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a className="mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="contact-grid">
              <li>
                <a href={`tel:${site.phoneHref}`}>
                  <span>Téléphone</span>
                  <b>{site.phone}</b>
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  <span>LinkedIn</span>
                  <b>Hani Wanice</b>
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noreferrer">
                  <span>GitHub</span>
                  <b>HaniWanice</b>
                </a>
              </li>
              <li>
                <a href={site.cv} download>
                  <span>CV</span>
                  <b>
                    Télécharger <Download className="ico" />
                  </b>
                </a>
              </li>
            </ul>
          </Reveal>
          <div className="foot">
            <span>© 2026 Hani Wanice</span>
            <Link className="ulink" href="/a-propos">
              Qui je suis
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
