"use client";

// VERSION NAÏVE, volontairement. Chaque erreur ci-dessous se croise dans de vraies boutiques ;
// la liste complète, avec ce que fait l'autre version à la place, est dans le labo.
//  1. Toute la page est un composant client : rien n'est calculé sur le serveur.
//  2. Les données arrivent par fetch dans un useEffect, en CASCADE : le catalogue, PUIS les avis,
//     PUIS les articles. Chaque requête attend la fin de la précédente.
//  3. Le catalogue complet (8 000 lignes, près de 1 Mo de JSON) est envoyé au navigateur pour
//     n'en afficher que 16, et une agrégation lourde (tri, dédoublonnage) y est refaite à
//     chaque visite pour afficher « N références, prix médian ».
//  4. Photos : <img> avec les originaux de 2000 px, sans dimensions ni chargement différé
//     (voir naive-photo.tsx).
//  5. Polices et script tiers bloquants : voir naive/layout.tsx.
//  6. Une bibliothèque d'animation entière (motion) importée pour un simple fondu à l'arrivée.
import { useEffect, useState } from "react";
import { MotionConfig, motion } from "motion/react";
import { catalogStats } from "@/lib/demo/stats";
import { photoKeys } from "@/lib/demo/site";
import type { CatalogRow, CatalogStats, Review, Tip } from "@/lib/demo/types";
import { CartDrawer, ShopProvider } from "@/components/demo/shop/interactive";
import { naivePh } from "@/components/demo/shop/naive-photo";
import { Catalog, Footer, Hero, Newsletter, PromoBar, Reassure, ReviewsSection, SiteHeader, Story, Tiles, TipsSection } from "@/components/demo/shop/ui";

const BASE = "/demo/naive";
const get = (what: string) => fetch(`/api/demo?what=${what}`).then((r) => r.json());

export default function NaiveHome() {
  const [rows, setRows] = useState<CatalogRow[] | null>(null);
  const [stats, setStats] = useState<CatalogStats | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [tips, setTips] = useState<Tip[] | null>(null);

  useEffect(() => {
    get("catalog") // 2. première requête…
      .then((all: CatalogRow[]) => {
        setRows(all);
        setStats(catalogStats(all)); // 3. calcul lourd, dans le navigateur
        return get("reviews"); // …qui n'en lance une deuxième qu'une fois la première finie
      })
      .then((r: Review[]) => {
        setReviews(r);
        return get("tips"); // …puis une troisième
      })
      .then(setTips);
  }, []);

  useEffect(() => {
    // Même repère que la version optimisée : tout le contenu est là, au-dessus comme au-dessous du pli.
    if (tips) performance.mark("contenu-pret");
  }, [tips]);

  const cards = rows ? rows.filter((r) => r.featured).map((r) => r.featured!) : null;
  const thumbs = Object.fromEntries(photoKeys.map((k) => [k, naivePh(k, "line")]));

  return (
    <MotionConfig reducedMotion="user">
      <ShopProvider base={BASE} home>
        <PromoBar />
        <SiteHeader base={BASE} />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero ph={naivePh} />
          <Reassure />
          <Tiles ph={naivePh} />
          <Catalog cards={cards} stats={stats} ph={naivePh} base={BASE} />
          <Story ph={naivePh} />
          <ReviewsSection reviews={reviews} />
          <TipsSection tips={tips} ph={naivePh} />
          <Newsletter />
        </motion.main>
        <Footer base={BASE} />
        <CartDrawer thumbs={thumbs} />
      </ShopProvider>
    </MotionConfig>
  );
}
