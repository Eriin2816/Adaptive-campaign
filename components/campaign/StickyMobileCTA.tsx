"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 400);
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-brand-dark/95 backdrop-blur-sm border-t border-brand-cyan/15 shadow-[0_-4px_24px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-2">
        <a
          href="#register"
          className="
            flex-1 flex items-center justify-center gap-2
            py-3.5 rounded-xl text-sm font-bold
            bg-brand-cyan text-brand-navy
            hover:bg-brand-glow
            shadow-cyan
            transition-[background-color,box-shadow] duration-200
          "
        >
          Reserve My April 17 Spot
        </a>
        <button
          onClick={() => { setDismissed(true); setVisible(false); }}
          className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-brand-sky/60 hover:text-white transition-colors duration-200 shrink-0"
          aria-label="Dismiss"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
