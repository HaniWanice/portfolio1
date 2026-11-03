"use client";

import dynamic from "next/dynamic";

// Figures Hairline (traits isométriques qui répondent au pointeur), chargées
// côté client seulement : sur le serveur elles occupent juste leur boîte 5:4.
const Vault = dynamic(() => import("@lucasmarkes/hairline/react").then((m) => m.Vault), { ssr: false });
const Branches = dynamic(() => import("@lucasmarkes/hairline/react").then((m) => m.Branches), { ssr: false });
const Terminal = dynamic(() => import("@lucasmarkes/hairline/react").then((m) => m.Terminal), { ssr: false });

const map = { vault: Vault, branches: Branches, terminal: Terminal };

export function Figure({ name, label }: { name: keyof typeof map; label: string }) {
  const C = map[name];
  return (
    <div style={{ aspectRatio: "5 / 4", width: "100%" }}>
      <C aria-label={label} intensity={0.6} play />
    </div>
  );
}
