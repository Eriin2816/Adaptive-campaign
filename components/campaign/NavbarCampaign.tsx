"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function NavbarCampaign() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[110px] md:h-[120px]">

          {/* Logo */}
          <a href="#hero" className="flex items-center shrink-0">
            <Image
              src="/brand_assets/Adaptive.png"
              alt="Adaptive AI Business Automations"
              width={200}
              height={60}
              className="h-[110px] w-auto object-contain"
              priority
            />
          </a>

          {/* Prominent CTA block — headline + live date */}
          <a
            href="#register"
            className="
              hidden md:flex flex-col items-end gap-0.5 group
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-brand-cyan focus-visible:ring-offset-2 rounded-lg
            "
          >
            {/* Live date line */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow shrink-0" />
              <span className="text-brand-cyan/80 text-xs font-medium tracking-widest uppercase">
                Live: April 17, 2026 · 6:00 PM PDT
              </span>
            </div>

            {/* Big headline CTA */}
            <div className="
              flex items-center gap-2.5
              px-5 py-2.5 rounded-xl
              bg-brand-cyan text-brand-navy
              group-hover:bg-brand-glow
              shadow-cyan group-hover:shadow-cyan-lg
              transition-[background-color,box-shadow,transform] duration-200
              group-hover:-translate-y-0.5
            ">
              <span className="font-display font-bold text-lg leading-none tracking-tight">
                Reserve My Spot
              </span>
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>

          {/* Mobile — compact CTA only */}
          <a
            href="#register"
            className="
              md:hidden flex flex-col items-end gap-0.5
            "
          >
            <span className="text-brand-cyan text-[10px] font-medium tracking-wider">Apr 17 · 6PM PDT</span>
            <span className="
              px-3 py-2 rounded-lg text-sm font-bold
              bg-brand-cyan text-brand-navy
              shadow-cyan
            ">
              Reserve My Spot
            </span>
          </a>

        </div>
      </div>
    </header>
  );
}
