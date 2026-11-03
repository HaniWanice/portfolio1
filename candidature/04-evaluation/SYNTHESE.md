# Synthèse des évaluations

Méthode : 15 profils de recruteurs franciliens (voir `PANEL.md`), répartis entre 5 agents indépendants.
Aucun agent ne lit les faits, les décisions ni les rounds précédents. Chaque round évalue la version du
moment, avec la même grille. Notes agrégées : `SCORES.md`. Rapports bruts : `rounds/round-N/`.

Une note simulée n'est pas une vraie réponse de recruteur. Elle sert à repérer ce qui accroche, ce qui
sonne faux et ce qui manque, et à vérifier qu'une correction ne crée pas un nouveau problème ailleurs.

## Round 1 : CV v1 et lettres v1

Note globale moyenne **11,3/20**, convocation **32 %**.

Ce que les 15 lecteurs ont relevé presque tous :

- La faute « Protail » dans une URL (c'est le vrai nom du dépôt GitHub).
- « Développeur web full-stack » en titre, jugé trop fort pour un L3 avec un stage de deux mois.
- Des formules trop travaillées : « simple à énoncer et pénible à résoudre », « un vrai besoin, des
  contraintes, et à la fin… » (triade), « je ne garde que le code que je peux expliquer ligne par ligne »
  (« lu dix fois cette année »), « plus parlant que ce paragraphe », « ma meilleure lettre de motivation ».
- Une contradiction apparente : la synchronisation automatique est « écartée », puis on « synchronise » le retour.
- « Cette année » pour un stage qui date de l'année universitaire précédente.
- Aucune trace de tests ni de travail en équipe.

Ce qui a changé ensuite :

- Titre : « Étudiant en L3 Informatique · développement web ».
- URLs de projets remplacées par des liens vers haniwanice.com.
- Accroche réécrite, sans triade.
- Stage enrichi des vrais détails du rapport : seul développeur encadré, clones, coupe-circuit, faux 200,
  `external_id` non indexé.
- Dates exactes, « au printemps 2026 ».
- Mobilité : « Île-de-France » au lieu de « Paris et La Défense » (lu comme une restriction).
- Une variante de CV sans photo pour les recruteurs traditionnels.

## Round 2 : CV v2, lettres v2, premier portfolio, guide LinkedIn

Note globale moyenne **12,6/20**, convocation **44 %**. Portfolio **13,3/20**, mais seulement
**5,7/10** sur « on sent un humain ».

Ce qui a été relevé :

- **Le labo perf ressemble à un match truqué.** La version naïve avait une latence ajoutée à la main.
  Même avouée, elle fragilise le 53 → 98.
- **Le site sonne « agent IA »** : chutes de paragraphe (« C'est voulu. », « Il n'est pas en ligne droite,
  et c'est très bien comme ça. »), slogan du hero, « On en parle autour d'un café ? », horloge en direct
  jugée trop startup.
- **Aucun test automatisé**, alors que le CV parle de méthode.
- Simulateur : une relance sur un ticket résolu était perdue sans message, la ligne d'accueil du journal
  restait affichée, le bouton de panne n'était pas clair.
- La lettre DSI ne parlait pas de l'IA alors que le site y consacre une section.
- Le chiffre du poids optimisé n'était pas le même partout (227, 208, 179 ko).

Ce qui a changé ensuite (round 3) :

- **Latence artificielle retirée** et mesures refaites : 57 → 97, 4,2 Mo → 219 ko. Les chiffres sont
  identiques partout, et la page explique pourquoi la mesure en direct varie.
- **6 tests Playwright** (`npm test`) : accueil, page lisible sans JavaScript, simulateur (escalade,
  anti-doublon, retour, panne), labo, mobile.
- Textes du site réécrits en phrases simples : hero factuel, contact sobre, plus d'horloge.
  La raison réelle de l'abandon des webhooks (le ticket n°27) remplace la formule.
- Le simulateur affiche ses propres limites : balise effaçable, pas d'annulation si le second appel échoue.
- Nouvelle section « Ce que je ne sais pas encore faire ».
- Lettres : clones et boucle racontés pareil partout. Code du stage non public (lettre ESN).
  Une phrase sur les outils d'assistance au code dans la lettre DSI.
- Performance du portfolio lui-même : 67 → 91-96 sur Lighthouse mobile. Le hero est en CSS pur et
  les figures sont chargées à la demande. Accessibilité, bonnes pratiques et SEO : 100.

## Round 3 : CV v3, lettres v3, portfolio v2

Note globale moyenne **13,0/20**, convocation **45 %**. Portfolio **13,7/20**, « humain » **6,5/10**
(contre 5,7). Le simulateur GLPI, testé par les 5 agents avec Playwright, est cité comme « la meilleure
pièce de la candidature ».

Ce qui restait à corriger, et qui l'a été (version finale) :

- **Le chemin retour était flou.** Si les webhooks ne se déclenchent pas sur les appels d'API, qu'est-ce
  qui détecte la résolution d'un ticket ? Le site le dit maintenant : les techniciens traitent les
  tickets depuis l'espace DSI de l'application, et la première version branchée sur les webhooks a
  été abandonnée le 2 juin. Le tuteur a « demandé » le chemin retour (il ne l'a pas « ajouté » lui-même).
- **Des chutes de paragraphe restaient** (« Personne ne me l'a demandé », « le CSS a arrêté d'être de
  la magie », « mon obsession pour les marges »). Elles sont retirées. « Quelqu'un qui relit mon code »
  ne reste que dans le CV.
- **Mesure en direct trompeuse** : les lignes « Requêtes » et « CLS » contredisaient la mesure de
  laboratoire. Elles sont retirées du direct et restent dans le tableau Lighthouse.
- Le simulateur cache « Résoudre » sur un ticket déjà résolu, et le bouton de remise à zéro a un nom accessible.
- Les étiquettes du hero ne répètent plus « Ce que je… », et le mot « prouvé » a disparu.
- Le badge « Disponible » n'apparaît plus deux fois. La photo est réduite sur mobile, et la vignette du labo n'est plus déformée.
- Lettre DSI : la phrase sur l'IA attirait l'attention d'un lecteur hostile. Elle est remplacée par
  l'engagement de respecter la charte informatique de l'établissement.
- CV classique : la protection des données (données fictives, jetons hors du code) apparaît aussi dans le CV.
- Lettre courte : « logiciels de gestion des demandes d'assistance » au lieu de « ticketing ».

On s'arrête là. Entre le round 2 et le round 3, les notes ont gagné 0,4 point, et les critiques
restantes ne se règlent plus par l'écriture (voir ci-dessous).

## Ce que le panel ne peut pas résoudre

- **Le parcours non daté.** Deux profils (bureau des stages, ESN) préféreraient voir les années. C'est
  un choix assumé (voir `00-base/DECISIONS.md` §4) avec une réponse orale prête. Si une convention de
  stage l'exige, les dates se donnent à ce moment-là, sans les cacher.
- **Les profils hostiles à l'IA** (DRH de PME traditionnelle, architecte défense) restent à 10-11/20
  avec le CV classique. Le portfolio, qui assume l'usage d'agents, leur coûte quelques points. C'est
  le prix d'un site honnête, et Hani ne vise pas en priorité ces employeurs.
- **Les preuves que seul Hani peut produire** : maquettes Keewic, recommandation du tuteur, score d'anglais.
