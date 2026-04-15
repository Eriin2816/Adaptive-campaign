const steps = [
  {
    number: "01",
    title: "Register for the Live Training",
    desc: "Complete the registration form below. Takes under 2 minutes. Your spot is confirmed once you submit.",
    cta: null,
  },
  {
    number: "02",
    title: "Attend the Walkthrough",
    desc: "Join us live on April 17 at 6:00 PM PDT. Watch the full system demo, ask questions, and follow along in real time.",
    cta: null,
  },
  {
    number: "03",
    title: "Claim Your 60-Day Free GHL Trial",
    desc: "After attending, you'll receive access to a GHL sub-account through Adaptive AI — completely free for 60 days.",
    cta: null,
  },
  {
    number: "04",
    title: "Start Building Your Automated Lead System",
    desc: "Use the training as your foundation. Build out your CRM, follow-up sequences, and booking calendar with direct guidance from Adaptive AI.",
    cta: "Get Started →",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-brand-navy py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 circuit-grid opacity-25" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-brand-cyan/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-brand-cyan text-xs font-semibold tracking-wide uppercase">How It Works</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-brand-sky/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            From registration to live system — here's exactly what to expect.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-cyan/20 via-brand-cyan/50 to-brand-cyan/20 z-0" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="
                relative z-10 glass-dark rounded-2xl p-6 border border-brand-cyan/15
                hover:border-brand-cyan/35 hover:bg-white/8
                transition-[border-color,background-color] duration-300 group
              "
            >
              {/* Step number */}
              <div className="
                w-11 h-11 rounded-full border-2 border-brand-cyan/40
                flex items-center justify-center mb-5
                bg-brand-cyan/10 group-hover:bg-brand-cyan/20
                transition-colors duration-200
              ">
                <span className="font-display font-bold text-brand-cyan text-sm">{step.number}</span>
              </div>

              <h3 className="font-display font-bold text-white text-base leading-snug mb-2">
                {step.title}
              </h3>
              <p className="text-brand-sky/65 text-sm leading-relaxed">
                {step.desc}
              </p>

              {step.cta && (
                <a
                  href="#register"
                  className="
                    mt-4 inline-flex items-center gap-1.5
                    text-sm font-semibold text-brand-cyan
                    hover:text-brand-glow
                    transition-colors duration-200
                  "
                >
                  {step.cta}
                </a>
              )}

              {/* Step indicator dot */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-10 w-6 h-6 rounded-full bg-brand-navy border-2 border-brand-cyan/40 z-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
