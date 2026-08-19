import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import FeaturesStrip from "@/components/home/FeaturesStrip";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsBar from "@/components/home/StatsBar";
import ProductsPreview from "@/components/home/ProductsPreview";
import TrustSection from "@/components/home/TrustSection";
import BreedCategories from "@/components/products/BreedCategories";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Brooeggs — Fresh Country Chicken Eggs, Delivered Daily | Tamil Nadu",
  description:
    "Brooeggs (Broo Eggs) — Premium free-range country chicken eggs delivered fresh across Tamil Nadu. Nattu muttai, farm fresh, zero hormones. Order 6-pack to bulk wholesale.",
  keywords: [
    "brooeggs",
    "broo eggs",
    "brooeggs.in",
    "country chicken eggs Tamil Nadu",
    "nattu muttai",
    "nattu kozhi muttai",
    "farm fresh eggs delivery",
    "free range eggs Tamil Nadu",
    "buy country eggs online",
    "egg delivery Tamil Nadu",
    "organic eggs Tamil Nadu",
    "desi eggs buy online",
    "wholesale country eggs Tamil Nadu",
  ],
  alternates: { canonical: "https://brooeggs.in" },
  openGraph: {
    title: "Brooeggs — Fresh Country Chicken Eggs, Delivered Daily | Tamil Nadu",
    description:
      "Broo Eggs (Brooeggs) — Premium free-range nattu muttai delivered fresh across Tamil Nadu. 6-pack to bulk wholesale, same-day dispatch.",
    url: "https://brooeggs.in",
  },
};

// FAQ data mirrored from lib/constants for JSON-LD (server-side, avoids importing client-only component)
const FAQ_JSON_LD = [
  {
    q: "What makes country chicken eggs different?",
    a: "Country chicken eggs come from indigenous free-range breeds eating natural diets. They have richer, darker yolks with significantly higher omega-3, vitamin D, and protein compared to battery-farm commercial eggs.",
  },
  {
    q: "How fresh are the eggs when delivered?",
    a: "We collect eggs every morning and dispatch them the same day. Most customers receive their eggs within 12–24 hours of collection — as fresh as it gets without owning a farm yourself.",
  },
  {
    q: "Do you supply restaurants and hotels?",
    a: "Yes. We work with restaurants, hotels, bakeries, cloud kitchens, and retail distributors. Contact us to discuss custom volumes, pricing, and delivery schedules tailored to your business.",
  },
  {
    q: "Are the eggs hormone and antibiotic free?",
    a: "Absolutely. Our hens are raised with zero artificial growth hormones and no antibiotic treatments. They live in stress-free, natural environments — healthy birds produce healthy eggs.",
  },
  {
    q: "Which areas do you deliver to?",
    a: "We currently deliver across Tamil Nadu and are expanding steadily. WhatsApp or call us at +91 9865 643953 to confirm delivery availability for your specific location.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_JSON_LD.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brooeggs — Country Chicken Egg Packs",
    url: "https://brooeggs.in/products",
    numberOfItems: 6,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Starter Pack — 6 Country Eggs",    url: "https://brooeggs.in/products" },
      { "@type": "ListItem", position: 2, name: "Family Pack — 12 Country Eggs",    url: "https://brooeggs.in/products" },
      { "@type": "ListItem", position: 3, name: "Standard Tray — 30 Country Eggs",  url: "https://brooeggs.in/products" },
      { "@type": "ListItem", position: 4, name: "Half Case — 90 Country Eggs",      url: "https://brooeggs.in/products" },
      { "@type": "ListItem", position: 5, name: "Bulk Case — 180 Country Eggs",     url: "https://brooeggs.in/products" },
      { "@type": "ListItem", position: 6, name: "Wholesale / Custom Order",         url: "https://brooeggs.in/products" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Hero />
      <FeaturesStrip />
      <BreedCategories />
      <IntroSection />
      <ServicesSection />
      <StatsBar />
      <ProductsPreview />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CTABanner variant="home" />
    </>
  );
}
