// Le calcul de la ligne « N références, prix médian » à partir du catalogue complet.
// Rien d'exotique : c'est ce que fait une boutique qui reçoit tout son catalogue et
// agrège elle-même. Pur et sans import, pour que la version naïve puisse l'embarquer
// sans embarquer les données.
import type { CatalogRow, CatalogStats, CatId } from "./types";

const collator = (a: string, b: string) => a.localeCompare(b, "fr", { sensitivity: "base" });

export function catalogStats(rows: CatalogRow[]): CatalogStats {
  // 1. Écarter les références épuisées et dédoublonner par nom normalisé
  //    (sans accents ni casse) et prix, comme le ferait un import de fournisseur.
  const seen = new Set<string>();
  const live: CatalogRow[] = [];
  for (const r of rows) {
    if (r.stock <= 0) continue;
    const key = `${r.name.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim()}|${r.price}`;
    if (seen.has(key)) continue;
    seen.add(key);
    live.push(r);
  }

  // 2. Trier par prix, puis par nom pour départager les ex æquo.
  live.sort((a, b) => a.price - b.price || collator(a.name, b.name));

  // 3. Médiane et comptage par catégorie.
  const mid = live.length >> 1;
  const median = live.length % 2 ? live[mid].price : (live[mid - 1].price + live[mid].price) / 2;
  const byCat: Record<CatId, number> = { cafe: 0, the: 0, ceramique: 0, maison: 0 };
  for (const r of live) byCat[r.cat]++;

  return { inStock: live.length, median: Math.round(median * 100) / 100, total: rows.length, byCat };
}
