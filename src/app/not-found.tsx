import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center gradient-navy pattern-overlay">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-8xl font-serif font-bold text-gold-500/30 mb-4">404</p>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/70 leading-relaxed mb-10">
          The page you are looking for may have been moved or no longer exists.
          Let us help you find the right immigration guidance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
