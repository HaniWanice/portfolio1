import { catalog } from "@/lib/demo/catalog";
import { homeReviews, productById, relatedTo, reviewsFor, tips } from "@/lib/demo/products";

// API de la version naïve : aucune latence ajoutée. Elle répond aussi vite que le
// serveur le permet ; ce qui coûte, c'est d'attendre le JavaScript pour l'appeler,
// d'enchaîner les requêtes l'une après l'autre, et de recevoir tout le catalogue
// (8 000 lignes) pour n'en afficher que 16.
export const dynamic = "force-dynamic";

const headers = { "Cache-Control": "no-store" };

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams;
  const what = q.get("what");
  const id = q.get("id");
  switch (what) {
    case "catalog":
      return Response.json(catalog(), { headers });
    case "reviews":
      return Response.json(id ? reviewsFor(id) : homeReviews(), { headers });
    case "tips":
      return Response.json(tips, { headers });
    case "product": {
      const p = id ? productById(id) : undefined;
      return p ? Response.json(p, { headers }) : Response.json({ error: "introuvable" }, { status: 404, headers });
    }
    case "related":
      return Response.json(id ? relatedTo(id) : [], { headers });
    default:
      return Response.json({ error: "paramètre what inconnu" }, { status: 400, headers });
  }
}
