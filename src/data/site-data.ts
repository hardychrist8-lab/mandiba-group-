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
    "MANDIBA GROUP Transport — transport, location de véhicules, import-export et assurances à Abidjan, Côte d'Ivoire.",
  address: {
    short: "Abidjan, Cocody Angré Château",
    full: "Abidjan, Cocody Angré Château, Côte d'Ivoire",
    city: "Abidjan",
    district: "Cocody Angré Château",
    country: "Côte d'Ivoire",
  },
  email: "info@mandibagrouptransport.com",
  whatsapp: {
    number: "07 67 64 31 11",
    tel: "+2250767643111",
    link: "https://wa.me/2250767643111",
  },
  phones: [
    { label: "Fixe", number: "27 24 54 96 87", tel: "+2252724549687" },
    { label: "Mobile", number: "05 44 86 12 66", tel: "+2250544861266" },
    { label: "Mobile", number: "07 67 64 31 11", tel: "+2250767643111" },
  ],
  hours: {
    label: "Horaires",
    value: "Lundi – Samedi : 08h00 – 17h00",
    short: "08h00 – 17h00",
    days: "Lundi – Samedi",
  },
  // Coordonnées GPS exactes : Boulangerie Flamand, Boulevard Charles Bauza Donwahi
  map: {
    lat: 5.4168625,
    lng: -3.9644820,
    zoom: 17,
    label: "Boulangerie Flamand, Boulevard Charles Bauza Donwahi, Cocody, Abidjan",
  },
  ceo: {
    name: "Toure Said",
    role: "PDG — MANDIBA GROUP",
    photo: "/images/pdg-toure-said.jpg",
    // Message du PDG
    message:
      "Chez MANDIBA GROUP TRANSPORT, nous plaçons la qualité de service au cœur de notre engagement. Notre ambition est de faciliter la mobilité de nos concitoyens et de créer un cadre d'assurance pour les couches sociales les plus modestes.",
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
      "Des solutions de mobilité complètes pour vos besoins quotidiens, professionnels et vos flottes urbaines.",
    image: "/images/transport-card.jpg",
    services: [
      { name: "Location d'engin", icon: "Key" },
      { name: "Machine à décaper et benne", icon: "Wrench" },
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
      "Roulez en toute sérénité avec une couverture adaptée à votre mobilité.",
  },
  {
    name: "Habitation",
    icon: "Home",
    description:
      "Protégez votre foyer et vos biens.",
  },
  {
    name: "Voyage",
    icon: "Plane",
    description:
      "Voyagez l'esprit libre.",
  },
  {
    name: "Multirisques",
    icon: "Umbrella",
    description:
      "Une solution complète qui regroupe plusieurs garanties en un seul contrat.",
  },
] as const;

export const transportServices = [
  {
    name: "Location d'engin",
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
  title: "À propos de Mandiba Group Transport",
  intro:
    "MANDIBA GROUP Transport est une société ivoirienne basée en Côte d'Ivoire, intervenant dans plusieurs domaines : le transport urbain, la location, la vente de voitures, l'import-export de véhicules et la location de machines à décaper. Un volet assurances : assurance auto, vie, santé.",
  body: [
    "Notre vocation est d'offrir à nos clients des solutions concrètes pour leurs besoins de mobilité et de protection. À travers nos deux pôles d'activité, nous accompagnons les particuliers et les professionnels avec des services adaptés à leur quotidien.",
    "Nous croyons qu'une entreprise de qualité se construit sur la confiance et la proximité.",
  ],
  vision: {
    title: "Vision",
    text: "Faciliter la mobilité aux citoyens ivoiriens et africains. Créer un cadre d'assurance pour les couches sociales les plus reculées.",
  },
  mission: {
    title: "Mission",
    text: "Accompagner nos clients avec des solutions simples et fiables, dans les domaines du transport et de la protection.",
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
