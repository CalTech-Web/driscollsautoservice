import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Family-Owned Auto Repair | East Grand Forks, MN",
  description:
    "Driscoll's Auto Service is a family-owned auto repair shop in East Grand Forks, MN, founded by Kirk Driscoll and now run by his son Kaleb with the same integrity and work ethic. Call (218) 773-7809.",
  keywords: [
    "family owned auto repair East Grand Forks",
    "Driscoll's Auto Service history",
    "Kirk Driscoll East Grand Forks",
    "Kaleb Driscoll auto repair",
    "local auto shop East Grand Forks MN",
    "trusted mechanic East Grand Forks",
    "community auto repair shop Minnesota",
    "independent auto repair Grand Forks area",
    "family mechanic East Grand Forks",
    "honest auto repair shop Minnesota",
  ],
  alternates: {
    canonical: "https://driscollsautoservice.com/about/",
  },
  openGraph: {
    type: "website",
    url: "https://driscollsautoservice.com/about/",
    title: "About Driscoll's Auto Service | Family-Owned | East Grand Forks, MN",
    description:
      "Founded by Kirk Driscoll and now run by his son Kaleb, Driscoll's Auto Service is East Grand Forks's family-owned auto repair shop built on hard work, honesty, and community. Call (218) 773-7809.",
    images: [
      {
        url: "/gallery/shop-01-full.jpg",
        width: 1200,
        height: 630,
        alt: "Driscoll's Auto Service family-owned shop in East Grand Forks MN",
      },
    ],
  },
};

const aboutBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://driscollsautoservice.com" },
    { "@type": "ListItem", position: 2, name: "About Us", item: "https://driscollsautoservice.com/about/" },
  ],
};

const kirkPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kirk Richard Driscoll",
  birthDate: "1961-01-07",
  deathDate: "2025-10-07",
  jobTitle: "Founder",
  description:
    "Kirk Richard Driscoll founded Driscoll's Auto Service in East Grand Forks, MN. Growing up farming in East Grand Forks, he built the shop into a community institution known for honest work and treating customers like family. He passed away on October 7, 2025, at age 64.",
  worksFor: {
    "@type": "AutoRepair",
    name: "Driscoll's Auto Service",
    url: "https://driscollsautoservice.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "East Grand Forks",
    addressRegion: "MN",
    addressCountry: "US",
  },
};

const kalebrPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kaleb Driscoll",
  jobTitle: "Owner and Operator",
  description:
    "Kaleb Driscoll is the owner and operator of Driscoll's Auto Service in East Grand Forks, MN, carrying forward the legacy of his father Kirk Driscoll with the same commitment to honest, quality auto and diesel repair.",
  worksFor: {
    "@type": "AutoRepair",
    name: "Driscoll's Auto Service",
    url: "https://driscollsautoservice.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "East Grand Forks",
    addressRegion: "MN",
    addressCountry: "US",
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kirkPersonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(kalebrPersonSchema) }} />
      {/* Hero */}
      <section className="relative bg-[#0f0f0f] py-20 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-[#F5D000] text-[#1a1a1a] px-4 py-1 mb-6 font-bold text-xs uppercase tracking-widest">
            Family Legacy
          </div>
          <h1 className="font-display text-white text-5xl md:text-7xl uppercase leading-none">
            The<br />
            <span style={{ color: "#F5D000" }}>Driscoll</span><br />
            Story
          </h1>
          <p className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
            A farming family&apos;s work ethic. A mechanic&apos;s passion. A community built one customer at a time. This is who we are.
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

      {/* Kirk's story */}
      <section className="bg-[#1a1a1a] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="badge mb-6">Kirk Richard Driscoll</div>
            <h2 className="font-display text-white text-4xl md:text-5xl uppercase leading-none mt-4">
              January 7, 1961<br />
              <span style={{ color: "#F5D000" }}>October 7, 2025</span>
            </h2>
            <p className="text-white/70 mt-6 text-lg leading-relaxed">
              Kirk Driscoll grew up farming in East Grand Forks, MN, the son of Richard and Mary Driscoll. Farming gave him the ethic and the hands, but he was always a mechanic at heart.
            </p>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              He built Driscoll&apos;s Auto Service into more than a repair shop. It became a place where customers knew they would be treated honestly, where a handshake meant something, and where Kirk always had time for a story or a laugh. His good-natured teasing and genuine warmth made people feel like they were walking into a friend&apos;s garage, not a commercial shop.
            </p>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              Kirk passed away peacefully on October 7, 2025, at Altru Hospital in Grand Forks, ND. He was surrounded by his family. He was 64 years old.
            </p>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              He is survived by his sons: Sonny, Kaleb, and Zak, and his grandchildren: Jaden, Kylan, Lawson, Isla, and Emrie.
            </p>
            <p className="mt-6 text-lg font-semibold" style={{ color: "#F5D000" }}>
              A life well lived. A community well served.
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="polaroid">
              <Image src="/gallery/shop-01-full.jpg" alt="Driscoll's Auto Service shop front in East Grand Forks, MN" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid mt-8">
              <Image src="/gallery/shop-02-full.jpg" alt="Interior of Driscoll's Auto Service repair shop East Grand Forks" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid">
              <Image src="/gallery/shop-03-full.jpg" alt="Work bay at Driscoll's family-owned auto shop East Grand Forks MN" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid mt-8">
              <Image src="/gallery/shop-06-full.jpg" alt="Heavy equipment repair work at Driscoll's Auto Service Minnesota" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HAZARD DIVIDER */}
      <div className="hazard-stripe h-6 w-full" />

      {/* Kaleb's section */}
      <section className="bg-[#0f0f0f] py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photos */}
          <div className="grid grid-cols-2 gap-3 order-2 lg:order-1">
            <div className="polaroid">
              <Image src="/gallery/shop-07-full.jpg" alt="Kaleb Driscoll continuing the family auto repair legacy East Grand Forks" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid mt-8">
              <Image src="/gallery/shop-08-full.jpg" alt="Driscoll's Auto Service exterior East Grand Forks Minnesota" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid">
              <Image src="/gallery/shop-04-full.jpg" alt="Auto repair tools and equipment at Driscoll's East Grand Forks MN" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
            <div className="polaroid mt-8">
              <Image src="/gallery/shop-05-full.jpg" alt="Vehicle repair work at Driscoll's family-owned shop Minnesota" width={400} height={300} className="w-full h-52 object-cover" />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="badge badge-orange mb-6">Current Owner</div>
            <h2 className="font-display text-white text-4xl md:text-5xl uppercase leading-none mt-4">
              Kaleb Driscoll<br />
              <span style={{ color: "#F5D000" }}>Carrying It Forward</span>
            </h2>
            <p className="text-white/70 mt-6 text-lg leading-relaxed">
              Kaleb Driscoll grew up in this shop. He learned the trade alongside his father, absorbed the values that made Kirk&apos;s approach to business so distinctive, and watched what it means to build a community institution on integrity and hard work.
            </p>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              When Kirk passed, Kaleb stepped up. Not just to keep the business running, but to keep the promise alive: that every person who walks through the door will be treated honestly, with respect, and like family.
            </p>
            <p className="text-white/70 mt-4 text-lg leading-relaxed">
              The shop continues. The values continue. The community relationships that Kirk built are in good hands.
            </p>
            <blockquote className="mt-8 border-l-4 border-[#F5D000] pl-6">
              <p className="text-white/90 text-lg italic leading-relaxed">
                &ldquo;As a family owned and operated company, we understand the importance of keeping your family safe. We get to know each of our customers individually, and that personal touch assures them the very best service available.&rdquo;
              </p>
              <footer className="mt-3 text-[#F5D000] font-bold text-sm uppercase tracking-wider">
                Driscoll&apos;s Auto Service
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Memberships / community */}
      <section className="bg-[#F5D000] py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-display text-[#1a1a1a] text-2xl md:text-3xl uppercase mb-3">
            Community Roots
          </h3>
          <p className="text-[#1a1a1a]/70 text-base mb-6">Kirk was a fixture in East Grand Forks well beyond the shop walls.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1a1a1a] text-white p-6">
              <h4 className="font-display text-[#F5D000] uppercase text-lg mb-2">Masonic Temple #292</h4>
              <p className="text-white/70 text-sm">Kirk served as past president of the Masonic Temple #292, a reflection of his commitment to community and brotherhood.</p>
            </div>
            <div className="bg-[#1a1a1a] text-white p-6">
              <h4 className="font-display text-[#F5D000] uppercase text-lg mb-2">KEM Shrine</h4>
              <p className="text-white/70 text-sm">A member of the KEM Shrine, an organization dedicated to fellowship and community service.</p>
            </div>
            <div className="bg-[#1a1a1a] text-white p-6">
              <h4 className="font-display text-[#F5D000] uppercase text-lg mb-2">Eagles Aerie #350</h4>
              <p className="text-white/70 text-sm">Kirk was a member of the Eagles Aerie #350, a fraternal organization with deep roots in the Grand Forks area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#D14C2B] py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase mb-4">
            Come Meet Kaleb
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Stop by the shop at 622 10th Street NE, or give us a call. We would love to earn your trust.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
