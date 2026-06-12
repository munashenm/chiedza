import { NextResponse } from "next/server";

type EnquiryType = "consultation" | "contact" | "eligibility" | "document";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateBody(type: EnquiryType, data: Record<string, string>) {
  switch (type) {
    case "consultation":
      if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.service || !data.preferredDate || !data.description) {
        return "All required consultation fields must be provided.";
      }
      break;
    case "contact":
      if (!data.fullName || !data.email || !data.subject || !data.message) {
        return "All required contact fields must be provided.";
      }
      break;
    case "eligibility":
      if (!data.fullName || !data.nationality || !data.residence || !data.email || !data.destination || !data.visaType || !data.qualification || !data.experience || !data.refusals) {
        return "All required eligibility fields must be provided.";
      }
      break;
    case "document":
      if (!data.fullName || !data.email || !data.documentType || !data.purpose || !data.description) {
        return "All required document enquiry fields must be provided.";
      }
      break;
    default:
      return "Invalid enquiry type.";
  }

  if (data.email && !isValidEmail(data.email)) {
    return "Please provide a valid email address.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, ...data } = body as { type: EnquiryType } & Record<string, string>;

    if (!type || !["consultation", "contact", "eligibility", "document"].includes(type)) {
      return NextResponse.json({ error: "Invalid enquiry type." }, { status: 400 });
    }

    const error = validateBody(type, data);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    // Ready for email integration — set RESEND_API_KEY or similar in production
    if (process.env.NODE_ENV === "development") {
      console.log(`[CIRC Enquiry: ${type}]`, data);
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been received. We will respond within one business day.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process your enquiry. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
