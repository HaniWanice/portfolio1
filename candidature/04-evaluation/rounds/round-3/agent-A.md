# Round 3 · Agent A (P1, P4, P9)

Documents lus : CV méthode, CV classique (PNG), lettres 01, 02, 04 (texte avant les notes),
captures round-3 (accueil desktop 1-6, mobile 1 et 3, labo 1-2), guide LinkedIn.
Test réel du simulateur GLPI sur http://localhost:3100/#stage avec Playwright : transmettre #42,
résoudre côté DSI, retransmettre (anti-doublon), panne de l'API DSI sur #43 (faux « 200 OK » détecté).
Tout fonctionne, et le journal affiche des appels cohérents (`initSession`, `search/Ticket?name=[ESCALADE ETU - ID:42]`,
`killSession` dans un finally).

---

## P1 · Camille, 29 ans, CTO, startup SaaS B2B (12 personnes)

Reçoit : CV méthode + lettre 01.

```
PROFIL: P1
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 8/10 | design: 8/10 | ton: 8/10 | envie: 8/10 | convocation: 60% | global: 14/20
portfolio: 16/20 | portfolio_humain: 7/10 | portfolio_ux: 8/10
```

**Points forts**
1. Le récit de bugs est précis et vérifiable : « chaque modification d'un ticket étudiant en recréait un côté DSI : des dizaines de clones, devant mon tuteur », puis « le second en ignorant les modifications faites par le compte API ». C'est exactement le genre de détail qu'un étudiant qui n'a pas codé ne peut pas inventer.
2. L'encart « Comment je travaille » du CV est sobre et vérifiable : « Le fichier de règles de mon site est public sur GitHub. » Je vais aller lire ce fichier, et c'est ce qui décidera de l'appel.
3. Le simulateur du site marche vraiment. L'anti-doublon et la détection du faux succès (`POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"}`) sont mis en scène, et les limites sont affichées sous le simulateur au lieu d'être cachées.

**Points faibles**
1. Le « 57 contre 97 » est partout : CV, lettre, site (trois fois), LinkedIn (titre B, infos, projets, Sélection, post 2). Au troisième passage ça devient un slogan. Et le labo compare une version volontairement mal écrite à une version propre : c'est un exercice pédagogique, pas une optimisation d'un vrai produit. Rien de honteux, mais ça ne prouve pas autant que la répétition le laisse entendre.
2. La lettre 01 repose entièrement sur le crochet d'ouverture (« [Deux phrases sur leur produit, que tu as testé…] »). Sans lui, elle commence par l'état civil. Le dernier paragraphe, « Je peux passer vous voir, ou en parler en visio, quand vous voulez », est un peu léger.
3. Une incohérence de chronologie sur le site : « Les webhooks — J'ai commencé par là. Le 2 juin… » alors que la démo avec l'escalade qui marche date du 22 mai. On ne « commence » pas par une piste un mois après le début du stage. Et « Le chemin retour, ajouté par mon tuteur » laisse croire que le tuteur a écrit le code.

**Phrases qui sonnent IA ou « déjà lu »**
- Sur le site, le triptyque « Ce que je fais / Ce que j'ai prouvé / Ce que je cherche » et la grille en cinq verbes « Cadrer · Découper · Relire · Vérifier · Documenter » : structure typique d'une page écrite avec un agent.
- Les chutes courtes en série : « Personne ne me l'a demandé. », « C'est là que le CSS a arrêté d'être de la magie. », « La personne qui reprend le code ne doit pas avoir besoin de moi. » Une à la fois, c'est bien ; empilées, ça sent le copywriting.
- « Ce que j'en retiens : le problème technique n'était pas celui que je croyais. » : formule de conclusion attendue.

**Phrases qui sonnent faux ou exagérées**
- « Un sous-agent relit aussi chaque diff avec une grille différente de la mienne. » Sur un portfolio perso, crédible ; mais un sous-agent qui relit, c'est encore l'agent. Je demanderai ce qu'il a déjà attrapé.
- « Des applications web de bout en bout : interface, API, base de données, conteneurs. » : un peu large pour un L3 avec un stage de 8 semaines.

**Questions en entretien**
- Ouvre le fichier de règles : quelle règle as-tu ajoutée après une erreur de l'agent, et laquelle ?
- Pourquoi une balise dans le titre plutôt qu'une table de correspondance dans ta propre base ? (le site l'admet comme limite : je veux la solution).
- Si le second appel échoue après le premier, comment tu rendrais l'opération idempotente ?
- Montre-moi un diff de l'agent que tu as refusé.

**Ce qui ferait monter ma note**
- Diviser par deux les occurrences de « 57 → 97 » et ajouter un exemple concret de diff refusé ou de règle née d'une erreur.
- Corriger la chronologie webhooks / 22 mai et la formulation « ajouté par mon tuteur » (« demandé par mon tuteur »).

**Autre variante de CV (classique)** : plus neutre, perd l'encart méthode, qui est justement ce qui me fait appeler ; je préfère clairement la version méthode.

**Portfolio** : 16/20 · humain 7 · UX 8
1. Le simulateur est la meilleure pièce de toute la candidature : interactif, honnête sur les limites, journal d'appels crédible. Petit défaut : une fois le ticket DSI « Résolu », le bouton « Résoudre » reste affiché.
2. La section « Ce que je ne sais pas encore faire » (tests unitaires, CI, production) est rare et rassurante.
3. L'IA se sent dans la structure et le rythme des phrases, pas dans le fond. Vu mon profil, ça ne me gêne pas, tant que l'entretien confirme qu'il comprend chaque ligne.

**LinkedIn proposé** : bon, l'accroche « Au printemps 2026… » est la bonne, le post n°1 sur les clones est le meilleur texte de la série ; la variante « public favorable à l'IA » devrait être celle par défaut pour ma cible.

---

## P4 · Gérard, 58 ans, DSI d'un conseil départemental

Reçoit : CV classique + lettre 04.

```
PROFIL: P4
humain: 7/10 | credibilite: 7/10 | clarte: 7/10 | pertinence: 8/10 | differenciation: 6/10 | design: 6/10 | ton: 7/10 | envie: 5/10 | convocation: 35% | global: 12/20
portfolio: 10/20 | portfolio_humain: 6/10 | portfolio_ux: 6/10
```

**Points forts**
1. GLPI, des données séparées, l'instance de production intouchable : c'est mon quotidien. « Il fallait garder les deux bases séparées, ne jamais toucher à l'instance de production, et proposer un outil que les techniciens du support puissent utiliser sans formation. » Ce garçon a compris ce qu'est une DSI.
2. Le paragraphe données est juste : « tous les essais ont été faits sur des données fictives », « les limites du prototype (authentification centralisée, montée en charge) et les étapes à prévoir avant une mise en production ». Un stagiaire qui parle des limites avant qu'on les lui oppose, c'est rare.
3. Orthographe et forme impeccables dans la lettre, formule de politesse complète, objet clair, durée de 2 à 5 mois compatible avec nos conventions.

**Points faibles**
1. « J'utilise des outils d'assistance au code lorsque l'équipe l'autorise, jamais sur des données réelles, et je travaille tout aussi bien sans. » Je n'avais rien demandé. Cette phrase m'apprend qu'il utilise l'IA et me fait douter du reste. « Tout aussi bien sans » : affirmation que rien ne prouve.
2. Le CV classique reste un CV de start-up : deux colonnes, titres orange en capitales espacées, dates en police machine à écrire, liens soulignés. C'est propre, mais pas sobre. Et « Licence 3 Informatique », « L3 Informatique » avec majuscule : en français, « informatique » prend une minuscule.
3. Beaucoup de jargon non expliqué pour un lecteur RH de collectivité qui fera le premier tri : « Docker Compose · MariaDB · GLPI », « Labo perf », « Lighthouse mobile : score 57 → 97 ». Le projet « Labo perf » et « Todo Smart » ne m'intéressent pas ; le projet Laravel de licence, si.

**Phrases qui sonnent IA ou « déjà lu »**
- « Le sujet paraissait simple : » : ouverture de rapport de stage vue cent fois.
- « La question des données a guidé plusieurs choix. » : correct, mais formule.
- « Je souhaiterais mettre cette expérience à profit au sein de [Établissement] » : classique, acceptable dans mon secteur.

**Phrases qui sonnent faux ou exagérées**
- « je travaille tout aussi bien sans » (voir plus haut).
- CV : « Seul développeur sur le sujet » : en huit semaines, je veux bien, mais c'est un prototype ; je veux savoir ce que l'ingénieur a fait.

**Questions en entretien**
- Qui a eu les droits d'administration sur les deux GLPI ? Avez-vous eu accès à la production, même en lecture ?
- Quel outil d'IA exactement, hébergé où, et votre tuteur était-il au courant ?
- Votre prototype a-t-il été repris ? Sinon, pourquoi ?
- Connaissez-vous le RGPD appliqué aux usagers d'une collectivité (registre, durée de conservation) ?

**Ce qui ferait monter ma note**
- Retirer la phrase sur les « outils d'assistance au code » de la lettre secteur public, ou la réduire à « Je respecte la charte informatique de l'établissement. »
- Une version du CV classique réellement sobre : une colonne, noir et gris, sans police à chasse fixe ni « Labo perf ».

**Autre variante de CV (méthode)** : l'encart « Je développe avec Claude Code » en bas de page, sur fond beige ; si je tombais dessus, la candidature irait à la pile « non ».

**Portfolio** : 10/20 · humain 6 · UX 6
1. Le simulateur GLPI m'a parlé : on voit les tickets, la balise, le retour du statut. C'est le seul endroit du site qui me concerne.
2. Une section entière « Comment je travaille : Je code souvent avec un agent IA, Claude Code » ; c'est exactement ce que je ne veux pas voir chez un stagiaire qui touchera nos applicatifs métier. Oui, ça se sent, et oui, ça me gêne.
3. Trop « agence » : grand titre « D'une page HTML bancale à un vrai sujet de DSI », passages en fond noir, citations en grand, « En dehors de l'écran ». Je cherche un CV en ligne, pas une plaquette.

**LinkedIn proposé** : je ne regarde pas LinkedIn pour un stagiaire ; le titre A, très long, est lisible, et je note que le profil actuel est corrigé de son « Stage · sept. 2023 – févr. 2026 » qui m'aurait fait douter de tout.

---

## P9 · Inès, 31 ans, design lead, studio digital

Reçoit : CV méthode + lettre 02.

```
PROFIL: P9
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 6/10 | differenciation: 6/10 | design: 7/10 | ton: 8/10 | envie: 6/10 | convocation: 30% | global: 12/20
portfolio: 13/20 | portfolio_humain: 6/10 | portfolio_ux: 7/10
```

**Points forts**
1. Le CV tient visuellement : nom en serif de titrage, hiérarchie nette, un seul accent (orange brique), gouttière et filet vertical propres, photo bien cadrée. Lisible en 30 secondes.
2. La lettre 02 a une vraie ouverture : « J'étais censé observer. J'ai surtout demandé si je pouvais essayer, et je suis reparti avec une page HTML bancale et l'envie de recommencer. » Et « j'en ai refait plusieurs quand ses objections tenaient la route » sonne vrai.
3. Le site a un parti pris éditorial cohérent (crème, serif, mono pour les métadonnées, alternance claire et sombre) et des détails soignés : titres barrés pour les pistes écartées, guillemets français colorés dans la citation, « Pas de cookie, pas de traceur. » dans le pied de page.

**Points faibles**
1. Pas une seule image du travail de design. Keewic est mis en avant dans la lettre (« du parcours aux maquettes ») et sur le site, mais aucune maquette, aucun écran Figma n'est montré. Pour un studio, c'est le manque principal : je dois croire sur parole.
2. Trois familles de caractères (serif, grotesque, chasse fixe) et la chasse fixe en fait trop : dates du CV « 4 mai – 1er juil. 2026 (8 semaines) » avec un « er » en exposant qui flotte, étiquettes « Next.js · TypeScript · API REST » en gris clair, peu contrastées à l'impression.
3. Les preuves d'intégration de la lettre sont faibles pour moi : « responsive jusqu'à 390 px » (et en dessous ?), « 100 en accessibilité sur Lighthouse » (un score automatique ne dit pas que le site est accessible). C'est un argument de développeur, pas d'intégrateur.

**Phrases qui sonnent IA ou « déjà lu »**
- « Le design, je l'ai pratiqué avant le code. » : tournure d'accroche.
- Site : « Dessin — C'est probablement de là que vient mon obsession pour les marges. » Mignon, mais c'est la phrase que tous les portfolios de dev ont sur leurs hobbies.
- « J'aimerais voir comment vous passez de la maquette à l'intégration chez [Agence], et y prendre ma part. » : fin correcte mais attendue.

**Phrases qui sonnent faux ou exagérées**
- « Mon site, haniwanice.com, me sert aussi de preuve d'intégration » : le site est réussi, mais il a été construit avec un agent ; la preuve porte donc sur la direction artistique et la relecture, pas sur l'intégration à la main.
- L'ouverture de la lettre est reprise mot pour mot sur le site (« J'étais là pour observer… »). Si je lis les deux, l'anecdote perd son côté spontané.

**Questions en entretien**
- Montre-moi les maquettes Keewic : quel écran as-tu refait, et quelle objection t'a convaincu ?
- Sur ton site, qui a choisi les typos et la palette, toi ou l'agent ? Pourquoi ce serif ?
- Comment tu testes l'accessibilité au-delà de Lighthouse (clavier, lecteur d'écran) ?
- Intègre-moi ce composant à partir d'une maquette Figma, sans agent, en 45 minutes.

**Ce qui ferait monter ma note**
- Ajouter trois ou quatre écrans Keewic (avant / après une objection) sur le site, et un lien direct dans la lettre 02.
- Réduire la chasse fixe à un seul usage, remonter le contraste des étiquettes, et corriger les défauts de mise en page listés ci-dessous.

**Autre variante de CV (classique)** : visuellement identique à la méthode, avec un projet Laravel à la place de l'encart méthode ; aucune différence de design, donc aucun avis différent.

**Portfolio** : 13/20 · humain 6 · UX 7
1. Défauts visibles : l'aperçu du labo sur la page d'accueil (capture desktop 4) est écrasé horizontalement, le texte et le vélo sont déformés ; le haut de page desktop laisse un grand vide entre les trois encarts et la section « Parcours », et la frise n'utilise que la moitié gauche de l'écran.
2. Sur mobile : la mention « Disponible » apparaît deux fois de suite (badge sur la photo, puis « Disponible pour un stage à partir d'avril 2027 » avec « 2027 » seul sur sa ligne), et la photo ne prend pas toute la largeur, ce qui laisse un vide à droite qui a l'air accidentel.
3. L'IA se sent : crème + serif condensé + étiquettes en chasse fixe + isométriques au trait, c'est l'esthétique par défaut des portfolios générés en 2025-2026. C'est bien exécuté, mais je ne vois pas la main du candidat. Ça ne me gêne pas en soi ; ça me gêne parce que je recrute justement pour l'œil.

**LinkedIn proposé** : textes propres et sans emoji, bannière prévue ; il manque une entrée Sélection avec les maquettes Keewic, ce qui me ferait cliquer.
