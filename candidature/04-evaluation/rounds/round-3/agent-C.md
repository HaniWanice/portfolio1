# Round 3 · Agent C (P5, P7, P14)

Documents lus : CV classique et méthode (PNG), CV classique sans photo (aperçu), lettres 01 et 04
(texte + aperçu PDF de la 04), captures du portfolio (accueil desktop 1-6, mobile 1 et 4, labo 1-2),
guide LinkedIn. Interactivité testée avec Playwright sur http://localhost:3100 : simulateur GLPI
(transmission, double transmission, résolution côté DSI, panne d'API).

Ce que le test a montré : le simulateur fonctionne et ses journaux sont crédibles
(`GET dsi/search/Ticket?name=[ESCALADE ETU - ID:42]` → `déjà présent (#1087) : rien à créer`,
`POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"}` → `faux succès détecté`,
`auteur = compte API → on ne renvoie rien (anti-boucle)`, `POST */killSession → sessions fermées (finally)`).
Défaut relevé : le bouton de réinitialisation (icône circulaire à côté de « Simuler une panne ») n'a
**aucun nom accessible** (texte vide pour un lecteur d'écran).

---

```
PROFIL: P5
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 9/10 | differenciation: 7/10 | design: 8/10 | ton: 7/10 | envie: 7/10 | convocation: 55% | global: 14/20
portfolio: 15/20 | portfolio_humain: 7/10 | portfolio_ux: 8/10
```

Nadia, 41 ans, responsable du pôle développement, DSI d'un CHU / université. Reçoit le CV classique et la lettre 04.

**Points forts**
1. Le sujet de stage est exactement un sujet de DSI publique : cloisonnement de deux bases, « ne jamais toucher à l'instance de production », outil pour des techniciens « sans formation ». Je n'ai pas besoin qu'on me traduise.
2. Le paragraphe données est le bon réflexe : « Le ticket transmis à la DSI ne contient que ce qui sert à traiter la demande, les jetons d'accès à l'API sont tenus hors du code, et tous les essais ont été faits sur des données fictives. » Minimisation, secrets hors code, données fictives : c'est ce que mon RSSI demanderait.
3. Il annonce ses limites : « les limites du prototype (authentification centralisée, montée en charge) ». Sur le CV, « rapport de 37 pages qui détaille aussi ses limites ». Un stagiaire qui sait ce que son prototype ne prouve pas, c'est rare.

**Points faibles**
1. Ouverture et clôture de lettre très scolaires : « Étudiant en troisième année de licence informatique… je cherche un stage », « Je souhaiterais mettre cette expérience à profit au sein de [Établissement] ». Le corps est bon, l'emballage est celui de tout le monde.
2. Rien sur l'authentification réelle d'un établissement (CAS/Shibboleth, LDAP), alors que c'est la première question que poserait mon équipe. Il le classe en « limite », mais n'a-t-il jamais regardé comment l'UPEC authentifie ses étudiants ?
3. Le CV ne dit pas un mot de RGPD ni de données personnelles ; c'est la lettre qui porte tout. Si la lettre est séparée du CV dans le circuit RH, je perds l'argument.

**Phrases « IA » ou « déjà lu 100 fois »**
- « Le sujet paraissait simple : » (accroche narrative convenue)
- « La question des données a guidé plusieurs choix. »
- « Je souhaiterais mettre cette expérience à profit au sein de »

**Phrases qui sonnent faux ou exagérées**
- « et je travaille tout aussi bien sans » : invérifiable, et un peu défensif. Je ne l'ai pas demandé.
- Sur le site : « Les étudiants, jusqu'à 40 000 personnes » : c'est la population, pas l'usage du prototype. Ça peut se lire comme une volumétrie traitée.

**Questions en entretien**
- Comment les étudiants s'authentifient-ils dans votre GLPI étudiant, et comment l'auriez-vous branché sur le CAS de l'université ?
- Quels champs exactement quittent la base étudiante ? Le nom ? Le numéro étudiant ? Pourquoi ?
- Où étaient stockés les jetons API, qui y avait accès, et comment les auriez-vous fait tourner ?
- Votre tuteur a-t-il eu un avis du DPO ou du RSSI sur le prototype ?

**Ce qui ferait le plus monter ma note**
- Une ligne sur le CV classique : « données minimisées, jetons hors du code, essais sur données fictives ».
- Remplacer « je travaille tout aussi bien sans » par un fait : « Pendant le stage, tout a été fait sans outil en ligne sur le code de la DSI » (si c'est vrai).
- Une phrase sur l'authentification (CAS) montrant qu'il a au moins identifié la piste.

**Autre variante de CV (méthode)** : l'encart « Données sensibles : modèles en local (Ollama, LM Studio) » me rassure à moitié ; dans un CHU, ma réponse est « pas d'IA du tout sur ce périmètre sans avis DPO », pas « un modèle local ». Ça ne m'aurait pas fait écarter le CV, mais ça ouvrirait la discussion.

**Portfolio (15/20 · humain 7 · UX 8)**
1. Le simulateur GLPI est la meilleure pièce : je l'ai fait tourner, la double transmission est bloquée, la panne d'API est détectée, les sessions sont fermées. Et les limites sont écrites dans l'outil même : « si le second appel échoue après le premier, rien n'annule le ticket déjà créé ». C'est honnête.
2. La section « Ce que je ne sais pas encore faire » (« Mon prototype de stage n'a jamais dépassé l'environnement de test ») me plaît beaucoup : c'est la phrase qu'un stagiaire évite d'écrire.
3. Le bloc « Comment je travaille » est très visible (titre géant, cinq étapes, « sous-agent qui relit chaque diff »). Pour une DSI santé, il prend plus de place que le sujet données. Et le bouton d'icône sans nom accessible, sur un site qui écrit « accessibilité » dans ses compétences, c'est dommage dans le public.

IA dans la fabrication : ça se sent un peu (finition homogène, illustrations isométriques, ton égal partout), mais il le dit et il pose des garde-fous ; ça ne me gêne pas tant que rien ne touche à mes données.

**LinkedIn** : propre et prudent (téléphone masqué, zones de recherche floutées, pas de CV public en Sélection, variante IA désactivée par défaut) ; le titre A, à 172 caractères, est trop long pour être lu en entier dans une liste de résultats.

---

```
PROFIL: P7
humain: 8/10 | credibilite: 7/10 | clarte: 7/10 | pertinence: 7/10 | differenciation: 8/10 | design: 8/10 | ton: 7/10 | envie: 7/10 | convocation: 45% | global: 13/20
portfolio: 14/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

Léa, 27 ans, talent acquisition, startup en série A. Écarte les textes générés par ChatGPT. Reçoit le CV méthode et la lettre 01.

**Points forts**
1. La lettre 01 n'a pas la forme ChatGPT : pas de « passionné », pas de « je suis convaincu que », pas de triade d'adjectifs. Elle raconte un échec précis : « des dizaines de clones, devant mon tuteur. Trois jours plus tard, c'est le chemin retour qui tournait en boucle. » Ça, un modèle ne l'invente pas spontanément.
2. Le CV méthode se lit vite : accroche de deux lignes, un stage, trois projets avec des liens, des chiffres vérifiables (« score 57 → 97, poids 4,2 Mo → 219 ko »).
3. Il assume l'IA au lieu de la cacher, avec un process (« Petites étapes, relecture de chaque diff »). Dans une startup, c'est plutôt un bon signal.

**Points faibles**
1. Tout repose sur le crochet d'ouverture : « [Deux phrases sur leur produit, que tu as testé…] ». Si ces deux phrases sont génériques, la lettre redevient une lettre type. C'est le seul endroit où je saurai s'il s'intéresse à nous.
2. « J'ai corrigé le premier problème en lisant avant d'écrire » : pour moi, non-tech, c'est opaque. Je comprends l'histoire mais pas la solution.
3. Le même slogan revient partout : CV « avec quelqu'un qui relit mon code », site « quelqu'un pour relire mon code », LinkedIn « où quelqu'un relit mon code ». À la troisième occurrence, ça sent l'élément de langage optimisé, pas une phrase spontanée.

**Phrases « IA » ou « déjà lu 100 fois »**
- Sur le site, la chute systématique en fin de paragraphe : « Personne ne me l'a demandé. », « C'est là que le CSS a arrêté d'être de la magie. », « C'est probablement de là que vient mon obsession pour les marges. », « Les meilleurs endroits pour débloquer un bug. », « donc c'est moi qui trouve les bugs en premier. » Prises une par une, elles sont bien ; mises bout à bout, c'est exactement le rythme « punchline par bloc » que je repère dans les textes générés.
- « Ce que j'en retiens : le problème technique n'était pas celui que je croyais. » (pull-quote très « leçon de LinkedIn »)
- « D'une page HTML bancale à un vrai sujet de DSI » (titre de storytelling).

**Phrases qui sonnent faux ou exagérées**
- « Je peux passer vous voir, ou en parler en visio, quand vous voulez. » Le « quand vous voulez » est un peu familier pour une première prise de contact, même en startup.
- « sous-agents de relecture » dans le CV : pour un stagiaire, ça peut faire « j'ai un process plus lourd que votre équipe ».

**Questions en entretien**
- Qu'avez-vous testé de notre produit, et qu'est-ce qui vous a gêné ?
- Racontez-moi la démo des clones : qu'avez-vous dit à votre tuteur sur le moment ?
- Sur votre site, qu'avez-vous écrit vous-même, mot pour mot, et qu'est-ce que l'agent a proposé ?

**Ce qui ferait le plus monter ma note**
- Un vrai paragraphe d'ouverture spécifique (c'est prévu, mais c'est là que tout se joue).
- Retirer deux ou trois chutes « punchline » du site pour casser le rythme uniforme.
- Remplacer « en lisant avant d'écrire » par « en vérifiant d'abord si le ticket existait déjà ».

**Autre variante de CV (classique)** : plus neutre, presque identique ; dans une startup j'aurais préféré la méthode, l'encart IA est un plus ici.

**Portfolio (14/20 · humain 6/10 · UX 8/10)**
1. C'est beau, mais c'est le site de quelqu'un qui a un très bon outil : typographie éditoriale, illustrations isométriques, rythme parfaitement régulier. Il ressemble à beaucoup de portfolios 2026 faits avec un agent. Le contenu, lui, est personnel (dates, numéros de tickets, « le 2 juin, en testant le ticket n°27 »).
2. Sur mobile, le badge « Disponible » apparaît deux fois de suite (sur la photo, puis juste en dessous : « Disponible pour un stage à partir d'avril 2027 »). Détail, mais ça trahit un assemblage desktop → mobile pas relu.
3. Le CTA « Commencer par le stage » est une bonne idée : il m'emmène directement vers la seule chose qui compte. Contact clair, CV téléchargeable partout.

IA dans la fabrication : oui, ça se sent dans le ton du site plus que dans la lettre. Ça ne m'aurait pas fait écarter le candidat, parce que les faits sont spécifiques et vérifiables, mais ça m'a fait douter de la part écrite à la main.

**LinkedIn** : les textes sont sobres et sans emoji, le post « le bug des clones » est le meilleur du lot ; mais le guide prévoit de faire appliquer le profil par un agent, ce qui, si ça se sait, va à l'encontre de ce qu'il dit de son usage de l'IA.

---

```
PROFIL: P14
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 8/10 | convocation: 55% | global: 14/20
portfolio: 15/20 | portfolio_humain: 7/10 | portfolio_ux: 8/10
```

Yanis, 26 ans, ingénieur IA, startup GenAI. Très favorable à l'IA. Reçoit le CV méthode et la lettre 01.

**Points forts**
1. Le workflow décrit est le bon : « un fichier de règles par projet, des étapes courtes, chaque diff relu avant le commit, et des tests Playwright ». Et il est vérifiable : « Les règles de mon portfolio sont publiques sur GitHub. » J'irais lire le fichier de règles avant le CV.
2. Le labo perf est une démarche d'ingénieur : mesure de labo explicitée (« Lighthouse 12.8, profil mobile… Médiane de 3 passages »), limites (« Le calcul lourd… est un exemple choisi pour qu'on le sente ») et surtout « Une erreur de mesure, corrigée » sur les iframes de même origine qui partagent le fil principal. Ça, c'est quelqu'un qui regarde ses chiffres.
3. Le simulateur GLPI montre les détails d'intégration réels : faux 200 de GLPI, `killSession` en `finally`, `external_id` non filtrable par l'API de recherche. Ce sont des choses qu'on ne trouve qu'en se cognant au système.

**Points faibles**
1. Trop timide pour moi. L'encart IA est en bas du CV, en dernier bloc ; la lettre l'arrive au troisième paragraphe. Pour une startup GenAI, c'est l'argument principal et il est rangé comme une précaution.
2. Aucun projet qui *construit* avec un LLM : pas d'appel d'API de modèle, pas de RAG, pas d'éval, pas de serveur MCP. Il utilise un agent pour coder, il n'a jamais fait de l'IA un composant de produit. Pour mon poste, c'est le trou.
3. « Données sensibles : modèles en local (Ollama, LM Studio) » : bonne intuition, mais rien ne montre qu'il s'en sert vraiment (quel modèle, pour quoi, avec quelle qualité comparée).

**Phrases « IA » ou « déjà lu 100 fois »**
- « Je développe avec Claude Code au quotidien » (la phrase que 30 % des candidatures dev 2026 contiennent ; c'est la preuve qui compte, pas l'annonce).
- « Un sous-agent relit aussi chaque diff avec une grille différente de la mienne. » (bien, mais sans exemple de ce qu'il a attrapé).

**Phrases qui sonnent faux ou exagérées**
- Labo : la sonde en direct affiche « Requêtes 20 » contre « 18 », avec une barre presque pleine **verte** côté optimisé. Visuellement, ça se lit comme un résultat aussi lourd que la version naïve. Et en direct, CLS naïf « 0,000 » contre « 0,111 » en labo : expliqué par la section limites, mais pas au premier coup d'œil.
- Chronologie un peu floue : les webhooks sont présentés comme le point de départ (« J'ai commencé par là »), mais l'impasse date du « 2 juin », après la démo du 22 mai où le chemin retour existait déjà. À clarifier, sinon un testeur technique le relève.

**Questions en entretien**
- Montrez-moi votre fichier de règles : quelle règle avez-vous ajoutée après une erreur de l'agent, et laquelle ?
- Un exemple de diff de l'agent que vous avez rejeté, et pourquoi.
- Le sous-agent de relecture : quelle grille, et qu'a-t-il trouvé que vous n'aviez pas vu ?
- Si je vous demande d'ajouter un tri automatique des tickets étudiants par LLM dans votre pont GLPI, comment vous évaluez la qualité, et où passent les données ?

**Ce qui ferait le plus monter ma note**
- Pour la version startup IA : remonter l'encart « Comment je travaille » sous l'accroche, et ajouter un lien direct vers le fichier de règles.
- Un petit projet où un modèle est un composant (même modeste : classification des tickets avec un modèle local et un jeu d'éval de 50 exemples). Il a le sujet sous la main.
- Un exemple chiffré du workflow : « sur le portfolio, N commits, M diffs rejetés, K tests Playwright ».

**Autre variante de CV (classique)** : sans l'encart IA, il devient un bon L3 parmi d'autres ; je ne l'aurais pas remarqué.

**Portfolio (15/20 · humain 7 · UX 8)**
1. Le simulateur et le labo sont deux vraies démos interactives et justes ; c'est mieux que 95 % des portfolios de stagiaires que je vois. Le simulateur rejoue les vrais appels API, ce n'est pas une animation décorative.
2. Le site est clairement fait avec un agent, et c'est très bien : c'est cohérent, testé (Playwright annoncé), et le dépôt est public. Ce qui me manque, c'est la trace du *pilotage* : un lien « voici 3 sessions où j'ai corrigé l'agent » vaudrait plus que la section « Cadrer / Découper / Relire / Vérifier / Documenter », qui reste déclarative.
3. UX : bonne hiérarchie, CTA clairs, mobile propre. Petits défauts : bouton de réinitialisation sans nom accessible, badge « Disponible » en double sur mobile, barre verte trompeuse sur « Requêtes ».

IA dans la fabrication : ça se sent, et je m'en fiche ; au contraire, c'est la démonstration attendue. Mon reproche est l'inverse : il ne s'en sert pas assez comme argument.

**LinkedIn** : le titre B (« Labo perf : score Lighthouse 57 → 97 ») est meilleur pour moi que le A ; la variante « favorable à l'IA » de la section Infos devrait être la version par défaut pour les startups, pas une option cachée.
