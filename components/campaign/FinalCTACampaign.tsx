export default function FinalCTACampaign() {
  return (
    <section className="bg-brand-dark relative overflow-hidden noise py-24 md:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-brand-cyan/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-brand-teal/5 blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-sky/5 blur-[60px] pointer-events-none" />

      {/* Drifting orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 450, height: 450, top: "-20%", left: "-5%", background: "radial-gradient(circle, rgba(0,223,252,0.07) 0%, transparent 70%)", animation: "orbDrift1 20s ease-in-out infinite", filter: "blur(75px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 380, height: 380, bottom: "-15%", right: "-5%", background: "radial-gradient(circle, rgba(13,172,201,0.08) 0%, transparent 70%)", animation: "orbDrift2 26s ease-in-out infinite", filter: "blur(65px)" }} />

      {/* Particle dots */}
      <div className="absolute rounded-full pointer-events-none" style={{ top: "15%", left: "6%",   width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 5s ease-in-out 0.4s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "50%", left: "3%",   width: 3, height: 3, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 12px rgba(0,223,252,0.8)", animation: "particlePulse 4s ease-in-out 1.6s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "80%", left: "10%",  width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 6s ease-in-out 0.9s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "20%", right: "7%",  width: 3, height: 3, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 12px rgba(0,223,252,0.8)", animation: "particlePulse 4.5s ease-in-out 0s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "60%", right: "4%",  width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 5.5s ease-in-out 2s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "88%", right: "18%", width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 4s ease-in-out 1.2s infinite" }} />

      {/* Data flow lines */}
      <div className="absolute pointer-events-none overflow-hidden" style={{ top: "35%", left: "0%", width: "15%", height: 1 }}><div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(0,223,252,0.45), transparent)", animation: "dataFlow 3.8s linear 0.7s infinite" }} /></div>
      <div className="absolute pointer-events-none overflow-hidden" style={{ top: "70%", right: "0%", width: "12%", height: 1 }}><div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(0,223,252,0.45), transparent)", animation: "dataFlow 4.2s linear 1.8s infinite" }} /></div>

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
          <span style={{ background: "linear-gradient(90deg,#00DFFC 0%,#34D4F0 30%,#ffffff 50%,#34D4F0 70%,#00DFFC 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "cyanShimmer 4s linear infinite" }}>Slow Follow-Up</span>
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
            Claim My 60-Day Trial
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
