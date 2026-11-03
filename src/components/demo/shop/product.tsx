// Fiche produit : balisage commun aux deux versions (voir ui.tsx).
import { ProductView } from "./interactive";
import { Card, ReviewCard, Stars, type Ph } from "./ui";
import { categories, note } from "@/lib/demo/site";
import type { CardData, Product, Review } from "@/lib/demo/types";

export function ProductPage({
  product: p,
  reviews,
  related,
  ph,
  base,
}: {
  product: Product;
  reviews: Review[] | null;
  related: CardData[] | null;
  ph: Ph;
  base: string;
}) {
  const cat = categories.find((c) => c.id === p.cat)!;
  return (
    <>
      <nav className="crumbs wrap" aria-label="Fil d'Ariane">
        <a href={base}>Accueil</a> / <a href={`${base}?cat=${cat.id}#produits`}>{cat.label}</a> / {p.name}
      </nav>
      <ProductView
        p={p}
        photos={p.gallery.map((k, i) => ph(k, "gallery", i === 0))}
        thumbs={p.gallery.map((k) => ph(k, "thumb"))}
        panels={{
          description: p.description.map((t) => <p key={t.slice(0, 24)}>{t}</p>),
          details: (
            <dl className="dl">
              {p.details.map(([k, v]) => (
                <div key={k} style={{ display: "contents" }}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          ),
          reviews: (
            <div className="panel-avis">
              <p className="avis-sum">
                <b>{note(p.rating)}</b> <Stars value={p.rating} /> sur {p.count} avis
              </p>
              {reviews ? reviews.map((r) => <ReviewCard key={r.id} r={r} />) : <p className="loading-line">Chargement des avis…</p>}
            </div>
          ),
        }}
      />
      <section className="sec wrap" aria-labelledby="assoc-title">
        <div className="sec-head">
          <h2 id="assoc-title">Vous aimerez aussi</h2>
        </div>
        {related ? (
          <div className="grid">
            {related.map((c) => (
              <Card key={c.id} p={c} ph={ph} base={base} />
            ))}
          </div>
        ) : (
          <p className="loading-line">Chargement des produits associés…</p>
        )}
      </section>
    </>
  );
}
