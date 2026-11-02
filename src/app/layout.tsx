import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Effects } from "@/components/Effects";
import { site } from "@/lib/site";

const display = localFont({
  src: [
    { path: "../../public/fonts/general-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/general-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/general-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

const sans = localFont({
  src: "../../public/fonts/inter-tight.woff2",
  variable: "--font-sans",
  weight: "400 900",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

const serif = localFont({
  src: "../../public/fonts/gambarino.woff2",
  variable: "--font-serif",
  weight: "400",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: false,
});

const mono = localFont({
  src: [
    { path: "../../public/fonts/jetbrains-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/jetbrains-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "Menlo", "monospace"],
  adjustFontFallback: false,
});

const description =
  "Hani Wanice, développeur web full-stack, étudiant en L3 informatique à l'université Paris-Est. Stage de 2 à 4 mois dès avril 2027, alternance dès septembre 2027. Next.js, React, TypeScript, PHP, Docker, SQL.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: "Hani — développeur web full-stack",
  description,
  applicationName: "Hani Wanice",
  authors: [{ name: "Hani Wanice", url: site.siteUrl }],
  creator: "Hani Wanice",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Hani Wanice",
    title: "Hani — développeur web full-stack",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hani — développeur web full-stack",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f6f2",
  colorScheme: "light",
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hani Wanice",
  alternateName: "Hani",
  jobTitle: "Développeur web full-stack",
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  url: site.siteUrl,
  sameAs: [site.github, site.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Université Paris-Est",
  },
  knowsLanguage: ["fr", "en", "es"],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "PHP",
    "Laravel",
    "SQL",
    "Docker",
    "API REST",
    "Figma",
  ],
  seeks: [
    { "@type": "Demand", name: "Stage de 2 à 4 mois — avril 2027" },
    { "@type": "Demand", name: "Alternance — septembre 2027" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip" href="#contenu">
          Aller au contenu
        </a>
        <Effects />
        <Nav />
        <main id="contenu">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
