# Round 2, agent E : P10, P12, P15

Documents lus : CV méthode et CV classique (PNG), lettres 01, 03, 05, 06 (texte et aperçus PNG),
captures du portfolio (accueil desktop 1-6, mobile 1/3/4, labo 1-2), guide LinkedIn (textes à coller).
Test interactif du simulateur GLPI (#stage) avec Playwright sur http://localhost:3100 : transmission,
résolution côté DSI, retransmission, panne simulée.

Constats du test, utilisés plus bas :
- Transmettre #42 : le journal affiche `initSession` des deux côtés, la recherche `[ESCALADE ETU - ID:42]`,
  `POST dsi/Ticket → 201`, `PUT etu/Ticket/42`, puis `killSession (finally)`. C'est propre et lisible.
- Résoudre côté DSI : `regex sur le titre → ID étudiant 42`, puis `auteur = compte API → on ne renvoie rien (anti-boucle)`.
- Retransmettre un ticket déjà résolu : `déjà présent : rien à créer (anti-doublon)`. Le ticket DSI reste
  « Résolu ». Si l'étudiant relance parce que son problème n'est pas réglé, sa relance disparaît sans bruit.
- Panne : `POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"}` puis `faux succès détecté`. Bonne idée de démo.
- Défaut mineur : la ligne d'en-tête du journal reste « Prêt. Deux bases séparées, aucun ticket côté DSI. »
  alors qu'un ticket #1087 existe déjà côté DSI.
- Le bouton « Résoudre » reste affiché sur un ticket résolu (il est bien désactivé).

---

## P10 : Paul, 45 ans, architecte logiciel, grand groupe défense/aéro

Reçoit : CV classique + lettre 03.

```
PROFIL: P10
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 5/10 | differenciation: 6/10 | design: 8/10 | ton: 7/10 | envie: 5/10 | convocation: 20% | global: 11/20
portfolio: 12/20 | portfolio_humain: 5/10 | portfolio_ux: 8/10
```

Je recrute pour des équipes où le code ne sort pas du réseau interne et où l'usage d'un LLM en ligne
est interdit, point. Le CV classique ne parle pas d'IA, et la lettre 03 non plus. Je ne m'en
inquiéterais donc qu'en ouvrant le site. Je l'ouvrirai, parce que le lien est en tête du CV.

**Points forts**
1. Le sujet du stage est exactement le type de problème que je traite : cloisonnement de deux
   environnements, rien ne fuit de l'un vers l'autre. « Il s'agissait de permettre aux étudiants de
   contacter le support sans exposer le GLPI interne du personnel » : j'ai compris en une phrase.
2. Il documente les limites : « J'ai consigné ces choix, et les limites du prototype, dans un rapport
   de 37 pages destiné à la personne qui reprendra le projet. » Chez nous, la documentation compte
   autant que le code.
3. Le paragraphe sur les sessions est concret et modeste : « Des sessions API qui n'étaient pas
   fermées en cas d'erreur ont fini par saturer le serveur, et j'ai dû reprendre l'ensemble des appels ».

**Points faibles**
1. Rien ne parle de mon secteur. Pas de Java en contexte pro, pas de tests, pas de CI, pas de
   qualité logicielle formelle. « J'ai surtout travaillé en TypeScript et en PHP, et pratiqué Java et C
   en licence » : c'est honnête, mais mes équipes font du Java, du C++ et de l'embarqué.
2. Le profil est très orienté web front/produit (Figma, Lighthouse, design d'app mobile). Pour un poste
   d'architecture ou de back-end industriel, c'est loin.
3. Le site affiche « Je code avec des agents IA, surtout Claude Code » et un dépôt public avec les règles
   de l'agent. Pour moi, c'est un signal de risque, même avec « Rien de confidentiel dans un service en
   ligne ». Qui décide de ce qui est « sensible » ? Un stagiaire ne sait pas encore ce qui est classifié
   chez nous.

**Phrases qui sonnent IA ou « déjà lu 100 fois »**
- « en composant avec un outil existant, des règles de confidentialité et des utilisateurs qui ne sont
  pas développeurs » : trois éléments bien rangés, c'est un tic des textes générés.
- « Ce stage m'a aussi appris ce que coûte un détail négligé. »
- « Je suis prêt à me former sur la stack de vos projets. »
- « Je me tiens à votre disposition pour un entretien. » (formule standard, acceptable en ESN)

**Phrases qui sonnent faux ou exagérées**
- « Prototype complet » (CV) : un prototype validé sur un scénario, ce n'est pas « complet ».
- Site : « Ce que j'ai prouvé : deux mois à la DSI » : « prouvé » est fort pour un stage de L2/L3.
- Rien de faux à proprement parler. Les chiffres sont précis et vérifiables, c'est bon signe.

**Questions en entretien**
- Pourquoi deux instances plutôt que deux entités dans la même instance avec des droits stricts ?
  Qui a validé le modèle de menace ?
- Le compte API qui écrit dans les deux bases : quels droits a-t-il ? Où est stocké son jeton ?
  Si l'application Next.js est compromise, que voit l'attaquant ?
- Concrètement, sur votre stage DSI, quel code a été écrit par l'agent et lequel par vous ?
  Le code de la DSI est-il passé par un service en ligne ?
- Seriez-vous à l'aise pour coder sans aucun outil IA, sur un poste sans Internet ?

**Ce qui ferait monter ma note**
- Dans la lettre 03, une phrase qui montre qu'il connaît la contrainte : « Le code du stage est resté
  sur les machines de la DSI » (si c'est vrai). Ça répondrait d'avance à ma première question.
- Un projet en Java ou en C un peu plus que « projet de licence », même modeste, avec des tests.
- Remplacer « Prototype complet » par « Prototype fonctionnel ».

**Avis sur l'autre variante (CV méthode)** : l'encart « Comment je travaille » avec Claude Code
m'aurait fait refermer le CV ; la phrase « Pour le reste, je m'aligne sur les règles de l'équipe » ne
suffit pas à me rassurer sur un CV papier.

**Portfolio (12/20, humain 5/10, UX 8/10)**
1. Le simulateur GLPI est la meilleure pièce : le journal avec `killSession (finally)` et la détection
   du « faux succès » montrent qu'il a compris où ça casse. J'ai testé la panne, ça fonctionne.
2. Le site est construit avec un agent IA et ça se sent : textes très polis, rythme égal partout,
   formules comme « Le chemin, en six étapes. Il n'est pas en ligne droite, et c'est très bien comme ça. »
   et la triade « Ce que je fais / Ce que j'ai prouvé / Ce que je cherche ». Ça me gêne, mais moins le
   fait que ce soit dit que la question de ce qu'il sait faire seul.
3. La section « Les garde-fous » est la bonne idée, mal placée pour moi : « Si vous travaillez sans IA,
   je travaille sans IA » devrait figurer en premier, pas en troisième puce.

**LinkedIn proposé** : titre A sobre et factuel, à-propos sans « passionné », bon choix de ne pas
mentionner Claude Code par défaut ; je n'aurais rien à redire, sauf que je n'irais pas le chercher.

---

## P12 : Karim, 30 ans, dev senior, PME éditrice, fait passer les tests techniques

Reçoit : CV méthode + lettre 01.

```
PROFIL: P12
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 8/10 | design: 8/10 | ton: 8/10 | envie: 7/10 | convocation: 55% | global: 13/20
portfolio: 14/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

Je lis pour trouver la faille : ce qui ne tient pas, ou ce que le candidat ne saura pas défendre.
J'en ai trouvé quelques-unes, mais le niveau de détail est au-dessus de la moyenne des L3, et la
plupart des détails tiennent.

**Points forts**
1. Des détails qu'on ne trouve que si on a vraiment fait le travail : « détection des faux « 200 OK »
   de GLPI », « sessions API fermées même en cas d'erreur », et dans le post LinkedIn « J'aurais préféré
   utiliser le champ external_id ». Le simulateur confirme : `POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"}`.
2. Il raconte un bug provoqué par une demande imprévue : « À la première démo, mon tuteur a demandé que
   la clôture d'un ticket d'un côté ferme aussi l'autre. Trois jours plus tard ça marchait, avec en prime
   une boucle infinie ». C'est crédible et c'est la bonne histoire à raconter.
3. Le labo perf est mesurable et honnête sur ses limites : « La latence de l'API naïve est simulée
   (700 ms puis 450 ms) ». Peu de candidats écrivent ça.

**Points faibles (les pièges que je poserais)**
1. Lien entre tickets « gardé par une balise dans le titre » et récupéré par « regex sur le titre ».
   Un technicien DSI qui renomme le ticket casse la liaison, sans aucune alerte. C'est un choix
   défendable pour un prototype, mais il faut l'assumer comme une limite.
2. Pas de transaction : l'application crée le ticket DSI puis met à jour le ticket étudiant. Si le
   deuxième appel échoue, la recherche anti-doublon empêche de recréer le ticket DSI, mais l'étudiant reste
   en « Nouveau » sans savoir que sa demande est arrivée. Et dans le simulateur, si on retransmet un ticket
   déjà résolu, on obtient « déjà présent : rien à créer (anti-doublon) » : la relance de l'étudiant est
   perdue sans un mot. C'est la question que je poserais en premier.
3. Les chiffres du labo varient d'un support à l'autre : CV et lettre « 227 ko », mesure en direct
   « 179 ko » (page labo) et « 208 ko » (capture de l'accueil). Ça s'explique (Lighthouse contre mesure
   dans le navigateur, cache), et la page le dit, mais un lecteur pressé y verra une incohérence. Et une
   version « naïve » avec latence simulée et calcul de 120 000 lignes, c'est un homme de paille :
   53 → 98 impressionne moins quand on sait que la version lente est faite pour être lente.

**Phrases qui sonnent IA ou « déjà lu 100 fois »**
- « Ces deux bugs m'ont plus appris que tout le reste du stage. » (formule de chute classique)
- « un sous-agent qui relit avec une autre grille que la mienne » : formule de la doc d'outil, pas de
  l'expérience vécue. Qu'a-t-il attrapé, concrètement ?
- Site : « Je construis des applications web, et je peux vous expliquer pourquoi elles tiennent debout. »
  Bonne accroche, mais très « copywriting ».

**Phrases qui sonnent faux ou exagérées**
- « Ces deux bugs » : dans la lettre, il s'agit de la boucle et des sessions ; dans le post LinkedIn n°1,
  le bug fondateur est celui des clones (« la liste côté DSI s'est remplie de clones »), puis la boucle.
  Trois bugs, deux versions de l'histoire. En entretien, je vérifierais laquelle il raconte spontanément.
- « Prototype complet » : rien sur l'authentification, les pièces jointes, la montée en charge (et le site
  le dit lui-même : « Ce que le prototype ne prouve pas : la tenue à 40 000 utilisateurs,
  l'authentification centralisée, les pièces jointes »). « Complet » est donc contredit par le site.
- « une application Next.js / TypeScript qui écrit dans les deux via l'API REST, dans la même action » :
  « dans la même action » laisse entendre une atomicité qui n'existe pas.

**Questions en entretien**
- Le technicien renomme le ticket #1087. Que se passe-t-il au prochain changement de statut ?
- `POST dsi/Ticket` réussit, `PUT etu/Ticket/42` échoue. État final ? Comment le détecter ?
- L'étudiant relance un ticket résolu : que devrait faire le système ? Pourquoi le vôtre ne fait rien ?
- L'anti-boucle repose sur « auteur = compte API ». Et si un technicien utilise le même compte pour un script ?
- external_id : vous dites que la recherche ne filtre pas dessus. Vous avez vérifié comment ? Quelle version
  de GLPI ? (je veux voir s'il l'a vraiment testé ou s'il répète ce que l'agent lui a dit)
- Exercice : je vous donne un diff de 80 lignes généré par un agent, avec un bug. Trouvez-le en 10 minutes,
  sans IA.

**Ce qui ferait monter ma note**
- Remplacer « Prototype complet » par « Prototype fonctionnel » et retirer « dans la même action ».
- Ajouter une ligne de limites assumées sur le CV ou la lettre : « liaison par balise dans le titre,
  pas de reprise si le deuxième appel échoue ». Montrer qu'il connaît ses failles vaut plus qu'un 98.
- Dans le simulateur, gérer le cas « relance d'un ticket résolu » (réouverture côté DSI ou message clair).
- Aligner les poids affichés, ou écrire clairement « Lighthouse : 227 ko ; en direct, varie selon le cache ».
- Lien direct vers un vrai bout de code du pont (même anonymisé), pas seulement la simulation.

**Avis sur l'autre variante (CV classique)** : plus neutre et un peu plus long (projet Laravel en plus),
mais je préfère la méthode : l'encart Claude Code me donne des questions à poser.

**Portfolio (14/20, humain 6/10, UX 8/10)**
1. Le simulateur est le meilleur argument de la candidature : le journal des appels montre qu'il a pensé
   aux sessions, aux doublons, à la boucle et aux faux 200. Mais il expose aussi la faille de la relance
   d'un ticket résolu, et la ligne « Prêt. Deux bases séparées, aucun ticket côté DSI. » reste affichée
   après la création du #1087.
2. Construit avec un agent, et ça se sent dans la finition uniforme et les tics de rédaction (« et c'est
   très bien comme ça », « On en parle autour d'un café ? », figures isométriques « Hairline »). Ça ne me
   gêne pas : il le dit, et le dépôt est public. Ce qui m'intéresse, c'est s'il sait expliquer chaque fichier.
3. La page Labo est sérieuse (Lighthouse 12.8, médiane de 3 passages, profil mobile) ; dommage que la barre
   verte des « Requêtes » soit presque pleine pour 18 contre 20 : visuellement, on croit à un gros gain qui
   n'existe pas.

**LinkedIn proposé** : le post n°1 sur les clones est le meilleur texte de toute la candidature (concret,
external_id, coupe-circuit) ; il faut juste que la lettre raconte la même histoire.

---

## P15 : Claire, 43 ans, engineering manager, grand site e-commerce

Reçoit : CV méthode + message 06 (e-mail d'accompagnement) + lettre 05.

```
PROFIL: P15
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 7/10 | envie: 7/10 | convocation: 50% | global: 13/20
portfolio: 15/20 | portfolio_humain: 6/10 | portfolio_ux: 9/10
```

J'ai une grille d'entretien : autonomie, curiosité, capacité à apprendre, qualité du travail livré,
communication. Je regarde si le dossier me donne de quoi remplir chaque case.

**Points forts**
1. Autonomie démontrée : « Seul développeur sur le sujet, encadré par un ingénieur de la DSI ».
   Curiosité : « Webhooks et transfert natif testés puis écartés, raisons à l'appui ». Deux cases remplies.
2. Le labo perf parle directement à un site e-commerce : « Lighthouse mobile : score 53 → 98, affichage
   principal 15,1 s → 2,4 s, poids 4,2 Mo → 227 ko ». Une page produit, des Web Vitals : c'est notre quotidien.
3. Il dit ce qu'il cherche, et c'est ce que j'offre : « avec quelqu'un qui relit mon code ». L'e-mail
   d'accompagnement est court et va droit au but.

**Points faibles**
1. La lettre 05 est trop courte pour moi : un seul paragraphe de fond, et le seul élément qui me concerne
   dépendra de la phrase entre crochets. Si le crochet est rempli avec une généralité, la lettre ne dit
   rien de plus que le CV.
2. Incohérence d'intitulé : l'objet de l'e-mail dit « Stage développeur full-stack », le CV et la lettre disent
   « Stage développeur web ». Détail, mais on me l'envoie dans le même envoi.
3. Pas de trace de travail en équipe : pas de revue de code reçue, pas de ticket Jira, pas de sprint. Dans
   une équipe de 8 avec une PR review obligatoire, je ne sais pas comment il réagira à un refus de PR.
   « J'ai appris à défendre un choix d'interface, et à en lâcher un quand l'argument d'en face était
   meilleur » (site) va dans le bon sens, mais c'est sur le site, pas dans la lettre.

**Phrases qui sonnent IA ou « déjà lu 100 fois »**
- Lettre 05 : « Je peux vous rencontrer ou vous rappeler au moment qui vous convient. » (neutre, sans défaut,
  sans saveur)
- Lettre 05 : « En dehors des cours, je développe des projets dont je me sers au quotidien, et des démos
  visibles sur haniwanice.com. » (construction un peu bancale : on « développe des démos visibles » ?)
- Site : « La suite, peut-être chez vous » et « On en parle autour d'un café ? » : vu sur beaucoup de
  portfolios de 2026.

**Phrases qui sonnent faux ou exagérées**
- « Je l'utilise tous les jours depuis sa mise en ligne » (Todo Smart) : je le crois, mais c'est
  invérifiable, et ça revient trois fois (CV, site, LinkedIn).
- « Coupe-circuit contre les boucles » : jargon pour un CV, compréhensible par un dev, pas par un RH qui
  ferait le premier tri chez nous.

**Questions en entretien**
- Racontez une fois où votre tuteur a refusé ce que vous proposiez. Qu'avez-vous fait ?
- Le chemin retour ajouté « en pleine démo du 22 mai » : comment avez-vous replanifié ? Qu'est-ce qui a été
  sacrifié ?
- Sur une PR de 300 lignes produite avec Claude Code, comment je sais que vous l'avez comprise ?
- Sur notre page produit, par quoi commenceriez-vous pour gagner sur le LCP ?
- Qu'avez-vous appris tout seul cette année, sans que personne ne le demande ?

**Ce qui ferait monter ma note**
- Lettre 05 : ajouter une phrase sur le labo perf pour une cible e-commerce (« une page produit qui passe
  de 4,2 Mo à 227 ko »). C'est le pont le plus direct avec mon métier, et il manque dans la lettre courte.
- Aligner « full-stack » et « web » partout.
- Une phrase sur le travail avec d'autres : revue, tuteur, porteur de projet Keewic.

**Avis sur l'autre variante (CV classique)** : correct, mais sans l'encart « Comment je travaille » je perds
une des informations les plus utiles pour mon entretien ; je préfère la version méthode.

**Portfolio (15/20, humain 6/10, UX 9/10)**
1. Parcours très clair : on peut s'arrêter à n'importe quel endroit et savoir qui il est. Le bouton
   « Commencer par le stage » est une bonne idée de navigation pour un recruteur pressé ; la version mobile
   est propre, avec captures des projets.
2. Construit avec un agent IA, ça se sent (homogénéité de ton, micro-copywriting partout, horloge
   « Paris, 16:37 » décorative). Ça ne me gêne pas : la section « Comment je travaille » (Cadrer, Découper,
   Relire, Vérifier, Documenter) correspond à ce que j'attends d'un junior, et il l'assume.
3. Manque une preuve de collaboration et un vrai code à lire en deux clics (le lien du stage renvoie à une
   simulation, pas au code). Le « Je promène des chiens dans un refuge » et « Beaucoup d'Einaudi » humanisent
   bien : c'est la partie la moins IA du site.

**LinkedIn proposé** : solide et cohérent avec le CV (titre A, à-propos factuel, expérience corrigée) ;
je préférerais le titre B, qui met le labo perf en avant pour un e-commerce.

---

## Synthèse de l'agent E

| Profil | Global | Convocation | Portfolio | P. humain | P. UX |
|---|---|---|---|---|---|
| P10 Paul | 11/20 | 20% | 12/20 | 5/10 | 8/10 |
| P12 Karim | 13/20 | 55% | 14/20 | 6/10 | 8/10 |
| P15 Claire | 13/20 | 50% | 15/20 | 6/10 | 9/10 |

Les 3 critiques les plus importantes :
1. Le simulateur GLPI expose une faille fonctionnelle : retransmettre un ticket résolu donne « déjà présent :
   rien à créer (anti-doublon) », donc la relance de l'étudiant est perdue sans un mot. S'y ajoutent la liaison
   par balise dans le titre (cassée si on renomme) et l'absence de reprise si le second appel échoue. Un
   testeur technique le trouvera : il faut soit le corriger, soit l'écrire comme limite assumée.
2. « Prototype complet » et « dans la même action » (CV méthode) surpromettent, et le site lui-même les
   contredit (« Ce que le prototype ne prouve pas… »). Les chiffres du labo varient aussi d'un support à
   l'autre (227 / 208 / 179 ko), et l'histoire des « deux bugs » n'est pas la même dans la lettre 01 et
   dans le post LinkedIn n°1.
3. Le site se lit comme construit par un agent (formules polies, rythme égal, « et c'est très bien comme
   ça », « On en parle autour d'un café ? »). C'est acceptable pour P12 et P15, mais pour P10 (défense),
   l'affichage public de Claude Code sur le site est rédhibitoire tant que la phrase « Si vous travaillez
   sans IA, je travaille sans IA » n'est pas mise en avant. La lettre 03 n'aborde pas non plus la
   confidentialité du code du stage.
