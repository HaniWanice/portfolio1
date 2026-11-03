# haniwanice.com

Portfolio de Hani Wanice, étudiant en L3 informatique (Université Paris-Est Créteil).

- **Site** : Next.js 16, TypeScript, CSS sans framework, [Motion](https://motion.dev) pour les transitions d'état,
  figures [Hairline](https://hairline.lucasmarkes.com) qui répondent au pointeur.
- **Labo perf** (`/labo`) : la même page codée deux fois (`src/app/(demo)/demo/naive` et `.../optim`),
  mesurée en direct par une petite sonde (`src/components/demo/Probe.tsx`) et par Lighthouse.
- **Candidature** (`candidature/`) : CV, lettres, guide LinkedIn et évaluations. Voir `candidature/README.md`.
- **Règles de travail avec l'agent de code** : `CLAUDE.md`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
node candidature/scripts/build.mjs   # régénère CV et lettres en PDF
```
