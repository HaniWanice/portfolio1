# Le panel : 15 recruteurs simulés

Objectif : faire lire les documents par des profils réalistes du marché francilien, chacun
avec ses biais assumés, et mesurer à chaque itération si les documents progressent.

Chaque round tourne avec 5 agents indépendants, qui incarnent chacun 3 profils.
Les profils sont répartis pour que chaque agent mélange des points de vue opposés.
Chaque profil reçoit **les documents qu'il recevrait vraiment** (variante de CV et lettre adaptées
à sa structure), et donne aussi un avis rapide sur l'autre variante de CV, pour vérifier que
l'encart IA ne braque pas un lecteur prudent qui tomberait dessus.

## Les profils

| # | Profil | Structure | Rapport à l'IA | Reçoit |
|---|---|---|---|---|
| P1 | Camille, 29 ans, CTO | Startup SaaS B2B, 12 personnes, Paris 11ᵉ | Utilise des agents tous les jours, exigeante sur la qualité | CV méthode + lettre 01 |
| P2 | Thomas, 34 ans, lead dev | Scale-up fintech, 150 personnes | Méfiant envers les « vibe coders » qui ne savent pas debugger | CV méthode + lettre 01 |
| P3 | Sophie, 46 ans, chargée de recrutement | Banque, siège à La Défense | Neutre, ne connaît pas Claude Code ; trie 200 CV, 30 secondes chacun | CV classique + lettre 03 |
| P4 | Gérard, 58 ans, DSI | Collectivité territoriale (conseil départemental) | Hostile, vieille école, très sensible à l'orthographe et à la forme | CV classique + lettre 04 |
| P5 | Nadia, 41 ans, responsable du pôle développement | DSI d'un CHU / université | Prudente (données de santé, RGPD), curieuse | CV classique + lettre 04 |
| P6 | Julien, 38 ans, manager | ESN de 3 000 personnes | Pragmatique ; ce qu'il veut, c'est un stagiaire fiable et présentable chez le client | CV classique + lettre 03 |
| P7 | Léa, 27 ans, talent acquisition | Startup en série A | Repère les CV et lettres générés par ChatGPT et les écarte | CV méthode + lettre 01 |
| P8 | Marc, 52 ans, fondateur | Agence web, 8 personnes | Utilise un peu l'IA, juge le résultat livré au client | CV méthode + lettre 02 |
| P9 | Inès, 31 ans, design lead | Studio digital | Indifférente à l'IA, intraitable sur le design et la typographie | CV méthode + lettre 02 |
| P10 | Paul, 45 ans, architecte logiciel | Grand groupe industriel défense/aéro | Très restrictif (souveraineté, confidentialité) | CV classique + lettre 03 |
| P11 | Amandine, 36 ans, chargée des relations entreprises | Université (bureau des stages) | Neutre ; regarde la conformité académique et la cohérence du parcours | CV classique + lettre 05 |
| P12 | Karim, 30 ans, dev senior | PME éditrice de logiciel, fait passer les tests techniques | Utilise l'IA ; cherche les incohérences techniques pour piéger le candidat | CV méthode + lettre 01 |
| P13 | Hélène, 61 ans, DRH | PME industrielle familiale | Hostile, très traditionnelle | CV classique + lettre 05 |
| P14 | Yanis, 26 ans, ingénieur IA | Startup GenAI | Ultra favorable à l'IA ; peut trouver le CV trop timide | CV méthode + lettre 01 |
| P15 | Claire, 43 ans, engineering manager | Grand site e-commerce français | Process structuré, grille d'entretien ; valorise curiosité et autonomie | CV méthode + lettre 06 (message) + lettre 05 |

Répartition des agents (3 profils chacun) :
A = P1, P4, P9 · B = P2, P3, P13 · C = P5, P7, P14 · D = P6, P8, P11 · E = P10, P12, P15

## La grille (identique à chaque round)

Notes sur 10, sauf indication contraire.

1. **Humain vs IA** : 10 = clairement écrit par une personne ; 0 = généré sans relecture.
2. **Crédibilité** : est-ce que je crois ce qui est écrit ? Le niveau annoncé est-il cohérent avec un L3 ?
3. **Clarté** : est-ce que j'ai compris l'essentiel en moins de 3 minutes (CV) ou 1 minute (lettre) ?
4. **Pertinence** pour mon poste.
5. **Différenciation** par rapport aux 50 autres candidatures de L3 que je reçois.
6. **Design et lisibilité** (confort de lecture, hiérarchie, sobriété).
7. **Ton** : ni trop soutenu, ni trop familier ; cohérent d'un document à l'autre.
8. **Envie d'en savoir plus** (aller voir le portfolio, appeler).
9. **Probabilité de convocation** en entretien, en %.
10. **Note globale** sur 20.

Puis, en texte libre :
- les 3 points forts ;
- les 3 points faibles ;
- les phrases exactes qui sonnent « IA » ou « déjà lu 100 fois » ;
- les phrases exactes qui sonnent faux ou exagérées ;
- les questions que je poserais en entretien ;
- la ou les modifications qui feraient le plus monter ma note ;
- l'avis sur l'autre variante de CV (une ligne).
