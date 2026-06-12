import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  label?: string;
  sublabel?: string;
  className?: string;
}

const aspectClasses = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function ImagePlaceholder({
  alt,
  aspectRatio = "landscape",
  label,
  sublabel,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm bg-gradient-to-br from-navy-800 to-navy-900",
        aspectClasses[aspectRatio],
        className
      )}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.1),transparent_70%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-navy-700/50 border-2 border-gold-500/30 flex items-center justify-center mb-4">
          <User className="w-8 h-8 lg:w-10 lg:h-10 text-gold-500/60" />
        </div>
        {label && (
          <p className="font-serif text-lg lg:text-xl font-bold text-white/90">
            {label}
          </p>
        )}
        {sublabel && (
          <p className="text-xs text-white/50 mt-2 max-w-xs">{sublabel}</p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />
    </div>
  );
}
