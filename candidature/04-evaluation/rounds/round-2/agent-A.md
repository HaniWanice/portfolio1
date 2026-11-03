# Round 2, agent A (P1, P4, P9)

Documents lus : CV méthode et CV classique (PNG), lettres 01, 02 et 04 (MD et PNG), captures du portfolio (accueil desktop 1-6, mobile 1/3/4, labo 1-2), guide LinkedIn. J'ai aussi testé le simulateur GLPI sur http://localhost:3100 avec Playwright : transmettre #42, résoudre côté DSI, retransmettre, puis transmettre #43 avec une panne simulée.

Ce que montre le test du simulateur : il fonctionne et le journal est crédible (`GET dsi/search/Ticket?name=[ESCALADE ETU - ID:42]` puis `→ déjà présent : rien à créer (anti-doublon)`, `auteur = compte API → on ne renvoie rien (anti-boucle)`, `POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"}` puis `faux succès détecté`). J'ai relevé trois défauts :
- le ticket #1087, une fois « Résolu », garde son bouton « Résoudre » ;
- le ticket #42 résolu propose « Transmettre encore » ;
- la ligne « Prêt. Deux bases séparées, aucun ticket côté DSI. » reste en tête du journal alors que des tickets existent côté DSI.

---

```
PROFIL: P1
humain: 7/10 | credibilite: 7/10 | clarte: 9/10 | pertinence: 8/10 | differenciation: 8/10 | design: 8/10 | ton: 8/10 | envie: 8/10 | convocation: 60% | global: 14/20
portfolio: 15/20 | portfolio_humain: 7/10 | portfolio_ux: 8/10
```

**Camille, 29 ans, CTO d'une startup SaaS B2B de 12 personnes. Reçoit le CV méthode et la lettre 01.**

Ce que je lis en 2 minutes : un L3 qui a eu un vrai sujet d'intégration, qui sait nommer ses bugs, et qui dit comment il utilise un agent. C'est déjà plus que 45 des 50 CV de ma pile.

**Points forts**
1. Les bugs sont concrets et techniquement justes : « Coupe-circuit contre les boucles, détection des faux « 200 OK » de GLPI, sessions API fermées même en cas d'erreur. » Celui qui a écrit ça a eu le problème. Le simulateur le confirme, et le cas du `ERROR_GLPI_ADD` renvoyé avec un 200 est un vrai piège de GLPI.
2. La lettre 01 est courte et raconte quelque chose : « À la première démo, mon tuteur a demandé que la clôture d'un ticket d'un côté ferme aussi l'autre. Trois jours plus tard ça marchait, avec en prime une boucle infinie et des sessions API qui ne se fermaient jamais. » C'est le meilleur paragraphe de tout le dossier.
3. La façon de travailler avec Claude Code est décrite par des actions qu'on peut vérifier (« chaque diff relu avant le commit », règles publiques sur GitHub), et pas par des adjectifs. Je vais aller lire le fichier de règles.

**Points faibles**
1. Le labo perf est un épouvantail construit sur mesure. La page Labo l'avoue elle-même : « La latence de l'API naïve est simulée (700 ms puis 450 ms) » et « Le calcul lourd est un exemple, choisi pour qu'on le sente ». Le 53 → 98 et le LCP de 15,1 s mesurent donc surtout la dette que le candidat a injectée. C'est un bon support pédagogique, mais présenté en tête de la lettre comme un résultat, ça me fait sourire.
2. La même formule revient partout. « un sous-agent qui relit avec une autre grille que la mienne » est dans la lettre, sur le site, et en version proche dans le CV. Au troisième passage, ça ressemble à un pitch appris.
3. Ce qu'il sait faire sans l'agent n'apparaît nulle part. Rien sur le debug à la main ni sur la lecture d'une stack trace. C'est justement ce que je vérifierai en premier.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je construis des applications web, et je peux vous expliquer pourquoi elles tiennent debout. » (le site)
- « Asynchrone, élégant sur le papier. »
- « Lancer, tester, mesurer. »
- Les cinq verbes « Cadrer / Découper / Relire / Vérifier / Documenter » : une structure de slide.

**Phrases qui sonnent faux ou exagérées**
- « le score Lighthouse mobile passe de 53 à 98, et le poids de 4,2 Mo à 227 ko, sans changer de framework » : vrai, mais sur une version naïve fabriquée pour être lente (voir plus haut).
- « Ce que j'ai prouvé » (bandeau du site) : ambitieux pour un prototype de huit semaines.

**Questions en entretien**
- Ouvre le fichier de règles de ton portfolio : quelle règle as-tu ajoutée après une erreur de l'agent, et laquelle ?
- Pourquoi une balise dans le titre plutôt que `external_id` ? Que se passe-t-il si un technicien modifie le titre ?
- La boucle infinie : comment l'as-tu repérée, avec quels logs ?
- Montre-moi un diff que tu as refusé à l'agent.

**Ce qui ferait le plus monter ma note**
Ajouter un lien direct vers un commit ou une PR où l'on voit une relecture (un diff refusé, une règle ajoutée après une erreur). Présenter le labo honnêtement, en une ligne : « version naïve volontairement dégradée ».

**Le portfolio : 15/20**
- Le simulateur GLPI est la meilleure idée du dossier. Il est interactif, il montre l'anti-doublon et l'anti-boucle, et le journal est réaliste. Défauts relevés au test : le bouton « Résoudre » reste sur un ticket déjà résolu, et la ligne « Prêt… aucun ticket côté DSI » reste affichée.
- On sent l'agent, et ça ne me gêne pas. Ce qui compte pour moi, c'est que le contenu est précis : le chemin retour « ajouté par mon tuteur en pleine démo du 22 mai », le rapport de 37 pages. La mise en page, elle, est la grammaire visuelle typique de 2025-2026 (serif éditoriale, fond beige, étiquettes en monospace, illustrations isométriques au trait). Elle est propre, mais je l'ai déjà vue dix fois.
- La section « Comment je travaille » est la bonne idée, au bon endroit. Elle gagnerait à montrer une preuve (un extrait du fichier de règles) plutôt que cinq verbes.

**LinkedIn** : le titre B (« Labo perf : score Lighthouse 53 → 98 ») est le bon pour moi. Le post n°3 sur l'erreur de mesure des iframes est le plus crédible du lot, je le préfère au post sur le labo.

**L'autre variante (CV classique)** : plus fade, mais rien à redire. Je regretterais seulement de ne pas y voir l'encart sur la méthode.

---

```
PROFIL: P4
humain: 8/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 8/10 | differenciation: 6/10 | design: 7/10 | ton: 8/10 | envie: 6/10 | convocation: 45% | global: 13/20
portfolio: 10/20 | portfolio_humain: 6/10 | portfolio_ux: 6/10
```

**Gérard, 58 ans, DSI d'un conseil départemental. Reçoit le CV classique et la lettre 04.**

GLPI, deux bases séparées, rien en production, données fictives : c'est mon quotidien. Le candidat parle la langue d'une DSI. Pour le reste, je suis pointilleux.

**Points forts**
1. Le paragraphe sur les données est exactement ce que je veux lire : « Le ticket transmis à la DSI ne contient que ce qui sert à traiter la demande, les jetons d'accès à l'API sont tenus hors du code, et tous les essais ont été faits sur des données fictives. »
2. Le candidat reconnaît les limites de son travail : « les limites du prototype (authentification centralisée, montée en charge) et les étapes à prévoir avant une mise en production ». Un stagiaire qui sait que son prototype n'est pas un produit, c'est rare.
3. La lettre est correcte, sobre et sans faute. La formule de politesse est complète, et l'objet indique les dates.

**Points faibles**
1. La forme administrative est incomplète. La lettre n'a pas d'adresse postale du candidat, pas de bloc destinataire (nom, fonction, adresse), et l'objet ne cite aucune référence d'offre. Dans une collectivité, cette lettre est imprimée et circule en parapheur.
2. La typographie du CV n'est pas soignée : « 1er juil. 2026 » sans exposant, dans une police machine à écrire qui fait brouillon. Le bas de page est vide sur un quart de la hauteur, alors que le CV est sur une seule page.
3. Le site, cité dans le CV, contredit le ton de la lettre. On y lit « On en parle autour d'un café ? », « Il n'est pas en ligne droite, et c'est très bien comme ça. » et une section entière « Je code avec des agents IA, surtout Claude Code ». La lettre m'a présenté quelqu'un de prudent ; le site me montre un garçon qui fait de l'IA. Sur le site, il y a aussi « Un vrai problème, des vraies contraintes » : on écrit « de vraies contraintes ».

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je souhaiterais mettre cette expérience à profit au sein de » : formule de lettre type, mais acceptable chez nous.
- Sur le site : « C'est là que le CSS a arrêté d'être de la magie. » et « Les meilleurs endroits pour débloquer un bug. »

**Phrases qui sonnent faux ou exagérées**
- « proposer un outil que les techniciens du support puissent utiliser sans formation » : l'a-t-il vérifié avec des techniciens, ou est-ce un objectif ?
- « Les étudiants, jusqu'à 40 000 personnes » (le site) : c'est un prototype testé sur des données fictives.
- « Refonte du portail du personnel UPEC », « Proposition personnelle » : refaire l'intranet de son université sans qu'on le lui demande, et le publier, je m'interroge sur l'accord de l'établissement.

**Questions en entretien**
- Où étaient stockés les jetons d'API, concrètement ? Qui y avait accès ?
- Avez-vous mis en production ? Pourquoi pas ?
- Votre site dit que vous codez avec une IA. Ici, les postes n'y ont pas accès. Ça vous pose problème ?
- Le portail du personnel : la DSI de l'UPEC est-elle au courant de cette refonte publique ?

**Ce qui ferait le plus monter ma note**
Ajouter l'adresse du candidat, le bloc destinataire et une référence d'offre. Mettre l'exposant à « 1er ». Prévoir pour les candidatures publiques un lien vers une page du site sans le bandeau IA (ou assumer, mais en une phrase sobre).

**Le portfolio : 10/20**
- Le simulateur est sérieux et le vocabulaire est juste (« faux succès détecté : code 200, erreur dans le corps »). Je le montrerais à mon responsable d'exploitation.
- Le ton est trop familier pour moi : « On en parle autour d'un café ? », « Personne ne me l'a demandé. », « Je promène des chiens dans un refuge ». Les grands titres en serif de 100 pixels ressemblent à une plaquette d'agence. Le texte gris clair sur fond beige se lit mal.
- Ça se sent fait par une machine : les tournures se répondent trop bien, le style est trop uniforme. Ça me gêne, mais moins que je ne l'aurais cru, parce que le candidat le dit et parce que la phrase « Si vous travaillez sans IA, je travaille sans IA. » me rassure.

**LinkedIn** : je n'y vais pas. Le message de recommandation pour le tuteur est bien, et une recommandation de Miguel pèserait plus que tout le reste.

**L'autre variante (CV méthode)** : l'encart « Comment je travaille » avec Claude Code me ferait mettre le CV de côté avant même de lire le stage.

---

```
PROFIL: P9
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 6/10 | design: 7/10 | ton: 8/10 | envie: 6/10 | convocation: 35% | global: 12/20
portfolio: 13/20 | portfolio_humain: 6/10 | portfolio_ux: 7/10
```

**Inès, 31 ans, design lead dans un studio digital. Reçoit le CV méthode et la lettre 02.**

Le CV et le site ont du goût. Mais pour un candidat qui écrit « Le design, je l'ai pratiqué avant le code », je ne vois pas une seule maquette.

**Points forts**
1. La hiérarchie du CV est bonne. Le nom est en serif display, l'accroche en deux lignes, les titres de section en capitales espacées terracotta, et la colonne de droite est discrète. Je le lis en 20 secondes.
2. L'ouverture de la lettre 02 est humaine et juste : « J'étais censé observer. J'ai surtout demandé si je pouvais essayer, et je suis reparti avec une page HTML bancale et l'envie de recommencer. »
3. Sur l'épisode Keewic, il accepte la critique : « Il fallait justifier chaque écran, et j'en ai refait plusieurs quand ses objections tenaient la route. »

**Points faibles**
1. Aucune preuve visuelle du travail de design. Keewic n'a ni capture ni lien Figma, ni sur desktop ni dans le CV : « ici je parle du travail de conception, pas du produit publié ». Pour un studio, c'est ce qu'on regarde en premier.
2. La finition laisse à désirer. Le deuxième tiret du stage, avant « Escalade d'un ticket… », est plus épais que les autres. « 1er juil. » n'a pas d'exposant. Le CV mélange trois familles (serif, grotesque, mono), et le mono pour les dates et les étiquettes fait gadget. Sur le site, la vignette du labo en page d'accueil est une capture réduite, floue et illisible : sur la page d'un candidat qui parle de performance et de marges, ça se voit. Les nombres mélangent « 1.39 s » (mesure en direct) et « 0,8 s » (tableau) sur la même page.
3. La lettre 02 repose sur ses crochets. Une fois remplie, il reste un paragraphe Figma et un paragraphe Next.js qui pourraient aller à n'importe quelle agence. Tout dépendra de « [Ce que tu as remarqué…] ».

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « C'est probablement de là que vient mon obsession pour les marges. »
- « Je construis des applications web, et je peux vous expliquer pourquoi elles tiennent debout. »
- « Il n'est pas en ligne droite, et c'est très bien comme ça. »
- « On en parle autour d'un café ? »
- « Dessiner avant de coder »

**Phrases qui sonnent faux ou exagérées**
- « HTML/CSS (responsive, accessibilité) » : aucune preuve d'un travail d'accessibilité (contrastes, navigation au clavier) n'est montrée. Le gris clair sur beige du site est d'ailleurs limite en contraste.
- « obsession pour les marges » : sur desktop, la frise et la section « Comment je travaille » laissent la moitié droite de l'écran vide, sans intention visible.

**Questions en entretien**
- Montre-moi les maquettes Keewic. Quel écran as-tu refait, et pourquoi ?
- Qui a choisi les polices du site, toi ou l'agent ? Pourquoi celles-là ?
- Comment passerais-tu d'une maquette Figma à un composant, concrètement (tokens, espacements, états) ?

**Ce qui ferait le plus monter ma note**
Ajouter une étude de cas Keewic avec 3 ou 4 écrans, ou au moins des wireframes floutés si le client l'exige. Remplacer la vignette floue du labo par un vrai rendu net. Corriger le tiret épais, l'exposant de « 1er », et harmoniser les séparateurs décimaux.

**Le portfolio : 13/20**
- La direction artistique est cohérente et soignée : rythme entre sections claires et sombres, serif éditoriale, illustrations au trait. Elle est aussi très dans l'air du temps, exactement le gabarit qu'un agent produit quand on lui demande « élégant et sobre ». On sent l'IA dans l'esthétique plus que dans le texte. Ça ne me dérange pas sur le principe, mais je ne vois pas où est la patte du candidat.
- Le mobile est propre : les captures des projets apparaissent, et la frise reste lisible. Sur desktop, beaucoup de vide à droite, et l'écart entre le texte du hero et la photo est trop grand.
- Le simulateur et le labo sont de bonnes interfaces de démonstration. Dans le simulateur, les boutons « Résoudre » et « Transmettre encore » restent actifs sur des tickets déjà résolus : un défaut d'état qu'un intégrateur doit repérer.

**LinkedIn** : la bannière et la photo vont dans le bon sens. Je mettrais une planche Keewic dans la Sélection plutôt que deux liens vers le même site.

**L'autre variante (CV classique)** : même grille, plus équilibrée sans l'encart beige, mais le quart vide en bas de page fait inachevé.

---

## Les 3 critiques les plus importantes (agent A)

1. **Le labo perf est présenté comme un résultat alors que la version naïve est fabriquée.** La page Labo écrit elle-même « La latence de l'API naïve est simulée (700 ms puis 450 ms) ». Le 53 → 98 et le 15,1 s → 2,4 s viennent donc en partie de la lenteur ajoutée à la main. Une CTO le voit en une minute. Il faut le dire dans la lettre, le CV et LinkedIn (« version naïve volontairement dégradée »), sinon ce qui fait la différence devient une faiblesse.
2. **Il manque les preuves là où le candidat revendique quelque chose.** Pour le design, aucune maquette Keewic. Pour la méthode avec l'IA, aucun lien vers un diff refusé ou une règle ajoutée après une erreur. La même formule (« un sous-agent qui relit avec une autre grille que la mienne ») revient trois fois au lieu d'une preuve.
3. **Le ton et la finition ne sont pas les mêmes d'un document à l'autre.** La lettre 04 est sobre, mais il lui manque l'adresse et le bloc destinataire. Le site, lui, est familier (« On en parle autour d'un café ? », « des vraies contraintes ») et parle d'IA, ce qui contredit la lettre auprès d'un lecteur du public. À corriger aussi :
   - CV : « 1er » sans exposant, tiret plus épais sur la deuxième puce du stage ;
   - site : vignette du labo floue en page d'accueil, « 1.39 s » à côté de « 0,8 s » ;
   - simulateur : boutons « Résoudre » et « Transmettre encore » encore actifs sur des tickets résolus.
