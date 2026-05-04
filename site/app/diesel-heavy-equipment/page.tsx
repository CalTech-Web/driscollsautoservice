import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grand Forks Diesel & Heavy Equipment Repair | Driscoll's Auto Service",
  description:
    "Diesel truck and heavy equipment repair specialists serving Grand Forks. Computer diagnostics, engine repair, drivability solutions for all makes and models. Located just across the river. Call (218) 773-7809.",
  keywords: [
    "diesel repair Grand Forks",
    "diesel mechanic Grand Forks ND",
    "diesel truck repair Grand Forks",
    "heavy equipment repair Grand Forks",
    "Grand Forks diesel shop",
    "diesel diagnostics Grand Forks",
    "farm equipment repair Grand Forks",
    "construction equipment repair Grand Forks",
    "diesel drivability Grand Forks",
    "Grand Forks diesel specialist",
  ],
  alternates: {
    canonical: "https://driscollsautoservice.com/diesel-heavy-equipment/",
  },
  openGraph: {
    type: "website",
    url: "https://driscollsautoservice.com/diesel-heavy-equipment/",
    title: "Grand Forks Diesel & Heavy Equipment Repair | Driscoll's Auto Service",
    description:
      "Diesel and heavy equipment specialists serving Grand Forks. Complete computer diagnostics, engine repair, and drivability solutions. Located in East Grand Forks, MN.",
    images: [
      {
        url: "/gallery/shop-real-1920.jpg",
        width: 1920,
        height: 960,
        alt: "Driscoll's Auto Service shop, Grand Forks area diesel and heavy equipment repair",
      },
    ],
  },
};

const capabilities = [
  {
    title: "Diesel Truck Repair & Diagnostics",
    desc: "All makes and models of diesel trucks. We have the specialized equipment and training to tackle complex diesel engine problems that general shops cannot handle.",
  },
  {
    title: "Heavy Equipment Repair & Servicing",
    desc: "Farm equipment, construction equipment, and heavy-duty machines. We know what it means when your equipment goes down at the wrong moment.",
  },
  {
    title: "Gas or Diesel Engine Repair",
    desc: "Whether it's a gas or diesel engine, we have the expertise to diagnose and repair it correctly the first time.",
  },
  {
    title: "Complete Computer Diagnostics",
    desc: "Modern diesel vehicles use sophisticated onboard systems. Our diagnostic equipment reads these systems precisely, so we find the real problem, not just the symptom.",
  },
  {
    title: "Drivability Problem Diagnosis",
    desc: "Rough running, power loss, hard starts, black smoke, warning lights. We track down drivability issues and resolve them at the source.",
  },
];

const whyDiesel = [
  "Specialized diesel tooling and equipment",
  "Experienced with farm and construction equipment",
  "Complete computer diagnostics, not just guesswork",
  "Grand Forks area diesel specialist since day one",
  "Just across the river from Grand Forks ND",
  "Focused on the trucks and equipment you rely on daily",
];

const dieselServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Diesel Truck and Heavy Equipment Repair",
  name: "Diesel and Heavy Equipment Repair",
  description:
    "Specialized diesel truck and heavy equipment repair in East Grand Forks, MN. Complete computer diagnostics, engine repair, drivability diagnosis, and farm and construction equipment servicing for all makes and models.",
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
    name: "Diesel Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diesel Truck Repair and Diagnostics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy Equipment Repair and Servicing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Farm Equipment Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diesel Computer Diagnostics" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diesel Drivability Problem Diagnosis" } },
    ],
  },
};

const dieselFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you repair diesel trucks of all makes and models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair diesel pickups and light trucks of all makes and models, including Ford Power Stroke, Chevy/GMC Duramax, Ram Cummins, and similar platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on farm and heavy equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We repair and service farm equipment and heavy construction equipment of all makes and models. We understand how critical this equipment is to your livelihood and work quickly to get you back in the field.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a diesel repair shop near Crookston, MN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Driscoll's Auto Service in East Grand Forks, MN is the nearest diesel repair shop to Crookston, MN, about 45 miles north on Highway 2. We regularly serve diesel truck and equipment owners from Crookston who make the trip for reliable diesel work.",
      },
    },
    {
      "@type": "Question",
      name: "Can you diagnose diesel drivability problems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We use complete computer diagnostic equipment designed for diesel vehicles to trace drivability issues including rough running, power loss, hard starts, black smoke, and warning lights to their root cause.",
      },
    },
  ],
};

const dieselBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://driscollsautoservice.com" },
    { "@type": "ListItem", position: 2, name: "Diesel & Heavy Equipment Repair", item: "https://driscollsautoservice.com/diesel-heavy-equipment/" },
  ],
};

export default function DieselPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dieselServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dieselFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dieselBreadcrumb) }} />
      {/* Page hero */}
      <section className="relative bg-[#0f0f0f] py-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        {/* Strong hazard stripe */}
        <div className="absolute top-0 right-0 w-2/5 h-full hazard-stripe opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#E11D2D] text-white px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 bg-white rounded-full" />
            Our Lead Specialty
          </div>
          <h1 className="font-display text-white leading-none uppercase" style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}>
            <span className="block">Grand Forks</span>
            <span className="block" style={{ color: "#E11D2D" }}>Diesel &amp; Heavy</span>
            <span className="block">Equipment Repair</span>
          </h1>
          <p className="text-white/70 text-xl mt-6 max-w-xl leading-relaxed">
            This is what we are built for. When your diesel truck or heavy equipment needs expert care, Driscoll&apos;s is the Grand Forks area shop that knows how to handle it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2187737809"
              className="inline-flex items-center gap-3 bg-[#E11D2D] text-white font-display text-2xl px-8 py-4 hover:bg-white hover:text-[#E11D2D] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              (218) 773-7809
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white/40 text-white font-display text-lg px-6 py-4 hover:border-[#E11D2D] hover:text-[#E11D2D] transition-colors uppercase tracking-wider"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="w-full h-72 md:h-96 relative overflow-hidden">
        <Image
          src="/gallery/shop-real-1920.jpg"
          alt="Diesel and heavy equipment repair at Driscoll's Auto Service in East Grand Forks, MN"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/50 to-[#1a1a1a]" />
        <div className="absolute bottom-8 left-8 badge badge-orange">DIESEL CERTIFIED</div>
      </div>

      {/* Capabilities */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            What We <span style={{ color: "#E11D2D" }}>Handle</span>
          </h2>
          <p className="text-white/60 max-w-2xl mb-12 text-lg">
            Farm country diesel. We know what this equipment means to your livelihood.
          </p>
          <div className="space-y-0">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E11D2D]/20 ${i > 0 ? "border-t-0" : ""}`}
              >
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#E11D2D]/20 flex items-center">
                  <h3 className="font-display text-white text-xl md:text-2xl uppercase" style={{ color: i % 2 === 0 ? "#E11D2D" : "white" }}>
                    {cap.title}
                  </h3>
                </div>
                <div className="p-6 md:p-8 md:col-span-2 bg-[#0f0f0f]">
                  <p className="text-white/70 text-base leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAZARD DIVIDER */}
      <div className="hazard-stripe h-8 w-full" />

      {/* Why Driscoll's for Diesel */}
      <section className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="badge mb-6">DIESEL SPECIALIST</div>
            <h2 className="font-display text-white text-4xl md:text-5xl uppercase mt-4 mb-6">
              Why Diesel Owners<br />
              <span style={{ color: "#E11D2D" }}>Choose Driscoll&apos;s</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Most general repair shops are not equipped for diesel. We built this shop around the specialized needs of diesel truck and equipment owners in East Grand Forks and the surrounding communities. Our diagnostic tools, our knowledge, and our hands-on experience are focused on getting diesel right.
            </p>
            <ul className="space-y-3">
              {whyDiesel.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="w-2 h-2 bg-[#E11D2D] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="polaroid">
              <Image src="/gallery/shop-real-1920.jpg" alt="Driscoll's Auto Service shop, Grand Forks area diesel and heavy equipment repair" width={1920} height={960} className="w-full h-72 object-cover" />
              <p className="text-white/70 text-xs uppercase tracking-widest text-center pt-2 pb-1 font-bold">
                The Shop · East Grand Forks
              </p>
            </div>
            <div className="polaroid">
              <Image src="/gallery/shop-real-1280.jpg" alt="Driscoll's Auto Service building, serving the Greater Grand Forks region" width={1280} height={854} className="w-full h-56 object-cover" />
              <p className="text-white/70 text-xs uppercase tracking-widest text-center pt-2 pb-1 font-bold">
                Open Mon - Fri
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crookston callout */}
      <section className="bg-[#E11D2D] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-3 py-1 mb-3">Crookston, MN</div>
            <h3 className="font-display text-white text-2xl md:text-3xl uppercase mt-2">
              No Local Diesel Shop in Crookston?
            </h3>
            <p className="text-white/90 mt-2 max-w-xl">
              Crookston does not have a local diesel repair option. Driscoll&apos;s is about 45 miles north, ready to take care of you. Worth the drive to get it done right.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="tel:2187737809"
              className="bg-black text-white font-display text-xl px-8 py-4 hover:bg-white hover:text-[#E11D2D] transition-colors uppercase inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#0f0f0f] py-10 border-t border-[#E11D2D]/20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-bold">Also at Driscoll&apos;s</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services/"
              className="flex items-center gap-3 border border-[#E11D2D]/30 px-5 py-3 text-[#E11D2D] hover:bg-[#E11D2D] hover:text-white transition-colors font-bold uppercase text-sm tracking-wider"
            >
              Auto Repair, All Makes &amp; Models
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

      {/* Final CTA */}
      <section className="bg-black py-16 text-center border-t-4 border-[#E11D2D]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            Diesel Problem?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Bring it to the Grand Forks shop that specializes in exactly this.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2187737809"
              className="bg-[#E11D2D] text-white font-display text-2xl px-10 py-4 hover:bg-white hover:text-[#E11D2D] transition-colors inline-block"
            >
              (218) 773-7809
            </a>
            <Link
              href="/#contact"
              className="border-2 border-white text-white font-display text-lg px-8 py-4 hover:bg-white hover:text-[#E11D2D] transition-colors uppercase tracking-wider"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
