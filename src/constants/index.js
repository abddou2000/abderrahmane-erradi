import {
  mobile,
  backend,
  web,
  erp,
  laravel,
  php,
  javascript,
  react,
  html5,
  css3,
  mysql,
  sqlserver,
  firebase,
  git,
  githubIcon,
  postman,
  linux,
  vscode,
  ipt,
  freelance,
  eniac,
  erpProject,
  posProject,
  transportProject,
  insuranceProject,
  gitsync,
  inventory,
  degree,
} from "../assets";

export const profile = {
  name: "Abderrahmane Erradi",
  firstName: "Abderrahmane",
  initials: "AE",
  headline: "Développeur Full Stack · Futur Ingénieur",
  badge: "Futur ingénieur en systèmes informatiques — SupMTI, 2025–2026",
  intro:
    "Laravel · React · React Native — 4+ ans d'expérience terrain et un cycle d'ingénieur en cours. Solutions web, mobiles et ERP.",
  location: "Marrakech, Maroc",
  email: "abderahmaneradi99@gmail.com",
  socials: {
    github: "https://github.com/ErradiAbderrahmnan99",
    linkedin: "https://www.linkedin.com/in/erradi-abderrahmane/",
    instagram: "https://www.instagram.com/abderahman_erradi/",
  },
};

export const navLinks = [
  { id: "about", title: "À propos" },
  { id: "work", title: "Parcours" },
  { id: "projects", title: "Projets" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Développeur Full Stack (Laravel / React)",
    icon: web,
  },
  {
    title: "Développeur Mobile (React Native)",
    icon: mobile,
  },
  {
    title: "APIs REST & Bases de données (MySQL / SQL Server)",
    icon: backend,
  },
  {
    title: "ERP & Digitalisation des processus métiers",
    icon: erp,
  },
];

// Technologies affichées dans le nuage 3D (Tech.jsx / canvas/TechCloud.jsx).
const cloudTechnologies = [
  { name: "Laravel", icon: laravel },
  { name: "PHP", icon: php },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "React Native", icon: react },
  { name: "HTML5", icon: html5 },
  { name: "CSS3", icon: css3 },
  { name: "MySQL", icon: mysql },
  { name: "SQL Server", icon: sqlserver },
  { name: "Firebase", icon: firebase },
  { name: "Git", icon: git },
  { name: "GitHub", icon: githubIcon },
  { name: "Postman", icon: postman },
  { name: "VS Code", icon: vscode },
  { name: "Linux", icon: linux },
];

// Compétences sans logo, affichées sous le nuage.
const extraSkills = [
  "APIs REST",
  "Intégration SI",
  "Optimisation SQL",
  "ERP : stock, ventes, achats, finance",
  "Workflows & digitalisation",
  "Automatisation",
  "CI/CD",
];

const experiences = [
  {
    title: "Développeur Full Stack Laravel / React",
    company_name: "Integral Progress Technology — Marrakech",
    icon: ipt,
    iconBg: "#E6DEDD",
    date: "Mars 2024 – Aujourd'hui",
    points: [
      "Conception et évolution d'une solution ERP Laravel / React : stock, finance, SMQ, banque, règlements, ventes, achats et transport.",
      "Développement d'une application POS et force de vente avec Laravel et React Native.",
      "Réalisation d'une solution mobile de gestion du transport (Laravel, React Native, APIs REST).",
      "Développement des modules ventes, règlements, factures et stock ; requêtes MySQL / SQL Server et optimisation des échanges.",
      "GitHub, tests d'API avec Postman, CI/CD et collaboration quotidienne avec les équipes métiers.",
    ],
  },
  {
    title: "Développeur Full Stack Freelance",
    company_name: "Missions indépendantes",
    icon: freelance,
    iconBg: "#383E56",
    date: "Déc. 2022 – Mars 2024",
    points: [
      "Conception et livraison d'applications web et mobiles pour divers clients avec PHP, Laravel, React et React Native.",
      "Analyse des besoins, modélisation SQL et intégration d'APIs tierces.",
      "Maintenance corrective et évolutive, accompagnement des clients après livraison.",
    ],
  },
  {
    title: "Développeur Back-end & Mobile",
    company_name: "EniacIT",
    icon: eniac,
    iconBg: "#E6DEDD",
    date: "Déc. 2021 – Déc. 2022",
    points: [
      "Application React Native de gestion d'accompagnement pour personnes en difficulté (client canadien).",
      "Application React Native de transport de colis, meubles et déménagement (client canadien).",
      "Deux sites web pour des agences canadiennes de marketing digital.",
      "Application web Laravel de gestion des assurances (client marocain).",
      "Cycle complet : analyse, développement, tests, déploiement et maintenance.",
    ],
  },
];

// Formation & certification (remplace la section témoignages du template).
const education = [
  {
    title: "Licence en Ingénierie des Systèmes Informatiques",
    school: "SupMTI",
    place: "Rabat",
    date: "2025 – 2026",
    current: true,
    image: degree,
  },
  {
    title: "Développement Informatique (BAC +2)",
    school: "ISGI – OFPPT",
    place: "Maroc",
    date: "2018 – 2020",
    image: degree,
  },
  {
    title: "Certification : Développement d'Applications Web et Mobile",
    school: "Formation qualifiante",
    place: "Maroc",
    date: "2020 – 2021",
    image: degree,
  },
  {
    title: "Baccalauréat Sciences Physiques",
    school: "Lycée Abdellah Ibn Brahim",
    place: "Maroc",
    date: "2017 – 2018",
    image: degree,
  },
];

const languages = [
  { name: "Français", level: "Courant" },
  { name: "Arabe", level: "Langue maternelle" },
  { name: "Anglais", level: "Intermédiaire" },
];

const projects = [
  {
    name: "ERP Laravel / React",
    description:
      "Solution ERP complète développée chez Integral Progress Technology : stock, finance, SMQ, banque, règlements, ventes, achats et transport. Modules ventes, règlements, factures et stock, requêtes MySQL / SQL Server optimisées.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "sqlserver", color: "pink-text-gradient" },
    ],
    image: erpProject,
    source_code_link: null, // projet d'entreprise (privé)
  },
  {
    name: "POS & Force de vente",
    description:
      "Application de point de vente et de force de vente : prise de commandes, encaissements, synchronisation avec l'ERP. Back-end Laravel, application mobile React Native (iOS & Android).",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "reactnative", color: "green-text-gradient" },
      { name: "restapi", color: "pink-text-gradient" },
    ],
    image: posProject,
    source_code_link: null,
  },
  {
    name: "Gestion du transport (mobile)",
    description:
      "Solution mobile de gestion du transport : tournées, suivi des livraisons et des véhicules, remontée d'informations en temps réel vers l'ERP via des APIs REST.",
    tags: [
      { name: "reactnative", color: "blue-text-gradient" },
      { name: "laravel", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: transportProject,
    source_code_link: null,
  },
  {
    name: "Gestion des assurances",
    description:
      "Application web Laravel pour un client marocain : gestion des contrats, des clients et des échéances d'assurance, avec tableau de bord et rôles utilisateurs.",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "php", color: "pink-text-gradient" },
    ],
    image: insuranceProject,
    source_code_link: null,
  },
  {
    name: "GitSync Hub",
    description:
      "Tableau de bord web (open-source) qui compare et synchronise les changements Git entre deux projets en temps réel : statut, historique des commits avec diffs, scanner complet respectant .gitignore en moins de 650 ms.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "git", color: "pink-text-gradient" },
    ],
    image: gitsync,
    source_code_link: "https://github.com/ErradiAbderrahmnan99/GitSync-Hub",
  },
  {
    name: "Inventory Management System",
    description:
      "Système de gestion de stock (open-source) en Laravel 10 + MySQL : suivi des articles, ventes et achats, avec tableaux de bord par rôle (admin, manager, staff).",
    tags: [
      { name: "laravel", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: inventory,
    source_code_link:
      "https://github.com/ErradiAbderrahmnan99/inventory-management",
  },
];

export { services, cloudTechnologies, extraSkills, experiences, education, languages, projects };
