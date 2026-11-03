# Brief de design, repartir de zéro (novembre 2026)

Ce document est interne : il ne va jamais dans le site. Il fixe ce que le site doit faire, et ce qu'il refuse.

## Ce que le visiteur doit comprendre en 20 secondes
Qui est Hani, ce qu'il fait (développeur web full-stack), ce qu'il a déjà fait (huit semaines à la DSI de l'UPEC), ce qu'il cherche (stage dès avril 2027), et comment le joindre. Rien sur la méthode de travail avec l'IA.

## Parcours de lecture
1. Premier écran : nom, métier, disponibilité, contacts, portrait. Tout est là sans défiler.
2. Deuxième écran : une phrase de présentation qui se révèle au défilement, puis trois faits.
3. Troisième écran : ce qu'il fait bien, et ce qu'il doit encore apprendre. Court.
4. Trois écrans de projets, un par couleur : Pont GLPI (bleu), Todo Smart (vert acide), Labo perf (noir).
5. Autres projets en une liste, puis le contact.
Les détails vivent sur des pages à part : `/projets/pont-glpi`, `/projets`, `/labo`, `/a-propos`.

## Monde visuel (rien de l'ancien site)
- Refusé : fond crème, orange, serif, étiquettes en mono au-dessus des titres, cartes toutes pareilles, hero à chiffres.
- Fond clair neutre (gris très clair, pas crème), encre presque noire.
- Un bleu électrique comme aplat de grande taille, un vert acide pour surligner, noir pour le dernier projet.
- Une seule famille : Bricolage Grotesque (variable : graisse et largeur animées).
- Texte très grand, mots courts, beaucoup d'espace.

## Mouvement
- Premier écran : lettres du nom qui se gonflent (graisse et largeur), portrait noir et blanc qu'une zone de couleur révèle au pointeur (et qui se promène seule au tactile), parallaxe douce, contacts qui entrent en cascade.
- Partout ailleurs : discret, lent, en arrière-plan. Les mots de la phrase de présentation s'éclairent avec le défilement. Boutons magnétiques légers.
- Les figures Hairline servent chacune un projet (le relais pour le pont GLPI, le convoyeur qui ralentit pour le labo), jamais de décor.
- Toujours une alternative `prefers-reduced-motion`. Le contenu reste lisible sans JavaScript.

## Refus
Rien sur l'IA dans le site. Pas de refonte du portail UPEC. Pas de lien App Store. Le texte parle de ce que Hani a fait, pas de comment il travaille.
