// Tout le texte du site au même endroit. Chaque fait vient de
// candidature/00-base/FAITS.md : si on change un fait ici, on le change là-bas aussi.

export const site = {
  name: "Hani Wanice",
  email: "haniwanice@gmail.com",
  phone: "07 83 63 60 58",
  phoneHref: "+33783636058",
  github: "https://github.com/HaniWanice",
  linkedin: "https://www.linkedin.com/in/hani-wanice-920a813b1/",
  url: "https://www.haniwanice.com",
  cv: "/cv/cv-hani-wanice.pdf",
  location: "Île-de-France",
} as const;

export const chapters = [
  { id: "parcours", label: "Parcours" },
  { id: "stage", label: "Le stage" },
  { id: "projets", label: "Projets" },
  { id: "labo", label: "Labo" },
  { id: "methode", label: "Méthode" },
  { id: "contact", label: "Contact" },
] as const;

export const quick = [
  {
    k: "Ce que je fais",
    v: "Des applications web de bout en bout : interface, API, base de données, conteneurs.",
  },
  {
    k: "Ce que j'ai prouvé",
    v: "Deux mois à la DSI de l'UPEC, un prototype qui relie deux GLPI isolés, livré et documenté.",
  },
  {
    k: "Ce que je cherche",
    v: "Un stage de développeur de 2 à 5 mois, d'avril à fin août 2027, à Paris ou en Île-de-France.",
  },
];

export type Step = { when: string; title: string; text: string; tag?: string };

export const story: Step[] = [
  {
    when: "Collège",
    title: "Une agence web, un stage de 3e",
    text:
      "J'étais là pour observer. J'ai surtout demandé si je pouvais essayer, et je suis reparti avec une page HTML bancale et l'envie de recommencer.",
  },
  {
    when: "Licence",
    title: "Les bases, pour de vrai",
    text:
      "Algorithmique, bases de données, C, Java. Ce qu'on apprend à la fac ne fait pas un site, mais ça explique pourquoi un site tient ou s'effondre.",
  },
  {
    when: "2025",
    title: "Dessiner avant de coder",
    text:
      "Une mission de design pour une application mobile : parcours, écrans, maquettes Figma. J'ai appris à défendre un choix d'interface, et à en lâcher un quand l'argument d'en face était meilleur.",
    tag: "Figma · UX",
  },
  {
    when: "2025",
    title: "Le responsive, tout seul",
    text:
      "La certification Responsive Web Design de freeCodeCamp, environ 40 heures le soir. C'est là que le CSS a arrêté d'être de la magie.",
    tag: "HTML · CSS",
  },
  {
    when: "Mai 2026",
    title: "Deux mois dans une DSI",
    text:
      "Huit semaines sur un sujet de la DSI, avec un ingénieur qui validait chaque étape. Le détail est juste en dessous.",
    tag: "Next.js · Docker · GLPI",
  },
  {
    when: "Avril 2027",
    title: "La suite, peut-être chez vous",
    text:
      "Je cherche un stage de 2 à 5 mois : un vrai sujet à prendre en main, et quelqu'un pour relire mon code.",
  },
];

export const stage = {
  title: "Deux GLPI qui ne devaient pas se parler",
  org: "Direction des systèmes d'information, Université Paris-Est Créteil",
  when: "4 mai au 1er juillet 2026",
  intro: [
    "La DSI gère ses demandes de support dans GLPI. Les étudiants, jusqu'à 40 000 personnes, avaient aussi besoin d'écrire au support. Mais pas question de leur ouvrir l'instance interne, avec les tickets du personnel dedans.",
    "Mon travail : trouver comment faire passer une demande d'un monde à l'autre, sans que les deux bases se touchent.",
  ],
  rejected: [
    {
      name: "Le transfert natif",
      why: "GLPI sait transférer un ticket d'une entité à une autre, mais dans la même base. Ça revenait à ouvrir la porte qu'on voulait garder fermée.",
    },
    {
      name: "Les webhooks",
      why: "J'ai commencé par là. Le 2 juin, en testant le ticket n°27, j'ai compris que GLPI ne déclenche pas ses webhooks quand la modification vient de l'API. La moitié du flux ne pouvait pas marcher.",
    },
    {
      name: "La synchronisation automatique",
      why: "Tout recopier en continu, c'était recréer la fuite de données qu'on cherchait à éviter.",
    },
  ],
  built: [
    "Deux instances GLPI isolées, chacune avec sa base MariaDB, sous Docker Compose.",
    "Une application Next.js qui parle aux deux via l'API REST, avec des Server Actions côté serveur.",
    "Une escalade en un clic : ticket miroir côté DSI, statut mis à jour côté étudiant. Le lien passe par une balise dans le titre, parce que le champ external_id prévu pour ça n'est pas interrogeable par l'API de recherche.",
    "Un anti-doublon, après une démo où chaque modification d'un ticket étudiant en recréait un côté DSI.",
    "Le chemin retour, ajouté par mon tuteur en pleine démo du 22 mai, au moment où je pensais avoir fini.",
    "Un coupe-circuit contre les boucles de synchronisation, et des sessions API fermées dans un finally, après avoir saturé GLPI de sessions fantômes.",
  ],
  limits:
    "Ce que le prototype ne prouve pas : la tenue à 40 000 utilisateurs, l'authentification centralisée, les pièces jointes. Je l'ai écrit noir sur blanc dans mon rapport de 37 pages, parce que la personne qui reprendra le projet doit le savoir avant moi.",
  lesson:
    "Ce que j'en retiens : le problème technique n'était pas celui que je croyais. Le plus dur a été de comprendre ce que la DSI avait le droit de faire, avant de chercher comment le faire.",
};

export type Project = {
  id: string;
  name: string;
  kind: string;
  year: string;
  text: string;
  stack: string;
  image?: string;
  href?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    id: "labo",
    name: "Labo perf",
    kind: "Démo · performance web",
    year: "2026",
    text: "La même page Next.js écrite deux fois : une version qui accumule les erreurs courantes, puis une version optimisée. Lighthouse mobile : 57 contre 97.",
    stack: "Next.js · Web Vitals · next/image",
    image: "/images/labo.jpg",
    href: "/labo",
  },
  {
    id: "todo",
    name: "Todo Smart",
    kind: "Application · usage quotidien",
    year: "2026",
    text: "Ma liste de tâches. Une case cochée sur l'ordinateur apparaît sur le téléphone, sans recharger. Je m'en sers tous les jours, donc c'est moi qui trouve les bugs en premier.",
    stack: "React · Firebase · Firestore",
    image: "/images/todo-smart.jpg",
    href: "https://haniwanice.github.io/todo-smart/",
    code: "https://github.com/HaniWanice/todo-smart",
  },
  {
    id: "portail",
    name: "Portail du personnel UPEC",
    kind: "Refonte d'interface · proposition perso",
    year: "2026",
    text: "La page que le personnel de l'université ouvre chaque matin, repensée : services regroupés par usage, navigation remise à plat, lisible sur téléphone. Personne ne me l'a demandé.",
    stack: "HTML · CSS",
    image: "/images/portail-paris-est.jpg",
    href: "https://haniwanice.github.io/Protail-design-upec/",
    code: "https://github.com/HaniWanice/Protail-design-upec",
  },
  {
    id: "keewic",
    name: "Keewic",
    kind: "Design d'application mobile · mission",
    year: "2025",
    text: "Parcours et maquettes de la première version d'une app, remis à un développeur. La version en ligne a changé depuis : ici je parle du travail de conception, pas du produit publié.",
    stack: "Figma · wireframes · prototypage",
  },
  {
    id: "airline",
    name: "Compagnie aérienne",
    kind: "Application · projet de licence",
    year: "2025",
    text: "Un back-office pour gérer les comptes d'une compagnie aérienne. Mon premier projet complet, de la base de données à l'écran.",
    stack: "PHP · Laravel · SQLite",
  },
];

export const methode = {
  title: "Comment je travaille",
  intro:
    "Je code souvent avec un agent IA, Claude Code. Voici comment, et avec quelles limites.",
  steps: [
    {
      t: "Cadrer",
      d: "Avant la première ligne : ce qu'on construit, ce qu'on ne construit pas, comment on saura que ça marche. Ça finit dans un fichier de règles que l'agent lit à chaque session.",
    },
    {
      t: "Découper",
      d: "Des étapes assez petites pour que je puisse relire chaque modification en entier. Une étape, un commit.",
    },
    {
      t: "Relire",
      d: "Je lis chaque diff. Quand je ne comprends pas une ligne, je demande pourquoi, et si la réponse ne me convainc pas, je la réécris moi-même.",
    },
    {
      t: "Vérifier",
      d: "Lancer, mesurer, tester. Ce site a des tests de bout en bout (Playwright) qui rejouent le simulateur et le labo. Un sous-agent relit aussi chaque diff avec une grille différente de la mienne.",
    },
    {
      t: "Documenter",
      d: "Ce qui a été choisi, ce qui a été écarté, et pourquoi. La personne qui reprend le code ne doit pas avoir besoin de moi.",
    },
  ],
  guardrails: [
    "Les règles de l'équipe passent avant mes habitudes. Si vous travaillez sans IA, je travaille sans IA.",
    "Rien de confidentiel dans un service en ligne. Pour ce qui est sensible, j'utilise des modèles qui tournent en local (Ollama, LM Studio).",
    "Pas de secret, de clé ou de donnée personnelle dans un prompt. Le code de mon stage n'est pas public et ne l'a jamais été.",
  ],
  outro:
    "Ce site a été construit comme ça. Le code, l'historique des commits et le fichier de règles que l'agent lit à chaque session sont sur GitHub.",
};

export const notYet = {
  title: "Ce que je ne sais pas encore faire",
  intro: "C'est en partie pour ça que je cherche un stage plutôt qu'une mission en freelance.",
  items: [
    "Travailler à plusieurs sur le même dépôt, avec des revues de code régulières. Jusqu'ici, j'ai surtout codé seul, avec un tuteur qui validait.",
    "Écrire des tests unitaires sur une vraie base de code, avec une intégration continue qui bloque ce qui casse.",
    "Mettre en production quelque chose dont des milliers de personnes se servent, puis le surveiller. Mon prototype de stage n'a jamais dépassé l'environnement de test.",
  ],
};

export const outside = [
  { t: "Piano", d: "Depuis 8 ans. Beaucoup d'Einaudi, un peu de violon en débutant." },
  { t: "Dessin", d: "C'est probablement de là que vient mon obsession pour les marges." },
  { t: "Natation, vélo", d: "Les meilleurs endroits pour débloquer un bug." },
  { t: "Refuge", d: "Je promène des chiens dans un refuge, en bénévole." },
];
