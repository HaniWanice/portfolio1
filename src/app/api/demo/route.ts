import { reviews, velos } from "@/lib/demo/data";

// API de la version naïve : on simule une base un peu lente (latence fixe,
// pas de cache), comme un back-end appelé depuis le navigateur à chaque visite.
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const what = url.searchParams.get("what");
  await new Promise((r) => setTimeout(r, what === "reviews" ? 450 : 700));
  const body = what === "reviews" ? reviews : velos;
  return Response.json(body, { headers: { "Cache-Control": "no-store" } });
}
