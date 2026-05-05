"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you work on diesel vehicles?",
    a: "Yes, diesel repair is our specialty. We service diesel trucks and heavy equipment of all makes and models. If it runs on diesel, we have the tools and training to diagnose and fix it.",
  },
  {
    q: "Do you service all makes and models?",
    a: "Yes. We service gas and diesel vehicles of all makes and models. Whether you drive a domestic truck or an imported car, our technicians have the equipment and expertise to help.",
  },
  {
    q: "Do you install remote starters?",
    a: "Yes. We install remote start systems including the Astro Start 2 Way RSS S5225. Call us to ask about scheduling an installation appointment.",
  },
  {
    q: "Do you install ignition interlocks (breathalyzers)?",
    a: "Yes. We install and service breathalyzer and ignition interlock devices in East Grand Forks, MN. Call (218) 773-7809 to schedule.",
  },
  {
    q: "What are your hours?",
    a: "We are open Monday through Friday from 8:00 AM to 5:00 PM. Saturday appointments are available by appointment only. We are closed on Sunday.",
  },
  {
    q: "Do you serve customers in Grand Forks, ND?",
    a: "Yes. We are located just across the river in East Grand Forks, MN, and we regularly serve customers from Grand Forks, ND. We also serve customers in Crookston, MN.",
  },
  {
    q: "How do you decide what my vehicle needs?",
    a: "We start with a complete inspection and use computer diagnostics to pinpoint the problem before recommending any repairs. We walk through the findings with you and give you an honest assessment so you can make an informed decision.",
  },
  {
    q: "Are you a family-owned business?",
    a: "Yes. Driscoll's Auto Service was founded by Kirk Driscoll, who grew up farming in East Grand Forks before building the shop into a community staple. Kirk passed away in October 2025, and his son Kaleb now carries the business forward with the same work ethic and values.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="font-display text-white text-4xl md:text-5xl uppercase leading-none">
            Common <span style={{ color: "#E11D2D" }}>Questions</span>
          </h2>
          <p className="text-white/60 text-base mt-3">
            Answers to what customers ask most before bringing in their vehicle.
          </p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border border-[#E11D2D]/20 bg-[#0f0f0f] transition-colors"
                style={isOpen ? { borderColor: "rgba(225,29,45,0.6)" } : {}}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-display text-base md:text-lg uppercase tracking-wide transition-colors"
                    style={{ color: isOpen ? "#E11D2D" : "#ffffff" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 transition-colors"
                    style={{
                      borderColor: isOpen ? "#E11D2D" : "rgba(225,29,45,0.3)",
                      color: isOpen ? "#E11D2D" : "rgba(255,255,255,0.4)",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-white/70 text-base leading-relaxed border-t border-[#E11D2D]/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
