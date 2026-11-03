// Gabarit HTML du CV (A4, une page). Les chemins d'assets sont relatifs au
// dossier 01-cv/ où le fichier HTML final est écrit.

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const link = (url, label = url) =>
  `<a href="https://${url}">${esc(label)}</a>`;

export function renderCV(v, c) {
  const exp = v.experiences
    .map(
      (e) => `
    <article class="item">
      <header>
        <h3>${esc(e.role)}</h3>
        <p class="when">${esc(e.when)}${e.length ? ` <span>(${esc(e.length)})</span>` : ""}</p>
      </header>
      <p class="org">${esc(e.org)}</p>
      ${e.lead ? `<p class="lead">${esc(e.lead)}</p>` : ""}
      <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <p class="stack">${esc(e.stack)}</p>
    </article>`,
    )
    .join("");

  const projets = v.projets
    .map(
      (p) => `
    <article class="proj">
      <header>
        <h3>${esc(p.name)}</h3>
        <p class="when">${esc(p.when)}</p>
      </header>
      <p>${esc(p.text)}${p.url ? ` <span class="url">${link(p.url, "→ " + p.url)}</span>` : ""}</p>
    </article>`,
    )
    .join("");

  const formation = v.formation
    .map(
      (f) => `
    <div class="side-item">
      <h3>${esc(f.title)}</h3>
      <p class="meta">${esc(f.org)}<br>${esc(f.when)}</p>
      <p>${esc(f.detail)}</p>
    </div>`,
    )
    .join("");

  const comp = v.competences
    .map((k) => `<div class="kv"><dt>${esc(k.label)}</dt><dd>${esc(k.items)}</dd></div>`)
    .join("");

  const methode = v.methode
    ? `<section class="methode">
        <h2>${esc(v.methode.title)}</h2>
        ${v.methode.text.map((t) => `<p>${esc(t)}</p>`).join("")}
      </section>`
    : "";

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Hani Wanice, CV</title>
<meta name="author" content="Hani Wanice">
<style>
@font-face{font-family:"Gambarino";src:url(../_assets/fonts/gambarino.woff2) format("woff2");font-display:block}
@font-face{font-family:"General";src:url(../_assets/fonts/general-400.woff2) format("woff2");font-weight:400}
@font-face{font-family:"General";src:url(../_assets/fonts/general-500.woff2) format("woff2");font-weight:500}
@font-face{font-family:"General";src:url(../_assets/fonts/general-600.woff2) format("woff2");font-weight:600}
@font-face{font-family:"Mono";src:url(../_assets/fonts/jetbrains-400.woff2) format("woff2")}
@page{size:A4;margin:0}
:root{--ink:#19181d;--muted:#5c5a63;--soft:#8a8790;--line:#e3dfd8;--accent:#b4410f;--tint:#f6efe8}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
body{width:210mm;height:297mm;padding:13mm 13mm 11mm;color:var(--ink);font:400 8.6pt/1.42 "General",system-ui,sans-serif;-webkit-font-smoothing:antialiased;overflow:hidden}
a{color:inherit;text-decoration:none}
/* En-tête */
.top{display:grid;grid-template-columns:1fr 27mm;gap:8mm;align-items:start}
h1{font:400 30pt/1 "Gambarino",Georgia,serif;letter-spacing:-.01em}
.title{margin-top:2.2mm;font-weight:500;font-size:10.4pt}
.search{display:inline-block;margin-top:2.6mm;padding:1mm 2.4mm;background:var(--tint);color:var(--accent);font-weight:600;font-size:8.6pt;border-radius:1.2mm}
.contact{margin-top:3.2mm;display:flex;flex-wrap:wrap;gap:.6mm 4mm;font:400 7.7pt/1.5 "Mono",monospace;color:var(--muted)}
.contact a{border-bottom:.25mm solid var(--line)}
.photo{width:27mm;height:33.75mm;object-fit:cover;border-radius:1.6mm;filter:saturate(.92)}
.accroche{margin-top:5.2mm;padding:3mm 0 3.4mm;border-top:.3mm solid var(--ink);border-bottom:.3mm solid var(--line);font-size:9.6pt;line-height:1.5;}
/* Grille */
.grid{display:grid;grid-template-columns:1fr 56mm;gap:8mm;margin-top:5mm}
h2{font:600 7.2pt/1 "General",sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:2.6mm}
section+section{margin-top:5mm}
.item+.item{margin-top:3.8mm}
.item header,.proj header{display:flex;justify-content:space-between;align-items:baseline;gap:3mm}
h3{font-weight:600;font-size:9.3pt;line-height:1.3}
.org{margin-top:.3mm;font-weight:500;color:var(--muted)}
.when{flex:none;font:400 7.4pt/1.3 "Mono",monospace;color:var(--muted);white-space:nowrap}
.when span{color:var(--soft)}
.lead{margin-top:1.2mm;font-style:normal;color:var(--ink)}
ul{margin-top:1.2mm;list-style:none}
li{position:relative;padding-left:3.4mm;margin-top:.9mm;color:#2c2b31}
li::before{content:"";position:absolute;left:.3mm;top:2.05mm;width:1.5mm;height:.3mm;background:var(--accent)}
.stack{margin-top:1.4mm;font:400 7.2pt/1.4 "Mono",monospace;color:var(--soft)}
.proj+.proj{margin-top:2.6mm}
.proj p{margin-top:.6mm;color:#2c2b31}
.url{white-space:nowrap;font:400 7.2pt "Mono",monospace;color:var(--accent)}
/* Colonne de droite */
aside{border-left:.3mm solid var(--line);padding-left:5mm}
.side-item+.side-item{margin-top:3mm}
.side-item h3{font-size:8.9pt}
.meta{margin:.5mm 0 .8mm;font:400 7.2pt/1.45 "Mono",monospace;color:var(--muted)}
.side-item p:last-child{color:#2c2b31}
dl .kv+.kv{margin-top:1.8mm}
dt{font-weight:600;font-size:7.8pt}
dd{color:#2c2b31}
.methode{background:var(--tint);margin-left:-3mm;padding:3mm 3mm 3.2mm;border-radius:1.6mm}
.methode p+p{margin-top:1.4mm}
.methode p{color:#2c2b31}
.interets{list-style:none}
.interets li{padding-left:0;margin-top:.8mm}
.interets li::before{display:none}
.plain{color:#2c2b31}
.foot{position:absolute;left:13mm;right:13mm;bottom:8mm;font:400 6.8pt "Mono",monospace;color:var(--soft);display:flex;justify-content:space-between}
</style>
</head>
<body>
  <header class="top">
    <div>
      <h1>${esc(c.name)}</h1>
      <p class="title">${esc(v.title)}</p>
      <p class="search">${esc(v.search)}</p>
      <p class="contact">
        <span>${esc(c.phone)}</span>
        <a href="mailto:${c.email}">${esc(c.email)}</a>
        ${link(c.site)}
        ${link(c.github)}
        ${link(c.linkedin, "LinkedIn")}
        <span>${esc(c.location)}</span>
      </p>
    </div>
    <img class="photo" src="../_assets/photo-cv.jpg" alt="Photo de Hani Wanice">
  </header>

  <p class="accroche">${esc(v.accroche)}</p>

  <div class="grid">
    <main>
      <section>
        <h2>Expérience</h2>
        ${exp}
      </section>
      <section>
        <h2>Projets</h2>
        ${projets}
      </section>
      ${methode}
    </main>
    <aside>
      <section>
        <h2>Formation</h2>
        ${formation}
      </section>
      <section>
        <h2>Compétences</h2>
        <dl>${comp}</dl>
      </section>
      <section>
        <h2>Langues</h2>
        <p class="plain">${esc(v.langues)}</p>
      </section>
      <section>
        <h2>En dehors</h2>
        <ul class="interets">${v.interets.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </section>
    </aside>
  </div>
</body>
</html>`;
}
