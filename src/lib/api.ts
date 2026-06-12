type EnquiryType = "consultation" | "contact" | "eligibility" | "document";

export async function submitEnquiry(
  type: EnquiryType,
  data: Record<string, string>
): Promise<{ success: boolean; error?: string }> {
  const response = await fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, ...data }),
  });

  const result = await response.json();

  if (!response.ok) {
    return { success: false, error: result.error || "Submission failed." };
  }

  return { success: true };
}

export function formDataToObject(form: HTMLFormElement): Record<string, string> {
  const data: Record<string, string> = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    if (typeof value === "string") data[key] = value;
  });
  return data;
}
