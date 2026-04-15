const benefits = [
  {
    number: "01",
    title: "Lead Capture From Every Source",
    desc: "Learn how to connect forms, ads, website chat, and phone calls into a single lead inbox — so no inquiry slips through.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Automated SMS & Email Follow-Up",
    desc: "See how to build follow-up sequences that go out automatically — within minutes of a new lead coming in — via SMS and email.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Booking Calendar Integration",
    desc: "Connect your scheduling calendar so leads can book directly from a text or email — no phone tag, no friction.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "CRM Pipeline Organization",
    desc: "Walk through how to structure your pipeline stages so every lead has a clear status, next step, and owner — visible at a glance.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Missed-Call Text-Back",
    desc: "Learn how to set up automatic text responses when a call goes unanswered — so you never lose a lead to voicemail again.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Inquiry-to-Booking Conversion",
    desc: "Understand the full flow from first contact to confirmed appointment — and how automation closes the gap at every step.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function TrainingBenefits() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-brand-teal text-xs font-semibold tracking-wide uppercase">What You'll Learn</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Training Benefits
          </h2>
          <p className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Every topic covered in the live session is directly applicable to your local service business — no theory, all implementation.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="
                group relative bg-white rounded-2xl p-6
                border border-slate-100 shadow-card
                hover:shadow-card-hover hover:-translate-y-1
                hover:border-brand-cyan/30
                transition-[box-shadow,transform,border-color] duration-300
              "
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-4 font-display font-bold text-5xl text-slate-50 group-hover:text-brand-cyan/10 transition-colors duration-300 leading-none select-none">
                {b.number}
              </div>

              {/* Icon */}
              <div className="
                w-10 h-10 rounded-xl mb-4 flex items-center justify-center
                bg-brand-cyan/8 border border-brand-cyan/20 text-brand-teal
                group-hover:bg-brand-cyan/15 group-hover:border-brand-cyan/40
                transition-colors duration-200
              ">
                {b.icon}
              </div>

              <h3 className="font-display font-bold text-brand-navy text-lg leading-snug mb-2">
                {b.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 text-center">
          <a
            href="#register"
            className="
              inline-flex items-center gap-2.5
              px-8 py-4 rounded-xl text-base font-bold
              bg-brand-navy text-brand-cyan
              hover:bg-brand-navy/90
              shadow-float
              border border-brand-cyan/20 hover:border-brand-cyan/40
              transition-[background-color,border-color,box-shadow] duration-200
              hover:-translate-y-0.5 active:translate-y-0
            "
          >
            Book My Live Training
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-brand-gray text-sm mt-3">Free to attend · April 17, 2026 · Limited spots</p>
        </div>
      </div>
    </section>
  );
}
