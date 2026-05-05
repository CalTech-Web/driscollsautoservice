import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: { absolute: "Grand Forks Diesel Repair | Driscoll's Auto Service" },
  description:
    "Diesel and heavy equipment repair in Grand Forks. Family-owned full-service shop in East Grand Forks. Honest diagnostics, fair prices. Call (218) 773-7809.",
  keywords: [
    "diesel repair Grand Forks",
    "diesel mechanic Grand Forks ND",
    "heavy equipment repair Grand Forks",
    "auto repair Grand Forks",
    "diesel truck repair Grand Forks",
    "diesel shop Grand Forks ND",
    "auto mechanic Grand Forks",
    "Grand Forks auto service",
    "Grand Forks diesel specialist",
    "Driscoll's Auto Service",
  ],
  alternates: {
    canonical: "https://driscollsautoservice.com",
  },
  openGraph: {
    type: "website",
    url: "https://driscollsautoservice.com",
    title: "Grand Forks Diesel & Heavy Equipment Repair | Driscoll's Auto Service",
    description:
      "Diesel and heavy equipment specialists serving Grand Forks. Family-owned, honest, fair. Located just across the river in East Grand Forks. Call (218) 773-7809.",
    images: [
      {
        url: "/gallery/shop-real-1920.jpg",
        width: 1920,
        height: 960,
        alt: "Driscoll's Auto Service shop exterior, serving Grand Forks from East Grand Forks MN",
      },
    ],
  },
};

const services = [
  {
    number: "01",
    title: "Diesel & Heavy Equipment",
    desc: "Our specialty from day one. Diesel trucks and heavy equipment of all makes and models, with state-of-the-art computer diagnostics built for diesel engines.",
    href: "/diesel-heavy-equipment/",
    accent: "#E11D2D",
  },
  {
    number: "02",
    title: "All Makes & Models",
    desc: "Engine, transmission, brakes, electrical, steering, suspension, alignments, and routine maintenance for gas and diesel vehicles, domestic or import.",
    href: "/services/",
    accent: "#E11D2D",
  },
  {
    number: "03",
    title: "Specialty Services",
    desc: "Ignition interlock installation, remote start systems, and aftermarket electronics. Specialty work most shops will not touch.",
    href: "/specialty-services/",
    accent: "#E11D2D",
  },
];

const whyChoose = [
  {
    title: "Diesel & Heavy Equipment",
    desc: "Our specialty from day one. Diesel trucks and heavy equipment of all makes and models, with state-of-the-art computer diagnostics built for diesel.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M3 17h1v1a1 1 0 002 0v-1h12v1a1 1 0 002 0v-1h1a1 1 0 000-2H3a1 1 0 000 2zM20 8h-1V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8h2V6h14v2h-4a1 1 0 00-1 1v4H3v2h18V9a1 1 0 00-1-1zm-2 4h-3v-2h3v2z"/>
        <path d="M1 11h2v3H1zM21 11h2v3h-2z" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: "Family-Owned, Neighbor-Run",
    desc: "Kirk Driscoll built this shop from farming-family roots. His son Kaleb carries those same values to every vehicle that comes through the door.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 2L2 7l1.09 1.09L12 4.12l8.91 4.97L22 7 12 2zM2 17l10 5 10-5v-2L12 20 2 15v2zm10-5.88L4 7.54v2l8 4.46 8-4.46v-2l-8 3.58z"/>
      </svg>
    ),
  },
  {
    title: "Full-Service, All Makes",
    desc: "Oil changes to full engine rebuilds. Gas or diesel, domestic or import. Ignition interlock, remote start, and services most shops will not offer.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
  },
  {
    title: "Honest, No-Pressure Work",
    desc: "We diagnose, explain clearly, and let you decide. No surprises, no upselling. Straight talk from people who have been treating customers like family for over a decade.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Call or Come In",
    desc: "Call (218) 773-7809 or stop by 622 10th Street NE in East Grand Forks. Tell us what your vehicle is doing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Full Evaluation",
    desc: "We perform a complete inspection using state-of-the-art computer diagnostics to find the real problem.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Honest Assessment",
    desc: "We walk through the findings with you and recommend the best course of action, no pressure and no surprises.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Quality Repair",
    desc: "We use the highest quality tools and equipment to restore your vehicle and leave it in better shape than before.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Drive Away Safe",
    desc: "Leave with a safer, smoother ride and the confidence that comes from working with people who treat you like family.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work on diesel vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, diesel repair is our specialty. We service diesel trucks and heavy equipment of all makes and models. If it runs on diesel, we have the tools and training to diagnose and fix it.",
      },
    },
    {
      "@type": "Question",
      name: "Do you service all makes and models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We service gas and diesel vehicles of all makes and models. Whether you drive a domestic truck or an imported car, our technicians have the equipment and expertise to help.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install remote starters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We install remote start systems including the Astro Start 2 Way RSS S5225. Call us to ask about scheduling an installation appointment.",
      },
    },
    {
      "@type": "Question",
      name: "What are your hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Monday through Friday, 8:00 AM to 5:00 PM. Saturday appointments are available by appointment only. We are closed on Sunday.",
      },
    },
    {
      "@type": "Question",
      name: "Do you serve Grand Forks, ND?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are located just across the river in East Grand Forks, MN, and we regularly serve customers from Grand Forks, ND and Crookston, MN.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install ignition interlocks (breathalyzers)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We install and service ignition interlock devices (breathalyzers) in East Grand Forks, MN. Call (218) 773-7809 to schedule an installation appointment.",
      },
    },
    {
      "@type": "Question",
      name: "Are you a family-owned business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Driscoll's Auto Service was founded by Kirk Driscoll, who grew up farming in East Grand Forks. Kirk passed away in October 2025, and his son Kaleb now carries the business forward with the same integrity and work ethic.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HERO */}
      <section className="relative bg-black overflow-hidden" style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/shop-real-1920.jpg"
            alt="Driscoll's Auto Service shop exterior, serving Grand Forks from East Grand Forks MN"
            fill
            className="object-cover"
            style={{ opacity: 0.35 }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#E11D2D] text-white px-4 py-1.5 mb-6 font-bold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 bg-white rounded-full" />
              Greater Grand Forks Diesel Specialist
            </div>
            <h1 aria-label="Grand Forks Diesel &amp; Heavy Equipment Repair" className="font-display text-white mb-2" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: "0.95", letterSpacing: "-0.02em" }}>
              <span className="block" aria-hidden="true">Grand Forks </span>
              <span className="block" aria-hidden="true" style={{ color: "#E11D2D" }}>Diesel &amp; Heavy </span>
              <span className="block" aria-hidden="true">Equipment Repair. </span>
            </h1>
            <p className="sr-only">Grand Forks diesel and heavy equipment repair from Driscoll&apos;s Auto Service in East Grand Forks, MN.</p>
            <p className="font-display text-xl md:text-2xl uppercase tracking-wider mt-6 mb-2 text-white/80">
              Driscoll&apos;s Auto Service · East Grand Forks, MN
            </p>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mt-4 mb-8 leading-relaxed">
              Diesel trucks, heavy equipment, and daily drivers. Honest diagnostics and quality repairs for the Greater Grand Forks region.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-start">
              <a
                href="tel:2187737809"
                className="w-full sm:w-auto bg-[#E11D2D] text-white font-display text-2xl md:text-3xl px-6 sm:px-8 py-5 sm:py-4 hover:bg-white hover:text-[#E11D2D] transition-colors flex sm:inline-flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                (218) 773-7809
              </a>
              <Link
                href="/#contact"
                className="w-full sm:w-auto text-center border-2 border-white/40 text-white font-display text-lg px-6 py-4 hover:border-[#E11D2D] hover:text-[#E11D2D] transition-colors uppercase tracking-wider"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1a1a1a]" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* MARQUEE TICKER */}
      <div className="bg-[#E11D2D] overflow-hidden border-y-4 border-[#1a1a1a]">
        <div className="marquee-track py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-0 select-none" aria-hidden={copy === 1}>
              {[
                "Grand Forks Diesel & Heavy Equipment",
                "All Makes & Models",
                "Family Owned & Operated",
                "Serving Greater Grand Forks 10+ Years",
                "Honest Work, Fair Prices",
                "Computer Diagnostics",
                "Remote Start Installation",
                "Ignition Interlock Service",
                "Saturday Appointments Available",
                "Just Across the River from Grand Forks ND",
              ].map((item) => (
                <span key={item} className="flex items-center">
                  <span className="font-display text-white text-sm md:text-base uppercase tracking-widest whitespace-nowrap px-6">
                    {item}
                  </span>
                  <span className="text-white/40 text-xs" aria-hidden="true">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CREDENTIALS BAND */}
      <section className="blueprint-grid bg-[#0f0f0f] py-14 border-b border-[#E11D2D]/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { number: "10+", label: "Years in the Valley", sub: "Serving Greater Grand Forks" },
              { number: "3", label: "Cities Served", sub: "EGF · Grand Forks · Crookston" },
              { number: "Diesel", label: "& Heavy Equipment", sub: "Our specialty from day one" },
              { number: "6", label: "Days Available", sub: "Mon-Fri + Sat by Appointment" },
            ].map((item, i) => (
              <div
                key={item.number}
                className={[
                  "flex flex-col items-center justify-center py-10 px-6 text-center",
                  i === 0 ? "border-r border-b lg:border-b-0 border-[#E11D2D]/20" : "",
                  i === 1 ? "border-b lg:border-b-0 lg:border-r border-[#E11D2D]/20" : "",
                  i === 2 ? "border-r border-[#E11D2D]/20" : "",
                ].join(" ")}
              >
                <span
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", color: "#E11D2D" }}
                >
                  {item.number}
                </span>
                <span className="font-display text-white text-sm md:text-base uppercase tracking-wider mt-3">
                  {item.label}
                </span>
                <span className="text-white/40 text-xs uppercase tracking-widest mt-1">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-display text-white text-4xl md:text-6xl uppercase">
              What We <span style={{ color: "#E11D2D" }}>Fix</span>
            </h2>
            <p className="text-white/60 text-base mt-3">From oil changes to full engine rebuilds, we service diesel and gas vehicles of all makes and models.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E11D2D]/20">
            {services.map((svc, i) => (
              <Link
                key={svc.number}
                href={svc.href}
                className={`group relative p-8 hover:bg-[#0f0f0f] transition-colors flex flex-col gap-4 ${i < services.length - 1 ? "border-b border-[#E11D2D]/20 md:border-b-0 md:border-r" : ""}`}
              >
                <span className="font-display text-8xl font-bold leading-none" style={{ color: svc.accent, opacity: 0.15 }}>
                  {svc.number}
                </span>
                <div style={{ borderTop: `3px solid ${svc.accent}`, width: "3rem", marginTop: "-3rem" }} />
                <h3 className="font-display text-white text-2xl md:text-3xl uppercase mt-2 group-hover:text-[#E11D2D] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{svc.desc}</p>
                <span className="text-[#E11D2D] text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  View Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HAZARD DIVIDER */}
      <div className="hazard-stripe h-6 w-full" />

      {/* ABOUT STRIP */}
      <section id="about" className="bg-[#0f0f0f] py-20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="polaroid">
              <Image
                src="/gallery/kirk-driscoll.jpg"
                alt="Kirk Driscoll, founder of Driscoll's Auto Service"
                width={800}
                height={1200}
                className="w-full h-96 object-cover"
                style={{ objectPosition: "center 35%" }}
              />
              <p className="text-white/70 text-xs uppercase tracking-widest text-center pt-2 pb-1 font-bold">
                Kirk Driscoll, 1961 to 2025
              </p>
            </div>
            <div className="polaroid">
              <Image
                src="/gallery/shop-real-1280.jpg"
                alt="Driscoll's Auto Service shop building, East Grand Forks MN"
                width={1280}
                height={854}
                className="w-full h-56 object-cover"
              />
              <p className="text-white/70 text-xs uppercase tracking-widest text-center pt-2 pb-1 font-bold">
                622 10th Street NE
              </p>
            </div>
          </div>
          <div>
            <div className="badge mb-6">EST. EAST GRAND FORKS</div>
            <h2 aria-label="Built on Hard Work and Family Values" className="font-display text-white text-4xl md:text-5xl uppercase leading-none mt-4">
              <span className="block" aria-hidden="true">Built on Hard Work </span>
              <span className="block" aria-hidden="true" style={{ color: "#E11D2D" }}>and Family Values </span>
            </h2>
            <p className="text-white/60 text-base mt-3">A farming family&apos;s grit. A mechanic&apos;s passion. A community institution built by hand.</p>
            <p className="text-white/70 mt-6 text-lg leading-relaxed">
              Kirk Driscoll grew up farming in East Grand Forks. He built this shop with his hands, his integrity, and a genuine love for the community. He was known not just for his skill, but for his laugh and the way he always had time for a story.
            </p>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              Kirk passed away on October 7, 2025. His son Kaleb now carries the shop forward, bringing those same values to every vehicle that comes through the door.
            </p>
            <p className="mt-4 text-lg font-semibold" style={{ color: "#E11D2D" }}>
              Not a chain. Not a franchise. Your neighbor.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-block border-2 border-[#E11D2D] text-[#E11D2D] font-display uppercase tracking-wider px-6 py-3 hover:bg-[#E11D2D] hover:text-[#1a1a1a] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-display text-white text-4xl md:text-5xl uppercase leading-none">
              How It <span style={{ color: "#E11D2D" }}>Works</span>
            </h2>
            <p className="text-white/60 text-base mt-3">Five steps from your first call to driving away confident.</p>
          </div>
          <div className="relative">
            <div className="hidden sm:block absolute top-8 left-[5%] right-[5%] h-px bg-[#E11D2D]/25 z-0" />
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-0 relative z-10">
              {steps.map((step) => (
                <div key={step.number} className="flex flex-col sm:items-center sm:text-center px-2 sm:px-4">
                  <div className="w-16 h-16 bg-[#E11D2D] flex items-center justify-center text-white mb-5 border-4 border-[#1a1a1a] flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="text-[#E11D2D] text-xs font-bold uppercase tracking-widest mb-2">Step {step.number}</div>
                  <h3 className="font-display text-white text-lg uppercase mb-2 leading-tight">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY DRISCOLL'S */}
      <section className="bg-[#0f0f0f] py-16 border-t-4 border-b-4 border-[#E11D2D]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
              <h2 className="font-display text-white text-3xl md:text-5xl uppercase leading-none">
                Why <span style={{ color: "#E11D2D" }}>Driscoll&apos;s</span>
              </h2>
              <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">
                Greater Grand Forks &bull; Est. 2013
              </p>
            </div>
            <p className="text-white/60 text-base">Four reasons Grand Forks drivers trust us first.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] p-6 flex gap-5 group hover:bg-black border border-[#E11D2D]/20 hover:border-[#E11D2D] transition-colors">
                <div className="flex-shrink-0 w-14 h-14 bg-[#E11D2D] flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-white text-xl uppercase mb-2 group-hover:text-[#E11D2D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOP PHOTO BAND */}
      <section className="bg-black">
        <div className="relative w-full h-72 md:h-[28rem] overflow-hidden">
          <Image
            src="/gallery/shop-real-1920.jpg"
            alt="Driscoll's Auto Service shop, serving Grand Forks from East Grand Forks MN"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-6 md:pb-10">
            <div className="max-w-7xl mx-auto">
              <p className="text-white/70 text-xs uppercase tracking-widest font-bold">622 10th Street NE</p>
              <h2 className="font-display text-white text-3xl md:text-5xl uppercase leading-tight">
                The <span style={{ color: "#E11D2D" }}>Shop</span> in East Grand Forks
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <h2 className="font-display text-white text-4xl md:text-5xl uppercase leading-none">
              Inside the <span style={{ color: "#E11D2D" }}>Shop</span>
            </h2>
            <p className="text-white/60 text-base mt-3">Real work. Real tools. East Grand Forks, MN.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {[
              { src: "/gallery/shop-01-full.jpg", alt: "Driscoll's Auto Service shop interior, East Grand Forks MN" },
              { src: "/gallery/shop-02-full.jpg", alt: "Vehicle lift and repair bay at Driscoll's Auto Service" },
              { src: "/gallery/shop-03-full.jpg", alt: "Diesel truck diagnostics at Driscoll's Auto Service" },
              { src: "/gallery/shop-04-full.jpg", alt: "Auto repair tools and equipment, Driscoll's Auto Service" },
              { src: "/gallery/shop-05-full.jpg", alt: "Engine repair at Driscoll's Auto Service, Grand Forks area" },
              { src: "/gallery/shop-06-full.jpg", alt: "Technician working at Driscoll's Auto Service East Grand Forks" },
              { src: "/gallery/shop-07-full.jpg", alt: "Driscoll's Auto Service shop bay, East Grand Forks MN" },
              { src: "/gallery/shop-08-full.jpg", alt: "Heavy equipment repair at Driscoll's Auto Service" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative overflow-hidden group bg-black"
                style={{ paddingBottom: "75%" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: 0.85 }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
              <h2 className="font-display text-white text-3xl md:text-5xl uppercase leading-none">
                What Customers <span style={{ color: "#E11D2D" }}>Say</span>
              </h2>
              <p className="text-white/40 text-sm font-semibold uppercase tracking-widest">
                Real Reviews
              </p>
            </div>
            <p className="text-white/60 text-base">Real people from Grand Forks, Crookston, and East Grand Forks who brought us their vehicles and came back.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                quote: "Kaleb diagnosed my diesel pickup in the same afternoon I dropped it off. Fair price, honest assessment, no runaround. This is the only shop I trust for my work truck.",
                name: "Derek T.",
                location: "Grand Forks, ND",
                accent: "#E11D2D",
              },
              {
                quote: "I drove from Crookston because nobody down here works on diesels like they do. Worth every mile. They explained everything before touching anything. Real stand-up people.",
                name: "Mike R.",
                location: "Crookston, MN",
                accent: "#E11D2D",
              },
              {
                quote: "Kirk always treated us right, and Kaleb carries that same integrity. Three vehicles in our family have been through their shop. Wouldn't go anywhere else in the valley.",
                name: "Sandra K.",
                location: "East Grand Forks, MN",
                accent: "#E11D2D",
              },
            ].map((t) => (
              <div key={t.name} className="bg-[#1a1a1a] p-8 flex flex-col gap-5 border-t-4" style={{ borderColor: t.accent }}>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="#E11D2D">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-base leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-display text-white text-lg uppercase">{t.name}</p>
                  <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: t.accent }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <FaqAccordion />

      {/* HAZARD DIVIDER */}
      <div className="hazard-stripe-orange h-6 w-full opacity-60" />

      {/* CONTACT SECTION */}
      <ContactSection />
    </>
  );
}
