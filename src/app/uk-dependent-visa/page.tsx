import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceDetailGrid } from "@/components/sections/ServiceDetailGrid";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ukDependentServices } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = createMetadata({
  title: "UK Dependent Visa Services",
  description:
    "Expert UK dependent visa services: family reunification, application preparation, legal representation, submission, follow-up, appeals and reapplications.",
  path: "/uk-dependent-visa",
});

export default function UKDependentVisaPage() {
  return (
    <>
      <PageHero
        title="UK Dependent Visa Services"
        subtitle="Reunite with your family in the United Kingdom. Expert guidance on dependent visas, financial requirements, and appeals."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "UK Dependent Visa" },
        ]}
        showCta
        bannerImage={PAGE_BANNERS.ukDependent}
        bannerAlt="UK dependent visa services - CIRC"
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="UK Family Immigration"
            title="Bringing Families Together in the UK"
            subtitle="CIRC provides comprehensive support for UK dependent and family visa applications — from evidence preparation to tribunal representation."
          />
          <ServiceDetailGrid services={ukDependentServices} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 rounded-sm p-8 lg:p-12 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
              Previously Refused? We Can Help.
            </h2>
            <p className="text-white/75 leading-relaxed max-w-2xl mx-auto">
              A visa refusal is not the end of your journey. CIRC specialises in
              analysing refusal decisions, identifying appeal grounds, and
              preparing strengthened reapplications that address every concern
              raised by UK Visas and Immigration.
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
