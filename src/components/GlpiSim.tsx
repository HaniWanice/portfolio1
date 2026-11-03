"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Refresh } from "./Icons";

// Simulation fidèle au prototype du stage (voir le rapport, parties III et IV) :
// double écriture synchrone, balise dans le titre, anti-doublon par lecture avant
// écriture, coupe-circuit sur l'auteur de la modification, détection des faux 200,
// sessions toujours fermées dans un finally. Rien n'est appelé pour de vrai.

type Status = "nouveau" | "escalade" | "resolu";
type Etu = { id: number; title: string; status: Status };
type Dsi = { id: number; ref: number; title: string; status: Status };
type Line = { id: number; t: string; kind?: "ok" | "warn" | "verb" };

const LABEL: Record<Status, string> = { nouveau: "Nouveau", escalade: "En cours", resolu: "Résolu" };

const initialEtu: Etu[] = [
  { id: 42, title: "Impossible de me connecter à l'ENT depuis le Wi-Fi", status: "nouveau" },
  { id: 43, title: "L'imprimante de la BU refuse mon compte", status: "nouveau" },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export function GlpiSim() {
  const reduce = useReducedMotion();
  const [etu, setEtu] = useState<Etu[]>(initialEtu);
  const [dsi, setDsi] = useState<Dsi[]>([]);
  const [log, setLog] = useState<Line[]>([
    { id: 0, t: "Prêt. Deux bases séparées, aucun ticket côté DSI." },
  ]);
  const [busy, setBusy] = useState(false);
  const [broken, setBroken] = useState(false);
  const [packet, setPacket] = useState<null | "aller" | "retour">(null);
  const [vertical, setVertical] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const seq = useRef(1);
  const nextDsi = useRef(1087);

  useEffect(() => {
    const mq = matchMedia("(max-width: 899px)");
    const on = () => setVertical(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [log, reduce]);

  const write = useCallback(async (t: string, kind?: Line["kind"], wait = 260) => {
    // La ligne d'accueil disparaît dès la première action.
    setLog((l) => [...l.filter((x) => x.id !== 0), { id: seq.current++, t, kind }]);
    await sleep(reduce ? 40 : wait);
  }, [reduce]);

  const fly = async (dir: "aller" | "retour") => {
    setPacket(dir);
    await sleep(reduce ? 50 : 700);
    setPacket(null);
  };

  async function escalate(t: Etu) {
    if (busy) return;
    setBusy(true);
    try {
      await write(`> Transmettre #${t.id}`, "verb");
      await write("POST etu/initSession   → 200, session ouverte");
      await write("POST dsi/initSession   → 200, session ouverte");
      await write(`GET  dsi/search/Ticket?name=[ESCALADE ETU - ID:${t.id}]`);
      const existing = dsi.find((d) => d.ref === t.id);
      if (existing) {
        await write(`     → déjà présent (#${existing.id}) : rien à créer (anti-doublon)`, "warn");
        if (existing.status === "resolu")
          await write("     limite du prototype : une relance sur un ticket résolu ne le rouvre pas", "warn");
        return;
      }
      await write("     → aucun résultat, on peut créer");
      await fly("aller");
      if (broken) {
        await write('POST dsi/Ticket        → 200  {"0":"ERROR_GLPI_ADD"}', "warn");
        await write("     faux succès détecté : code 200, erreur dans le corps", "warn");
        await write("     rien n'est modifié côté étudiant", "warn");
        return;
      }
      const id = nextDsi.current++;
      await write(`POST dsi/Ticket        → 201, ticket #${id}`, "ok");
      setDsi((d) => [...d, { id, ref: t.id, title: t.title, status: "escalade" }]);
      await write(`PUT  etu/Ticket/${t.id}     → statut « En cours »`, "ok");
      setEtu((e) => e.map((x) => (x.id === t.id ? { ...x, status: "escalade" } : x)));
    } finally {
      await write("POST */killSession     → sessions fermées (finally)");
      setBusy(false);
    }
  }

  async function resolve(d: Dsi) {
    if (busy) return;
    setBusy(true);
    try {
      await write(`> Résoudre #${d.id} côté DSI`, "verb");
      await write("POST dsi/initSession   → 200");
      await write(`PUT  dsi/Ticket/${d.id}   → statut « Résolu »`, "ok");
      setDsi((x) => x.map((y) => (y.id === d.id ? { ...y, status: "resolu" } : y)));
      await write(`     regex sur le titre → ID étudiant ${d.ref}`);
      await fly("retour");
      await write("POST etu/initSession   → 200");
      await write(`PUT  etu/Ticket/${d.ref}     → statut « Résolu »`, "ok");
      setEtu((e) => e.map((x) => (x.id === d.ref ? { ...x, status: "resolu" } : x)));
      await write("     auteur = compte API → on ne renvoie rien (anti-boucle)", "warn");
    } finally {
      await write("POST */killSession     → sessions fermées (finally)");
      setBusy(false);
    }
  }

  function reset() {
    setEtu(initialEtu);
    setDsi([]);
    nextDsi.current = 1087;
    setLog([{ id: seq.current++, t: "Remis à zéro." }]);
  }

  const packetAnim = vertical
    ? { initial: { y: packet === "aller" ? -50 : 50, opacity: 0 }, animate: { y: packet === "aller" ? 50 : -50, opacity: [0, 1, 1, 0] } }
    : { initial: { x: packet === "aller" ? -70 : 70, opacity: 0 }, animate: { x: packet === "aller" ? 70 : -70, opacity: [0, 1, 1, 0] } };

  return (
    <div className="sim" role="group" aria-label="Simulation du pont entre les deux GLPI">
      <div className="sim-top">
        <p>Essayez : transmettez un ticket, résolvez-le côté DSI, puis transmettez-le une deuxième fois.</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="sim-btn ghost" onClick={() => setBroken((b) => !b)} aria-pressed={broken} disabled={busy}>
            {broken ? "Panne active · réparer" : "Simuler une panne de l'API DSI"}
          </button>
          <button className="sim-btn ghost" onClick={reset} disabled={busy} aria-label="Remettre la simulation à zéro">
            <Refresh className="" />
          </button>
        </div>
      </div>

      <div className="sim-body">
        <div className="sim-col">
          <h3 className="sim-h">
            <b>GLPI étudiant</b> base MariaDB n°1
          </h3>
          <AnimatePresence initial={false}>
            {etu.map((t) => (
              <motion.article key={t.id} layout className="ticket" data-hl={t.status === "escalade"}>
                <p className="ticket-title">
                  <code>#{t.id}</code>
                  {t.title}
                </p>
                <div className="ticket-row">
                  <span className="badge" data-s={t.status}>{LABEL[t.status]}</span>
                  <button className="sim-btn" disabled={busy} onClick={() => escalate(t)}>
                    {t.status === "nouveau" ? "Transmettre à la DSI" : "Transmettre encore"}
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="sim-wall" aria-hidden="true">
          <span className="sim-pipe" />
          <span className="sim-wall-label">Next.js<br />Server Actions</span>
          <AnimatePresence>
            {packet && (
              <motion.span
                key={packet + Date.now()}
                className="sim-packet"
                {...packetAnim}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0.05 : 0.65, ease: [0.65, 0, 0.35, 1] }}
              />
            )}
          </AnimatePresence>
        </div>

        <div className="sim-col">
          <h3 className="sim-h">
            <b>GLPI DSI</b> base MariaDB n°2
          </h3>
          {dsi.length === 0 && <p className="sim-empty">Aucun ticket étudiant n&apos;est encore arrivé ici.</p>}
          <AnimatePresence initial={false}>
            {dsi.map((d) => (
              <motion.article
                key={d.id}
                layout
                className="ticket"
                initial={reduce ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="ticket-title">
                  <code>#{d.id}</code>[ESCALADE ETU - ID:{d.ref}] {d.title}
                </p>
                <div className="ticket-row">
                  <span className="badge" data-s={d.status}>{LABEL[d.status]}</span>
                  <button className="sim-btn" disabled={busy || d.status === "resolu"} onClick={() => resolve(d)}>
                    Résoudre
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="sim-log" ref={logRef} aria-live="polite" aria-label="Journal des appels API">
        {log.map((l) => (
          <div key={l.id} className={l.kind}>
            {l.t}
          </div>
        ))}
      </div>
      <p className="sim-foot">
        Limites du prototype, visibles ici aussi : si un technicien renomme le ticket DSI, la balise disparaît et le lien
        est perdu ; si le second appel échoue après le premier, rien n&apos;annule le ticket déjà créé.
      </p>
    </div>
  );
}
