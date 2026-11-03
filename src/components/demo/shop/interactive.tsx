"use client";

// Tout ce qui réagit aux clics : filtre par catégorie, panier, fiche produit, infolettre.
// Ces composants sont partagés par les deux versions. Dans la version optimisée, ce sont
// de petits îlots clients au milieu d'une page rendue sur le serveur ; dans la version
// naïve, toute la page est déjà côté client. Les photos et les blocs de texte arrivent
// en props (ReactNode) : le serveur les a déjà rendus, ils ne coûtent aucun JavaScript.
import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import { categories, eur, freeShippingFrom, note } from "@/lib/demo/site";
import type { CatId, PhotoKey } from "@/lib/demo/types";
import { Stars } from "./ui";

type Cat = CatId | "all";
type Line = { key: string; id: string; name: string; price: number; photo: PhotoKey; variant: string; qty: number };
export type CartItem = Omit<Line, "key" | "qty">;

type Ctx = {
  base: string;
  home: boolean;
  cat: Cat;
  setCat: (c: Cat) => void;
  lines: Line[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (o: boolean) => void;
  add: (item: CartItem, qty?: number) => void;
  setQty: (key: string, qty: number) => void;
  remove: (key: string) => void;
};

const ShopCtx = createContext<Ctx | null>(null);

function useShop() {
  const c = useContext(ShopCtx);
  if (!c) throw new Error("ShopProvider manquant");
  return c;
}

const catIds = new Set<string>(categories.map((c) => c.id));

export function ShopProvider({ base, home = false, children }: { base: string; home?: boolean; children: ReactNode }) {
  const [cat, setCat] = useState<Cat>("all");
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);

  // Arrivée depuis une fiche produit : /demo/x?cat=the#produits
  useEffect(() => {
    if (!home) return;
    const c = new URLSearchParams(location.search).get("cat");
    // Lire l'URL n'est possible qu'après le premier rendu (la page est générée une fois, sans URL de visiteur).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (c && catIds.has(c)) setCat(c as CatId);
  }, [home]);

  const add = useCallback((item: CartItem, qty = 1) => {
    const key = `${item.id}|${item.variant}`;
    setLines((ls) => (ls.some((l) => l.key === key) ? ls.map((l) => (l.key === key ? { ...l, qty: Math.min(10, l.qty + qty) } : l)) : [...ls, { ...item, key, qty }]));
    setOpen(true);
  }, []);
  const setQty = useCallback((key: string, qty: number) => setLines((ls) => ls.map((l) => (l.key === key ? { ...l, qty: Math.max(1, Math.min(10, qty)) } : l))), []);
  const remove = useCallback((key: string) => setLines((ls) => ls.filter((l) => l.key !== key)), []);

  const value = useMemo<Ctx>(() => {
    const count = lines.reduce((s, l) => s + l.qty, 0);
    const subtotal = lines.reduce((s, l) => s + l.qty * l.price, 0);
    return { base, home, cat, setCat, lines, count, subtotal, open, setOpen, add, setQty, remove };
  }, [base, home, cat, lines, open, add, setQty, remove]);

  return (
    <ShopCtx.Provider value={value}>
      <div className="shop" data-cat={cat}>
        {children}
      </div>
    </ShopCtx.Provider>
  );
}

function goToGrid() {
  document.getElementById("produits")?.scrollIntoView();
}

/** Lien de navigation de l'en-tête. Sur l'accueil il filtre la grille, ailleurs il y retourne. */
export function CatLink({ cat, children }: { cat: Cat; children: ReactNode }) {
  const { base, home, cat: current, setCat } = useShop();
  const href = home ? "#produits" : `${base}${cat === "all" ? "" : `?cat=${cat}`}#produits`;
  return (
    <a
      href={href}
      aria-current={home && current === cat ? "true" : undefined}
      onClick={(e) => {
        if (!home) return;
        e.preventDefault();
        setCat(cat);
        goToGrid();
      }}
    >
      {children}
    </a>
  );
}

/** Tuile de catégorie de l'accueil : un bouton, avec sa photo en fond. */
export function CatTile({ cat, label, text, photo }: { cat: CatId; label: string; text: string; photo: ReactNode }) {
  const { setCat } = useShop();
  return (
    <button
      className="tile"
      onClick={() => {
        setCat(cat);
        goToGrid();
      }}
    >
      <span className="ph">{photo}</span>
      <span className="tile-txt">
        <b>{label}</b>
        <span>{text}</span>
      </span>
    </button>
  );
}

/** Les vrais onglets (rôle tablist) au-dessus de la grille, pilotables au clavier. */
export function CatTabs() {
  const { cat, setCat } = useShop();
  const tabs: { id: Cat; label: string }[] = [{ id: "all", label: "Tout" }, ...categories.map((c) => ({ id: c.id as Cat, label: c.label }))];
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    const move = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!move) return;
    e.preventDefault();
    const j = (i + move + tabs.length) % tabs.length;
    setCat(tabs[j].id);
    refs.current[j]?.focus();
  };
  return (
    <div className="tabs" role="tablist" aria-label="Filtrer les produits par catégorie">
      {tabs.map((t, i) => (
        <button
          key={t.id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          role="tab"
          className="tab"
          aria-selected={cat === t.id}
          aria-controls="grille"
          tabIndex={cat === t.id ? 0 : -1}
          onClick={() => setCat(t.id)}
          onKeyDown={(e) => onKey(e, i)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function CartButton() {
  const { count, setOpen } = useShop();
  return (
    <button className="cart-btn" onClick={() => setOpen(true)} aria-label={`Ouvrir le panier, ${count} article${count > 1 ? "s" : ""}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 8h14l-1.2 11H6.2L5 8Z" />
        <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
      </svg>
      Panier
      <span className="count" aria-hidden="true">
        {count}
      </span>
    </button>
  );
}

export function AddButton({ item, label = "Ajouter au panier", small = true }: { item: CartItem; label?: string; small?: boolean }) {
  const { add } = useShop();
  return (
    <button className={`btn${small ? " sm" : ""}`} onClick={() => add(item)}>
      {label}
    </button>
  );
}

function Qty({ value, onChange, label }: { value: number; onChange: (n: number) => void; label: string }) {
  return (
    <div className="qty" role="group" aria-label={label}>
      <button onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label="Retirer un">
        −
      </button>
      <output aria-live="polite">{value}</output>
      <button onClick={() => onChange(value + 1)} disabled={value >= 10} aria-label="Ajouter un">
        +
      </button>
    </div>
  );
}

/** Le tiroir du panier. Les miniatures arrivent déjà rendues (un nœud par photo). */
export function CartDrawer({ thumbs }: { thumbs: Partial<Record<PhotoKey, ReactNode>> }) {
  const { open, setOpen, lines, count, subtotal, setQty, remove } = useShop();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [asked, setAsked] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const before = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: globalThis.KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => {
      removeEventListener("keydown", onKey);
      before?.focus?.();
    };
  }, [open, setOpen]);

  const missing = Math.max(0, freeShippingFrom - subtotal);
  return (
    <div className="drawer-root" data-open={open}>
      <div className="scrim" onClick={() => setOpen(false)} />
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby={titleId} inert={!open}>
        <div className="drawer-head">
          <h2 id={titleId}>Votre panier{count > 0 ? ` (${count})` : ""}</h2>
          <button ref={closeRef} className="icon-btn" onClick={() => setOpen(false)} aria-label="Fermer le panier">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div className="ship" style={{ "--p": Math.min(1, subtotal / freeShippingFrom) } as CSSProperties}>
          {missing > 0 ? `Plus que ${eur(missing)} pour la livraison offerte.` : "La livraison est offerte."}
          <i />
        </div>
        {lines.length === 0 ? (
          <p className="empty">Votre panier est vide.</p>
        ) : (
          <ul className="lines">
            {lines.map((l) => (
              <li className="line" key={l.key}>
                <div className="line-img">{thumbs[l.photo]}</div>
                <div>
                  <b>{l.name}</b>
                  <small>{l.variant || "Standard"}</small>
                  <Qty value={l.qty} onChange={(n) => setQty(l.key, n)} label={`Quantité de ${l.name}`} />
                </div>
                <div className="line-end">
                  <b>{eur(l.price * l.qty)}</b>
                  <button className="link-btn" onClick={() => remove(l.key)} aria-label={`Retirer ${l.name} du panier`}>
                    Retirer
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="drawer-foot">
          <div className="sum">
            <span>Sous-total</span>
            <span>{eur(subtotal)}</span>
          </div>
          <p role="status">{asked ? "Boutique de démonstration : le paiement n'est pas branché." : "Frais de livraison calculés à l'étape suivante."}</p>
          <button className="btn block" disabled={lines.length === 0} onClick={() => setAsked(true)}>
            Passer commande
          </button>
        </div>
      </aside>
    </div>
  );
}

export type ProductHead = {
  id: string;
  name: string;
  price: number;
  was?: number;
  rating: number;
  count: number;
  photo: PhotoKey;
  badge?: string;
  blurb: string;
  variantLabel: string;
  variants: string[];
};

/** Galerie, choix de variante, quantité, ajout au panier et onglets de la fiche produit. */
export function ProductView({
  p,
  photos,
  thumbs,
  panels,
}: {
  p: ProductHead;
  photos: ReactNode[];
  thumbs: ReactNode[];
  panels: { description: ReactNode; details: ReactNode; reviews: ReactNode };
}) {
  const { add } = useShop();
  const [shot, setShot] = useState(0);
  const [variant, setVariant] = useState(p.variants[0]);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"description" | "details" | "reviews">("description");
  const tabs = [
    { id: "description", label: "Description" },
    { id: "details", label: "Détails" },
    { id: "reviews", label: `Avis (${p.count})` },
  ] as const;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKey = (e: KeyboardEvent, i: number) => {
    const move = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!move) return;
    e.preventDefault();
    const j = (i + move + tabs.length) % tabs.length;
    setTab(tabs[j].id);
    tabRefs.current[j]?.focus();
  };

  return (
    <>
      <div className="pdp wrap">
        <div className="gallery">
          <div className="gallery-main">
            {photos.map((ph, i) => (
              <div className="gm" key={i} data-on={i === shot} aria-hidden={i !== shot}>
                {ph}
              </div>
            ))}
          </div>
          <div className="thumbs">
            {thumbs.map((t, i) => (
              <button key={i} className="thumb" aria-current={i === shot} aria-label={`Voir la photo ${i + 1} sur ${thumbs.length}`} onClick={() => setShot(i)}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="buy">
          {p.badge && <span className="card-cat">{p.badge}</span>}
          <h1>{p.name}</h1>
          <p className="rating">
            <Stars value={p.rating} /> {note(p.rating)} sur 5, {p.count} avis
          </p>
          <p className="price">
            <b>{eur(p.price)}</b>
            {p.was && <s>{eur(p.was)}</s>}
          </p>
          <p className="blurb">{p.blurb}</p>
          <div className="field">
            <span id="variant-label">{p.variantLabel}</span>
            <div className="opts" role="group" aria-labelledby="variant-label">
              {p.variants.map((v) => (
                <button key={v} className="opt" aria-pressed={variant === v} onClick={() => setVariant(v)}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <span>Quantité</span>
            <Qty value={qty} onChange={(n) => setQty(Math.max(1, Math.min(10, n)))} label="Quantité" />
          </div>
          <div className="buy-row">
            <button className="btn" onClick={() => add({ id: p.id, name: p.name, price: p.price, photo: p.photo, variant: `${p.variantLabel} : ${variant}` }, qty)}>
              Ajouter au panier
            </button>
          </div>
          <ul className="perks">
            <li>Expédié sous 48 heures depuis Lyon</li>
            <li>Livraison offerte dès {freeShippingFrom} €</li>
            <li>Retours acceptés sous 30 jours, sauf café ouvert</li>
          </ul>
        </div>
      </div>
      <div className="ptabs wrap">
        <div className="tabs" role="tablist" aria-label="Informations sur le produit">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`tab-${t.id}`}
              className="tab"
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => setTab(t.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="panel" role="tabpanel" id="panel-description" aria-labelledby="tab-description" hidden={tab !== "description"}>
          {panels.description}
        </div>
        <div className="panel" role="tabpanel" id="panel-details" aria-labelledby="tab-details" hidden={tab !== "details"}>
          {panels.details}
        </div>
        <div className="panel" role="tabpanel" id="panel-reviews" aria-labelledby="tab-reviews" hidden={tab !== "reviews"}>
          {panels.reviews}
        </div>
      </div>
    </>
  );
}

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label className="sr" htmlFor="news-mail">
          Votre adresse e-mail
        </label>
        <input id="news-mail" type="email" required placeholder="Votre adresse e-mail" autoComplete="email" />
        <button className="btn light" type="submit">
          Je m&apos;inscris
        </button>
      </form>
      <p className="msg" role="status">
        {sent ? "Merci, c'est noté. Le premier message arrive à la prochaine torréfaction." : ""}
      </p>
    </div>
  );
}
