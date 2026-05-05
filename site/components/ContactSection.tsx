import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1a1a1a] py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E11D2D] text-[#1a1a1a] px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            Get In Touch
          </div>
          <h2 className="font-display text-white text-4xl md:text-6xl uppercase leading-none">
            <span className="block">Call, Stop By, </span>
            <span className="block" style={{ color: "#E11D2D" }}>or Send a Message</span>
          </h2>
          <p className="text-white/60 text-base mt-4 max-w-2xl">
            Tell us what is going on with your vehicle. We will get back to you the same day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact info column */}
          <div className="lg:col-span-1 space-y-4">
            <div className="border-2 border-[#E11D2D] p-6 bg-[#0f0f0f]">
              <h3 className="font-display text-[#E11D2D] text-sm uppercase tracking-widest mb-3">Call Now</h3>
              <a
                href="tel:2187737809"
                className="font-display text-white text-3xl hover:text-[#E11D2D] transition-colors block"
              >
                (218) 773-7809
              </a>
              <p className="text-white/50 text-sm mt-2">Tap to call from your phone.</p>
            </div>

            <div className="border border-[#E11D2D]/30 p-6 bg-[#0f0f0f]">
              <h3 className="font-display text-[#E11D2D] text-sm uppercase tracking-widest mb-3">Visit the Shop</h3>
              <address className="not-italic text-white/80 leading-relaxed">
                <p className="font-bold text-white">Driscoll&apos;s Auto Service</p>
                <p>622 10th Street NE</p>
                <p>East Grand Forks, MN 56721</p>
              </address>
              <a
                href="https://maps.google.com/maps?cid=1197783825002618747"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[#E11D2D] hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
              >
                Get Directions
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="border border-[#E11D2D]/30 p-6 bg-[#0f0f0f]">
              <h3 className="font-display text-[#E11D2D] text-sm uppercase tracking-widest mb-3">Hours</h3>
              <div className="space-y-1 text-sm">
                {[
                  { day: "Mon - Fri", time: "8:00 AM - 5:00 PM" },
                  { day: "Saturday", time: "By Appointment" },
                  { day: "Sunday", time: "Closed" },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between border-b border-white/10 py-1.5">
                    <span className="text-white/60">{h.day}</span>
                    <span className={
                      h.time === "Closed" ? "text-white/30" :
                      h.time === "By Appointment" ? "text-[#E11D2D] font-semibold" :
                      "text-white font-semibold"
                    }>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-2 bg-[#0f0f0f] border border-[#E11D2D]/30 p-6 md:p-8">
            <h3 className="font-display text-white text-2xl uppercase mb-6">
              Send Us a <span style={{ color: "#E11D2D" }}>Message</span>
            </h3>
            <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 w-full h-64 md:h-80 relative border border-[#E11D2D]/30">
          <iframe
            src="https://maps.google.com/maps?q=622+10th+Street+NE,+East+Grand+Forks,+MN+56721&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Driscoll's Auto Service location"
          />
        </div>
      </div>
    </section>
  );
}
