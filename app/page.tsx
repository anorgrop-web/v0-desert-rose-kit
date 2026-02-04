import {
  HeroSection,
  FeaturesSection,
  VarietiesSection,
  WhyChooseSection,
  ManualSection,
  AboutSection,
  TestimonialsSection,
  PricingSection,
  FaqSection,
  FooterSection,
} from "@/components/landing"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <VarietiesSection />
      <WhyChooseSection />
      <ManualSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  )
}
