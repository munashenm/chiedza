"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField } from "./FormField";
import { formDataToObject, submitEnquiry } from "@/lib/api";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await submitEnquiry(
      "consultation",
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
          Consultation Request Received
        </h3>
        <p className="text-navy-600 text-sm max-w-md mx-auto">
          Thank you for your enquiry. A member of the CIRC team will contact you
          within one business day to confirm your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="First Name" name="firstName" required placeholder="Your first name" />
        <FormField label="Last Name" name="lastName" required placeholder="Your last name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Email" name="email" type="email" required placeholder="you@email.com" />
        <FormField label="Phone / WhatsApp" name="phone" type="tel" required placeholder="+27 ..." />
      </div>
      <FormField
        label="Service Required"
        name="service"
        as="select"
        required
        options={[
          { value: "sa-immigration", label: "South Africa Immigration" },
          { value: "uk-dependent", label: "UK Dependent Visa" },
          { value: "skilled-migration", label: "Skilled Migration (UK/Canada/Australia)" },
          { value: "appeals", label: "Visa Appeals & Refusals" },
          { value: "asylum", label: "Asylum / Refugee" },
          { value: "other", label: "Other" },
        ]}
      />
      <FormField
        label="Preferred Consultation Date"
        name="preferredDate"
        type="date"
        required
      />
      <FormField
        label="Brief Description of Your Case"
        name="description"
        as="textarea"
        required
        placeholder="Please provide a brief overview of your immigration matter..."
        rows={5}
      />
      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-sm">{error}</p>
      )}
      <Button type="submit" variant="primary" className="w-full sm:w-auto !px-8" disabled={loading}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? "Submitting..." : "Request Consultation"}
      </Button>
    </form>
  );
}
