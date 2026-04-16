const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Leads Get Missed",
    desc: "Inquiries come in from forms, ads, and calls — then fall through the cracks because no one follows up fast enough. The first business to respond wins the job.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Follow-Up Is Too Slow",
    desc: "Manual follow-up is inconsistent and delayed. By the time you reach back out, the prospect has already booked with a competitor who responded in minutes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Appointments Are Booked Manually",
    desc: "Back-and-forth scheduling over phone and email wastes time and creates friction. Some leads drop off before a booking ever gets confirmed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: "Tools Are Disconnected",
    desc: "Your lead gen, CRM, calendar, and communication tools don't talk to each other. Data gets lost between systems, and nothing works together seamlessly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "No Clear Pipeline Visibility",
    desc: "Owners can't see where leads are in the sales process, what follow-up is pending, or why deals stall. Without visibility, nothing improves.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-brand-light dot-grid py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div data-anim="fade-in" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span className="text-red-600 text-xs font-semibold tracking-wide uppercase">Common Pain Points</span>
          </div>
          <h2 data-anim="blur-in" style={{ transitionDelay: "100ms" }} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Sound Familiar?
          </h2>
          <p data-anim="fade-up" style={{ transitionDelay: "200ms" }} className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            These are the exact problems our live training is designed to solve — with a system that handles all of it automatically.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={i}
              data-anim="scale-up"
              style={{ transitionDelay: `${i * 90}ms` }}
              className="relative bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-[box-shadow,transform] duration-300 group"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-red-300/60 to-transparent" />
              <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-100 transition-colors duration-200">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-brand-navy text-lg mb-2">{p.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div data-anim="scale-up" style={{ transitionDelay: "450ms" }} className="bg-brand-navy rounded-2xl p-6 border border-brand-cyan/20 flex flex-col justify-between">
            <div>
              <div className="text-brand-cyan text-sm font-semibold tracking-wide mb-2">The Solution</div>
              <h3 className="font-display font-bold text-white text-lg mb-3">One Connected Automation System</h3>
              <p className="text-brand-sky/70 text-sm leading-relaxed">
                Join our live training and see how a connected business automation system solves every one of these problems — in one platform.
              </p>
            </div>
            <a
              href="#register"
              className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-brand-cyan text-brand-navy hover:bg-brand-glow shadow-cyan hover:shadow-cyan-lg transition-[background-color,box-shadow] duration-200"
            >
              Register Free
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
