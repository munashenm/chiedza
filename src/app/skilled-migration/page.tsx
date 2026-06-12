import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceDetailGrid } from "@/components/sections/ServiceDetailGrid";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { skilledMigrationServices } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = createMetadata({
  title: "Skilled Migration: UK, Canada & Australia",
  description:
    "Skilled migration services for UK, Canada, and Australia. Express Entry, Skilled Worker visas, job sponsorship, recruiter collaboration, and document verification.",
  path: "/skilled-migration",
});

const countries = [
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    routes: "Skilled Worker, Health & Care Worker, Global Talent",
  },
  {
    flag: "🇨🇦",
    name: "Canada",
    routes: "Express Entry, PNP, LMIA-sponsored work permits",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    routes: "Subclass 189, 186, 482 skilled visas",
  },
];

export default function SkilledMigrationPage() {
  return (
    <>
      <PageHero
        title="Skilled Migration: UK, Canada & Australia"
        subtitle="Strategic pathways for qualified professionals seeking to live and work in the world's leading destinations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Skilled Migration" },
        ]}
        showCta
        bannerImage={PAGE_BANNERS.skilledMigration}
        bannerAlt="Skilled migration services - CIRC"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Destinations"
            title="Three Countries, One Expert Team"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {countries.map((c) => (
              <div
                key={c.name}
                className="text-center p-8 bg-cream rounded-sm border border-navy-900/5 card-hover"
              >
                <span className="text-4xl mb-4 block">{c.flag}</span>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">
                  {c.name}
                </h3>
                <p className="text-sm text-navy-600">{c.routes}</p>
              </div>
            ))}
          </div>

          <SectionHeading
            label="Our Services"
            title="End-to-End Skilled Migration Support"
            subtitle="From eligibility assessment and skills verification to job placement and visa grant — CIRC manages your entire skilled migration journey."
          />
          <ServiceDetailGrid services={skilledMigrationServices} columns={3} />
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
