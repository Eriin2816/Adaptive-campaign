"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Animated background: floating orbs + particle dots ─── */
function AnimatedBackground() {
  return (
    <>
      {/* Orb 1 — top-left slow drift */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700, height: 700,
          top: "-20%", left: "-15%",
          background: "radial-gradient(circle, rgba(0,223,252,0.09) 0%, transparent 70%)",
          animation: "orbDrift1 18s ease-in-out infinite",
          filter: "blur(80px)",
        }}
      />
      {/* Orb 2 — bottom-right counter-drift */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600, height: 600,
          bottom: "-10%", right: "-10%",
          background: "radial-gradient(circle, rgba(13,172,201,0.10) 0%, transparent 70%)",
          animation: "orbDrift2 22s ease-in-out infinite",
          filter: "blur(70px)",
        }}
      />
      {/* Orb 3 — center pulse */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          top: "30%", left: "40%",
          background: "radial-gradient(circle, rgba(0,223,252,0.05) 0%, transparent 70%)",
          animation: "orbDrift3 14s ease-in-out infinite",
          filter: "blur(60px)",
        }}
      />

      {/* Particle dots — scattered small glowing points */}
      {[
        { top: "12%",  left: "8%",   size: 3, delay: "0s",    dur: "4s"  },
        { top: "25%",  left: "22%",  size: 2, delay: "1.2s",  dur: "5s"  },
        { top: "60%",  left: "5%",   size: 2, delay: "0.5s",  dur: "6s"  },
        { top: "78%",  left: "18%",  size: 3, delay: "2s",    dur: "4.5s"},
        { top: "8%",   left: "55%",  size: 2, delay: "0.8s",  dur: "7s"  },
        { top: "40%",  left: "72%",  size: 2, delay: "3s",    dur: "5.5s"},
        { top: "85%",  left: "80%",  size: 3, delay: "1.5s",  dur: "6s"  },
        { top: "55%",  left: "90%",  size: 2, delay: "0.3s",  dur: "4s"  },
        { top: "18%",  left: "88%",  size: 2, delay: "2.5s",  dur: "5s"  },
        { top: "70%",  left: "50%",  size: 3, delay: "1s",    dur: "8s"  },
        { top: "32%",  left: "38%",  size: 2, delay: "3.5s",  dur: "4s"  },
        { top: "90%",  left: "35%",  size: 2, delay: "0.7s",  dur: "6s"  },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: p.top, left: p.left,
            width: p.size, height: p.size,
            background: "rgba(0,223,252,0.6)",
            boxShadow: `0 0 ${p.size * 4}px rgba(0,223,252,0.8)`,
            animation: `particlePulse ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {/* Horizontal data-flow lines */}
      {[
        { top: "22%", width: "18%", left: "3%",  delay: "0s",   dur: "3s"  },
        { top: "58%", width: "12%", left: "0%",  delay: "1.5s", dur: "4s"  },
        { top: "75%", width: "15%", left: "5%",  delay: "0.8s", dur: "3.5s"},
        { top: "35%", width: "10%", right: "2%", delay: "2s",   dur: "4s"  },
        { top: "65%", width: "14%", right: "5%", delay: "0.4s", dur: "3s"  },
      ].map((l, i) => (
        <div
          key={i}
          className="absolute pointer-events-none overflow-hidden"
          style={{
            top: l.top, width: l.width,
            left: "left" in l ? l.left : "auto",
            right: "right" in l ? l.right : "auto",
            height: 1,
          }}
        >
          <div
            style={{
              width: "100%", height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(0,223,252,0.5), transparent)",
              animation: `dataFlow ${l.dur} linear ${l.delay} infinite`,
            }}
          />
        </div>
      ))}

      {/* CSS keyframes injected inline */}
      <style>{`
        @keyframes orbDrift1 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(60px,-40px) scale(1.1); }
          66%      { transform: translate(-30px,50px) scale(0.95); }
        }
        @keyframes orbDrift2 {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(-50px,30px) scale(1.05); }
          66%      { transform: translate(40px,-60px) scale(0.9); }
        }
        @keyframes orbDrift3 {
          0%,100% { transform: translate(0,0) scale(1); opacity: 0.6; }
          50%      { transform: translate(30px,-20px) scale(1.15); opacity: 1; }
        }
        @keyframes particlePulse {
          0%,100% { opacity: 0.2; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.8); }
        }
        @keyframes dataFlow {
          0%   { transform: translateX(-100%); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes cyanShimmer {
          0%,100% { background-position: -200% center; }
          50%      { background-position: 200% center; }
        }
        @keyframes ringPulse {
          0%   { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0;   transform: scale(1.7); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

/* ─── Animated stat counter ─── */
function StatCounter({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / 40;
    const id = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(start));
    }, 35);
    return () => clearInterval(id);
  }, [started, target]);

  return (
    <div ref={ref} className="px-4 first:pl-0 last:pr-0 text-center">
      <div
        className="text-xl font-bold font-display"
        style={{
          background: "linear-gradient(90deg, #00DFFC, #34D4F0, #00DFFC)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "cyanShimmer 3s linear infinite",
        }}
      >
        {count}{suffix}
      </div>
      <div className="text-[10px] text-brand-sky/60 mt-0.5">{label}</div>
    </div>
  );
}

/* ─── Mini CRM Pipeline Card ─── */
function PipelineCard() {
  return (
    <div className="bg-white rounded-xl p-3 shadow-float border border-slate-100 w-full scan-line">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[10px] font-semibold text-brand-navy tracking-wide uppercase">CRM Pipeline</span>
        <span className="text-[9px] text-emerald-500 font-medium flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block animate-pulse" />Live
        </span>
      </div>
      <div className="flex gap-1.5">
        {[
          { label: "Lead",      count: "12", color: "bg-sky-100 text-sky-700 border-sky-200"       },
          { label: "Contacted", count: "8",  color: "bg-amber-50 text-amber-700 border-amber-200"  },
          { label: "Qualified", count: "5",  color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
        ].map((stage) => (
          <div key={stage.label} className={`flex-1 rounded-lg px-1.5 py-1.5 border text-center ${stage.color}`}>
            <div className="text-sm font-bold">{stage.count}</div>
            <div className="text-[8px] font-medium leading-none mt-0.5">{stage.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-2.5 space-y-1">
        {[
          { name: "Sarah J.", stage: "Qualified", dot: "bg-emerald-500" },
          { name: "David T.", stage: "Contacted", dot: "bg-amber-400"   },
        ].map((lead) => (
          <div key={lead.name} className="flex items-center gap-2 px-2 py-1 rounded-lg bg-slate-50">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${lead.dot}`} />
            <span className="text-[9px] font-medium text-slate-700 flex-1">{lead.name}</span>
            <span className="text-[8px] text-slate-500">{lead.stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mini Automation Flow Card ─── */
function AutomationCard() {
  return (
    <div className="bg-white rounded-xl p-3 shadow-float border border-slate-100 w-full">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-[10px] font-semibold text-brand-navy tracking-wide uppercase">Automation Flow</span>
        <span className="text-[9px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded-full border border-emerald-200">Active</span>
      </div>
      <div className="space-y-1.5">
        {[
          { icon: "⚡", label: "Trigger Lead Form", color: "bg-brand-cyan/10 border-brand-cyan/20 text-brand-teal" },
          { icon: "✓",  label: "Check Condition",  color: "bg-amber-50 border-amber-200 text-amber-700"           },
          { icon: "✉",  label: "Send Email + SMS", color: "bg-purple-50 border-purple-200 text-purple-700"        },
          { icon: "＋", label: "Add to CRM",       color: "bg-emerald-50 border-emerald-200 text-emerald-700"     },
        ].map((step) => (
          <div key={step.label} className="flex items-center gap-2">
            <div className={`w-5 h-5 rounded-md border flex items-center justify-center text-[10px] font-bold shrink-0 ${step.color}`}>
              {step.icon}
            </div>
            <div className="text-[9px] text-slate-700 font-medium">{step.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Lead Notification Card ─── */
function LeadNotifCard() {
  return (
    <div className="bg-brand-navy rounded-xl p-3 shadow-float border border-brand-cyan/20 w-full">
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 rounded-full bg-brand-cyan flex items-center justify-center shrink-0">
          <svg className="w-3 h-3 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[9px] font-bold text-brand-cyan tracking-widest uppercase">New Lead</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
          </div>
          <div className="text-[10px] font-semibold text-white">Alex B.</div>
          <div className="text-[9px] text-brand-sky/80 mt-0.5">HVAC Repair · Just now</div>
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">
        <button className="flex-1 text-[9px] font-semibold bg-brand-cyan text-brand-navy py-1 rounded-lg">SMS Now</button>
        <button className="flex-1 text-[9px] font-semibold bg-white/10 text-white py-1 rounded-lg border border-white/15">View Details</button>
      </div>
    </div>
  );
}

/* ─── Calendar Booking Card ─── */
function CalendarCard() {
  const days  = ["Su","Mo","Tu","We","Th","Fr","Sa"];
  const dates = [null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <div className="bg-white rounded-xl p-3 shadow-float border border-slate-100 w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold text-brand-navy">April 2026</span>
        <span className="text-[9px] bg-brand-cyan/10 text-brand-teal px-1.5 py-0.5 rounded-full border border-brand-cyan/20">Booking</span>
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {days.map((d) => (
          <div key={d} className="text-center text-[8px] text-slate-400 font-semibold py-0.5">{d}</div>
        ))}
        {dates.map((d, i) => (
          <div
            key={i}
            className={`text-center text-[9px] py-0.5 rounded-md font-medium ${
              d === 17 ? "bg-brand-cyan text-brand-navy font-bold" :
              d === null ? "" :
              d < 17 ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {d || ""}
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
        <span className="text-[9px] text-slate-600">Apr 17 · 6:00 PM PDT · Live Training</span>
      </div>
    </div>
  );
}

/* ─── Main Hero ─── */
export default function HeroCampaign() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Staggered fade-up on load
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll(".animate-on-load");
    if (!els) return;
    els.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0) translateX(0)";
      }, 100 + i * 130);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen bg-brand-dark overflow-hidden flex items-center pt-[120px]"
    >
      {/* ── Animated background ── */}
      <AnimatedBackground />
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Date badge */}
            <div
              className="animate-on-load inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/8 mb-6"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow" />
              <span className="text-brand-cyan text-xs font-semibold tracking-widest uppercase">
                Live · April 17, 2026 · 6:00 PM PDT / 9:00 PM ET
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-on-load font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-5"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            >
              Join Our Live Training &amp;{" "}
              {/* Animated shimmer on cyan portion */}
              <span
                style={{
                  background: "linear-gradient(90deg, #00DFFC 0%, #34D4F0 30%, #ffffff 50%, #34D4F0 70%, #00DFFC 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "cyanShimmer 4s linear infinite",
                }}
              >
                Get 60 Days Free
              </span>{" "}
              Access to a GHL Sub-Account
            </h1>

            {/* Subheadline */}
            <p
              className="animate-on-load text-brand-sky/80 text-base sm:text-lg leading-relaxed mb-6 max-w-xl"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            >
              See how local service businesses use automation to capture leads, follow up instantly,
              book more appointments, and manage everything from one connected system.
            </p>

            {/* Urgency line */}
            <div
              className="animate-on-load flex items-start gap-2.5 p-4 rounded-xl glass-dark cyan-border mb-8"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            >
              <svg className="w-5 h-5 text-brand-cyan mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-white/80 leading-relaxed">
                <strong className="text-white">Join us live on April 17, 2026 at 6:00 PM PDT / 9:00 PM ET</strong> and
                learn how to use a GHL sub-account to capture leads, automate follow-up, and book more appointments.
              </p>
            </div>

            {/* CTA buttons with ring-pulse animation */}
            <div
              className="animate-on-load flex flex-col sm:flex-row gap-3"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            >
              {/* Primary CTA with pulse ring */}
              <div className="relative inline-flex">
                <div
                  className="absolute inset-0 rounded-xl bg-brand-cyan/40"
                  style={{ animation: "ringPulse 2s ease-out infinite" }}
                />
                <a
                  href="#register"
                  className="
                    relative inline-flex items-center justify-center gap-2
                    px-7 py-4 rounded-xl text-base font-bold
                    bg-brand-cyan text-brand-navy
                    hover:bg-brand-glow
                    shadow-cyan hover:shadow-cyan-lg
                    transition-[background-color,box-shadow,transform] duration-200
                    hover:-translate-y-0.5 active:translate-y-0
                  "
                >
                  Reserve My April 17 Training Spot
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              <a
                href="#register"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-4 rounded-xl text-base font-semibold
                  text-brand-cyan border border-brand-cyan/30
                  hover:bg-brand-cyan/10 hover:border-brand-cyan/60
                  transition-[background-color,border-color] duration-200
                "
              >
                Claim My 60-Day GHL Trial
              </a>
            </div>

            {/* Trust micro-copy */}
            <div
              className="animate-on-load flex flex-wrap items-center gap-4 mt-6"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
            >
              {["No credit card required", "Free for 60 days", "Built for local businesses"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-brand-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-sky/70 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Dashboard Mockup ── */}
          <div className="relative hidden lg:block">
            {/* Outer glow */}
            <div className="absolute inset-0 blur-[60px] bg-brand-cyan/10 rounded-3xl scale-110" />

            <div className="relative space-y-3">
              {/* Top row */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="animate-on-load"
                  style={{ opacity: 0, transform: "translateX(24px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s" }}
                >
                  <PipelineCard />
                </div>
                <div
                  className="animate-on-load"
                  style={{ opacity: 0, transform: "translateX(24px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.75s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.75s" }}
                >
                  <AutomationCard />
                </div>
              </div>

              {/* Bottom row */}
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="animate-on-load"
                  style={{ opacity: 0, transform: "translateX(24px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.9s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.9s" }}
                >
                  <LeadNotifCard />
                </div>
                <div
                  className="animate-on-load"
                  style={{ opacity: 0, transform: "translateX(24px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 1.05s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 1.05s" }}
                >
                  <CalendarCard />
                </div>
              </div>

              {/* Stats strip with animated counters */}
              <div
                className="animate-on-load glass-dark rounded-xl p-3 border border-brand-cyan/15"
                style={{ opacity: 0, transform: "translateX(24px)", transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 1.2s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 1.2s" }}
              >
                <div className="grid grid-cols-3 divide-x divide-brand-cyan/10">
                  <StatCounter target={2400} suffix="+" label="Leads Captured" />
                  <div className="px-4 text-center">
                    <div
                      className="text-xl font-bold font-display"
                      style={{
                        background: "linear-gradient(90deg,#00DFFC,#34D4F0,#00DFFC)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "cyanShimmer 3s linear infinite",
                      }}
                    >
                      &lt;2 min
                    </div>
                    <div className="text-[10px] text-brand-sky/60 mt-0.5">Avg Response</div>
                  </div>
                  <StatCounter target={68} suffix="%" label="More Bookings" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
