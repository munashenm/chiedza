import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { BannerStrip } from "@/components/sections/BannerStrip";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { DR_CHIEDZA_IMAGES } from "@/lib/images";
import { createMetadata } from "@/lib/metadata";
import { Target, Eye, Heart } from "lucide-react";

export const metadata = createMetadata({
  title: "About CIRC",
  description:
    "Learn about Chiedza Immigration & Refugee Consultancy — our mission, values, and commitment to delivering premium immigration services across South Africa, UK, Canada, and Australia.",
  path: "/about-circ",
});

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide accessible, expert immigration and refugee legal guidance that empowers individuals and families to achieve their global mobility goals with confidence and clarity.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted immigration consultancy in Southern Africa, recognised for legal excellence, ethical practice, and transformative client outcomes.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, compassion, professionalism, and results. Every client receives honest advice, meticulous preparation, and dedicated advocacy throughout their journey.",
  },
];

export default function AboutCircPage() {
  return (
    <>
      <PageHero
        title="About CIRC"
        subtitle="Chiedza Immigration & Refugee Consultancy — where legal expertise meets compassionate client care."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About CIRC" },
        ]}
        showCta
        bannerImage={DR_CHIEDZA_IMAGES.uniform}
        bannerAlt="Dr Chiedza Simbo, founder of CIRC"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                label="Who We Are"
                title="A Premium Immigration Consultancy Built on Trust"
                align="left"
              />
              <p className="text-navy-600 leading-relaxed -mt-8">
                Founded by Dr Chiedza Simbo, CIRC was established to bridge the
                gap between complex immigration law and the individuals who need
                it most. We serve clients navigating visa applications,
                permanent residency, asylum claims, family reunification, and
                skilled migration across South Africa, the United Kingdom,
                Canada, and Australia.
              </p>
              <p className="text-navy-600 leading-relaxed mt-4">
                With over 15 years of legal experience and a 98% success rate,
                CIRC has helped hundreds of individuals, families, and businesses
                achieve their immigration objectives. Our consultancy combines
                PhD-level legal knowledge with practical, client-focused
                strategies that deliver real results.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-sm shadow-xl aspect-[4/3]">
              <Image
                src={DR_CHIEDZA_IMAGES.lectureHall}
                alt="Dr Chiedza Simbo representing CIRC"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-lg font-bold text-white">
                  Led by Dr Chiedza Simbo
                </p>
                <p className="text-sm text-gold-400">PhD in Law · 15+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BannerStrip
        image={DR_CHIEDZA_IMAGES.headshot}
        alt="Dr Chiedza Simbo"
        title="Trusted Guidance for Every Immigration Journey"
        subtitle="From first consultation to final outcome — CIRC stands beside you with expertise you can rely on."
        align="right"
      />

      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Foundation"
            title="Mission, Vision & Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-sm p-8 border border-navy-900/5 card-hover text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-sm gradient-navy flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <ConsultationCTA />
    </>
  );
}
