// Génère les CV et les lettres : HTML -> PDF (A4) + aperçu PNG.
// Usage : node candidature/scripts/build.mjs [cv|lettres]   (défaut : tout)
import { createRequire } from "node:module";
import { writeFile, mkdir, readdir, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { variants, contact } from "../01-cv/cv-data.mjs";
import { renderCV } from "../01-cv/cv-template.mjs";
import { readFileSync } from "node:fs";
import { renderLetter, parseLetter } from "../02-lettres/letter-template.mjs";

// Playwright est installé globalement dans l'environnement : on le charge via require.
const { chromium } = createRequire(import.meta.url)("playwright");
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const only = process.argv[2];
// Palette du CV : candidature/05-design/palettes.json (CV_PALETTE=<id> pour en essayer une autre).
const palettes = JSON.parse(readFileSync(join(root, "05-design", "palettes.json"), "utf8"));
const palette = palettes.find((x) => x.id === (process.env.CV_PALETTE || "corail")) || palettes[0];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });

async function toPdf(htmlPath, base) {
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const overflow = await page.evaluate(() => {
    const b = document.body;
    return b.scrollHeight - b.clientHeight;
  });
  await page.pdf({ path: base + ".pdf", format: "A4", printBackground: true, preferCSSPageSize: true });
  await page.screenshot({ path: base + ".png", fullPage: false });
  return overflow;
}

if (!only || only === "cv") {
  for (const v of Object.values(variants)) {
    const html = join(root, "01-cv", v.file + ".html");
    await writeFile(html, renderCV(v, contact, palette));
    const overflow = await toPdf(html, join(root, "01-cv", v.file));
    console.log(`CV  ${v.file}.pdf${overflow > 0 ? `  ⚠ déborde de ${overflow}px` : "  ok (1 page)"}`);
  }
}

if (!only || only === "lettres") {
  const dir = join(root, "02-lettres");
  await mkdir(join(dir, "pdf"), { recursive: true });
  for (const f of (await readdir(dir)).filter((f) => /^\d\d-.*\.md$/.test(f)).sort()) {
    const letter = parseLetter(await readFile(join(dir, f), "utf8"));
    if (letter.format !== "lettre") continue;
    const name = f.replace(/\.md$/, "");
    const html = join(dir, "pdf", name + ".html");
    await writeFile(html, renderLetter(letter, contact));
    const overflow = await toPdf(html, join(dir, "pdf", name));
    console.log(`LM  ${name}.pdf${overflow > 0 ? `  ⚠ déborde de ${overflow}px` : "  ok (1 page)"}`);
  }
}

await browser.close();
