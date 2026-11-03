# Dossier de candidature de Hani Wanice

Tout ce qui sert à chercher un stage (avril à août 2027) : CV, lettres, LinkedIn, et les évaluations
qui ont servi à les améliorer. Le portfolio lui-même est à la racine du dépôt (`src/`).

## Par où commencer

| Je veux… | Fichier |
|---|---|
| Envoyer un CV à une startup, une agence, une équipe à l'aise avec l'IA | `01-cv/cv-hani-wanice-methode.pdf` |
| Envoyer un CV à une DSI, une banque, un grand groupe, une ESN | `01-cv/cv-hani-wanice-classique.pdf` |
| Envoyer un CV à un recruteur très traditionnel | `01-cv/cv-hani-wanice-classique-sans-photo.pdf` |
| Écrire une lettre | `02-lettres/` (voir le tableau plus bas) |
| Refaire LinkedIn | ouvrir `03-linkedin/guide-linkedin.html` dans un navigateur |
| Voir ce que le panel de recruteurs a pensé | `04-evaluation/SYNTHESE.md` puis `04-evaluation/SCORES.md` |
| Vérifier un fait avant de l'écrire quelque part | `00-base/FAITS.md` |

## Organisation

```
candidature/
├── 00-base/
│   ├── FAITS.md         source unique : tout ce qui est écrit ailleurs doit être ici
│   ├── DECISIONS.md     ce qu'on montre, ce qu'on tait, et pourquoi
│   └── STYLE.md         le ton, et la liste des tics d'écriture « IA » à chasser
├── 01-cv/
│   ├── cv-data.mjs      le contenu des CV (on modifie ICI)
│   ├── cv-template.mjs  la mise en page (HTML/CSS, A4)
│   └── *.pdf / *.png    les CV générés (ne pas modifier à la main)
├── 02-lettres/
│   ├── 01 à 05-*.md     lettres par type d'entreprise
│   ├── 06-messages-courts.md   e-mail d'accompagnement, messages LinkedIn, relance
│   └── pdf/             lettres générées (avec les [crochets] surlignés)
├── 03-linkedin/
│   ├── guide-linkedin.html     diagnostic + textes à coller + consignes pour un agent
│   ├── banniere-linkedin.png   1584 × 396
│   └── photo-profil-linkedin.jpg
├── 04-evaluation/
│   ├── PANEL.md         les 15 profils de recruteurs et la grille de notation
│   ├── SCORES.md        notes agrégées, round par round
│   ├── SYNTHESE.md      ce qui a changé à chaque round, et pourquoi
│   └── rounds/round-N/  rapports bruts des agents
├── scripts/
│   ├── build.mjs        régénère CV et lettres (HTML → PDF + aperçu PNG)
│   └── scores.py        recalcule SCORES.md
└── _assets/             photo, polices
```

## Les lettres

| Fichier | Pour qui | CV à joindre |
|---|---|---|
| `01-startup-produit.md` | Startup, scale-up, équipe produit | méthode |
| `02-agence-web.md` | Agence web, studio | méthode (ou classique) |
| `03-esn-grand-groupe.md` | ESN, banque, grand groupe | classique |
| `04-dsi-secteur-public.md` | DSI, université, collectivité, hôpital | classique |
| `05-spontanee-courte.md` | Candidature spontanée, registre neutre | selon la cible |
| `06-messages-courts.md` | E-mail, LinkedIn, relance | — |

Chaque lettre contient des **[crochets]** à remplir. Ils ne sont pas décoratifs : c'est la partie qui
montre que tu as regardé l'entreprise. Une lettre envoyée avec un crochet générique (« votre entreprise
innovante ») perd tout ce que le reste a gagné. Si tu n'as rien de précis à dire, envoie le message court.

## Régénérer les documents

```bash
node candidature/scripts/build.mjs          # tout
node candidature/scripts/build.mjs cv       # seulement les CV
node candidature/scripts/build.mjs lettres  # seulement les lettres
cp candidature/01-cv/cv-hani-wanice-classique.pdf public/cv/cv-hani-wanice.pdf   # CV téléchargeable sur le site
```

Les lettres ne se remplissent pas automatiquement : copie le `.md`, remplis les crochets, puis relance
`build.mjs lettres` (ou colle le texte dans un e-mail).

## Avant chaque envoi

1. Les crochets sont remplis, et le premier paragraphe parle de l'entreprise, pas de toi.
2. Les dates : le stage DSI, c'est « au printemps 2026 », jamais « cette année ».
3. Tu sais expliquer à l'oral chaque ligne du CV, y compris le labo perf et le simulateur GLPI
   (relis `src/components/GlpiSim.tsx` et `src/components/PerfDuel.tsx`).
4. Le lien LinkedIn du CV est à jour si tu as changé l'URL du profil.

## Choses que toi seul peux faire

- **Passer un test d'anglais** (TOEIC, Linguaskill) avant avril. « Anglais courant » sans score est la
  ligne la plus fragile du CV.
- **Renommer le dépôt GitHub `Protail-design-upec`** en `portail-design-upec` (Settings → Rename). GitHub
  redirige l'ancienne adresse. La faute a été relevée par la moitié du panel.
- **Demander une recommandation à ton tuteur de stage** (message prêt dans le guide LinkedIn).
- **Ajouter deux captures des maquettes Keewic** au portfolio si tu les as encore : c'est la preuve qui
  manque pour les agences et les studios.
- **Construire un petit projet avec un LLM local** (par exemple trier des tickets de support par catégorie
  avec Ollama). Proposé par le profil « startup IA » du panel, cohérent avec ton stage.
- **Trancher une question que le panel a posée** : as-tu utilisé un assistant IA pendant le stage à la DSI,
  et la DSI l'autorisait-elle ? Je ne le sais pas, donc rien ne l'affirme ni ne le nie. Prépare une réponse
  vraie et courte : un recruteur du public ou de la défense la posera.
- **Fusionner la branche** pour que haniwanice.com soit mis à jour par Vercel.
