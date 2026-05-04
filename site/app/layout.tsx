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
      "Driscoll's Auto Service | Diesel & Heavy Equipment Repair | East Grand Forks, MN",
    template: "%s | Driscoll's Auto Service",
  },
  description:
    "East Grand Forks's trusted full-service auto repair shop, specializing in diesel and heavy equipment. Serving Grand Forks ND, East Grand Forks MN, and Crookston MN. Call (218) 773-7809.",
  keywords: [
    "diesel repair East Grand Forks",
    "heavy equipment repair Minnesota",
    "auto repair Grand Forks ND",
    "auto repair East Grand Forks MN",
    "Driscoll's Auto Service",
    "ignition interlock installation East Grand Forks",
    "remote start installation Minnesota",
    "Crookston diesel repair",
    "family owned auto shop East Grand Forks",
    "diesel truck repair Grand Forks area",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://driscollsautoservice.com",
    siteName: "Driscoll's Auto Service",
    images: [
      {
        url: "/gallery/shop-01-full.jpg",
        width: 1200,
        height: 630,
        alt: "Driscoll's Auto Service diesel and auto repair shop in East Grand Forks, MN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Driscoll's Auto Service | Diesel & Heavy Equipment Repair | East Grand Forks, MN",
    description:
      "East Grand Forks's trusted full-service auto repair shop, specializing in diesel and heavy equipment. Call (218) 773-7809.",
    images: ["/gallery/shop-01-full.jpg"],
  },
  metadataBase: new URL("https://driscollsautoservice.com"),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Driscoll's Auto Service",
  description:
    "East Grand Forks's trusted full-service auto repair shop, specializing in diesel and heavy equipment. Family-owned and operated.",
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
  image: "https://driscollsautoservice.com/gallery/shop-01-full.jpg",
  sameAs: ["https://www.facebook.com/driscollauto/"],
  hasMap: "https://maps.google.com/maps?cid=1197783825002618747",
  areaServed: [
    { "@type": "City", name: "East Grand Forks", addressRegion: "MN" },
    { "@type": "City", name: "Grand Forks", addressRegion: "ND" },
    { "@type": "City", name: "Crookston", addressRegion: "MN" },
  ],
  priceRange: "$$",
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
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
