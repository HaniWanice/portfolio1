// Tout le texte du site. Chaque fait doit exister dans candidature/00-base/FAITS.md.
// Règle de ce fichier : on décrit ce que Hani a fait, pas comment il travaille.

import lighthouse from "./demo/lighthouse.json";

export const site = {
  name: "Hani Wanice",
  role: "Développeur web full-stack",
  email: "haniwanice@gmail.com",
  phone: "07 83 63 60 58",
  phoneHref: "+33783636058",
  github: "https://github.com/HaniWanice",
  linkedin: "https://www.linkedin.com/in/hani-wanice-920a813b1/",
  url: "https://www.haniwanice.com",
  cv: "/cv/cv-hani-wanice.pdf",
  todo: "https://haniwanice.github.io/todo-smart/",
} as const;

export const hero = {
  status: "Stage dès avril 2027",
  pitch: "Je développe des applications web, de l'interface à la base de données.",
  detail: "Étudiant en L3 informatique à l'Université Paris-Est Créteil. Je cherche un stage de 2 à 5 mois, à Paris ou en Île-de-France.",
};

// La phrase qui s'éclaire pendant le défilement. Les segments "mark" reçoivent un surlignage.
export const statement: { t: string; mark?: boolean }[] = [
  { t: "J'ai relié " },
  { t: "deux logiciels", mark: true },
  { t: " qui n'avaient pas le droit de se parler. Je fais " },
  { t: "l'interface", mark: true },
  { t: ", le serveur et la base de données. Et je " },
  { t: "mesure", mark: true },
  { t: " ce que je livre." },
];

export const facts = [
  { big: "8 semaines", small: "à la DSI de l'université Paris-Est Créteil, au printemps 2026" },
  { big: "L3", small: "informatique, à l'UPEC" },
  { big: "Avril 2027", small: "début de stage possible, jusqu'à fin août" },
];

export const strengths = {
  title: "Ce que je fais bien",
  items: [
    "Comprendre le problème avant de choisir la solution. Au stage, j'ai écarté plusieurs pistes avant de fixer l'architecture.",
    "Aller au bout. Un prototype validé en huit semaines, avec un rapport de 37 pages.",
    "Soigner l'interface. J'ai dessiné des maquettes avant de coder.",
    "Mesurer. Mon labo compare deux versions d'une boutique avec Lighthouse.",
  ],
};

export const learning = {
  title: "Ce que je dois encore apprendre",
  items: [
    "Travailler à plusieurs sur un même dépôt, avec des revues de code.",
    "Écrire des tests sur une vraie base de code.",
    "Mettre en production un outil que des milliers de personnes utilisent.",
  ],
};

export const glpi = {
  title: "Deux logiciels qui ne devaient pas se parler.",
  caption: "Stage à la DSI de l'UPEC, 2026",
  stack: ["Next.js", "TypeScript", "Docker Compose", "MariaDB", "API REST"],
  nodes: [
    { name: "GLPI étudiants", sub: "base MariaDB n°1", note: "L'étudiant écrit au support" },
    { name: "Application Next.js", sub: "Server Actions, API REST", note: "Le pont copie, sans mélanger les bases" },
    { name: "GLPI DSI", sub: "base MariaDB n°2", note: "Le technicien traite le ticket" },
  ],
  forward: "escalade en un clic",
  back: "statut et réponses",
};

export const todo = {
  title: "Todo Smart",
  link: "haniwanice.github.io/todo-smart",
};

const lh = lighthouse as {
  naive: { score: number; bytes: number } | null;
  optim: { score: number; bytes: number } | null;
};

export const labo = {
  title: "Même boutique, deux versions.",
  caption: "Une boutique en ligne codée de deux façons, mesurée avec Lighthouse sur mobile",
  naive: lh.naive?.score ?? 0,
  optim: lh.optim?.score ?? 0,
};

export const others = [
  { name: "Keewic", kind: "Design d'une application mobile", year: "2025" },
  { name: "Compagnie aérienne", kind: "Application Laravel, projet de licence", year: "2025" },
];

export const contactBlock = {
  title: "Parlons-en.",
  text: "Un stage de 2 à 5 mois à partir d'avril 2027. Le plus simple : un e-mail.",
};

/* ---- Pages détaillées ---- */

export const glpiDetail = {
  intro: [
    "La DSI de l'université gère ses demandes de support dans GLPI. Les étudiants, jusqu'à 40 000 personnes, avaient aussi besoin d'écrire au support. Mais pas question de leur ouvrir l'instance du personnel.",
    "Mon travail : faire passer une demande d'un monde à l'autre, sans que les deux bases se touchent. J'ai travaillé seul sur ce sujet, avec un ingénieur de la DSI qui validait chaque étape, du 4 mai au 1er juillet 2026.",
  ],
  rejected: [
    {
      name: "Le transfert natif",
      why: "GLPI sait transférer un ticket d'une entité à une autre, mais dans la même base. Ça revenait à ouvrir la porte qu'on voulait garder fermée.",
    },
    {
      name: "Les webhooks",
      why: "Ma première version du chemin retour reposait dessus. Le 2 juin, en testant le ticket n°27, j'ai compris que GLPI ne les déclenche pas quand la modification vient de l'API. J'ai tout basculé sur une double écriture : chaque action passe par l'application, qui met à jour les deux GLPI.",
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
    "Le chemin retour, demandé par mon tuteur pendant la démo du 22 mai. Les techniciens traitent les tickets escaladés depuis l'espace DSI de l'application, qui répercute statut et réponses côté étudiant.",
    "Un coupe-circuit contre les boucles de synchronisation, et des sessions API fermées dans un finally, après avoir saturé GLPI de sessions fantômes.",
  ],
  limits:
    "Ce que le prototype ne prouve pas : la tenue à 40 000 utilisateurs, l'authentification centralisée, les pièces jointes. Je l'ai écrit dans mon rapport de 37 pages, pour que la personne qui reprendra le projet le sache avant moi.",
  lesson:
    "Le plus dur n'était pas technique. Il a fallu comprendre ce que la DSI avait le droit de faire avant de chercher comment le faire.",
};

export const allProjects = [
  {
    id: "pont-glpi",
    name: "Pont GLPI",
    kind: "Stage à la DSI de l'UPEC",
    year: "2026",
    stack: "Next.js · TypeScript · Docker · MariaDB",
    href: "/projets/pont-glpi",
  },
  {
    id: "labo",
    name: "Labo perf",
    kind: "La même boutique, codée de deux façons",
    year: "2026",
    stack: "Next.js · Lighthouse",
    href: "/labo",
  },
  {
    id: "todo",
    name: "Todo Smart",
    kind: "Liste de tâches synchronisée entre appareils",
    year: "2026",
    stack: "React · Firebase",
    href: site.todo,
    external: true,
  },
  {
    id: "keewic",
    name: "Keewic",
    kind: "Design d'une application mobile",
    year: "2025",
    stack: "Figma",
  },
  {
    id: "airline",
    name: "Compagnie aérienne",
    kind: "Application Laravel, projet de licence",
    year: "2025",
    stack: "PHP · Laravel · SQLite",
  },
];

export const about = {
  title: "Qui je suis.",
  lead:
    "J'ai 24 ans et je suis en troisième année de licence informatique à l'Université Paris-Est Créteil. Je cherche un stage de développeur web de 2 à 5 mois, à partir d'avril 2027.",
  story: [
    {
      when: "Au collège",
      text: "Un stage de 3e dans une agence web. J'étais là pour observer, j'ai surtout demandé à essayer. Je suis reparti avec une page HTML bancale et l'envie de recommencer.",
    },
    {
      when: "2025",
      text: "Une mission de design : parcours, écrans et maquettes Figma d'une application mobile, remis à un développeur. Et la certification Responsive Web Design de freeCodeCamp, suivie en plus des cours.",
    },
    {
      when: "Printemps 2026",
      text: "Huit semaines à la DSI de l'université. Un vrai sujet, un ingénieur qui valide chaque étape, et un prototype qui relie deux GLPI.",
    },
    {
      when: "Avril 2027",
      text: "Un stage de 2 à 5 mois dans une équipe qui me confie un vrai sujet.",
    },
  ],
  outside: [
    { t: "Piano", d: "Depuis 8 ans. Beaucoup d'Einaudi, un peu de violon en débutant." },
    { t: "Dessin", d: "Surtout au crayon, dans un carnet." },
    { t: "Natation, vélo", d: "Pour sortir un peu de l'écran." },
    { t: "Refuge", d: "Je promène des chiens dans un refuge, en bénévole." },
  ],
};
