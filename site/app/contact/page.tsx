import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: { absolute: "Contact Driscoll's Auto Service | East Grand Forks MN" },
  description:
    "Schedule service or ask a question. Driscoll's Auto Service in East Grand Forks, MN. Call (218) 773-7809 or send a message and we will get back to you the same day.",
  alternates: {
    canonical: "https://driscollsautoservice.com/contact/",
  },
  openGraph: {
    type: "website",
    url: "https://driscollsautoservice.com/contact/",
    title: "Contact Driscoll's Auto Service | East Grand Forks MN",
    description:
      "Schedule service or ask a question. Call (218) 773-7809 or send a message. Driscoll's Auto Service, 622 10th Street NE, East Grand Forks, MN.",
    images: [
      {
        url: "/gallery/shop-real-1920.jpg",
        width: 1920,
        height: 960,
        alt: "Driscoll's Auto Service shop, East Grand Forks MN",
      },
    ],
  },
};

const contactBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://driscollsautoservice.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://driscollsautoservice.com/contact/" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }} />
      <ContactSection />
    </>
  );
}
