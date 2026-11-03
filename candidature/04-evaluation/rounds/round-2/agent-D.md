# Round 2 · Agent D (P6, P8, P11)

Documents lus : CV classique, CV méthode, CV classique sans photo (PNG + HTML), lettres 02, 03, 05
(et aperçus PDF), captures du portfolio (accueil desktop/mobile, labo), guide LinkedIn.
Test interactif rapide du simulateur GLPI (#stage) avec Playwright : « Transmettre » crée le ticket
miroir (log `POST dsi/Ticket → 201, ticket #1087`), la deuxième transmission affiche
`→ déjà présent : rien à créer (anti-doublon)`, et « Simuler une panne » affiche
`POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"}`, soit le faux 200 OK annoncé sur le CV. Aucune
erreur console. Le texte du log s'affiche ligne par ligne, avec un peu de latence.

---

## P6 · Julien, 38 ans, manager en ESN (3 000 personnes)
Reçoit : CV classique + lettre 03.

```
PROFIL: P6
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 6/10 | convocation: 45% | global: 13/20
portfolio: 14/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

Ce que je cherche, c'est un stagiaire que je peux poser chez un client sans y penser : il arrive
à l'heure, il ne dit pas de bêtise en réunion, il rend des choses propres et il prévient quand
il bloque. Le reste, on le forme.

**3 points forts**
- La lettre 03 est au bon registre pour nous : formule d'appel classique, objet daté, un seul
  exemple développé. « Ce stage m'a aussi appris ce que coûte un détail négligé. Des sessions API
  qui n'étaient pas fermées en cas d'erreur ont fini par saturer le serveur » : enfin un étudiant
  qui raconte un incident au lieu de lister des qualités. Chez le client, c'est exactement ce
  réflexe qu'on veut.
- « un rapport de 37 pages destiné à la personne qui reprendra le projet » : il documente et il
  pense à la passation. En régie, ça vaut de l'or.
- Le CV classique est propre, d'une seule page, avec des dates précises (« 4 mai – 1er juil. 2026
  (8 semaines) »). La photo est sobre et présentable. Je vois tout de suite la période recherchée.

**3 points faibles**
- La stack ne correspond pas à ce que je vends : 80 % de mes missions, c'est Java/Spring,
  Angular, un peu de .NET. Java n'apparaît que dans « Aussi en licence : C, Java, Python ». « Je
  suis prêt à me former sur la stack de vos projets » sauve un peu, sans plus.
- Aucun signe de travail en équipe : « Seul développeur sur le sujet ». Je n'ai aucune idée de
  son comportement dans une équipe de 8 avec un chef de projet côté client, Jira et des daily.
- Le CV est très « technique fine » pour mon premier filtre RH : « Coupe-circuit contre les
  boucles, détection des faux « 200 OK » de GLPI, sessions API fermées même en cas d'erreur ».
  Ma chargée de recrutement ne comprendra pas cette ligne. Moi, si, mais je lis le CV après elle.

**Phrases « IA » ou « déjà lues 100 fois »**
- « Je me tiens à votre disposition pour un entretien. » : standard. Ça ne me gêne pas, c'est la
  norme chez nous.
- « Je suis prêt à me former sur la stack de vos projets. » : tous les L3 l'écrivent.
- Sur le site : « Le chemin, en six étapes. Il n'est pas en ligne droite, et c'est très bien
  comme ça. » Cette tournure sent la rédaction assistée.

**Phrases qui sonnent faux ou exagérées**
- « en composant avec un outil existant, des règles de confidentialité et des utilisateurs qui
  ne sont pas développeurs » : l'énumération en trois temps est un peu plaquée, mais elle reste
  crédible.
- Rien d'exagéré sur le fond. Les 8 semaines sont annoncées comme 8 semaines, ce qui est rare.

**Questions en entretien**
- Comment se passait le suivi avec votre tuteur : point quotidien, hebdomadaire ? Qui fixait les
  priorités ?
- Si le client vous demande un raccourci que vous jugez risqué, que faites-vous ?
- Vous avez déjà fait du Java au-delà des TP ? Spring, Maven ?
- Vous utilisez des outils d'IA ? (Le site le dit. Chez certains clients, c'est interdit : je
  veux l'entendre dire « je m'aligne » sans hésiter.)

**Ce qui ferait le plus monter ma note**
- Une ligne qui montre du travail collectif : projet de groupe, Git à plusieurs, revue de code
  reçue.
- Dans la lettre ESN, un mot sur Java (un projet de licence nommé) pour me rassurer sur la stack
  la plus vendue.
- Un sous-titre lisible par un RH dans le bloc expérience (« relié deux outils de support sans
  exposer les données ») avant les détails techniques.

**Avis sur l'autre variante (CV méthode)** : l'encadré « Comment je travaille » ne me braque pas,
et la phrase « Pour le reste, je m'aligne sur les règles de l'équipe » est la bonne. Mais pour une
ESN, je préfère ne pas avoir à en parler au client : le classique est le bon choix.

**Portfolio (3 remarques)**
1. Le simulateur GLPI est le meilleur argument de tout le dossier : en 30 secondes, j'ai vu
   l'anti-doublon et le faux 200 fonctionner. Je peux le montrer à un client.
2. On sent l'agent IA : mise en page éditoriale très léchée, accroches en trois colonnes « Ce que
   je fais / Ce que j'ai prouvé / Ce que je cherche », formules travaillées. Ça ne me gêne pas en
   soi, mais je me demande ce qu'il produit sans assistance, et je le testerai.
3. « Si vous travaillez sans IA, je travaille sans IA » : bonne phrase pour moi, à condition
   qu'elle soit vraie. La section « Méthode » est longue pour un manager d'ESN. Je l'ai survolée.

**LinkedIn proposé** : nettement mieux que ce que le diagnostic décrit (supprimer le faux « stage
» de 2 ans 6 mois est indispensable). Le titre A est long mais clair, et je le trouverais avec
la recherche « stage Next.js TypeScript ».

---

## P8 · Marc, 52 ans, fondateur d'une agence web (8 personnes)
Reçoit : CV méthode + lettre 02.

```
PROFIL: P8
humain: 6/10 | credibilite: 7/10 | clarte: 7/10 | pertinence: 6/10 | differenciation: 8/10 | design: 8/10 | ton: 7/10 | envie: 8/10 | convocation: 50% | global: 13/20
portfolio: 16/20 | portfolio_humain: 6/10 | portfolio_ux: 9/10
```

Moi, je juge ce qui sort chez le client. Que ce soit fait avec l'IA ou non m'est égal tant que ça
tient, que c'est livré à l'heure et que le gamin sait le reprendre quand le client change d'avis
le vendredi à 18 h.

**3 points forts**
- Le site est un livrable que je pourrais montrer à un client : typographie maîtrisée, rythme
  clair/sombre, version mobile propre, une vraie démo interactive. C'est mieux que la moitié des
  sites d'agence que je vois.
- La mission Keewic : « Il fallait justifier chaque écran, et j'en ai refait plusieurs quand ses
  objections tenaient la route ». Quelqu'un qui accepte de refaire un écran, c'est utile en agence.
- Le labo perf parle la langue de mes clients : « Lighthouse mobile : score 53 → 98 […] poids 4,2
  Mo → 227 ko ». Je peux vendre ça.

**3 points faibles**
- La lettre 02 promet du front-end d'agence, mais l'expérience principale est un pont entre deux
  GLPI, donc de l'intégration back. Rien sur l'intégration de maquettes, les CMS (WordPress,
  Shopify, Webflow), les animations, la recette navigateur. « Côté code, mon stage de huit
  semaines à la DSI de l'UPEC m'a fait travailler avec Next.js, TypeScript et une API REST » :
  c'est mince pour une lettre d'agence.
- La lettre est courte et repose entièrement sur deux crochets à remplir (« [Ce que tu as
  remarqué…] », « [l'élément du site le plus proche de leur travail…] »). Si c'est bien fait,
  c'est excellent. Si c'est fait vite, c'est vide. Je juge sur la version envoyée.
- La version naïve du labo est un peu un homme de paille : « La latence de l'API naïve est
  simulée (700 ms puis 450 ms) », « Un calcul lourd (120 000 lignes de prix triées) ». Il le dit
  honnêtement dans « Les limites de cette démo », mais 53 → 98, c'est surtout lui qui a lesté la
  version naïve.

**Phrases « IA » ou « déjà lues 100 fois »**
- « Je construis des applications web, et je peux vous expliquer pourquoi elles tiennent debout. »
  : jolie formule, mais c'est la signature typique d'une accroche réécrite par un modèle.
- « Le chemin, en six étapes. Il n'est pas en ligne droite, et c'est très bien comme ça. »
- « On en parle autour d'un café ? » : vu sur tous les portfolios depuis 2020.
- « Aucun ticket étudiant n'est arrivé ici. C'est voulu. » / « C'est là que le CSS a arrêté d'être
  de la magie. » : petites phrases courtes et complices, à répétition. C'est le style « humain »
  d'un LLM.
- L'anecdote du stage de 3e (« J'étais censé observer. J'ai surtout demandé si je pouvais
  essayer ») est sympa, mais elle est reprise mot pour mot sur le site et dans la lettre. Je
  l'aurai lue deux fois avant l'entretien.

**Phrases qui sonnent faux ou exagérées**
- « J'ai passé du temps sur [un projet précis de leur portfolio] » : très bien si c'est vrai. Si
  c'est générique, je le verrai en une question.
- « Le dessin. C'est probablement de là que vient mon obsession pour les marges. » : mignon, un
  peu fabriqué.
- CV : « Je développe avec Claude Code, configuré pour chaque projet (règles, skills,
  sous-agents de relecture) » : à 21 ans, en stage, je m'en fiche un peu des sous-agents. Ce qui
  m'intéresse, c'est le résultat et le temps passé.

**Questions en entretien**
- Le site, vous l'avez fait en combien de temps, et qu'est-ce que vous avez refusé de ce que
  l'agent proposait ?
- Je vous donne une maquette Figma et un WordPress : par où commencez-vous ?
- Le client change la typographie à J-2 de la mise en ligne : comment le gérez-vous ?
- Désactivez Claude Code : vous me refaites ce composant de carte projet devant moi ?

**Ce qui ferait le plus monter ma note**
- Un projet d'intégration pur : une maquette (la sienne ou une maquette Dribbble) intégrée au
  pixel près, en responsive, avec un lien. C'est le cœur du métier d'agence, et c'est absent.
- Dans la lettre 02, une phrase sur le site lui-même comme preuve d'intégration (« ce site,
  maquetté puis intégré par moi, avec ces choix-là »), puisque c'est sa meilleure carte.
- Une ligne sur le temps : « fait en X semaines ». En agence, on vend des jours.

**Avis sur l'autre variante (CV classique)** : plus neutre, il perd l'encadré qui annonce le
site comme preuve de méthode. Pour une agence, je garde le méthode.

**Portfolio (3 remarques)**
1. UX très soignée : navigation ancrée, labo explicite, chiffres en direct et chiffres de
   laboratoire séparés et expliqués. Le mobile tient. C'est le niveau qu'on livre chez nous.
2. Ça se sent à 100 % que c'est fait avec un agent : l'esthétique « crème, serif d'affichage,
   étiquettes en mono, illustrations au trait » est celle de beaucoup de sites générés en 2026,
   et le texte est trop régulier. Ça ne me gêne pas en tant que client, mais en tant que patron, je
   veux savoir ce qui est de lui.
3. Petit gadget inutile : « Paris, 16:37 · cherche un stage pour avril 2027 ». La pastille verte
   et l'heure en direct n'apportent rien.

**LinkedIn proposé** : propre et factuel. Les posts sont meilleurs que la moyenne (le post sur
le bug des clones est une vraie histoire). Attention à ne pas tout répéter mot pour mot du CV au
site, puis au post.

---

## P11 · Amandine, 36 ans, chargée des relations entreprises (bureau des stages, université)
Reçoit : CV classique + lettre 05.

```
PROFIL: P11
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 6/10 | convocation: 55% | global: 13/20
portfolio: 14/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

(« Convocation » s'entend ici comme la probabilité que je transmette volontiers ce dossier à une
entreprise partenaire qui me demande un profil.)

Je ne recrute pas. Je vérifie que le dossier est conforme et cohérent, et qu'il ne mettra pas
l'université dans l'embarras auprès d'un partenaire.

**3 points forts**
- Le dossier est conforme et lisible : « Stage développeur web · avril à août 2027 (2 à 5 mois) »,
  formation « Licence 3 Informatique, Université Paris-Est Créteil, En cours, 2026-2027 ». La
  période est compatible avec un stage de fin de L3, la durée laisse de la marge pour la
  convention (et au-delà de 2 mois, la gratification est due, ce que l'entreprise doit savoir).
- La lettre 05 est exactement ce que je conseille en atelier : trois paragraphes, le registre
  neutre, un fait vérifiable (« huit semaines à la DSI de l'UPEC »), « Mon CV est joint ».
- Il y a un rapport de stage (« rapport de 37 pages qui détaille aussi ses limites ») et un
  tuteur identifié : le premier stage a été suivi dans les règles.

**3 points faibles**
- Le parcours n'est pas daté. La formation n'indique que l'année en cours, la frise du site passe
  de « Collège » à « Licence » sans date, et le guide LinkedIn conseille explicitement : « retirer
  les dates […] on n'affiche pas la date d'entrée réelle ». Un redoublement ou une réorientation
  n'a rien de grave. Le masquer, si, quand l'entreprise le découvre sur l'attestation. Je
  préférerais une ligne honnête.
- Le premier stage (mai-juillet 2026) a eu lieu avant l'année de L3. Dans quel cadre (stage de L2,
  stage facultatif) ? Le CV ne le dit pas, et une entreprise rigoureuse le demandera.
- La lettre 05 a un trou au milieu : « [Une phrase sur l'entreprise : sur quel type de sujet tu te
  vois chez eux, et pourquoi.] ». C'est la seule partie personnalisée. Si elle est bâclée, la
  lettre devient interchangeable.

**Phrases « IA » ou « déjà lues 100 fois »**
- « Je peux vous rencontrer ou vous rappeler au moment qui vous convient. » : correct, un peu
  téléphoné.
- CV : « Je cherche un stage où l'on me confie un sujet de ce genre, avec quelqu'un qui relit mon
  code. » : bonne idée, mais je la retrouve sur le CV, sur le site (« quelqu'un pour relire mon
  code ») et sur LinkedIn (« où quelqu'un relit mon code »). À la troisième lecture, ça sent la
  formule.
- Site : « Ce que j'en retiens : le problème technique n'était pas celui que je croyais. » :
  conclusion de rapport de stage classique.

**Phrases qui sonnent faux ou exagérées**
- « Prototype complet » (CV), alors que le site précise « Ce que le prototype ne prouve pas : la
  tenue à 40 000 utilisateurs, l'authentification centralisée, les pièces jointes ». « Complet »
  est de trop.
- « Français et anglais courants » : à appuyer par une certification (TOEIC, etc.) si elle existe.
  Les entreprises la demandent souvent pour les conventions à l'international.

**Questions en entretien (ou en rendez-vous au bureau des stages)**
- Quelle est votre année d'entrée en licence, et quel a été votre parcours depuis le bac ?
- Le stage à la DSI était-il obligatoire dans votre cursus ? Quelle note pour le rapport et la
  soutenance ?
- Votre maquette pédagogique impose-t-elle une durée minimale ou une date de fin (jury,
  soutenance) ? Août est-il compatible avec la soutenance ?
- Votre rapport de stage a-t-il été rédigé avec une IA ? Votre tuteur pédagogique le savait-il ?

**Ce qui ferait le plus monter ma note**
- Dater honnêtement le parcours (bac, entrée en licence) et préciser le cadre du stage 2026
  (« stage de L2 » ou « stage facultatif sous convention »).
- Vérifier les dates exactes autorisées par la convention de L3 et les reporter telles quelles
  (« du X avril au Y août, 22 semaines maximum »).
- Remplacer « Prototype complet » par « Prototype fonctionnel ».

**Avis sur l'autre variante (CV méthode)** : l'encadré IA est clair et prudent (« Données
sensibles : modèles en local »), mais il soulève la question de l'intégrité académique. Pour mes
partenaires prudents (collectivités, santé), je conseillerais le classique.

**Portfolio (3 remarques)**
1. Clair, bien rangé, et la section stage est un excellent complément au rapport. Le paragraphe
   sur les limites du prototype est ce que j'aimerais lire dans tous les rapports.
2. L'usage de l'IA se voit et est assumé (« Je code avec des agents IA, surtout Claude Code. Je
   préfère le dire clairement »). La transparence me convient. En revanche, le style très lissé
   de tout le site me fait me demander quelle part du rapport de 37 pages est de lui.
3. La frise sans dates (« Collège », « Licence ») accentue le flou sur le parcours. Sur un
   portfolio, ce n'est pas grave. À côté d'un CV, je le remarque.

**LinkedIn proposé** : corriger les dates fausses et supprimer le faux « stage » de 2 ans 6 mois
est indispensable. En revanche, je déconseille de retirer toutes les dates de la formation pour
cacher l'année d'entrée : c'est la seule consigne du guide qui pose un problème de cohérence.

---

## Synthèse agent D

| Profil | Global | Convocation | Portfolio |
|---|---|---|---|
| P6 Julien (ESN) | 13/20 | 45 % | 14/20 |
| P8 Marc (agence) | 13/20 | 50 % | 16/20 |
| P11 Amandine (université) | 13/20 | 55 % | 14/20 |

Les 3 critiques les plus importantes :
1. **Le parcours n'est pas daté, et le guide LinkedIn propose de cacher l'année d'entrée.** Ça
   fragilise la crédibilité dès qu'on vérifie (P11, et P6 au moment de la convention).
2. **La lettre et le CV « agence » ne prouvent pas le métier de l'agence** (intégration de
   maquettes, CMS, front pur). L'expérience principale reste de l'intégration back entre deux GLPI
   (P8, et P6 pour la stack Java).
3. **Le site et les textes se reconnaissent comme produits avec un agent** (esthétique
   standardisée, formules complices, triades, mêmes phrases recopiées du CV au site puis à
   LinkedIn). Aucun des trois n'est hostile, mais tous voudront vérifier en entretien ce qui
   vient du candidat seul.
