import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | East Grand Forks, Grand Forks & Crookston",
  description:
    "Driscoll's Auto Service serves East Grand Forks MN, Grand Forks ND, and Crookston MN. The only diesel specialist in the tri-city area. Call (218) 773-7809.",
};

const areas = [
  {
    city: "East Grand Forks",
    state: "MN",
    label: "Home Base",
    color: "#F5D000",
    desc: "Our shop is located at 622 10th Street NE in East Grand Forks. We have served this community since the beginning, and this is our home. Local customers know where to find us.",
    detail: "We are your neighbors here. Kirk Driscoll built this shop in East Grand Forks, and Kaleb continues to serve the families and businesses of this community every day.",
  },
  {
    city: "Grand Forks",
    state: "ND",
    label: "Cross-River Market",
    color: "#D14C2B",
    desc: "Just across the Red River from our shop, Grand Forks customers regularly make the short drive for diesel and auto service they can trust. Many find us through word of mouth from East Grand Forks neighbors.",
    detail: "We regularly see vehicles from Grand Forks ND for all services, especially diesel and heavy equipment work. The river does not stop us from taking care of you.",
  },
  {
    city: "Crookston",
    state: "MN",
    label: "Strategic Coverage",
    color: "#F5D000",
    desc: "Crookston is about 45 miles south of East Grand Forks, and it has no local diesel repair option. Crookston customers who need diesel or heavy equipment work make the trip to Driscoll's.",
    detail: "If you are in Crookston and need diesel service, you already know the problem: there is no local shop that can help. We are 45 miles north, and we will take care of you.",
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0f0f0f] py-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute top-0 left-0 w-1/3 h-full hazard-stripe opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#F5D000] text-[#1a1a1a] px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            Tri-City Coverage
          </div>
          <h1 className="font-display text-white text-5xl md:text-7xl uppercase leading-none">
            Service<br />
            <span style={{ color: "#F5D000" }}>Areas</span>
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
            Based in East Grand Forks, MN. Serving the greater Grand Forks metro area on both sides of the Red River, and Crookston, MN.
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

      {/* Map embed */}
      <section className="bg-[#1a1a1a]">
        <div className="w-full h-96 relative border-b-4 border-[#F5D000]">
          <iframe
            src="https://maps.google.com/maps?q=622+10th+Street+NE,+East+Grand+Forks,+MN+56721&z=10&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Driscoll's Auto Service location map"
            className="grayscale"
          />
        </div>
      </section>

      {/* Areas detail */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-3">
            Where We <span style={{ color: "#F5D000" }}>Serve</span>
          </h2>
          <p className="text-white/60 text-base mb-12">East Grand Forks is home base. Grand Forks and Crookston customers make the drive because there is no closer option for diesel work.</p>
          <div className="space-y-0">
            {areas.map((area, i) => (
              <div key={area.city} className={`grid grid-cols-1 lg:grid-cols-3 border border-[#F5D000]/20 ${i > 0 ? "border-t-0" : ""}`}>
                <div className="p-8 bg-[#0f0f0f] border-b lg:border-b-0 lg:border-r border-[#F5D000]/20">
                  <div
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 mb-4"
                    style={{ background: area.color, color: area.color === "#F5D000" ? "#1a1a1a" : "white" }}
                  >
                    {area.label}
                  </div>
                  <h3 className="font-display text-white text-3xl md:text-4xl uppercase leading-none">
                    {area.city}
                  </h3>
                  <p className="font-display text-lg uppercase mt-1" style={{ color: area.color }}>
                    {area.state}
                  </p>
                </div>
                <div className="lg:col-span-2 p-8 bg-[#1a1a1a] flex flex-col gap-4">
                  <p className="text-white/80 leading-relaxed">{area.desc}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{area.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HAZARD DIVIDER */}
      <div className="hazard-stripe h-6 w-full" />

      {/* Location card */}
      <section className="bg-[#0f0f0f] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="border border-[#F5D000]/30 p-8 bg-[#1a1a1a]">
            <h3 className="font-display text-[#F5D000] text-2xl uppercase mb-4">Our Location</h3>
            <address className="not-italic text-white/80 space-y-2 text-lg">
              <p className="font-bold text-white">Driscoll&apos;s Auto Service</p>
              <p>622 10th Street NE<br />East Grand Forks, MN 56721</p>
              <p className="mt-4">
                <a href="tel:2187737809" className="text-[#F5D000] font-bold text-2xl hover:text-white transition-colors">
                  (218) 773-7809
                </a>
              </p>
            </address>
          </div>
          <div className="border border-[#F5D000]/30 p-8 bg-[#1a1a1a]">
            <h3 className="font-display text-[#F5D000] text-2xl uppercase mb-4">Hours</h3>
            <div className="space-y-2 text-white/80">
              <div className="flex justify-between"><span>Monday to Friday</span><span className="font-bold text-white">8:00 AM to 5:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span className="font-bold text-[#D14C2B]">By Appointment</span></div>
              <div className="flex justify-between"><span>Sunday</span><span className="text-white/40">Closed</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D14C2B] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            In the Area?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call ahead or stop by. We are ready to help.
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
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
