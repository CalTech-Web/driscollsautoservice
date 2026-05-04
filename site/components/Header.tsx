"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Diesel & Heavy Equipment", href: "/diesel-heavy-equipment/" },
  { label: "All Makes & Models", href: "/services/" },
  { label: "Other Services", href: "/specialty-services/" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b-2 border-[#E11D2D]">
      {/* Top bar: address + phone */}
      <div className="bg-[#1a1a1a] border-b border-white/10 px-4 py-1.5 flex items-center justify-between text-white/80 text-sm">
        <span className="hidden sm:block">622 10th Street NE, East Grand Forks, MN 56721 · Serving Greater Grand Forks</span>
        <a
          href="tel:2187737809"
          className="ml-auto flex items-center gap-2 font-bold text-base tracking-wide text-white hover:text-[#E11D2D] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          (218) 773-7809
        </a>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="Driscoll's Auto Service, Home">
          <Image
            src="/logos/driscolls-logo.png"
            alt="Driscoll's Auto Service, East Grand Forks MN"
            width={300}
            height={146}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E11D2D] transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:2187737809"
              className="ml-4 bg-[#E11D2D] text-white font-bold uppercase tracking-wider text-sm px-5 py-2.5 hover:bg-white hover:text-[#E11D2D] transition-colors"
            >
              Call Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-black border-t border-[#E11D2D]/40 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-sm font-bold uppercase tracking-wider text-white hover:text-[#E11D2D] border-b border-white/10 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="tel:2187737809"
                className="block text-center bg-[#E11D2D] text-white font-bold uppercase tracking-wider py-3 hover:bg-white hover:text-[#E11D2D] transition-colors"
              >
                Call (218) 773-7809
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
