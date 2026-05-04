import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Driscoll's Auto Service | Grand Forks Diesel & Heavy Equipment Repair",
    template: "%s | Driscoll's Auto Service",
  },
  description:
    "Grand Forks's trusted full-service auto repair shop, specializing in diesel and heavy equipment. Located in East Grand Forks, MN, serving the Greater Grand Forks region. Call (218) 773-7809.",
  keywords: [
    "diesel repair Grand Forks",
    "heavy equipment repair Grand Forks",
    "auto repair Grand Forks",
    "auto repair Grand Forks ND",
    "Driscoll's Auto Service",
    "Grand Forks diesel mechanic",
    "ignition interlock Grand Forks",
    "remote start Grand Forks",
    "family owned auto shop Grand Forks",
    "diesel truck repair Grand Forks",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://driscollsautoservice.com",
    siteName: "Driscoll's Auto Service",
    images: [
      {
        url: "/gallery/shop-real-1920.jpg",
        width: 1920,
        height: 960,
        alt: "Driscoll's Auto Service shop, Grand Forks area diesel and auto repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Driscoll's Auto Service | Grand Forks Diesel & Heavy Equipment Repair",
    description:
      "Grand Forks's trusted full-service auto repair shop, specializing in diesel and heavy equipment. Call (218) 773-7809.",
    images: ["/gallery/shop-real-1920.jpg"],
  },
  metadataBase: new URL("https://driscollsautoservice.vercel.app"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": "https://driscollsautoservice.com/#business",
  name: "Driscoll's Auto Service",
  alternateName: "Driscoll's Auto",
  foundingDate: "2013",
  description:
    "Grand Forks's trusted full-service auto repair shop, specializing in diesel and heavy equipment. Family-owned and operated, located in East Grand Forks, MN.",
  url: "https://driscollsautoservice.com",
  telephone: "+12187737809",
  address: {
    "@type": "PostalAddress",
    streetAddress: "622 10th Street NE",
    addressLocality: "East Grand Forks",
    addressRegion: "MN",
    postalCode: "56721",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.9352574,
    longitude: -97.0095728,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  image: [
    "https://driscollsautoservice.vercel.app/gallery/shop-real-1920.jpg",
    "https://driscollsautoservice.vercel.app/gallery/shop-real-1280.jpg",
  ],
  sameAs: [
    "https://www.facebook.com/driscollauto/",
    "https://maps.google.com/maps?cid=1197783825002618747",
  ],
  hasMap: "https://maps.google.com/maps?cid=1197783825002618747",
  currenciesAccepted: "USD",
  areaServed: [
    { "@type": "City", name: "East Grand Forks", addressRegion: "MN" },
    { "@type": "City", name: "Grand Forks", addressRegion: "ND" },
    { "@type": "City", name: "Crookston", addressRegion: "MN" },
  ],
  priceRange: "$$",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diesel Truck Repair and Diagnostics" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heavy Equipment Repair" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto Repair, All Makes and Models" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ignition Interlock Installation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remote Start Installation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Change and Routine Maintenance" } },
  ],
  founder: {
    "@type": "Person",
    name: "Kirk Driscoll",
    jobTitle: "Founder",
  },
  employee: {
    "@type": "Person",
    name: "Kaleb Driscoll",
    jobTitle: "Owner and Operator",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Driscoll's Auto Service",
  url: "https://driscollsautoservice.com",
  description:
    "Grand Forks's trusted diesel and auto repair shop. Family-owned, specializing in diesel trucks, heavy equipment, and all makes and models. Located in East Grand Forks, MN.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
