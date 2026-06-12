import Image from "next/image";
import { cn } from "@/lib/utils";

interface PortraitImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  frame?: boolean;
  sizes?: string;
}

export function PortraitImage({
  src,
  alt,
  priority = false,
  className,
  frame = true,
  sizes = "(max-width: 1024px) 100vw, 480px",
}: PortraitImageProps) {
  return (
    <div className={cn("relative", className)}>
      {frame && (
        <div className="absolute -top-3 -left-3 w-full h-full border-2 border-gold-500/40 rounded-sm pointer-events-none" />
      )}
      <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl shadow-navy-900/20 aspect-[3/4] bg-navy-900">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-gold" />
      </div>
    </div>
  );
}
