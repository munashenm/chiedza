import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceDetailGrid } from "@/components/sections/ServiceDetailGrid";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { southAfricaServices } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "South Africa Immigration Services",
  description:
    "Expert South Africa immigration services: visitor, work, study, business, retirement, relative visas, asylum, permanent residency, overstay appeals, police clearance, and more.",
  path: "/south-africa-immigration",
});

export default function SouthAfricaImmigrationPage() {
  return (
    <>
      <PageHero
        title="South Africa Immigration Services"
        subtitle="Comprehensive visa, residency, asylum, and compliance services guided by expert knowledge of Department of Home Affairs requirements."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "South Africa Immigration" },
        ]}
        showCta
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our SA Services"
            title="Complete South African Immigration Solutions"
            subtitle="Whether you are visiting, working, studying, retiring, seeking asylum, or applying for permanent residency — CIRC provides end-to-end support for every DHA visa category."
          />
          <ServiceDetailGrid services={southAfricaServices} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              Why Choose CIRC for South African Immigration?
            </h2>
            <p className="text-navy-600 leading-relaxed">
              South African immigration law is complex and constantly evolving. CIRC
              stays ahead of policy changes, ensuring your application meets the
              latest DHA requirements. From initial eligibility assessment to
              document preparation, submission, and follow-up — we manage every
              detail so you can focus on your future.
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
