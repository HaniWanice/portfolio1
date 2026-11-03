// Génère candidature/05-design/choix-couleurs.html : pour chaque palette, des captures du vrai site
// (serveur de dev sur le port 3101) et du CV, en une page autonome.
// Usage : node candidature/scripts/palette-preview.mjs
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { variants, contact } from "../01-cv/cv-data.mjs";
import { renderCV } from "../01-cv/cv-template.mjs";
import { paletteCss } from "../05-design/palette-css.mjs";

const { chromium } = createRequire(import.meta.url)("playwright");
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const palettes = JSON.parse(readFileSync(join(root, "05-design/palettes.json"), "utf8"));
const BASE = process.env.SITE || "http://localhost:3101";
const b64 = (buf) => "data:image/jpeg;base64," + buf.toString("base64");

const browser = await chromium.launch();
const sections = [];

for (const p of palettes) {
  const shots = {};
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.addStyleTag({ content: paletteCss(p) + "nextjs-portal{display:none!important}" });
  await page.waitForTimeout(2800);
  const snap = async (name, y, wait = 900, q = 78) => {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(wait);
    shots[name] = b64(await page.screenshot({ type: "jpeg", quality: q }));
  };
  await snap("Premier écran", 0, 300, 82);
  const st = await page.evaluate(() => { const e = document.querySelector(".statement"); return e.offsetTop + 0.84 * (e.offsetHeight - innerHeight); });
  await snap("La phrase", st);
  for (const [name, sel] of [["Pont GLPI", "#t-glpi"], ["Todo Smart", "#t-todo"], ["Labo", "#t-labo"]]) {
    const y = await page.evaluate((sel) => { const e = document.querySelector(sel).closest("section"); return e.offsetTop; }, sel);
    await snap(name, y, 1700);
  }
  const bottom = await page.evaluate(() => document.documentElement.scrollHeight);
  await snap("Contact", bottom, 900);
  await page.close();

  // CV
  const cvPage = await browser.newPage({ viewport: { width: 794, height: 1123 } });
  const v = { ...variants.methode };
  // le gabarit référence ../_assets : on l'écrit dans 01-cv pour garder les chemins
  const tmp = join(root, "01-cv", `_preview-${p.id}.html`);
  writeFileSync(tmp, renderCV(v, contact, p));
  await cvPage.goto("file://" + tmp, { waitUntil: "networkidle" });
  await cvPage.evaluate(() => document.fonts.ready);
  shots["CV"] = b64(await cvPage.screenshot({ type: "jpeg", quality: 84 }));
  await cvPage.close();
  sections.push({ p, shots });
  console.log("ok", p.id);
}
await browser.close();

const swatch = (c) => `<i style="background:${c}" title="${c}"></i>`;
const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cinq directions de couleurs</title>
<style>
:root{--ink:#17161d;--mute:#666373;--bg:#f4f3f6;--card:#fff;--line:#dcdae3}
@media (prefers-color-scheme:dark){:root{--ink:#f3f2f7;--mute:#a7a4b5;--bg:#111015;--card:#19181f;--line:#2a2833}}
*{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--ink);font:400 16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
.wrap{max-width:1240px;margin:0 auto;padding:40px 16px 96px}
h1{font-size:clamp(28px,5vw,46px);line-height:1.05;letter-spacing:-.025em;text-wrap:balance}
.lead{margin-top:12px;max-width:64ch;color:var(--mute);text-wrap:pretty}
nav{display:flex;flex-wrap:wrap;gap:8px;margin:24px 0 0}
nav a{padding:8px 14px;border-radius:99px;background:var(--card);box-shadow:inset 0 0 0 1px var(--line);color:inherit;text-decoration:none;font-size:14px;font-weight:600}
nav a:hover{box-shadow:inset 0 0 0 2px var(--ink)}
section{margin-top:72px;scroll-margin-top:24px}
.head{display:flex;flex-wrap:wrap;gap:12px 24px;align-items:end;justify-content:space-between}
.head h2{font-size:clamp(24px,3.4vw,36px);letter-spacing:-.025em;line-height:1.05}
.head h2 b{color:var(--mute);font-weight:600;margin-right:10px}
.head p{color:var(--mute);margin-top:4px}
.sw{display:flex;gap:6px}
.sw i{display:block;width:44px;height:44px;border-radius:12px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12)}
.grid{display:grid;gap:14px;margin-top:20px;grid-template-columns:repeat(6,1fr)}
figure{margin:0;border-radius:12px;overflow:hidden;background:var(--card);box-shadow:0 0 0 1px var(--line)}
figure img{display:block;width:100%;height:auto}
figcaption{padding:8px 12px;font-size:13px;color:var(--mute)}
.hero{grid-column:span 4}.cv{grid-column:span 2;grid-row:span 2}.s{grid-column:span 2}
@media(max-width:820px){.grid{grid-template-columns:1fr 1fr}.hero,.cv,.s{grid-column:span 2}.cv{grid-row:auto}}
</style></head><body><main class="wrap">
<h1>Cinq directions de couleurs, sur le vrai site et sur le CV</h1>
<p class="lead">Toutes sont claires et pastel, légèrement saturées. Chaque capture est le vrai site avec la palette appliquée, pas une maquette. Le CV est la mise en page n°2, photo en carré arrondi. Dis-moi laquelle (ou quelles couleurs de laquelle) tu prends.</p>
<nav>${sections.map((s, i) => `<a href="#p${i + 1}">${i + 1}. ${s.p.name}</a>`).join("")}</nav>
${sections.map((s, i) => `<section id="p${i + 1}"><div class="head"><div><h2><b>${i + 1}</b>${s.p.name}</h2><p>${s.p.mood}</p></div><div class="sw">${[s.p.bg, s.p.f1, s.p.f2, s.p.f3, s.p.f4, s.p.accent, s.p.ink].map(swatch).join("")}</div></div>
<div class="grid">
<figure class="hero"><img alt="Premier écran" src="${s.shots["Premier écran"]}"><figcaption>Premier écran</figcaption></figure>
<figure class="cv"><img alt="CV" src="${s.shots["CV"]}"><figcaption>CV</figcaption></figure>
${["La phrase", "Pont GLPI", "Todo Smart", "Labo", "Contact"].map((k) => `<figure class="s"><img alt="${k}" loading="lazy" src="${s.shots[k]}"><figcaption>${k}</figcaption></figure>`).join("")}
</div></section>`).join("")}
</main></body></html>`;
writeFileSync(join(root, "05-design", "choix-couleurs.html"), html);
console.log("écrit", join(root, "05-design", "choix-couleurs.html"));
