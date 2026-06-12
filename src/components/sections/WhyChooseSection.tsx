"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Map,
  HeartHandshake,
  ClipboardCheck,
  Shield,
  LucideIcon,
} from "lucide-react";
import { whyChooseCirc } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  trophy: Trophy,
  map: Map,
  "heart-handshake": HeartHandshake,
  "clipboard-check": ClipboardCheck,
  shield: Shield,
};

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why CIRC"
          title="Why Choose Chiedza Immigration & Refugee Consultancy?"
          subtitle="A premium consultancy built on legal excellence, proven results, and unwavering commitment to every client's success."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {whyChooseCirc.map((item, i) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 lg:p-8 rounded-sm border border-navy-900/5 hover:border-gold-500/30 transition-colors card-hover"
              >
                <div className="w-12 h-12 rounded-sm gradient-navy flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
