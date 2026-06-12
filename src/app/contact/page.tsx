import { PageHero } from "@/components/sections/PageHero";
import { GoogleMap } from "@/components/sections/GoogleMap";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { ContactForm } from "@/components/forms/ContactForm";
import { EligibilityForm } from "@/components/forms/EligibilityForm";
import { DocumentUploadForm } from "@/components/forms/DocumentUploadForm";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { PAGE_BANNERS } from "@/lib/images";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = createMetadata({
  title: "Contact & Book Consultation",
  description:
    "Contact CIRC to book a consultation, submit an eligibility assessment, upload documents, or send a general enquiry. Office in Sandton, Johannesburg.",
  path: "/contact",
});

const contactInfo = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Address", value: SITE.address },
  { icon: Clock, label: "Hours", value: SITE.hours },
];

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello CIRC, I would like to book a consultation."
  )}`;

  return (
    <>
      <PageHero
        title="Contact & Book Consultation"
        subtitle="Take the first step towards your immigration goals. Book a consultation, check your eligibility, or get in touch with our team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        compact
        bannerImage={PAGE_BANNERS.contact}
        bannerAlt="Contact CIRC immigration consultancy"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="bg-cream rounded-sm p-6 border border-navy-900/5 text-center card-hover"
              >
                <item.icon className="w-6 h-6 text-gold-500 mx-auto mb-3" />
                <p className="text-xs font-semibold tracking-wider uppercase text-navy-500 mb-2">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-navy-800 hover:text-gold-500 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-navy-800">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-16">
            <Button href={whatsappUrl} variant="whatsapp" external className="!px-8 !py-4">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div id="consultation">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
                Book a Consultation
              </p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-2 accent-line">
                Schedule Your Consultation
              </h2>
              <p className="text-sm text-navy-600 mb-8 leading-relaxed">
                Complete the form below and our team will contact you to confirm
                your confidential consultation with Dr Chiedza Simbo or a senior
                consultant.
              </p>
              <div className="bg-cream rounded-sm p-6 lg:p-8 border border-navy-900/5">
                <ConsultationForm />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
                General Enquiry
              </p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-2 accent-line">
                Send Us a Message
              </h2>
              <p className="text-sm text-navy-600 mb-8 leading-relaxed">
                Have a question? Send us a message and we will respond within one
                business day.
              </p>
              <div className="bg-cream rounded-sm p-6 lg:p-8 border border-navy-900/5">
                <ContactForm />
              </div>
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
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
              Document Services
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-4">
              Document Upload Enquiry
            </h2>
            <p className="text-sm text-navy-600 leading-relaxed">
              Need help with document verification, translation, or pre-submission
              review? Submit an enquiry and we will guide you through our secure
              document process.
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-cream rounded-sm p-6 lg:p-8 border border-navy-900/5">
            <DocumentUploadForm />
          </div>
        </div>
      </section>

      <GoogleMap />
    </>
  );
}
