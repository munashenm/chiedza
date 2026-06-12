"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DR_CHIEDZA_IMAGES } from "@/lib/images";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  showCta?: boolean;
  compact?: boolean;
  bannerImage?: string;
  bannerAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  showCta = false,
  compact = false,
  bannerImage = DR_CHIEDZA_IMAGES.headshot,
  bannerAlt = "Dr Chiedza Simbo - CIRC Immigration Consultancy",
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "py-16 lg:py-20" : "py-20 lg:py-28"}`}
      style={{ backgroundColor: "#050d1a" }}
    >
      <Image
        src={bannerImage}
        alt={bannerAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark overlays — ensures white text is always readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,13,26,0.92) 0%, rgba(10,22,40,0.88) 50%, rgba(5,13,26,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[#050d1a]/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.12),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a227]/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 text-sm text-white/60 mb-6"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30">/</span>}
                {crumb.href ? (
                  <a
                    href={crumb.href}
                    className="hover:text-[#d4b84a] transition-colors"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-[#d4b84a]">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl"
          style={{ color: "#ffffff" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg lg:text-xl max-w-2xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            {subtitle}
          </motion.p>
        )}

        {showCta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="/book-consultation" variant="primary">
              Book a Consultation
            </Button>
            <Button href="/book-consultation#assessment" variant="ghost">
              Free Eligibility Check
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
