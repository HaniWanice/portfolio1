import Image from "next/image";
import { projects, site, type Project } from "@/lib/site";
import { Arrow } from "./Arrow";
import { Reveal } from "./Reveal";

function Cover({ id }: { id: Project["id"] }) {
  if (id === "airline") {
    return (
      <div className="cover cover--airline" aria-hidden="true">
        <div className="mock">
          <div className="mock__bar">
            <span>admin · vols</span>
            <span>3 comptes</span>
          </div>
          <div className="row">
            <span>Claire M.</span>
            <i />
          </div>
          <div className="row">
            <span>Yanis B.</span>
            <i />
          </div>
          <div className="row">
            <span>Inès R.</span>
            <i />
          </div>
        </div>
      </div>
    );
  }

  if (id === "keewic") {
    return (
      <div className="cover cover--keewic" aria-hidden="true" href="https://apps.apple.com/fr/app/keewic/id6761733932">
        <div className="phone">
          <div className="phone__screen">
            <b>Keewic</b>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cover cover--card" aria-hidden="true">
      <div className="idcard">
        <div className="idcard__top">
          <span className="idcard__avatar" />
          <span>
            <span className="idcard__name">Hani W.</span>
            <span className="idcard__role">full-stack</span>
          </span>
        </div>
        <div className="idcard__lines">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const primary = project.href ?? project.code;

  const media = project.image ? (
    <Image
      src={project.image}
      alt={`Aperçu du projet ${project.name}`}
      width={1200}
      height={750}
      quality={84}
      sizes="(max-width: 620px) 92vw, (max-width: 1080px) 46vw, 66vw"
      loading={index < 2 ? "eager" : "lazy"}
    />
  ) : (
    <Cover id={project.id} />
  );

  return (
    <article className={`card card--${project.size}`} data-tilt>
      {primary ? (
        <a
          className="card__media"
          href={primary}
          target="_blank"
          rel="noreferrer"
          aria-label={`Ouvrir ${project.name}`}
        >
          {media}
          <span className="card__open">
            <Arrow />
          </span>
        </a>
      ) : (
        <div className="card__media">{media}</div>
      )}

      <div className="card__body">
        <p className="card__kind mono">{project.kind}</p>
        <div className="card__top">
          <h3>{project.name}</h3>
          <span className="mono card__year">{project.year}</span>
        </div>
        <p className="card__note">{project.note}</p>

        <div className="card__foot">
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="card__links">
            {project.href ? (
              <a href={project.href} target="_blank" rel="noreferrer">
                Démo
                <Arrow />
              </a>
            ) : null}
            {project.code ? (
              <a href={project.code} target="_blank" rel="noreferrer">
                Code
                <Arrow />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section projects" id="projets" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <p className="kicker">
              <span>02</span>
              Projets
            </p>
            <h2 id="projects-title">
              Des projets qui tournent.
              <br />
              Pas des <em>maquettes</em>.
            </h2>
          </Reveal>

          <Reveal delay={100} className="sec-head__side">
            <p>
              Trois se visitent en ligne, tous ont leur code public. Chacun
              règle un problème que j&apos;ai rencontré — pas un exercice de
              tutoriel.
            </p>
            <a
              className="inline-link"
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              Tout voir sur GitHub
              <Arrow />
            </a>
          </Reveal>
        </div>

        <div className="grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 3) * 70}
              className={`cell cell--${project.size}`}
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
