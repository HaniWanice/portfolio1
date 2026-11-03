// Fige une palette dans le site : node candidature/05-design/apply-palette.mjs <id>
// Réécrit le bloc entre "palette:start" et "palette:end" de src/app/globals.css
// (le CV lit la même palette via cv-data / build.mjs).
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const id = process.argv[2];
const palettes = JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), "palettes.json"), "utf8"));
const p = palettes.find((x) => x.id === id);
if (!p) throw new Error(`Palette inconnue : ${id}. Choix : ${palettes.map((x) => x.id).join(", ")}`);

const block = `  /* palette:start (généré par candidature/05-design/apply-palette.mjs) */
  --bg: ${p.bg};
  --bg-2: ${p.bg2};
  --card: #fbfbfc;
  --ink: ${p.ink};
  --ink-2: ${p.ink};
  --muted: ${p.muted};
  --line: color-mix(in srgb, ${p.ink} 12%, transparent);
  --line-2: color-mix(in srgb, ${p.ink} 28%, transparent);
  --accent: ${p.accent};
  --accent-ink: ${p.accentInk};
  --hl: ${p.hl};
  --block: ${p.block};
  --f1: ${p.f1};
  --f2: ${p.f2};
  --f3: ${p.f3};
  --f4: ${p.f4};
  --dot: ${p.dot};
  /* palette:end */`;

const file = join(root, "src/app/globals.css");
const css = readFileSync(file, "utf8").replace(/ {2}\/\* palette:start[\s\S]*?\/\* palette:end \*\//, block);
writeFileSync(file, css);
console.log(`Palette appliquée : ${p.name}`);
