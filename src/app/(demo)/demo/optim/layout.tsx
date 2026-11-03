import type { Metadata } from "next";
import localFont from "next/font/local";

// Polices : next/font/local les héberge avec la page, les précharge, ajoute font-display: swap
// et fabrique une police de secours aux mêmes proportions pour éviter le saut de mise en page
// au moment où la vraie police arrive. La police monospace ne sert qu'à de petits repères
// sous le pli : elle n'est pas préchargée.
const display = localFont({
  src: "../../../../../public/demo/fonts/gambarino.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-display",
  fallback: ["Georgia", "serif"],
});
const sans = localFont({
  src: [
    { path: "../../../../../public/demo/fonts/general-400.woff2", weight: "400" },
    { path: "../../../../../public/demo/fonts/general-600.woff2", weight: "600" },
  ],
  display: "swap",
  variable: "--font-sans",
  fallback: ["system-ui", "sans-serif"],
});
const mono = localFont({
  src: "../../../../../public/demo/fonts/jetbrains-400.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-mono",
  preload: false,
  fallback: ["ui-monospace", "monospace"],
});

export const metadata: Metadata = {
  title: { default: "Maison Brume, café, thé et vaisselle de grès", template: "%s | Maison Brume" },
  description: "Café torréfié à Lyon chaque semaine, thés en feuilles, tasses en grès et linge de lin. Boutique fictive de démonstration.",
};

export default function OptimLayout({ children }: { children: React.ReactNode }) {
  return <div className={`shell ${display.variable} ${sans.variable} ${mono.variable}`}>{children}</div>;
}
