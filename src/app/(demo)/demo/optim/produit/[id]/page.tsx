// Fiche produit, version OPTIMISÉE : une page statique par produit, fabriquée au build.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, productById, relatedTo, reviewsFor } from "@/lib/demo/products";
import { photoKeys } from "@/lib/demo/site";
import { CartDrawer, ShopProvider } from "@/components/demo/shop/interactive";
import { optimPh } from "@/components/demo/shop/optim-photo";
import { ProductPage } from "@/components/demo/shop/product";
import { Footer, PromoBar, SiteHeader } from "@/components/demo/shop/ui";
import { ReadyMark } from "@/components/demo/ReadyMark";

export const dynamicParams = false;

const BASE = "/demo/optim";
const thumbs = Object.fromEntries(photoKeys.map((k) => [k, optimPh(k, "line")]));

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const p = productById((await params).id);
  return p ? { title: p.name, description: p.blurb } : {};
}

export default async function OptimProduct({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productById(id);
  if (!product) notFound();
  return (
    <ShopProvider base={BASE}>
      <PromoBar />
      <SiteHeader base={BASE} />
      <main>
        <ProductPage product={product} reviews={reviewsFor(id)} related={relatedTo(id)} ph={optimPh} base={BASE} />
        <ReadyMark />
      </main>
      <Footer base={BASE} />
      <CartDrawer thumbs={thumbs} />
    </ShopProvider>
  );
}
