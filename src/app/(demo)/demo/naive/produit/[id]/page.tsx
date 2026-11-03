"use client";

// Fiche produit, version NAÏVE : même défauts que l'accueil (voir ../../page.tsx).
// Cascade : le produit, PUIS ses avis, PUIS les produits associés.
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { MotionConfig, motion } from "motion/react";
import { photoKeys } from "@/lib/demo/site";
import type { CardData, Product, Review } from "@/lib/demo/types";
import { CartDrawer, ShopProvider } from "@/components/demo/shop/interactive";
import { naivePh } from "@/components/demo/shop/naive-photo";
import { ProductPage } from "@/components/demo/shop/product";
import { Footer, PromoBar, SiteHeader } from "@/components/demo/shop/ui";

const BASE = "/demo/naive";
const get = (what: string, id: string) => fetch(`/api/demo?what=${what}&id=${id}`).then((r) => (r.ok ? r.json() : null));

export default function NaiveProduct() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [related, setRelated] = useState<CardData[] | null>(null);

  useEffect(() => {
    get("product", id)
      .then((p: Product | null) => {
        setProduct(p);
        return p ? get("reviews", id) : null;
      })
      .then((r: Review[] | null) => {
        if (!r) return null;
        setReviews(r);
        return get("related", id);
      })
      .then((c: CardData[] | null) => c && setRelated(c));
  }, [id]);

  useEffect(() => {
    if (related) performance.mark("contenu-pret");
  }, [related]);

  const thumbs = Object.fromEntries(photoKeys.map((k) => [k, naivePh(k, "line")]));

  return (
    <MotionConfig reducedMotion="user">
      <ShopProvider base={BASE}>
        <PromoBar />
        <SiteHeader base={BASE} />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {product === undefined ? (
            <p className="wait">Chargement du produit…</p>
          ) : product === null ? (
            <p className="wait">Ce produit n&apos;existe pas. <a href={BASE}>Retour à la boutique</a></p>
          ) : (
            <ProductPage product={product} reviews={reviews} related={related} ph={naivePh} base={BASE} />
          )}
        </motion.main>
        <Footer base={BASE} />
        <CartDrawer thumbs={thumbs} />
      </ShopProvider>
    </MotionConfig>
  );
}
