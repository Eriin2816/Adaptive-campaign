export default function FinalCTACampaign() {
  return (
    <section className="bg-brand-dark relative overflow-hidden noise py-24 md:py-32">
      <div className="absolute inset-0 circuit-grid opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand-cyan/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-teal/5 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-sky/5 blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div data-anim="fade-in" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow" />
          <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">
            April 17, 2026 · Limited Spots Available
          </span>
        </div>

        <h2 data-anim="blur-in" style={{ transitionDelay: "100ms" }} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-5 leading-tight">
          Stop Losing Leads to
          <br />
          <span className="text-brand-cyan">Slow Follow-Up</span>
        </h2>

        <p data-anim="fade-up" style={{ transitionDelay: "200ms" }} className="text-brand-sky/75 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Join the live training and see how a connected automation system can help your business respond
          faster, book more appointments, and stay organized — all in one place.
        </p>

        {/* CTA buttons */}
        <div data-anim="scale-up" style={{ transitionDelay: "300ms" }} className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-base font-bold bg-brand-cyan text-brand-navy hover:bg-brand-glow shadow-cyan-lg hover:shadow-[0_8px_60px_rgba(0,223,252,0.55)] transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Claim My Training Spot
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#register"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold border border-brand-cyan/25 text-brand-cyan hover:bg-brand-cyan/10 hover:border-brand-cyan/50 transition-[background-color,border-color] duration-200"
          >
            Claim My 60-Day GHL Trial
          </a>
        </div>

        {/* Trust signals */}
        <div data-anim="fade-up" style={{ transitionDelay: "400ms" }} className="flex flex-wrap items-center justify-center gap-6">
          {[
            "Free to attend",
            "No credit card for trial",
            "Built for local service businesses",
            "Live Q&A included",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-brand-cyan font-bold text-sm">✓</span>
              <span className="text-brand-sky/70 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Company strip */}
        <div data-anim="fade-up" style={{ transitionDelay: "500ms" }} className="mt-12 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-brand-sky/50">
          <span className="font-semibold text-brand-sky/70">Adaptive AI Business Automations</span>
          <span className="hidden sm:inline">·</span>
          <a href="tel:3234982131" className="hover:text-brand-cyan transition-colors duration-200">(323) 498-2131</a>
          <span className="hidden sm:inline">·</span>
          <a href="mailto:steve@adaptiveautomate.com" className="hover:text-brand-cyan transition-colors duration-200">steve@adaptiveautomate.com</a>
          <span className="hidden sm:inline">·</span>
          <span>Sherman Oaks & Century Park, CA</span>
        </div>

      </div>
    </section>
  );
}
