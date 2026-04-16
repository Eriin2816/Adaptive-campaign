"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Is the GHL trial really free for 60 days?",
    a: "Yes. Registered attendees who attend the live training will receive access to a GoHighLevel sub-account through Adaptive AI at no cost for 60 days. There is no credit card required to claim it. At the end of the trial, you can choose to continue with a paid plan or cancel — there is no automatic charge.",
  },
  {
    q: "Do I need technical experience to follow along?",
    a: "No technical experience is required. The training is structured for business owners and operators, not developers. We walk through everything step by step in plain language, with a clear focus on practical setup — not technical complexity.",
  },
  {
    q: "Is this for beginners?",
    a: "Yes. Whether you've never used a CRM before or have tried tools that didn't stick, this training starts from the fundamentals. You'll leave with a clear understanding of the system and how to apply it to your business.",
  },
  {
    q: "Can I use this for my local service business?",
    a: "Absolutely. The training and the GHL sub-account are specifically designed around the workflows of local service businesses — contractors, HVAC, plumbers, restoration companies, real estate professionals, property managers, and any business that depends on booked appointments.",
  },
  {
    q: "What happens after the 60-day trial ends?",
    a: "At the end of your trial, you'll have the option to continue your GHL sub-account on a paid plan. Adaptive AI will walk you through your options. If you decide to continue, we can help you manage, optimize, and expand your system. If you decide not to continue, your account simply closes — no penalty.",
  },
  {
    q: "Will Adaptive AI help me set things up?",
    a: "Yes. In addition to the live training walkthrough, Adaptive AI provides guidance for attendees who want help configuring their sub-account. If you're interested in having us build and manage your automation system for you, we offer that as a done-for-you service. Details will be available after the training.",
  },
];

export default function FAQCampaign() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div data-anim="fade-in" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
            <span className="text-brand-navy text-xs font-semibold tracking-wide uppercase">Common Questions</span>
          </div>
          <h2 data-anim="blur-in" style={{ transitionDelay: "100ms" }} className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p data-anim="fade-up" style={{ transitionDelay: "200ms" }} className="text-brand-gray text-base leading-relaxed">
            Answers to the most common questions we receive about the training and GHL trial.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-anim="fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`rounded-2xl border overflow-hidden transition-[border-color,box-shadow] duration-200 ${
                  isOpen
                    ? "border-brand-cyan/30 shadow-[0_4px_20px_rgba(0,223,252,0.08)]"
                    : "border-slate-100 hover:border-brand-cyan/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-brand-light transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm sm:text-base leading-snug ${isOpen ? "text-brand-teal" : "text-brand-navy"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-[background-color,border-color,transform] duration-200 ${isOpen ? "bg-brand-cyan/15 border-brand-cyan/30 rotate-45" : "bg-slate-50 border-slate-200"}`}>
                    <svg className={`w-3.5 h-3.5 ${isOpen ? "text-brand-teal" : "text-brand-gray"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="px-6 pb-5 pt-0 border-t border-slate-100">
                    <p className="text-brand-gray text-sm leading-relaxed pt-4">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* More questions */}
        <div data-anim="fade-up" style={{ transitionDelay: "480ms" }} className="mt-10 text-center p-6 rounded-2xl bg-brand-light border border-brand-navy/8">
          <p className="text-brand-navy font-semibold mb-1">Still have questions?</p>
          <p className="text-brand-gray text-sm mb-4">Reach out directly — we're happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:3234982131" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-brand-navy/15 text-brand-navy hover:bg-white transition-colors duration-200">
              (323) 498-2131
            </a>
            <a href="mailto:steve@adaptiveautomate.com" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-navy text-brand-cyan hover:bg-brand-navy/90 transition-colors duration-200">
              Email Adaptive AI
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
