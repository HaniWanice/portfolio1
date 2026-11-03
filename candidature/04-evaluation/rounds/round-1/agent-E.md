# Round 1, agent E (P10, P12, P15)

Documents lus : CV méthode et CV classique (PNG + texte), lettres 01, 03, 05, messages 06, aperçus PNG des lettres 01 et 03. Les [crochets] sont considérés comme correctement remplis.

---

## P10, Paul, 45 ans, architecte logiciel, grand groupe industriel défense/aéro

Reçoit : CV classique + lettre 03.

```
PROFIL: P10
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 5/10 | differenciation: 6/10 | design: 7/10 | ton: 7/10 | envie: 5/10 | convocation: 20% | global: 11/20
```

Je reçois beaucoup de profils « web full-stack » qui veulent surtout faire du React. Chez nous, le web, c'est des outils internes (Java/Spring, Angular, parfois du .NET), sur des réseaux cloisonnés, avec des contraintes de confidentialité qui ne se discutent pas. Ce candidat a au moins une expérience qui parle ma langue : isoler deux systèmes et les faire communiquer sans fuite. C'est ce qui le sort du lot. Le reste (Next.js, Vercel, Firestore) est loin de mon environnement.

**3 points forts**
- Le projet GLPI à la DSI : cloisonnement de deux instances, passerelle par API, « garde-fou » contre les boucles. C'est exactement le type de raisonnement que je veux voir chez un stagiaire qui travaillera sur des systèmes séparés.
- « J'ai étudié trois approches avant d'en retenir une » et le rapport de 37 pages avec les limites (« montée en charge, authentification centralisée ») : démarche d'ingénieur, documentation, honnêteté sur les limites. Rare à ce niveau.
- Lettre 03 sobre, sans flagornerie, sans faute. Le paragraphe « quelqu'un d'autre doit pouvoir reprendre le travail » est juste.

**3 points faibles**
- Stack orientée startup/JS (Next.js, Vercel, Firestore, Server Actions). Java n'apparaît que dans « Vu en cours ». Pour moi, c'est le cœur du poste.
- Une seule expérience pro de 2 mois, dans une université. Rien sur les tests, l'intégration continue, la qualité (pas un mot sur les tests automatisés dans le projet GLPI).
- Rien sur la sécurité au sens où je l'entends (authentification, gestion des droits, durcissement) alors que le sujet s'y prêtait. « Authentification centralisée » est citée comme limite, pas comme quelque chose qu'il a approfondi.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « J'y chercherais un cadre où apprendre les pratiques d'une équipe établie (revue de code, tests, mise en production), tout en prenant en charge un vrai sujet. »
- « Je me tiens à votre disposition pour un entretien. » (formule standard, acceptable dans ce registre)
- Dans le CV : « Je cherche ce genre de problème : un vrai besoin, des contraintes, et à la fin quelque chose qui tourne et que je sais expliquer. » Agréable mais construit comme une accroche de LinkedIn.

**Phrases qui sonnent faux ou exagérées**
- « Développeur web full-stack, en L3 Informatique » : titre ambitieux pour 2 mois d'expérience. « Étudiant en L3, développement web » serait plus juste.
- « Dans une équipe de plusieurs personnes, j'ai vu que cette partie compte autant que le code » : quelle équipe ? Le CV laisse penser qu'il était seul sur le prototype.
- « deux logiciels qui n'avaient pas le droit de partager leurs données » : en fait ils partagent bien des tickets via la passerelle. La formulation est élégante mais imprécise ; je la reformulerais en « sans exposer l'outil interne ».
- Coquille dans une URL : « haniwanice.github.io/Protail-design-upec ». Chez nous, une faute dans un livrable, ça se remarque.

**Questions en entretien**
- Comment la passerelle s'authentifie-t-elle auprès des deux GLPI ? Où sont stockés les jetons d'API ? Qui y a accès ?
- Qu'est-ce qui empêche un étudiant de lire un ticket d'un autre étudiant via votre application ?
- Quels tests avez-vous écrits ? Comment avez-vous vérifié le « garde-fou » contre les boucles ?
- Êtes-vous à l'aise pour travailler en Java, sur un poste sans accès Internet, sans assistant de code ?
- (Contrainte administrative propre au secteur : délais d'habilitation éventuels, à vérifier avec les RH, pas avec lui.)

**Modifications qui feraient le plus monter ma note**
- Pour les candidatures industrie/défense : remonter Java (et un projet Java concret, même scolaire) et ajouter une ligne sur les tests et la sécurité du prototype GLPI (authentification, droits, journalisation).
- Corriger « Protail ».
- Remplacer « Développeur web full-stack » par un intitulé plus modeste.

**Avis sur l'autre variante (CV méthode)** : l'encart « Je code avec des agents IA (Claude Code) » me ferait hésiter fortement ; la phrase sur les modèles locaux et « Si l'équipe préfère s'en passer, je suis ses règles » rattrape un peu, mais je ne l'enverrais jamais chez nous.

---

## P12, Karim, 30 ans, dev senior, PME éditrice de logiciel (fait passer les tests techniques)

Reçoit : CV méthode + lettre 01.

```
PROFIL: P12
humain: 7/10 | credibilite: 6/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 7/10 | envie: 7/10 | convocation: 40% | global: 12/20
```

J'utilise l'IA tous les jours, donc l'encart ne me choque pas ; au contraire, il est mieux formulé que 90 % de ce que je vois. Mais mon travail, c'est de trouver où ça ne tient pas, et il y a quelques incohérences techniques que je vais creuser. Je le convoquerais quand même, parce que les détails donnés (ticket miroir, boucle de synchro, pistes écartées) sont trop spécifiques pour être inventés, et que ça me donne de la matière pour un entretien technique intéressant.

**3 points forts**
- Le projet GLPI est décrit avec des détails d'ingénieur (« ticket miroir », « un garde-fou empêche la synchronisation de tourner en boucle »). Quelqu'un qui a vu une boucle de synchro l'a vraiment vécue.
- L'anecdote de la lettre : « mon tuteur a ajouté la synchronisation retour à la liste, au moment où je pensais avoir terminé ». Ça sonne vrai, c'est humain, et c'est la vraie vie d'un projet.
- Le Labo perf (même page écrite deux fois, Web Vitals mesurés en direct) : bonne idée, vérifiable, ça donne envie de cliquer. Et « Je ne garde que ce que je sais expliquer » est une promesse que je vais tester.

**3 points faibles**
- Incohérence dans le récit de la synchro : le CV dit qu'il a « testé et écarté trois pistes (plugin natif, webhooks, synchronisation automatique) », mais le prototype fait que « le statut redescend côté étudiant ». Si ce n'est ni webhook ni synchro automatique, c'est quoi ? Du polling ? Un bouton ? Ça doit être dit clairement, sinon je le piège dessus.
- Compétences listées sans preuve : Node.js et PHP/Laravel ne correspondent à aucun projet du CV méthode (le projet Laravel n'est que dans le classique). Firestore apparaît dans Todo Smart mais pas dans les compétences.
- « Server Actions » en tag : pour un appel à une API REST externe avec synchro, je veux savoir pourquoi Server Actions et pas des route handlers ou un worker. Ça sent le tag mis parce qu'il est à la mode.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « un problème simple à énoncer et pénible à résoudre » : tournure très « copywriting ».
- « dans une équipe qui livre souvent et qui regarde ce que les utilisateurs font vraiment de ce qu'elle construit » : jolie, mais générique, on la retrouve dans toutes les lettres « startup ».
- « C'est plus parlant que ce paragraphe. » : effet de style un peu calculé, je l'ai déjà vu.
- « Je les configure pour chaque projet, je leur confie le mécanique et une partie de la relecture » : correct, mais exactement le discours qu'un LLM recommanderait d'écrire.

**Phrases qui sonnent faux ou exagérées**
- « Les Web Vitals sont mesurés en direct dans le navigateur du visiteur, et pas recopiés d'un tableau » : mesurer LCP/CLS des deux versions dans le même navigateur, avec le cache, l'ordre de chargement, etc., ce n'est pas trivial. Si la démo compare deux pages chargées dans la même session, le protocole est discutable. Je demanderai.
- « Je m'en sers tous les jours, c'est donc moi qui trouve les bugs en premier. » : sympa, mais ça ne remplace pas des tests.
- « Développeur web full-stack » en titre, avec une expérience de 2 mois : ambitieux.
- « Protail-design-upec » dans l'URL : coquille, et pour quelqu'un qui revendique de tout relire, ça fait tache.

**Questions en entretien**
- Comment le statut redescend-il côté étudiant si vous avez écarté webhooks et synchro automatique ? Fréquence, coût, gestion des erreurs ?
- Montrez-moi le garde-fou anti-boucle. Comment l'avez-vous testé ? Que se passe-t-il si la DSI modifie le ticket pendant que la synchro tourne ?
- Pourquoi Server Actions ici ? Où vivent les jetons d'API ? Que se passe-t-il si une action est rejouée ?
- Exercice live sans agent : écrire une petite fonction de synchronisation idempotente, puis expliquer une partie du code du Labo perf que je choisis au hasard.
- Quelle partie de ce projet l'agent a-t-il écrite, et quelle partie a-t-il fallu réécrire ?
- Comment mesurez-vous les Web Vitals des deux variantes sans biais de cache ?

**Modifications qui feraient le plus monter ma note**
- Lever l'ambiguïté sur la synchronisation (dire en une ligne le mécanisme retenu : polling périodique, déclenchement à l'ouverture, etc.).
- Aligner compétences et preuves : retirer ce qui n'a pas de projet, ou citer le projet (Laravel, Firestore).
- Mentionner les tests (même quelques-uns) sur le projet GLPI.
- Corriger « Protail ».

**Avis sur l'autre variante (CV classique)** : plus neutre, ajoute le projet Laravel qui justifie PHP ; mais sans l'encart, on perd ce qui le différencie pour une équipe comme la mienne.

---

## P15, Claire, 43 ans, engineering manager, grand site e-commerce français

Reçoit : CV méthode + messages 06 (e-mail d'accompagnement) + lettre 05.

```
PROFIL: P15
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 7/10 | envie: 7/10 | convocation: 35% | global: 12/20
```

Je lis avec une grille : signaux de curiosité, d'autonomie, capacité à expliquer un choix, rapport à la qualité. Ce CV coche plus de cases que la moyenne des L3. Le Labo perf sur les Web Vitals est pile notre sujet (la performance front, c'est du chiffre d'affaires chez nous). L'e-mail et la lettre 05 sont courts et propres, ce qui me convient : je n'ai pas le temps de lire une page. Ce qui me retient : une seule vraie expérience, et une lettre 05 qui ne dit rien de nous.

**3 points forts**
- Autonomie démontrée : stage où il a « conçu et codé le prototype », exploré trois pistes avant de coder, documenté les limites. C'est exactement le comportement que je note « autonome » dans ma grille.
- Curiosité orientée produit et perf : Labo perf, Todo Smart utilisé au quotidien, refonte du portail par initiative personnelle, mission UX/UI avec « beaucoup de questions au porteur du projet ». Profil hybride dev/UX intéressant pour un front e-commerce.
- L'encart « Comment je travaille » est clair, structuré, et répond d'avance à ma question sur l'IA (relecture, tests, données sensibles). Peu de candidats le font.

**3 points faibles**
- Lettre 05 trop générique : « Je pense pouvoir être utile à [Entreprise] sur [un type de sujet...] » reste vague même rempli. Aucun lien avec l'e-commerce alors que son Labo perf est l'argument parfait pour nous.
- Aucune mention de tests automatisés, de revue de code, de travail en équipe sur une base de code partagée. Pour une équipe de plusieurs dizaines de devs, c'est ce qui conditionne l'intégration.
- L'e-mail d'accompagnement est correct mais plat : il ne dit pas en une phrase pourquoi l'ouvrir.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- Lettre 05 : « Si mon profil vous intéresse, même pour un échange de dix minutes, je suis disponible. »
- Relance : « Je suis toujours très intéressé par [Entreprise] et disponible pour un échange quand cela vous convient. »
- E-mail : « Vous trouverez mon CV et ma lettre en pièces jointes. »
- CV : « Dessin, et un faible pour les belles interfaces » : mignon, mais vu souvent.

**Phrases qui sonnent faux ou exagérées**
- « Je cherche ce genre de problème : un vrai besoin, des contraintes, et à la fin quelque chose qui tourne et que je sais expliquer. » : bien tourné, peut-être un peu trop pour être spontané.
- « Développeur web full-stack » pour un profil qui a surtout un stage de 2 mois.
- Durée : « Stage de 2 à 5 mois · à partir d'avril 2027 » sur le CV, « d'avril à fin août 2027 » dans les messages. Cohérent, mais je veux savoir si sa convention autorise vraiment 5 mois en L3.
- URL « Protail-design-upec » : coquille.

**Questions en entretien**
- Racontez-moi le moment où le tuteur a ajouté la synchronisation retour : comment avez-vous réorganisé votre travail ?
- Sur le Labo perf : qu'avez-vous changé entre les deux versions, et quel gain mesuré ? Lequel aurait le plus d'impact sur une fiche produit ?
- Avez-vous déjà travaillé à plusieurs sur le même dépôt (branches, PR, revue) ?
- Comment savez-vous qu'un code généré par un agent est correct, au-delà de « je le relis » ?
- Quelle durée de stage votre formation autorise-t-elle réellement ?

**Modifications qui feraient le plus monter ma note**
- Dans la lettre 05 (ou l'e-mail), une phrase qui fait le pont avec l'e-commerce : « mon Labo perf mesure les Web Vitals en direct, un sujet qui pèse sur la conversion ».
- Ajouter une trace de travail en équipe ou de tests (même un projet de groupe en licence, avec Git à plusieurs).
- Rendre l'e-mail d'accompagnement un peu plus incitatif (une ligne sur le projet phare).

**Avis sur l'autre variante (CV classique)** : solide et sans risque, avec en plus le projet Laravel ; mais je préfère la variante méthode, l'encart IA répond à une question que je poserais de toute façon.
