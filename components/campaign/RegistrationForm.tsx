"use client";

import { useState } from "react";

const businessTypes = [
  "3PL Logistics Companies",
  "ADU Builders",
  "Car Dealerships",
  "Cleaning Services",
  "Contractor (General)",
  "Developers",
  "Ecommerce Business Owner",
  "Electrical",
  "Engineer",
  "Home Security",
  "HVAC",
  "Landscaping / Lawn Care",
  "Pest Control",
  "Plumbing",
  "Pool Contractor",
  "Property Management",
  "Real Estate",
  "Restoration",
  "Roofers",
  "Smart Home / AV",
  "Other Local Service Business",
];

const challenges = [
  { value: "intent-leads",   label: "Generating Leads through Intent Buyers" },
  { value: "automations",    label: "Setting Up Business Automations" },
  { value: "invoice-followup", label: "Estimate and Invoice Follow Ups" },
  { value: "review-social",  label: "Review and Social Media Management" },
  { value: "voice-ai",       label: "Voice AI Assistant" },
  { value: "advertising",    label: "Organic and Paid Advertising" },
];

const timeSlots = [
  "Every Monday — 9:00 AM PDT",
  "Every Thursday — 6:00 PM PDT",
];

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    challenges: [] as string[],
    preferredTime: "",
    message: "",
    interested1on1: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleChallenge = (value: string) => {
    setForm((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(value)
        ? prev.challenges.filter((c) => c !== value)
        : [...prev.challenges, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const payload = {
        full_name:      form.fullName,
        business_name:  form.businessName,
        email:          form.email,
        phone:          form.phone,
        website:        form.website,
        business_type:  form.businessType,
        challenges:        form.challenges.join(", "),
        preferred_time:    form.preferredTime,
        message:           form.message,
        interested_1on1:   form.interested1on1 ? "Yes" : "No",
      };

      const res = await fetch(
        "https://services.leadconnectorhq.com/hooks/NxERAyQfhsJMdBmOZgNN/webhook-trigger/85b16dd7-81b4-43bd-afa2-e8bb7912044b",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error(`Webhook returned ${res.status}`);

      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" className="bg-brand-light dot-grid py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl p-10 shadow-float border border-brand-cyan/20">
            <div className="w-16 h-16 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-brand-navy text-2xl sm:text-3xl mb-3">
              You're Registered!
            </h3>
            <p className="text-brand-gray leading-relaxed mb-2">
              Your spot for the <strong className="text-brand-navy">April 17 Live Training</strong> is confirmed.
            </p>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              Check your email for confirmation details. We'll send a reminder and the event link before the session. If you have any questions, contact us at{" "}
              <a href="mailto:steve@adaptiveautomate.com" className="text-brand-teal underline">
                steve@adaptiveautomate.com
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:3234982131"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border border-brand-navy/15 text-brand-navy hover:bg-brand-light transition-colors duration-200"
              >
                (323) 498-2131
              </a>
              <a
                href="mailto:steve@adaptiveautomate.com"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-brand-cyan text-brand-navy hover:bg-brand-glow shadow-cyan transition-[background-color] duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="bg-brand-light dot-grid py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div data-anim="fade-in" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow" />
            <span className="text-brand-teal text-xs font-semibold tracking-wide uppercase">
              April 17, 2026 · Limited Spots
            </span>
          </div>
          <h2 data-anim="blur-in" style={{ transitionDelay: "100ms" }} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Save Your Spot for the Live Training
          </h2>
          <p data-anim="fade-up" style={{ transitionDelay: "200ms" }} className="text-brand-gray text-base sm:text-lg leading-relaxed">
            Register below to secure your seat and claim your 60-day free trial.
          </p>
        </div>

        {/* Form card */}
        <form
          data-anim="scale-up"
          style={{ transitionDelay: "300ms" }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-float border border-slate-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Full Name */}
            <div className="sm:col-span-1">
              <label htmlFor="fullName" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={form.fullName}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm placeholder:text-slate-400
                  bg-brand-light focus:bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                "
              />
            </div>

            {/* Business Name */}
            <div className="sm:col-span-1">
              <label htmlFor="businessName" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Business Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={form.businessName}
                onChange={handleChange}
                placeholder="Smith HVAC & Services"
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm placeholder:text-slate-400
                  bg-brand-light focus:bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                "
              />
            </div>

            {/* Email */}
            <div className="sm:col-span-1">
              <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@smithhvac.com"
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm placeholder:text-slate-400
                  bg-brand-light focus:bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                "
              />
            </div>

            {/* Phone */}
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm placeholder:text-slate-400
                  bg-brand-light focus:bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                "
              />
            </div>

            {/* Website */}
            <div className="sm:col-span-1">
              <label htmlFor="website" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Website
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="https://smithhvac.com"
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm placeholder:text-slate-400
                  bg-brand-light focus:bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                "
              />
            </div>

            {/* Business Type */}
            <div className="sm:col-span-1">
              <label htmlFor="businessType" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Business Type <span className="text-red-400">*</span>
              </label>
              <select
                id="businessType"
                name="businessType"
                required
                value={form.businessType}
                onChange={handleChange}
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm bg-brand-light focus:bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                  appearance-none cursor-pointer
                "
              >
                <option value="" disabled>Select your business type</option>
                {businessTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Biggest Challenge — multi-select */}
            <div className="sm:col-span-2">
              <fieldset>
                <legend className="block text-sm font-semibold text-brand-navy mb-1">
                  Biggest Challenge Right Now <span className="text-red-400">*</span>
                </legend>
                <p className="text-xs text-brand-gray mb-2.5">Select all that apply</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {challenges.map((c) => {
                    const checked = form.challenges.includes(c.value);
                    return (
                      <label
                        key={c.value}
                        className={`
                          flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer
                          transition-[background-color,border-color,box-shadow] duration-150 text-sm
                          ${checked
                            ? "border-brand-cyan bg-brand-cyan/10 text-brand-teal font-medium shadow-[0_0_0_1px_rgba(0,223,252,0.3)]"
                            : "border-slate-200 bg-brand-light text-brand-gray hover:border-brand-sky hover:bg-brand-mist"
                          }
                        `}
                      >
                        <input
                          type="checkbox"
                          value={c.value}
                          checked={checked}
                          onChange={() => toggleChallenge(c.value)}
                          className="sr-only"
                        />
                        {/* Custom checkbox */}
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-[background-color,border-color] duration-150 ${checked ? "bg-brand-cyan border-brand-cyan" : "border-slate-300 bg-white"}`}>
                          {checked && (
                            <svg className="w-2.5 h-2.5 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        {c.label}
                      </label>
                    );
                  })}
                </div>
                {/* Hidden required-style validation hint */}
                {form.challenges.length === 0 && (
                  <input
                    type="text"
                    required
                    value=""
                    onChange={() => {}}
                    className="sr-only"
                    aria-hidden="true"
                    tabIndex={-1}
                  />
                )}
              </fieldset>
            </div>

            {/* Preferred Date/Time */}
            <div className="sm:col-span-2">
              <label htmlFor="preferredTime" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Preferred Training Date/Time <span className="text-red-400">*</span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                value={form.preferredTime}
                onChange={handleChange}
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm bg-brand-light focus:bg-white
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                  appearance-none cursor-pointer
                "
              >
                <option value="" disabled>Select your preference</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-1.5">
                Anything Specific You'd Like Covered?{" "}
                <span className="text-brand-gray font-normal">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your current setup or a specific question you want answered during the session..."
                className="
                  w-full px-4 py-3 rounded-xl border border-slate-200
                  text-brand-navy text-sm placeholder:text-slate-400
                  bg-brand-light focus:bg-white resize-none
                  focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 focus:border-brand-cyan
                  transition-[background-color,border-color,box-shadow] duration-200
                "
              />
            </div>

            {/* 1-on-1 interest + Book a Call CTA */}
            <div className="sm:col-span-2 mt-2">
              <div className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-5">
                <label className="flex items-start gap-3 cursor-pointer mb-4">
                  <div
                    onClick={() => setForm((prev) => ({ ...prev, interested1on1: !prev.interested1on1 }))}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-[background-color,border-color] duration-150 cursor-pointer ${form.interested1on1 ? "bg-brand-cyan border-brand-cyan" : "border-slate-300 bg-white"}`}
                  >
                    {form.interested1on1 && (
                      <svg className="w-3 h-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-brand-navy">Interested in 1-on-1 Marketing Sessions</span>
                    <p className="text-xs text-brand-gray mt-0.5 leading-relaxed">Get personalized strategy and setup guidance directly from Adaptive AI.</p>
                  </div>
                </label>
                <a
                  href="https://calendly.com/adaptiveautomate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-2.5
                    px-8 py-4 rounded-xl text-base font-bold
                    bg-brand-navy text-brand-cyan
                    hover:bg-brand-navy/90
                    shadow-float border border-brand-cyan/25 hover:border-brand-cyan/50
                    transition-[background-color,border-color,box-shadow] duration-200
                    hover:-translate-y-0.5 active:translate-y-0
                  "
                >
                  Book a 30min Call
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-7">
            {error && (
              <div className="mb-4 flex items-start gap-3 px-4 py-3 rounded-xl border border-red-200 bg-red-50 text-red-700 text-sm">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Something went wrong submitting your registration. Please try again or contact us at <a href="mailto:steve@adaptiveautomate.com" className="underline font-medium">steve@adaptiveautomate.com</a>.</span>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full flex items-center justify-center gap-3
                px-8 py-4 rounded-xl text-base font-bold
                bg-brand-cyan text-brand-navy
                hover:bg-brand-glow
                disabled:opacity-60 disabled:cursor-not-allowed
                shadow-cyan hover:shadow-cyan-lg
                transition-[background-color,box-shadow,opacity] duration-200
                focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2
              "
            >
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Securing Your Spot...
                </>
              ) : (
                <>
                  Reserve My April 17 Training Spot
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-center text-xs text-brand-gray mt-3 leading-relaxed">
              By registering, you agree to receive training details and follow-up from Adaptive AI.
              No credit card required. Unsubscribe at any time.
            </p>
          </div>
        </form>

        {/* Contact bar below form */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-brand-gray">
          <span>Questions?</span>
          <a href="tel:3234982131" className="flex items-center gap-1.5 text-brand-navy font-medium hover:text-brand-teal transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (323) 498-2131
          </a>
          <span className="hidden sm:inline text-slate-300">·</span>
          <a href="mailto:steve@adaptiveautomate.com" className="flex items-center gap-1.5 text-brand-navy font-medium hover:text-brand-teal transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            steve@adaptiveautomate.com
          </a>
        </div>
      </div>
    </section>
  );
}
