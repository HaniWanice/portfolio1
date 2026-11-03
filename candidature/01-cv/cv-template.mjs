// Gabarit du CV : mise en page n°2 (barre latérale pastel + récit à droite), A4, une page.
// La palette vient de 05-design/palettes.json. Les chemins d'assets sont relatifs à 01-cv/.

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const sup = (s) => s.replace(/\b1er\b/g, "1<sup>er</sup>");
const link = (url, label = url) => `<a href="https://${url}">${esc(label)}</a>`;

export function renderCV(v, c, p) {
  const exp = v.experiences
    .map(
      (e) => `
    <article class="item">
      <header>
        <h3>${esc(e.role)}</h3>
        <p class="when">${sup(esc(e.when))}</p>
      </header>
      <p class="org">${esc(e.org)}</p>
      ${e.lead ? `<p class="lead">${esc(e.lead)}</p>` : ""}
      <ul>${e.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      <p class="stack">${esc(e.stack)}</p>
    </article>`,
    )
    .join("");

  const projets = v.projets
    .map(
      (x) => `
    <article class="proj">
      <header><h3>${esc(x.name)}</h3><p class="when">${esc(x.when)}</p></header>
      <p>${esc(x.text)}${x.url ? ` <span class="url">${link(x.url, x.url)}</span>` : ""}</p>
    </article>`,
    )
    .join("");

  const formation = v.formation
    .map(
      (f) => `
    <div class="side-item">
      <h3>${esc(f.title)}</h3>
      <p class="meta">${esc(f.org)}${f.when ? `<br>${esc(f.when)}` : ""}</p>
    </div>`,
    )
    .join("");

  const comp = v.competences
    .map((k) => `<div class="kv"><dt>${esc(k.label)}</dt><dd>${esc(k.items)}</dd></div>`)
    .join("");

  const methode = v.methode
    ? `<section class="methode"><h2>${esc(v.methode.title)}</h2>${v.methode.text.map((t) => `<p>${esc(t)}</p>`).join("")}</section>`
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
:root{--ink:${p.ink};--accent:${p.accent};--hl:${p.hl};--side:${p.cvSide || p.f1};
/* Hiérarchie par nuances d'encre : titres très noirs, puis de plus en plus gris. */
--t1:var(--ink);
--t2:color-mix(in srgb,var(--ink) 84%,transparent);
--t3:color-mix(in srgb,var(--ink) 68%,transparent);
--t4:color-mix(in srgb,var(--ink) 58%,transparent)}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff}
body{position:relative;width:210mm;height:297mm;overflow:hidden;color:var(--t2);font:400 8.5pt/1.45 "Bricolage",system-ui,sans-serif;font-variation-settings:"wdth" 100;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.side{position:absolute;left:0;top:0;bottom:0;width:68mm;background:var(--side);padding:12mm 8mm 10mm}
.photo{width:46mm;height:57.5mm;border-radius:4.5mm;object-fit:cover;display:block}
.side h2{margin:6mm 0 2mm;font:700 7.2pt/1 "Bricolage";letter-spacing:.1em;text-transform:uppercase;color:var(--t1)}
.side h2:first-of-type{margin-top:7mm}
.side p,.side dd{font-size:8.2pt;line-height:1.42;color:var(--t2)}
.contact{display:grid;gap:1.2mm;list-style:none;color:var(--t2)}
.contact li{overflow-wrap:anywhere}
.side-item+.side-item{margin-top:2.4mm}
.side-item h3{font-size:8.6pt;font-weight:700;line-height:1.25;color:var(--t1)}
.meta{margin-top:.4mm;color:var(--t3);font-size:7.8pt}
.kv+.kv{margin-top:2mm}
dt{font-weight:700;font-size:8pt;color:var(--t1)}
dd{color:var(--t3)}
.langues,.interets{list-style:none;color:var(--t3)}
.interets li+li{margin-top:.8mm}
main{position:absolute;left:68mm;right:0;top:0;bottom:0;padding:12mm 13mm 9mm 12mm}
h1{font:700 33pt/.92 "Bricolage";letter-spacing:-.045em;font-variation-settings:"wdth" 88;color:var(--t1)}
.title{margin-top:3mm;font-weight:600;font-size:10pt;letter-spacing:-.01em;color:var(--t2)}
.search{display:inline-block;margin-top:2.4mm;padding:1mm 3mm;border-radius:2.4mm;background:var(--hl);font-weight:600;font-size:8.6pt;color:var(--t1)}
.accroche{margin-top:5mm;font-size:9.4pt;line-height:1.45;font-weight:500;letter-spacing:-.005em;color:var(--t2)}
main h2{margin:6mm 0 2.4mm;font:700 7.2pt/1 "Bricolage";letter-spacing:.1em;text-transform:uppercase;color:var(--t1)}
.item+.item{margin-top:3.6mm}
header{display:flex;justify-content:space-between;align-items:baseline;gap:3mm}
h3{font-weight:700;font-size:9.2pt;line-height:1.25;letter-spacing:-.01em;color:var(--t1)}
.when{flex:none;font-size:7.6pt;color:var(--t4);white-space:nowrap}
.org{margin-top:.3mm;color:var(--t3);font-weight:600}
.lead{margin-top:1.2mm;color:var(--t2)}
ul{list-style:none;margin-top:1.2mm}
main li{position:relative;padding-left:3.4mm;margin-top:.9mm;color:var(--t2)}
main li::before{content:"";position:absolute;left:0;top:2mm;width:1.6mm;height:1.6mm;border-radius:50%;background:var(--accent)}
.stack{margin-top:1.4mm;font-size:7.5pt;color:var(--t4)}
.proj+.proj{margin-top:2.6mm}
.proj p{margin-top:.4mm;color:var(--t3)}
.url{white-space:nowrap;font-size:7.6pt;font-weight:600;color:var(--accent)}
.methode{margin-top:5mm;padding:3mm 3.6mm 3.2mm;border-radius:3mm;background:color-mix(in srgb,var(--hl) 55%,#fff)}
.methode h2{margin:0 0 1.6mm}
.methode p+p{margin-top:1.4mm}
.methode p{color:var(--t2)}
sup{font-size:.7em;line-height:0}
</style>
</head>
<body>
  <aside class="side">
    ${v.photo ? `<img class="photo" src="../_assets/photo-cv.jpg" alt="Photo de Hani Wanice">` : ""}
    <h2>Contact</h2>
    <ul class="contact">
      <li><a href="mailto:${c.email}">${esc(c.email)}</a></li>
      <li>${esc(c.phone)}</li>
      <li>${link(c.site)}</li>
      <li>${link(c.github)}</li>
      <li>${link(c.linkedin, "LinkedIn")}</li>
      <li>${esc(c.location)}</li>
    </ul>
    <h2>Formation</h2>
    ${formation}
    <h2>Compétences</h2>
    <dl>${comp}</dl>
    <h2>Langues</h2>
    <ul class="langues"><li>${esc(v.langues)}</li></ul>
    <h2>En dehors</h2>
    <ul class="interets">${v.interets.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
  </aside>
  <main>
    <h1>${esc(c.name)}</h1>
    <p class="title">${esc(v.title)}</p>
    <p class="search">${esc(v.search)}</p>
    <p class="accroche">${esc(v.accroche)}</p>
    <h2>Expérience</h2>
    ${exp}
    <h2>Projets</h2>
    ${projets}
    ${methode}
  </main>
</body>
</html>`;
}
