const steps = [
  {
    number: "01",
    title: "Register for the Live Training",
    desc: "Complete the registration form below. Takes under 2 minutes. Your spot is confirmed once you submit.",
  },
  {
    number: "02",
    title: "Attend the Walkthrough",
    desc: "Join us live on April 17 at 6:00 PM PDT. Watch the full system demo, ask questions, and follow along in real time.",
  },
  {
    number: "03",
    title: "Claim Your 60-Day Free GHL Trial",
    desc: "After attending, you'll receive access to a GHL sub-account through Adaptive AI — completely free for 60 days.",
  },
  {
    number: "04",
    title: "Start Building Your Automated Lead System",
    desc: "Use the training as your foundation. Build out your CRM, follow-up sequences, and booking calendar with direct guidance from Adaptive AI.",
    cta: true,
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-brand-navy py-20 md:py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-brand-cyan/5 blur-[80px] rounded-full pointer-events-none" />

      {/* Drifting orbs */}
      <div className="absolute rounded-full pointer-events-none" style={{ width: 520, height: 520, top: "-20%", right: "-8%", background: "radial-gradient(circle, rgba(0,223,252,0.06) 0%, transparent 70%)", animation: "orbDrift2 24s ease-in-out infinite", filter: "blur(80px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 400, height: 400, bottom: "-5%", left: "30%", background: "radial-gradient(circle, rgba(13,172,201,0.07) 0%, transparent 70%)", animation: "orbDrift3 18s ease-in-out infinite", filter: "blur(65px)" }} />

      {/* Particle dots */}
      <div className="absolute rounded-full pointer-events-none" style={{ top: "10%", left: "5%",   width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 4.5s ease-in-out 0.3s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "45%", left: "2%",   width: 3, height: 3, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 12px rgba(0,223,252,0.8)", animation: "particlePulse 5s ease-in-out 1.2s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "75%", left: "8%",   width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 6s ease-in-out 0.8s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "15%", right: "5%",  width: 3, height: 3, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 12px rgba(0,223,252,0.8)", animation: "particlePulse 4s ease-in-out 2s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "50%", right: "3%",  width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 5.5s ease-in-out 0s infinite" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ top: "85%", right: "12%", width: 2, height: 2, background: "rgba(0,223,252,0.6)", boxShadow: "0 0 8px rgba(0,223,252,0.8)",  animation: "particlePulse 4.5s ease-in-out 1.8s infinite" }} />

      {/* Data flow lines */}
      <div className="absolute pointer-events-none overflow-hidden" style={{ top: "30%", left: "0%", width: "16%", height: 1 }}><div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(0,223,252,0.45), transparent)", animation: "dataFlow 4s linear 0.5s infinite" }} /></div>
      <div className="absolute pointer-events-none overflow-hidden" style={{ top: "65%", right: "0%", width: "13%", height: 1 }}><div style={{ width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(0,223,252,0.45), transparent)", animation: "dataFlow 3.5s linear 2s infinite" }} /></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div data-anim="fade-in" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-brand-cyan text-xs font-semibold tracking-wide uppercase">How It Works</span>
          </div>
          <h2 data-anim="blur-in" style={{ transitionDelay: "100ms" }} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Simple 4-Step Process
          </h2>
          <p data-anim="fade-up" style={{ transitionDelay: "200ms" }} className="text-brand-sky/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            From registration to live system — here's exactly what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-cyan/20 via-brand-cyan/50 to-brand-cyan/20 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              data-anim="fade-up"
              style={{ transitionDelay: `${i * 120}ms` }}
              className="relative z-10 glass-dark rounded-2xl p-6 border border-brand-cyan/15 hover:border-brand-cyan/35 hover:bg-white/8 transition-[border-color,background-color] duration-300 group"
            >
              <div className="w-11 h-11 rounded-full border-2 border-brand-cyan/40 flex items-center justify-center mb-5 bg-brand-cyan/10 group-hover:bg-brand-cyan/20 transition-colors duration-200">
                <span className="font-display font-bold text-brand-cyan text-sm">{step.number}</span>
              </div>
              <h3 className="font-display font-bold text-white text-base leading-snug mb-2">{step.title}</h3>
              <p className="text-brand-sky/65 text-sm leading-relaxed">{step.desc}</p>
              {step.cta && (
                <a href="#register" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:text-brand-glow transition-colors duration-200">
                  Get Started →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
