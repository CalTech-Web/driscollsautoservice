import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Schedule Service",
  description:
    "Contact Driscoll's Auto Service in East Grand Forks, MN. Call (218) 773-7809 or send us a message to schedule auto repair, diesel service, or specialty installations.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0f0f0f] py-16 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="absolute top-0 right-0 w-1/4 h-full hazard-stripe opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#F5D000] text-[#1a1a1a] px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            Get In Touch
          </div>
          <h1 className="font-display text-white text-5xl md:text-6xl uppercase leading-none mb-4">
            Contact<br />
            <span style={{ color: "#F5D000" }}>Driscoll&apos;s</span>
          </h1>
          <p className="text-white/70 text-lg max-w-lg leading-relaxed">
            Call us, stop by, or fill out the form below. We will get back to you quickly.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="border border-[#F5D000]/20 p-6 bg-[#0f0f0f]">
              <h3 className="font-display text-[#F5D000] text-sm uppercase tracking-widest mb-3">Call Us</h3>
              <a
                href="tel:2187737809"
                className="font-display text-white text-3xl hover:text-[#F5D000] transition-colors"
              >
                (218) 773-7809
              </a>
              <p className="text-white/50 text-sm mt-2">Tap to call from your phone</p>
            </div>

            {/* Address */}
            <div className="border border-[#F5D000]/20 p-6 bg-[#0f0f0f]">
              <h3 className="font-display text-[#F5D000] text-sm uppercase tracking-widest mb-3">Visit Us</h3>
              <address className="not-italic text-white/80">
                <p className="font-bold text-white">Driscoll&apos;s Auto Service</p>
                <p>622 10th Street NE</p>
                <p>East Grand Forks, MN 56721</p>
              </address>
            </div>

            {/* Hours */}
            <div className="border border-[#F5D000]/20 p-6 bg-[#0f0f0f]">
              <h3 className="font-display text-[#F5D000] text-sm uppercase tracking-widest mb-3">Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Mon", time: "8:00 AM - 5:00 PM" },
                  { day: "Tue", time: "8:00 AM - 5:00 PM" },
                  { day: "Wed", time: "8:00 AM - 5:00 PM" },
                  { day: "Thu", time: "8:00 AM - 5:00 PM" },
                  { day: "Fri", time: "8:00 AM - 5:00 PM" },
                  { day: "Sat", time: "By Appointment" },
                  { day: "Sun", time: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-white/60">{h.day}</span>
                    <span className={
                      h.time === "Closed" ? "text-white/30" :
                      h.time === "By Appointment" ? "text-[#D14C2B] font-semibold" :
                      "text-white font-semibold"
                    }>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map link */}
            <a
              href="https://maps.google.com/maps?cid=1197783825002618747"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-[#F5D000]/30 p-4 bg-[#0f0f0f] text-[#F5D000] hover:bg-[#F5D000] hover:text-[#1a1a1a] transition-colors font-bold uppercase text-sm tracking-wider"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-white text-3xl uppercase mb-3">
              Send Us a <span style={{ color: "#F5D000" }}>Message</span>
            </h2>
            <p className="text-white/60 text-base mb-8">We respond quickly. Fill out the form and we will get back to you the same day.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-[#0f0f0f]">
        <div className="w-full h-80 relative">
          <iframe
            src="https://maps.google.com/maps?q=622+10th+Street+NE,+East+Grand+Forks,+MN+56721&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Driscoll's Auto Service map"
            className="grayscale"
          />
        </div>
      </section>
    </>
  );
}
