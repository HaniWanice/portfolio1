# haniwanice.com

Portfolio de Hani Wanice, étudiant en L3 informatique (Université Paris-Est Créteil).

- **Site** : Next.js 16, TypeScript, CSS sans framework, [Motion](https://motion.dev) pour les animations,
  [Lenis](https://lenis.darkroom.engineering) pour le défilement, figures [Hairline](https://hairline.lucasmarkes.com)
  qui répondent au pointeur. Une seule police : Bricolage Grotesque (variable : graisse et largeur).
- **Pages** : `/` (accueil), `/projets`, `/projets/pont-glpi` (avec le simulateur), `/labo` (deux versions d'une
  boutique, mesurées en direct), `/a-propos`.
- **Textes** : tous dans `src/lib/content.ts`.
- **Labo perf** : la même boutique codée deux fois (`src/app/(demo)/demo/naive` et `.../optim`), mesurée par une
  sonde (`src/components/demo/Probe.tsx`) et par Lighthouse.
- **Candidature** (`candidature/`) : CV, lettres, guide LinkedIn et évaluations. Voir `candidature/README.md`.
- **Brief de design** : `candidature/05-design/BRIEF.md`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
node candidature/scripts/build.mjs   # régénère CV et lettres en PDF
```
