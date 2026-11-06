import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import "../home.css";
import "../pages.css";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/content";

const main = localFont({
  src: "../../../public/fonts/bricolage.woff2",
  variable: "--font-main",
  weight: "200 800",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "75% 100%" }],
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const description =
  "Hani Wanice, développeur web full-stack. Étudiant en L3 informatique à l'Université Paris-Est Créteil, il cherche un stage de 2 à 5 mois à partir d'avril 2027, en Île-de-France.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Hani Wanice, développeur web full-stack", template: "%s · Hani Wanice" },
  description,
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: site.name,
    title: "Hani Wanice, développeur web full-stack",
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#f2f3f5",
  colorScheme: "light",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={main.variable}>
      <body>
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"],.w{opacity:1!important;transform:none!important}.statement{height:auto!important}.statement-sticky{position:static!important}`}</style>
        </noscript>
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        <SmoothScroll />
        <Nav />
        <main id="contenu">{children}</main>
      </body>
    </html>
  );
}
