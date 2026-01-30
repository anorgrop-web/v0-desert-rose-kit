import {
  HeroSection,
  FeaturesSection,
  VarietiesSection,
  WhyChooseSection,
  ManualSection,
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
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FooterSection />
    </main>
  )
}
