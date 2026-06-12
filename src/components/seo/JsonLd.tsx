import { SITE } from "@/lib/constants";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: SITE.fullName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 405, Sandton City Office Towers, 5th Street",
      addressLocality: "Sandton, Johannesburg",
      postalCode: "2196",
      addressCountry: "ZA",
    },
    areaServed: [
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Dr Chiedza Simbo",
      jobTitle: "Principal Immigration Consultant",
      description: "PhD in Law with 15+ years of immigration and refugee law experience.",
    },
    knowsAbout: [
      "Immigration Law",
      "Refugee Law",
      "Visa Applications",
      "Skilled Migration",
      "Visa Appeals",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
