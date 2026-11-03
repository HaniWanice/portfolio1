import type { Metadata } from "next";

export const metadata: Metadata = { title: "Maison Brume (version naïve)" };

// Ce qui, dans la version naïve, pèse sur le chargement avant même que la page existe :
//  - les polices arrivent par une chaîne de trois @import (voir public/demo/fonts/naive-1.css) ;
//  - un script d'avis tiers, synchrone, qui bloque la lecture de la page pendant 150 ms.
export default function NaiveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-css-tags -- anti-patron volontaire de cette version */}
      <link rel="stylesheet" href="/demo/fonts/naive-1.css" />
      {/* eslint-disable-next-line @next/next/no-sync-scripts -- anti-patron volontaire de cette version */}
      <script src="/demo/vendor/avis-widget.js" />
      <div className="shell">{children}</div>
    </>
  );
}
