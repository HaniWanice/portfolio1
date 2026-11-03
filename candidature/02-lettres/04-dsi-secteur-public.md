---
format: lettre
cible: DSI (université, collectivité, hôpital, administration) ou service informatique interne
cv: classique (ou classique sans photo)
entreprise: [Établissement] · [Direction / service] · [Adresse]
objet: Candidature, stage en développement au sein de la DSI (avril à août 2027)
destinataire: Madame, Monsieur,
signature: Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
---
Étudiant en troisième année de licence informatique à l'Université Paris-Est Créteil, je cherche un stage de deux à cinq mois à partir d'avril 2027. J'ai déjà passé huit semaines dans une DSI, celle de l'UPEC, au printemps 2026, et je souhaite poursuivre dans ce cadre.

Le sujet paraissait simple : permettre aux étudiants de déposer des demandes d'assistance sans leur ouvrir le GLPI utilisé par le personnel. Il fallait garder les deux bases séparées, ne jamais toucher à l'instance de production, et proposer un outil que les techniciens du support puissent utiliser sans formation. J'ai construit un prototype composé de deux instances GLPI isolées et d'une application Next.js qui transmet les tickets de l'une à l'autre et fait redescendre les réponses.

La question des données a guidé plusieurs choix. Le ticket transmis à la DSI ne contient que ce qui sert à traiter la demande, les jetons d'accès à l'API sont tenus hors du code, et tous les essais ont été faits sur des données fictives. Mon rapport de stage détaille ces choix, les limites du prototype (authentification centralisée, montée en charge) et les étapes à prévoir avant une mise en production. J'utilise des outils d'assistance au code lorsque l'équipe l'autorise, jamais sur des données réelles, et je travaille tout aussi bien sans.

Je souhaiterais mettre cette expérience à profit au sein de [Établissement], par exemple sur [un projet identifié : portail usagers, outil interne, migration]. Je suis disponible pour un entretien, sur place ou à distance.
<!-- notes -->
Vérifier avant envoi : « le ticket transmis ne contient que ce qui sert à traiter la demande » doit correspondre à ton code (titre, description, catégorie mappée).
Les DSI publiques recrutent souvent via leurs propres sites, la PEP (place de l'emploi public) et les bureaux des stages.
Demander à Miguel Cancela Da Fonseca s'il accepte d'être cité comme référence.
