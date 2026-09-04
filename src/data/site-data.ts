/**
 * ============================================================
 * MANDIBA GROUP — Données centralisées du site
 * ============================================================
 * Toutes les informations modifiables de l'entreprise sont
 * regroupées ici. Pour mettre à jour le contenu du site,
 * modifiez ce fichier unique.
 *
 * ⚠️ Règle : ne rien inventer. Les champs marqués PROVISOIRE
 *    devront être remplacés par les informations réelles.
 * ============================================================
 */

export const company = {
  name: "MANDIBA GROUP",
  signature: "Transport & Assurances",
  tagline: "Des solutions pour avancer, des protections pour vous accompagner.",
  description:
    "MANDIBA GROUP est une société ivoirienne spécialisée dans le transport et les assurances, basée à Abidjan.",
  address: {
    short: "Abidjan, Cocody Angré Extension",
    full: "Abidjan, Cocody Angré Extension, Côte d'Ivoire",
    city: "Abidjan",
    district: "Cocody Angré Extension",
    country: "Côte d'Ivoire",
  },
  email: "MandibaGroup@gmail.com",
  phones: [
    { label: "Fixe", number: "27 24 54 96 87", tel: "+2252724549687" },
    { label: "Mobile", number: "05 44 86 12 66", tel: "+2250544861266" },
    { label: "Mobile", number: "07 67 64 31 11", tel: "+2250767643111" },
  ],
  hours: {
    label: "Horaires",
    value: "Lundi – Vendredi : 08h00 – 17h00",
    short: "08h00 – 17h00",
    days: "Lundi – Vendredi",
  },
  // Coordonnées GPS approximatives du quartier Cocody Angré (Abidjan)
  // À remplacer par les coordonnées exactes lorsque disponibles.
  // Ne pas inventer une précision fictive.
  map: {
    lat: 5.3637,
    lng: -4.0076,
    zoom: 13,
    label: "Cocody Angré Extension, Abidjan",
  },
  ceo: {
    name: "Toure Said",
    role: "PDG — MANDIBA GROUP",
    photo: "/images/pdg-toure-said.jpg",
    // ⚠️ Texte PROVISOIRE — à remplacer par le véritable message du PDG
    message:
      "Chez MANDIBA GROUP, nous plaçons la confiance, la proximité et la qualité de service au cœur de notre engagement. Notre ambition est d'accompagner nos clients avec des solutions adaptées dans les domaines du transport et de l'assurance, tout en construisant une relation durable fondée sur la confiance.",
  },
  logo: "/images/mandiba-logo.png",
  // Pas de réseaux sociaux officiels — ne pas afficher de liens
  socials: [],
  year: 2026,
} as const;

export const nav = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Assurances", href: "#assurances" },
  { label: "Transport", href: "#transport" },
  { label: "Direction", href: "#direction" },
  { label: "Contact", href: "#contact" },
] as const;

export const activities = [
  {
    id: "assurances",
    title: "Assurances",
    icon: "Shield",
    description:
      "Une protection adaptée à chaque aspect de votre vie, pour avancer l'esprit tranquille.",
    image: "/images/assurance-card.jpg",
    services: [
      { name: "Assurance Vie", icon: "Heart" },
      { name: "Auto-Moto", icon: "Car" },
      { name: "Habitation", icon: "Home" },
      { name: "Voyage", icon: "Plane" },
      { name: "Multirisques", icon: "Umbrella" },
    ],
  },
  {
    id: "transport",
    title: "Transport",
    icon: "Truck",
    description:
      "Des solutions de mobilité complètes pour vos besoins quotidiens et professionnels.",
    image: "/images/transport-card.jpg",
    services: [
      { name: "Location", icon: "Key" },
      { name: "Vente de voitures", icon: "BadgeCheck" },
      { name: "Gestion de vos véhicules", icon: "Settings" },
    ],
  },
] as const;

export const assurancesServices = [
  {
    name: "Assurance Vie",
    icon: "Heart",
    description:
      "Préservez l'avenir de vos proches et construisez un patrimoine solide pour demain.",
  },
  {
    name: "Auto-Moto",
    icon: "Car",
    description:
      "Roulez en toute sérénité avec une couverture adaptée à votre véhicule.",
  },
  {
    name: "Habitation",
    icon: "Home",
    description:
      "Protégez votre foyer et vos biens contre les aléas du quotidien.",
  },
  {
    name: "Voyage",
    icon: "Plane",
    description:
      "Voyagez l'esprit libre, où que vous alliez, avec une protection fiable.",
  },
  {
    name: "Multirisques",
    icon: "Umbrella",
    description:
      "Une solution globale qui regroupe plusieurs garanties en un seul contrat.",
  },
] as const;

export const transportServices = [
  {
    name: "Location",
    icon: "Key",
    description:
      "Des véhicules adaptés à vos besoins, pour quelques heures ou plusieurs jours.",
  },
  {
    name: "Vente de voitures",
    icon: "BadgeCheck",
    description:
      "Un accompagnement transparent pour l'achat de votre véhicule.",
  },
  {
    name: "Gestion de vos véhicules",
    icon: "Settings",
    description:
      "Confiez l'entretien et la gestion de votre flotte à des professionnels.",
  },
] as const;

export const values = [
  {
    title: "Confiance",
    icon: "ShieldCheck",
    description:
      "Une relation fondée sur la transparence et l'engagement auprès de nos clients.",
  },
  {
    title: "Professionnalisme",
    icon: "Award",
    description:
      "Des équipes qualifiées et des solutions adaptées à chaque situation.",
  },
  {
    title: "Proximité",
    icon: "MapPin",
    description:
      "Une présence locale à Abidjan pour un accompagnement au plus près de vous.",
  },
  {
    title: "Engagement",
    icon: "Handshake",
    description:
      "Un investissement total dans la satisfaction et la fidélisation de nos clients.",
  },
] as const;

export const about = {
  title: "À propos de Mandiba Group",
  intro:
    "MANDIBA GROUP est une société ivoirienne basée à Abidjan, intervenant dans deux domaines complémentaires : le transport et les assurances.",
  body: [
    "Notre vocation est d'offrir à nos clients des solutions concrètes pour leurs besoins de mobilité et de protection. À travers nos deux pôles d'activité, nous accompagnons les particuliers et les professionnels avec des services adaptés à leur quotidien.",
    "Nous croyons qu'une entreprise de service se construit sur la confiance, la proximité et la qualité de la relation humaine. C'est cette conviction qui guide chacune de nos actions.",
  ],
  vision: {
    title: "Vision",
    text: "Devenir un acteur de référence du transport et de l'assurance en Côte d'Ivoire, reconnu pour la qualité de service et la proximité avec ses clients.",
  },
  mission: {
    title: "Mission",
    text: "Accompagner nos clients avec des solutions simples, fiables et adaptées, dans les domaines du transport et de la protection.",
  },
} as const;

export const footerServices = [
  "Assurance Vie",
  "Auto-Moto",
  "Habitation",
  "Voyage",
  "Multirisques",
  "Location",
  "Vente de voitures",
  "Gestion de véhicules",
] as const;

export const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
] as const;

export type Company = typeof company;
export type Activity = (typeof activities)[number];
export type Service = (typeof assurancesServices)[number];
export type Value = (typeof values)[number];
