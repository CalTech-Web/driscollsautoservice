import Link from "next/link";
import Image from "next/image";

const hours = [
  { day: "Monday", time: "8:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
  { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
  { day: "Thursday", time: "8:00 AM - 5:00 PM" },
  { day: "Friday", time: "8:00 AM - 5:00 PM" },
  { day: "Saturday", time: "By Appointment" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t-4 border-[#F5D000]">
      {/* Hours punch-clock strip */}
      <div className="bg-[#1a1a1a] border-b border-[#F5D000]/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#F5D000] font-display text-lg font-bold uppercase tracking-widest">
              Shop Hours
            </span>
            <div className="flex-1 h-px bg-[#F5D000]/20" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {hours.map((h) => (
              <div
                key={h.day}
                className="bg-[#0f0f0f] border border-[#F5D000]/20 p-2 text-center"
              >
                <div className="text-[#F5D000] text-xs font-bold uppercase tracking-wider mb-1">
                  {h.day.slice(0, 3)}
                </div>
                <div
                  className={`text-xs font-semibold ${
                    h.time === "Closed"
                      ? "text-white/30"
                      : h.time === "By Appointment"
                      ? "text-[#D14C2B]"
                      : "text-white"
                  }`}
                >
                  {h.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/logos/logo-hires.png"
            alt="Driscoll's Auto Service"
            width={150}
            height={56}
            className="h-14 w-auto object-contain mb-3"
          />
          <p className="text-white/60 text-sm leading-relaxed mt-2">
            Family-owned diesel and auto repair in East Grand Forks, MN. Serving the tri-city area since day one.
          </p>
          <a
            href="https://www.facebook.com/driscollauto/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[#F5D000] hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-sm font-semibold">Facebook</span>
          </a>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[#F5D000] font-display text-sm uppercase tracking-widest mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/services/" className="hover:text-[#F5D000] transition-colors">Auto Repair</Link></li>
            <li><Link href="/diesel-heavy-equipment/" className="hover:text-[#F5D000] transition-colors">Diesel &amp; Heavy Equipment</Link></li>
            <li><Link href="/specialty-services/" className="hover:text-[#F5D000] transition-colors">Specialty Services</Link></li>
            <li><Link href="/services/" className="hover:text-[#F5D000] transition-colors">Routine Maintenance</Link></li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="text-[#F5D000] font-display text-sm uppercase tracking-widest mb-4">Service Areas</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/service-areas/" className="hover:text-[#F5D000] transition-colors">East Grand Forks, MN</Link></li>
            <li><Link href="/service-areas/" className="hover:text-[#F5D000] transition-colors">Grand Forks, ND</Link></li>
            <li><Link href="/service-areas/" className="hover:text-[#F5D000] transition-colors">Crookston, MN</Link></li>
          </ul>
        </div>

        {/* Contact + Company */}
        <div>
          <h4 className="text-[#F5D000] font-display text-sm uppercase tracking-widest mb-4">Contact</h4>
          <address className="not-italic text-sm text-white/70 space-y-2">
            <p>622 10th Street NE<br />East Grand Forks, MN 56721</p>
            <p>
              <a href="tel:2187737809" className="hover:text-[#F5D000] transition-colors font-semibold text-white">
                (218) 773-7809
              </a>
            </p>
          </address>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link href="/about/" className="hover:text-[#F5D000] transition-colors">About Us</Link></li>
            <li><Link href="/contact/" className="hover:text-[#F5D000] transition-colors">Contact</Link></li>
            <li><Link href="/service-areas/" className="hover:text-[#F5D000] transition-colors">Service Areas</Link></li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-[#F5D000]/20 px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; 2026 Driscoll&apos;s Auto Service. All Rights Reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
