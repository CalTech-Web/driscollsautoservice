import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Driscoll's Auto Service website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-white text-4xl md:text-5xl uppercase mb-8">
          Privacy <span style={{ color: "#F5D000" }}>Policy</span>
        </h1>
        <p className="text-white/50 text-sm mb-8">Last updated: May 2026</p>
        <div className="prose prose-invert max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            Driscoll&apos;s Auto Service (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates this website at driscollsautoservice.com. This privacy policy explains what information we collect, how we use it, and how we protect it.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Information We Collect</h2>
          <p>
            When you use our contact form, we collect the information you provide: your name, phone number, email address, vehicle information, and message. We use this information solely to respond to your inquiry and schedule service.
          </p>
          <p>
            Our website may collect standard web analytics data (such as page views and approximate geographic location) through analytics tools, if enabled. This data is not personally identifiable.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to contact form inquiries</li>
            <li>To schedule service appointments</li>
            <li>To improve our website and services</li>
          </ul>
          <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Data Security</h2>
          <p>
            We take reasonable measures to protect the information submitted through our contact form. Our form submissions are processed through a secure service and delivered to our shop email.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Third-Party Services</h2>
          <p>
            Our website uses Google Maps embeds for location display. Use of Google Maps is subject to Google&apos;s privacy policy.
          </p>

          <h2 className="font-display text-white text-2xl uppercase mt-8">Contact</h2>
          <p>
            If you have questions about this privacy policy, contact us at:
          </p>
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
