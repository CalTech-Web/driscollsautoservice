import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Specialty Services | Ignition Interlock, Remote Start & Aftermarket Electronics",
  description:
    "Breathalyzer installation, remote start systems, and aftermarket electronics installation in East Grand Forks, MN. Call Driscoll's Auto Service at (218) 773-7809.",
};

const services = [
  {
    number: "01",
    title: "Breathalyzer / Ignition Interlock",
    detail: "Installation & Service",
    desc: [
      "Professional installation of ignition interlock devices (breathalyzers) required by court order or as a personal safety measure.",
      "We work with you to schedule installation quickly, complete the paperwork correctly, and explain how the device works.",
      "Ongoing calibration and service appointments available.",
    ],
    cta: "Call to Schedule",
  },
  {
    number: "02",
    title: "Remote Start Systems",
    detail: "Astro Start 2 Way RSS S5225",
    desc: [
      "Never sit in a cold Minnesota car again. We install remote start systems that let you warm up your vehicle from inside.",
      "We carry the Astro Start 2 Way RSS S5225, a proven remote start system with two-way communication that confirms your car started.",
      "Professional installation ensures your factory warranty and safety systems stay intact.",
    ],
    cta: "Ask About Pricing",
  },
  {
    number: "03",
    title: "Aftermarket Electronics",
    detail: "Professional Installation",
    desc: [
      "Backup cameras, dash cameras, trailer wiring, lighting upgrades, GPS systems, and other vehicle electronics installed cleanly and correctly.",
      "Proper installation means no rattles, no exposed wires, and electronics that work reliably for years.",
    ],
    cta: "Get a Quote",
  },
];

export default function SpecialtyServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0f0f0f] py-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute top-0 right-0 w-1/3 h-full hazard-stripe-orange opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#D14C2B] text-white px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            Services Others Don&apos;t Offer
          </div>
          <h1 className="font-display text-white text-5xl md:text-7xl uppercase leading-none mb-6">
            Specialty<br />
            <span style={{ color: "#F5D000" }}>Services</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Ignition interlock installation. Remote start systems. Aftermarket electronics. Services most shops send you somewhere else for. We do them right here.
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

      {/* Shop image */}
      <div className="w-full h-56 md:h-72 relative overflow-hidden">
        <Image
          src="/gallery/shop-03-full.jpg"
          alt="Specialty work at Driscoll's Auto Service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
      </div>

      {/* Services detail */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-0">
          {services.map((svc, i) => (
            <div key={svc.number} className={`grid grid-cols-1 lg:grid-cols-5 border border-[#F5D000]/20 ${i > 0 ? "border-t-0" : ""}`}>
              {/* Number + title col */}
              <div className="lg:col-span-2 p-8 bg-[#0f0f0f] border-b lg:border-b-0 lg:border-r border-[#F5D000]/20 flex flex-col justify-between">
                <div>
                  <div className="font-display text-6xl font-bold leading-none mb-4" style={{ color: i % 2 === 0 ? "#F5D000" : "#D14C2B", opacity: 0.25 }}>
                    {svc.number}
                  </div>
                  <h2 className="font-display text-white text-2xl md:text-3xl uppercase leading-tight">
                    {svc.title}
                  </h2>
                  <p className="text-[#F5D000] text-sm font-bold uppercase tracking-widest mt-2">{svc.detail}</p>
                </div>
                <a
                  href="tel:2187737809"
                  className="mt-6 inline-block bg-[#F5D000] text-[#1a1a1a] font-bold uppercase tracking-wider text-sm px-5 py-3 hover:bg-white transition-colors w-fit"
                >
                  {svc.cta}
                </a>
              </div>
              {/* Description col */}
              <div className="lg:col-span-3 p-8 bg-[#1a1a1a] flex flex-col justify-center gap-4">
                {svc.desc.map((para) => (
                  <p key={para} className="text-white/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note / exclusion */}
      <div className="hazard-stripe h-6 w-full" />
      <section className="bg-[#0f0f0f] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-[#F5D000]/30 p-6 bg-[#1a1a1a] max-w-2xl">
            <p className="text-white/60 text-sm leading-relaxed">
              <strong className="text-[#F5D000]">Note:</strong> Our aftermarket electronics services cover cameras, lighting, trailer wiring, GPS, and similar vehicle electronics. We do not provide car audio services. Call us if you have questions about whether we can help with your specific project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D14C2B] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            Ready to Schedule?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call us to ask about availability and pricing. We will get you set up.
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
