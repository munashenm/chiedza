"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, GraduationCap, Scale } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

const icons = [Award, TrendingUp, GraduationCap, Scale];

export function TrustBadges() {
  return (
    <section className="relative -mt-8 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRUST_BADGES.map((badge, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-sm shadow-xl shadow-navy-900/10 border border-navy-900/5 p-5 lg:p-6 text-center card-hover"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gold-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold-500" />
                </div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-navy-900">
                  {badge.label}
                </p>
                <p className="text-xs lg:text-sm text-navy-600 mt-1">{badge.sublabel}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
