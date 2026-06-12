"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import Link from "next/link";

interface TestimonialsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

export function TestimonialsSection({
  limit = 3,
  showViewAll = true,
}: TestimonialsSectionProps) {
  const displayed = testimonials.slice(0, limit);

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Client Success"
          title="What Our Clients Say"
          subtitle="Real outcomes from individuals and families who trusted CIRC with their immigration journeys."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayed.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-sm p-6 lg:p-8 border border-navy-900/5 card-hover relative"
            >
              <Quote className="w-10 h-10 text-gold-500/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-sm text-navy-700 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-navy-900/10 pt-4">
                <p className="font-semibold text-navy-900">{t.name}</p>
                <p className="text-xs text-navy-500 mt-1">{t.location}</p>
                <p className="text-xs text-gold-500 font-medium mt-1">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors"
            >
              View All Success Stories →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
