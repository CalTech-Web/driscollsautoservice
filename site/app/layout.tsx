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
    "auto repair Grand Forks",
    "Driscoll's Auto Service",
    "ignition interlock installation",
    "remote start installation",
    "Crookston diesel repair",
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
        alt: "Driscoll's Auto Service shop",
      },
    ],
  },
  metadataBase: new URL("https://driscollsautoservice.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
