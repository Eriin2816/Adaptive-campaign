export default function FinalCTACampaign() {
  return (
    <section className="bg-brand-dark relative overflow-hidden noise py-24 md:py-32">
      {/* Background layers */}
      <div className="absolute inset-0 circuit-grid opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand-cyan/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-teal/5 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-sky/5 blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow" />
          <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">
            April 17, 2026 · Limited Spots Available
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 leading-tight">
          Stop Losing Leads to
          <br />
          <span className="text-brand-cyan">Slow Follow-Up</span>
        </h2>

        <p className="text-brand-sky/75 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Join the live training and see how a connected automation system can help your business respond
          faster, book more appointments, and stay organized — all in one place.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#register"
            className="
              inline-flex items-center justify-center gap-2.5
              px-9 py-4 rounded-xl text-base font-bold
              bg-brand-cyan text-brand-navy
              hover:bg-brand-glow
              shadow-cyan-lg hover:shadow-[0_8px_60px_rgba(0,223,252,0.55)]
              transition-[background-color,box-shadow,transform] duration-200
              hover:-translate-y-0.5 active:translate-y-0
            "
          >
            Claim My Training Spot
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#register"
            className="
              inline-flex items-center justify-center gap-2
              px-7 py-4 rounded-xl text-base font-semibold
              border border-brand-cyan/25 text-brand-cyan
              hover:bg-brand-cyan/10 hover:border-brand-cyan/50
              transition-[background-color,border-color] duration-200
            "
          >
            Claim My 60-Day GHL Trial
          </a>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "✓", text: "Free to attend" },
            { icon: "✓", text: "No credit card for trial" },
            { icon: "✓", text: "Built for local service businesses" },
            { icon: "✓", text: "Live Q&A included" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-brand-cyan font-bold text-sm">{item.icon}</span>
              <span className="text-brand-sky/70 text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Company info strip */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-brand-sky/50">
          <span className="font-semibold text-brand-sky/70">Adaptive AI Business Automations</span>
          <span className="hidden sm:inline">·</span>
          <a href="tel:3237818600" className="hover:text-brand-cyan transition-colors duration-200">(323) 781-8600</a>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:steve@adaptiveautomate.com" className="hover:text-brand-cyan transition-colors duration-200">steve@adaptiveautomate.com</a>
          <span className="hidden sm:inline">·</span>
          <span>Sherman Oaks, CA</span>
        </div>
      </div>
    </section>
  );
}
