import { PageHero } from "@/components/sections/PageHero";
import { PAGE_BANNERS } from "@/lib/images";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { testimonials } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { Star, Quote } from "lucide-react";

export const metadata = createMetadata({
  title: "Testimonials & Success Stories",
  description:
    "Read client success stories and testimonials from CIRC — real outcomes in South African immigration, UK dependent visas, skilled migration, and asylum cases.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="Success Stories"
        subtitle="Real outcomes from clients who trusted CIRC with their most important immigration decisions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Success Stories" },
        ]}
        showCta
        bannerImage={PAGE_BANNERS.testimonials}
        bannerAlt="Dr Chiedza Simbo - CIRC success stories"
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-sm p-6 lg:p-8 border border-navy-900/5 card-hover relative"
              >
                <Quote className="w-10 h-10 text-gold-500/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-navy-700 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-navy-900/10 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy-900">{t.name}</p>
                    <p className="text-xs text-navy-500 mt-1">{t.location}</p>
                  </div>
                  <span className="text-xs font-semibold text-gold-500 bg-gold-100 px-3 py-1 rounded-sm">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-navy-900 rounded-sm p-8 lg:p-12">
            <p className="font-serif text-5xl lg:text-6xl font-bold text-gold-400 mb-2">
              98%
            </p>
            <p className="text-white text-lg font-medium">Client Success Rate</p>
            <p className="text-white/60 text-sm mt-2 max-w-md mx-auto">
              Based on successful visa grants, appeal wins, and positive residency
              outcomes across all service areas.
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
