import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
import { Assurances } from "@/components/sections/Assurances";
import { Transport } from "@/components/sections/Transport";
import { CeoMessage } from "@/components/sections/CeoMessage";
import { WhyUs } from "@/components/sections/WhyUs";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { company } from "@/data/site-data";

// Données structurées JSON-LD pour le référencement (LocalBusiness)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description: company.description,
  email: company.email,
  telephone: company.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    addressLocality: company.address.city,
    addressRegion: company.address.district,
    addressCountry: "CI",
  },
  openingHours: "Mo-Fr 08:00-17:00",
  image: company.logo,
  url: "https://mandiba-group-a9xrxod4q-hardy-designcv.vercel.app",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Activities />
        <Assurances />
        <Transport />
        <CeoMessage />
        <WhyUs />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
