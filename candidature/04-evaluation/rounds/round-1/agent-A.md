# Round 1 : agent A (P1, P4, P9)

Documents lus : CV méthode (PNG + HTML), CV classique (PNG + HTML), lettres 01, 02 et 04 (texte + aperçus). Le portfolio n'est pas jugé.

---

## P1 : Camille, 29 ans, CTO, startup SaaS B2B (12 personnes, Paris 11ᵉ)
Reçoit : CV méthode + lettre 01

```
PROFIL: P1
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 7/10 | convocation: 40% | global: 13/20
```

Je lis une quinzaine de candidatures de stage par mois, la plupart avec la même liste React/Node et un todo. Celle-ci me raconte un vrai problème (un pont entre deux GLPI, avec une séparation des données imposée), et c'est assez rare pour que je m'y arrête. L'encart « Comment je travaille » me parle : il dit ce que je veux entendre, mais je ne crois que ce que je vérifie. Je n'ai rien contre l'IA, j'ai quelque chose contre le code que personne ne comprend.

**3 points forts**
- L'expérience UPEC est racontée comme un problème, pas comme une liste de techno : « Les étudiants devaient pouvoir écrire au support de la DSI sans jamais accéder au GLPI interne du personnel. » En une phrase, je comprends l'enjeu.
- Des détails d'ingénieur qui ne s'inventent pas facilement : « un garde-fou empêche la synchronisation de tourner en boucle », « testé et écarté trois pistes ». Ça me donne des questions à poser, donc envie de l'appeler.
- La lettre assume l'IA sans en faire un argument marketing : « Je code beaucoup avec des agents comme Claude Code, et je préfère le dire tout de suite. » Et le renvoi vers une démo mesurable (Web Vitals en direct) plutôt qu'un adjectif, c'est le bon réflexe.

**3 points faibles**
- Aucune trace de tests, de CI, de revue de code en équipe ni d'utilisateurs réels. Pour une startup qui livre en prod, c'est le trou principal. « Prototype » revient partout : je ne sais pas si quelqu'un s'en sert.
- Le « Labo perf » promet beaucoup mais le CV ne donne aucun chiffre. « comme on la croise souvent, puis optimisée » : optimisée de combien ? Un LCP avant/après sur une ligne et je serais convaincue avant même de cliquer.
- La partie IA est déclarative. « règles de projet, skills, sous-agents pour la relecture » : tout le monde peut écrire ça en 2026. Je veux voir un dépôt avec un CLAUDE.md, un historique de commits lisible, une PR où l'agent a eu tort.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « dans une équipe qui livre souvent et qui regarde ce que les utilisateurs font vraiment de ce qu'elle construit » : c'est le copier-coller du discours startup, je l'ai lu dans la moitié des lettres de l'année.
- « Je ne garde que ce que je sais expliquer. » / « je ne garde que le code que je peux expliquer ligne par ligne » : c'est juste, mais devenu une formule. Répétée dans le CV et la lettre, elle s'use.
- « C'est plus parlant que ce paragraphe. » : sympa la première fois, mais ça ressemble à un effet de style travaillé.

**Phrases qui sonnent faux ou exagérées**
- « Développeur web full-stack » en titre, pour un L3 avec deux mois de stage : je tique un peu, sans que ça me bloque.
- Petite incohérence entre CV et lettre : le CV dit avoir « écarté […] synchronisation automatique », la lettre raconte que le tuteur a ajouté « la synchronisation retour » et qu'« elle tournait pour la présentation finale ». Je comprends probablement la nuance (sync déclenchée vs automatique), mais à la lecture rapide on dirait une contradiction.
- « Les limites du prototype sont écrites noir sur blanc dans un rapport de 37 pages » : le nombre de pages n'est pas un argument pour moi, la qualité de la section « limites » l'est.

**Questions en entretien**
1. Le garde-fou anti-boucle : comment il marche concrètement ? Un champ marqueur, une table de correspondance, un hash ? Que se passe-t-il si l'API GLPI répond en erreur au milieu ?
2. Pourquoi les webhooks ont-ils été écartés ? Pourquoi des Server Actions plutôt qu'un worker ou un cron ?
3. Montre-moi une modification proposée par l'agent que tu as refusée, et pourquoi.
4. Sur le labo perf : quelle métrique a le plus bougé, et quelle optimisation l'explique ?
5. Comment tu écris tes tests aujourd'hui, et est-ce que l'agent les écrit à ta place ?

**Modifications qui feraient le plus monter ma note**
- Un chiffre dans « Labo perf » (ex. LCP x s → y s) et une ligne « tests » quelque part (même modeste).
- Un lien GitHub direct vers le code du pont GLPI (ou une version anonymisée) plutôt que seulement le rapport.
- Lever l'ambiguïté « synchronisation automatique écartée » / « synchronisation retour ajoutée ».

**Avis sur l'autre variante (CV classique)** : correct mais plus fade ; sans l'encart IA, je perdrais la seule info qui me dit comment il travaillerait chez nous.

---

## P4 : Gérard, 58 ans, DSI, conseil départemental
Reçoit : CV classique + lettre 04

```
PROFIL: P4
humain: 7/10 | credibilite: 7/10 | clarte: 7/10 | pertinence: 7/10 | differenciation: 5/10 | design: 6/10 | ton: 7/10 | envie: 5/10 | convocation: 30% | global: 11/20
```

Je reçois peu de candidatures et je les lis jusqu'au bout. Je repère la première faute. La lettre est propre, la formule de politesse est la bonne, ça me change. Et le jeune a travaillé sur GLPI : on l'utilise ici, mes techniciens vivent dedans. C'est ce qui le sort du lot. En revanche le CV fait « startup » : la photo en écharpe qui regarde ailleurs, Next.js partout, « full-stack »… Je ne suis pas une start-up.

**3 points forts**
- GLPI, MariaDB, séparation des données, un outil en production à ne pas casser : c'est notre quotidien. « il fallait respecter la séparation des données, ne rien casser dans un outil en production et rester compréhensible pour les techniciens du support » : c'est la meilleure phrase de la lettre, elle montre qu'il a compris ce qu'est une DSI.
- La lettre est formelle, sans faute, sans familiarité. Ouverture « Madame, Monsieur », clôture complète. Il a fait l'effort.
- « Mon tuteur m'a souvent rappelé qu'en DSI, une partie du travail consiste à expliquer à des non-techniciens pourquoi une solution simple en apparence peut être un piège. » : c'est vrai, et c'est rare qu'un étudiant le dise. Le rapport documenté aussi me plaît.

**3 points faibles**
- Une faute dans le CV, et dans une adresse en plus : « haniwanice.github.io/Protail-design-upec ». « Protail » au lieu de « Portal » ou « Portail ». Sur un projet qui s'appelle « Refonte du portail », ça fait désordre. Je le note.
- Le CV ne parle pas notre langue : rien sur la sécurité, le RGPD, les sauvegardes, Windows/Active Directory, la maintenance applicative. Next.js et Vercel, je n'en ferai rien ici.
- Le ton du CV est plus relâché que la lettre : « un faible pour les belles interfaces », « Je m'en sers tous les jours, c'est donc moi qui trouve les bugs en premier », « Bénévolat : promenades de chiens en refuge ». Rien de grave, mais ce n'est pas le registre de la lettre. Et la photo en écharpe, de trois quarts, n'est pas une photo de CV professionnel.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je serais heureux de mettre cette expérience au service de [Établissement] » : formule standard, acceptable mais lue mille fois.
- « Je reste à votre disposition pour un entretien. » : classique, ça ne me gêne pas.
- « Je cherche ce genre de problème : un vrai besoin, des contraintes, et à la fin quelque chose qui tourne et que je sais expliquer. » : ça sonne slogan. « qui tourne », c'est du langage oral.

**Phrases qui sonnent faux ou exagérées**
- « Développeur web full-stack » : il est étudiant. « Étudiant en L3 Informatique, développement web » serait plus honnête.
- « J'ai conçu et codé le prototype » : seul ? Avec quel encadrement ? Je veux savoir.
- « c'est cette expérience qui me fait candidater chez vous » : « candidater » passe, mais je préfère « postuler ». Détail de vieux, je l'assume.
- « Responsive Web Design, freeCodeCamp, certification en ligne […] Environ 40 h » : 40 heures, ce n'est pas une certification au sens où je l'entends. Je ne la mettrais pas sous « Formation ».

**Questions en entretien**
1. Qui a validé l'architecture ? Le prototype a-t-il été mis en production, et sinon pourquoi ?
2. Comment avez-vous géré les droits et les comptes de service entre les deux GLPI ? Où étaient stockés les jetons d'API ?
3. Comment s'est passée la communication avec les techniciens du support ? Un exemple de désaccord.
4. Connaissez-vous les contraintes d'un marché public, de l'hébergement souverain, du RGPD ?
5. Êtes-vous prêt à travailler sur du PHP, du Java, des outils vieillissants, plutôt que sur du neuf ?

**Modifications qui feraient le plus monter ma note**
- Corriger « Protail » (et relire toutes les URL).
- Pour une DSI publique : une ligne sur les aspects sécurité/droits/RGPD du projet GLPI, et une compétence « maintenance, documentation, support utilisateurs » mise en avant.
- Une photo plus sobre (face, fond neutre) et un titre « Étudiant en L3 Informatique » plutôt que « Développeur full-stack ».

**Avis sur l'autre variante (CV méthode)** : l'encart « Je code avec des agents IA (Claude Code) » me ferait réfléchir à deux fois. La phrase sur les modèles en local pour les données sensibles me rassure un peu, mais je n'ai pas envie qu'un stagiaire branche quoi que ce soit sur nos données.

---

## P9 : Inès, 31 ans, design lead, studio digital
Reçoit : CV méthode + lettre 02

```
PROFIL: P9
humain: 6/10 | credibilite: 6/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 6/10 | design: 7/10 | ton: 7/10 | envie: 6/10 | convocation: 25% | global: 11/20
```

Je juge d'abord à l'œil, en cinq secondes. Le CV est au-dessus de la moyenne : quelqu'un a choisi ses polices. Mais je cherche un dev front qui comprend le design, et le CV est titré « full-stack », avec une expérience principale sur de la synchro de tickets. La lettre essaie de rattraper ça. Je veux surtout voir le portfolio : c'est lui qui décidera.

**3 points forts**
- Typographie choisie et cohérente : un serif display pour le nom, une grotesque propre pour le texte, une mono pour les métadonnées. L'accent rouille est utilisé avec retenue (titres de section, liens, tirets). La hiérarchie est lisible à 1 m de l'écran.
- La mission Keewic (Figma, parcours, passage au dev) est exactement le profil hybride que je cherche, et la lettre la raconte bien : « J'ai appris à défendre un choix d'interface, et aussi à en abandonner un quand l'argument d'en face était meilleur. »
- L'ouverture de la lettre (le stage de 3e, « une page HTML bancale ») est humaine, courte et crédible. Ça se lit.

**3 points faibles**
- Positionnement flou : la lettre demande un stage « front-end », le CV dit « Développeur web full-stack », et le premier bloc d'expérience parle de MariaDB et de Docker. Pour une agence, la partie design devrait remonter.
- Le visuel a des défauts que je vois tout de suite :
  - trois familles de polices plus la mono, c'est la limite ;
  - la mono est trop utilisée : contacts, dates, tags techniques, sous-titres de formation. Elle perd sa fonction de marqueur, et « freeCodeCamp, certification en ligne / 2025 » se coupe mal sur trois lignes ;
  - l'encart beige « Comment je travaille » déborde à gauche de la marge de la colonne : c'est voulu, mais ça casse l'alignement ;
  - le bloc « Stage de 2 à 5 mois » en pastille ressemble à un bouton.
- Rien de visible sur le travail de design lui-même : pas de lien Figma, pas de capture, pas de lien vers Keewic. « Dessin, et un faible pour les belles interfaces » dans les loisirs ne remplace pas une preuve.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Mon portfolio (haniwanice.com) est ma meilleure lettre de motivation » : je l'ai lu au moins cinquante fois. Supprime-la, laisse le lien parler.
- « C'est le genre de travail où la différence se joue sur des détails que le client ne saura pas nommer, mais qu'il sentira. » : jolie formule, trop jolie. Ça ressemble à une phrase de chatbot à qui on aurait demandé une lettre « sensible au design ».
- « Je viens du design autant que du code. » : déjà lu, et contredit par un CV qui met le code devant.

**Phrases qui sonnent faux ou exagérées**
- « un prototype complet livré en deux mois » : « complet » et « prototype » se contredisent un peu.
- « les animations, l'accessibilité et le poids des pages sont là pour être inspectés » : c'est un défi. S'il y a un seul contraste insuffisant ou un focus invisible, la candidature tombe. Bon pari si c'est solide, mauvais sinon.
- « Je serais content d'en parler avec vous » : un peu léger pour finir.

**Questions en entretien**
1. Sur Keewic : montre-moi un écran que tu as refait trois fois, et pourquoi.
2. Comment tu passes d'une maquette Figma à du CSS : tokens, grille, unités ? Tu as un design system de référence ?
3. Pourquoi ces polices sur ton CV ? Et pourquoi la mono pour les contacts ?
4. Qu'est-ce qui t'a fait choisir l'accessibilité comme argument ? Quel test tu fais avant de livrer ?
5. Sur la refonte du portail UPEC : as-tu montré la proposition à de vrais utilisateurs ?

**Modifications qui feraient le plus monter ma note**
- Pour la variante agence : titre « Développeur front-end / UI » et mission Keewic remontée, avec un lien vers les maquettes (ou une capture du portfolio).
- Réduire la mono aux seuls liens et dates, réaligner l'encart beige sur la colonne, corriger « Protail » dans l'URL.
- Remplacer « Mon portfolio est ma meilleure lettre de motivation » par un détail précis de ce qu'on y trouve (une animation, un choix typographique).

**Avis sur l'autre variante (CV classique)** : même mise en page, donc même jugement visuel ; le projet « compagnie aérienne » en CRUD Laravel n'apporte rien pour moi, je préfère la version méthode.
