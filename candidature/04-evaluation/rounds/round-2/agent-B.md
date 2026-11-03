# Round 2 · Agent B (P2, P3, P13)

Documents lus : CV méthode et classique (PNG), lettres 01, 03 et 05 (texte et aperçu de la 03), captures du portfolio (desktop 1-6, mobile 1 et 3, labo 1-2), guide LinkedIn. Simulateur GLPI testé avec Playwright sur http://localhost:3100/#stage : transmission, résolution côté DSI, deuxième transmission, « Simuler une panne ».

Ce que le test a montré :
- La transmission affiche un vrai journal d'appels (`initSession`, `GET dsi/search/Ticket?name=[ESCALADE ETU - ID:42]`, `POST dsi/Ticket → 201`, `killSession (finally)`). La deuxième transmission se termine par « déjà présent : rien à créer (anti-doublon) ».
- La résolution côté DSI remonte jusqu'à l'étudiant, avec la ligne « auteur = compte API → on ne renvoie rien (anti-boucle) ».
- La panne donne `POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"}` puis « faux succès détecté : code 200, erreur dans le corps », et rien n'est modifié côté étudiant. C'est cohérent avec le CV.
- Petits défauts :
  - La ligne d'état « Prêt. Deux bases séparées, aucun ticket côté DSI. » reste affichée alors qu'il y a déjà des tickets côté DSI.
  - Le bouton « Transmettre encore » reste actif sur un ticket « Résolu », et le bouton « Résoudre » sur un ticket déjà résolu.
  - Une fois la panne activée, le bouton s'appelle « API DSI en panne », mais rien n'indique clairement comment revenir à l'état normal.

---

PROFIL: P2
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 7/10 | design: 7/10 | ton: 8/10 | envie: 7/10 | convocation: 40% | global: 13/20
portfolio: 14/20 | portfolio_humain: 5/10 | portfolio_ux: 8/10

Thomas, 34 ans, lead dev dans une scale-up fintech (150 personnes). Il a reçu le CV méthode et la lettre 01. Il se méfie des « vibe coders » qui ne savent pas debugger.

**3 points forts**
- Les bugs sont nommés précisément, et ce sont de vrais bugs d'intégration : « détection des faux « 200 OK » de GLPI », « sessions API fermées même en cas d'erreur », « Coupe-circuit contre les boucles ». Le simulateur les montre vraiment, avec `finally` et `ERROR_GLPI_ADD` dans le corps d'une réponse 200. Un vibe coder ne sait pas pourquoi ça compte. Lui, au moins, sait le raconter.
- Il a écarté des options et il dit pourquoi : « Webhooks et transfert natif testés puis écartés, raisons à l'appui ». C'est exactement ce que je demande à un junior.
- La lettre 01 raconte une scène vraie et précise : « À la première démo, mon tuteur a demandé que la clôture d'un ticket d'un côté ferme aussi l'autre. Trois jours plus tard ça marchait, avec en prime une boucle infinie [...] ». Pas de « passionné », pas de liste de qualités.

**3 points faibles**
- Aucun test automatisé, nulle part. Pas de Jest, Vitest ni Playwright dans les compétences, et « je teste avant de committer » ne dit pas comment. En fintech, c'est le premier sujet que j'aborde, et c'est d'autant plus important quand le code vient d'un agent.
- Le lien entre les tickets repose sur une balise dans le titre (« lien gardé par une balise dans le titre », « regex sur le titre → ID étudiant 42 »). Un technicien qui renomme le ticket casse le lien. Et « chercher puis créer » n'est pas atomique : deux clics simultanés créent un doublon. Le CV ne dit pas qu'il en a conscience.
- Le labo perf est un épouvantail construit sur mesure : latence simulée à 700 ms, 120 000 lignes triées dans le navigateur. « 53 → 98 » mesure surtout la taille du piège tendu à la version naïve. C'est honnête, puisque la page « Les limites de cette démo » le dit, mais ça ne prouve pas qu'il sait optimiser une application qu'il n'a pas sabotée lui-même.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Ces deux bugs m'ont plus appris que tout le reste du stage. » (la chute de manuel)
- « un sous-agent qui relit avec une autre grille que la mienne » (jargon d'outil, sans dire ce que contient cette grille)
- Sur le site : « Il n'est pas en ligne droite, et c'est très bien comme ça. », « Asynchrone, élégant sur le papier. », « Aucun ticket étudiant n'est arrivé ici. C'est voulu. », « Les meilleurs endroits pour débloquer un bug. »

**Phrases qui sonnent faux ou exagérées**
- « Prototype complet » : complet, sans authentification centralisée ni pièces jointes (le site le reconnaît lui-même).
- « Je développe avec Claude Code au quotidien » à côté de « Je relis chaque diff » : je le crois à moitié tant que je ne l'ai pas vu debugger sans l'agent.

**Questions en entretien**
1. Deux escalades du même ticket arrivent à 50 ms d'intervalle. Que se passe-t-il ? Comment l'empêcher ?
2. Un technicien de la DSI renomme le ticket miroir. Qu'est-ce qui casse ?
3. Montre-moi le `finally` qui ferme les sessions. Que se passe-t-il si `killSession` échoue lui-même ?
4. Exercice de 20 minutes sans agent : corriger un bug dans un petit service TypeScript.
5. Dans le labo, pourquoi le FCP est-il identique (0,8 s) entre la version naïve, rendue côté client, et la version optimisée ?

**Ce qui ferait le plus monter ma note** : une ligne « tests » concrète (« Vitest sur la couche de synchronisation, N cas : doublon, boucle, faux 200 »), et une phrase qui reconnaît la fragilité du lien par le titre (« external_id non filtrable par l'API de recherche, d'où la balise dans le titre »). Le post LinkedIn le dit déjà, le CV non.

**Autre variante de CV** : le CV classique est le même sans l'encart IA, et il serait un peu moins intéressant pour moi. L'encart me rassure plus qu'il ne m'inquiète, parce qu'il annonce une méthode.

**Portfolio**
- Le simulateur GLPI est la meilleure chose du dossier : on voit les appels, l'anti-doublon et le faux 200. Mais l'état reste incohérent (« Prêt. [...] aucun ticket côté DSI » alors que le ticket #1087 est affiché), et on peut cliquer « Transmettre encore » sur un ticket résolu. Ce sont des cas limites non testés, c'est-à-dire précisément ce que je reproche aux projets faits avec un agent.
- Ça sent l'agent : la palette beige et terracotta, le grand titre à empattements, les intertitres barrés, les triades « Ce que je fais / Ce que j'ai prouvé / Ce que je cherche », les formules courtes et ciselées. Le fond, lui (dates, erreurs, choix écartés), sonne vrai. Ça ne me gêne pas tant qu'il assume, et il assume (« Je préfère le dire clairement »). Ce qui me gênerait, ce serait qu'il ne sache pas expliquer le code du simulateur.
- La page labo est propre et honnête sur ses limites (« La latence de l'API naïve est simulée »), et c'est rare. Le tableau Lighthouse daté (« 3 novembre 2026. Médiane de 3 passages ») est un bon réflexe.

**LinkedIn** : les textes sont sobres et précis. Le post 1 (« lire avant d'écrire », external_id non filtrable) est exactement ce que j'aimerais lire d'un junior, et il devrait figurer dans le CV.

---

PROFIL: P3
humain: 7/10 | credibilite: 7/10 | clarte: 7/10 | pertinence: 5/10 | differenciation: 6/10 | design: 7/10 | ton: 7/10 | envie: 5/10 | convocation: 20% | global: 11/20
portfolio: 12/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10

Sophie, 46 ans, chargée de recrutement dans une banque (siège à La Défense). Elle a reçu le CV classique et la lettre 03. Elle ne connaît pas Claude Code, trie 200 CV et passe 30 secondes sur chacun.

**3 points forts**
- En 5 secondes, je sais tout ce qu'il me faut : « Stage développeur web · avril à août 2027 (2 à 5 mois) », Île-de-France, L3 UPEC. Les dates et la durée sont compatibles avec mon calendrier.
- Une vraie expérience en entreprise, datée au jour près (« 4 mai – 1er juil. 2026 (8 semaines) »), dans une DSI. Pour moi, une DSI, c'est un environnement sérieux, avec des règles.
- La lettre 03 respecte les codes : objet, « Madame, Monsieur », formule de politesse complète, une page aérée. La phrase « sans exposer le GLPI interne du personnel [...] des règles de confidentialité » parle à une banque.

**3 points faibles**
- Le jargon : « faux « 200 OK » de GLPI », « Coupe-circuit contre les boucles », « sessions API ». Je ne comprends pas, je ne peux pas le transmettre au manager avec un avis, alors je passe.
- Le profil est une licence universitaire, pas une école d'ingénieurs. Nos offres de stage IT ciblent souvent du bac+4/5 ou de l'alternance. Il n'y a rien sur l'environnement bancaire (sécurité, conformité, Java), même si « pratiqué Java et C en licence » limite un peu les dégâts.
- La lettre 03 parle surtout de lui et de son stage. Le paragraphe sur nous tient en une ligne entre crochets (« [raison précise : ...] »). S'il le remplit avec une banalité, la lettre retombe dans la pile.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je me tiens à votre disposition pour un entretien. » (standard, ce qui ne me gêne pas)
- « Ce stage m'a aussi appris ce que coûte un détail négligé. » (tournure de « leçon apprise » un peu attendue)
- « Je suis prêt à me former sur la stack de vos projets. » : « stack » est un anglicisme, je dirais « vos outils » ou « vos technologies ».

**Phrases qui sonnent faux ou exagérées**
- Rien de franchement exagéré. Peut-être « rapport de 37 pages » : je ne sais pas si c'est beaucoup ou peu, donc ça ne m'apporte rien.

**Questions en entretien**
1. Pourquoi une banque ? Qu'est-ce qui vous attire dans notre secteur ?
2. Expliquez-moi votre stage comme si je n'étais pas informaticienne.
3. Poursuite en master : où, et en alternance ?
4. Comment travaillez-vous avec des règles de confidentialité strictes ?

**Ce qui ferait le plus monter ma note** : une phrase d'accroche sans jargon (« un outil qui permet aux étudiants de contacter le support informatique sans voir les données du personnel », ce qui est presque déjà le cas), et une vraie raison de choisir la banque dans la lettre. Mentionner Java en premier plutôt que TypeScript pour nous.

**Autre variante de CV** : le CV méthode, avec son encart « Je développe avec Claude Code », me ferait hésiter. Je ne sais pas ce que c'est, et en banque, « outil d'IA » déclenche une question de conformité. La phrase « modèles en local (Ollama, LM Studio) » ne me rassure pas, parce que je ne comprends pas ce qu'elle veut dire.

**Portfolio**
- J'y passe une minute. Le haut de page est clair (nom, photo, « Ce que je cherche », gros bouton CV), et la version mobile est propre.
- « On en parle autour d'un café ? » et l'horloge « Paris, 16:37 » font trop startup pour une banque. Ça ne m'éliminerait pas, mais ça m'éloigne.
- La section « Comment je travaille » (« Je code avec des agents IA, surtout Claude Code ») est franche. Je la transmettrais au manager avec un point d'interrogation plutôt qu'un plus. Je ne vois pas que le site a été fait avec une IA, et ça m'est égal tant qu'il le déclare.

**LinkedIn** : le titre A est long mais clair (« Je cherche un stage d'avril à août 2027 »). Je le trouverais en recherche par mots-clés. Le passage d'« Open to Work » en « recruteurs uniquement » me va très bien.

---

PROFIL: P13
humain: 6/10 | credibilite: 7/10 | clarte: 7/10 | pertinence: 5/10 | differenciation: 5/10 | design: 6/10 | ton: 6/10 | envie: 4/10 | convocation: 15% | global: 10/20
portfolio: 9/20 | portfolio_humain: 4/10 | portfolio_ux: 6/10

Hélène, 61 ans, DRH d'une PME industrielle familiale. Elle a reçu le CV classique et la lettre 05. Elle est hostile à l'IA et très traditionnelle.

**3 points forts**
- Une lettre courte, polie et sans esbroufe. Elle se termine par la bonne formule (« Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées. »), et ce n'est plus si courant.
- Les centres d'intérêt rassurent : « Piano depuis 8 ans », « Bénévole dans un refuge pour chiens ». C'est un garçon constant, qui s'engage.
- GLPI, j'en ai un chez nous pour le parc informatique. Un stagiaire qui l'a déjà manipulé est concrètement utile à mon responsable informatique.

**3 points faibles**
- La lettre 05 pourrait être envoyée à n'importe qui. La seule phrase sur nous est entre crochets, et le reste parle de « Next.js, TypeScript, une API REST et Docker », ce qui ne veut rien dire pour moi. Je ne sais pas pourquoi il écrit à une PME industrielle.
- La photo : écharpe, regard au loin, pose de magazine. Pour un CV, je préfère un visage de face, une tenue plus nette.
- « Stage développeur web » : nous n'avons pas de site à développer, nous avons un ERP, des tableurs et un intranet. Rien n'indique qu'il s'intéresserait à nos besoins (outils internes, automatisation, support).

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je peux vous rencontrer ou vous rappeler au moment qui vous convient. » (ça va, mais c'est passe-partout)
- « En dehors des cours, je développe des projets dont je me sers au quotidien, et des démos visibles sur haniwanice.com. » : la phrase est bancale (« je développe [...] des démos visibles »).

**Phrases qui sonnent faux ou exagérées**
- Sur le site : « Je construis des applications web, et je peux vous expliquer pourquoi elles tiennent debout. » C'est bien assuré pour un étudiant de licence.
- Sur le site : « sans que les deux bases ne se touchent ». Le « ne » après « sans que » est de trop, et je le remarque.
- « Personne ne me l'a demandé. » (à propos de la refonte du portail) : est-ce de l'initiative ou de l'indiscipline ? Je poserais la question.

**Questions en entretien**
1. Pourquoi une entreprise industrielle, et pas une start-up ?
2. Savez-vous travailler sans ces outils d'intelligence artificielle ? Montrez-moi.
3. Comment réagissez-vous quand votre responsable vous dit non ?
4. Qu'avez-vous fait avant la licence ? (Le parcours avant la L3 n'est pas daté.)

**Ce qui ferait le plus monter ma note** : remplir le crochet de la lettre 05 avec une phrase vraiment écrite pour nous (« vos outils internes », « votre GLPI », « l'atelier »), et une photo plus classique. Dans la lettre, dire qu'il sait aussi faire du support, documenter et former des utilisateurs, ce dont nous avons vraiment besoin.

**Autre variante de CV** : le CV méthode, avec « Je développe avec Claude Code », passerait directement à la corbeille chez moi. Je ne veux pas d'un stagiaire qui fait faire son travail par une machine.

**Portfolio**
- Je n'y serais pas allée sans la lettre. Une fois dessus : de grands titres, des pages noires, « On en parle autour d'un café ? ». Ça fait agence de communication, pas sérieux. Le paragraphe « Je code avec des agents IA » confirme ma crainte, et apprendre que le site lui-même a été fait avec une IA me gêne : qu'est-ce qui est de lui ?
- Je reconnais l'honnêteté de « Ce que le prototype ne prouve pas [...] Je l'ai écrit noir sur blanc dans mon rapport de 37 pages ». C'est ce qui me ferait rester.
- La phrase « Si vous travaillez sans IA, je travaille sans IA » me rassure un peu, à condition qu'il le prouve en entretien.

**LinkedIn** : propre et sans emoji, ce qui me convient. Je n'irais pas lire trois posts techniques. Le texte « Infos » est clair, mais il ne s'adresse pas à une entreprise comme la mienne.
