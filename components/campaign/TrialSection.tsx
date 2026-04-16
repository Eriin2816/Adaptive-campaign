export default function TrialSection() {
  return (
    <section className="bg-brand-navy py-20 md:py-28 relative overflow-hidden noise">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-cyan/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-brand-teal/6 blur-[80px] rounded-full pointer-events-none" />

      {/* Drifting orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 480, height: 480, top: "-15%", right: "-5%", background: "radial-gradient(circle, rgba(0,223,252,0.07) 0%, transparent 70%)", animation: "orbDrift1 22s ease-in-out infinite", filter: "blur(70px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 380, height: 380, bottom: "-10%", left: "-5%", background: "radial-gradient(circle, rgba(13,172,201,0.08) 0%, transparent 70%)", animation: "orbDrift2 28s ease-in-out infinite", filter: "blur(60px)" }} />

      {/* Particle dots */}
      <div className="absolute rounded-full pointer-events-none" style={{ top: "12%", left: "8%",   width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 5s ease-in-out 0s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "35%", left: "3%",   width: 3, height: 3, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 12px rgba(0,223,252,0.8)", animation: "particlePulse 4s ease-in-out 1s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "70%", left: "12%",  width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 6s ease-in-out 2s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "18%", right: "10%", width: 3, height: 3, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 12px rgba(0,223,252,0.8)", animation: "particlePulse 4.5s ease-in-out 0.5s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "55%", right: "6%",  width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 5.5s ease-in-out 1.5s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "82%", right: "15%", width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 4s ease-in-out 3s infinite" }} />

      {/* Data flow lines */}
      <div className="absolute pointer-events-none overflow-hidden" style={{ top: "25%", left: "0%", width: "14%", height: 1 }}><div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(0,223,252,0.45), transparent)", animation: "dataFlow 3.5s linear 0s infinite" }} /></div>
      <div className="absolute pointer-events-none overflow-hidden" style={{ top: "60%", right: "0%", width: "12%", height: 1 }}><div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(0,223,252,0.45), transparent)", animation: "dataFlow 4s linear 1.5s infinite" }} /></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <div>
            <div data-anim="fade-in" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-6">
              <svg className="w-3.5 h-3.5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">Exclusive to Training Attendees</span>
            </div>

            <h2 data-anim="blur-in" style={{ transitionDelay: "100ms" }} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
              Claim Your{" "}
              <span style={{ background: "linear-gradient(90deg,#00DFFC 0%,#34D4F0 30%,#ffffff 50%,#34D4F0 70%,#00DFFC 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "cyanShimmer 4s linear infinite" }}>60-Day Free</span>{" "}
              GHL Sub-Account Trial
            </h2>

            <p data-anim="fade-up" style={{ transitionDelay: "200ms" }} className="text-brand-sky/80 text-base sm:text-lg leading-relaxed mb-6">
              Every attendee who completes registration and attends the live training will receive access to a GHL sub-account through Adaptive AI — completely free for 60 days. No credit card. No obligation.
            </p>

            <p data-anim="fade-up" style={{ transitionDelay: "300ms" }} className="text-brand-sky/70 text-sm leading-relaxed mb-8">
              This is the same platform used by thousands of service businesses to automate lead capture, follow-up, and appointment booking. You'll leave the training with access to the actual system — ready to build with.
            </p>

            <div data-anim="fade-up" style={{ transitionDelay: "400ms" }}>
              <a
                href="#register"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-bold bg-brand-cyan text-brand-navy hover:bg-brand-glow shadow-cyan hover:shadow-cyan-lg transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Claim My 60-Day GHL Trial
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Feature checklist */}
          <div data-anim="slide-left" style={{ transitionDelay: "150ms" }} className="glass-dark rounded-2xl p-7 border border-brand-cyan/15 space-y-4">
            <div className="text-sm font-semibold text-brand-cyan tracking-wide uppercase mb-2">
              What's included in the 60-day trial
            </div>

            {[
              "Full GHL sub-account access",
              "CRM pipeline and contact management",
              "Automated SMS & email sequences",
              "Booking calendar integration",
              "Missed-call text-back setup",
              "Lead capture forms",
              "Two-way conversation inbox",
              "Reporting and analytics dashboard",
              "Adaptive AI onboarding guidance",
            ].map((item, i) => (
              <div
                key={item}
                data-anim="fade-up"
                style={{ transitionDelay: `${200 + i * 60}ms` }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/85 text-sm leading-relaxed">{item}</span>
              </div>
            ))}

            <div className="pt-3 border-t border-brand-cyan/10">
              <p className="text-brand-sky/60 text-xs leading-relaxed">
                This trial is made available through Adaptive AI's GHL partner account. Access is provided directly after the live training session.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
