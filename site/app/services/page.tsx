import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Grand Forks Auto Repair, All Makes & Models" },
  description:
    "Full-service auto repair serving Grand Forks. Engine, transmission, brakes, electrical, steering, suspension, alignments, and routine maintenance. Call (218) 773-7809.",
  keywords: [
    "auto repair Grand Forks",
    "Grand Forks mechanic",
    "engine repair Grand Forks",
    "transmission repair Grand Forks",
    "brake repair Grand Forks",
    "oil change Grand Forks",
    "wheel alignment Grand Forks",
    "Grand Forks auto shop",
    "Grand Forks ND auto repair",
    "full service auto repair Grand Forks",
  ],
  alternates: {
    canonical: "https://driscollsautoservice.com/services/",
  },
  openGraph: {
    type: "website",
    url: "https://driscollsautoservice.com/services/",
    title: "Grand Forks Auto Repair, All Makes & Models | Driscoll's Auto Service",
    description:
      "Full-service auto repair serving Grand Forks. Engine, transmission, brakes, electrical, suspension, alignments, and routine maintenance. Call (218) 773-7809.",
    images: [
      {
        url: "/gallery/shop-real-1920.jpg",
        width: 1920,
        height: 960,
        alt: "Driscoll's Auto Service shop in East Grand Forks, serving Grand Forks ND",
      },
    ],
  },
};

const repairs = [
  { icon: "🔧", title: "Engine Repair & Replacement", desc: "From minor repairs to full engine replacement. Gas and diesel engines, all makes and models." },
  { icon: "⚙️", title: "Transmission Service & Repair", desc: "Transmission fluid service, repairs, and full replacement when needed." },
  { icon: "🛑", title: "Brake Inspection & Repair", desc: "Full braking system inspection, pad replacement, rotor resurfacing or replacement, and brake line repair." },
  { icon: "⚡", title: "Electrical System Diagnosis", desc: "Complete electrical diagnosis and repair. Starters, alternators, wiring, sensors, and more." },
  { icon: "🔩", title: "Steering & Suspension", desc: "Shocks, struts, tie rods, ball joints, and full suspension system repair." },
  { icon: "📐", title: "Alignments", desc: "Precision wheel alignment to reduce tire wear and keep your vehicle tracking true." },
  { icon: "🪛", title: "Hose & Strut Replacement", desc: "Coolant hoses, radiator hoses, strut replacement, and related repair." },
  { icon: "🔍", title: "Computer Diagnostics", desc: "State-of-the-art diagnostic equipment to accurately identify problems before any repair begins." },
];

const maintenance = [
  "Oil changes with service and safety inspection",
  "Tune-ups and routine maintenance",
  "Transmission fluid service",
  "Brake checks and repairs",
  "Safety analysis",
  "Manufacturer-recommended maintenance schedules",
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Auto Repair",
  name: "Auto Repair and Routine Maintenance",
  description:
    "Full-service auto repair for all makes and models in East Grand Forks, MN. Engine repair, transmission service, brake repair, electrical diagnosis, alignments, and routine maintenance.",
  provider: {
    "@type": "AutoRepair",
    "@id": "https://driscollsautoservice.com/#business",
  },
  areaServed: [
    { "@type": "City", name: "East Grand Forks", addressRegion: "MN" },
    { "@type": "City", name: "Grand Forks", addressRegion: "ND" },
    { "@type": "City", name: "Crookston", addressRegion: "MN" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Repair and Replacement" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transmission Service and Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Inspection and Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical System Diagnosis" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Steering and Suspension Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wheel Alignment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Change and Safety Inspection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Computer Diagnostics" } },
    ],
  },
};

const servicesFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work on both gas and diesel vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We service gas and diesel vehicles of all makes and models. Our shop handles everything from routine oil changes to full engine rebuilds for both fuel types.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do oil changes and routine maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide oil changes with a service and safety inspection, tune-ups, transmission fluid service, brake checks, and manufacturer-recommended maintenance schedules.",
      },
    },
    {
      "@type": "Question",
      name: "Can you repair my transmission in East Grand Forks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle transmission fluid service, repairs, and full replacement when needed, for both automatic and manual transmissions on all makes and models.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer brake repair near Grand Forks, ND?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are located in East Grand Forks, MN, just across the river from Grand Forks, ND. We provide full brake system inspection, pad replacement, rotor service, and brake line repair.",
      },
    },
  ],
};

const servicesBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://driscollsautoservice.com" },
    { "@type": "ListItem", position: 2, name: "Auto Repair Services", item: "https://driscollsautoservice.com/services/" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesBreadcrumb) }} />
      {/* Page hero */}
      <section className="relative bg-[#0f0f0f] py-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute top-0 left-0 w-64 h-full hazard-stripe opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#E11D2D] text-white px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            Full-Service Shop
          </div>
          <h1 aria-label="Grand Forks Auto Repair, All Makes &amp; Models" className="font-display text-white text-5xl md:text-7xl uppercase leading-none">
            <span className="block" aria-hidden="true">Grand Forks </span>
            <span className="block" aria-hidden="true" style={{ color: "#E11D2D" }}>Auto Repair </span>
            <span className="block" aria-hidden="true">All Makes &amp; Models </span>
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
            Gas or diesel, domestic or import, we service every vehicle that rolls through our door. The full-service auto shop serving Greater Grand Forks from East Grand Forks, MN.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="tel:2187737809"
              className="w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-3 bg-[#E11D2D] text-white font-display text-2xl px-6 sm:px-8 py-5 sm:py-4 hover:bg-white hover:text-[#E11D2D] transition-colors"
            >
              (218) 773-7809
            </a>
            <Link
              href="/contact/"
              className="w-full sm:w-auto text-center border-2 border-white/40 text-white font-display text-lg px-6 py-4 hover:border-[#E11D2D] hover:text-[#E11D2D] transition-colors uppercase tracking-wider"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Shop photo */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <Image
          src="/gallery/shop-real-1920.jpg"
          alt="Full-service auto repair bays at Driscoll's Auto Service East Grand Forks MN"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
      </div>

      {/* Repair services */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-3">
            Repair <span style={{ color: "#E11D2D" }}>Services</span>
          </h2>
          <p className="text-white/60 text-base mb-12">Every job diagnosed and completed right the first time, gas or diesel, domestic or import.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#E11D2D]/20">
            {repairs.map((item, i) => (
              <div
                key={item.title}
                className={`p-6 bg-[#0f0f0f] border-[#E11D2D]/20 ${i % 4 !== 3 ? "border-r" : ""} ${i < 4 ? "border-b" : ""}`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display text-white text-lg uppercase mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAZARD DIVIDER */}
      <div className="hazard-stripe h-6 w-full" />

      {/* Routine Maintenance */}
      <section className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-6">
              Routine <span style={{ color: "#E11D2D" }}>Maintenance</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Staying ahead of maintenance keeps your vehicle safer, more reliable, and worth more. We follow your manufacturer's recommended schedule and keep you informed every step of the way.
            </p>
            <ul className="space-y-3">
              {maintenance.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="w-2 h-2 bg-[#E11D2D] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="polaroid">
            <Image
              src="/gallery/shop-real-1280.jpg"
              alt="Oil change and routine vehicle maintenance at Driscoll's Auto Service East Grand Forks MN"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#0f0f0f] py-10 border-t border-[#E11D2D]/20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-bold">Also at Driscoll&apos;s</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/diesel-heavy-equipment/"
              className="flex items-center gap-3 border border-[#E11D2D]/30 px-5 py-3 text-[#E11D2D] hover:bg-[#E11D2D] hover:text-white transition-colors font-bold uppercase text-sm tracking-wider"
            >
              Diesel &amp; Heavy Equipment Repair
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/specialty-services/"
              className="flex items-center gap-3 border border-[#E11D2D]/30 px-5 py-3 text-[#E11D2D] hover:bg-[#E11D2D] hover:text-white transition-colors font-bold uppercase text-sm tracking-wider"
            >
              Specialty Services
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 text-center border-t-4 border-[#E11D2D]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            Need a Repair?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            We will evaluate your vehicle, give you an honest assessment, and get you back on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2187737809"
              className="bg-[#E11D2D] text-white font-display text-2xl px-8 py-4 hover:bg-white hover:text-[#E11D2D] transition-colors"
            >
              Call (218) 773-7809
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white text-white font-display text-lg px-8 py-4 hover:bg-white hover:text-[#E11D2D] transition-colors uppercase tracking-wider"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
