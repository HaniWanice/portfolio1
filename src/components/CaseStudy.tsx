import { Reveal } from "./Reveal";

export function CaseStudy() {
  return (
    <section className="case" id="etude" aria-labelledby="case-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker kicker--light">
            <span>01</span>
            Étude de cas · stage DSI, 2026
          </p>
        </Reveal>

        <div className="case__grid">
          <Reveal className="case__text">
            <h2 id="case-title">
              Deux GLPI.
              <br />
              Un pont.
              <br />
              <em>Aucune fuite.</em>
            </h2>

            <p className="case__lead">
              Le personnel et les étudiants ne partagent pas le même GLPI, et ne
              doivent pas le partager. Il fallait pourtant qu&apos;un ticket
              passe de l&apos;un à l&apos;autre, sans jamais fusionner les bases.
            </p>

            <div className="case__facts">
              <div>
                <strong>2</strong>
                <span>installations isolées</span>
              </div>
              <div>
                <strong>40 000</strong>
                <span>comptes étudiants</span>
              </div>
              <div>
                <strong>0</strong>
                <span>donnée du personnel exposée</span>
              </div>
            </div>

            <p className="case__stack mono">
              Next.js · Server Actions · API REST · Docker Compose · MariaDB
            </p>
          </Reveal>

          <Reveal className="case__visual" delay={120}>
            <div className="flow">
              <div className="flow__panel">
                <span className="mono flow__name">GLPI · étudiants</span>
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
                <span className="mono flow__name">GLPI · DSI</span>
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
