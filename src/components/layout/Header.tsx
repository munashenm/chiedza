"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-navy-900/10 shadow-sm">
      <div className="hidden lg:block bg-navy-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-9">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-3 h-3" />
            {SITE.phone}
          </a>
          <span className="text-white/70">{SITE.hours}</span>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 gradient-gold rounded-sm flex items-center justify-center shadow-md">
              <span className="font-serif font-bold text-navy-900 text-lg lg:text-xl">
                C
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-bold text-navy-900 text-lg leading-tight group-hover:text-navy-700 transition-colors">
                {SITE.name}
              </p>
              <p className="text-[10px] lg:text-xs text-navy-600 tracking-wider uppercase">
                Immigration & Refugee Consultancy
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              "children" in link ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy-800 hover:text-gold-500 transition-colors">
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 w-52 bg-white rounded-sm shadow-xl border border-navy-900/10 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-navy-800 hover:bg-gold-100 hover:text-gold-500 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-navy-800 hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" variant="primary" className="!py-2.5 !px-5 !text-xs">
              Book Consultation
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-navy-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-navy-900/10 pt-4">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-3 text-sm font-medium text-navy-800 hover:bg-gold-100 rounded-sm transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Button href="/contact" variant="primary" className="w-full">
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
