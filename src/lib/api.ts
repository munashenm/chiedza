import { SITE } from "./constants";

type EnquiryType = "consultation" | "contact" | "eligibility" | "document";

const FORM_EMAIL =
  process.env.NEXT_PUBLIC_FORM_EMAIL || SITE.email;

export async function submitEnquiry(
  type: EnquiryType,
  data: Record<string, string>
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(FORM_EMAIL)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `CIRC Website – ${type} enquiry`,
          _template: "table",
          _captcha: "false",
          form_type: type,
          ...data,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.message || "Submission failed. Please try again.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error:
        "Unable to send your enquiry. Please email us directly or use WhatsApp.",
    };
  }
}

export function formDataToObject(form: HTMLFormElement): Record<string, string> {
  const data: Record<string, string> = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    if (typeof value === "string") data[key] = value;
  });
  return data;
}
