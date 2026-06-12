import { MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";

export function GoogleMap() {
  const encodedAddress = encodeURIComponent(SITE.address);

  return (
    <section className="relative">
      <div className="absolute top-6 left-6 z-10 bg-white rounded-sm shadow-xl p-5 max-w-xs hidden md:block">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-serif font-bold text-navy-900 text-sm">Our Office</p>
            <p className="text-xs text-navy-600 mt-1 leading-relaxed">{SITE.address}</p>
          </div>
        </div>
      </div>
      <iframe
        title="CIRC Office Location"
        src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        className="w-full h-[400px] lg:h-[450px] grayscale-[30%] contrast-[1.1]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
