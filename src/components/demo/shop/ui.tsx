// Le balisage de la boutique, commun aux deux versions : le rendu est identique parce que
// le code qui le produit est le même. Aucun hook ici. Ce qui diffère est injecté :
//  - `ph` fabrique une photo (une balise <img> brute dans la version naïve, next/image
//    dans la version optimisée) ;
//  - les parties interactives sont dans interactive.tsx.
import type { CSSProperties, ReactNode } from "react";
import { AddButton, CartButton, CatLink, CatTabs, CatTile, NewsletterForm } from "./interactive";
import { brand, categories, discount, eur, footer, hero, newsletter, note, promo, reassurance, reviewsTotal, story, thousands } from "@/lib/demo/site";
import type { CardData, CatalogStats, PhotoKey, Review, Tip } from "@/lib/demo/types";

export type PhotoKind = "hero" | "tile" | "card" | "story" | "tip" | "gallery" | "thumb" | "line";
export type Ph = (key: PhotoKey, kind: PhotoKind, priority?: boolean) => ReactNode;

export function Stars({ value }: { value: number }) {
  return (
    <span className="stars" role="img" aria-label={`Note de ${note(value)} sur 5`} style={{ "--v": `${(value / 5) * 100}%` } as CSSProperties}>
      ★★★★★
    </span>
  );
}

export function PromoBar() {
  return <div className="promo">{promo}</div>;
}

export function SiteHeader({ base }: { base: string }) {
  return (
    <header className="hdr">
      <div className="hdr-in wrap">
        <a className="logo" href={base}>
          {brand.name}
        </a>
        <nav className="nav" aria-label="Catégories">
          {categories.map((c) => (
            <CatLink key={c.id} cat={c.id}>
              {c.label}
            </CatLink>
          ))}
        </nav>
        <CartButton />
      </div>
    </header>
  );
}

export function Hero({ ph }: { ph: Ph }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-img">{ph("hero-filtre", "hero", true)}</div>
      <div className="hero-in wrap">
        <p className="hero-eyebrow">{hero.eyebrow}</p>
        <h1 id="hero-title">{hero.title}</h1>
        <p className="lead">{hero.text}</p>
        <div className="hero-cta">
          <a className="btn light" href="#produits">
            Voir la boutique
          </a>
          <a className="btn line-light" href="#histoire">
            Notre histoire
          </a>
        </div>
      </div>
    </section>
  );
}

export function Reassure() {
  return (
    <ul className="reassure wrap">
      {reassurance.map((r) => (
        <li key={r.title}>
          <b>{r.title}</b>
          {r.text}
        </li>
      ))}
    </ul>
  );
}

export function Tiles({ ph }: { ph: Ph }) {
  return (
    <section className="tiles wrap" aria-label="Parcourir par catégorie">
      {categories.map((c) => (
        <CatTile key={c.id} cat={c.id} label={c.label} text={c.text} photo={ph(c.photo, "tile")} />
      ))}
    </section>
  );
}

export function Card({ p, ph, base }: { p: CardData; ph: Ph; base: string }) {
  const href = `${base}/produit/${p.id}`;
  const cat = categories.find((c) => c.id === p.cat)!.label;
  return (
    <article className="card" data-cat={p.cat}>
      {p.was ? <span className="badge promo-badge">-{discount(p.was, p.price)} %</span> : p.badge ? <span className="badge">{p.badge}</span> : null}
      <a className="card-img" href={href} tabIndex={-1} aria-hidden="true">
        {ph(p.photo, "card")}
      </a>
      <div className="card-body">
        <p className="card-cat">{cat}</p>
        <h3 className="card-name">
          <a href={href}>{p.name}</a>
        </h3>
        <p className="rating">
          <Stars value={p.rating} />
          <span>
            {note(p.rating)} ({p.count})
          </span>
        </p>
        <p className="price">
          <b>{eur(p.price)}</b>
          {p.was && <s>{eur(p.was)}</s>}
        </p>
        <AddButton item={{ id: p.id, name: p.name, price: p.price, photo: p.photo, variant: "" }} />
      </div>
    </article>
  );
}

/** La section « boutique » : ligne de chiffres, onglets, grille. `cards` vaut null tant que la version naïve attend ses données. */
export function Catalog({ cards, stats, ph, base }: { cards: CardData[] | null; stats: CatalogStats | null; ph: Ph; base: string }) {
  return (
    <section className="sec wrap" id="produits" aria-labelledby="boutique-title">
      <div className="sec-head">
        <h2 id="boutique-title">La boutique</h2>
        <p role="status">
          {stats ? (
            <>
              {thousands(stats.inStock)} références en stock, prix médian {eur(stats.median)}
            </>
          ) : (
            "Chargement du catalogue…"
          )}
        </p>
      </div>
      <CatTabs />
      {cards ? (
        <div className="grid" id="grille" role="tabpanel">
          {cards.map((p) => (
            <Card key={p.id} p={p} ph={ph} base={base} />
          ))}
        </div>
      ) : (
        <div className="grid wait" id="grille">
          Chargement des produits…
        </div>
      )}
    </section>
  );
}

export function Story({ ph }: { ph: Ph }) {
  return (
    <section className="story wrap" id="histoire" aria-labelledby="histoire-title">
      <div className="story-img">{ph("histoire-salle", "story")}</div>
      <div>
        <h2 id="histoire-title">{story.title}</h2>
        {story.paragraphs.map((t) => (
          <p key={t.slice(0, 24)}>{t}</p>
        ))}
        <ul className="points">
          {story.points.map((pt) => (
            <li key={pt.title}>
              <b>{pt.title}</b>
              <span>{pt.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="avis">
      <Stars value={r.rating} />
      <h3>{r.title}</h3>
      <p>{r.text}</p>
      <footer>
        <b>{r.author}</b>, {r.city}. {r.date}
        {r.productName && <> · {r.productName}</>}
      </footer>
    </article>
  );
}

export function ReviewsSection({ reviews }: { reviews: Review[] | null }) {
  return (
    <section className="sec wrap" aria-labelledby="avis-title">
      <div className="sec-head">
        <h2 id="avis-title">Ce que disent nos clients</h2>
        <span className="avis-badge">
          <Stars value={reviewsTotal.rating} /> {note(reviewsTotal.rating)} sur 5, {thousands(reviewsTotal.count)} avis vérifiés
        </span>
      </div>
      {reviews ? (
        <div className="avis-grid">
          {reviews.map((r) => (
            <ReviewCard key={r.id} r={r} />
          ))}
        </div>
      ) : (
        <p className="loading-line">Chargement des avis…</p>
      )}
    </section>
  );
}

export function TipsSection({ tips, ph }: { tips: Tip[] | null; ph: Ph }) {
  return (
    <section className="sec wrap" aria-labelledby="journal-title">
      <div className="sec-head">
        <h2 id="journal-title">Le journal</h2>
        <p>Trois conseils de l&apos;atelier</p>
      </div>
      {tips ? (
        <div className="tips">
          {tips.map((t) => (
            <a className="tip" href="#journal" key={t.id}>
              <div className="tip-img">{ph(t.photo, "tip")}</div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
              <small>{t.minutes} min de lecture</small>
            </a>
          ))}
        </div>
      ) : (
        <p className="loading-line">Chargement des articles…</p>
      )}
    </section>
  );
}

export function Newsletter() {
  return (
    <section className="news" aria-labelledby="news-title">
      <div className="news-in wrap">
        <div>
          <h2 id="news-title">{newsletter.title}</h2>
          <p>{newsletter.text}</p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  );
}

export function Footer({ base }: { base: string }) {
  return (
    <footer className="ftr">
      <div className="ftr-in wrap">
        <div>
          <a className="logo" href={base}>
            {brand.name}
          </a>
          <p>{brand.tagline}.</p>
          <p>Atelier et expédition à Lyon (69001)</p>
        </div>
        {footer.columns.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h2>{c.title}</h2>
            <ul>
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="ftr-base wrap">
        <ul>
          {footer.legal.map((l) => (
            <li key={l}>
              <a href="#">{l}</a>
            </li>
          ))}
        </ul>
        <span>Paiement : {footer.payments.join(", ")}</span>
      </div>
      <p className="ftr-note wrap">{footer.note}</p>
    </footer>
  );
}
