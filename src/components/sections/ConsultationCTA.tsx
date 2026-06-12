"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function ConsultationCTA() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello CIRC, I would like to book a consultation."
  )}`;

  return (
    <section className="section-padding gradient-navy pattern-overlay relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-400 mb-4">
            Take the First Step
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Begin Your Immigration Journey?
          </h2>
          <p className="mt-6 text-lg text-white/75 leading-relaxed">
            Book a confidential consultation with Dr Chiedza Simbo and receive
            expert, personalised guidance tailored to your unique circumstances.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" className="!px-8 !py-4">
              <Calendar className="w-5 h-5" />
              Book a Consultation
            </Button>
            <Button href={whatsappUrl} variant="whatsapp" external className="!px-8 !py-4">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
