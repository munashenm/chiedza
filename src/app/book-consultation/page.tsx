import { PageHero } from "@/components/sections/PageHero";
import { ContactInfoCards } from "@/components/sections/ContactInfoCards";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { EligibilityForm } from "@/components/forms/EligibilityForm";
import { createMetadata } from "@/lib/metadata";
import { PAGE_BANNERS } from "@/lib/images";

export const metadata = createMetadata({
  title: "Book a Consultation",
  description:
    "Schedule a confidential immigration consultation with Dr Chiedza Simbo and the CIRC team. Free eligibility assessment available.",
  path: "/book-consultation",
});

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        title="Book a Consultation"
        subtitle="Schedule a confidential consultation with Dr Chiedza Simbo or a senior consultant. Tell us about your case and we will confirm your appointment."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Book Consultation" },
        ]}
        compact
        bannerImage={PAGE_BANNERS.bookConsultation}
        bannerAlt="Book a consultation with CIRC"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3 text-center">
              Schedule Your Session
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-2 accent-line text-center mx-auto">
              Request a Consultation
            </h2>
            <p className="text-sm text-navy-600 mb-8 leading-relaxed text-center">
              Complete the form below and our team will contact you within one
              business day to confirm your confidential consultation.
            </p>
            <div className="bg-cream rounded-sm p-6 lg:p-8 border border-navy-900/5">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <section id="assessment" className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
              Free Assessment
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              Client Eligibility Assessment
            </h2>
            <p className="text-sm text-navy-600 leading-relaxed">
              Not sure which visa route is right for you? Submit your details for
              an initial eligibility assessment — no obligation, no cost.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-sm p-6 lg:p-8 border border-navy-900/5 shadow-sm">
            <EligibilityForm />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-xl font-bold text-navy-900 text-center mb-8">
            Other Ways to Reach Us
          </h2>
          <ContactInfoCards />
        </div>
      </section>
    </>
  );
}
