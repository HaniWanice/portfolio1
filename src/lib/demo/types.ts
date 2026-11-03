// Types partagés par les deux versions de la boutique de démonstration (labo perf).

export type CatId = "cafe" | "the" | "ceramique" | "maison";

// Une clé par photo de public/demo/shop/ (le fichier s'appelle <clé>.jpg).
export type PhotoKey =
  | "hero-filtre"
  | "histoire-salle"
  | "cafe-grains-ethiopie"
  | "cafe-tasse-grains"
  | "cafe-filtre-chemex"
  | "cafe-bouilloire"
  | "the-feuilles-vertes"
  | "the-cuilleres"
  | "the-theiere-verre"
  | "the-theiere-terre"
  | "cera-theiere-blanche"
  | "cera-tasses-empilees"
  | "cera-mug-dore"
  | "cera-tasse-grise"
  | "maison-bougie-ambre"
  | "maison-bougie-blanche"
  | "maison-torchon-lin"
  | "maison-lin-empile";

/** Ce qu'il faut pour afficher une carte produit dans une grille. */
export type CardData = {
  id: string;
  name: string;
  cat: CatId;
  price: number;
  was?: number;
  rating: number;
  count: number;
  photo: PhotoKey;
  badge?: string;
};

export type Product = CardData & {
  blurb: string;
  variantLabel: string;
  variants: string[];
  gallery: PhotoKey[];
  description: string[];
  details: [string, string][];
};

export type Review = {
  id: string;
  productId: string;
  author: string;
  city: string;
  date: string;
  rating: number;
  title: string;
  text: string;
  /** renseigné pour les avis affichés sur l'accueil, où l'on ne voit pas la fiche */
  productName?: string;
};

export type Tip = { id: string; title: string; text: string; minutes: number; photo: PhotoKey };

/** Une ligne du catalogue complet (8 000 références). Seules 16 sont affichées sur la page. */
export type CatalogRow = {
  id: number;
  sku: string;
  name: string;
  cat: CatId;
  price: number;
  stock: number;
  rating: number;
  /** renseigné seulement pour les 16 produits mis en avant : l'objet complet à afficher */
  featured?: CardData;
};

export type CatalogStats = {
  inStock: number;
  median: number;
  total: number;
  byCat: Record<CatId, number>;
};
