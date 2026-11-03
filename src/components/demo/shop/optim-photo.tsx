// Photos de la version OPTIMISÉE : next/image.
//  - chaque case reçoit un `sizes` qui correspond à sa largeur réelle, donc le navigateur
//    choisit une image de 300 px pour une case de 300 px, en AVIF ou WebP ;
//  - width et height sont connus (import statique) : la place est réservée, rien ne saute ;
//  - flou de remplacement pendant le chargement, sur les cartes produit seulement : le flou de
//    next/image est un filtre SVG que le navigateur recalcule, et sur les grandes images
//    (héros, tuiles, histoire) il coûtait plus de 800 ms de calcul au premier affichage, mesuré
//    dans Chrome sans carte graphique. Là, la couleur de fond de la case sert de remplacement ;
//  - chargement différé partout, sauf l'image la plus grande de la page (`priority`),
//    qui est préchargée.
import Image from "next/image";
import { photoAlt } from "@/lib/demo/site";
import { photos } from "./photos.optim";
import type { Ph } from "./ui";

const sizes = {
  hero: "100vw",
  tile: "(min-width: 1024px) 300px, 50vw",
  card: "(min-width: 1024px) 290px, (min-width: 768px) 33vw, 50vw",
  story: "(min-width: 1024px) 640px, 100vw",
  tip: "(min-width: 1024px) 400px, 100vw",
  gallery: "(min-width: 1024px) 560px, 100vw",
  thumb: "84px",
  line: "72px",
} as const;

export const optimPh: Ph = (key, kind, priority) => {
  const fill = kind === "hero" || kind === "tile" || kind === "gallery" || kind === "thumb";
  return (
    <Image
      src={photos[key]}
      alt={kind === "tile" ? "" : photoAlt[key]}
      sizes={sizes[kind]}
      fill={fill}
      priority={priority}
      placeholder={kind === "card" ? "blur" : undefined}
    />
  );
};
