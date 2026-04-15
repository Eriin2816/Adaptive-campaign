const industries = [
  {
    title: "Contractors",
    desc: "General, specialty, and trade contractors who depend on job bookings and local reputation.",
    icon: "🔧",
  },
  {
    title: "Pool Service Companies",
    desc: "Seasonal and year-round pool service businesses that need consistent lead flow and scheduling.",
    icon: "🏊",
  },
  {
    title: "HVAC Businesses",
    desc: "Heating and cooling companies handling high inquiry volume and urgent service calls.",
    icon: "❄️",
  },
  {
    title: "Plumbers",
    desc: "Residential and commercial plumbing businesses where fast response wins the call.",
    icon: "🚿",
  },
  {
    title: "Electricians",
    desc: "Licensed electricians competing for residential and commercial service calls.",
    icon: "⚡",
  },
  {
    title: "Restoration Companies",
    desc: "Water, fire, and mold restoration businesses that need rapid lead response and solid follow-up.",
    icon: "🏗️",
  },
  {
    title: "Real Estate Professionals",
    desc: "Agents and brokers who need nurture systems for longer buying cycles and high-volume inquiries.",
    icon: "🏡",
  },
  {
    title: "Property Managers",
    desc: "Companies managing multiple properties who need scalable lead and communication systems.",
    icon: "🏢",
  },
  {
    title: "Any Appointment-Driven Local Business",
    desc: "If your business depends on booked appointments, this system is designed for you.",
    icon: "📅",
  },
];

export default function WhoIsFor() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
              <span className="text-brand-navy text-xs font-semibold tracking-wide uppercase">Right For You?</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-4">
              Who This Training Is For
            </h2>
            <p className="text-brand-gray text-base leading-relaxed">
              If your business runs on appointments and local trust, this training was built for your workflow.
            </p>
            <a
              href="#register"
              className="
                mt-6 inline-flex items-center gap-2
                px-5 py-3 rounded-xl text-sm font-bold
                bg-brand-cyan text-brand-navy
                hover:bg-brand-glow
                shadow-cyan hover:shadow-cyan-lg
                transition-[background-color,box-shadow] duration-200
              "
            >
              Register Now — It's Free
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-3 p-4 rounded-xl
                  border border-slate-100 bg-brand-light
                  hover:border-brand-cyan/30 hover:bg-brand-mist
                  hover:-translate-y-0.5
                  transition-[border-color,background-color,transform] duration-200
                  group
                "
              >
                <span className="text-2xl leading-none mt-0.5 shrink-0">{ind.icon}</span>
                <div>
                  <div className="font-semibold text-brand-navy text-sm leading-snug mb-0.5 group-hover:text-brand-teal transition-colors duration-200">
                    {ind.title}
                  </div>
                  <div className="text-brand-gray text-xs leading-relaxed">{ind.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
