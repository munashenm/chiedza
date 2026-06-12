"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  country?: string;
}

interface ServiceDetailGridProps {
  services: ServiceItem[];
  columns?: 2 | 3;
}

export function ServiceDetailGrid({
  services,
  columns = 2,
}: ServiceDetailGridProps) {
  return (
    <div
      className={`grid grid-cols-1 ${
        columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"
      } gap-6 lg:gap-8`}
    >
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 6) * 0.05 }}
          className="bg-white rounded-sm border border-navy-900/8 p-6 lg:p-8 card-hover group"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-gold-100 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
              <CheckCircle className="w-5 h-5 text-gold-500 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif text-lg font-bold text-navy-900">
                  {service.title}
                </h3>
                {service.country && service.country !== "All" && (
                  <span className="text-[10px] font-semibold tracking-wider uppercase bg-navy-900 text-gold-400 px-2 py-0.5 rounded-sm">
                    {service.country}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm text-navy-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
