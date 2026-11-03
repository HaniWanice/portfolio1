// Catalogue complet de 8 000 références, généré de façon déterministe (même résultat
// à chaque appel, donc même chiffres dans les deux versions). Côté serveur uniquement.
import { cards, products } from "./products";
import { reviewsTotal } from "./site";
import type { CatalogRow, CatId } from "./types";

// Garde-fou : le bandeau affiche une note et un nombre d'avis écrits dans site.ts.
// S'ils ne correspondent plus aux fiches, on préfère casser le build que l'afficher faux.
{
  const count = products.reduce((s, p) => s + p.count, 0);
  const rating = Math.round((products.reduce((s, p) => s + p.rating * p.count, 0) / count) * 10) / 10;
  if (count !== reviewsTotal.count || rating !== reviewsTotal.rating) {
    throw new Error(`site.ts devrait annoncer ${rating}/5 pour ${count} avis`);
  }
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const words: Record<CatId, { kinds: string[]; origins: string[]; sizes: string[]; price: [number, number] }> = {
  cafe: {
    kinds: ["Café en grains", "Café moulu", "Dosette compostable", "Filtre papier", "Moulin manuel", "Cafetière italienne", "Doseur", "Balance de précision"],
    origins: ["Éthiopie", "Colombie", "Brésil", "Kenya", "Guatemala", "Rwanda", "Costa Rica", "Honduras", "Pérou", "Sumatra"],
    sizes: ["250 g", "500 g", "1 kg", "x 50", "x 100", "petit modèle", "grand modèle"],
    price: [4, 70],
  },
  the: {
    kinds: ["Thé vert", "Thé noir", "Oolong", "Thé blanc", "Infusion", "Rooibos", "Matcha", "Théière", "Filtre à thé"],
    origins: ["Japon", "Chine", "Inde", "Taïwan", "Népal", "Géorgie", "Sri Lanka", "Corée", "Vietnam", "Kenya"],
    sizes: ["50 g", "100 g", "250 g", "sachet x 20", "boîte en métal", "300 ml", "800 ml"],
    price: [5, 60],
  },
  ceramique: {
    kinds: ["Tasse", "Mug", "Bol", "Assiette creuse", "Assiette plate", "Théière", "Carafe", "Pot à lait", "Sucrier", "Plat de service"],
    origins: ["grès sable", "grès noir", "porcelaine", "faïence bleue", "terre cuite", "grès moucheté", "émail vert", "émail blanc", "grès rose", "raku"],
    sizes: ["20 cl", "35 cl", "lot de 2", "lot de 4", "petit modèle", "grand modèle", "25 cm"],
    price: [8, 90],
  },
  maison: {
    kinds: ["Bougie", "Torchon", "Serviette de table", "Nappe", "Plateau", "Dessous-de-plat", "Diffuseur", "Tablier", "Panier"],
    origins: ["lin naturel", "lin pêche", "coton lavé", "figuier", "cèdre", "thé noir", "bois de hêtre", "osier", "verre ambré", "cire de soja"],
    sizes: ["120 g", "220 g", "lot de 4", "50 x 70 cm", "140 x 200 cm", "petit modèle", "grand modèle"],
    price: [6, 120],
  },
};
const catIds: CatId[] = ["cafe", "the", "ceramique", "maison"];
const pick = <T,>(r: () => number, a: T[]) => a[Math.floor(r() * a.length)];

function build(n: number): CatalogRow[] {
  const r = mulberry32(2016);
  const rows: CatalogRow[] = [];
  for (let i = 1; i <= n; i++) {
    const cat = catIds[Math.floor(r() * 4)];
    const w = words[cat];
    // Prix tiré vers le bas (r*r) : beaucoup de petits prix, quelques objets chers.
    const price = Math.round((w.price[0] + (w.price[1] - w.price[0]) * r() * r()) * 10) / 10;
    rows.push({
      id: i,
      sku: `BR-${String(i).padStart(5, "0")}`,
      name: `${pick(r, w.kinds)} ${pick(r, w.origins)}, ${pick(r, w.sizes)}`,
      cat,
      price,
      stock: r() < 0.12 ? 0 : Math.floor(r() * 80),
      rating: Math.round((3.6 + r() * 1.4) * 10) / 10,
    });
  }
  // Les 16 produits affichés sont répartis dans le catalogue, à leur ordre d'affichage.
  const step = Math.floor(n / (cards.length + 1));
  cards.forEach((c, k) => {
    const row = rows[step * (k + 1)];
    row.name = c.name;
    row.cat = c.cat;
    row.price = c.price;
    row.rating = c.rating;
    row.stock = 24;
    row.featured = c;
  });
  return rows;
}

let cache: CatalogRow[] | null = null;
export function catalog(): CatalogRow[] {
  return (cache ??= build(8000));
}
