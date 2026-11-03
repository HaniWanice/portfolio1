# Round 2, agent C : P5, P7, P14

Documents lus : CV classique, CV classique sans photo et CV méthode (PNG), lettres 01 et 04 (texte + aperçus PDF), captures du portfolio (desktop, mobile, labo), simulateur GLPI testé sur http://localhost:3100/#stage avec Playwright (transmission, résolution, seconde transmission, « Simuler une panne » : tout répond, le journal d'appels API s'affiche), guide LinkedIn (titre, infos, expérience, posts).

---

## P5 : Nadia, 41 ans, responsable du pôle développement, DSI d'un CHU / université

Reçoit : CV classique (je retiens la version sans photo, plus adaptée au public) + lettre 04.

```
PROFIL: P5
humain: 8/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 9/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 8/10 | convocation: 70% | global: 14.5/20
portfolio: 14/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

**Points forts**
1. Le stage est exactement notre métier : GLPI, cloisonnement de deux populations d'usagers, prototype hors production. « ne jamais toucher à l'instance de production » : c'est la phrase que j'attends d'un stagiaire qui arrive dans une DSI hospitalière.
2. Le paragraphe données est concret, sans jargon RGPD plaqué : « Le ticket transmis à la DSI ne contient que ce qui sert à traiter la demande, les jetons d'accès à l'API sont tenus hors du code, et tous les essais ont été faits sur des données fictives. » Minimisation, gestion des secrets, jeu de test fictif : c'est le bon réflexe.
3. Il annonce lui-même les limites : « les limites du prototype (authentification centralisée, montée en charge) ». Un stagiaire qui sait ce que son prototype ne fait pas, c'est rare.

**Points faibles**
1. La lettre ne dit rien de la façon dont il code. Je découvre ensuite sur le CV méthode (si on me le transfère) ou sur le portfolio une section entière « Je code avec des agents IA, surtout Claude Code ». Ce n'est pas rédhibitoire, mais j'aurais préféré l'apprendre de lui que de le découvrir. Chez nous, la première question sera : « qu'est-ce qui part chez Anthropic ? ».
2. Aucune mention d'authentification (CAS/Shibboleth, LDAP), alors que c'est le point bloquant de tout outil étudiant dans un établissement. Il le classe en limite, très bien, mais il ne dit pas s'il a regardé comment ça se brancherait.
3. La dernière phrase est un gabarit : « Je souhaiterais mettre cette expérience à profit au sein de [Établissement], par exemple sur [...] ». Si le crochet est bien rempli, ça passe ; sinon c'est la phrase de 80 % des lettres.

**Phrases « IA » ou déjà lues 100 fois**
- « Le sujet paraissait simple : » (accroche classique de récit).
- « Je souhaiterais mettre cette expérience à profit au sein de ».
- CV : « Je cherche un stage où l'on me confie un sujet de ce genre, avec quelqu'un qui relit mon code. » Sympathique, mais la même formule revient sur le site, le LinkedIn et le CV : ça devient un slogan.

**Phrases qui sonnent faux ou exagérées**
- CV : « Prototype complet ». Prototype oui, « complet » sans SSO et sans pièces jointes, non.
- Portfolio : « Ce que j'ai prouvé : [...] un prototype qui relie deux GLPI isolés, livré et documenté. » « Prouvé » est fort pour huit semaines.
- « proposer un outil que les techniciens du support puissent utiliser sans formation » : affirmé, pas démontré (testé avec qui ?).

**Questions en entretien**
- Où sont stockés les jetons API dans votre prototype, et qui y a accès ? Comment feriez-vous tourner les jetons ?
- Si on branchait le CAS de l'université, à quel endroit de votre application ça entre ?
- Concrètement, quand vous utilisez Claude Code sur un projet de la DSI, qu'est-ce qui sort de votre poste ? Avez-vous déjà codé ce projet sans IA ?
- Qu'avez-vous fait de vos conteneurs et données à la fin du stage ?

**Ce qui ferait le plus monter ma note**
- Une phrase dans la lettre 04 sur l'outillage : « J'utilise des assistants de code ; sur des données réelles, je m'en tiens aux règles de la DSI ou à des modèles locaux. » Mieux vaut le dire que me laisser le découvrir.
- Nommer l'authentification centralisée envisagée (CAS) et ce que l'API GLPI permet en profils/droits.

**Autre variante de CV (méthode)** : l'encart « Comment je travaille » est plutôt rassurant pour moi grâce à « Données sensibles : modèles en local (Ollama, LM Studio). Pour le reste, je m'aligne sur les règles de l'équipe. » Il ne me braquerait pas.

**Portfolio (P5)**
1. Le simulateur GLPI est le meilleur élément : on voit les vrais appels (`initSession`, recherche par balise `[ESCALADE ETU - ID:42]` avant création, `killSession` dans un `finally`). Pour une DSI, c'est plus parlant que n'importe quelle lettre.
2. La section « Les garde-fous » répond à ma question avant que je la pose : « Pas de secret, de clé ou de donnée personnelle dans un prompt » et « Si vous travaillez sans IA, je travaille sans IA ». Bon point.
3. On sent clairement l'agent IA dans l'écriture et la mise en scène : titres-phrases en grand serif, horloge « Paris, 16:37 », « C'est voulu. », citation en exergue. Ça ne me gêne pas tant que le candidat sait expliquer son code, mais le site est plus « studio » que ce que je vois chez un L3, et je testerai donc la maîtrise réelle en entretien.

**LinkedIn proposé** : sobre, factuel, le titre A (« Stage DSI : deux GLPI reliés sans exposer les données ») me parle directement. Le retrait des zones de recherche qui situent le domicile, c'est le bon réflexe.

---

## P7 : Léa, 27 ans, talent acquisition, startup série A

Reçoit : CV méthode + lettre 01.

```
PROFIL: P7
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 7/10 | envie: 7/10 | convocation: 50% | global: 12.5/20
portfolio: 12/20 | portfolio_humain: 4/10 | portfolio_ux: 8/10
```

**Points forts**
1. La lettre 01 est courte et contient une anecdote datée, qui ne sort pas d'un générateur : « À la première démo, mon tuteur a demandé que la clôture d'un ticket d'un côté ferme aussi l'autre. Trois jours plus tard ça marchait, avec en prime une boucle infinie et des sessions API qui ne se fermaient jamais. » Pas de « passionné », pas de « dynamique », pas de « rigoureux ».
2. Il dit lui-même qu'il code avec Claude Code et rend ses règles publiques. Mon filtre habituel (« ChatGPT écrit à sa place et le cache ») tombe : il ne cache rien.
3. Le CV méthode se lit en 30 secondes : accroche en deux lignes, une expérience, des chiffres (53 → 98, 4,2 Mo → 227 ko).

**Points faibles**
1. Les textes sont propres, *très* propres. Pas une coquille, des rythmes réguliers, des phrases qui se ferment toutes sur une chute. C'est exactement le profil de texte que je trie comme « passé dans une IA ». La différence ici, c'est qu'il est assumé, mais un recruteur pressé ne fera pas la nuance.
2. La lettre ne parle pas de nous : le premier crochet « [Deux phrases sur leur produit, que tu as testé...] » porte tout le travail de personnalisation. S'il le remplit mal, il ne reste que son stage.
3. Côté portfolio, le ton est à la limite du copywriting : formules à chute, tricolons, titres qui « racontent ».

**Phrases « IA » ou déjà lues 100 fois**
- Lettre : « Ces deux bugs m'ont plus appris que tout le reste du stage. » (morale de fin de paragraphe, typique).
- Lettre : « un sous-agent qui relit avec une autre grille que la mienne » (formule qui revient mot pour mot sur le site : « une grille différente de la mienne »).
- Site : « Le chemin, en six étapes. Il n'est pas en ligne droite, et c'est très bien comme ça. »
- Site : « Un vrai problème, des vraies contraintes, un tuteur exigeant. » (tricolon ; et « des vraies » au lieu de « de vraies »).
- Site : « Je construis des applications web, et je peux vous expliquer pourquoi elles tiennent debout. »
- Site : « Ce que je fais / Ce que j'ai prouvé / Ce que je cherche » ; « Cadrer / Découper / Relire / Vérifier / Documenter ».
- Site : « Aucun ticket étudiant n'est arrivé ici. C'est voulu. »
- Site : « Les meilleurs endroits pour débloquer un bug. » ; « C'est probablement de là que vient mon obsession pour les marges. »

**Phrases qui sonnent faux ou exagérées**
- « Je développe avec Claude Code au quotidien » : au quotidien, sur quoi, en dehors du portfolio ?
- « sans changer de framework » : la version naïve est volontairement naïve (calcul de 120 000 lignes dans le navigateur, images de 1 800 px). Le 53 → 98 mesure surtout l'écart avec une page sabotée.
- CV : « Je l'utilise tous les jours depuis sa mise en ligne. » Invérifiable, et ça sonne « argument ».

**Questions en entretien**
- Quelle partie de la lettre avez-vous écrite seul, et laquelle avec l'IA ?
- Racontez-moi la boucle infinie sans support : qu'est-ce qui déclenchait quoi ?
- Qu'est-ce que votre sous-agent de relecture a attrapé que vous n'aviez pas vu ? Un exemple.
- Pourquoi nous ? (pour vérifier que le crochet n'était pas du remplissage)

**Ce qui ferait le plus monter ma note**
- Laisser une ou deux aspérités : une phrase moins polie, une opinion. Retirer les morales en fin de paragraphe (« m'ont plus appris que tout le reste »).
- Un premier paragraphe réellement spécifique à l'entreprise : c'est lui qui fait passer la lettre de « bonne » à « je transmets au CTO ».

**Autre variante de CV (classique)** : plus neutre, perd le seul élément qui le distingue pour une startup (l'encart méthode) ; pour moi, la version méthode est meilleure.

**Portfolio (P7)**
1. Ça se sent fortement : rythme de landing page, phrases-chutes partout, citation en exergue, horloge en direct, titres barrés « essayé, puis écarté ». Pour mon biais, c'est le principal frein ; ce qui me retient de l'écarter, c'est qu'il le dit lui-même (« Je préfère le dire clairement ») et que le code est public.
2. Le simulateur et le labo sont des preuves tangibles, et ça compte plus que le texte : j'ai cliqué, ça répond, et les mesures varient d'un chargement à l'autre comme annoncé.
3. Trop long pour moi : six blocs avant le contact. Je n'ai pas lu « En dehors de l'écran » sur mobile. Le bouton « Commencer par le stage » est bien vu, en revanche.

**LinkedIn proposé** : nettement mieux que la moyenne, mais les trois posts ont la structure LinkedIn « accroche / anecdote / morale / appel » que je reconnais immédiatement (« Un graphique qui a l'air juste ne veut pas dire qu'il l'est. ») ; à humaniser avant publication.

---

## P14 : Yanis, 26 ans, ingénieur IA, startup GenAI

Reçoit : CV méthode + lettre 01.

```
PROFIL: P14
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 8/10 | convocation: 55% | global: 13/20
portfolio: 15/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

**Points forts**
1. Le workflow est décrit avec les bons mots, sans esbroufe : « un fichier de règles par projet, des étapes courtes, chaque diff relu avant le commit, et un sous-agent qui relit ». C'est la pratique d'une personne qui utilise réellement un agent, pas d'un étudiant qui a vu une démo.
2. Les règles sont publiques avec l'historique des commits : je peux vérifier en cinq minutes s'il pilote l'agent ou s'il le subit.
3. Le stage montre qu'il comprend les systèmes distribués de base : idempotence par recherche avant création, coupe-circuit anti-boucle, faux « 200 OK », sessions fermées en `finally`. C'est précisément ce qui distingue un dev qui utilise l'IA d'un « vibe coder ».

**Points faibles**
1. Trop timide pour moi : l'encart « Comment je travaille » est relégué en bas à gauche du CV, et sur le CV classique il disparaît. Chez nous, c'est l'argument numéro un.
2. Aucun projet *avec* un LLM dans le produit : pas d'appel d'API de modèle, pas de RAG, pas d'éval, pas d'outil MCP. Il utilise l'IA pour coder, il ne construit pas d'IA. Pour une startup GenAI, la pertinence est moyenne.
3. Aucune métrique sur l'usage de l'agent : temps gagné, part du code relue ou réécrite, ce que le sous-agent attrape. Ce serait le chiffre le plus différenciant du dossier.

**Phrases « IA » ou déjà lues 100 fois**
- « Ces deux bugs m'ont plus appris que tout le reste du stage. »
- Site : « Je construis des applications web, et je peux vous expliquer pourquoi elles tiennent debout. »
- Site : « Le plus dur a été de comprendre ce que la DSI avait le droit de faire, avant de chercher comment le faire. » (bonne idée, formulation de citation inspirante).

**Phrases qui sonnent faux ou exagérées**
- « Données sensibles : modèles en local (Ollama, LM Studio). » Avec quel modèle, pour quelle tâche ? Un modèle local de 7 à 8B n'est pas un agent de code équivalent ; ça sonne comme une case cochée pour rassurer.
- « détection des faux « 200 OK » de GLPI » : crédible, mais je veux le cas exact.

**Questions en entretien**
- Montrez-moi votre CLAUDE.md : qu'est-ce que vous y avez ajouté après une erreur de l'agent ?
- Votre sous-agent de relecture : quel prompt, quelle grille, un exemple de bug attrapé ?
- Quel modèle local, pour quoi faire, et quelles limites avez-vous constatées ?
- Si je vous donne une API de LLM et un jeu de tickets GLPI, comment construisez-vous un tri automatique, et comment l'évaluez-vous ?

**Ce qui ferait le plus monter ma note**
- Un petit projet où un LLM est un composant du produit (ex. tri ou résumé de tickets GLPI, avec un jeu d'éval) : ça relierait son stage à notre métier.
- Remonter l'encart méthode en haut du CV méthode et ajouter un chiffre (« 1 commit = 1 étape, X commits relus, Y corrections du sous-agent »).

**Autre variante de CV (classique)** : sans l'encart méthode, ce CV ne me donne aucune raison de le choisir plutôt qu'un autre L3 ; à ne pas m'envoyer.

**Portfolio (P14)**
1. Oui, on sent l'agent, et ça ne me gêne pas du tout : le résultat est soigné, rapide, et il l'assume (« Ce site a été construit comme ça »). Le lien vers le dépôt est la bonne réponse.
2. Le labo est techniquement honnête : « Les limites de cette démo » explique la latence simulée et l'écart entre la mesure en direct et Lighthouse. Le post LinkedIn sur l'erreur de mesure (iframes de même origine qui partagent le fil principal) est le contenu le plus intéressant de tout le dossier, et il n'est pas sur le site.
3. La section « Comment je travaille » reste générique (Cadrer, Découper, Relire, Vérifier, Documenter) : n'importe qui peut l'écrire. Un vrai extrait de règles, un diff refusé ou une capture de relecture par le sous-agent la rendrait unique.

**LinkedIn proposé** : solide ; je prendrais le titre B (« Labo perf : score Lighthouse 53 → 98 ») et j'activerais la variante « public favorable à l'IA » de la section Infos, que le guide laisse désactivée par défaut.

---

## Synthèse des 3 critiques les plus importantes (agent C)

1. **Le portfolio sonne « écrit par un agent »** (phrases-chutes, tricolons, « C'est voulu. », « et c'est très bien comme ça »). La transparence sauve le candidat auprès de P5 et P14, pas forcément auprès d'une recruteuse non technique (P7). Il faut retirer les morales et les slogans, et garder les faits.
2. **La lettre DSI (04) passe l'IA sous silence alors que le site en fait une section entière.** Pour un lecteur prudent (santé, public), une phrase sur l'outillage et les données dans la lettre vaut mieux qu'une découverte.
3. **Aucune preuve concrète de la méthode IA** : pas d'extrait de règles, pas d'exemple de relecture par le sous-agent, pas de chiffre, et aucun projet où un LLM fait partie du produit. C'est ce qui permettrait de passer de « bon L3 » à « profil rare » pour les lecteurs favorables à l'IA.
