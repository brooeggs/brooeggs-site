import Hero from "@/components/home/Hero";
import FeaturesStrip from "@/components/home/FeaturesStrip";
import IntroSection from "@/components/home/IntroSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsBar from "@/components/home/StatsBar";
import ProductsPreview from "@/components/home/ProductsPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesStrip />
      <IntroSection />
      <ServicesSection />
      <StatsBar />
      <ProductsPreview />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <CTABanner variant="home" />
    </>
  );
}
