# Round 1 : agent B (P2, P3, P13)

Documents lus : CV méthode et CV classique (PNG + texte), lettres 01, 03 et 05 (texte et aperçus PNG). Portfolio non jugé.

---

## P2 : Thomas, 34 ans, lead dev, scale-up fintech (150 personnes)
*Reçoit : CV méthode + lettre 01. Méfiant envers les « vibe coders » qui ne savent pas debugger.*

```
PROFIL: P2
humain: 7/10 | credibilite: 6/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 7/10 | design: 8/10 | ton: 7/10 | envie: 6/10 | convocation: 25% | global: 11/20
```

Mon premier réflexe en voyant l'encart « Comment je travaille », c'était : encore un qui fait générer son code. Puis j'ai lu l'expérience UPEC, et ça m'a calmé un peu. « un garde-fou empêche la synchronisation de tourner en boucle », ça, c'est un vrai problème qu'on rencontre quand on fait de la synchro bidirectionnelle, et quelqu'un qui n'a fait que du prompt ne pense pas à l'écrire. « j'ai testé et écarté trois pistes (plugin natif, webhooks, synchronisation automatique) » : bien, il y a eu de la réflexion avant de coder. Donc je ne le jette pas. Mais je ne suis pas convaincu non plus.

**3 points forts**
- L'expérience UPEC est décrite comme un problème avec des contraintes, et pas comme une liste de technos. Le ticket miroir et la boucle de synchro, c'est concret.
- La lettre a une anecdote qui sonne vraie : « mon tuteur a ajouté la synchronisation retour à la liste, au moment où je pensais avoir terminé ». Changement de périmètre en cours de route, comme dans la vraie vie.
- Le « Labo perf » avec Web Vitals mesurés en direct, c'est vérifiable. Je cliquerai, ne serait-ce que pour voir si c'est du vent.

**3 points faibles**
- Le mot « test » n'apparaît qu'une fois sur le CV, sous la forme d'un « je teste » vague. Aucun test unitaire, pas de CI, pas de Jest, Vitest ou Playwright. Chez nous, tout passe en revue avec des tests. Pour quelqu'un qui délègue à une IA, c'est justement ce que je veux voir.
- Aucune histoire de debug. Ma vraie question, c'est : quand l'agent se trompe, est-ce que tu sais trouver où ? Rien ne me le prouve.
- « je leur confie le mécanique et une partie de la relecture » (lettre). Déléguer la relecture à l'agent, c'est exactement ce qui me fait peur. Ça contredit un peu « je relis chaque modification ».

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je cherche ce genre de problème : un vrai besoin, des contraintes, et à la fin quelque chose qui tourne et que je sais expliquer. » Rythme ternaire bien huilé, ça sent la phrase travaillée pour l'effet.
- « dans une équipe qui livre souvent et qui regarde ce que les utilisateurs font vraiment de ce qu'elle construit » : vu dans 50 lettres pour des startups.
- « C'est plus parlant que ce paragraphe. » : la formule est sympa la première fois, mais elle sonne « copywriting ».

**Phrases qui sonnent faux ou exagérées**
- « Développeur web full-stack » comme titre, pour un L3 qui a fait 2 mois de stage. « Étudiant développeur » serait plus honnête.
- « je ne garde que le code que je peux expliquer ligne par ligne » : je vais le vérifier, et c'est rarement vrai.
- « Server Actions » dans la liste des technos : c'est une feature de Next.js, pas une compétence. Ça fait remplissage.
- « Mon expérience la plus sérieuse date de cette année. » : si la lettre part en janvier 2027, « cette année » devient faux.

**Questions en entretien**
- Le garde-fou contre la boucle de synchro, il marche comment exactement ? Champ marqueur, comparaison de timestamps, idempotence ? Et si deux mises à jour arrivent en même temps ?
- Pourquoi avoir écarté les webhooks ? GLPI les gère-t-il bien ?
- Raconte-moi un bug que l'agent a introduit et que tu as trouvé toi-même. Comment ?
- Live coding sans IA, 20 minutes : un petit endpoint et son test.
- Server Actions : où s'exécute le code, et quels sont les risques de sécurité ?

**Ce qui ferait le plus monter ma note**
- Ajouter une ligne de tests (« tests d'intégration sur la synchro avec X ») et une vraie histoire de debug, même en une phrase.
- Remplacer « une partie de la relecture » par quelque chose qui montre que c'est lui qui relit, et que l'agent ne fait qu'aider.
- Retirer « Server Actions » de la ligne techno, ou la remplacer par quelque chose de mesurable.

**Avis sur l'autre variante (classique)** : plus neutre, mais je préfère paradoxalement la méthode : au moins je sais à quoi m'en tenir sur l'IA et je peux le challenger.

---

## P3 : Sophie, 46 ans, chargée de recrutement, banque (siège à La Défense)
*Reçoit : CV classique + lettre 03. Ne connaît pas Claude Code ; trie 200 CV, 30 secondes chacun.*

```
PROFIL: P3
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 5/10 | differenciation: 5/10 | design: 7/10 | ton: 6/10 | envie: 5/10 | convocation: 25% | global: 11/20
```

En 30 secondes, je vois : nom, « Stage de 2 à 5 mois · à partir d'avril 2027 », L3 à l'UPEC, un stage à la DSI d'une université, « mobile Paris et La Défense » (bien vu, ça me rassure sur le trajet). Les mots-clés passent : TypeScript, API REST, SQL, Docker. Ce que les managers me demandent souvent, en revanche, c'est Java, Spring, Angular ou .NET, et ici Java est rangé dans « Vu en cours ». Je le mets dans la pile « peut-être » et je le transmets si le manager cherche du web moderne.

**3 points forts**
- C'est propre, une page, et l'information clé (dates, durée, lieu) est en haut. Je n'ai pas à chercher.
- Le stage à la DSI est décrit en langage compréhensible même pour moi : « Les étudiants devaient pouvoir écrire au support de la DSI sans jamais accéder au GLPI interne du personnel. »
- La lettre est structurée et sobre, et la formule de politesse est correcte. La phrase sur le rapport (« quelqu'un d'autre doit pouvoir reprendre le travail ») parlera à un manager de banque.

**3 points faibles**
- La durée est floue : « 2 à 5 mois » dans le CV, « avril à août 2027 » dans l'objet de la lettre. Chez nous, les offres de stage ont une durée précise, et la convention doit la couvrir. Je veux savoir combien de mois exactement l'école autorise.
- Peu de lien avec la banque. Le paragraphe « [Entreprise] m'intéresse parce que » est le seul endroit où il pourrait l'être, et c'est le paragraphe le plus court.
- Les liens github.io et le projet « Todo Smart » ne me disent rien. Je ne clique pas. Je ne vois pas de mention de méthodologie (agile, Scrum), un mot-clé que mes managers attendent souvent.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « J'y chercherais un cadre où apprendre les pratiques d'une équipe établie (revue de code, tests, mise en production), tout en prenant en charge un vrai sujet. » Je l'ai lue sous 30 formes différentes.
- « Je me tiens à votre disposition pour un entretien. » : standard, correct, aucune personnalité.
- « Pendant mon stage à la DSI de l'UPEC, j'ai fait communiquer deux logiciels qui n'avaient pas le droit de partager leurs données. » : je ne trouve pas que ça sonne IA, mais « n'avaient pas le droit » m'a fait relire deux fois.

**Phrases qui sonnent faux ou exagérées**
- « Développeur web full-stack » en titre : pour moi, c'est un étudiant. Ça ne me choque pas, mais mes managers tiquent parfois.
- « J'ai étudié trois approches avant d'en retenir une » : bien, mais en 2 mois, ça fait beaucoup pour un stagiaire. À vérifier.
- L'accroche du CV est décontractée (« quelque chose qui tourne ») alors que la lettre est très formelle. Ce n'est pas le même registre.

**Questions en entretien (entretien RH)**
- Quelle durée exacte, et votre université peut-elle signer une convention jusqu'à fin août ?
- Pourquoi la banque ? Que savez-vous de notre DSI ?
- Comment s'est passée la relation avec votre tuteur ? Un désaccord ?
- Le travail en équipe : combien de personnes, quel était votre rôle ?
- Java : quel niveau réel ?

**Ce qui ferait le plus monter ma note**
- Une durée unique et claire (ex. « 5 mois, avril à fin août 2027, convention UPEC »).
- Un paragraphe « pourquoi vous » concret et spécifique à la banque (sécurité, réglementation, outils internes), ce qui fait le lien avec « données qui n'ont pas le droit d'être partagées ».
- Ajouter Java/Spring à un niveau honnête s'il a fait un vrai projet avec, et le mot « méthode agile » si c'est vrai.

**Avis sur l'autre variante (méthode)** : je ne connais pas « Claude Code ». En banque, la mention d'agents IA et de données sensibles, je la ferais valider par la conformité, ça complique le dossier. Je garde la classique.

---

## P13 : Hélène, 61 ans, DRH, PME industrielle familiale
*Reçoit : CV classique + lettre 05. Hostile, très traditionnelle.*

```
PROFIL: P13
humain: 6/10 | credibilite: 6/10 | clarte: 7/10 | pertinence: 4/10 | differenciation: 4/10 | design: 6/10 | ton: 4/10 | envie: 3/10 | convocation: 8% | global: 8/20
```

La lettre commence par « Bonjour, » et finit par « Bien à vous, ». Pour une candidature, chez nous, c'est « Madame, Monsieur » et une vraie formule de politesse. Je ne l'écarte pas pour ça, mais ça commence mal. Ensuite, elle est très courte. On me dit d'ailleurs que c'est la version « quand on n'a pas le temps de faire mieux », et ça se voit. Je ne sais pas pourquoi ce jeune homme écrit à une entreprise de mécanique plutôt qu'à une autre.

**3 points forts**
- Le CV est propre, sans faute, et le stage à l'université est expliqué en français compréhensible.
- Le bénévolat au refuge et le piano depuis 8 ans : ça montre de la constance, c'est une bonne chose.
- Il donne des dates, un lieu et un téléphone. C'est simple à traiter.

**3 points faibles**
- Le ton : « Bonjour, », « Bien à vous, », « même pour un échange de dix minutes, je suis disponible ». Ce dernier bout de phrase fait un peu supplier.
- Le vocabulaire : « ticketing », « full-stack », « front », « API REST », « Web Vitals ». Je ne comprends pas la moitié, et notre directeur non plus.
- Rien sur notre métier : pas de mot sur l'industrie, la production ou les outils internes d'une PME. La phrase « Je pense pouvoir être utile à [Entreprise] sur [un type de sujet] » sera remplie, mais il faudrait qu'elle dise vraiment quelque chose.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Si mon profil vous intéresse » : très vu.
- « je développe des projets que j'utilise vraiment » : le « vraiment » sert à me convaincre, alors je doute.

**Phrases qui sonnent faux ou exagérées**
- « Île-de-France, le [date] » : on écrit le nom d'une ville, pas d'une région. Et il n'y a pas d'adresse postale dans l'en-tête.
- « Dessin, et un faible pour les belles interfaces » : ce n'est pas un loisir, c'est de la décoration pour le CV.
- Le lien « haniwanice.github.io/Protail-design-upec » : « Protail » au lieu de « Portail ». Une faute dans un lien sur un CV, ça me fait tiquer.
- « Vu en cours » : en cours de quoi ? Les cours à la fac, ou c'est en cours d'apprentissage ? C'est ambigu.
- La photo : une écharpe, et le regard qui part vers le haut, loin de l'objectif. C'est une photo de profil de réseau social, pas une photo de CV.
- « Designer UX/UI, mission indépendante » : il était auto-entrepreneur, il a été payé, ou c'était un service rendu à un ami ?

**Questions en entretien**
- Pourquoi une PME industrielle ? Vous savez ce que nous fabriquons ?
- Qu'est-ce que vous pourriez faire chez nous concrètement, avec notre ERP et notre intranet ?
- La mission « Keewic » : c'était un contrat ? Qui vous payait ?
- Vous comptez rester en Île-de-France après vos études ? Master ?
- Comment vous organisez-vous quand on ne vous dit pas quoi faire ?

**Ce qui ferait le plus monter ma note**
- Une lettre formelle (« Madame, Monsieur », formule de politesse complète, ville et adresse), et un paragraphe sur l'entreprise : ce qu'on fait, et ce qu'il pourrait y apporter (outil interne, site, petit logiciel de suivi).
- Moins de jargon anglais dans la lettre, avec une phrase compréhensible par quelqu'un qui n'est pas informaticien.
- Une photo classique, de face, sans écharpe. Et corriger « Protail ».

**Avis sur l'autre variante (méthode)** : l'encart sur les « agents IA » qui codent à sa place me ferait refuser le dossier : je veux quelqu'un qui sait faire, pas quelqu'un qui fait faire.
