import { glpi } from "@/lib/content";

// Schéma du pont : trois blocs, deux liens, des points qui circulent dans les deux sens.
export function Flow({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { nodes, forward, back } = glpi;
  return (
    <div className="flow" data-tone={tone} role="group" aria-label="Schéma : GLPI étudiants, application Next.js, GLPI DSI">
      {nodes.map((n, i) => (
        <div className="flow-cell" key={n.name} style={{ display: "contents" }}>
          <div className="flow-node">
            <b>{n.name}</b>
            <span>{n.sub}</span>
            <em>{n.note}</em>
          </div>
          {i < nodes.length - 1 && (
            <div className="flow-link" aria-hidden="true">
              <div className="track fwd">
                <small>{i === 0 ? forward : ""}</small>
                <i style={{ ["--k" as string]: 0 }} />
                <i style={{ ["--k" as string]: 1 }} />
                <i style={{ ["--k" as string]: 2 }} />
              </div>
              <div className="track bwd">
                <i style={{ ["--k" as string]: 0.5 }} />
                <i style={{ ["--k" as string]: 1.5 }} />
                <i style={{ ["--k" as string]: 2.5 }} />
                <small>{i === 0 ? back : ""}</small>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
