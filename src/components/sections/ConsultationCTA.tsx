"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { DR_CHIEDZA_IMAGES } from "@/lib/images";

export function ConsultationCTA() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello CIRC, I would like to book a consultation."
  )}`;

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: "#050d1a" }}
    >
      <Image
        src={DR_CHIEDZA_IMAGES.graduation}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,13,26,0.92) 0%, rgba(10,22,40,0.9) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.15),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#d4b84a" }}
          >
            Take the First Step
          </p>
          <h2
            className="font-serif text-3xl lg:text-5xl font-bold leading-tight"
            style={{ color: "#ffffff" }}
          >
            Ready to Begin Your Immigration Journey?
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
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
