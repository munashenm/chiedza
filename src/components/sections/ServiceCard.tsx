"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Briefcase,
  Scale,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  users: Users,
  briefcase: Briefcase,
  scale: Scale,
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  index?: number;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  index = 0,
}: ServiceCardProps) {
  const Icon = iconMap[icon] || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="group block bg-white rounded-sm border border-navy-900/8 p-6 lg:p-8 card-hover h-full"
      >
        <div className="w-14 h-14 rounded-sm bg-navy-900 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
          <Icon className="w-7 h-7 text-gold-500 group-hover:text-navy-900 transition-colors duration-300" />
        </div>
        <h3 className="font-serif text-xl font-bold text-navy-900 mb-3 group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-navy-600 leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-500 group-hover:gap-3 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
}
