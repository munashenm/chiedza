import type { Metadata } from "next";
import { SITE } from "./constants";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE.fullName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "immigration consultancy",
      "refugee consultancy",
      "South Africa visa",
      "UK dependent visa",
      "skilled migration",
      "visa appeals",
      "Dr Chiedza Simbo",
      "CIRC",
    ],
    openGraph: {
      title: fullTitle,
      description,
      url: `${SITE.url}${path}`,
      siteName: SITE.fullName,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: `${SITE.url}${path}`,
    },
  };
}
