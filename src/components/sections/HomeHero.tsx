"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { DR_CHIEDZA_IMAGES } from "@/lib/images";

export function HomeHero() {
  const whatsappUrl = `https://wa.me/${SITE.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
    "Hello CIRC, I would like to enquire about your immigration services."
  )}`;

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-navy pattern-overlay overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,39,0.15),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,162,39,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 mb-6 border border-gold-500/30 px-4 py-2 rounded-sm">
                {SITE.fullName}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1]"
            >
              Expert Immigration & Refugee Consultancy{" "}
              <span className="text-gradient-gold">You Can Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg text-white/75 max-w-xl leading-relaxed"
            >
              {SITE.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" variant="primary" className="!px-8 !py-4 !text-base">
                <Calendar className="w-5 h-5" />
                Book a Consultation
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" external className="!px-8 !py-4 !text-base">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 text-sm text-gold-400/90 font-medium"
            >
              Led by Dr Chiedza Simbo — PhD in Law
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold-500/30 rounded-sm" />
            <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-black/40 aspect-[4/5] max-w-md ml-auto">
              <Image
                src={DR_CHIEDZA_IMAGES.uniform}
                alt="Dr Chiedza Simbo, Founder of CIRC"
                fill
                priority
                sizes="(max-width: 1024px) 0vw, 400px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-xl font-bold text-white">Dr Chiedza Simbo</p>
                <p className="text-sm text-gold-400 mt-1">
                  Founder & Principal Consultant
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
