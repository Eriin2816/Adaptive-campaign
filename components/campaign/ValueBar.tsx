const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "60-Day Free GHL Trial",
    sub: "No credit card required",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882V15.5a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    ),
    label: "Live Automation Training",
    sub: "April 17, 2026 · Interactive Q&A",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Built for Local Service Businesses",
    sub: "Contractors, HVAC, real estate & more",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "CRM + Follow-Up + Booking System",
    sub: "One connected platform",
  },
];

export default function ValueBar() {
  return (
    <section className="bg-brand-navy py-10 relative overflow-hidden">
      {/* Subtle cyan shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-transparent to-brand-teal/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-5 bg-brand-navy hover:bg-brand-cyan/5 transition-colors duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 group-hover:bg-brand-cyan/20 transition-colors duration-200">
                {v.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-white leading-snug">{v.label}</div>
                <div className="text-xs text-brand-sky/60 mt-0.5">{v.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
