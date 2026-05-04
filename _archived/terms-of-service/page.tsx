import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Driscoll's Auto Service website.",
  robots: { index: false, follow: false },
};

export default function TermsOfServicePage() {
  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-white text-4xl md:text-5xl uppercase mb-8">
          Terms of <span style={{ color: "#F5D000" }}>Service</span>
        </h1>
        <p className="text-white/50 text-sm mb-8">Last updated: May 2026</p>
        <div className="prose prose-invert max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            By using the Driscoll&apos;s Auto Service website at driscollsautoservice.com, you agree to these terms of service. If you do not agree, please do not use this website.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Use of This Website</h2>
          <p>
            This website is provided for informational purposes and to facilitate contact with our shop. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Information Accuracy</h2>
          <p>
            We make every effort to ensure the information on this website is accurate and up to date, including hours, services, and contact information. However, we do not guarantee that all information is complete or error-free. Confirm current details by calling us directly at (218) 773-7809.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Service Terms</h2>
          <p>
            Submitting a contact form or calling our shop does not constitute a binding appointment or service agreement. All service work is subject to our in-shop policies, estimates, and agreements made directly with shop staff.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Intellectual Property</h2>
          <p>
            All content on this website, including text, images, and the Driscoll&apos;s Auto Service name and logo, is the property of Driscoll&apos;s Auto Service. Reproduction or distribution without permission is prohibited.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Limitation of Liability</h2>
          <p>
            Driscoll&apos;s Auto Service is not liable for any damages arising from use of this website or reliance on the information presented here.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Changes to These Terms</h2>
          <p>
            We may update these terms at any time. Continued use of the website after changes constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Contact</h2>
          <address className="not-italic">
            <p>Driscoll&apos;s Auto Service</p>
            <p>622 10th Street NE</p>
            <p>East Grand Forks, MN 56721</p>
            <p><a href="tel:2187737809" className="text-[#F5D000] hover:text-white transition-colors">(218) 773-7809</a></p>
          </address>
        </div>
      </div>
    </section>
  );
}
