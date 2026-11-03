// VERSION OPTIMISÉE. Même boutique, même texte, mêmes photos sources, même CSS.
//  1. Composant serveur, page statique : le HTML complet est fabriqué au build.
//  2. Les données sont lues côté serveur : aucune requête après le chargement, aucune cascade.
//  3. Le calcul lourd (8 000 lignes) est fait une seule fois, au build. Le visiteur reçoit
//     le résultat, pas le catalogue.
//  4. Photos : next/image (bonne taille, AVIF/WebP, dimensions connues, flou de remplacement
//     sur les cartes, chargement différé sous le pli, priorité à l'image du haut de page seulement).
//  5. Polices : next/font/local, préchargées (voir optim/layout.tsx). Pas de script tiers.
//  6. JavaScript réduit à des îlots : onglets, panier, infolettre (interactive.tsx).
import { catalog } from "@/lib/demo/catalog";
import { cards, homeReviews, tips } from "@/lib/demo/products";
import { catalogStats } from "@/lib/demo/stats";
import { photoKeys } from "@/lib/demo/site";
import { CartDrawer, ShopProvider } from "@/components/demo/shop/interactive";
import { optimPh } from "@/components/demo/shop/optim-photo";
import { Catalog, Footer, Hero, Newsletter, PromoBar, Reassure, ReviewsSection, SiteHeader, Story, Tiles, TipsSection } from "@/components/demo/shop/ui";
import { ReadyMark } from "@/components/demo/ReadyMark";

export const dynamic = "force-static";

const BASE = "/demo/optim";
const stats = catalogStats(catalog()); // une fois, au build
const thumbs = Object.fromEntries(photoKeys.map((k) => [k, optimPh(k, "line")]));

export default function Optim() {
  return (
    <ShopProvider base={BASE} home>
      <PromoBar />
      <SiteHeader base={BASE} />
      <main>
        <Hero ph={optimPh} />
        <Reassure />
        <Tiles ph={optimPh} />
        <Catalog cards={cards} stats={stats} ph={optimPh} base={BASE} />
        <Story ph={optimPh} />
        <ReviewsSection reviews={homeReviews()} />
        <TipsSection tips={tips} ph={optimPh} />
        <Newsletter />
        <ReadyMark />
      </main>
      <Footer base={BASE} />
      <CartDrawer thumbs={thumbs} />
    </ShopProvider>
  );
}
