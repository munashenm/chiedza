import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";
import { DR_CHIEDZA_IMAGES } from "@/lib/images";

export default function NotFound() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center overflow-hidden"
      style={{ backgroundColor: "#050d1a" }}
    >
      <Image
        src={DR_CHIEDZA_IMAGES.headshot}
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
            "linear-gradient(135deg, rgba(5,13,26,0.93) 0%, rgba(10,22,40,0.9) 100%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <p className="text-8xl font-serif font-bold mb-4" style={{ color: "rgba(201,162,39,0.35)" }}>
          404
        </p>
        <h1
          className="font-serif text-3xl lg:text-4xl font-bold mb-4"
          style={{ color: "#ffffff" }}
        >
          Page Not Found
        </h1>
        <p className="leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
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
            className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ color: "#d4b84a" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
