import type { Metadata } from "next";
import "./demo.css";
import { Probe } from "@/components/demo/Probe";

export const metadata: Metadata = {
  title: "Démo labo perf",
  robots: { index: false, follow: false },
};

// Layout racine séparé : les pages de démo n'embarquent rien du portfolio
// (ni ses polices, ni ses composants), pour que la mesure ne compare qu'elles.
export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Probe />
      </body>
    </html>
  );
}
