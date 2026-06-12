"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardCheck, FileCheck, BadgeCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Book a Consultation",
    description:
      "Schedule a confidential consultation to discuss your immigration goals, circumstances, and the best pathway forward.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Eligibility Assessment",
    description:
      "We conduct a thorough assessment of your eligibility, identify the optimal visa route, and outline a clear action plan.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Document Preparation",
    description:
      "Our team prepares, verifies, and organises all required documentation to meet the highest submission standards.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Submission & Outcome",
    description:
      "We manage submission, follow-up, and representation — keeping you informed until your visa or residency is granted.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Process"
          title="How CIRC Works"
          subtitle="A clear, structured process designed to give you confidence at every stage of your immigration journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto rounded-full gradient-navy flex items-center justify-center mb-5 relative z-10 ring-4 ring-white">
                <item.icon className="w-7 h-7 text-gold-400" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-gold-500">
                STEP {item.step}
              </span>
              <h3 className="font-serif text-lg font-bold text-navy-900 mt-2 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
