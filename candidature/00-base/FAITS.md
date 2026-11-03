# Faits vérifiés : la source unique

Tout ce qui apparaît dans un CV, une lettre, le portfolio ou LinkedIn doit pouvoir être retrouvé ici.
Si un document dit autre chose que ce fichier, c'est le document qui a tort.

Sources : CV 2026 V2, rapport de stage DSI (PDF + HTML), profil LinkedIn exporté le 03/11/2026,
`mesinfo.md`, réponses de Hani dans la conversation du 03/11/2026.

## Identité et contact

| Champ | Valeur | Affiché ? |
|---|---|---|
| Nom | Hani WANICE | oui |
| Âge | 24 ans | non (pas obligatoire en France, n'apporte rien) |
| E-mail | haniwanice@gmail.com | oui |
| E-mail université | hani.wanice@etu.u-pec.fr | non (on garde une seule adresse) |
| Téléphone | 07 83 63 60 58 | oui |
| Localisation | « Île-de-France, mobile Paris et La Défense » | oui, volontairement large |
| Permis / voiture | pas de voiture | non |
| Site | haniwanice.com (Next.js, Vercel) | oui |
| GitHub | github.com/HaniWanice | oui |
| LinkedIn | linkedin.com/in/hani-wanice-920a813b1 | oui |
| Photo | `_assets/photo-originale.webp` (fournie le 03/11/2026) | oui |

## Ce qu'il cherche

- **Stage** de fin de licence : à partir d'avril 2027, jusqu'à fin août 2027 au plus tard.
  Minimum 2 mois, idéalement 4 à 5 mois. Reprise des cours en septembre.
- **Alternance** : pas pour l'instant (master non encore décidé). On ne la met pas en avant ;
  on la garde comme une option à évoquer en entretien.
- **Secteurs** : ouvert. Priorité aux cibles accessibles : startups/PME tech, agences web,
  ESN, DSI (publique ou grand groupe).
- **Postes** : développeur web full-stack / front-end, intégration d'API, outillage interne.

## Formation

- **Licence Informatique, Université Paris-Est Créteil (UPEC)**, L3 en cours (2026-2027).
  - Réalité : L1 commencée en 2022-2023, L1 et L2 redoublées, L3 peut-être redoublée.
    Aménagements d'études.
  - **Choix de présentation** : on affiche « Licence 3 Informatique, en cours (2026-2027) » sans date
    d'entrée. Rien de faux, et on ne met pas les redoublements en vitrine. Si la question
    tombe en entretien : réponse honnête et courte (voir `DECISIONS.md`).
  - Cours suivis (à citer avec parcimonie) : algorithmique, bases de données, programmation C et Java,
    développement web (PHP/Laravel, JavaScript), systèmes.
- **Bac général 2022** (spécialités scientifiques : maths et sciences de l'ingénieur, à confirmer).
  Non affiché sur le CV (inutile en L3 et ça révèle la chronologie).
- **freeCodeCamp, Responsive Web Design** (certification en ligne, environ 40 h), janv.-mars 2025.

## Expériences

### Stage, Direction des Systèmes d'Information de l'UPEC (4 mai au 1er juillet 2026, environ 2 mois)

- Tuteur entreprise : Miguel Cancela Da Fonseca. Tuteur pédagogique : Alexis Bes.
- Problème : laisser les étudiants (jusqu'à 40 000 utilisateurs potentiels) envoyer des demandes de support
  à la DSI **sans ouvrir le GLPI interne** du personnel (confidentialité, sécurité).
- Pistes étudiées puis écartées : transfert natif par plugin GLPI, webhooks asynchrones,
  synchronisation automatique.
- Solution prototypée : deux instances GLPI isolées, chacune avec sa base MariaDB, sous Docker Compose,
  et une application Next.js (App Router, Server Actions, TypeScript) qui orchestre les deux via l'API REST de GLPI.
- Escalade = double injection synchrone : création d'un ticket miroir côté DSI + mise à jour du
  ticket étudiant. Lien entre les deux par une balise dans le titre (regex).
- Flux retour : quand la DSI répond/résout, le statut redescend côté étudiant, avec un garde-fou anti-boucle.
- Gestion du cycle de vie des sessions API (ouverture/fermeture systématique, wrapper `glpiFetch`) pour
  ne pas saturer le serveur. Mapping des catégories entre les deux instances.
- Jalons : premier crash d'installation semaine 1 ; changement de cap semaine 2 ; démonstration
  du 22 mai, où le tuteur a ajouté l'objectif de synchronisation retour ; présentation finale le 8 juin.
- Limites assumées : prototype local, pas de SSO, pas de pièces jointes, pas testé à l'échelle.
- Livrables : prototype fonctionnel + rapport de stage de 37 pages.
- ⚠️ LinkedIn indique « avr. 2026 – juil. 2026 · 4 mois » : **faux**, à corriger en mai-juil., 2 mois.
- ⚠️ L'ancien site disait « l'équipe support s'en est servie de base pour la recette » : **non vérifié**, retiré.

### Mission de design UX/UI, application mobile Keewic (2025)

- Mission pour un porteur de projet (connaissance familiale), rémunérée. Montant non affiché, statut non affiché.
- Wireframes et maquettes Figma de la première version, parcours utilisateur, aide à la rédaction des pitchs.
- A beaucoup questionné le projet : challenger les idées, défendre certains choix, en critiquer d'autres.
- Maquette remise à un développeur freelance. **L'app publiée sur l'App Store n'utilise plus son design**
  → on ne met pas le lien App Store comme si c'était son travail.

### Stage de 3e, Wirate (agence de développement web, vers 2017)

- Stage d'observation, mais il a codé un petit site HTML/CSS, posé beaucoup de questions.
- Trop ancien pour la rubrique « Expérience » du CV. **Utilisé comme anecdote** (premier contact
  avec le métier) dans le portfolio et éventuellement une lettre.

## Projets

| Projet | Contenu vérifié | Lien |
|---|---|---|
| Todo Smart (2026) | Gestionnaire de tâches React + Firebase/Firestore, synchronisation temps réel entre appareils, vues liste et checklist, recherche. Utilisé au quotidien. | haniwanice.github.io/todo-smart |
| Refonte « Portail » UPEC (2026) | Proposition de refonte de la page d'accueil intranet du personnel, HTML/CSS, regroupement des services, mobile. Projet personnel, non commandé. | haniwanice.github.io/Protail-design-upec |
| Compagnie aérienne (2025, universitaire) | Application Laravel + SQLite, gestion des utilisateurs (CRUD), front HTML/CSS. | — |
| Mini-jeu JavaScript (universitaire) | Événements, timers, conditions de victoire. | — |
| Profil card (2025) | Composant HTML/CSS sans dépendance. | haniwanice.github.io/profil-card |
| Portfolio haniwanice.com (2026) | Refait de zéro en novembre 2026, Next.js + démos interactives. | haniwanice.com |
| Démos du portfolio (2026) | Labo perf « même stack, deux résultats », simulateur du pont GLPI, etc. Construites avec Claude Code, à comprendre et à savoir expliquer **avant** de les citer en entretien. | haniwanice.com/labo |

## Compétences (niveau honnête)

- **Pratiqué en projet réel** : TypeScript, JavaScript, React, Next.js (App Router, Server Actions), HTML/CSS,
  API REST, Docker / Docker Compose, MariaDB/MySQL, SQL, Git/GitHub, Figma.
- **Vu en cours / projets universitaires** : Java, C, PHP/Laravel, SQLite, Python (cité sur LinkedIn,
  usage scolaire).
- **Outillage IA** : Claude Code au quotidien (agents, sous-agents, skills, hooks, fichiers CLAUDE.md, MCP),
  workflow revu régulièrement ; modèles locaux via Ollama et LM Studio (famille Qwen) quand les données
  ne doivent pas sortir de la machine. Sensible au RGPD (cf. stage : données étudiantes isolées).
- **Langues** :
  - Français : courant, langue de travail et d'études.
  - Anglais : très à l'aise à l'oral et à l'écrit, sans certification → « courant (pas encore de score TOEIC) ».
    Conseil : passer le TOEIC ou le Linguaskill avant avril, ça change la ligne en preuve.
  - Espagnol : intermédiaire (noté B2 sur l'ancien CV, à confirmer).
  - Arabe : oral familier (syrien). **Non affiché, choix de Hani.**

## Centres d'intérêt

- Piano depuis 8 ans (aime Ludovico Einaudi), violon en débutant.
- Art, dessin et pratique artistique (sans mentionner le cadre thérapeutique).
- Natation, vélo. Voyages : Grèce, Espagne, Italie, Portugal.
- Bénévolat : promenade de chiens dans un refuge (association Booglaw). Statut actuel à confirmer.

## Ce qui ne sort jamais (données privées)

Statut de réfugié, arrivée en France à 11 ans, TDAH / RQTH éventuelle, suivi thérapeutique,
art-thérapie (Centre Sainte-Anne), montant et statut fiscal de la mission Keewic, redoublements en détail.
