import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mandiba-group-a9xrxod4q-hardy-designcv.vercel.app"),
  title: {
    default: "MANDIBA GROUP — Transport & Assurances",
    template: "%s | MANDIBA GROUP",
  },
  description:
    "MANDIBA GROUP propose des solutions dans les domaines du transport et des assurances à Abidjan, Côte d'Ivoire. Transport, location, vente de véhicules, assurances vie, auto-moto, habitation, voyage et multirisques.",
  keywords: [
    "Mandiba Group",
    "transport Abidjan",
    "assurances Côte d'Ivoire",
    "location véhicule Abidjan",
    "assurance vie",
    "auto-moto",
    "habitation",
    "voyage",
    "multirisques",
    "Cocody Angré",
  ],
  authors: [{ name: "MANDIBA GROUP" }],
  creator: "MANDIBA GROUP",
  publisher: "MANDIBA GROUP",
  icons: {
    icon: "/images/mandiba-logo.png",
    apple: "/images/mandiba-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mandiba-group-a9xrxod4q-hardy-designcv.vercel.app",
    siteName: "MANDIBA GROUP",
    title: "MANDIBA GROUP — Transport & Assurances",
    description:
      "Solutions de transport et d'assurances à Abidjan, Côte d'Ivoire. Des solutions pour avancer, des protections pour vous accompagner.",
    images: [
      {
        url: "/images/mandiba-logo.png",
        width: 512,
        height: 512,
        alt: "MANDIBA GROUP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MANDIBA GROUP — Transport & Assurances",
    description:
      "Solutions de transport et d'assurances à Abidjan, Côte d'Ivoire.",
    images: ["/images/mandiba-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
