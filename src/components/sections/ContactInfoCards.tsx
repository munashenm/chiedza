import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

const contactInfo = [
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Address", value: SITE.address },
  { icon: Clock, label: "Hours", value: SITE.hours },
];

export function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactInfo.map((item) => (
        <div
          key={item.label}
          className="bg-cream rounded-sm p-6 border border-navy-900/5 text-center card-hover"
        >
          <item.icon className="w-6 h-6 text-gold-500 mx-auto mb-3" />
          <p className="text-xs font-semibold tracking-wider uppercase text-navy-500 mb-2">
            {item.label}
          </p>
          {item.href ? (
            <a
              href={item.href}
              className="text-sm text-navy-800 hover:text-gold-500 transition-colors"
            >
              {item.value}
            </a>
          ) : (
            <p className="text-sm text-navy-800">{item.value}</p>
          )}
        </div>
      ))}
    </div>
  );
}
