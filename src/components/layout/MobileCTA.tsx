"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-navy-900/10 shadow-[0_-4px_20px_rgba(10,22,40,0.08)] px-4 py-3 safe-area-pb">
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 w-full bg-gold-500 text-navy-900 py-3 rounded-sm font-semibold text-sm tracking-wide hover:bg-gold-400 transition-colors"
      >
        <Calendar className="w-4 h-4" />
        Book a Consultation
      </Link>
    </div>
  );
}
