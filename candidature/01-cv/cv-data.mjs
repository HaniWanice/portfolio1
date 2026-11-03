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
  location: "Île-de-France, mobile dans toute la région",
};

const stage = {
  role: "Stagiaire développeur",
  org: "Direction des systèmes d'information, Université Paris-Est Créteil",
  when: "4 mai – 1er juil. 2026",
  length: "8 semaines",
  lead:
    "Seul développeur sur le sujet, encadré par un ingénieur de la DSI. Objectif : permettre aux étudiants d'écrire au support sans leur donner accès au GLPI du personnel.",
  points: [
    "Prototype fonctionnel : deux GLPI isolés (une base MariaDB chacun, sous Docker Compose) et une application Next.js / TypeScript qui écrit dans les deux via l'API REST, dans la même action.",
    "Escalade d'un ticket en un clic, puis retour des statuts et des réponses de la DSI vers l'étudiant. Coupe-circuit contre les boucles, détection des faux « 200 OK » de GLPI, sessions API fermées même en cas d'erreur.",
    "Webhooks et transfert natif testés puis écartés, raisons à l'appui. Prototype validé par le tuteur sur un scénario de bout en bout, et rapport de 37 pages qui détaille aussi ses limites.",
  ],
  stack: "Next.js · TypeScript · API REST · Docker Compose · MariaDB · GLPI",
};

const keewic = {
  role: "Design UX/UI d'une application mobile",
  org: "Mission pour un porteur de projet (Keewic)",
  when: "2025",
  points: [
    "Parcours, wireframes et maquettes Figma de la première version, remis à un développeur pour le passage au code.",
    "Aide au pitch, et beaucoup de questions au porteur de projet pour décider de ce qui entrait dans la V1.",
  ],
  stack: "Figma · wireframes · prototypage",
};

const SITE = "haniwanice.com";

const projetsCommuns = [
  {
    name: "Labo perf : une page, deux versions",
    url: SITE + "/labo",
    when: "2026",
    text:
      "Une boutique en ligne (16 produits, panier, vraies photos) codée deux fois en Next.js : d'abord avec les erreurs courantes, puis optimisée. Lighthouse mobile : score 65 → 97, poids 11,8 Mo → 437 ko.",
  },
  {
    name: "Todo Smart",
    url: "haniwanice.github.io/todo-smart",
    when: "2026",
    text:
      "Liste de tâches synchronisée en temps réel entre téléphone et ordinateur (React, Firestore). Je l'utilise tous les jours depuis sa mise en ligne.",
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
    when: "En cours, 2026-2027. Poursuite en master envisagée.",
    detail: "Algorithmique, bases de données, développement web. Projets en C et en Java.",
  },
  {
    title: "Certification Responsive Web Design",
    org: "freeCodeCamp, 2025",
    when: null,
    detail: "Suivie en autonomie, en plus des cours.",
  },
];

const competences = [
  { label: "Front", items: "React, Next.js, TypeScript, HTML/CSS (responsive, accessibilité)" },
  { label: "Back et données", items: "API REST, Node.js, SQL (MariaDB, MySQL, SQLite), PHP/Laravel, Firebase" },
  { label: "Outils", items: "Git, GitHub, Docker Compose, Postman, Figma" },
  { label: "Aussi en licence", items: "C, Java, Python" },
];

const langues = "Français et anglais courants, espagnol intermédiaire";

const interets = [
  "Piano depuis 8 ans, violon en débutant",
  "Dessin",
  "Natation, vélo",
  "Bénévole dans un refuge pour chiens",
];

const base = {
  title: "Étudiant en L3 Informatique · développement web",
  search: "Stage développeur web · avril à août 2027 (2 à 5 mois)",
  accroche:
    "À la DSI de l'UPEC, j'ai relié l'outil de support des étudiants à celui du personnel, sans que l'un puisse lire l'autre. Je cherche un stage où l'on me confie un sujet de ce genre, avec quelqu'un qui relit mon code.",
  experiences: [stage, keewic],
  formation,
  competences,
  langues,
  interets,
  photo: true,
};

// Variante grand public de la puce technique du stage (CV classique) : même fait, moins de jargon.
const stageClassique = {
  ...stage,
  points: [
    stage.points[0],
    "Envoi d'un ticket à la DSI en un clic, et retour des statuts et des réponses vers l'étudiant. Gestion des doublons, des boucles de synchronisation et des pannes de l'API.",
    "Webhooks et transfert natif testés puis écartés. Essais uniquement sur des données fictives, jetons d'accès hors du code. Prototype validé par le tuteur, rapport de 37 pages qui détaille aussi ses limites.",
  ],
};

export const variants = {
  methode: {
    ...base,
    file: "cv-hani-wanice-methode",
    label: "CV « Méthode » (mentionne l'IA)",
    projets: projetsCommuns,
    methode: {
      title: "Comment je travaille",
      text: [
        "Je développe avec Claude Code, configuré pour chaque projet (règles, skills, sous-agents de relecture). Petites étapes, relecture de chaque diff, tests de bout en bout avec Playwright. Le fichier de règles de mon site est public sur GitHub.",
        "Données sensibles : modèles en local (Ollama, LM Studio). Pour le reste, je m'aligne sur les règles de l'équipe.",
      ],
    },
  },
  classique: {
    ...base,
    file: "cv-hani-wanice-classique",
    label: "CV « Classique » (sans mention de l'IA)",
    experiences: [stageClassique, keewic],
    projets: [...projetsCommuns, projetUniv],
    methode: null,
  },
  classiqueSansPhoto: {
    ...base,
    file: "cv-hani-wanice-classique-sans-photo",
    label: "CV « Classique », sans photo (recruteurs traditionnels)",
    experiences: [stageClassique, keewic],
    projets: [...projetsCommuns, projetUniv],
    methode: null,
    photo: false,
  },
};
