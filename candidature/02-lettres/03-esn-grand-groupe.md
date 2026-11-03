---
format: lettre
cible: ESN / grand groupe / banque-assurance (processus, équipes structurées)
cv: classique
entreprise: [Entreprise]
objet: Candidature, stage développeur full-stack (avril à août 2027, 2 à 5 mois)
destinataire: Madame, Monsieur,
signature: Je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées.
---
Je suis en troisième année de licence informatique à l'Université Paris-Est Créteil et je cherche un stage de développeur full-stack de 2 à 5 mois, à partir d'avril 2027. Je vous écris pour [l'offre « intitulé exact », réf. XXX / le pôle XXX, si candidature spontanée].

Mon stage de cette année à la Direction des Systèmes d'Information de l'UPEC m'a appris ce qui change quand on ne part pas d'une page blanche. Il fallait permettre aux étudiants de contacter le support sans exposer le GLPI interne du personnel, donc composer avec un outil existant, des règles de confidentialité et des utilisateurs qui ne sont pas développeurs. J'ai étudié trois approches avant d'en retenir une, puis j'ai réalisé le prototype : deux instances GLPI isolées sous Docker, reliées par une application Next.js / TypeScript via l'API REST, avec escalade des tickets et synchronisation des statuts dans les deux sens.

J'ai aussi rendu un rapport de 37 pages qui documente les choix faits, les pistes écartées et les limites du prototype (montée en charge, authentification centralisée). Dans une équipe de plusieurs personnes, j'ai vu que cette partie compte autant que le code : quelqu'un d'autre doit pouvoir reprendre le travail.

[Entreprise] m'intéresse parce que [raison précise : un métier, un projet, une équipe, une technologie utilisée]. J'y chercherais un cadre où apprendre les pratiques d'une équipe établie (revue de code, tests, mise en production), tout en prenant en charge un vrai sujet.

Je me tiens à votre disposition pour un entretien.
<!-- notes -->
Version la plus formelle. Pas de mention de l'IA : si on te pose la question en entretien, voir 00-base/DECISIONS.md §5.
