"use client";

import { useState } from "react";
import { ClipboardList, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField } from "./FormField";
import { formDataToObject, submitEnquiry } from "@/lib/api";

export function EligibilityForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await submitEnquiry(
      "eligibility",
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
          Assessment Submitted
        </h3>
        <p className="text-navy-600 text-sm max-w-md mx-auto">
          Our team will review your details and provide an initial eligibility
          assessment within 2–3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" name="fullName" required />
        <FormField label="Nationality" name="nationality" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Current Country of Residence" name="residence" required />
        <FormField label="Email" name="email" type="email" required />
      </div>
      <FormField
        label="Destination Country"
        name="destination"
        as="select"
        required
        options={[
          { value: "south-africa", label: "South Africa" },
          { value: "uk", label: "United Kingdom" },
          { value: "canada", label: "Canada" },
          { value: "australia", label: "Australia" },
        ]}
      />
      <FormField
        label="Visa Type of Interest"
        name="visaType"
        as="select"
        required
        options={[
          { value: "work", label: "Work Visa" },
          { value: "family", label: "Family / Dependent Visa" },
          { value: "study", label: "Study Visa" },
          { value: "business", label: "Business / Investor Visa" },
          { value: "permanent", label: "Permanent Residency" },
          { value: "asylum", label: "Asylum / Refugee" },
          { value: "appeal", label: "Appeal / Refusal" },
          { value: "other", label: "Other" },
        ]}
      />
      <FormField
        label="Highest Qualification"
        name="qualification"
        as="select"
        required
        options={[
          { value: "high-school", label: "High School" },
          { value: "diploma", label: "Diploma / Certificate" },
          { value: "bachelors", label: "Bachelor's Degree" },
          { value: "masters", label: "Master's Degree" },
          { value: "doctorate", label: "Doctorate / PhD" },
          { value: "trade", label: "Trade Qualification" },
        ]}
      />
      <FormField
        label="Years of Relevant Work Experience"
        name="experience"
        as="select"
        required
        options={[
          { value: "0-1", label: "Less than 1 year" },
          { value: "1-3", label: "1–3 years" },
          { value: "3-5", label: "3–5 years" },
          { value: "5-10", label: "5–10 years" },
          { value: "10+", label: "10+ years" },
        ]}
      />
      <FormField
        label="Previous Visa Refusals?"
        name="refusals"
        as="select"
        required
        options={[
          { value: "no", label: "No" },
          { value: "yes", label: "Yes" },
        ]}
      />
      <FormField
        label="Additional Information"
        name="additional"
        as="textarea"
        placeholder="Any other details relevant to your eligibility assessment..."
        rows={4}
      />
      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-sm">{error}</p>
      )}
      <Button type="submit" variant="secondary" className="w-full sm:w-auto !px-8" disabled={loading}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ClipboardList className="w-4 h-4" />}
        {loading ? "Submitting..." : "Submit for Assessment"}
      </Button>
    </form>
  );
}
