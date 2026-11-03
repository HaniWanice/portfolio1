/* eslint-disable @next/next/no-img-element -- c'est précisément ce que cette version montre */
// Photos de la version NAÏVE : la balise <img> la plus simple possible.
//  - l'original de 2000 px ou plus, pour des cases de 300 px (ou de 72 px dans le panier) ;
//  - ni width ni height : le navigateur ne sait pas quelle place réserver, la page saute ;
//  - ni loading="lazy" ni decoding : tout se télécharge d'emblée, y compris sous le pli ;
//  - pas de srcset, pas de format moderne.
import { photoAlt } from "@/lib/demo/site";
import type { Ph } from "./ui";

export const naivePh: Ph = (key, kind) => <img src={`/demo/shop/${key}.jpg`} alt={kind === "tile" ? "" : photoAlt[key]} />;
