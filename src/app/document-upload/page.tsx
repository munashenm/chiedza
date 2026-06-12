import { PageHero } from "@/components/sections/PageHero";
import { DocumentUploadForm } from "@/components/forms/DocumentUploadForm";
import { createMetadata } from "@/lib/metadata";
import { PAGE_BANNERS } from "@/lib/images";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Document Upload Enquiry",
  description:
    "Submit a document upload enquiry to CIRC for verification, certified translation, apostille, or pre-submission review.",
  path: "/document-upload",
});

export default function DocumentUploadPage() {
  return (
    <>
      <PageHero
        title="Document Upload Enquiry"
        subtitle="Need help with document verification, translation, or pre-submission review? Describe your documents and we will guide you through our secure process."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "Document Upload" },
        ]}
        compact
        bannerImage={PAGE_BANNERS.documentUpload}
        bannerAlt="Document upload enquiry - CIRC"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3 text-center">
              Document Services
            </p>
            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-2 accent-line text-center mx-auto">
              Submit Your Document Enquiry
            </h2>
            <p className="text-sm text-navy-600 mb-8 leading-relaxed text-center">
              For security, documents are collected via our secure portal after
              initial review. Describe what you need below and we will contact
              you with next steps.
            </p>
            <div className="bg-cream rounded-sm p-6 lg:p-8 border border-navy-900/5">
              <DocumentUploadForm />
            </div>
            <p className="text-center text-sm text-navy-500 mt-8">
              Prefer to speak with us first?{" "}
              <Link href="/contact" className="text-gold-500 font-semibold hover:text-gold-400">
                Send a message
              </Link>{" "}
              or{" "}
              <Link href="/book-consultation" className="text-gold-500 font-semibold hover:text-gold-400">
                book a consultation
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
