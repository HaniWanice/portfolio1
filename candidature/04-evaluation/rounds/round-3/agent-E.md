# Round 3 · Agent E · P10, P12, P15

Documents lus : CV classique, CV méthode (PNG), lettres 01, 03, 05, 06 (avant `<!-- notes -->`),
captures accueil desktop 1-6, mobile 1, labo 1-2, guide LinkedIn. Test Playwright du simulateur
GLPI sur http://localhost:3100/#stage : transmission, re-transmission (anti-doublon), panne simulée
(faux 200 détecté), résolution côté DSI (retour + anti-boucle). Tout fonctionne.

---

## P10 · Paul, 45 ans, architecte logiciel, grand groupe industriel défense/aéro

Reçoit : CV classique + lettre 03.

```
PROFIL: P10
humain: 7/10 | credibilite: 8/10 | clarte: 8/10 | pertinence: 5/10 | differenciation: 6/10 | design: 8/10 | ton: 8/10 | envie: 5/10 | convocation: 25% | global: 11.5/20
portfolio: 11/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

**Points forts**
- La lettre 03 parle de confidentialité sans que je la demande : « permettre aux étudiants de contacter le support sans exposer le GLPI interne du personnel ». C'est exactement le réflexe de cloisonnement que j'attends.
- « Le code appartient à l'université et n'est pas public : je peux en présenter le fonctionnement en entretien, pas le dépôt. » Phrase la plus rassurante du dossier pour moi. Un stagiaire qui sait qu'un code ne lui appartient pas, c'est rare.
- L'aveu d'erreur est concret et technique : « Des sessions API qui n'étaient pas fermées en cas d'erreur ont fini par saturer le serveur ». Pas de « je suis rigoureux », un fait.

**Points faibles**
- Pertinence limitée : profil web Next.js/TypeScript. Chez nous, le stage serait plutôt Java/C++, outillage interne, IHM. « pratiqué Java et C en licence » est trop léger pour me faire changer d'avis.
- Expérience unique de 8 semaines, sur un prototype qui « n'a jamais dépassé l'environnement de test » (dit sur le site). Honnête, mais mince.
- Aucune mention de contraintes de sécurité formalisées (habilitations, réseau isolé, revue de code imposée). « composant avec un outil existant, des règles de confidentialité » reste générique.

**Phrases « IA » ou déjà lues**
- « Je suis prêt à me former sur la stack de vos projets. » : phrase standard de lettre de L3.
- « Ce stage m'a aussi appris ce que coûte un détail négligé. » : tournure de transition un peu fabriquée.

**Phrases qui sonnent faux ou exagérées**
- Rien de franchement exagéré. « rapport de 37 pages » pour 8 semaines me surprend un peu, je demanderai à le voir.

**Questions en entretien**
- Comment aviez-vous accès aux GLPI : comptes de service, droits, qui gérait les jetons d'API ?
- Le prototype tournait où ? Sur votre poste, sur un serveur de la DSI ?
- Avez-vous utilisé un assistant IA sur le code de l'université ? Avec quelles règles ? (La question décisive, voir ci-dessous.)

**Ce qui ferait monter ma note**
- Une lettre adaptée à l'industrie : citer Java/C plus concrètement (un projet, une taille), et une phrase sur le respect d'un cadre de sécurité imposé.

**Avis sur l'autre variante (CV méthode)** : l'encart « Je développe avec Claude Code » m'aurait fait hésiter ; la phrase « Données sensibles : modèles en local (Ollama, LM Studio). Pour le reste, je m'aligne sur les règles de l'équipe » rattrape une partie, mais je l'aurais mis dans la pile « à vérifier ».

**Portfolio** (11/20 · humain 6 · UX 8)
1. La section « Comment je travaille » est le point sensible. « Pas de secret, de clé ou de donnée personnelle dans un prompt. Le code de mon stage n'est pas public et ne l'a jamais été. » est bien écrit, mais ne répond pas à la seule question qui compte pour moi : le code de l'UPEC est-il passé par Claude Code, donc par un serveur américain ? Le silence sur ce point me gêne plus qu'un aveu.
2. « Si vous travaillez sans IA, je travaille sans IA. » : bonne phrase, je la crois à moitié. Je testerai en entretien s'il sait écrire 30 lignes sans assistant.
3. Le site se lit très bien, le simulateur GLPI est clair et honnête (« Limites du prototype, visibles ici aussi »). Mais la mise en page éditoriale très léchée (titres en serif géant, « Deux GLPI qui ne devaient pas se parler ») sent l'agent IA et le studio de design ; pour moi c'est neutre au mieux. L'aide d'un agent se sent dans l'homogénéité parfaite du ton.

**LinkedIn** : la refonte est saine (dates corrigées, faux « stage » de 2 ans 6 mois supprimé, IA retirée des infos par défaut) ; le titre A est long mais dit ce qu'il cherche, je n'ai rien contre.

---

## P12 · Karim, 30 ans, dev senior, PME éditrice, fait passer les tests techniques

Reçoit : CV méthode + lettre 01.

```
PROFIL: P12
humain: 7/10 | credibilite: 7/10 | clarte: 8/10 | pertinence: 7/10 | differenciation: 8/10 | design: 8/10 | ton: 8/10 | envie: 8/10 | convocation: 55% | global: 13.5/20
portfolio: 14/20 | portfolio_humain: 6/10 | portfolio_ux: 8/10
```

**Points forts**
- La lettre 01 raconte des bugs, pas des qualités : « chaque modification d'un ticket étudiant en recréait un côté DSI : des dizaines de clones, devant mon tuteur » puis « J'ai corrigé le premier problème en lisant avant d'écrire, le second en ignorant les modifications faites par le compte API. » Deux correctifs nommés, vérifiables. C'est ce qui me donne envie d'appeler.
- Le simulateur fait ce qu'il dit. J'ai cliqué : re-transmission → « déjà présent (#1087) : rien à créer (anti-doublon) » ; panne → « POST dsi/Ticket → 200 {"0":"ERROR_GLPI_ADD"} / faux succès détecté » ; résolution côté DSI → « auteur = compte API → on ne renvoie rien (anti-boucle) ». Et les limites sont affichées (« si le second appel échoue après le premier, rien n'annule le ticket déjà créé »). Il connaît le trou de sa propre transaction, bon signe.
- Le labo perf est cohérent quand on le vérifie : LCP 16,5 s, TBT 584 ms, CLS 0,111, FCP/SI 0,8 s donnent bien un score autour de 57 avec les pondérations Lighthouse. Et la section « Une erreur de mesure, corrigée » (iframes de même origine qui partagent le fil principal) est le genre de détail qu'on ne trouve qu'en ayant vraiment regardé.

**Points faibles / incohérences que je vais exploiter**
- **Webhooks vs boucle.** Le site dit : « GLPI ne déclenche pas ses webhooks quand la modification vient de l'API ». Le post LinkedIn n°1 dit : « La DSI ferme un ticket, l'appli ferme celui de l'étudiant, ce qui redéclenche la fermeture côté DSI ». Si l'appli écrit via l'API et que l'API ne déclenche rien, qu'est-ce qui redéclenche ? Du polling ? Alors il faut le dire. En l'état, les deux phrases se contredisent, et c'est la première question que je pose.
- **Le « faux 200 OK ».** À ma connaissance, l'API REST de GLPI renvoie un 400 avec `ERROR_GLPI_ADD` sur un ajout simple ; le 200/207 avec erreur dans le corps arrive sur les ajouts multiples. Possible qu'il ait vu ce cas, mais il doit savoir l'expliquer précisément, sinon c'est un détail enjolivé.
- **La recherche.** Le simulateur affiche `GET dsi/search/Ticket?name=[ESCALADE ETU - ID:42]` : ce n'est pas la syntaxe réelle de GLPI (`criteria[0][field]=1&criteria[0][searchtype]=contains...`). Simplification de démo acceptable, mais un dev GLPI le voit tout de suite. Même chose pour « external_id ... n'est pas interrogeable par l'API de recherche » : je demanderai quelle option de recherche il a essayée.
- Chronologie légèrement floue d'un support à l'autre : lettre « À la première démo... Trois jours plus tard », site « Le chemin retour, ajouté par mon tuteur en pleine démo du 22 mai », post « Le 22 mai, la liste côté DSI s'est remplie de clones ». Ça tient, mais on sent trois rédactions.

**Phrases « IA » ou déjà lues**
- « Je développe avec Claude Code au quotidien : un fichier de règles par projet, des étapes courtes, chaque diff relu avant le commit » : liste en trois temps très propre, typique d'une rédaction assistée.
- CV : « Webhooks et transfert natif testés puis écartés, raisons à l'appui. » : « raisons à l'appui » est une formule de synthèse, pas une phrase d'étudiant.

**Phrases qui sonnent faux ou exagérées**
- « Coupe-circuit contre les boucles » (CV) : le mécanisme décrit est un filtre sur l'auteur, pas un coupe-circuit. Le mot est plus gros que la chose.
- Lettre : « 57 contre 97 » est vrai, mais la version naïve est construite pour être mauvaise (« Un calcul lourd (120 000 lignes de prix triées) ») ; il le reconnaît sur la page, pas dans la lettre.

**Questions en entretien (test technique)**
- Dessinez-moi le flux retour : qui détecte que le ticket DSI est résolu ? Webhook, polling, action manuelle ?
- Votre anti-doublon : que se passe-t-il si deux transmissions du même ticket arrivent en même temps ? (Condition de course entre la recherche et la création.)
- Pourquoi le `killSession` dans un `finally` et pas un pool de sessions ou un `session_token` réutilisé ?
- Exercice : sans agent, corrigez ce composant client qui fait deux `fetch` en cascade dans un `useEffect`.

**Ce qui ferait monter ma note**
- Dire explicitement comment le chemin retour est déclenché (et lever la contradiction webhooks/boucle). Et mettre un vrai dépôt public d'un projet perso avec des tests unitaires, pas seulement du Playwright.

**Avis sur l'autre variante (CV classique)** : plus lisse, perd l'encart méthode qui m'intéresse ; la puce « Gestion des doublons, des boucles de synchronisation et des pannes de l'API » est plus vague que la version méthode.

**Portfolio** (14/20 · humain 6 · UX 8)
1. Le meilleur portfolio de L3 que j'ai vu cette année sur le fond : simulateur fonctionnel, labo avec méthodologie (« Lighthouse 12.8, profil mobile... Médiane de 3 passages »), limites écrites. Je vais quand même vérifier que le candidat sait expliquer chaque ligne de `PerfDuel.tsx`.
2. L'agent IA se sent : prose uniforme, structures en paires (« Ce que j'ai essayé, puis écarté » / « Ce que j'ai construit »), dates hyper précises (« Le 2 juin, en testant le ticket n°27 ») qui ressemblent à une technique d'écriture. Ça ne me gêne pas en soi, je travaille aussi avec ; ça me pousse juste à tester plus dur en entretien.
3. UX : bonne hiérarchie, mobile propre. Petit bug du simulateur : le bouton « Résoudre » reste affiché sur un ticket déjà « Résolu ». Et l'écart entre 219 ko (tableau) et 179/208 ko (mesure en direct) mériterait une ligne d'explication.

**LinkedIn** : les posts sont bons et techniques, mais le post 1 contient la contradiction webhooks/boucle en toutes lettres ; à corriger avant publication, sinon un dev le relève en commentaire.

---

## P15 · Claire, 43 ans, engineering manager, grand site e-commerce

Reçoit : CV méthode + lettre 06 (messages) + lettre 05.

```
PROFIL: P15
humain: 8/10 | credibilite: 8/10 | clarte: 9/10 | pertinence: 7/10 | differenciation: 7/10 | design: 8/10 | ton: 8/10 | envie: 7/10 | convocation: 50% | global: 13/20
portfolio: 15/20 | portfolio_humain: 7/10 | portfolio_ux: 9/10
```

**Points forts**
- Le format court est respecté. E-mail : « En deux lignes : au printemps 2026, pendant huit semaines à la DSI de l'UPEC, j'ai relié deux GLPI isolés avec une application Next.js. » Je sais en dix secondes qui, quoi, quand.
- Le labo perf parle directement à un site e-commerce : « Images brutes de 1 800 px pour des cases de 250 px », « Composant serveur, rendu une fois au build ». C'est une page produit, c'est mon métier. Gros point de pertinence.
- La curiosité et l'autonomie que je note dans ma grille sont démontrées, pas déclarées : « Portail du personnel UPEC ... Personne ne me l'a demandé », freeCodeCamp « environ 40 heures le soir », et la section « Ce que je ne sais pas encore faire » (tests unitaires, CI, prod surveillée) qui me donne directement mon plan d'onboarding.

**Points faibles**
- Lettre 05 trop neutre : sans le crochet rempli (« [Une phrase sur l'entreprise...] »), il ne reste rien de spécifique à moi. Tout repose sur ce crochet.
- Pas de travail en équipe : il le dit lui-même (« Jusqu'ici, j'ai surtout codé seul, avec un tuteur qui validait »). Dans une équipe de 8 avec rituels agiles, c'est un risque d'intégration que je dois évaluer.
- Le message LinkedIn de connexion se termine par « Merci ! » et « Est-ce que [Entreprise] prend des stagiaires cette année ? » : un peu direct pour un premier contact, ça marche mieux avec une vraie question sur notre stack.

**Phrases « IA » ou déjà lues**
- Lettre 05 : « Je peux vous rencontrer ou vous rappeler au moment qui vous convient. » : standard.
- Lettre 05 : « En dehors des cours, je développe des projets dont je me sers au quotidien » : correct mais vu souvent.

**Phrases qui sonnent faux ou exagérées**
- Site : « Ce que j'ai prouvé : ... livré et documenté » : « prouvé » est un peu fort pour un prototype de 8 semaines resté en test.
- « Les meilleurs endroits pour débloquer un bug. » (natation, vélo) : charmant, un peu écrit pour plaire.

**Questions en entretien (grille structurée)**
- Situation : racontez une fois où votre tuteur a changé le périmètre (le chemin retour du 22 mai). Comment avez-vous replanifié ?
- Autonomie : qu'avez-vous fait seul avant de demander de l'aide sur le bug des sessions fantômes ?
- Revue de code : comment réagissez-vous quand un relecteur refuse votre PR ? (Il dit chercher « quelqu'un qui relit mon code », je veux voir s'il l'accepte vraiment.)
- IA : montrez-moi le fichier de règles de votre site et expliquez une règle que vous avez ajoutée après une erreur de l'agent.

**Ce qui ferait monter ma note**
- Une phrase dans la lettre qui relie le labo perf à un enjeu e-commerce (conversion, Core Web Vitals sur les pages produit). Et une expérience même courte de travail à plusieurs sur un dépôt (projet de groupe en licence, contribution open source).

**Avis sur l'autre variante (CV classique)** : très bien aussi, mais je perds l'encart « Comment je travaille », qui est pour moi un plus (process explicite, relecture, tests).

**Portfolio** (15/20 · humain 7 · UX 9)
1. Excellente structure de lecture : trois colonnes « Ce que je fais / Ce que j'ai prouvé / Ce que je cherche », CTA « Commencer par le stage », CV téléchargeable en haut à droite. En deux minutes j'ai ce qu'il me faut pour décider d'un appel.
2. L'agent IA se sent dans la finition (illustrations « Hairline », typographie très éditoriale, ton parfaitement homogène), mais il l'assume dans « Comment je travaille » avec un process que je valide (cadrer, découper, relire, vérifier, documenter). Ça ne me gêne pas ; je vérifierai en entretien que le process est le sien et pas celui de l'agent.
3. Une réserve : « Un sous-agent relit aussi chaque diff avec une grille différente de la mienne » est intéressant mais jargonneux pour un manager non-IA. Et la timeline « Collège : une agence web, un stage de 3e » est sympathique mais occupe beaucoup de place avant le stage.

**LinkedIn** : guide solide et honnête (correction des dates, suppression du faux stage) ; le titre A à 172 caractères sera tronqué sur mobile, je préfère le B qui met le labo en avant.

---

## Les 3 critiques les plus importantes (agent E)

1. **Contradiction technique webhooks / boucle (P12).** Site : « GLPI ne déclenche pas ses webhooks quand la modification vient de l'API ». Post LinkedIn 1 : « l'appli ferme celui de l'étudiant, ce qui redéclenche la fermeture côté DSI ». Si l'API ne déclenche rien, rien ne redéclenche : il faut dire ce qui détecte les changements (polling ? action manuelle ?). Un recruteur technique s'en sert pour piéger. À vérifier aussi : « faux 200 OK » de GLPI (en ajout simple, l'API renvoie plutôt un 400) et la syntaxe `search/Ticket?name=` du simulateur.
2. **IA et code de stage (P10).** Le dossier dit « Le code de mon stage n'est pas public » et « Pas de secret ... dans un prompt », mais jamais si le code de l'UPEC est passé par Claude Code. Pour un lecteur défense ou secteur public, ce silence pèse plus qu'une réponse claire. Une phrase comme « Pendant le stage, [avec/sans] assistant, selon les règles de la DSI » réglerait la question.
3. **Lettres courtes trop dépendantes des crochets (P15).** Les lettres 05 et 06 sont propres mais interchangeables tant que « [Une phrase sur l'entreprise...] » n'est pas remplie avec soin. Pour l'e-commerce, relier le labo perf aux pages produit est l'argument le plus fort du dossier, et il n'apparaît dans aucune lettre ciblée.
