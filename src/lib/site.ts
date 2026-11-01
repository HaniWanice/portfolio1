export const site = {
  firstName: "Hani",
  name: "Hani Wanice",
  role: "Développeur web full-stack",
  email: "haniwanice@gmail.com",
  phone: "07 83 63 60 58",
  phoneHref: "+33783636058",
  location: "Paris-Est · Île-de-France",
  school: "Université Paris-Est",
  github: "https://github.com/HaniWanice",
  linkedin: "https://www.linkedin.com/in/aniwanis",
  cv: "/cv/hani-wanice-cv.pdf",
  siteUrl: "https://haniwanice.com",
} as const;

export const availability = [
  {
    label: "Stage",
    value: "2 à 4 mois",
    when: "dès avril 2027",
    note: "développement web, data ou SI",
  },
  {
    label: "Alternance",
    value: "24 mois",
    when: "dès septembre 2027",
    note: "rythme école / entreprise",
  },
];

export const stats = [
  {
    count: 2,
    format: "pad" as const,
    label: "mois de stage",
    detail: "DSI, Université Paris-Est",
  },
  {
    count: 40000,
    format: "space" as const,
    label: "comptes étudiants",
    detail: "reliés sans fusion de bases",
  },
  {
    count: 5,
    format: "pad" as const,
    label: "projets livrés",
    detail: "web, mobile, design",
  },
  {
    count: 2027,
    format: "raw" as const,
    label: "diplôme",
    detail: "licence informatique",
  },
];

export type Project = {
  id: "todo" | "portail" | "airline" | "keewic" | "card";
  name: string;
  kind: string;
  year: string;
  note: string;
  tags: string[];
  image?: string;
  href?: string;
  code?: string;
  size: "wide" | "tall" | "normal";
};

export const projects: Project[] = [
  {
    id: "todo",
    name: "Todo Smart",
    kind: "Application de tâches",
    year: "2026",
    note: "Synchronisation Firestore en temps réel, glisser-déposer, filtres. Le tri est couvert par des tests.",
    tags: ["React", "Firebase", "Firestore"],
    image: "/images/todo-smart.jpg",
    href: "https://haniwanice.github.io/todo-smart/",
    code: "https://github.com/HaniWanice/todo-smart",
    size: "wide",
  },
  {
    id: "portail",
    name: "Portail Paris-Est",
    kind: "Refonte d'interface",
    year: "2026",
    note: "La page d'accueil du portail du personnel, réorganisée par usage et pensée d'abord pour le mobile.",
    tags: ["HTML", "CSS", "UI"],
    image: "/images/portail-paris-est.jpg",
    href: "https://haniwanice.github.io/Protail-design-upec/",
    code: "https://github.com/HaniWanice/Protail-design-upec",
    size: "normal",
  },
  {
    id: "airline",
    name: "Compagnie aérienne",
    kind: "Application Laravel",
    year: "2025",
    note: "Gestion des utilisateurs en CRUD complet, base SQLite, interface HTML et CSS faite main.",
    tags: ["PHP", "Laravel", "SQLite"],
    size: "normal",
  },
  {
    id: "keewic",
    name: "Keewic",
    kind: "Design d'app mobile",
    year: "2025",
    note: "Pitchs et maquettes d'une application mobile, remis à un développeur freelance pour la mise en ligne.",
    tags: ["Figma", "UX", "UI"],
    size: "normal",
  },
  {
    id: "card",
    name: "Profil card",
    kind: "Composant web",
    year: "2025",
    note: "Une carte de profil autonome, sans dépendance, en HTML et CSS.",
    tags: ["HTML", "CSS"],
    href: "https://haniwanice.github.io/profil-card/",
    code: "https://github.com/HaniWanice/profil-card",
    size: "normal",
  },
];

export type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  when?: string;
  points: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "2026",
    title: "Stagiaire développeur full-stack",
    org: "Direction des systèmes d'information, Université Paris-Est",
    when: "mai à juillet 2026 · 2 mois",
    points: [
      "Pont entre deux GLPI isolés : ticket miroir, identifiant conservé, statut synchronisé des deux côtés.",
      "Next.js, Server Actions, API REST, Docker Compose. Trois approches comparées avant la première ligne de code.",
      "Prototype présenté à l'équipe support, qui s'en est servi de base pour la recette.",
    ],
  },
  {
    period: "2023 — 2027",
    title: "Licence informatique",
    org: "Université Paris-Est",
    when: "3e année en cours",
    points: [
      "Algorithmique, bases de données et SQL, développement web, réseaux, systèmes.",
    ],
  },
  {
    period: "2024",
    title: "Certification Responsive Web Design",
    org: "freeCodeCamp",
    when: "40 heures",
    points: ["HTML, CSS, mise en page mobile-first, accessibilité."],
  },
];

export const skills = [
  {
    label: "Front-end",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind"],
  },
  {
    label: "Back-end & données",
    items: ["PHP", "Laravel", "Node.js", "SQL", "API REST", "Docker"],
  },
  {
    label: "Outils & design",
    items: ["Git", "GitHub", "Linux", "Figma", "VS Code"],
  },
  {
    label: "Langues",
    items: ["Français — natif", "Anglais — courant", "Espagnol — B2"],
  },
];

export const strengths = [
  {
    title: "Je lis le système avant d'écrire l'écran.",
    text: "Deux GLPI à relier, des dizaines de champs, une API capricieuse. J'ai commencé par les données, pas par les maquettes.",
  },
  {
    title: "Je livre, pas seulement des prototypes.",
    text: "Docker, documentation, démonstration à l'équipe. Ce que je construis doit tourner sans moi et se transmettre.",
  },
  {
    title: "Je choisis, puis j'assume le choix.",
    text: "Trois approches comparées, deux écartées pour de bonnes raisons. Une décision expliquée vaut mieux qu'une pile d'outils.",
  },
];

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Docker",
  "SQL",
  "Laravel",
  "API REST",
  "Figma",
];
