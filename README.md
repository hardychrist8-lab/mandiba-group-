# MANDIBA GROUP — Transport & Assurances

Site web institutionnel 3D pour **MANDIBA GROUP**, société ivoirienne spécialisée dans le transport et les assurances.

## Stack technique

- **Framework** : Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling** : Tailwind CSS 4 + shadcn/ui (New York)
- **3D** : Three.js + @react-three/fiber + @react-three/drei
- **Animations** : GSAP (ScrollTrigger) + Framer Motion
- **Cartes** : Leaflet + react-leaflet
- **Icônes** : Lucide React

## Structure

```
src/
├── app/
│   ├── globals.css      # Thème Mandiba (bleu + blanc)
│   ├── layout.tsx       # Metadata SEO + structure racine
│   └── page.tsx         # Assemblage des sections + JSON-LD
├── data/
│   └── site-data.ts     # ⭐ Source unique des données modifiables
├── lib/
│   ├── icon.tsx         # Mappeur d'icônes Lucide
│   ├── reveal.tsx       # Composant scroll-reveal GSAP
│   └── utils.ts         # Utilitaires shadcn
├── hooks/
│   └── use-isomorphic-layout-effect.ts
└── components/
    ├── three/
    │   └── HeroScene.tsx     # Scène 3D abstraite du Hero
    ├── sections/
    │   ├── Navbar.tsx        # Navigation + menu mobile animé
    │   ├── Hero.tsx          # Section 01 — Hero 3D
    │   ├── About.tsx         # À propos + Vision + Mission
    │   ├── Activities.tsx    # 2 cartes Assurances + Transport
    │   ├── Assurances.tsx    # 5 services d'assurance
    │   ├── Transport.tsx     # 3 services transport
    │   ├── CeoMessage.tsx    # Mot du PDG + photo
    │   ├── WhyUs.tsx         # 4 valeurs
    │   ├── Location.tsx      # Section localisation
    │   ├── MapInner.tsx      # Carte Leaflet
    │   ├── Contact.tsx       # Téléphones + email cliquables
    │   └── Footer.tsx        # Footer 4 colonnes
    └── ui/                   # Composants shadcn/ui
```

## Modifier le contenu

Toutes les données modifiables sont centralisées dans **`src/data/site-data.ts`** :

- Coordonnées (téléphones, email, adresse)
- Services d'assurance et de transport
- Mot du PDG (provisoire — à remplacer)
- Valeurs de l'entreprise
- Navigation et liens footer

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # Vérification ESLint
npm run build    # Build production
```

## Déploiement

Le déploiement est automatique sur Vercel à chaque push sur la branche `main`.

## Identité visuelle

- **Palette** : Bleu profond (`#0f2b4c`) + Blanc
- **Ambiance** : Premium, moderne, lumineux, professionnel
- **Pas de dark mode** (site clair uniquement, conforme au brief)

## Contact

- **Adresse** : Abidjan, Cocody Angré Extension, Côte d'Ivoire
- **Email** : MandibaGroup@gmail.com
- **Téléphones** : 27 24 54 96 87 / 05 44 86 12 66 / 07 67 64 31 11
- **Horaires** : Lundi – Vendredi, 08h00 – 17h00

© 2026 MANDIBA GROUP — Tous droits réservés.
