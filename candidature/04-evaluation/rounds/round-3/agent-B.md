# Round 3, agent B : P2 (Thomas), P3 (Sophie), P13 (Hélène)

Documents lus : CV méthode et CV classique (PNG), lettres 01, 03 et 05 (texte et aperçu de la 03), captures du portfolio (accueil desktop 1 à 6, mobile 1 et 3, labo 1 et 2), guide LinkedIn (textes à coller).
Test interactif sur http://localhost:3100 (Playwright) : transmission du ticket #42, résolution côté DSI, seconde transmission, panne de l'API. Le simulateur se comporte comme annoncé : journal d'appels `initSession` / `search` / `POST Ticket 201` / `killSession (finally)`, anti-doublon (« déjà présent (#1087) : rien à créer »), anti-boucle (« auteur = compte API → on ne renvoie rien »), et la limite affichée (« une relance sur un ticket résolu ne le rouvre pas »). Petit défaut vu : le bouton « Résoudre » reste affiché sur le ticket DSI déjà « Résolu ».

---

## P2 : Thomas, 34 ans, lead dev, scale-up fintech (CV méthode + lettre 01)

```
PROFIL: P2
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 8/10 | design: 8/10 | ton: 8/10 | envie: 7/10 | convocation: 45% | global: 13.5/20
portfolio: 15/20 | portfolio_humain: 7/10 | portfolio_ux: 8/10
```

Mon biais : je reçois des L3 qui « maîtrisent React, Node, Docker, Kubernetes » et qui ne savent pas lire une stack trace. Je cherche des signes que la personne a debuggé quelque chose de réel, et je me méfie de tout ce qui ressemble à du « j'ai demandé à l'agent ».

**Points forts**
1. Des bugs racontés avec leur cause et leur correctif. Lettre 01 : « À la première démo, chaque modification d'un ticket étudiant en recréait un côté DSI : des dizaines de clones, devant mon tuteur. » puis « J'ai corrigé le premier problème en lisant avant d'écrire, le second en ignorant les modifications faites par le compte API. » C'est exactement ce que je veux entendre d'un stagiaire : idempotence et anti-boucle, sans le jargon.
2. Des détails qu'on n'invente pas : « le champ external_id prévu pour ça n'est pas interrogeable par l'API de recherche », « détection des faux « 200 OK » de GLPI », « sessions API fermées dans un finally, après avoir saturé GLPI de sessions fantômes ». Et le simulateur rejoue vraiment ça, journal d'appels compris.
3. L'honnêteté sur les limites : le bloc « Ce que je ne sais pas encore faire » (« Écrire des tests unitaires sur une vraie base de code, avec une intégration continue qui bloque ce qui casse. ») et « Mon prototype de stage n'a jamais dépassé l'environnement de test. » Ça me rassure plus qu'une liste de 20 technos.

**Points faibles**
1. Pour une fintech, il manque l'essentiel : aucun test unitaire, aucune CI, rien en production, un seul vrai projet « d'équipe » (8 semaines, seul développeur). Les tests annoncés sont des tests Playwright… sur le portfolio.
2. L'encart « Comment je travaille » me fait tiquer : « configuré pour chaque projet (règles, skills, sous-agents de relecture) ». Un sous-agent qui relit le code d'un agent, c'est précisément le circuit fermé que je crains. Ce que je veux savoir, c'est ce qui se passe quand l'agent n'est pas là.
3. Le flux retour n'est jamais expliqué. Les webhooks sont écartés parce que GLPI ne les déclenche pas quand la modification vient de l'API ; très bien, mais alors comment l'application apprend-elle qu'un technicien a résolu le ticket côté DSI ? Polling ? À quelle fréquence ? Le simulateur escamote la question avec un bouton « Résoudre » qui passe par l'application.

**Phrases qui sonnent IA / déjà lues**
- « Ce que j'en retiens : le problème technique n'était pas celui que je croyais. » (citation en gros caractères, très « post LinkedIn »)
- « C'est là que le CSS a arrêté d'être de la magie. »
- « Les meilleurs endroits pour débloquer un bug. »
- « La suite, peut-être chez vous »

**Phrases qui sonnent faux ou exagérées**
- « Je développe des applications web, de l'interface à la base de données. » : après un stage de 8 semaines et des projets perso, c'est une promesse de full-stack.
- « Ce que j'ai prouvé » (bandeau d'accueil) : « prouvé » est fort pour un prototype jamais sorti du test.
- Labo : la sonde en direct affiche « Tout le contenu visible 0,25 s » pour la version naïve, alors que le tableau Lighthouse dit « LCP 16,5 s ». La note « Les limites de cette démo » l'explique, mais l'écart est tellement grand que le widget en direct dessert le propos. Et la barre « Requêtes 18 », presque pleine et verte, à côté de 20 en rouge, ne dit rien.

**Questions en entretien**
- Comment le chemin retour détecte-t-il un changement fait par un technicien dans l'interface GLPI ?
- Votre anti-boucle ignore les modifications du compte API. Que se passe-t-il si un technicien utilise lui aussi un compte de service ?
- Qu'est-ce qu'un « faux 200 OK » de GLPI ? Montrez-moi comment vous le détectez.
- Le titre balisé `[ESCALADE ETU - ID:42]` : que se passe-t-il si un technicien le renomme ? (c'est écrit dans les limites, je veux l'entendre le dire)
- Exercice : je vous donne un bug dans un dépôt que vous ne connaissez pas, sans agent. 30 minutes.
- Montrez-moi un commit de votre portfolio que l'agent a proposé et que vous avez refusé, et pourquoi.

**Ce qui ferait le plus monter ma note**
1. Une ligne qui répond à ma méfiance avec un fait, pas une méthode : « Dans ce dépôt, voici une PR où j'ai réécrit à la main ce que l'agent proposait » (lien). Ou un petit projet codé sans agent, assumé comme tel.
2. Expliquer en une phrase comment le retour DSI → étudiant est déclenché.
3. Ajouter des tests unitaires (Vitest) sur le cœur du pont simulé, avec une CI GitHub Actions visible : ça coche la case qui manque.

**Avis sur l'autre variante (CV classique)** : plus neutre, sans l'encart IA ; pour moi il est moins intéressant, l'encart est ce qui m'oblige à poser les bonnes questions.

**Portfolio** (15/20, humain 7, UX 8)
1. Le simulateur GLPI est la meilleure chose du dossier : il est fidèle au récit, il montre les limites (« si le second appel échoue après le premier, rien n'annule le ticket déjà créé »), et il fonctionne. Défaut mineur : « Résoudre » reste cliquable sur un ticket déjà résolu.
2. La page labo est sérieuse (méthode Lighthouse datée, médiane de 3 passages, « Une erreur de mesure, corrigée » sur les iframes de même origine) ; c'est le genre de chose qu'un dev qui a vraiment regardé ses chiffres écrit.
3. Ça sent l'agent IA : la direction artistique « éditoriale » (serif géant, mono en surtitre, illustrations isométriques Hairline) est celle de mille sites générés en 2026, et certaines formules sont trop polies. Ça ne me gêne pas en soi, puisque c'est dit ; ce qui me gêne, c'est de ne pas pouvoir distinguer ce qu'il sait faire seul. Le site ne me donne aucun moyen de le vérifier, l'entretien technique le fera.

**LinkedIn** : textes propres et factuels, le post 1 sur les clones est le meilleur des trois ; le post 3 (« une erreur de mesure ») est bon à condition qu'il sache l'expliquer sans notes, ce que le guide dit lui-même.

---

## P3 : Sophie, 46 ans, chargée de recrutement, banque, La Défense (CV classique + lettre 03)

```
PROFIL: P3
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 6/10 | design: 8/10 | ton: 8/10 | envie: 6/10 | convocation: 35% | global: 13/20
portfolio: 13/20 | portfolio_humain: 7/10 | portfolio_ux: 7/10
```

Mon biais : 200 CV, 30 secondes chacun. Je cherche : diplôme, dates de stage, durée, une expérience en entreprise, un CV propre sans faute. Je ne connais pas GLPI ni Claude Code ; c'est le manager qui jugera la technique.

**Points forts**
1. Les 30 premières secondes passent : nom, « Stage développeur web · avril à août 2027 (2 à 5 mois) » en orange sous le titre, téléphone, mail. Je sais tout de suite si les dates collent.
2. Une vraie expérience dans une grande organisation, datée précisément : « Stagiaire développeur · Direction des systèmes d'information, Université Paris-Est Créteil · 4 mai – 1er juil. 2026 (8 semaines) ». « Encadré par un ingénieur de la DSI » rassure.
3. La lettre 03 a le registre attendu chez nous (« Madame, Monsieur », formule de politesse complète) et une phrase que je retiens : « Le code appartient à l'université et n'est pas public : je peux en présenter le fonctionnement en entretien, pas le dépôt. » Pour une banque, c'est un réflexe de confidentialité qui compte.

**Points faibles**
1. Le jargon dans les puces : « deux GLPI isolés (une base MariaDB chacun, sous Docker Compose) », « l'API REST », « Webhooks et transfert natif ». Je ne comprends que la phrase d'accroche, heureusement claire : « j'ai relié l'outil de support des étudiants à celui du personnel ».
2. Rien sur la banque ou la finance : tout repose sur le crochet « [raison précise : un métier, un client, un projet, une technologie] ». Si cette phrase est générique, la lettre devient interchangeable.
3. Huit semaines d'expérience, c'est la moyenne des L3. Le reste, ce sont des projets perso ; mon manager voudra souvent un Bac+4/5 ou une alternance. « Poursuite en master envisagée » est un peu tiède : envisagée ou prévue ?

**Phrases qui sonnent IA / déjà lues**
- « Ce stage m'a aussi appris ce que coûte un détail négligé. »
- « en composant avec un outil existant, des règles de confidentialité et des utilisateurs qui ne sont pas développeurs » (l'énumération en trois temps)
- « Je suis prêt à me former sur la stack de vos projets. » (et « stack », mot anglais dans une lettre formelle)
- « Je me tiens à votre disposition pour un entretien. » (classique, pas gênant chez nous)

**Phrases qui sonnent faux ou exagérées**
- Rien de choquant. « rapport de 37 pages » est précis, donc crédible. « Seul développeur sur le sujet » me fait juste me demander si c'était un petit sujet.

**Questions en entretien (RH)**
- Pourquoi la banque ? Qu'est-ce que vous savez de notre DSI ?
- Pouvez-vous m'expliquer votre stage comme à quelqu'un qui n'est pas informaticien ?
- Master l'an prochain : en alternance ou en initial ? Où avez-vous candidaté ?
- Quelle durée exacte, quelles dates imposées par l'université ? Convention signable par l'UPEC ?

**Ce qui ferait le plus monter ma note**
1. Une phrase de lettre spécifique au secteur (sécurité, données sensibles, outils internes), au lieu du crochet générique.
2. Une puce de stage rédigée pour moi : le résultat avant la technique (« prototype validé par mon tuteur, documenté pour la reprise »).
3. Préciser la suite d'études (« candidature en master MIAGE / informatique pour 2027 », par exemple).

**Avis sur l'autre variante (CV méthode)** : l'encart « Je développe avec Claude Code… sous-agents de relecture » ne me dit rien ; je le transmettrais sans le lire, mais chez nous la conformité pourrait poser la question. Il est cohérent qu'on ne me l'envoie pas.

**Portfolio** (13/20, humain 7, UX 7)
1. L'accueil est agréable et rassurant : la photo, « Disponible pour un stage à partir d'avril 2027 », trois colonnes « Ce que je fais / Ce que j'ai prouvé / Ce que je cherche ». En 20 secondes j'ai l'essentiel.
2. Ensuite je décroche : « Deux GLPI qui ne devaient pas se parler », un écran noir, des tickets, un journal d'appels en police machine. C'est fait pour le manager, pas pour moi ; je ne vais pas cliquer sur « Simuler une panne de l'API DSI ».
3. Je ne devine pas que c'est fait avec une IA, et cela ne me gêne pas. La section « Comment je travaille » me rassure plutôt : « Les règles de l'équipe passent avant mes habitudes. Si vous travaillez sans IA, je travaille sans IA. » et « Rien de confidentiel dans un service en ligne. » C'est la bonne réponse pour une banque.

**LinkedIn** : le titre A est clair mais long et technique (« deux GLPI reliés sans exposer les données ») ; je retiendrais surtout « Je cherche un stage d'avril à août 2027 », c'est ce que je filtre.

---

## P13 : Hélène, 61 ans, DRH, PME industrielle familiale (CV classique + lettre 05)

```
PROFIL: P13
humain: 7/10 | credibilite: 7/10 | clarte: 7/10 | pertinence: 4/10 | differenciation: 5/10 | design: 7/10 | ton: 6/10 | envie: 5/10 | convocation: 20% | global: 11/20
portfolio: 10/20 | portfolio_humain: 6/10 | portfolio_ux: 6/10
```

Mon biais : je reçois peu de candidatures de développeurs et je ne sais pas toujours quoi en faire. Je regarde la tenue, la politesse, la sincérité, et si la personne a compris ce qu'est mon entreprise. L'informatique « à la mode » et l'intelligence artificielle me rendent méfiante.

**Points forts**
1. Un CV propre, sans faute, bien aéré. La photo est soignée, même si l'écharpe fait un peu « photo de vacances » pour un CV.
2. La lettre est courte et polie, sans formule ampoulée : « Je suis en L3 informatique à l'Université Paris-Est Créteil et je cherche un stage de développeur web de deux à cinq mois, à partir d'avril 2027, en Île-de-France. » Je sais ce qu'il veut.
3. Les centres d'intérêt font humain : « Piano depuis 8 ans, violon en débutant », « Bénévole dans un refuge pour chiens ». La constance (8 ans de piano) et le bénévolat comptent pour moi.

**Points faibles**
1. Rien ne dit pourquoi une PME industrielle. Tout tient dans le crochet « [Une phrase sur l'entreprise…] ». Une candidature spontanée chez nous doit parler de nos produits, de notre site, de notre ERP, de nos ateliers. Sans cette phrase, je classe.
2. Le jargon du deuxième paragraphe : « deux outils de ticketing (GLPI) sans qu'ils partagent leurs bases, avec Next.js, TypeScript, une API REST et Docker ». « Ticketing » ne me parle pas.
3. La fin est un peu sèche et maladroite : « Mon CV est joint. Je peux vous rencontrer ou vous rappeler au moment qui vous convient. » « Vous rappeler » alors que personne ne l'a appelé. J'aurais aimé une phrase de motivation, pas seulement de disponibilité.

**Phrases qui sonnent IA / déjà lues**
- « En dehors des cours, je développe des projets dont je me sers au quotidien, et des démos visibles sur haniwanice.com. »
- La lettre est si nette et si courte qu'on ne sent pas vraiment la personne ; pas « IA » à proprement parler, mais impersonnelle.

**Phrases qui sonnent faux ou exagérées**
- « Personne ne me l'a demandé. » (portfolio, refonte du portail du personnel) : refaire l'intranet de son université sans qu'on le demande, chez nous ce serait mal vu.
- « C'est probablement de là que vient mon obsession pour les marges. » : un peu « trop écrit ».

**Questions en entretien**
- Qu'est-ce que vous connaissez de notre entreprise et de notre métier ?
- Vous seriez seul ou presque en informatique chez nous : comment faites-vous sans quelqu'un qui relit votre code, puisque vous écrivez le chercher ?
- Ces outils d'intelligence artificielle, nos données clients et nos plans y passeraient-ils ?
- Que voulez-vous faire dans cinq ans ?

**Ce qui ferait le plus monter ma note**
1. Remplir le crochet avec un vrai sujet de PME : outil interne de suivi des demandes, site vitrine, formulaires de l'atelier. Il a justement fait un outil de demandes de support : qu'il le dise dans ces termes.
2. Remplacer « deux outils de ticketing (GLPI) » par « deux outils de gestion des demandes de support ».
3. Une dernière phrase sur l'envie de travailler dans l'industrie, ou chez nous, avant la formule de politesse.

**Avis sur l'autre variante (CV méthode)** : l'encart « Je développe avec Claude Code » m'aurait fait refermer le dossier ; je n'aime pas l'idée qu'une machine écrive le travail. Il ne doit pas m'arriver.

**Portfolio** (10/20, humain 6, UX 6)
1. Je comprends le haut de la page et la frise « Du premier site à aujourd'hui, en six étapes » : le stage de 3e en agence, la licence, le stage. C'est un parcours lisible et sincère.
2. Les grands titres très gros, les fonds noirs et les petites lignes en police de machine à écrire me fatiguent ; le simulateur de tickets, je n'y comprends rien.
3. La section « Comment je travaille » me confirme ma crainte : « Je code souvent avec un agent IA, Claude Code », « Un sous-agent relit aussi chaque diff ». Qu'il le dise est honnête, mais qu'un site personnel soit construit par une machine me gêne : je ne sais plus ce qui vient de lui. Je retiens en sa faveur « Si vous travaillez sans IA, je travaille sans IA » et le bloc « Ce que je ne sais pas encore faire », que je trouve modeste et juste.

**LinkedIn** : le texte « Infos » est sobre et sans « passionné », c'est bien ; mais je ne vais pas sur LinkedIn pour recruter un stagiaire, je regarde la lettre.

---

## Synthèse de l'agent B

| Profil | Global | Convocation | Portfolio |
|---|---|---|---|
| P2 Thomas | 13.5/20 | 45 % | 15/20 |
| P3 Sophie | 13/20 | 35 % | 13/20 |
| P13 Hélène | 11/20 | 20 % | 10/20 |

Les trois critiques les plus importantes :
1. **La phrase entreprise des lettres 03 et 05 porte tout le poids.** Sans un vrai contenu dans le crochet, les deux lettres sont propres mais interchangeables ; c'est le premier facteur de tri chez Sophie et Hélène.
2. **Le récit technique a un trou que Thomas verra : le chemin retour.** Les webhooks sont écartés, mais on ne dit jamais comment l'application détecte une résolution faite par un technicien (polling ?) ; le simulateur le masque avec un bouton. Une phrase suffit.
3. **Rien ne permet de voir ce que le candidat fait sans l'agent.** Pas de tests unitaires, pas de CI, un « sous-agent » qui relit l'agent ; pour un lecteur méfiant (P2) ou hostile (P13), il faut une preuve de travail autonome (une PR réécrite à la main, un petit projet sans agent, des tests Vitest en CI), pas une méthode de plus.
