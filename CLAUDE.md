# Règles du projet (lues par l'agent à chaque session)

Portfolio de Hani Wanice : Next.js 16 (App Router), TypeScript strict, CSS maison, Motion.
Je relis chaque modification avant de la committer. Ces règles servent à ce que l'agent
me propose des modifications que je peux relire vite et comprendre en entier.

## Façon de travailler
- Petites étapes. Une étape = un commit lisible, avec un message qui dit *pourquoi*.
- Avant de modifier un fichier, le lire. Ne jamais réécrire un composant entier pour changer trois lignes.
- Expliquer tout choix non évident dans la réponse (et dans un commentaire si un relecteur futur en aura besoin).
- Si une demande est floue ou risquée, poser la question au lieu de deviner.
- Lancer `npm run build` et `npm run lint` avant de dire que c'est fini. Vérifier le rendu réel
  (desktop 1440 px et mobile 390 px) pour toute modification visuelle.

## Contenu
- Tous les textes vivent dans `src/lib/content.ts`. Chaque fait doit exister dans
  `candidature/00-base/FAITS.md`. Rien d'inventé : pas de chiffre, de client ou de résultat non vérifié.
- Le ton suit `candidature/00-base/STYLE.md` : phrases simples, verbes concrets, pas de formules
  de plaquette commerciale, pas de tirets cadratins dans le texte courant.

## Code
- Composants serveur par défaut ; `"use client"` seulement pour ce qui est interactif.
- Pas de nouvelle dépendance sans me demander (et sans dire ce qu'elle coûte en ko).
- Animations : transform, opacity, clip-path, filter. Toujours une alternative `prefers-reduced-motion`.
  Le contenu doit rester visible si le JavaScript ne charge pas.
- Accessibilité : contrastes AA, focus visible, libellés sur les boutons-icônes, ordre de lecture logique.

## Données
- Aucun secret, aucune clé, aucune donnée personnelle dans le code, les prompts ou les logs.
- Pour tout ce qui touche à des données sensibles d'un employeur : modèle local uniquement, ou pas d'IA du tout.

## Relecture
- Après une fonctionnalité, un sous-agent relit le diff avec une grille différente : bugs, accessibilité,
  performance, cohérence du texte avec FAITS.md. Je tranche ses remarques moi-même.
