// Données partagées par les deux versions de la page de démo (labo perf).
export type Velo = { id: string; name: string; tag: string; price: number; img: string; text: string };

export const hero = {
  title: "Des vélos révisés, prêts à rouler",
  text: "Chaque vélo passe 3 heures à l'atelier avant d'être remis en vente. Garantie 12 mois, retrait à Montreuil.",
  img: "/demo/velos/hero.jpg",
};

export const velos: Velo[] = [
  { id: "ville", name: "Le Quotidien", tag: "Ville", price: 349, img: "/demo/velos/ville.jpg", text: "Garde-boue, éclairage, porte-bagages. Pour aller au travail sans y penser." },
  { id: "route", name: "Le Rapide", tag: "Route", price: 590, img: "/demo/velos/route.jpg", text: "Cadre alu, 16 vitesses, 9,8 kg. Pour les dimanches qui commencent tôt." },
  { id: "gravel", name: "Le Chemin", tag: "Gravel", price: 720, img: "/demo/velos/gravel.jpg", text: "Pneus 40 mm et freins à disque. La route, puis ce qui vient après." },
  { id: "cargo", name: "Le Porteur", tag: "Cargo", price: 1190, img: "/demo/velos/cargo.jpg", text: "Caisse avant, béquille large. Les courses de la semaine, ou deux enfants." },
  { id: "pliant", name: "Le Discret", tag: "Pliant", price: 410, img: "/demo/velos/pliant.jpg", text: "Se plie en 15 secondes, passe sous un bureau ou dans le RER." },
  { id: "enfant", name: "Le Premier", tag: "Enfant", price: 160, img: "/demo/velos/enfant.jpg", text: "Roues de 20 pouces, cadre bas. Pour apprendre sans les petites roues." },
];

export const reviews = [
  { who: "Sarah, Vincennes", text: "Révisé comme annoncé, et ils m'ont montré comment régler les freins." },
  { who: "Malik, Pantin", text: "Le pliant tient dans mon placard. Aucun bruit après 400 km." },
  { who: "Jeanne, Paris 20e", text: "Accueil patient, prix honnête, garantie qui sert vraiment." },
];

// Un calcul volontairement coûteux : un catalogue de 120 000 lignes de prix
// à agréger. La version naïve le fait dans le navigateur à chaque visite ;
// la version optimisée le fait une seule fois, au moment du build.
export function heavyStats() {
  let seed = 42;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const rows = Array.from({ length: 120_000 }, (_, i) => ({ id: i, price: 80 + rnd() * 1400, cat: i % 6 }));
  rows.sort((a, b) => a.price - b.price);
  const median = rows[rows.length >> 1].price;
  const byCat = new Map<number, number[]>();
  for (const r of rows) (byCat.get(r.cat) ?? byCat.set(r.cat, []).get(r.cat)!).push(r.price);
  const avg = [...byCat.values()].map((v) => v.reduce((s, x) => s + x, 0) / v.length);
  return { count: rows.length, median: Math.round(median), cheapest: Math.round(Math.min(...avg)) };
}
