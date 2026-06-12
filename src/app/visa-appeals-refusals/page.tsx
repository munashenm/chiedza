import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceDetailGrid } from "@/components/sections/ServiceDetailGrid";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { appealsServices } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = createMetadata({
  title: "Visa Appeals & Refusals",
  description:
    "Expert visa appeal and refusal services: administrative reviews, tribunal representation, overstay appeals, V-list ban upliftment, and reapplication strategy.",
  path: "/visa-appeals-refusals",
});

export default function VisaAppealsPage() {
  return (
    <>
      <PageHero
        title="Visa Appeals & Refusals"
        subtitle="Don't let a refusal define your future. CIRC provides robust legal representation for visa appeals, overstay matters, and V-list ban upliftment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Visa Appeals & Refusals" },
        ]}
        showCta
        bannerImage={PAGE_BANNERS.appeals}
        bannerAlt="Visa appeals and refusals - CIRC"
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Appeals & Representation"
            title="Fighting for Your Right to Move Forward"
            subtitle="A refused visa or immigration penalty is not final. Our team analyses every decision, identifies legal grounds for challenge, and builds compelling cases for appeals and reapplications."
          />
          <ServiceDetailGrid services={appealsServices} />
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: "#0a1628" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#ffffff" }}>
            Act Quickly — Deadlines Matter
          </h2>
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Immigration appeal windows are strict. If you have received a refusal
            or overstay notice, contact CIRC immediately for an urgent case
            review. Early intervention significantly improves your chances of a
            successful outcome.
          </p>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
