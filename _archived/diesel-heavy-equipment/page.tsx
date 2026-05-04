import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diesel & Heavy Equipment Repair | East Grand Forks, MN",
  description:
    "Diesel truck and heavy equipment repair specialists in East Grand Forks, MN. Computer diagnostics, engine repair, drivability solutions for all makes and models. Call (218) 773-7809.",
  keywords: [
    "diesel truck repair East Grand Forks MN",
    "heavy equipment repair Minnesota",
    "diesel engine repair Grand Forks ND",
    "farm equipment repair East Grand Forks",
    "diesel diagnostics East Grand Forks",
    "diesel mechanic Grand Forks area",
    "construction equipment repair Minnesota",
    "diesel drivability repair East Grand Forks",
    "Crookston diesel repair shop",
    "diesel specialist East Grand Forks",
  ],
  alternates: {
    canonical: "https://driscollsautoservice.com/diesel-heavy-equipment/",
  },
  openGraph: {
    type: "website",
    url: "https://driscollsautoservice.com/diesel-heavy-equipment/",
    title: "Diesel & Heavy Equipment Repair | Driscoll's Auto Service | East Grand Forks, MN",
    description:
      "Diesel truck and heavy equipment repair specialists in East Grand Forks, MN. Complete computer diagnostics, engine repair, and drivability solutions. Serving Grand Forks ND and Crookston MN.",
    images: [
      {
        url: "/gallery/shop-06-full.jpg",
        width: 1200,
        height: 630,
        alt: "Diesel and heavy equipment repair at Driscoll's Auto Service East Grand Forks MN",
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
  "East Grand Forks's diesel specialist since day one",
  "Serving Grand Forks ND and Crookston MN",
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
          <div className="inline-flex items-center gap-2 bg-[#D14C2B] text-white px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-2 bg-white rounded-full" />
            Our Lead Specialty
          </div>
          <h1 className="font-display text-white leading-none uppercase" style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}>
            DIESEL<br />
            <span style={{ color: "#F5D000" }}>&amp; HEAVY</span><br />
            EQUIPMENT<br />
            REPAIR
          </h1>
          <p className="text-white/70 text-xl mt-6 max-w-xl leading-relaxed">
            This is what we are built for. When your diesel truck or heavy equipment needs expert care, Driscoll&apos;s is the shop in East Grand Forks that knows how to handle it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2187737809"
              className="inline-flex items-center gap-3 bg-[#F5D000] text-[#1a1a1a] font-display text-2xl px-8 py-4 hover:bg-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              (218) 773-7809
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white/40 text-white font-display text-lg px-6 py-4 hover:border-[#F5D000] hover:text-[#F5D000] transition-colors uppercase tracking-wider"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="w-full h-72 md:h-96 relative overflow-hidden">
        <Image
          src="/gallery/shop-06-full.jpg"
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
            What We <span style={{ color: "#F5D000" }}>Handle</span>
          </h2>
          <p className="text-white/60 max-w-2xl mb-12 text-lg">
            Farm country diesel. We know what this equipment means to your livelihood.
          </p>
          <div className="space-y-0">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#F5D000]/20 ${i > 0 ? "border-t-0" : ""}`}
              >
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#F5D000]/20 flex items-center">
                  <h3 className="font-display text-white text-xl md:text-2xl uppercase" style={{ color: i % 2 === 0 ? "#F5D000" : "white" }}>
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
              <span style={{ color: "#F5D000" }}>Choose Driscoll&apos;s</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Most general repair shops are not equipped for diesel. We built this shop around the specialized needs of diesel truck and equipment owners in East Grand Forks and the surrounding communities. Our diagnostic tools, our knowledge, and our hands-on experience are focused on getting diesel right.
            </p>
            <ul className="space-y-3">
              {whyDiesel.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="w-2 h-2 bg-[#F5D000] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="polaroid">
              <Image src="/gallery/shop-07-full.jpg" alt="Diesel truck repair at Driscoll's Auto Service East Grand Forks MN" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid mt-8">
              <Image src="/gallery/shop-08-full.jpg" alt="Heavy equipment servicing Minnesota farm and construction equipment" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid">
              <Image src="/gallery/shop-05-full.jpg" alt="Diesel repair tools and equipment at Driscoll's Auto Service" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid mt-8">
              <Image src="/gallery/shop-04-full.jpg" alt="Computer diagnostics diesel vehicle East Grand Forks MN" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Crookston callout */}
      <section className="bg-[#F5D000] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="badge badge-orange mb-3">Crookston, MN</div>
            <h3 className="font-display text-[#1a1a1a] text-2xl md:text-3xl uppercase mt-2">
              No Local Diesel Shop in Crookston?
            </h3>
            <p className="text-[#1a1a1a]/70 mt-2 max-w-xl">
              Crookston does not have a local diesel repair option. Driscoll&apos;s is about 45 miles north, ready to take care of you. Worth the drive to get it done right.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="tel:2187737809"
              className="bg-[#1a1a1a] text-white font-display text-xl px-8 py-4 hover:bg-[#D14C2B] transition-colors uppercase"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#0f0f0f] py-10 border-t border-[#F5D000]/20">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4 font-bold">Also at Driscoll&apos;s</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services/"
              className="flex items-center gap-3 border border-[#F5D000]/30 px-5 py-3 text-[#F5D000] hover:bg-[#F5D000] hover:text-[#1a1a1a] transition-colors font-bold uppercase text-sm tracking-wider"
            >
              Auto Repair, All Makes &amp; Models
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/specialty-services/"
              className="flex items-center gap-3 border border-[#F5D000]/30 px-5 py-3 text-[#F5D000] hover:bg-[#F5D000] hover:text-[#1a1a1a] transition-colors font-bold uppercase text-sm tracking-wider"
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
      <section className="bg-[#D14C2B] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            Diesel Problem?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Bring it to the shop that specializes in exactly this.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2187737809"
              className="bg-[#F5D000] text-[#1a1a1a] font-display text-2xl px-10 py-4 hover:bg-white transition-colors inline-block"
            >
              (218) 773-7809
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white text-white font-display text-lg px-8 py-4 hover:bg-white hover:text-[#D14C2B] transition-colors uppercase tracking-wider"
            >
              Schedule Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
