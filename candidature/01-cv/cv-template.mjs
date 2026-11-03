// Gabarit du CV : mise en page n°2 (barre latérale pastel + récit à droite), A4, une page.
// Chaque partie est un bloc au fond très légèrement contrasté, avec un bord fin.
// Hiérarchie du texte par nuances d'encre : titres très noirs, secondaires en gris lisible.

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const link = (url, label = url) => `<a href="https://${url}">${esc(label)}</a>`;
const chips = (arr, cls = "chip") => arr.map((t) => `<span class="${cls}">${esc(t)}</span>`).join("");
const dots = (n) => Array.from({ length: 5 }, (_, i) => `<i class="${i < n ? "on" : ""}"></i>`).join("");

const arrow = `<svg viewBox="0 0 24 12" aria-hidden="true"><path d="M2 4h19m0 0-3-3m3 3-3 3M22 8H3m0 0 3-3M3 8l3 3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function renderCV(v, c, p) {
  const exp = v.experiences
    .map(
      (e) => `
      <article class="item">
        <header><h3>${esc(e.role)}</h3><span class="when">${esc(e.when)}</span></header>
        <p class="org">${esc(e.org)}</p>
        ${e.context ? `<p class="context">${esc(e.context)}</p>` : ""}
        ${
          e.schema
            ? `<div class="schema">${e.schema.map((n, i) => `<span class="node">${esc(n)}</span>${i < e.schema.length - 1 ? `<span class="arr">${arrow}</span>` : ""}`).join("")}</div>`
            : ""
        }
        <ul class="bullets">${e.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="tags">${chips(e.tags, "tag")}</div>
      </article>`,
    )
    .join("");

  const projets = v.projets
    .map((x) => {
      const graph = x.scores
        ? `<div class="bars" aria-label="${esc(x.scores.label)} : ${x.scores.before} puis ${x.scores.after}">
            <div class="bar"><span>Version naïve</span><b style="width:${x.scores.before}%"></b><em>${x.scores.before}</em></div>
            <div class="bar after"><span>Version optimisée</span><b style="width:${x.scores.after}%"></b><em>${x.scores.after}</em></div>
            <small>${esc(x.scores.label)}</small>
          </div>`
        : "";
      return `<div class="proj"><div class="proj-head"><h3>${esc(x.name)}</h3>${x.url ? `<span class="url">${link(x.url)}</span>` : ""}</div><p>${esc(x.text)}</p>${graph}</div>`;
    })
    .join("");

  const formation = v.formation
    .map(
      (f, i) => `
      <div class="form${i === 0 ? " main-degree" : ""}">
        <header><h3>${esc(f.title)}</h3><span class="when">${esc(f.when)}</span></header>
        <p class="org">${esc(f.org)}</p>
        ${f.tags.length ? `<div class="tags">${chips(f.tags, "tag")}</div>` : ""}
      </div>`,
    )
    .join("");

  const comp = v.competences
    .map((k) => `<div class="group"><p class="glabel">${esc(k.label)}</p><div class="chips">${chips(k.items)}</div></div>`)
    .join("");

  const langues = v.langues
    .map((l) => `<div class="lang"><span class="lname">${esc(l.name)}</span><span class="dots">${dots(l.dots)}</span><span class="llevel">${esc(l.level)}</span></div>`)
    .join("");

  const methode = v.methode
    ? `<section class="card">
        <h2>${esc(v.methode.title)}</h2>
        <ul class="bullets">${v.methode.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </section>`
    : "";

  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Hani Wanice, CV</title>
<meta name="author" content="Hani Wanice">
<style>
@font-face{font-family:"Bricolage";src:url(../_assets/fonts/bricolage.woff2) format("woff2");font-weight:200 800;font-stretch:75% 100%;font-display:block}
@page{size:A4;margin:0}
:root{
  --ink:#16110f;
  --accent:${p.accent};
  --hl:${p.hl};
  --side:${p.cvSide || p.f1};
  /* Nuances d'encre : 1 titres, 2 texte, 3 secondaire, 4 métadonnées. Toutes restent lisibles. */
  --t1:#16110f;
  --t2:#3b3433;
  --t3:#5c5452;
  --t4:#6d6563;
  --edge:rgba(22,17,15,.13);
  --card:#faf7f5;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
body{position:relative;width:210mm;height:297mm;overflow:hidden;color:var(--t2);font:400 8.2pt/1.4 "Bricolage",system-ui,sans-serif;font-variation-settings:"wdth" 100;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
h2{font:700 6.9pt/1 "Bricolage";letter-spacing:.11em;text-transform:uppercase;color:var(--t1);margin-bottom:2.2mm}
h3{font-weight:700;font-size:8.8pt;line-height:1.25;letter-spacing:-.01em;color:var(--t1)}
header{display:flex;justify-content:space-between;align-items:baseline;gap:2mm}
.when{flex:none;font-size:7.3pt;color:var(--t4);white-space:nowrap}
.org{margin-top:.3mm;font-weight:600;color:var(--t3)}

/* Barre latérale */
.side{position:absolute;left:0;top:0;bottom:0;width:66mm;background:var(--side);padding:9mm 6.5mm 8mm}
.photo{display:block;width:40mm;height:50mm;border-radius:4mm;object-fit:cover;object-position:50% 30%;border:.3mm solid var(--edge)}
.side .card{margin-top:3mm;padding:2.8mm 3mm 3mm;border-radius:3mm;background:rgba(255,255,255,.55);border:.25mm solid var(--edge)}
.contact{list-style:none;display:grid;gap:.9mm;color:var(--t2)}
.contact li{overflow-wrap:anywhere}
.group+.group{margin-top:2mm}
.glabel{font-weight:700;font-size:7.4pt;color:var(--t1);margin-bottom:1mm}
.chips{display:flex;flex-wrap:wrap;gap:1mm}
.chip{padding:.5mm 1.8mm;border-radius:1.6mm;background:#fff;border:.25mm solid var(--edge);font-size:7.3pt;color:var(--t2)}
.lang{display:grid;grid-template-columns:15mm auto 1fr;align-items:center;gap:2mm}
.lang+.lang{margin-top:1.3mm}
.lname{font-weight:600;color:var(--t1)}
.llevel{font-size:7.2pt;color:var(--t3)}
.dots{display:flex;gap:.8mm}
.dots i{width:1.8mm;height:1.8mm;border-radius:50%;background:rgba(22,17,15,.15)}
.dots i.on{background:var(--accent)}
.plain{list-style:none;display:grid;gap:.7mm;color:var(--t2)}

/* Colonne principale */
main{position:absolute;left:66mm;right:0;top:0;bottom:0;padding:9mm 9mm 8mm 8mm}
h1{font:700 30pt/.92 "Bricolage";letter-spacing:-.045em;font-variation-settings:"wdth" 88;color:var(--t1)}
.title{margin-top:2.6mm;font-weight:700;font-size:10.6pt;color:var(--t1);letter-spacing:-.01em}
.school{margin-top:.6mm;font-size:8.4pt;color:var(--t3);font-weight:500}
.search{display:inline-block;margin-top:2.4mm;padding:.9mm 2.8mm;border-radius:2.2mm;background:var(--hl);font-weight:600;font-size:8.2pt;color:var(--t1)}
main .card{margin-top:2.6mm;padding:2.7mm 3.4mm 2.9mm;border-radius:3mm;background:var(--card);border:.25mm solid var(--edge)}
.atouts{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:1.4mm 4mm}
.atouts li{position:relative;padding-left:3mm;color:var(--t3)}
.atouts li::before{content:"";position:absolute;left:0;top:1.6mm;width:1.4mm;height:1.4mm;border-radius:50%;background:var(--accent)}
.atouts b{display:block;color:var(--t1);font-weight:700}
.form+.form{margin-top:2.2mm;padding-top:2.2mm;border-top:.25mm solid var(--edge)}
.main-degree h3{font-size:9.6pt}
.tags{display:flex;flex-wrap:wrap;gap:1mm;margin-top:1.4mm}
.tag{padding:.4mm 1.6mm;border-radius:1.4mm;background:#fff;border:.25mm solid var(--edge);font-size:7.1pt;color:var(--t3)}
.item+.item{margin-top:2.6mm;padding-top:2.6mm;border-top:.25mm solid var(--edge)}
.context{margin-top:1mm;color:var(--t2)}
.schema{display:flex;align-items:center;gap:1.2mm;margin-top:1.8mm}
.node{flex:1;text-align:center;padding:1mm 1.2mm;border-radius:1.6mm;background:#fff;border:.3mm solid var(--t1);font-weight:600;font-size:7.3pt;color:var(--t1)}
.arr{flex:none;width:6mm;color:var(--accent)}
.arr svg{display:block;width:100%;height:auto}
.bullets{list-style:none;margin-top:1.6mm;display:grid;gap:.6mm}
.bullets li{position:relative;padding-left:3mm;color:var(--t2)}
.bullets li::before{content:"";position:absolute;left:0;top:1.6mm;width:1.3mm;height:1.3mm;border-radius:50%;background:var(--accent)}
.proj+.proj{margin-top:2mm;padding-top:2mm;border-top:.25mm solid var(--edge)}
.proj-head{display:flex;justify-content:space-between;align-items:baseline;gap:2mm}
.proj p{margin-top:.3mm;color:var(--t3)}
.url{font-size:7.3pt;font-weight:600;color:var(--accent);white-space:nowrap}
.bars{margin-top:1.3mm;display:grid;gap:.7mm}
.bar{display:grid;grid-template-columns:22mm 1fr 7mm;align-items:center;gap:2mm;font-size:7.2pt;color:var(--t3)}
.bar b{display:block;height:2.4mm;border-radius:1.2mm;background:rgba(22,17,15,.22)}
.bar.after b{background:var(--accent)}
.bar em{font-style:normal;font-weight:700;color:var(--t1);text-align:right}
.bars small{font-size:6.9pt;color:var(--t4)}
</style>
</head>
<body>
  <aside class="side">
    ${v.photo ? `<img class="photo" src="../_assets/photo-cv.jpg" alt="Photo de Hani Wanice">` : ""}
    <section class="card">
      <h2>Contact</h2>
      <ul class="contact">
        <li><a href="mailto:${c.email}">${esc(c.email)}</a></li>
        <li>${esc(c.phone)}</li>
        <li>${esc(c.location)}</li>
        <li>${link(c.site)}</li>
        <li>${link(c.github)}</li>
        <li>${link(c.linkedin, "LinkedIn")}</li>
      </ul>
    </section>
    <section class="card">
      <h2>Compétences</h2>
      ${comp}
    </section>
    <section class="card">
      <h2>Langues</h2>
      ${langues}
    </section>
    <section class="card">
      <h2>Savoir-être</h2>
      <div class="chips">${chips(v.savoirEtre)}</div>
    </section>
    <section class="card">
      <h2>En dehors</h2>
      <ul class="plain">${v.interets.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </section>
  </aside>
  <main>
    <h1>${esc(c.name)}</h1>
    <p class="title">${esc(v.title)}</p>
    <p class="school">${esc(v.school)}</p>
    <p class="search">${esc(v.search)}</p>

    <section class="card">
      <h2>Points forts</h2>
      <ul class="atouts">${v.atouts.map((a) => `<li><b>${esc(a.b)}</b>${esc(a.t)}</li>`).join("")}</ul>
    </section>

    <section class="card">
      <h2>Formation</h2>
      ${formation}
    </section>

    <section class="card">
      <h2>Expérience</h2>
      ${exp}
    </section>

    <section class="card">
      <h2>Projets</h2>
      ${projets}
    </section>
    ${methode}
  </main>
</body>
</html>`;
}
