# Round 3 : agent D (P6, P8, P11)

Documents lus : CV classique, CV méthode, CV sans photo (aperçu) ; lettres 02, 03 et 05 (texte et aperçu PDF de la 03) ; captures du portfolio (accueil desktop 1 à 6, mobile 1 et 3, labo 1) ; guide LinkedIn. Test rapide du simulateur GLPI avec Playwright sur localhost:3100 : transmission, deuxième transmission (l'anti-doublon répond « déjà présent (#1087) : rien à créer »), panne simulée. Aucune erreur JS, le journal d'appels est lisible.

---

## P6 : Julien, 38 ans, manager en ESN (3 000 personnes)
Reçoit : CV classique + lettre 03.

```
PROFIL: P6
humain: 8/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 7/10 | convocation: 55% | global: 14/20
portfolio: 14/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

Ma lecture : je cherche quelqu'un que je peux poser chez un client grand compte au bout de trois semaines sans qu'il me fasse honte. Ce dossier me rassure sur ce point. La lettre 03 a les codes (formule de politesse, objet, référence d'offre), et il raconte un sujet de DSI avec des contraintes que mes clients connaissent : outil existant, confidentialité, utilisateurs non techniques. C'est exactement notre quotidien.

**Points forts**
1. « Il s'agissait de permettre aux étudiants de contacter le support sans exposer le GLPI interne du personnel, en composant avec un outil existant, des règles de confidentialité et des utilisateurs qui ne sont pas développeurs. » C'est une phrase de consultant, pas d'étudiant. Elle me montre qu'il a compris le besoin.
2. « Le code appartient à l'université et n'est pas public : je peux en présenter le fonctionnement en entretien, pas le dépôt. » Pour une ESN dont les clients sont des banques, c'est le bon réflexe. Il sait ce qu'est la confidentialité du code.
3. « rapport de 37 pages destiné à la personne qui reprendra le projet ». La documentation et la passation, c'est ce qu'on facture et ce que les stagiaires bâclent.

**Points faibles**
1. La stack ne correspond pas à mon marché. Mes missions, c'est Java/Spring, .NET, Angular. Il écrit « J'ai surtout travaillé en TypeScript et en PHP, et pratiqué Java et C en licence ». Java en dernière position, sans aucun projet visible.
2. Aucune trace de travail en équipe ni de méthode agile (Jira, sprints, revue de code). Il l'avoue lui-même sur le site (« Jusqu'ici, j'ai surtout codé seul »), et c'est honnête, mais chez le client on travaille à dix sur le même dépôt.
3. La phrase « Je suis prêt à me former sur la stack de vos projets » est la phrase de tous les L3. Il faudrait une preuve qu'il apprend vite (un projet Java ou Spring de 2 jours suffirait).

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je suis prêt à me former sur la stack de vos projets. »
- « Je me tiens à votre disposition pour un entretien. » (formule standard, mais acceptable dans ce registre)
- Sur le site : « La personne qui reprend le code ne doit pas avoir besoin de moi. »

**Phrases qui sonnent faux ou exagérées**
- Sur le site, « Ce que j'ai prouvé : Deux mois à la DSI de l'UPEC, un prototype qui relie deux GLPI isolés, livré et documenté. » « Livré » et « prouvé » sont trop forts, alors que plus bas il écrit « Mon prototype de stage n'a jamais dépassé l'environnement de test ».
- « Des applications web de bout en bout : interface, API, base de données, conteneurs. » Pour un L3, « conteneurs » c'est un docker-compose, pas de l'exploitation.

**Questions en entretien**
- Vous avez fait une démo à votre tuteur et il a ajouté un besoin en pleine démo. Comment avez-vous géré ça ? (je veux voir s'il sait gérer un client)
- Si on vous met en régie chez une banque qui interdit l'IA, vous tenez combien de temps sans Claude Code ?
- Montrez-moi du Java que vous avez écrit.

**Ce qui ferait le plus monter ma note**
Un petit projet Java/Spring Boot ou Angular visible (même un CRUD propre avec tests), et une ligne « travail en équipe » (projet de groupe en licence avec Git partagé).

**Avis sur le CV méthode (une ligne)**
L'encart « Comment je travaille » ne me braque pas : « Pour le reste, je m'aligne sur les règles de l'équipe » est exactement ce que je dirais au client. Mais je ne l'enverrais pas tel quel à une banque.

**Portfolio**
- Le simulateur GLPI marche, le journal d'appels (« POST dsi/initSession → 200 », « → déjà présent (#1087) : rien à créer (anti-doublon) ») montre qu'il comprend une API. Je pourrais le montrer à un client.
- On sent l'IA dans la forme : une mise en page de studio, et des titres qui commencent tous par « Ce que » (« Ce que je fais », « Ce que j'ai prouvé », « Ce que je cherche », « Ce que j'ai essayé, puis écarté », « Ce que j'en retiens », « Ce que je ne sais pas encore faire »). Ça ne me gêne pas : il l'assume, et le fond est le sien. Mais je vérifierai en entretien qu'il sait coder sans l'agent.
- Le bloc « Ce que je ne sais pas encore faire » est le meilleur argument de fiabilité du site. Un stagiaire qui connaît ses limites, je peux le placer.

**LinkedIn proposé**
Le titre A est trop long et trop technique pour mes recherches (je tape « stage développeur Java Île-de-France »). Les infos sont propres et datées correctement, sans « passionné ». Je l'aurais trouvé, je l'aurais gardé.

---

## P8 : Marc, 52 ans, fondateur d'une agence web (8 personnes)
Reçoit : CV méthode + lettre 02.

```
PROFIL: P8
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 8/10 | convocation: 60% | global: 14/20
portfolio: 16/20 | portfolio_humain: 6/10 | portfolio_ux: 9/10
```

Ma lecture : je ne lis pas les lettres, je clique sur le lien. Ici le lien tient ses promesses : le site est plus soigné que la moitié de ce qu'on livre à nos clients. Ma seule question, c'est de savoir ce qu'il fait lui, et ce que fait la machine.

**Points forts**
1. L'ouverture : « J'étais censé observer. J'ai surtout demandé si je pouvais essayer, et je suis reparti avec une page HTML bancale et l'envie de recommencer. » J'ai pris des stagiaires de 3e. C'est vrai, c'est court, ça me parle.
2. « Il fallait justifier chaque écran, et j'en ai refait plusieurs quand ses objections tenaient la route. » Il a déjà eu un client, il sait que la maquette n'est pas à lui.
3. Le labo perf. « Lighthouse mobile : 57 contre 97 », avec la liste de ce qui change (composant client contre serveur, images de 1 800 px pour des cases de 250, données en cascade). C'est ce que je dois expliquer à chaque client qui me demande pourquoi son site WordPress rame.

**Points faibles**
1. « responsive jusqu'à 390 px ». 390 px, c'est un iPhone récent. Les Android d'entrée de gamme sont à 360, et on teste à 320. Écrire une limite haute comme une fierté, c'est l'inverse de ce qu'il voulait dire.
2. Aucun site client en ligne. Keewic : « La version en ligne a changé depuis : ici je parle du travail de conception ». Le portail UPEC : « Personne ne me l'a demandé ». Je n'ai aucune preuve qu'il a tenu un délai et un brief.
3. Pas de WordPress, pas de CMS, pas d'intégration de maquette d'un tiers. Il a l'air plus à l'aise côté back que côté intégration fine, alors qu'il postule en front-end.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « J'aimerais voir comment vous passez de la maquette à l'intégration chez [Agence], et y prendre ma part. »
- « Mon site, haniwanice.com, me sert aussi de preuve d'intégration » (la tournure « me sert de preuve » est raide)
- Sur le site : « C'est là que le CSS a arrêté d'être de la magie. », « C'est probablement de là que vient mon obsession pour les marges. », « Les meilleurs endroits pour débloquer un bug. » Trois petites phrases mignonnes à la suite, ça fait formule.

**Phrases qui sonnent faux ou exagérées**
- « 100 en accessibilité sur Lighthouse » : Lighthouse à 100 ne veut pas dire accessible. Un dev d'agence le sait, ça peut se retourner contre lui.
- « Je développe des applications web, de l'interface à la base de données. » : accroche générique, un L3 ne « développe » pas encore des applications de bout en bout pour des clients.

**Questions en entretien**
- Je vous donne une maquette Figma et 3 jours. Combien de temps pour l'intégrer, et qu'est-ce que vous confiez à l'agent ?
- Sur votre site, qu'est-ce que vous auriez été incapable de faire sans Claude Code ?
- Pourquoi la version naïve affiche 1,36 s sur la page d'accueil et 0,25 s sur la page labo ?

**Ce qui ferait le plus monter ma note**
Un vrai site livré à quelqu'un (association, commerçant, refuge pour chiens dont il parle), en ligne, avec le brief et le délai. Et remplacer « jusqu'à 390 px » par « testé de 320 px à 1 440 px ».

**Avis sur le CV classique (une ligne)**
Plus banal mais plus propre. Pour une agence, je préfère le méthode : savoir comment il travaille avec l'IA m'intéresse plus que la compagnie aérienne Laravel.

**Portfolio**
- Très bon niveau de finition : typographie à empattements bien gérée, alternance clair/sombre, simulateur qui fonctionne, page labo qui mesure en direct. Si un client me livrait ça, je serais content. Mais du coup je ne sais pas mesurer sa part.
- Ça se sent IA : la mise en page « studio » très homogène, les illustrations isométriques au trait (coffre-fort, clavier), la rythmique « titre serif énorme + sous-titre gris » à chaque section. Le texte, en revanche, a des détails vécus (« Le 2 juin, en testant le ticket n°27 », « ajouté par mon tuteur en pleine démo du 22 mai »). Ça ne me gêne pas : moi aussi j'utilise l'IA, ce qui compte c'est que ça marche et qu'il sache le réparer.
- Sur mobile, le badge « Disponible dès avril 2027 » sur la photo et « Disponible pour un stage à partir d'avril 2027 » juste en dessous : doublon visible. Et les chiffres du labo varient (219 ko sur le CV, 208 ko puis 179 ko en direct) ; c'est expliqué (« Varie selon votre écran ») mais un client ne lira pas la note.

**LinkedIn proposé**
Propre, factuel, le post 2 sur le labo est exactement ce que je partagerais. Le post 3 sur l'erreur de mesure est le meilleur des trois, à condition qu'il l'ait vraiment compris (le guide lui-même met en garde).

---

## P11 : Amandine, 36 ans, chargée des relations entreprises (bureau des stages)
Reçoit : CV classique + lettre 05.

```
PROFIL: P11
humain: 8/10 | credibilite: 7/10 | clarte: 9/10 | pertinence: 7/10 | differenciation: 6/10 | design: 8/10 | ton: 8/10 | envie: 6/10 | convocation: 50% | global: 13/20
portfolio: 14/20 | portfolio_humain: 7/10 | portfolio_ux: 8/10
```

Ma lecture : je ne recrute pas, je vérifie que l'étudiant se présente correctement et que sa recherche est conforme à la maquette du diplôme avant de transmettre son dossier à nos entreprises partenaires. « Convocation » ici veut dire : est-ce que je le recommande spontanément à un partenaire.

**Points forts**
1. Dates précises et cohérentes : « 4 mai – 1er juil. 2026 (8 semaines) » sur le CV, « huit semaines » dans la lettre, « Deux mois » sur le site. Rien ne se contredit.
2. La lettre 05 est courte, sans faute, dans le bon registre, et dit l'essentiel en trois paragraphes : niveau, période, lieu, preuve, lien.
3. Encadrement mentionné (« encadré par un ingénieur de la DSI », « Prototype validé par le tuteur »), rapport de stage chiffré. C'est ce qu'on attend d'un stage académique.

**Points faibles**
1. Cohérence du parcours : « Licence 3 Informatique, En cours, 2026-2027 » mais le stage DSI date du printemps 2026. Le stage était donc en L2, ou c'est une L3 refaite ? Le CV ne le dit pas, et le guide LinkedIn écrit noir sur blanc « on n'affiche pas la date d'entrée réelle ». Si un partenaire découvre un redoublement caché, c'est pire qu'un redoublement assumé.
2. La période « avril à août 2027 (2 à 5 mois) » doit correspondre au calendrier de la L3 (soutenance, jury de juin, durée maximale de la convention). Rien n'indique qu'il a vérifié ; « 5 mois » dépasse souvent ce qu'autorise une convention de licence en fin d'année. Et au-delà de deux mois, la gratification est obligatoire : il faut que l'entreprise le sache.
3. « Poursuite en master envisagée » : trop flou. Un partenaire veut savoir s'il peut proposer une alternance ensuite.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je peux vous rencontrer ou vous rappeler au moment qui vous convient. »
- « En dehors des cours, je développe des projets dont je me sers au quotidien »
- Sur le site, la série des titres « Ce que je fais / Ce que j'ai prouvé / Ce que je cherche ».

**Phrases qui sonnent faux ou exagérées**
- Sur le site : « C'est en partie pour ça que je cherche un stage plutôt qu'une mission en freelance. » Un L3 n'a pas à se justifier de ne pas être freelance. Pour moi, c'est un étudiant qui cherche un stage dans le cadre de son diplôme.
- « La suite, peut-être chez vous » : un peu commercial.
- Sur le site : « J'ai commencé par là. Le 2 juin… ». Commencer par les webhooks et découvrir le 2 juin, à quatre semaines de la fin, qu'ils ne marchent pas, alors que la démo du 22 mai fonctionnait déjà : la chronologie mérite une phrase de plus.

**Questions en entretien (rendez-vous de préparation)**
- Le stage de 2026, il était obligatoire en L2 ou fait en plus ? Avec quelle convention ?
- Avez-vous vérifié avec votre responsable de formation les dates possibles pour 2027 ?
- Quel master visez-vous, en initial ou en alternance ?

**Ce qui ferait le plus monter ma note**
Une ligne de formation complète et vraie (années, éventuel redoublement ou réorientation assumé), et une période de stage alignée sur le calendrier officiel (« stage de fin de L3, à partir du [date], durée [x] semaines selon la convention »).

**Avis sur le CV méthode (une ligne)**
L'encart sur Claude Code ne pose aucun problème réglementaire ; la mention « Données sensibles : modèles en local » est même rassurante. Je ne le conseillerais pas pour les partenaires publics.

**Portfolio**
- Lisible, sobre, sans cookie ni traceur (« Pas de cookie, pas de traceur. »), adapté au mobile. Je peux le transmettre à un partenaire sans crainte.
- On sent que la mise en forme vient d'un outil : c'est très homogène, presque trop pour un étudiant. Le contenu, lui, est personnel (piano, refuge, dates de stage). Ça ne me gêne pas tant que c'est déclaré, et ça l'est (« Je code souvent avec un agent IA, Claude Code. Voici comment, et avec quelles limites. »).
- Le bloc « Ce que le prototype ne prouve pas : la tenue à 40 000 utilisateurs, l'authentification centralisée, les pièces jointes » est très bien sur le plan académique : c'est l'esprit critique qu'on demande dans un rapport.

**LinkedIn proposé**
Bien plus juste que l'existant (fausse expérience « Stage · sept. 2023 – févr. 2026 » supprimée, dates de stage corrigées). Mais retirer les dates de formation pour masquer l'année d'entrée me gêne : préférer une explication courte.

---

## Synthèse de l'agent D

Les 3 critiques les plus importantes :
1. **Le parcours de formation est flou, et le guide LinkedIn assume de le cacher** (« on n'affiche pas la date d'entrée réelle »). L3 « 2026-2027 » plus stage au printemps 2026 : tout lecteur attentif se demande en quelle année il était. Mieux vaut l'expliquer en une ligne que laisser deviner.
2. **Pas de preuve de livraison réelle hors stage, ni de travail en équipe.** Keewic n'est pas en ligne, le portail UPEC est une proposition perso, le site est fait avec un agent. Pour une agence comme pour une ESN, il manque un projet livré à quelqu'un, avec un brief et un délai. Pour l'ESN, il manque aussi un projet Java visible.
3. **Le site est très léché, et ça se sent IA** : titres en « Ce que… » répétés partout, petites phrases faites pour plaire (« obsession pour les marges »), mots trop forts (« Ce que j'ai prouvé », « livré »), alors que le même site dit « n'a jamais dépassé l'environnement de test ». Il faut casser l'anaphore, retirer « prouvé » et « livré », et corriger « responsive jusqu'à 390 px » en « testé de 320 à 1 440 px ».
