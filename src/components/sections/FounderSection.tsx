"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Scale, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const credentials = [
  { icon: GraduationCap, label: "PhD in Law" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Scale, label: "Immigration Specialist" },
];

export function FounderSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500/30 rounded-sm" />
            <ImagePlaceholder
              alt="Dr Chiedza Simbo - Founder of CIRC"
              aspectRatio="portrait"
              label="Dr Chiedza Simbo"
              sublabel="Professional photo placeholder"
              className="relative z-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
              Our Founder
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 leading-tight accent-line">
              Dr Chiedza Simbo
            </h2>
            <p className="mt-6 text-navy-600 leading-relaxed">
              Dr Chiedza Simbo is the founder and principal consultant of Chiedza
              Immigration & Refugee Consultancy (CIRC). With a PhD in Law and over
              15 years of dedicated practice in immigration and refugee law, she
              has built a reputation for delivering exceptional outcomes for
              clients across South Africa, the United Kingdom, Canada, and
              Australia.
            </p>
            <p className="mt-4 text-navy-600 leading-relaxed">
              Her approach combines rigorous legal analysis with compassionate
              client care — ensuring every individual, family, and business
              receives strategic, honest, and results-driven immigration guidance.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-2 bg-gold-100 px-4 py-2 rounded-sm"
                >
                  <cred.icon className="w-4 h-4 text-gold-500" />
                  <span className="text-sm font-medium text-navy-800">
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/about-dr-chiedza-simbo" variant="secondary">
                Meet Dr Simbo
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
