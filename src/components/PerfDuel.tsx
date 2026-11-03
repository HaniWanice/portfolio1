"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Refresh } from "./Icons";
import type { Metrics } from "./demo/Probe";

type Kind = "naive" | "optim";
type State = Record<Kind, Metrics | null>;

const rows: { key: keyof Metrics; label: string; fmt: (v: number) => string; hint: string }[] = [
  { key: "ready", label: "Tout le contenu visible", fmt: (v) => `${(v / 1000).toFixed(2)} s`, hint: "" },
  { key: "cls", label: "Décalages de mise en page (CLS)", fmt: (v) => v.toFixed(3), hint: "Bon sous 0,1" },
  { key: "tbt", label: "Fil principal bloqué (TBT)", fmt: (v) => `${Math.round(v)} ms`, hint: "Bon sous 200 ms" },
  { key: "bytes", label: "Poids téléchargé", fmt: (v) => (v > 1e6 ? `${(v / 1e6).toFixed(2)} Mo` : `${Math.round(v / 1000)} ko`), hint: "" },
  { key: "requests", label: "Requêtes", fmt: (v) => String(v), hint: "" },
];

export function PerfDuel() {
  const [m, setM] = useState<State>({ naive: null, optim: null });
  const [final, setFinal] = useState<Record<Kind, boolean>>({ naive: false, optim: false });
  const [run, setRun] = useState(0);
  // Les deux pages partagent le fil principal du navigateur (même origine) :
  // on les charge l'une après l'autre pour qu'aucune ne fausse la mesure de l'autre.
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const frames = useRef<Record<Kind, HTMLIFrameElement | null>>({ naive: null, optim: null });

  useEffect(() => {
    const on = (e: MessageEvent) => {
      if (e.origin !== location.origin || e.data?.source !== "labo") return;
      const k = e.data.kind as Kind;
      setM((s) => ({ ...s, [k]: e.data.metrics }));
      if (e.data.final) setFinal((f) => ({ ...f, [k]: true }));
    };
    addEventListener("message", on);
    return () => removeEventListener("message", on);
  }, []);

  useEffect(() => {
    if (stage === 0) {
      const t = setTimeout(() => setStage(1), 600);
      return () => clearTimeout(t);
    }
    if (stage === 1 && final.naive) {
      const t = setTimeout(() => setStage(2), 300);
      return () => clearTimeout(t);
    }
  }, [stage, final.naive, run]);

  const reload = useCallback(() => {
    setM({ naive: null, optim: null });
    setFinal({ naive: false, optim: false });
    setStage(0);
    setRun((r) => r + 1);
  }, []);

  const pane = (k: Kind, title: string) => {
    const me = m[k];
    return (
      <div className="pane" data-kind={k}>
        <div className="pane-head" data-kind={k}>
          <b>{title}</b>
          <span className="muted">{final[k] ? "mesuré" : me ? "mesure en cours…" : k === "optim" && stage < 2 ? "en attente de la première" : "chargement…"}</span>
        </div>
        <iframe
          key={run}
          ref={(el) => {
            frames.current[k] = el;
          }}
          src={(k === "naive" ? stage >= 1 : stage >= 2) ? `/demo/${k}?run=${run}` : "about:blank"}
          title={`Version ${k === "naive" ? "naïve" : "optimisée"} de la page de démo`}
        />
        <ul className="metrics" aria-live="polite">
          {rows.map((r) => {
            const v = me?.[r.key] as number | null | undefined;
            const other = m[k === "naive" ? "optim" : "naive"]?.[r.key] as number | null | undefined;
            const max = Math.max(v ?? 0, other ?? 0) || 1;
            return (
              <li className="metric" key={r.key}>
                <span>
                  {r.label}
                  {r.hint && <span className="muted"> · {r.hint}</span>}
                </span>
                <b>{v == null ? "…" : r.fmt(v)}</b>
                <span className="bar" aria-hidden="true">
                  <i style={{ transform: `scaleX(${v == null ? 0 : Math.max(0.02, v / max)})` }} />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="duel">
      <div className="duel-bar">
        <p>Les deux pages se chargent l&apos;une après l&apos;autre, dans votre navigateur. Rien n&apos;est pré-enregistré.</p>
        <button className="btn btn-ink" style={{ minHeight: 40 }} onClick={reload}>
          <Refresh />
          Recharger les deux
        </button>
      </div>
      <div className="duel-panes">
        {pane("naive", "Version naïve")}
        {pane("optim", "Version optimisée")}
      </div>
    </div>
  );
}
