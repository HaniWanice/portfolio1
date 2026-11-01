import { skills, strengths, timeline } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section className="section exp" id="parcours" aria-labelledby="exp-title">
      <div className="wrap">
        <div className="sec-head">
          <Reveal>
            <p className="kicker">
              <span>03</span>
              Parcours
            </p>
            <h2 id="exp-title">
              Ce que le stage
              <br />a <em>changé</em>.
            </h2>
          </Reveal>

          <Reveal delay={100} className="sec-head__side">
            <p>
              Deux mois à la DSI de l&apos;université, un système réel, des
              utilisateurs réels. C&apos;est là que j&apos;ai appris à choisir.
            </p>
          </Reveal>
        </div>

        <div className="exp__grid">
          <div className="strengths">
            {strengths.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <div className="strength">
                  <span className="mono strength__n">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="timeline">
            {timeline.map((entry, index) => (
              <Reveal key={`${entry.period}-${entry.title}`} delay={index * 70}>
                <article className="tl">
                  <div className="tl__head">
                    <span className="tl__period mono">{entry.period}</span>
                    <div>
                      <h3>{entry.title}</h3>
                      <p className="tl__org">
                        {entry.org}
                        {entry.when ? (
                          <span className="tl__when"> · {entry.when}</span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                  <ul className="tl__points">
                    {entry.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="skills">
          <p className="kicker kicker--tight">
            <span>04</span>
            Compétences
          </p>
          <dl className="skills__list">
            {skills.map((group) => (
              <div className="skills__row" key={group.label}>
                <dt className="mono">{group.label}</dt>
                <dd>
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
