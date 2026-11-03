// Contenu des deux CV. Une seule source : on change le texte ici, puis
// `node candidature/scripts/build.mjs` régénère HTML, PDF et aperçus PNG.
// Toute affirmation doit exister dans 00-base/FAITS.md.

export const contact = {
  name: "Hani Wanice",
  email: "haniwanice@gmail.com",
  phone: "07 83 63 60 58",
  site: "haniwanice.com",
  github: "github.com/HaniWanice",
  linkedin: "linkedin.com/in/hani-wanice-920a813b1",
  location: "Île-de-France · mobile Paris et La Défense",
};

const stage = {
  role: "Stagiaire développeur full-stack",
  org: "DSI, Université Paris-Est Créteil",
  when: "mai – juil. 2026",
  length: "2 mois",
  lead:
    "Les étudiants devaient pouvoir écrire au support de la DSI sans jamais accéder au GLPI interne du personnel. J'ai conçu et codé le prototype qui fait le lien.",
  points: [
    "Deux instances GLPI isolées, chacune avec sa base MariaDB, sous Docker Compose. Entre les deux, une application Next.js / TypeScript qui passe par l'API REST.",
    "Escalade d'un ticket en un clic : un ticket miroir est créé côté DSI, le statut redescend côté étudiant, et un garde-fou empêche la synchronisation de tourner en boucle.",
    "Avant d'écrire le code, j'ai testé et écarté trois pistes (plugin natif, webhooks, synchronisation automatique). Les limites du prototype sont écrites noir sur blanc dans un rapport de 37 pages.",
  ],
  stack: "Next.js · TypeScript · Server Actions · API REST · Docker · MariaDB · GLPI",
};

const keewic = {
  role: "Designer UX/UI, mission indépendante",
  org: "Application mobile Keewic",
  when: "2025",
  points: [
    "Parcours et maquettes Figma de la première version, remis à un développeur pour le passage au code.",
    "Aide au pitch, et beaucoup de questions au porteur du projet pour trancher ce qui méritait d'exister dans la V1.",
  ],
  stack: "Figma · wireframes · prototypage",
};

const projetsCommuns = [
  {
    name: "Labo perf : même stack, deux résultats",
    url: "haniwanice.com/labo",
    when: "2026",
    text:
      "La même page Next.js écrite deux fois : comme on la croise souvent, puis optimisée. Les Web Vitals sont mesurés en direct dans le navigateur du visiteur, et pas recopiés d'un tableau.",
  },
  {
    name: "Todo Smart",
    url: "haniwanice.github.io/todo-smart",
    when: "2026",
    text:
      "Ma liste de tâches, synchronisée en temps réel entre téléphone et ordinateur (React, Firestore). Je m'en sers tous les jours, c'est donc moi qui trouve les bugs en premier.",
  },
  {
    name: "Refonte du portail du personnel UPEC",
    url: "haniwanice.github.io/Protail-design-upec",
    when: "2026",
    text:
      "Proposition personnelle : services regroupés par usage, navigation remise à plat, lisible sur téléphone. HTML et CSS, sans framework.",
  },
];

const projetUniv = {
  name: "Gestion d'une compagnie aérienne",
  url: null,
  when: "2025 · projet de licence",
  text: "Application Laravel + SQLite : comptes utilisateurs, CRUD complet, de la base de données à l'interface.",
};

const formation = [
  {
    title: "Licence 3 Informatique",
    org: "Université Paris-Est Créteil",
    when: "en cours · 2026-2027",
    detail: "Algorithmique, bases de données, C, Java, développement web, systèmes.",
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp, certification en ligne",
    when: "2025",
    detail: "Environ 40 h, suivies en dehors des cours.",
  },
];

const competences = [
  { label: "Front", items: "React, Next.js, TypeScript, JavaScript, HTML, CSS" },
  { label: "Back et données", items: "Node.js, API REST, SQL, MariaDB/MySQL, PHP/Laravel" },
  { label: "Outils", items: "Git, GitHub, Docker Compose, Figma, Vercel" },
  { label: "Vu en cours", items: "C, Java, Python" },
];

const langues = "Français et anglais courants · espagnol intermédiaire";

const interets = [
  "Piano depuis 8 ans, violon en débutant",
  "Dessin, et un faible pour les belles interfaces",
  "Natation, vélo",
  "Bénévolat : promenades de chiens en refuge",
];

export const variants = {
  methode: {
    file: "cv-hani-wanice-methode",
    label: "CV « Méthode » (mentionne l'IA)",
    title: "Développeur web full-stack, en L3 Informatique",
    search: "Stage de 2 à 5 mois · à partir d'avril 2027",
    accroche:
      "Pendant mon stage à la DSI de l'UPEC, j'ai fait communiquer deux logiciels qui n'avaient pas le droit de partager leurs données. Je cherche ce genre de problème : un vrai besoin, des contraintes, et à la fin quelque chose qui tourne et que je sais expliquer.",
    experiences: [stage, keewic],
    projets: projetsCommuns,
    formation,
    competences,
    methode: {
      title: "Comment je travaille",
      text: [
        "Je code avec des agents IA (Claude Code), que je configure moi-même : règles de projet, skills, sous-agents pour la relecture. Je découpe le travail, je relis chaque modification, je teste, et je ne garde que le code que je peux expliquer ligne par ligne.",
        "Pour les données sensibles, j'utilise des modèles qui tournent en local (Ollama, LM Studio). Si l'équipe préfère s'en passer, je suis ses règles.",
      ],
    },
    langues,
    interets,
  },
  classique: {
    file: "cv-hani-wanice-classique",
    label: "CV « Classique » (sans mention de l'IA)",
    title: "Développeur web full-stack, en L3 Informatique",
    search: "Stage de 2 à 5 mois · à partir d'avril 2027",
    accroche:
      "Pendant mon stage à la DSI de l'UPEC, j'ai fait communiquer deux logiciels qui n'avaient pas le droit de partager leurs données. Je cherche ce genre de problème : un vrai besoin, des contraintes, et à la fin quelque chose qui tourne et que je sais expliquer.",
    experiences: [stage, keewic],
    projets: [...projetsCommuns, projetUniv],
    formation,
    competences,
    methode: null,
    langues,
    interets,
  },
};
