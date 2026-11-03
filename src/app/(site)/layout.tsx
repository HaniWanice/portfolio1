import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/content";

const sans = localFont({
  src: [
    { path: "../../../public/fonts/general-400.woff2", weight: "400" },
    { path: "../../../public/fonts/general-500.woff2", weight: "500" },
    { path: "../../../public/fonts/general-600.woff2", weight: "600" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const serif = localFont({
  src: "../../../public/fonts/gambarino.woff2",
  variable: "--font-serif",
  weight: "400",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const mono = localFont({
  src: "../../../public/fonts/jetbrains-400.woff2",
  variable: "--font-mono",
  weight: "400",
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
});

const description =
  "Hani Wanice, étudiant en L3 informatique à l'Université Paris-Est Créteil. Développement web full-stack : Next.js, TypeScript, API, Docker. Cherche un stage de 2 à 5 mois à partir d'avril 2027.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Hani Wanice, développeur web", template: "%s · Hani Wanice" },
  description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: site.name,
    title: "Hani Wanice, développeur web",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f3efe6",
  colorScheme: "light",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        <Nav />
        <main id="contenu">{children}</main>
      </body>
    </html>
  );
}
