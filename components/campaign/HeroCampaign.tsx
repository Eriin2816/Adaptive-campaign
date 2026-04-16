"use client";

import { useEffect, useRef } from "react";

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

    </>
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

          {/* ── Right: YouTube Shorts Video ── */}
          <div className="relative hidden lg:flex justify-center items-center py-8">
            {/* Ambient glow behind video */}
            <div className="absolute inset-0 blur-[100px] bg-brand-cyan/8 rounded-3xl scale-110 pointer-events-none" />

            {/* Outer decorative ring */}
            <div className="absolute w-[310px] h-[560px] rounded-[32px] border border-brand-cyan/10 pointer-events-none" />

            {/* Video frame */}
            <div
              className="animate-on-load relative rounded-[20px] overflow-hidden border border-brand-cyan/25 shadow-[0_0_80px_rgba(0,223,252,0.12),0_24px_60px_rgba(0,0,0,0.5)]"
              style={{
                width: 270,
                height: 480,
                opacity: 0,
                transform: "translateX(24px)",
                transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/EbxaJYarED4?rel=0&modestbranding=1"
                title="Adaptive AI — See How It Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Watch preview badge */}
            <div
              className="animate-on-load absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-cyan/20 whitespace-nowrap"
              style={{
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1) 0.9s, transform 0.7s cubic-bezier(0.22,1,0.36,1) 0.9s",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse-slow shrink-0" />
              <span className="text-brand-cyan text-xs font-semibold">Watch a Quick Preview</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
