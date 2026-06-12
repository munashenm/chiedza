"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

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
  bannerImage,
  bannerAlt = "",
}: PageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${
        bannerImage ? "bg-navy-950" : "gradient-navy pattern-overlay"
      } ${compact ? "py-16 lg:py-20" : "py-20 lg:py-28"}`}
    >
      {bannerImage && (
        <>
          <Image
            src={bannerImage}
            alt={bannerAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />
        </>
      )}

      {!bannerImage && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.12),transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/50 mb-6"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-gold-400 transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-gold-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg lg:text-xl text-white/75 max-w-2xl leading-relaxed"
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
            <Button href="/contact" variant="primary">
              Book a Consultation
            </Button>
            <Button href="/contact#assessment" variant="ghost">
              Free Eligibility Check
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
