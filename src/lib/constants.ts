export const SITE = {
  name: "CIRC",
  fullName: "Chiedza Immigration & Refugee Consultancy",
  tagline: "Expert Immigration & Refugee Consultancy You Can Trust",
  description:
    "Professional immigration guidance for South Africa, UK, Canada and Australia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.chiedzaimmigration.co.za",
  email: "info@chiedzaimmigration.co.za",
  phone: "+27 11 234 5678",
  whatsapp: "+27112345678",
  address: "Suite 405, Sandton City Office Towers, 5th Street, Sandton, Johannesburg, 2196, South Africa",
  hours: "Mon – Fri: 8:30 AM – 5:30 PM | Sat: By appointment",
} as const;

export const TRUST_BADGES = [
  { label: "15+ Years", sublabel: "Legal Experience" },
  { label: "98%", sublabel: "Success Rate" },
  { label: "PhD", sublabel: "in Law" },
  { label: "Specialist", sublabel: "Immigration & Refugee Consultancy" },
] as const;

export type NavChild = { href: string; label: string };
export type NavLink =
  | { href: string; label: string; children?: never }
  | { href: string; label: string; children: NavChild[] };

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "/about-circ",
    label: "About CIRC",
    children: [
      { href: "/about-circ", label: "About CIRC" },
      { href: "/about-dr-chiedza-simbo", label: "Dr Chiedza Simbo" },
      { href: "/testimonials", label: "Success Stories" },
    ],
  },
  {
    href: "/south-africa-immigration",
    label: "Our Services",
    children: [
      { href: "/south-africa-immigration", label: "South Africa Immigration" },
      { href: "/uk-dependent-visa", label: "UK Dependent Visa" },
      { href: "/skilled-migration", label: "Skilled Migration" },
      { href: "/visa-appeals-refusals", label: "Visa Appeals & Refusals" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const LEGAL_DISCLAIMER =
  "Information on this website is for general guidance only and does not constitute legal advice. Please book a consultation for advice specific to your case.";
