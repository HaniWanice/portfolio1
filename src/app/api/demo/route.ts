import { reviews, velos } from "@/lib/demo/data";

// API de la version naïve : aucune latence ajoutée. Elle répond aussi vite que le
// serveur le permet ; ce qui coûte, c'est d'attendre le JavaScript pour l'appeler,
// puis d'enchaîner deux appels l'un après l'autre.
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const what = new URL(req.url).searchParams.get("what");
  const body = what === "reviews" ? reviews : velos;
  return Response.json(body, { headers: { "Cache-Control": "no-store" } });
}
