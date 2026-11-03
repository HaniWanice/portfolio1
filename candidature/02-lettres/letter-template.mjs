// Lettres : fichiers Markdown très simples avec un en-tête clé: valeur.
//
// ---
// format: lettre            (ou "message" pour un mail / DM, pas de PDF)
// cible: Startup produit
// destinataire: Madame, Monsieur,
// objet: Candidature, stage développeur web (avril 2027)
// ---
// Paragraphes séparés par une ligne vide. [Crochets] = à personnaliser.

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function parseLetter(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error("En-tête manquant");
  const meta = Object.fromEntries(
    m[1].split("\n").map((l) => {
      const i = l.indexOf(":");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
  );
  // Le corps s'arrête à la ligne "<!-- notes -->" : ce qui suit est pour Hani, pas pour le recruteur.
  const body = m[2].split("<!-- notes -->")[0].trim();
  return { ...meta, paragraphs: body.split(/\n\s*\n/).map((p) => p.replace(/\n/g, " ").trim()) };
}

const mark = (s) =>
  esc(s).replace(/\[([^\]]+)\]/g, '<mark>[$1]</mark>');

export function renderLetter(l, c) {
  const paras = l.paragraphs.map((p) => `<p>${mark(p)}</p>`).join("\n");
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>Lettre, Hani Wanice</title>
<style>
@font-face{font-family:"Gambarino";src:url(../../_assets/fonts/gambarino.woff2) format("woff2")}
@font-face{font-family:"General";src:url(../../_assets/fonts/general-400.woff2) format("woff2");font-weight:400}
@font-face{font-family:"General";src:url(../../_assets/fonts/general-600.woff2) format("woff2");font-weight:600}
@font-face{font-family:"Mono";src:url(../../_assets/fonts/jetbrains-400.woff2) format("woff2")}
@page{size:A4;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
body{width:210mm;height:297mm;padding:20mm 22mm 16mm;color:#19181d;font:400 10.2pt/1.6 "General",system-ui,sans-serif;overflow:hidden}
.head{display:flex;justify-content:space-between;align-items:flex-end;padding-bottom:5mm;border-bottom:.3mm solid #19181d}
.name{font:400 22pt/1 "Gambarino",Georgia,serif}
.coords{text-align:right;font:400 7.8pt/1.6 "Mono",monospace;color:#5c5a63}
.dest{margin-top:9mm;display:flex;justify-content:space-between;font-size:9.4pt;color:#5c5a63}
.objet{margin-top:8mm;font-weight:600}
.salut{margin-top:6mm}
.body p{margin-top:3.4mm;text-align:left;hyphens:manual}
.sign{margin-top:7mm}
.sign strong{display:block;margin-top:1mm;font:400 15pt "Gambarino",Georgia,serif;font-weight:400}
mark{background:#fbe7c9;color:inherit;padding:0 .6mm;border-radius:.6mm}
</style></head>
<body>
<div class="head">
  <div class="name">${esc(c.name)}</div>
  <div class="coords">${esc(c.phone)}<br>${esc(c.email)}<br>${esc(c.site)}</div>
</div>
<div class="dest"><span>${mark(l.entreprise || "[Entreprise]")}</span><span>${mark(l.date || "Le [date]")}</span></div>
<p class="objet">Objet : ${mark(l.objet)}</p>
<p class="salut">${mark(l.destinataire || "Madame, Monsieur,")}</p>
<div class="body">
${paras}
</div>
<div class="sign">${mark(l.signature || "Bien à vous,")}<strong>Hani Wanice</strong></div>
</body></html>`;
}
