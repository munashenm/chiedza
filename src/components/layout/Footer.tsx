import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SITE, LEGAL_DISCLAIMER } from "@/lib/constants";

const footerServices = [
  { href: "/south-africa-immigration", label: "South Africa Immigration" },
  { href: "/uk-dependent-visa", label: "UK Dependent Visa" },
  { href: "/skilled-migration", label: "Skilled Migration" },
  { href: "/visa-appeals-refusals", label: "Visa Appeals & Refusals" },
];

const footerCompany = [
  { href: "/about-circ", label: "About CIRC" },
  { href: "/about-dr-chiedza-simbo", label: "Dr Chiedza Simbo" },
  { href: "/testimonials", label: "Success Stories" },
  { href: "/blog", label: "Immigration Updates" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-gold rounded-sm flex items-center justify-center">
                <span className="font-serif font-bold text-navy-900 text-xl">C</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg">{SITE.name}</p>
                <p className="text-xs text-white/60 tracking-wider uppercase">
                  Immigration & Refugee Consultancy
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Expert immigration and refugee consultancy serving clients across
              South Africa, the United Kingdom, Canada, and Australia.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-gold-400 text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold-400 text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold-400 text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">{SITE.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/70 hover:text-gold-400 transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-white/70 hover:text-gold-400 transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-sm text-white/70">{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/50 leading-relaxed max-w-4xl mb-6">
            {LEGAL_DISCLAIMER}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
            </p>
            <p className="text-xs text-white/40">
              Designed for excellence in immigration law consultancy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
