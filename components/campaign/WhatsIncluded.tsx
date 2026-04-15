const included = [
  {
    title: "Live Walkthrough",
    desc: "A step-by-step demonstration of how to set up and navigate the GHL platform — no prior experience required.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.882V15.5a1 1 0 01-1.447.894L15 14M4 6h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "GHL Sub-Account Access",
    desc: "Every registered attendee receives a 60-day free sub-account so you can follow along and start building immediately.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    title: "CRM Pipeline Overview",
    desc: "Learn how to structure your sales pipeline so every lead is organized, tracked, and progressing toward a booking.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    title: "Automation Workflow Examples",
    desc: "See real automation sequences — lead capture triggers, SMS follow-up, email nurture, and missed-call text-back in action.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Booking Calendar Setup Overview",
    desc: "Walk through how to connect a booking calendar and embed it into your workflow so leads can schedule without phone calls.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Live Q&A Session",
    desc: "Get your specific questions answered during a dedicated Q&A — tailored to your business type and situation.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Next-Step Strategy Guidance",
    desc: "After the training, you'll have a clear picture of what to build first, how to prioritize, and what to focus on for immediate impact.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-brand-light dot-grid py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-brand-teal text-xs font-semibold tracking-wide uppercase">Full Session Breakdown</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            What's Included
          </h2>
          <p className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            One structured session covering everything you need to start building an automated lead system for your service business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {included.map((item, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl p-5 border border-slate-100 shadow-card
                hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-cyan/25
                transition-[box-shadow,transform,border-color] duration-300 group
              "
            >
              <div className="
                w-10 h-10 rounded-xl mb-4 flex items-center justify-center
                bg-brand-navy/5 border border-brand-navy/8 text-brand-teal
                group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/25 group-hover:text-brand-teal
                transition-colors duration-200
              ">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-brand-navy text-sm leading-snug mb-1.5">
                {item.title}
              </h3>
              <p className="text-brand-gray text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* Summary card */}
          <div className="bg-brand-cyan rounded-2xl p-5 flex flex-col justify-between sm:col-span-1">
            <div>
              <div className="text-brand-navy font-display font-bold text-sm mb-1.5">Training Date</div>
              <div className="font-display font-bold text-brand-navy text-xl leading-tight mb-3">
                April 17, 2026<br />6:00 PM PDT
              </div>
              <p className="text-brand-navy/70 text-xs leading-relaxed">
                Live online session · Interactive · Q&amp;A included
              </p>
            </div>
            <a
              href="#register"
              className="
                mt-4 inline-flex items-center justify-center gap-1.5
                px-4 py-2.5 rounded-xl text-xs font-bold
                bg-brand-navy text-brand-cyan
                hover:bg-brand-navy/90
                transition-colors duration-200
              "
            >
              Reserve Your Spot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
