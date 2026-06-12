import { PageHero } from "@/components/sections/PageHero";
import { BannerStrip } from "@/components/sections/BannerStrip";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { PortraitImage } from "@/components/ui/PortraitImage";
import { DR_CHIEDZA_IMAGES, PAGE_BANNERS } from "@/lib/images";
import { createMetadata } from "@/lib/metadata";
import {
  GraduationCap,
  Award,
  BookOpen,
  Globe,
  Scale,
  Users,
} from "lucide-react";

export const metadata = createMetadata({
  title: "About Dr Chiedza Simbo",
  description:
    "Meet Dr Chiedza Simbo — PhD in Law, 15+ years immigration experience, and founder of CIRC. Expert in South African, UK, Canadian, and Australian immigration law.",
  path: "/about-dr-chiedza-simbo",
});

const highlights = [
  { icon: GraduationCap, label: "PhD in Law" },
  { icon: Award, label: "15+ Years Experience" },
  { icon: Scale, label: "Immigration Law Specialist" },
  { icon: Globe, label: "Multi-Jurisdiction Expert" },
  { icon: BookOpen, label: "Published Researcher" },
  { icon: Users, label: "500+ Clients Served" },
];

const expertise = [
  "South African Department of Home Affairs visa and residency applications",
  "UK Visas and Immigration (UKVI) dependent and family visa routes",
  "Canadian Express Entry and Provincial Nominee Programmes",
  "Australian skilled migration and employer nomination schemes",
  "Asylum seeker and refugee status applications in South Africa",
  "Visa refusal appeals, administrative reviews, and tribunal representation",
  "Overstay appeals and V-list ban upliftment",
  "Police clearance and document verification services",
];

const galleryImages = [
  {
    src: DR_CHIEDZA_IMAGES.uniform,
    alt: "Dr Chiedza Simbo in CIRC professional attire",
    caption: "CIRC Founder",
  },
  {
    src: DR_CHIEDZA_IMAGES.headshot,
    alt: "Dr Chiedza Simbo professional headshot",
    caption: "Principal Consultant",
  },
  {
    src: DR_CHIEDZA_IMAGES.lectureHall,
    alt: "Dr Chiedza Simbo in academic setting",
    caption: "Legal Educator",
  },
  {
    src: DR_CHIEDZA_IMAGES.graduation,
    alt: "Dr Chiedza Simbo at graduation ceremony",
    caption: "PhD in Law",
  },
];

export default function AboutDrChiedzaPage() {
  return (
    <>
      <PageHero
        title="Dr Chiedza Simbo"
        subtitle="Founder & Principal Consultant — PhD in Law, Immigration & Refugee Law Specialist"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dr Chiedza Simbo" },
        ]}
        showCta
        bannerImage={PAGE_BANNERS.aboutDr}
        bannerAlt="Dr Chiedza Simbo, immigration law specialist"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <PortraitImage
                  src={DR_CHIEDZA_IMAGES.uniform}
                  alt="Dr Chiedza Simbo professional portrait"
                  priority
                />
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 bg-gold-100 px-3 py-2.5 rounded-sm"
                    >
                      <item.icon className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="text-xs font-medium text-navy-800">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-3">
                  Biography
                </p>
                <h2 className="font-serif text-3xl font-bold text-navy-900 accent-line">
                  A Leader in Immigration & Refugee Law
                </h2>
              </div>

              <p className="text-navy-600 leading-relaxed">
                Dr Chiedza Simbo is a distinguished legal professional and the
                founder of Chiedza Immigration & Refugee Consultancy (CIRC). She
                holds a PhD in Law and has dedicated over 15 years to practising
                immigration and refugee law, building an exceptional track record
                with a 98% success rate across visa applications, appeals, and
                residency matters.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Her academic background and practical experience span multiple
                jurisdictions, enabling CIRC to offer truly comprehensive
                immigration services for South Africa, the United Kingdom,
                Canada, and Australia. Dr Simbo is known for her meticulous
                approach to case preparation, her ability to navigate complex
                legal frameworks, and her unwavering commitment to achieving the
                best possible outcomes for every client.
              </p>
              <p className="text-navy-600 leading-relaxed">
                Beyond individual client work, Dr Simbo has advised businesses,
                recruiters, and international organisations on immigration
                compliance and cross-border mobility. Her consultancy reflects
                her belief that expert legal guidance should be accessible,
                transparent, and delivered with genuine care for each person&apos;s
                unique circumstances.
              </p>

              <div className="bg-cream rounded-sm p-6 lg:p-8 mt-8">
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-4">
                  Areas of Expertise
                </h3>
                <ul className="space-y-3">
                  {expertise.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-navy-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BannerStrip
        image={DR_CHIEDZA_IMAGES.graduation}
        alt="Dr Chiedza Simbo at PhD graduation"
        title="PhD in Law — A Foundation of Excellence"
        subtitle="Academic rigour and practical expertise underpin every case CIRC handles."
        align="left"
      />

      <PhotoGallery
        title="Dr Chiedza Simbo"
        images={galleryImages}
      />

      <ConsultationCTA />
    </>
  );
}
