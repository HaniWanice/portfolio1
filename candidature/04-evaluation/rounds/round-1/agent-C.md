# Round 1 : agent C (P5, P7, P14)

Documents lus : CV classique et CV méthode (PNG et texte), lettre 01 (startup produit), lettre 04 (DSI secteur public) et leurs aperçus PNG. Les [crochets] sont considérés comme correctement remplis. Je n'ai pas jugé le portfolio.

Remarques communes aux trois lecteurs, relevées en lisant :
- **Faute dans une URL** : `haniwanice.github.io/Protail-design-upec` (« Protail » au lieu de « Portail »). C'est imprimé en rouge, donc très visible.
- **Petite incohérence technique** : le CV dit avoir « testé et écarté trois pistes (plugin natif, webhooks, synchronisation automatique) », mais il décrit aussi que « le statut redescend côté étudiant », et la lettre 01 explique que le tuteur a ajouté « la synchronisation retour ». La lettre 04, elle, ne parle plus que de deux pistes écartées (« le transfert natif et les webhooks »). Ça s'explique sans doute (escalade manuelle d'un côté, retour du statut de l'autre), mais un lecteur attentif va tiquer.
- L'aperçu PNG de la lettre 01 ne dit pas tout à fait la même chose que le .md pour la dernière phrase (« une question sur [...] » contre « une question à vous poser : [...] »). C'est sans importance pour un recruteur, mais il faut vérifier quelle version part.

---

## P5 : Nadia, 41 ans, responsable du pôle développement, DSI d'un CHU / université

Reçoit : CV classique + lettre 04.

```
PROFIL: P5
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 8/10 | differenciation: 6/10 | design: 7/10 | ton: 7/10 | envie: 7/10 | convocation: 45% | global: 13/20
```

Ce que je me dis en lisant : enfin un étudiant qui sait ce qu'est GLPI et qui a déjà vécu les contraintes d'une DSI publique. Le sujet (séparer les usagers des outils internes) est exactement le genre de chose qu'on a chez nous, entre les patients, les étudiants en santé et le personnel. Il va dans la pile « à appeler », mais pas tout en haut. La lettre reste générique pour un CHU : rien sur les données de santé ni sur le RGPD, alors que c'était l'occasion.

**Points forts**
1. Une expérience directement transposable : DSI universitaire, GLPI, API REST, Docker, MariaDB. C'est notre environnement.
2. La lettre insiste sur la bonne chose : « respecter la séparation des données, ne rien casser dans un outil en production et rester compréhensible pour les techniciens du support ». Ça montre qu'il a compris la culture d'une DSI.
3. La documentation : un « rapport de 37 pages » qui détaille « les choix, les limites et les pistes pour une mise en production ». Chez nous, un stagiaire qui documente vaut de l'or, parce que le stagiaire part et le code reste.

**Points faibles**
1. Aucun mot sur la donnée sensible. Pour un CHU, « séparation des données » ne suffit pas. Il faudrait dire au moins une fois RGPD, droits d'accès ou journalisation.
2. Le dernier paragraphe est passe-partout : « Je serais heureux de mettre cette expérience au service de [Établissement] […] Je reste à votre disposition pour un entretien. »
3. La faute « Protail » dans une URL. Chez nous, des agents vont lire ce qu'il écrit : ce genre de détail se remarque.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « Je serais heureux de mettre cette expérience au service de [Établissement] »
- « Je reste à votre disposition pour un entretien. »
- « Mon tuteur m'a souvent rappelé qu'en DSI, une partie du travail consiste à expliquer à des non-techniciens pourquoi une solution simple en apparence peut être un piège. » : l'idée est juste, mais la phrase a l'air un peu reconstruite pour la lettre.

**Phrases qui sonnent faux ou exagérées**
- « ne rien casser dans un outil en production » : d'après le CV, il a travaillé sur « deux instances GLPI isolées […] sous Docker Compose », donc sur un prototype. A-t-il vraiment touché à la production ? Sinon, il faut le formuler comme une contrainte de conception.
- « Développeur web full-stack » en titre, après deux mois de stage : c'est un peu ambitieux, mais c'est l'usage.

**Questions en entretien**
- Le prototype a-t-il été mis en production ? Sinon, qu'est-ce qui bloquait ?
- Comment gérez-vous l'authentification des étudiants et les droits sur les tickets miroirs ? Quelles données personnelles transitent entre les deux GLPI ?
- Le « garde-fou » contre la boucle de synchronisation : concrètement, comment marche-t-il ?
- Pourquoi Next.js pour un connecteur, plutôt qu'un script ou un plugin côté serveur ?
- Avez-vous écrit des tests ?

**Modifications qui feraient le plus monter ma note**
- Une phrase sur la protection des données (accès minimal, données personnelles qui transitent, traçabilité) dans la lettre 04 et dans la puce du CV.
- Remplacer le dernier paragraphe par un lien concret avec l'établissement visé.
- Corriger « Protail ».

**Avis sur l'autre variante (méthode)** : l'encart IA ne me braque pas. La phrase « Pour les données sensibles, j'utilise des modèles qui tournent en local » est même rassurante, mais je préfère en parler en entretien plutôt que de le lire en premier sur un CV.

---

## P7 : Léa, 27 ans, talent acquisition, startup en série A

Reçoit : CV méthode + lettre 01.

```
PROFIL: P7
humain: 6/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 7/10 | design: 8/10 | ton: 7/10 | envie: 6/10 | convocation: 35% | global: 11/20
```

Ce que je me dis en lisant : c'est propre, très propre. Trop propre, peut-être. Quand un candidat écrit lui-même « Je code avec des agents IA » et que tous ses documents ont la même petite musique travaillée, je me demande qui a écrit la lettre. Cela dit, il y a des détails qu'une IA n'invente pas : le tuteur qui ajoute une fonctionnalité pendant la démo, les promenades de chiens en refuge, « beaucoup de questions au porteur du projet ». Je le garde, mais je le passe au tech lead avec un point d'interrogation.

**Points forts**
1. L'honnêteté sur l'IA, assumée et cadrée : « je préfère le dire tout de suite ». Ça vaut mieux que les candidats qui le cachent.
2. L'anecdote de la démo de mi-parcours : « au moment où je pensais avoir terminé ». Elle est vraie, un peu vulnérable, et c'est la meilleure phrase de la lettre.
3. Le CV se lit en 30 secondes : titre, dates, accroche, un vrai projet en haut. Les liens donnent envie, surtout celui du labo perf.

**Points faibles**
1. Des tournures d'écriture « optimisée », avec des rythmes ternaires et des formules calibrées, qui déclenchent mon radar (voir ci-dessous).
2. Pas d'école d'ingé, une seule expérience de deux mois : face à 50 candidatures, le profil n'est pas évident à défendre auprès du CTO sans un argument de plus.
3. La lettre parle beaucoup du passé (UPEC) et presque pas de nous. Même une fois les crochets remplis, ça ne fera qu'une phrase sur l'entreprise.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « un problème simple à énoncer et pénible à résoudre » : c'est la formule symétrique typique.
- « dans une équipe qui livre souvent et qui regarde ce que les utilisateurs font vraiment de ce qu'elle construit » : du jargon de startup qu'on lit partout.
- « Je cherche ce genre de problème : un vrai besoin, des contraintes, et à la fin quelque chose qui tourne et que je sais expliquer. » : une énumération en trois temps, très « prompt ».
- « je ne garde que le code que je peux expliquer ligne par ligne » / « Je ne garde que ce que je sais expliquer. » : j'ai lu cette phrase dans au moins dix candidatures cette année.
- « C'est plus parlant que ce paragraphe. » : c'est mignon, mais ça sent la chute travaillée.

**Phrases qui sonnent faux ou exagérées**
- « Les limites du prototype sont écrites noir sur blanc dans un rapport de 37 pages » : « noir sur blanc » sonne un peu défensif.
- « et pas recopiés d'un tableau » : je ne comprends pas contre quoi il se défend.
- « Je m'en sers tous les jours, c'est donc moi qui trouve les bugs en premier. » : sympa, mais c'est une tournure à effet.

**Questions en entretien**
- Cette lettre, vous l'avez écrite comment ? Avec quel outil, et qu'est-ce que vous avez changé vous-même ?
- Pourquoi nous ? (Je vérifie que le paragraphe d'ouverture n'a pas été rempli à la va-vite.)
- Qu'est-ce que vous n'avez pas aimé dans votre stage à l'UPEC ?
- Est-ce que 5 mois maximum, d'avril à août, c'est ferme ?

**Modifications qui feraient le plus monter ma note**
- Casser deux ou trois formules trop léchées (« simple à énoncer et pénible à résoudre », la phrase sur le code « que je peux expliquer ligne par ligne », « plus parlant que ce paragraphe ») et les remplacer par des faits bruts.
- Mettre plus d'entreprise et moins de méthode dans la lettre : deux phrases réelles sur notre produit.
- Garder l'anecdote du tuteur, c'est elle qui fait humain.

**Avis sur l'autre variante (classique)** : plus neutre, et elle déclenche moins mon radar « IA ». Pour moi elle passerait aussi bien, voire mieux.

---

## P14 : Yanis, 26 ans, ingénieur IA, startup GenAI

Reçoit : CV méthode + lettre 01.

```
PROFIL: P14
humain: 7/10 | credibilite: 6/10 | clarte: 8/10 | pertinence: 5/10 | differenciation: 6/10 | design: 7/10 | ton: 6/10 | envie: 7/10 | convocation: 35% | global: 11/20
```

Ce que je me dis en lisant : cool, un étudiant qui configure ses agents, avec des skills et des sous-agents. C'est rare en L3. Mais l'encart est relégué en bas de page, et il s'excuse presque d'exister : « Si l'équipe préfère s'en passer, je suis ses règles. » Et surtout, il n'y a aucun projet qui touche à un LLM côté produit : ni appel d'API, ni RAG, ni évaluation. Pour une boîte GenAI, c'est un dev web qui utilise bien Claude Code, pas quelqu'un qui construit avec l'IA.

**Points forts**
1. L'usage décrit est mature : « Je découpe le travail, je relis chaque modification, je teste ». La mention des sous-agents pour la relecture montre qu'il a dépassé le stade du simple chat.
2. Le labo perf : mesurer les Web Vitals en direct plutôt qu'afficher des chiffres, c'est un réflexe de mesure que j'aime.
3. Le stage GLPI montre qu'il sait intégrer deux systèmes par API, avec idempotence et anti-boucle : c'est ce qu'on fait toute la journée avec des outils et des webhooks.

**Points faibles**
1. Zéro projet IA côté produit. Pas une ligne sur une API de LLM, un MCP, des évaluations ou un agent qu'il aurait construit.
2. Il affirme beaucoup sans rien prouver : « règles de projet, skills, sous-agents ». Où est le dépôt avec son CLAUDE.md ou sa config ? Rien n'y renvoie.
3. Un ton timide sur le sujet où il pourrait se démarquer. L'encart arrive en dernier dans la colonne, et la lettre dit « je préfère le dire tout de suite », comme on avoue une faute.

**Phrases qui sonnent « IA » ou « déjà lu 100 fois »**
- « je ne garde que le code que je peux expliquer ligne par ligne » : tous les devs qui utilisent l'IA écrivent ça en 2026.
- « dans une équipe qui livre souvent et qui regarde ce que les utilisateurs font vraiment de ce qu'elle construit »
- « je leur confie le mécanique et une partie de la relecture » : c'est flou. Quoi, concrètement ?

**Phrases qui sonnent faux ou exagérées**
- « Si l'équipe préfère s'en passer, je suis ses règles. » : ce n'est pas faux, mais ça ne s'adresse pas à moi. Ça affaiblit l'encart.
- « Je code beaucoup avec des agents comme Claude Code, et je préfère le dire tout de suite. » : il présente comme un aveu ce qui devrait être un argument.
- « sous-agents pour la relecture » : la mention est crédible, mais elle n'est étayée par aucun exemple.

**Questions en entretien**
- Montre-moi ta config : CLAUDE.md, skills, hooks. Qu'est-ce que tu as changé après un échec ?
- Un cas où l'agent t'a produit un bug subtil que tu as attrapé en relecture. Comment ?
- Tu as déjà appelé une API de LLM depuis du code ? Comment tu gérerais le streaming, les timeouts et le coût dans une app Next.js ?
- Ollama et LM Studio : quel modèle, pour quoi faire, et avec quelle qualité comparée ?
- Ton garde-fou anti-boucle : c'est un marqueur sur le ticket, un champ d'origine, autre chose ?

**Modifications qui feraient le plus monter ma note**
- Ajouter un petit projet qui utilise un LLM côté produit, même modeste (par exemple un tri automatique des tickets GLPI par LLM local, ce serait parfait et cohérent avec le stage).
- Lier un dépôt public qui montre la config d'agents (règles, skills, sous-agents) avec un exemple de session.
- Pour une cible IA, remonter l'encart « Comment je travaille » et supprimer la phrase d'excuse.

**Avis sur l'autre variante (classique)** : sans l'encart IA, il ne reste rien qui m'arrête. Pour moi, ce serait un CV de dev web L3 comme les autres.
