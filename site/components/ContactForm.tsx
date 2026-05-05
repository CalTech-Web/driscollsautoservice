"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [widgetBlocked, setWidgetBlocked] = useState(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      const rendered = widgetRef.current?.querySelector("iframe");
      if (!rendered) setWidgetBlocked(true);
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const turnstileField = form.elements.namedItem("cf-turnstile-response") as HTMLInputElement | null;
    const data = {
      site: "driscollsautoservice.com",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      vehicle: (form.elements.namedItem("vehicle") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      turnstileToken: turnstileField?.value || "",
    };

    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.error || "Something went wrong. Please call us directly at (218) 773-7809.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please call us directly at (218) 773-7809.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-[#0f0f0f] border-2 border-[#E11D2D] p-10 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-display text-[#E11D2D] text-3xl uppercase mb-3">Message Received</h3>
        <p className="text-white/70 text-lg leading-relaxed">
          Thank you for reaching out. We will be in touch soon. If you need immediate help, call us at{" "}
          <a href="tel:2187737809" className="text-[#E11D2D] font-bold hover:text-white transition-colors">
            (218) 773-7809
          </a>.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-[#0f0f0f] border border-[#E11D2D]/30 text-white px-4 py-3 placeholder-white/30 focus:outline-none focus:border-[#E11D2D] transition-colors";
  const labelClass = "block text-white/70 text-sm font-semibold uppercase tracking-wider mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(218) 555-0100"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="vehicle" className={labelClass}>Your Vehicle (Year / Make / Model)</label>
        <input
          type="text"
          id="vehicle"
          name="vehicle"
          placeholder="e.g. 2019 Ford F-250 Diesel"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service Type *</label>
        <select
          id="service"
          name="service"
          required
          className={inputClass + " cursor-pointer"}
          defaultValue=""
        >
          <option value="" disabled>Select a service...</option>
          <option value="Diesel / Heavy Equipment">Diesel / Heavy Equipment</option>
          <option value="General Repair">General Repair</option>
          <option value="Routine Maintenance">Routine Maintenance</option>
          <option value="Remote Start">Remote Start</option>
          <option value="Ignition Interlock">Ignition Interlock (Breathalyzer)</option>
          <option value="Aftermarket Electronics">Aftermarket Electronics</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what's going on with your vehicle..."
          className={inputClass + " resize-y"}
        />
      </div>

      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
        onError={() => setWidgetBlocked(true)}
      />
      <div ref={widgetRef} className="cf-turnstile" data-sitekey="0x4AAAAAACyy0OTX5mR2xETR" data-theme="dark" />

      {widgetBlocked && (
        <div className="border border-[#E11D2D] bg-[#E11D2D]/10 p-4 text-sm text-white/80 leading-relaxed">
          <p className="font-bold text-[#E11D2D] uppercase tracking-wider text-xs mb-1">Security check could not load</p>
          <p>
            An ad blocker or network filter may be blocking it. Please call us directly at{" "}
            <a href="tel:2187737809" className="text-[#E11D2D] font-bold hover:text-white transition-colors">
              (218) 773-7809
            </a>{" "}
            and we will take care of you right away.
          </p>
        </div>
      )}

      {state === "error" && (
        <div className="border border-[#E11D2D] bg-[#E11D2D]/10 p-4 text-[#E11D2D] text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full bg-[#E11D2D] text-white font-display text-xl uppercase tracking-wider py-4 hover:bg-white hover:text-[#E11D2D] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-white/60 text-sm text-center">
        Prefer to talk? Call{" "}
        <a href="tel:2187737809" className="text-[#E11D2D] font-bold hover:text-white transition-colors">
          (218) 773-7809
        </a>
      </p>
    </form>
  );
}
