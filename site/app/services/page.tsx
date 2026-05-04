import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Repair, All Makes & Models",
  description:
    "Full-service auto repair in East Grand Forks, MN. Engine, transmission, brakes, electrical, steering, suspension, alignments, and routine maintenance. Call (218) 773-7809.",
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

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative bg-[#0f0f0f] py-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute top-0 left-0 w-64 h-full hazard-stripe opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#F5D000] text-[#1a1a1a] px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            Full-Service Shop
          </div>
          <h1 className="font-display text-white text-5xl md:text-7xl uppercase leading-none">
            Auto Repair<br />
            <span style={{ color: "#F5D000" }}>All Makes</span><br />
            &amp; Models
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
            Gas or diesel, domestic or import, we service every vehicle that rolls through our door. East Grand Forks's full-service auto repair shop.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2187737809"
              className="inline-flex items-center gap-3 bg-[#F5D000] text-[#1a1a1a] font-display text-2xl px-8 py-4 hover:bg-white transition-colors"
            >
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

      {/* Shop photo */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <Image
          src="/gallery/shop-02-full.jpg"
          alt="Driscoll's Auto Service repair bays"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
      </div>

      {/* Repair services */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-3">
            Repair <span style={{ color: "#F5D000" }}>Services</span>
          </h2>
          <p className="text-white/60 text-base mb-12">Every job diagnosed and completed right the first time, gas or diesel, domestic or import.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#F5D000]/20">
            {repairs.map((item, i) => (
              <div
                key={item.title}
                className={`p-6 bg-[#0f0f0f] border-[#F5D000]/20 ${i % 4 !== 3 ? "border-r" : ""} ${i < 4 ? "border-b" : ""}`}
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
              Routine <span style={{ color: "#F5D000" }}>Maintenance</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Staying ahead of maintenance keeps your vehicle safer, more reliable, and worth more. We follow your manufacturer's recommended schedule and keep you informed every step of the way.
            </p>
            <ul className="space-y-3">
              {maintenance.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <span className="w-2 h-2 bg-[#F5D000] rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="polaroid">
            <Image
              src="/gallery/maintenance-banner.jpg"
              alt="Vehicle maintenance at Driscoll's Auto Service"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D14C2B] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            Need a Repair?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            We will evaluate your vehicle, give you an honest assessment, and get you back on the road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2187737809"
              className="bg-[#F5D000] text-[#1a1a1a] font-display text-2xl px-8 py-4 hover:bg-white transition-colors"
            >
              Call (218) 773-7809
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white text-white font-display text-lg px-8 py-4 hover:bg-white hover:text-[#D14C2B] transition-colors uppercase tracking-wider"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
