import { HomeHero } from "@/components/sections/HomeHero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { servicesPreview } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Expert Immigration & Refugee Consultancy",
  description:
    "CIRC provides professional immigration guidance for South Africa, UK, Canada and Australia. 15+ years experience, 98% success rate. Book your consultation today.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustBadges />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Comprehensive Immigration Solutions"
            subtitle="From visa applications to appeals and skilled migration — expert guidance across four major jurisdictions."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicesPreview.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <HowItWorks />
      <FounderSection />
      <TestimonialsSection />
      <ConsultationCTA />
    </>
  );
}
