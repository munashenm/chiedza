"use client";

import { useState } from "react";
import { Upload, CheckCircle, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField } from "./FormField";
import { formDataToObject, submitEnquiry } from "@/lib/api";

export function DocumentUploadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await submitEnquiry(
      "document",
      formDataToObject(e.currentTarget)
    );

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || "Submission failed. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-4" />
        <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">
          Enquiry Received
        </h3>
        <p className="text-navy-600 text-sm max-w-md mx-auto">
          We will review your document enquiry and contact you with next steps
          for secure document submission.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" name="fullName" required />
        <FormField label="Email" name="email" type="email" required />
      </div>
      <FormField
        label="Document Type"
        name="documentType"
        as="select"
        required
        options={[
          { value: "passport", label: "Passport" },
          { value: "qualification", label: "Qualification / Degree" },
          { value: "police-clearance", label: "Police Clearance" },
          { value: "drivers-licence", label: "Driver's Licence" },
          { value: "employment", label: "Employment Documents" },
          { value: "financial", label: "Financial Documents" },
          { value: "other", label: "Other" },
        ]}
      />
      <FormField
        label="Purpose"
        name="purpose"
        as="select"
        required
        options={[
          { value: "verification", label: "Document Verification" },
          { value: "translation", label: "Certified Translation" },
          { value: "apostille", label: "Apostille / Legalisation" },
          { value: "review", label: "Pre-Submission Review" },
        ]}
      />
      <FormField
        label="Description of Documents"
        name="description"
        as="textarea"
        required
        placeholder="Describe the documents you need assistance with..."
        rows={4}
      />

      <div className="border-2 border-dashed border-navy-900/15 rounded-sm p-8 text-center hover:border-gold-500/50 transition-colors">
        <Upload className="w-10 h-10 text-navy-400 mx-auto mb-3" />
        <p className="text-sm font-medium text-navy-800 mb-1">
          Document Upload Area
        </p>
        <p className="text-xs text-navy-500 mb-4">
          For security, documents will be collected via our secure portal after
          initial enquiry review. Describe your documents above.
        </p>
        <label className="inline-flex items-center gap-2 text-sm text-gold-500 font-semibold cursor-pointer hover:text-gold-400 transition-colors">
          <FileText className="w-4 h-4" />
          <input type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png,.doc,.docx" />
          Select Files (Preview)
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-sm">{error}</p>
      )}
      <Button type="submit" variant="primary" className="w-full sm:w-auto !px-8" disabled={loading}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
        {loading ? "Submitting..." : "Submit Document Enquiry"}
      </Button>
    </form>
  );
}
