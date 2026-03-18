import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import Counter from "./components/Counter";
import Particles from "./components/Particles";
import Marquee from "./components/Marquee";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import TextCycle from "./components/TextCycle";
import ThemeShift from "./components/ThemeShift";
import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)", color: "var(--t1)" }}>
      <ScrollProgress />
      <CursorGlow />
      <ThemeShift />
      <Particles />

      {/* ── NAV ─────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,8,26,0.85)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid var(--border-accent)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/assets/icon.png" alt="Stride" width={34} height={34} className="rounded-xl" style={{ boxShadow: "0 0 16px rgba(16,185,129,0.3)" }} />
            <span className="font-black text-lg tracking-tight gradient-text">Stride</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/blog" className="text-sm font-medium hidden sm:block transition-colors hover:text-white" style={{ color: "var(--t3)" }}>Blog</a>
            <a href="#section-faq" className="text-sm font-medium hidden sm:block transition-colors hover:text-white" style={{ color: "var(--t3)" }}>FAQ</a>
            <a href="https://play.google.com/store/apps/details?id=com.stride.app" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl text-white text-sm font-bold glow-button" style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
              Download Free
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────── */}
      <section id="section-hero" className="relative pt-36 pb-20 px-6 text-center overflow-hidden" style={{ zIndex: 1 }}>

        {/* Multi-layer glow background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 900, height: 700, background: "radial-gradient(ellipse at 50% 20%, rgba(16,185,129,0.16) 0%, transparent 60%)", animation: "pulse-glow 6s ease-in-out infinite" }} />
        <div className="absolute top-20 left-1/4 pointer-events-none rounded-full" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(5,150,105,0.1) 0%, transparent 70%)", animation: "float-slow 9s ease-in-out infinite" }} />
        <div className="absolute top-32 right-1/4 pointer-events-none rounded-full" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)", animation: "float-slow 11s ease-in-out 2s infinite" }} />

        <div className="relative max-w-4xl mx-auto">

          {/* Icon + orbit */}
          <div className="flex justify-center mb-8 anim-icon">
            <div className="relative" style={{ width: 110, height: 110 }}>
              <Image src="/assets/icon.png" alt="Stride App" width={110} height={110} className="rounded-[30px] relative z-10" style={{ boxShadow: "0 20px 80px rgba(16,185,129,0.5), 0 0 0 1px rgba(16,185,129,0.2), 0 0 0 8px rgba(16,185,129,0.06)" }} />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: "140%", height: "140%", position: "absolute", animation: "orbit 4s linear infinite" }}>
                  <div className="w-3.5 h-3.5 rounded-full" style={{ background: "#10B981", boxShadow: "0 0 10px #10B981, 0 0 20px rgba(16,185,129,0.5)", marginTop: -7 }} />
                </div>
              </div>
              {/* Secondary orbit */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: "170%", height: "170%", position: "absolute", animation: "orbit 7s linear infinite reverse" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: "#059669", boxShadow: "0 0 8px #059669", marginTop: -4 }} />
                </div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="anim-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-semibold mb-7" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.28)", color: "#34D399" }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4ADE80", boxShadow: "0 0 8px #4ADE80" }} />
            Free forever — no subscription, no paywall
          </div>

          {/* Headline */}
          <h1 className="anim-h1 font-black tracking-tight leading-[1.04] mb-6" style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)" }}>
            Focus. Build habits.<br />
            <span className="animated-gradient">Feel better.</span>
          </h1>

          {/* Sub */}
          <p className="anim-sub text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--t2)" }}>
            The only <span style={{ color: "var(--t1)", fontWeight: 700 }}>free</span> Android app combining Pomodoro timer, habit tracker, mood journal, sleep tracker, and breathing exercises — beautifully designed, no paywall.
          </p>

          {/* CTAs */}
          <div className="anim-cta flex flex-col sm:flex-row gap-4 justify-center items-center" id="download">
            <a href="https://play.google.com/store/apps/details?id=com.stride.app" target="_blank" rel="noopener noreferrer" className="badge-link">
              <Image src="/assets/google-play-badge.png" alt="Get it on Google Play" width={210} height={63} style={{ filter: "drop-shadow(0 4px 24px rgba(16,185,129,0.4))" }} />
            </a>
            <a href="#features" className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all hover:border-white/20 hover:text-white/80" style={{ border: "1px solid var(--border-subtle)", color: "var(--t3)", background: "rgba(255,255,255,0.03)" }}>
              Explore features ↓
            </a>
          </div>

          {/* TextCycle */}
          <p className="mt-5 text-sm" style={{ color: "var(--t3)", animation: "fadeUp 0.7s ease both 0.65s" }}>
            Perfect for{" "}
            <TextCycle className="gradient-text font-bold" />{" "}
            who want to be more productive
          </p>

          {/* Rating + stats */}
          <div className="anim-stats mt-14 flex flex-col items-center gap-6">
            {/* Star rating */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm">
              <div className="flex gap-0.5 text-lg" style={{ color: "#FCD34D" }}>★★★★★</div>
              <span className="font-bold">5.0</span>
              <span style={{ color: "var(--t3)" }}>on Google Play</span>
              <span className="w-px h-4 mx-1 hidden sm:block" style={{ background: "var(--border-subtle)" }} />
              <span style={{ color: "var(--t3)" }}>Android · Free</span>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {stats.map((s, i) => (
                <div key={i} className="stat-item flex flex-col items-center gap-0.5">
                  <span className="stat-num text-3xl font-black" style={{ color: "var(--t1)" }}>
                    <Counter target={s.n} suffix={s.suffix} />
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--t3)" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll hint */}
          <div className="scroll-hint">
            <span>Scroll to explore</span>
            <div className="scroll-arrow" />
          </div>

        </div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────── */}
      <div className="relative py-2" style={{ zIndex: 1, borderTop: "1px solid var(--border-accent)", borderBottom: "1px solid var(--border-accent)" }}>
        <Marquee />
      </div>

      {/* ── BENTO FEATURES ──────────────────────────── */}
      <section id="section-features" className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="section-chip">Features</div>
            <h2 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Everything you need.<br />
              <span className="gradient-text">Nothing you don&apos;t.</span>
            </h2>
            <p className="text-lg max-w-lg mx-auto" style={{ color: "var(--t2)" }}>
              Most apps charge $5/month for a single feature. Stride gives you all of them, free.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 reveal visible">

              {/* Row 1 — Pomodoro (wide) + Habit */}
              <div className="bento-card md:col-span-2" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(5,150,105,0.04) 100%)", border: "1px solid rgba(16,185,129,0.18)" }}>
                <div className="card-icon" style={{ background: "rgba(16,185,129,0.15)" }}>⏱️</div>
                <h3 className="font-black text-xl mb-2">Pomodoro Focus Timer</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>
                  Customizable durations, 9 ambient sounds, session streaks, task labels. Beat procrastination one session at a time.
                </p>
                {/* Mini timer widget */}
                <div className="mini-widget flex items-center gap-3">
                  <div className="relative shrink-0 w-12 h-12">
                    <svg viewBox="0 0 48 48" className="w-12 h-12 -rotate-90">
                      <circle cx="24" cy="24" r="19" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="3" />
                      <circle cx="24" cy="24" r="19" fill="none" stroke="#10B981" strokeWidth="3" strokeDasharray="119" strokeDashoffset="35" strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-black" style={{ color: "#10B981" }}>25m</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--t1)" }}>Focus session active</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--t3)" }}>🎵 Lofi Chill · 18 min left</p>
                  </div>
                  <div className="ml-auto hidden sm:flex gap-1">
                    {["🌧️", "🌲", "☕", "🔥", "🎵"].map(s => (
                      <span key={s} className="w-7 h-7 rounded-full flex items-center justify-center text-xs" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.15)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bento-card" style={{ background: "linear-gradient(135deg, rgba(74,222,128,0.06) 0%, rgba(16,185,129,0.03) 100%)", border: "1px solid rgba(74,222,128,0.18)" }}>
                <div className="card-icon" style={{ background: "rgba(74,222,128,0.15)" }}>✅</div>
                <h3 className="font-black text-xl mb-2">Habit Tracker</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>
                  28 templates, 5 categories. Streak freeze every 7 days.
                </p>
                {/* Mini streak dots */}
                <div className="mini-widget">
                  <p className="text-xs font-bold mb-2" style={{ color: "#4ADE80" }}>🔥 14-day streak</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {[1,1,1,1,1,1,1,0,1,1,1,1,1,1].map((done, i) => (
                      <div key={i} className="streak-dot w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ background: done ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.04)", border: `1px solid ${done ? "rgba(74,222,128,0.4)" : "rgba(255,255,255,0.06)"}`, color: done ? "#4ADE80" : "transparent" }}>✓</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 — 3 equal */}
              <div className="bento-card" style={{ border: "1px solid rgba(251,191,36,0.18)" }}>
                <div className="card-icon" style={{ background: "rgba(251,191,36,0.15)" }}>😊</div>
                <h3 className="font-black text-xl mb-2">Mood Journal</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>
                  5-level logging, 12 tags, gratitude journal. See your patterns.
                </p>
                {/* Mini mood scale */}
                <div className="mini-widget flex items-center justify-between">
                  {["😔","😕","😐","😊","😄"].map((e, i) => (
                    <div key={i} className="mood-emoji w-9 h-9 rounded-full flex items-center justify-center text-lg" style={{ background: i === 3 ? "rgba(251,191,36,0.2)" : "rgba(255,255,255,0.04)", border: `1px solid ${i === 3 ? "rgba(251,191,36,0.4)" : "rgba(255,255,255,0.06)"}`, transform: i === 3 ? "scale(1.2)" : "scale(1)" }}>{e}</div>
                  ))}
                </div>
              </div>

              <div className="bento-card" style={{ border: "1px solid rgba(5,150,105,0.2)" }}>
                <div className="card-icon" style={{ background: "rgba(5,150,105,0.15)" }}>😴</div>
                <h3 className="font-black text-xl mb-2">Sleep Tracker</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>
                  Log bedtime, wake time, quality. 6 tags. Average stats.
                </p>
                {/* Mini sleep bar */}
                <div className="mini-widget">
                  <div className="flex justify-between text-xs mb-2" style={{ color: "var(--t3)" }}>
                    <span>11:30 PM</span><span>7:15 AM</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-full rounded-full" style={{ width: "78%", background: "linear-gradient(90deg, #059669, #34D399)" }} />
                  </div>
                  <p className="text-xs mt-2 font-semibold" style={{ color: "#34D399" }}>7h 45m · Good quality</p>
                </div>
              </div>

              <div className="bento-card" style={{ background: "linear-gradient(135deg, rgba(5,150,105,0.08) 0%, rgba(16,185,129,0.04) 100%)", border: "1px solid rgba(5,150,105,0.22)" }}>
                <div className="card-icon" style={{ background: "rgba(5,150,105,0.15)" }}>🤝</div>
                <h3 className="font-black text-xl mb-2">Daily Coach</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>
                  100+ personalized messages based on your mood & streak.
                </p>
                {/* Mini coach message */}
                <div className="mini-widget" style={{ borderColor: "rgba(5,150,105,0.15)" }}>
                  <p className="text-xs font-bold mb-1" style={{ color: "#34D399" }}>Morning · Student</p>
                  <p className="text-xs italic leading-relaxed" style={{ color: "var(--t2)" }}>&ldquo;One step at a time. That&apos;s all anyone can do. Let&apos;s begin.&rdquo;</p>
                </div>
              </div>

              {/* Row 3 — Water + Breathing (wide) */}
              <div className="bento-card" style={{ border: "1px solid rgba(33,150,243,0.2)" }}>
                <div className="card-icon" style={{ background: "rgba(33,150,243,0.15)" }}>💧</div>
                <h3 className="font-black text-xl mb-2">Water Intake</h3>
                <p className="text-sm" style={{ color: "var(--t2)" }}>Daily goal + weekly view.</p>
                {/* Mini water bars */}
                <div className="flex items-end gap-1 mt-3 rounded overflow-hidden" style={{ height: "48px" }}>
                  {[70,100,85,100,55,100,40].map((pct, i) => (
                    <div key={i} className="water-bar flex-1 rounded-sm" style={{ "--bar-h": `${pct}%`, background: i === 6 ? "rgba(33,150,243,0.4)" : "rgba(33,150,243,0.7)" } as React.CSSProperties} />
                  ))}
                </div>
              </div>

              <div className="bento-card md:col-span-2" style={{ border: "1px solid rgba(16,185,129,0.18)" }}>
                <div className="card-icon" style={{ background: "rgba(16,185,129,0.12)" }}>🫁</div>
                <h3 className="font-black text-xl mb-2">Breathing Exercises</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>Guided breathing with animated circle. Reduce stress and refocus in minutes.</p>
                {/* Mini breathing widget */}
                <div className="mini-widget flex items-center gap-4">
                  <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                    {[1, 0.6, 0.3].map((opacity, i) => (
                      <div key={i} className="absolute rounded-full" style={{ width: `${100 - i * 28}%`, height: `${100 - i * 28}%`, border: `1px solid rgba(16,185,129,${opacity * 0.5})`, animation: `pulse-glow ${2 + i}s ease-in-out infinite ${i * 0.5}s` }} />
                    ))}
                    <span className="text-xl">🫁</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["4-7-8 Relax", "Box Breathing", "2-1-4-1 Focus"].map(p => (
                      <span key={p} className="tag-hover px-3 py-1.5 rounded-full text-xs font-medium" style={{ background: "rgba(16,185,129,0.1)", color: "#34D399", border: "1px solid rgba(16,185,129,0.18)" }}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 4 — Challenges (full width) */}
              <div className="bento-card md:col-span-3" style={{ background: "linear-gradient(135deg, rgba(251,146,60,0.07) 0%, rgba(16,185,129,0.03) 100%)", border: "1px solid rgba(251,146,60,0.2)" }}>
                <div className="card-icon" style={{ background: "rgba(251,146,60,0.15)" }}>🏆</div>
                <h3 className="font-black text-xl mb-2">Challenges & Badges</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--t2)" }}>
                  12 challenge templates from 7 to 30 days. Stay accountable and earn your badges.
                </p>
                {/* Mini challenge progress */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[{label:"21-Day Exercise",pct:62,color:"#fb923c"},{label:"30-Day No Sugar",pct:33,color:"#fbbf24"},{label:"7-Day Meditation",pct:100,color:"#4ADE80"},{label:"14-Day Focus",pct:50,color:"#10B981"}].map(c => (
                    <div key={c.label} className="p-3 rounded-xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="text-sm font-black mb-2" style={{ color: c.color }}>{c.pct}%</div>
                      <div className="h-1.5 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.07)" }}>
                        <div className="progress-bar h-full rounded-full" style={{ "--bar-w": `${c.pct}%`, background: c.color } as React.CSSProperties} />
                      </div>
                      <div className="text-xs leading-tight" style={{ color: "var(--t3)" }}>{c.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────── */}
      <section id="section-howto" className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(5,150,105,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="section-chip">How It Works</div>
            <h2 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Get started in <span className="gradient-text">60 seconds</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--t2)" }}>No account. No setup. Just open and start.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 steps-grid">
            {howItWorks.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center">
                  <div className="step-icon mx-auto mb-4" style={{ background: step.bg }}>
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="text-xs font-black tracking-widest mb-2 uppercase" style={{ color: "#10B981" }}>Step {i + 1}</div>
                  <h3 className="font-black text-xl mb-2">{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ─────────────────────────────── */}
      <section id="section-screenshots" className="relative py-28 px-6 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.07) 0%, transparent 65%)" }} />
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="section-chip">Screenshots</div>
            <h2 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              See it in <span className="gradient-text">action</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--t2)" }}>Beautifully designed. Thoughtfully built.</p>
          </ScrollReveal>

          {/* Mobile: horizontal snap scroll */}
          <div className="flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-6 px-8" style={{ scrollbarWidth: "none" }}>
            {screenshots.map((s, i) => (
              <div key={s.file + "-m"} className="snap-center shrink-0 flex flex-col gap-3" style={{ width: "62vw", maxWidth: "200px" }}>
                <div className="phone-frame" style={{ boxShadow: i === 1 ? "0 40px 80px rgba(16,185,129,0.28), 0 0 0 1px rgba(16,185,129,0.12)" : "0 30px 60px rgba(0,0,0,0.65)" }}>
                  <div className="phone-notch"><div className="phone-notch-pill" /></div>
                  <div className="phone-screen">
                    <Image src={`/assets/${s.file}`} alt={`Stride ${s.label} screen`} width={400} height={720} className="w-full h-auto" style={{ display: "block" }} />
                  </div>
                  <div className="phone-home-bar"><div className="phone-home-pill" /></div>
                </div>
                <p className="text-center text-sm font-bold" style={{ color: i === 1 ? "#10B981" : "var(--t3)" }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* Desktop: 3D perspective stack */}
          <div className="hidden sm:flex justify-center items-end gap-6 md:gap-2">
            {screenshots.map((s, i) => (
              <div key={s.file} className="screen-card flex flex-col gap-4 w-52 md:w-60" style={{ transform: i === 1 ? "translateY(-32px) scale(1.06)" : i === 0 ? "rotate(-4deg) translateY(8px)" : "rotate(4deg) translateY(8px)", zIndex: i === 1 ? 2 : 1 }}>
                <div className="phone-frame" style={{ boxShadow: i === 1 ? "0 60px 140px rgba(16,185,129,0.3), 0 0 0 1px rgba(16,185,129,0.15), 0 60px 120px rgba(0,0,0,0.7)" : "0 40px 80px rgba(0,0,0,0.8)" }}>
                  <div className="phone-notch"><div className="phone-notch-pill" /></div>
                  <div className="phone-screen">
                    <Image src={`/assets/${s.file}`} alt={`Stride ${s.label} screen`} width={400} height={720} className="w-full h-auto" style={{ display: "block" }} />
                  </div>
                  <div className="phone-home-bar"><div className="phone-home-pill" /></div>
                </div>
                <p className="text-center text-sm font-bold" style={{ color: i === 1 ? "#10B981" : "var(--t3)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COACH ───────────────────────────────────── */}
      <section className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl p-6 sm:p-10 md:p-14 glass-emerald glow-md">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-5xl mb-5" style={{ animation: "float 3.5s ease-in-out infinite" }}>🤝</div>
                  <h2 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                    Your smart <span className="gradient-text">daily coach</span>
                  </h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--t2)" }}>
                    Stride reads your rhythm — mood, sleep, streaks, goals — and sends a personalized message every morning, afternoon & evening.
                  </p>
                  <ul className="space-y-3">
                    {coachPoints.map((p, i) => (
                      <li key={p} className="flex items-start gap-3 text-sm" style={{ color: "var(--t2)" }}>
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  {coachMessages.map((m, i) => (
                    <div key={i} className="p-5 rounded-2xl glass" style={{ borderLeft: `3px solid ${i === 0 ? "#10B981" : i === 1 ? "#059669" : "#4ADE80"}` }}>
                      <span className="text-xs font-bold block mb-2 uppercase tracking-wider" style={{ color: i === 0 ? "#10B981" : i === 1 ? "#34D399" : "#4ADE80" }}>{m.label}</span>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--t2)" }}>&ldquo;{m.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COMPARE ─────────────────────────────────── */}
      <section id="section-value" className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <div className="section-chip">Value</div>
            <h2 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              One app vs <span className="gradient-text">five subscriptions</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--t2)" }}>Why pay for five apps when Stride does it all, free?</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal delay={0}>
              <div className="h-full p-8 rounded-2xl glass" style={{ borderColor: "rgba(255,107,107,0.15)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black" style={{ background: "rgba(255,107,107,0.15)", color: "#FF6B6B" }}>✗</div>
                  <span className="font-black text-lg" style={{ color: "#FF6B6B" }}>Without Stride</span>
                </div>
                <div className="space-y-1">
                  {alternatives.map((a) => (
                    <div key={a.name} className="flex items-center justify-between py-3" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                      <span className="text-sm" style={{ color: "var(--t2)" }}>{a.name}</span>
                      <span className="text-sm font-bold px-2 py-0.5 rounded-lg" style={{ background: "rgba(255,107,107,0.1)", color: "#FF6B6B" }}>{a.price}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-black">Total / month</span>
                    <span className="font-black text-3xl" style={{ color: "#FF6B6B" }}>$20–30</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="h-full p-8 rounded-2xl glass-emerald" style={{ border: "1px solid var(--border-accent-strong)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black" style={{ background: "rgba(16,185,129,0.2)", color: "#10B981" }}>✓</div>
                  <span className="font-black text-lg" style={{ color: "#10B981" }}>With Stride</span>
                </div>
                <div className="space-y-1">
                  {strideList.map((f) => (
                    <div key={f} className="flex items-center gap-3 py-3" style={{ borderBottom: "1px solid rgba(16,185,129,0.08)" }}>
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 font-bold" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>✓</span>
                      <span className="text-sm" style={{ color: "var(--t1)" }}>{f}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-4">
                    <span className="font-black">Total / month</span>
                    <span className="font-black text-3xl shimmer-text">$0</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHY FREE ────────────────────────────────── */}
      <section className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="rounded-3xl p-6 sm:p-10 md:p-14 text-center glass">
              <div className="text-5xl mb-5" style={{ animation: "float 4s ease-in-out infinite" }}>💚</div>
              <h2 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>Why is it free?</h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t2)" }}>
                Stride is built by an indie developer who believes productivity tools should be accessible to everyone — students, professionals, and anyone building a better routine.
              </p>
              <p className="font-bold text-lg" style={{ color: "#10B981" }}>
                Supported by minimal, non-intrusive ads. No subscription. No paywall. Ever.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BLOG PREVIEW ────────────────────────────── */}
      <section className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="section-chip mb-4">Blog</div>
                <h2 className="font-black tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  From the <span className="gradient-text">blog</span>
                </h2>
                <p className="text-base mt-2" style={{ color: "var(--t2)" }}>Science-backed guides to help you focus, build habits, and feel better.</p>
              </div>
              <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-bold transition-all hover:gap-3" style={{ color: "#10B981" }}>
                View all articles →
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {articles.slice(0, 3).map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 80}>
                <Link href={`/blog/${article.slug}`} className="block blog-card group h-full">
                  <div className="text-4xl mb-4">{article.emoji}</div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(16,185,129,0.1)", color: "#34D399" }}>{article.category}</span>
                  <h3 className="font-black text-base mt-3 mb-2 leading-snug group-hover:text-[#10B981] transition-colors">{article.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--t2)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{article.description}</p>
                  <span className="text-xs font-bold" style={{ color: "var(--t3)" }}>{article.readTime} min read →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="flex justify-center mt-8 md:hidden">
            <Link href="/blog" className="text-sm font-bold" style={{ color: "#10B981" }}>View all articles →</Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────── */}
      <section id="section-faq" className="relative py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="section-chip">FAQ</div>
            <h2 className="font-black tracking-tight mb-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Frequently asked <span className="gradient-text">questions</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <details className="group rounded-2xl overflow-hidden glass reveal visible">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold list-none" style={{ color: "var(--t1)" }}>
                    {faq.q}
                    <span className="faq-icon ml-4 shrink-0 text-2xl font-thin" style={{ color: "#10B981" }}>+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--t2)", borderTop: "1px solid var(--border-subtle)" }}>
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section id="section-cta" className="relative py-32 px-6 text-center overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 60%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(5,150,105,0.06) 0%, transparent 70%)", animation: "pulse-glow 5s ease-in-out infinite" }} />
        <ScrollReveal>
          <div className="max-w-2xl mx-auto relative">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image src="/assets/icon.png" alt="Stride" width={90} height={90} className="rounded-[28px]" style={{ boxShadow: "0 20px 80px rgba(16,185,129,0.4), 0 0 0 1px rgba(16,185,129,0.2), 0 0 0 8px rgba(16,185,129,0.07)", animation: "float 4s ease-in-out infinite" }} />
                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full text-xs font-black" style={{ background: "#4ADE80", color: "#08081A" }}>FREE</div>
              </div>
            </div>
            <h2 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>
              Start today.<br />
              <span className="animated-gradient">It&apos;s free.</span>
            </h2>
            <p className="text-lg mb-4" style={{ color: "var(--t2)" }}>
              No signup. No credit card. Just download and start building better habits.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm" style={{ color: "var(--t3)" }}>
              {["⏱️ Pomodoro", "✅ Habits", "😊 Mood", "😴 Sleep", "💧 Water", "🫁 Breathing"].map(f => (
                <span key={f} className="tag-hover px-3 py-1 rounded-full" style={{ background: "rgba(16,185,129,0.07)", border: "1px solid var(--border-accent)" }}>{f}</span>
              ))}
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.stride.app" target="_blank" rel="noopener noreferrer" className="badge-link inline-block">
              <Image src="/assets/google-play-badge.png" alt="Get it on Google Play" width={230} height={69} style={{ filter: "drop-shadow(0 8px 30px rgba(16,185,129,0.45))" }} />
            </a>
            <p className="text-sm mt-5" style={{ color: "var(--t4)" }}>Android · Free forever · 10 languages · No subscription</p>
          </div>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer className="relative py-10 px-6" style={{ zIndex: 1, borderTop: "1px solid var(--border-accent)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "var(--t4)" }}>
          <div className="flex items-center gap-2.5">
            <Image src="/assets/icon.png" alt="Stride" width={26} height={26} className="rounded-lg" />
            <span className="font-semibold" style={{ color: "var(--t3)" }}>Stride</span>
            <span>© 2026</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a href="/blog" className="transition-colors hover:text-white">Blog</a>
            <a href="/privacy" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="mailto:contact@strideapp.co" className="transition-colors hover:text-white">Contact</a>
            <a href="https://play.google.com/store/apps/details?id=com.stride.app" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">Google Play</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { n: 28,  suffix: "+", label: "habit templates" },
  { n: 9,   suffix: "",  label: "ambient sounds" },
  { n: 10,  suffix: "",  label: "languages" },
  { n: 100, suffix: "%", label: "free forever" },
];

const screenshots = [
  { file: "screen-habits.jpg",   label: "Habit Tracker" },
  { file: "screen-calendar.jpg", label: "Daily Coach" },
  { file: "screen-coach.jpg",    label: "Calendar" },
];

const howItWorks = [
  {
    icon: "📥",
    title: "Download for free",
    desc: "Get Stride on the Play Store. No account, no email, no setup. It's yours in 30 seconds.",
    bg: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.06))",
  },
  {
    icon: "⚙️",
    title: "Set your goals",
    desc: "Pick your habits, set your Pomodoro timer, and choose a daily routine that works for you.",
    bg: "linear-gradient(135deg, rgba(5,150,105,0.15), rgba(5,150,105,0.06))",
  },
  {
    icon: "📊",
    title: "Track & improve",
    desc: "Log your mood, sleep, and water. Watch your streaks grow. Your coach guides you every day.",
    bg: "linear-gradient(135deg, rgba(74,222,128,0.15), rgba(74,222,128,0.06))",
  },
];

const coachPoints = [
  "Adapts to your mood, sleep quality & daily streak",
  "Role-specific for students, professionals, parents & more",
  "Gentle, non-toxic tone — especially for tough days",
  "Suggests the right session at the right time of day",
  "100+ personalized messages, updated every day",
];

const coachMessages = [
  { label: "Morning · Student · Low energy", text: "One step at a time. That's all anyone can do. Let's begin gently." },
  { label: "Afternoon · Remote worker · Good streak", text: "No one's watching the clock but you. Stay honest with your time." },
  { label: "Evening · High stress day", text: "The day is done. You made it through. That's not small." },
];

const alternatives = [
  { name: "Forest (focus timer)", price: "$1.99/mo" },
  { name: "Habitify (habit tracker)", price: "$4.99/mo" },
  { name: "Calm (mood & breathing)", price: "$6.99/mo" },
  { name: "Sleep Cycle (sleep)", price: "$2.99/mo" },
  { name: "Day One (journal)", price: "$3.99/mo" },
];

const strideList = [
  "Pomodoro timer + 9 ambient sounds",
  "28 habit templates with streak freeze",
  "Mood journal + 12 context tags",
  "Sleep tracker with quality stats",
  "Water intake tracker",
  "Breathing exercises",
  "12 challenges + achievement badges",
  "Smart daily coach messages",
];

const faqs = [
  { q: "Is Stride really free?", a: "Yes, 100% free. No subscription, no premium tier, no hidden features behind a paywall. Stride is supported by minimal, non-intrusive ads. Every feature is available to every user, for free." },
  { q: "What is the Pomodoro technique?", a: "The Pomodoro technique is a time management method where you work in focused intervals (typically 25 minutes) followed by short breaks (5 minutes). After 4 sessions, you take a longer break. It helps beat procrastination by breaking large tasks into manageable chunks. Stride includes a fully customizable Pomodoro timer with 9 ambient sounds." },
  { q: "Does Stride work offline?", a: "Yes. All your data (habits, sessions, mood logs, journal entries, sleep logs) is stored locally on your device. You don't need an internet connection to use any core features. Internet is only required to load ads." },
  { q: "How is Stride different from Forest or Habitica?", a: "Forest focuses only on the Pomodoro timer and requires a paid upgrade. Habitica is a gamified habit tracker with a subscription. Stride combines both — plus mood tracking, sleep tracking, water intake, breathing exercises, and a daily journal — all completely free in a single app." },
  { q: "How many habit templates are available?", a: "Stride includes 28 pre-built habit templates across 5 categories: Health, Productivity, Wellbeing, Social, and Medication. You can also create fully custom habits with individual reminders and flexible frequency (daily, weekdays, weekends, or custom)." },
  { q: "What ambient sounds does Stride have?", a: "Stride includes 9 ambient soundscapes: Rain, Forest, Cafe, Fireplace, Birds, Lofi Chill, Lofi Jazz, Ocean, and Heavy Rain. You can play them during any Pomodoro session." },
  { q: "Is my data private?", a: "Yes. All personal data is stored exclusively on your device — we have no server. We don't collect, transmit, or store your habits, mood logs, journal entries, or any personal information. The only third-party service is Google AdMob for ads." },
  { q: "What languages does Stride support?", a: "Stride is available in 10 languages: English, French, Arabic (with full RTL support), Spanish, Portuguese (Brazil), Turkish, Hindi, German, Indonesian, and Japanese." },
];
