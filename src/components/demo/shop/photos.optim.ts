// Les photos de la version OPTIMISÉE, importées statiquement : Next.js en tire la largeur,
// la hauteur (donc la place réservée dans la page) et un flou de remplacement de quelques octets.
import type { StaticImageData } from "next/image";
import type { PhotoKey } from "@/lib/demo/types";
import heroFiltre from "../../../../public/demo/shop/hero-filtre.jpg";
import histoireSalle from "../../../../public/demo/shop/histoire-salle.jpg";
import cafeGrainsEthiopie from "../../../../public/demo/shop/cafe-grains-ethiopie.jpg";
import cafeTasseGrains from "../../../../public/demo/shop/cafe-tasse-grains.jpg";
import cafeFiltreChemex from "../../../../public/demo/shop/cafe-filtre-chemex.jpg";
import cafeBouilloire from "../../../../public/demo/shop/cafe-bouilloire.jpg";
import theFeuillesVertes from "../../../../public/demo/shop/the-feuilles-vertes.jpg";
import theCuilleres from "../../../../public/demo/shop/the-cuilleres.jpg";
import theTheiereVerre from "../../../../public/demo/shop/the-theiere-verre.jpg";
import theTheiereTerre from "../../../../public/demo/shop/the-theiere-terre.jpg";
import ceraTheiereBlanche from "../../../../public/demo/shop/cera-theiere-blanche.jpg";
import ceraTassesEmpilees from "../../../../public/demo/shop/cera-tasses-empilees.jpg";
import ceraMugDore from "../../../../public/demo/shop/cera-mug-dore.jpg";
import ceraTasseGrise from "../../../../public/demo/shop/cera-tasse-grise.jpg";
import maisonBougieAmbre from "../../../../public/demo/shop/maison-bougie-ambre.jpg";
import maisonBougieBlanche from "../../../../public/demo/shop/maison-bougie-blanche.jpg";
import maisonTorchonLin from "../../../../public/demo/shop/maison-torchon-lin.jpg";
import maisonLinEmpile from "../../../../public/demo/shop/maison-lin-empile.jpg";

export const photos: Record<PhotoKey, StaticImageData> = {
  "hero-filtre": heroFiltre,
  "histoire-salle": histoireSalle,
  "cafe-grains-ethiopie": cafeGrainsEthiopie,
  "cafe-tasse-grains": cafeTasseGrains,
  "cafe-filtre-chemex": cafeFiltreChemex,
  "cafe-bouilloire": cafeBouilloire,
  "the-feuilles-vertes": theFeuillesVertes,
  "the-cuilleres": theCuilleres,
  "the-theiere-verre": theTheiereVerre,
  "the-theiere-terre": theTheiereTerre,
  "cera-theiere-blanche": ceraTheiereBlanche,
  "cera-tasses-empilees": ceraTassesEmpilees,
  "cera-mug-dore": ceraMugDore,
  "cera-tasse-grise": ceraTasseGrise,
  "maison-bougie-ambre": maisonBougieAmbre,
  "maison-bougie-blanche": maisonBougieBlanche,
  "maison-torchon-lin": maisonTorchonLin,
  "maison-lin-empile": maisonLinEmpile,
};
