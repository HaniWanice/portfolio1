import Image from "next/image";
import { hero, heavyStats, reviews, velos } from "@/lib/demo/data";
import { ReadyMark } from "@/components/demo/ReadyMark";
import heroImg from "../../../../../public/demo/velos/hero.jpg";
import ville from "../../../../../public/demo/velos/ville.jpg";
import route from "../../../../../public/demo/velos/route.jpg";
import gravel from "../../../../../public/demo/velos/gravel.jpg";
import cargo from "../../../../../public/demo/velos/cargo.jpg";
import pliant from "../../../../../public/demo/velos/pliant.jpg";
import enfant from "../../../../../public/demo/velos/enfant.jpg";

// VERSION OPTIMISÉE. Même données, mêmes images sources, même CSS.
// (1) Composant serveur : le HTML arrive complet, rendu une fois au build ;
// (2) les données sont lues côté serveur, pas de cascade de requêtes ;
// (3) next/image : la bonne taille pour chaque écran, en AVIF/WebP, dimensions
//     connues (aucun décalage), chargement différé sous la ligne de flottaison ;
// (4) le calcul lourd est fait une seule fois, au build.
export const dynamic = "force-static";

const imgs = { ville, route, gravel, cargo, pliant, enfant };
const stats = heavyStats();

export default function Optim() {
  return (
    <div className="d-wrap">
      <div className="d-top">
        Atelier Roue Libre <span>version optimisée</span>
      </div>
      <section className="d-hero">
        <h1>{hero.title}</h1>
        <p>{hero.text}</p>
        <div className="d-hero-img">
          <Image src={heroImg} alt="" priority sizes="(min-width: 1040px) 1000px, 100vw" placeholder="blur" quality={85} />
        </div>
      </section>
      <p className="d-stats">
        {stats.count.toLocaleString("fr-FR")} vélos analysés · prix médian {stats.median} €
      </p>
      <div className="d-grid">
        {velos.map((v) => (
          <article className="d-card" key={v.id}>
            <Image src={imgs[v.id as keyof typeof imgs]} alt={v.name} sizes="(min-width: 1040px) 250px, (min-width: 500px) 45vw, 100vw" placeholder="blur" quality={85} />
            <div>
              <span className="tag">{v.tag}</span>
              <h2>{v.name}</h2>
              <p>{v.text}</p>
              <b>{v.price} €</b>
            </div>
          </article>
        ))}
      </div>
      <div className="d-reviews">
        {reviews.map((r) => (
          <blockquote key={r.who}>
            {r.text}
            <cite>{r.who}</cite>
          </blockquote>
        ))}
      </div>
      <ReadyMark />
    </div>
  );
}
