"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BannerStripProps {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  align?: "left" | "right";
}

export function BannerStrip({
  image,
  alt,
  title,
  subtitle,
  align = "right",
}: BannerStripProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 min-h-[280px] lg:min-h-[320px] ${
            align === "left" ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: align === "right" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-16 relative z-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-3">
              CIRC Leadership
            </p>
            <h2 className="font-serif text-2xl lg:text-4xl font-bold text-white leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-white/75 leading-relaxed max-w-md">{subtitle}</p>
            )}
            <div className="mt-6 w-16 h-1 gradient-gold rounded-full" />
          </motion.div>

          <div className="relative min-h-[240px] lg:min-h-full">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/40 to-transparent lg:w-1/3" />
            <div className="absolute inset-0 bg-navy-900/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
