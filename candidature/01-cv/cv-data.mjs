// Contenu des CV. Une seule source : on change le texte ici, puis
// `node candidature/scripts/build.mjs` régénère HTML, PDF et aperçus PNG.
// Toute affirmation doit exister dans 00-base/FAITS.md.
// Règle de rédaction : un recruteur RH lit ce CV en 30 secondes. Phrases courtes, listes, mots-clés.

export const contact = {
  name: "Hani Wanice",
  email: "haniwanice@gmail.com",
  phone: "07 83 63 60 58",
  site: "haniwanice.com",
  github: "github.com/HaniWanice",
  linkedin: "linkedin.com/in/hani-wanice-920a813b1",
  location: "Île-de-France",
};

const stage = {
  role: "Stagiaire développeur web",
  org: "DSI, Université Paris-Est Créteil",
  when: "Mai – juil. 2026 · 8 semaines",
  context: "Relier l'outil de support des étudiants à celui du personnel, sans mélanger leurs données.",
  schema: ["GLPI étudiants", "Application Next.js", "GLPI DSI"],
  points: [
    "Conception et développement du prototype (Next.js, TypeScript, API REST)",
    "Infrastructure Docker : deux GLPI isolés, deux bases MariaDB séparées",
    "Transmission d'un ticket en un clic, réponses renvoyées à l'étudiant",
    "Prototype validé par le tuteur, rapport technique de 37 pages",
  ],
  tags: ["Next.js", "TypeScript", "Docker", "MariaDB", "GLPI"],
};

const keewic = {
  role: "Designer UX/UI, mission",
  org: "Application mobile Keewic",
  when: "2025",
  points: ["Parcours et maquettes Figma de la première version", "Maquettes livrées à un développeur pour le passage au code"],
  tags: ["Figma", "Wireframes", "Prototypage"],
};

const labo = {
  name: "Labo perf",
  url: "haniwanice.com/labo",
  text: "Une boutique en ligne codée en deux versions, puis mesurée",
  scores: { label: "Score Lighthouse mobile", before: 65, after: 97 },
};
const todo = {
  name: "Todo Smart",
  url: "haniwanice.github.io/todo-smart",
  text: "Liste de tâches synchronisée entre appareils (React, Firebase)",
};
const airline = {
  name: "Compagnie aérienne",
  url: null,
  text: "Application de gestion en Laravel et SQLite (projet de licence)",
};

const formation = [
  {
    title: "Licence Informatique (Bac+3)",
    org: "Université Paris-Est Créteil (UPEC)",
    when: "L3 en cours · 2026-2027",
    tags: ["Algorithmique", "Bases de données", "Développement web", "C", "Java"],
  },
  {
    title: "Certification Responsive Web Design",
    org: "freeCodeCamp",
    when: "2025",
    tags: [],
  },
];

const competences = [
  { label: "Front-end", items: ["React", "Next.js", "TypeScript", "HTML / CSS"] },
  { label: "Back-end", items: ["Node.js", "API REST", "PHP / Laravel"] },
  { label: "Données", items: ["SQL", "MariaDB", "MySQL", "Firebase"] },
  { label: "Outils", items: ["Git", "Docker", "Figma", "Postman"] },
  { label: "Vus en licence", items: ["C", "Java", "Python"] },
];

const langues = [
  { name: "Français", level: "Courant", dots: 5 },
  { name: "Anglais", level: "Courant", dots: 4 },
  { name: "Espagnol", level: "Intermédiaire", dots: 3 },
];

const savoirEtre = ["Calme", "À l'écoute", "Communication claire", "Autonomie"];

const interets = ["Piano (8 ans)", "Dessin", "Natation, vélo", "Bénévolat en refuge animalier"];

const atouts = [
  { b: "Expérience en DSI", t: "8 semaines sur un vrai projet, livré et validé" },
  { b: "Full-stack", t: "interface, API, base de données et Docker" },
  { b: "Sens du design", t: "maquettes Figma avant le code" },
  { b: "Rigueur", t: "tests, documentation, mesures de performance" },
];

const base = {
  title: "Étudiant en Licence 3 Informatique (Bac+3)",
  school: "Université Paris-Est Créteil (UPEC) · Développement web full-stack",
  search: "Recherche un stage de développeur web · avril à août 2027 · 2 à 5 mois",
  atouts,
  experiences: [stage, keewic],
  formation,
  competences,
  langues,
  savoirEtre,
  interets,
  photo: true,
};

export const variants = {
  methode: {
    ...base,
    file: "cv-hani-wanice-methode",
    label: "CV « Méthode » (mentionne l'IA)",
    projets: [labo, todo],
    methode: {
      title: "Méthode de travail",
      points: [
        "Claude Code au quotidien : règles par projet, relecture de chaque modification, tests Playwright",
        "Données sensibles : modèles locaux (Ollama, LM Studio), ou pas d'IA selon les règles de l'équipe",
      ],
    },
  },
  classique: {
    ...base,
    file: "cv-hani-wanice-classique",
    label: "CV « Classique » (sans mention de l'IA)",
    projets: [labo, todo, airline],
    methode: null,
  },
  classiqueSansPhoto: {
    ...base,
    file: "cv-hani-wanice-classique-sans-photo",
    label: "CV « Classique », sans photo (recruteurs traditionnels)",
    projets: [labo, todo, airline],
    methode: null,
    photo: false,
  },
};
