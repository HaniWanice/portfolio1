import { Reveal } from "./Reveal";

export function CaseStudy() {
  return (
    <section className="case" id="etude" aria-labelledby="case-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker kicker--light">
            <span>01</span>
            Le stage, en détail · 2026
          </p>
        </Reveal>

        <div className="case__grid">
          <Reveal className="case__text">
            <h2 id="case-title">
              Deux outils.
              <br />
              Un pont.
              <br />
              <em>Aucune fuite.</em>
            </h2>

            <p className="case__lead">
              L&apos;université gère son support dans deux logiciels séparés :
              un pour les étudiants, un pour le personnel. Ils ne doivent jamais
              se mélanger. Il fallait pourtant qu&apos;un ticket passe de l&apos;un
              à l&apos;autre — sans fusionner les données.
            </p>

            <div className="case__facts">
              <div>
                <strong>2</strong>
                <span>outils reliés</span>
              </div>
              <div>
                <strong>40 000</strong>
                <span>étudiants concernés</span>
              </div>
              <div>
                <strong>0</strong>
                <span>donnée partagée</span>
              </div>
            </div>

            <p className="case__proof">
              Prototype validé avec mon tuteur, puis repris par l&apos;équipe
              support pour la recette.
            </p>

            <p className="case__stack mono">
              Next.js · Server Actions · API REST · Docker Compose · MariaDB
            </p>
          </Reveal>

          <Reveal className="case__visual" delay={120}>
            <div className="flow">
              <div className="flow__panel">
                <span className="mono flow__name">Support · étudiants</span>
                <div className="flow__ticket">
                  <span className="mono">#2481</span>
                  <p>Wi-Fi coupé au bâtiment I</p>
                  <span className="flow__state">escaladé</span>
                </div>
              </div>

              <div className="flow__rail" aria-hidden="true">
                <span className="flow__packet" />
              </div>

              <div className="flow__panel flow__panel--alt">
                <span className="mono flow__name">Support · personnel</span>
                <div className="flow__ticket flow__ticket--mirror">
                  <span className="mono">#9074</span>
                  <p>[ETU-2481] Wi-Fi coupé au bâtiment I</p>
                  <span className="flow__state">miroir</span>
                </div>
              </div>
            </div>

            <p className="flow__caption mono">
              Ticket miroir créé · identifiant d&apos;origine conservé · statut
              synchronisé des deux côtés
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
