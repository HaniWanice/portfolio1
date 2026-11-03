// Tests de bout en bout : on démarre le build de production, puis Playwright
// rejoue ce qu'un visiteur ferait. Lancer : npm run build && npm test
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { chromium } from "playwright";

const PORT = 3217;
const BASE = `http://localhost:${PORT}`;
let server, browser;

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      if ((await fetch(BASE)).ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("Le serveur ne démarre pas (as-tu lancé npm run build ?)");
}

before(async () => {
  server = spawn("npx", ["next", "start", "-p", String(PORT)], { stdio: "ignore", detached: true });
  await waitForServer();
  browser = await chromium.launch();
});

after(async () => {
  await browser?.close();
  try {
    process.kill(-server.pid);
  } catch {}
});

async function open(path, viewport = { width: 1280, height: 900 }) {
  const page = await browser.newPage({ viewport });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(BASE + path, { waitUntil: "networkidle" });
  return { page, errors };
}

test("l'accueil se charge sans erreur et montre les chapitres", async () => {
  const { page, errors } = await open("/");
  assert.equal(await page.locator("h1").innerText().then((t) => t.replace(/\s+/g, " ").trim()), "Hani Wanice");
  for (const id of ["parcours", "stage", "projets", "labo", "methode", "contact"]) {
    assert.equal(await page.locator(`#${id}`).count(), 1, `section #${id} manquante`);
  }
  assert.deepEqual(errors, []);
  await page.close();
});

test("le contenu reste lisible sans JavaScript", async () => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto(BASE + "/");
  const visible = await page.locator("#t-stage").isVisible();
  assert.ok(visible, "le titre du stage doit être visible sans JS");
  await ctx.close();
});

test("simulateur GLPI : escalade, anti-doublon, retour, panne", async () => {
  const { page, errors } = await open("/#stage");
  const sim = page.getByRole("group", { name: "Simulation du pont entre les deux GLPI" });
  const log = sim.getByLabel("Journal des appels API");

  await sim.getByRole("button", { name: "Transmettre à la DSI" }).first().click();
  await sim.locator(".ticket-title", { hasText: "[ESCALADE ETU - ID:42]" }).waitFor();
  await log.getByText("sessions fermées").last().waitFor();

  await sim.getByRole("button", { name: "Transmettre encore" }).first().click();
  await log.getByText(/anti-doublon/).waitFor();
  assert.equal(await sim.locator(".ticket-title", { hasText: "[ESCALADE ETU - ID:42]" }).count(), 1, "aucun doublon ne doit être créé");

  await sim.getByRole("button", { name: "Résoudre" }).first().click();
  await log.getByText(/anti-boucle/).waitFor();
  assert.ok((await sim.locator(".badge[data-s='resolu']").count()) >= 2, "les deux tickets doivent être résolus");

  await sim.getByRole("button", { name: /Simuler une panne/ }).click();
  await sim.getByRole("button", { name: "Transmettre à la DSI" }).first().click();
  await log.getByText(/faux succès détecté/).waitFor();
  assert.equal(await sim.locator(".ticket-title", { hasText: "[ESCALADE ETU - ID:43]" }).count(), 0, "rien ne doit être créé pendant la panne");
  assert.deepEqual(errors, []);
  await page.close();
});

test("les deux versions du labo affichent la boutique : 16 produits, onglets et tiroir panier", async () => {
  for (const v of ["naive", "optim"]) {
    const { page, errors } = await open(`/demo/${v}`);
    await page.locator(".card").nth(15).waitFor();
    assert.equal(await page.locator(".card").count(), 16, `${v} : 16 produits`);
    assert.match(await page.locator("#produits [role=status]").innerText(), /références en stock, prix médian/, `${v} : ligne du catalogue`);

    // Onglets : chaque catégorie ne montre que ses 4 produits, « Tout » les remet.
    await page.getByRole("tab", { name: "Thé" }).click();
    assert.equal(await page.locator(".card:visible").count(), 4, `${v} : onglet Thé`);
    await page.getByRole("tab", { name: "Tout" }).click();
    assert.equal(await page.locator(".card:visible").count(), 16, `${v} : onglet Tout`);

    // Tiroir : ajouter un produit l'ouvre, la quantité se modifie, le total suit.
    await page.locator(".card .btn").first().click();
    assert.equal(await page.locator(".drawer-root").getAttribute("data-open"), "true", `${v} : tiroir ouvert`);
    assert.equal(await page.locator(".cart-btn .count").innerText(), "1");
    await page.getByRole("button", { name: "Ajouter un" }).click();
    assert.match((await page.locator(".sum").innerText()).replace(/\s+/g, " "), /25,80/, `${v} : total pour 2 articles`);
    await page.getByRole("button", { name: "Fermer le panier" }).click();
    assert.equal(await page.locator(".drawer-root").getAttribute("data-open"), "false");
    assert.deepEqual(errors, [], v);
    await page.close();
  }
});

test("les deux fiches produit : galerie, variante et onglets Description, Détails, Avis", async () => {
  for (const v of ["naive", "optim"]) {
    const { page, errors } = await open(`/demo/${v}/produit/tasses-gres-modelees`);
    await page.locator(".card").nth(3).waitFor(); // produits associés
    assert.equal(await page.locator("h1").innerText(), "Lot de 4 tasses en grès modelées à la main");
    assert.equal(await page.locator(".thumb").count(), 3, `${v} : trois photos`);
    await page.locator(".thumb").nth(1).click();
    assert.equal(await page.locator(".gm[data-on=true]").count(), 1);

    assert.equal(await page.locator("#panel-description").isVisible(), true);
    await page.getByRole("tab", { name: "Détails" }).click();
    assert.equal(await page.locator("#panel-details").isVisible(), true, `${v} : onglet Détails`);
    assert.equal(await page.locator("#panel-description").isVisible(), false);
    await page.getByRole("tab", { name: /^Avis/ }).click();
    assert.ok((await page.locator("#panel-reviews .avis").count()) >= 2, `${v} : avis`);

    await page.getByRole("button", { name: "Argile rose" }).click();
    await page.getByRole("button", { name: "Ajouter au panier" }).first().click();
    assert.match(await page.locator(".line small").innerText(), /Argile rose/, `${v} : la variante est dans le panier`);
    assert.deepEqual(errors, [], v);
    await page.close();
  }
});

test("le labo reçoit les mesures des deux pages", async () => {
  const { page, errors } = await open("/labo");
  await page.locator(".pane[data-kind='optim'] .pane-head").getByText("mesuré").waitFor({ timeout: 20000 });
  const naive = await page.locator(".pane[data-kind='naive'] .metric b").first().innerText();
  assert.match(naive, /s$/, "la version naïve doit avoir une mesure");
  assert.deepEqual(errors, []);
  await page.close();
});

test("mobile : pas de défilement horizontal", async () => {
  const { page } = await open("/", { width: 390, height: 844 });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  assert.ok(overflow <= 0, `débordement horizontal de ${overflow}px`);
  await page.close();
});
