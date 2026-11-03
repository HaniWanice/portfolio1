"use client";

import { useEffect } from "react";

// Sonde de mesure : relève les Web Vitals de la page avec les API natives du
// navigateur (PerformanceObserver), sans bibliothèque, puis les envoie à la
// page parente (le labo) par postMessage.
export type Metrics = {
  fcp: number | null;
  lcp: number | null;
  cls: number;
  tbt: number;
  ready: number | null;
  bytes: number;
  requests: number;
};

export function Probe() {
  useEffect(() => {
    const m: Metrics = { fcp: null, lcp: null, cls: 0, tbt: 0, ready: null, bytes: 0, requests: 0 };
    const obs: PerformanceObserver[] = [];
    const watch = (type: string, cb: (e: PerformanceEntry) => void) => {
      try {
        const o = new PerformanceObserver((l) => l.getEntries().forEach(cb));
        o.observe({ type, buffered: true });
        obs.push(o);
      } catch {}
    };
    watch("paint", (e) => {
      if (e.name === "first-contentful-paint") m.fcp = e.startTime;
    });
    watch("largest-contentful-paint", (e) => (m.lcp = e.startTime));
    watch("layout-shift", (e) => {
      const s = e as PerformanceEntry & { value: number; hadRecentInput: boolean };
      if (!s.hadRecentInput) m.cls += s.value;
    });
    watch("longtask", (e) => (m.tbt += Math.max(0, e.duration - 50)));
    watch("mark", (e) => {
      if (e.name === "contenu-pret") m.ready = e.startTime;
    });

    const kind = location.pathname.includes("naive") ? "naive" : "optim";
    const send = (final: boolean) => {
      const nav = performance.getEntriesByType("navigation")[0] as PerformanceResourceTiming | undefined;
      const res = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
      m.bytes = (nav?.encodedBodySize ?? 0) + res.reduce((s, r) => s + (r.encodedBodySize || r.transferSize || 0), 0);
      m.requests = res.length + 1;
      parent.postMessage({ source: "labo", kind, final, metrics: { ...m } }, location.origin);
    };
    const t1 = setTimeout(() => send(false), 1200);
    const t2 = setTimeout(() => send(true), 3200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      obs.forEach((o) => o.disconnect());
    };
  }, []);
  return null;
}
