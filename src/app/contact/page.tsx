import { PageHero } from "@/components/sections/PageHero";
import { GoogleMap } from "@/components/sections/GoogleMap";
import { ContactInfoCards } from "@/components/sections/ContactInfoCards";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { PAGE_BANNERS } from "@/lib/images";
import { MessageCircle, Calendar, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with CIRC. Send a message, call, email, or visit our Sandton office for immigration and refugee consultancy enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello CIRC, I would like to get in touch."
  )}`;

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have a question or need general information? Send us a message and our team will respond within one business day."
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
          <ContactInfoCards />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-16">
            <Button href={whatsappUrl} variant="whatsapp" external className="!px-8 !py-4">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <Link
              href="/book-consultation"
              className="group bg-cream rounded-sm p-6 border border-navy-900/5 card-hover flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-sm gradient-navy flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-navy-900 group-hover:text-gold-500 transition-colors">
                  Book a Consultation
                </h3>
                <p className="text-sm text-navy-600 mt-1 leading-relaxed">
                  Schedule a confidential session with Dr Chiedza Simbo.
                </p>
              </div>
            </Link>
            <Link
              href="/document-upload"
              className="group bg-cream rounded-sm p-6 border border-navy-900/5 card-hover flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-sm gradient-navy flex items-center justify-center shrink-0">
                <Upload className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-navy-900 group-hover:text-gold-500 transition-colors">
                  Document Upload Enquiry
                </h3>
                <p className="text-sm text-navy-600 mt-1 leading-relaxed">
                  Verification, translation, or pre-submission document review.
                </p>
              </div>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream rounded-sm p-6 border border-navy-900/5 card-hover flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-sm bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-navy-900 group-hover:text-gold-500 transition-colors">
                  WhatsApp Us
                </h3>
                <p className="text-sm text-navy-600 mt-1 leading-relaxed">
                  Quick questions? Message us directly on WhatsApp.
                </p>
              </div>
            </a>
          </div>

          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3 text-center">
              General Enquiry
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-2 accent-line text-center mx-auto">
              Send Us a Message
            </h2>
            <p className="text-sm text-navy-600 mb-8 leading-relaxed text-center">
              For general questions, media enquiries, or information about our
              services — we will respond within one business day.
            </p>
            <div className="bg-cream rounded-sm p-6 lg:p-8 border border-navy-900/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <GoogleMap />
    </>
  );
}
