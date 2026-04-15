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
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <Image
              src="/brand_assets/Adaptive.png"
              alt="Adaptive AI Business Automations"
              width={160}
              height={48}
              className="h-[80px] w-auto object-contain"
              priority
            />
          </a>

          {/* Training date pill — hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow shrink-0" />
            <span className="text-brand-cyan text-xs font-medium tracking-wide">
              Live: April 17, 2026 · 6:00 PM PDT
            </span>
          </div>

          {/* CTA */}
          <a
            href="#register"
            className="
              hidden md:inline-flex items-center gap-2
              px-4 py-2 rounded-lg text-sm font-semibold
              bg-brand-cyan text-brand-navy
              hover:bg-brand-glow
              shadow-cyan hover:shadow-cyan-lg
              transition-[background-color,box-shadow] duration-200
              focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2
            "
          >
            Reserve My Spot
          </a>
        </div>
      </div>
    </header>
  );
}
