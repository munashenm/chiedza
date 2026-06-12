"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormField } from "./FormField";
import { formDataToObject, submitEnquiry } from "@/lib/api";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await submitEnquiry("contact", formDataToObject(e.currentTarget));

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
          Message Sent
        </h3>
        <p className="text-navy-600 text-sm max-w-md mx-auto">
          We have received your message and will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" name="fullName" required placeholder="Your full name" />
        <FormField label="Email" name="email" type="email" required placeholder="you@email.com" />
      </div>
      <FormField label="Subject" name="subject" required placeholder="How can we help?" />
      <FormField
        label="Message"
        name="message"
        as="textarea"
        required
        placeholder="Your message..."
        rows={6}
      />
      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-sm">{error}</p>
      )}
      <Button type="submit" variant="primary" className="w-full sm:w-auto !px-8" disabled={loading}>
        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
