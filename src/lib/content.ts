// Tout le texte du site. Chaque fait doit exister dans candidature/00-base/FAITS.md.
// Le ton : première personne, phrases simples, pas de vocabulaire de CV.

import lighthouse from "./demo/lighthouse.json";

export const site = {
  name: "Hani Wanice",
  role: "Étudiant en L3 informatique",
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
  detail:
    "Je développe des applications web, de l'interface à la base de données. Je cherche un stage de 2 à 5 mois à partir d'avril 2027, en Île-de-France.",
};

// La phrase qui s'éclaire pendant le défilement. Les segments "mark" reçoivent un surlignage.
export const statement: { t: string; mark?: boolean }[] = [
  { t: "Comprendre", mark: true },
  { t: "S'adapter", mark: true },
  { t: "Résoudre", mark: true },
];

export const facts = [
  { big: "8 semaines d'expérience", small: "à la DSI de l'université Paris-Est, au printemps 2026" },
  { big: "L3", small: "informatique, à l'UPEC" },
  { big: "Avril 2027", small: "future de stage (en recherche), jusqu'à fin août" },
];

export const strengths = {
  title: "Ce que je sais faire",
  items: [
    "J'apprends vite. React et Next.js, je les ai appris sur des projets à moi.",
    "Je prends le temps de comprendre. Au stage, j'ai écarté trois pistes avant de commencer à coder.",
    "Ce que je commence, je le finis. Mon tuteur a validé le prototype en deux mois, et j'ai rendu un rapport de 37 pages.",
    "L'interface compte pour moi. Pour Keewic, j'ai dessiné les écrans avant de les confier à un développeur.",
  ],
};

export const learning = {
  title: "Ce qu'il me reste à apprendre",
  items: [
    "Travailler dans une équipe de développement, avec des relectures de code en entreprise.",
    "Écrire des tests qui tournent tout seuls sur un vrai projet.",
    "Mettre en production un outil que des milliers de personnes utilisent.",
  ],
};

export const glpi = {
  title: "2 mois de Stage à la DSI de l'UPEC",
  caption: "deux logiciels de support (GLPI) deux bases de données séparées et indépendant qui communique via une seul interface et qui arrive a se transmettre les données de maniere sécurisé",
  stack: ["Next.js", "TypeScript", "Docker Compose", "MariaDB", "API REST"],
  nodes: [
    { name: "GLPI étudiants", sub: "base MariaDB n°1", note: "L'étudiant écrit au support" },
    { name: "Application Next.js", sub: "Server Actions, API REST", note: "Le pont fait passer la demande, sans mélanger les bases" },
    { name: "GLPI DSI", sub: "base MariaDB n°2", note: "Le technicien traite le ticket" },
  ],
  forward: "transfere de données en un clic",
  back: "statut et réponses",
};

export const todo = {
  title: "Todo Smart",
  caption: "Ma liste de tâches, synchronisée entre le téléphone et l'ordinateur. Je m'en sers tous les jours.",
  label: "Ouvrir l'application",
};

const lh = lighthouse as {
  naive: { score: number; bytes: number } | null;
  optim: { score: number; bytes: number } | null;
};

export const labo = {
  title: "Même boutique, deux versions.",
  caption: "Une boutique en ligne codée deux fois, mesurée avec Lighthouse sur mobile",
  naive: lh.naive?.score ?? 0,
  optim: lh.optim?.score ?? 0,
};

export const others = [
  { name: "Keewic", kind: "Design d'une application mobile", year: "2025" },
  { name: "Compagnie aérienne", kind: "Application Laravel, projet de licence", year: "2025" },
];

export const contactBlock = {
  title: "Parlons-en.",
  text: "Je cherche un stage de 2 à 5 mois à partir d'avril 2027, en Île-de-France. Je suis plus à l'aise à l'écrit. Le plus simple est un e-mail.",
};

/* ---- Pages détaillées ---- */

export const glpiDetail = {
  intro: [
    "La DSI de l'université gère ses demandes de support dans GLPI. Les étudiants, jusqu'à 40 000 personnes, avaient aussi besoin d'écrire au support. Mais je ne pouvais pas leur ouvrir l'instance du personnel.",
    "J'ai fait passer une demande d'un logiciel à l'autre, sans que les deux bases se touchent. J'ai travaillé seul sur ce sujet, avec un ingénieur de la DSI qui validait chaque étape, du 4 mai au 1er juillet 2026.",
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
    "Ce que le prototype ne prouve pas : la tenue à 40 000 utilisateurs, l'authentification centralisée, les pièces jointes. Je l'ai écrit dans mon rapport de 37 pages, pour que la personne qui reprendra le projet ne découvre pas ces limites toute seule.",
  lesson:
    "Le plus dur a été de comprendre ce que la DSI avait le droit de faire, avant de chercher comment le faire.",
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
    "Je suis en troisième année de licence informatique à l'Université Paris-Est Créteil. En dehors des cours, je passe une bonne partie de mon temps libre sur des projets web. Je cherche un stage de développeur web de 2 à 5 mois à partir d'avril 2027, en Île-de-France.",
  story: [
    {
      when: "Au collège",
      text: "Un stage de 3e dans une agence web. J'étais là pour observer, j'ai surtout demandé à essayer. Je suis reparti avec une page HTML bancale et l'envie de recommencer.",
    },
    {
      when: "2025",
      text: "Une mission de design rémunérée pour une application mobile. J'ai dessiné le parcours et les écrans dans Figma, puis remis les maquettes à un développeur. La même année, j'ai obtenu la certification Responsive Web Design de freeCodeCamp, en plus des cours.",
    },
    {
      when: "Printemps 2026",
      text: "Huit semaines à la DSI de l'université, sur un vrai sujet. Un ingénieur validait chaque étape. À la fin, un prototype reliait les deux logiciels de support.",
    },
    {
      when: "Avril 2027",
      text: "J'aimerais un stage de 2 à 5 mois dans une équipe qui me laisse prendre un sujet en main.",
    },
  ],
  outside: [
    { t: "Piano", d: "Depuis 8 ans. Beaucoup d'Einaudi. Un peu de violon aussi, en débutant." },
    { t: "Dessin", d: "Surtout au crayon, dans un carnet." },
    { t: "Natation, vélo", d: "Pour sortir un peu de l'écran." },
    { t: "Voyages", d: "Grèce, Espagne, Italie, Portugal. J'aime marcher dans une ville que je ne connais pas." },
    { t: "Refuge", d: "Je promène des chiens dans un refuge, avec l'association Booglaw." },
  ],
};
