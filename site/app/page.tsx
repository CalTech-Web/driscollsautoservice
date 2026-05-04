import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diesel & Auto Repair | East Grand Forks, MN",
  description:
    "Driscoll's Auto Service: East Grand Forks's trusted diesel and heavy equipment repair shop. Family-owned, full-service, serving Grand Forks ND and Crookston MN. Call (218) 773-7809.",
};

const services = [
  {
    number: "01",
    title: "Diesel & Heavy Equipment",
    desc: "Our specialty. Diesel trucks and heavy equipment of all makes and models. Complete computer diagnostics, engine repair, drivability diagnosis.",
    href: "/diesel-heavy-equipment/",
    accent: "#F5D000",
  },
  {
    number: "02",
    title: "Auto Repair, All Makes",
    desc: "Engine, transmission, brakes, electrical, steering, suspension, alignments. If it's broken, we fix it right.",
    href: "/services/",
    accent: "#D14C2B",
  },
  {
    number: "03",
    title: "Specialty Services",
    desc: "Ignition interlock installation, remote start systems, and aftermarket electronics. Services most shops don't offer.",
    href: "/specialty-services/",
    accent: "#F5D000",
  },
];

const steps = [
  { step: "01", title: "Call or Come In", desc: "Call (218) 773-7809 or stop by 622 10th Street NE. Tell us what's going on." },
  { step: "02", title: "Full Evaluation", desc: "Complete inspection using state-of-the-art computer diagnostics to pinpoint the problem." },
  { step: "03", title: "Honest Assessment", desc: "We walk through the findings with you. No pressure, no upselling. Just what your vehicle actually needs." },
  { step: "04", title: "Quality Repair", desc: "Work done with the best tools and equipment to restore your vehicle and increase its value." },
  { step: "05", title: "Drive Away Safe", desc: "You leave with confidence. Safer vehicle, personal service, and people who know your name." },
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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#0f0f0f] overflow-hidden" style={{ minHeight: "85vh", display: "flex", alignItems: "center" }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/shop-01-full.jpg"
            alt="Driscoll's Auto Service shop"
            fill
            className="object-cover"
            style={{ opacity: 0.18 }}
            priority
          />
        </div>
        {/* Blueprint grid overlay */}
        <div className="absolute inset-0 z-0 blueprint-grid" />
        {/* Hazard stripe accent right */}
        <div className="absolute top-0 right-0 w-1/3 h-full z-0 opacity-10 hazard-stripe" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F5D000] text-[#1a1a1a] px-4 py-1.5 mb-6 font-bold text-xs uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#1a1a1a] rounded-full" />
              Est. East Grand Forks, MN
            </div>
            <h1 className="font-display text-white mb-2" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: "0.95", letterSpacing: "-0.02em" }}>
              DIESEL
              <br />
              <span style={{ color: "#F5D000" }}>&amp; HEAVY</span>
              <br />
              EQUIPMENT
              <br />
              REPAIR.
            </h1>
            <p className="font-display text-xl md:text-2xl uppercase tracking-wider mt-4 mb-2" style={{ color: "#D14C2B" }}>
              East Grand Forks, MN
            </p>
            <p className="text-white/70 text-lg md:text-xl max-w-xl mt-4 mb-8 leading-relaxed">
              Family-owned. Full-service. Honest work. Treating every customer like family since day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="tel:2187737809"
                className="bg-[#F5D000] text-[#1a1a1a] font-display text-2xl md:text-3xl px-8 py-4 hover:bg-white transition-colors inline-flex items-center gap-3"
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
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1a1a1a]" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* MARQUEE TICKER */}
      <div className="bg-[#F5D000] overflow-hidden border-y-4 border-[#1a1a1a]">
        <div className="marquee-track py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-0 select-none" aria-hidden={copy === 1}>
              {[
                "Diesel & Heavy Equipment Repair",
                "All Makes & Models",
                "Family Owned & Operated",
                "10+ Years in East Grand Forks",
                "Honest Work, Fair Prices",
                "Computer Diagnostics",
                "Remote Start Installation",
                "Ignition Interlock Service",
                "Saturday Appointments Available",
                "Serving Grand Forks ND & Crookston MN",
              ].map((item) => (
                <span key={item} className="flex items-center">
                  <span className="font-display text-[#1a1a1a] text-sm md:text-base uppercase tracking-widest whitespace-nowrap px-6">
                    {item}
                  </span>
                  <span className="text-[#1a1a1a]/40 text-xs" aria-hidden="true">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-display text-white text-4xl md:text-6xl uppercase">
              What We <span style={{ color: "#F5D000" }}>Fix</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#F5D000]/20">
            {services.map((svc, i) => (
              <Link
                key={svc.number}
                href={svc.href}
                className={`group relative p-8 hover:bg-[#0f0f0f] transition-colors flex flex-col gap-4 ${i < 2 ? "md:border-r border-[#F5D000]/20" : ""} ${i < 2 ? "border-b border-[#F5D000]/20 md:border-b-0" : ""}`}
              >
                <span className="font-display text-8xl font-bold leading-none" style={{ color: svc.accent, opacity: 0.15 }}>
                  {svc.number}
                </span>
                <div style={{ borderTop: `3px solid ${svc.accent}`, width: "3rem", marginTop: "-3rem" }} />
                <h3 className="font-display text-white text-2xl md:text-3xl uppercase mt-2 group-hover:text-[#F5D000] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{svc.desc}</p>
                <span className="text-[#F5D000] text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                  Learn More
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
      <section className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-3">
            {[2, 3, 4, 5].map((n, idx) => (
              <div key={n} className={`polaroid ${idx % 2 === 1 ? "mt-8" : ""}`}>
                <Image src={`/gallery/shop-0${n}-full.jpg`} alt={`Driscoll's shop`} width={400} height={300} className="w-full h-48 object-cover" />
              </div>
            ))}
          </div>
          <div>
            <div className="badge mb-6">EST. EAST GRAND FORKS</div>
            <h2 className="font-display text-white text-4xl md:text-5xl uppercase leading-none mt-4">
              Built on Hard Work<br />
              <span style={{ color: "#F5D000" }}>and Family Values</span>
            </h2>
            <p className="text-white/70 mt-6 text-lg leading-relaxed">
              Kirk Driscoll grew up farming in East Grand Forks. He built this shop with his hands, his integrity, and a genuine love for the community. He was known not just for his skill, but for his laugh and the way he always had time for a story.
            </p>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              Kirk passed away on October 7, 2025. His son Kaleb now carries the shop forward, bringing those same values to every vehicle that comes through the door.
            </p>
            <p className="mt-4 text-lg font-semibold" style={{ color: "#F5D000" }}>
              Not a chain. Not a franchise. Your neighbor.
            </p>
            <Link
              href="/about/"
              className="mt-6 inline-block border-2 border-[#F5D000] text-[#F5D000] font-display uppercase tracking-wider px-6 py-3 hover:bg-[#F5D000] hover:text-[#1a1a1a] transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div className="hazard-stripe-orange h-6 w-full opacity-60" />
      <section className="bg-[#1a1a1a] blueprint-grid py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-6xl uppercase mb-12">
            How It <span style={{ color: "#F5D000" }}>Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            {steps.map((p, i) => (
              <div key={p.step} className={`relative p-6 border-t-4 border-[#F5D000] bg-[#0f0f0f] ${i < 4 ? "md:border-r border-[#F5D000]/20" : ""}`}>
                <div className="font-display text-5xl opacity-40 mb-3" style={{ color: "#F5D000" }}>{p.step}</div>
                <h3 className="font-display text-white text-lg uppercase mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#0f0f0f] border-y border-[#F5D000]/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#F5D000]/20">
          {[
            { value: "10+", label: "Years Serving East Grand Forks" },
            { value: "3", label: "Cities Covered" },
            { value: "All", label: "Makes & Models" },
            { value: "5", label: "Days a Week, Mon–Fri" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-12 px-6 text-center gap-2">
              <span
                className="font-display leading-none"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", color: "#F5D000", letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </span>
              <span className="text-white/60 text-sm uppercase tracking-widest font-semibold max-w-[12ch] leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DRISCOLL'S */}
      <section className="bg-[#F5D000] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2 className="font-display text-[#1a1a1a] text-3xl md:text-5xl uppercase leading-none">
              Why Driscoll&apos;s
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm font-semibold uppercase tracking-widest">
              East Grand Forks, MN &bull; Est. 2013
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-[#1a1a1a] p-6 flex gap-5 group hover:bg-[#0f0f0f] transition-colors">
                <div className="flex-shrink-0 w-14 h-14 bg-[#F5D000] flex items-center justify-center text-[#1a1a1a]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-white text-xl uppercase mb-2 group-hover:text-[#F5D000] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-white text-3xl md:text-5xl uppercase mb-8">
            The <span style={{ color: "#F5D000" }}>Shop</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[6, 7, 8].map((n) => (
              <div key={n} className="aspect-square overflow-hidden">
                <Image
                  src={`/gallery/shop-0${n}-full.jpg`}
                  alt={`Driscoll's Auto Service shop photo`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            <div className="aspect-square bg-[#1a1a1a] border border-[#F5D000]/20 flex flex-col items-center justify-center p-6 text-center">
              <span className="font-display text-[#F5D000] text-4xl">10+</span>
              <span className="text-white font-bold text-lg mt-2">Years Serving</span>
              <span className="text-white/60 text-sm mt-1">East Grand Forks</span>
            </div>
          </div>
        </div>
      </section>

      {/* HAZARD DIVIDER */}
      <div className="hazard-stripe h-6 w-full" />

      {/* SERVICE AREAS */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <h2 className="font-display text-white text-3xl md:text-5xl uppercase leading-none">
              We Serve <span style={{ color: "#F5D000" }}>Your Area</span>
            </h2>
            <Link
              href="/service-areas/"
              className="text-[#F5D000] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2 self-start sm:self-auto"
            >
              Full Coverage Details
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#F5D000]/20">
            {[
              {
                label: "Home Base",
                city: "East Grand Forks",
                state: "MN",
                stateColor: "#F5D000",
                labelBg: "#F5D000",
                labelText: "#1a1a1a",
                desc: "Our shop is at 622 10th Street NE. We have served this community since the beginning.",
                note: "622 10th Street NE · (218) 773-7809",
              },
              {
                label: "Cross-River",
                city: "Grand Forks",
                state: "ND",
                stateColor: "#D14C2B",
                labelBg: "#D14C2B",
                labelText: "#ffffff",
                desc: "Just across the Red River. A short drive for diesel and auto work you can trust.",
                note: null,
              },
              {
                label: "45 Miles South",
                city: "Crookston",
                state: "MN",
                stateColor: "#F5D000",
                labelBg: "#F5D000",
                labelText: "#1a1a1a",
                desc: "No local diesel shop in Crookston. Driscoll's is the closest diesel specialist in the area.",
                note: null,
              },
            ].map((area, i) => (
              <div
                key={area.city}
                className={`p-8 bg-[#0f0f0f] hover:bg-[#111111] transition-colors flex flex-col gap-3 ${i < 2 ? "border-b md:border-b-0 md:border-r border-[#F5D000]/20" : ""}`}
              >
                <div
                  className="inline-block self-start text-xs font-bold uppercase tracking-widest px-3 py-1"
                  style={{ background: area.labelBg, color: area.labelText }}
                >
                  {area.label}
                </div>
                <div>
                  <h3 className="font-display text-white text-2xl md:text-3xl uppercase leading-none">
                    {area.city}
                  </h3>
                  <p className="font-display text-xl uppercase mt-1" style={{ color: area.stateColor }}>
                    {area.state}
                  </p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed flex-1">{area.desc}</p>
                {area.note && (
                  <p className="text-white/30 text-xs mt-1">{area.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-display text-white text-3xl md:text-5xl uppercase mb-10">
            Common <span style={{ color: "#F5D000" }}>Questions</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Do you work on diesel vehicles?", a: "Yes, diesel repair is our specialty. We service diesel trucks and heavy equipment of all makes and models. If it runs on diesel, we have the tools and training to diagnose and fix it." },
              { q: "Do you service all makes and models?", a: "Yes. We service gas and diesel vehicles of all makes and models. Whether you drive a domestic truck or an imported car, our technicians have the equipment and expertise to help." },
              { q: "Do you install remote starters?", a: "Yes. We install remote start systems including the Astro Start 2 Way RSS S5225. Call us to ask about scheduling an installation appointment." },
              { q: "What are your hours?", a: "Monday through Friday, 8:00 AM to 5:00 PM. Saturday appointments are available by appointment only. We are closed on Sunday." },
              { q: "Do you serve Grand Forks, ND?", a: "Yes. We are located just across the river in East Grand Forks, MN, and we regularly serve customers from Grand Forks, ND and Crookston, MN." },
            ].map((faq) => (
              <details key={faq.q} className="group border border-[#F5D000]/20 bg-[#0f0f0f]">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-white hover:text-[#F5D000] transition-colors">
                  {faq.q}
                  <span className="text-[#F5D000] text-xl ml-4 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 text-white/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#D14C2B] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-white text-4xl md:text-6xl uppercase mb-4">
            Ready to Get Fixed?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call us or stop by. We will take it from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2187737809"
              className="bg-[#F5D000] text-[#1a1a1a] font-display text-2xl px-8 py-4 hover:bg-white transition-colors"
            >
              (218) 773-7809
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white text-white font-display text-lg px-8 py-4 hover:bg-white hover:text-[#D14C2B] transition-colors uppercase tracking-wider"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
