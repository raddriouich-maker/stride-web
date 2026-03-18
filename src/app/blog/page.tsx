import Image from "next/image";
import Link from "next/link";
import { articles, formatDate } from "@/lib/articles";
import type { Metadata } from "next";

const BASE_URL = "https://getstrideapp.vercel.app";

export const metadata: Metadata = {
  title: "Blog — Stride | Productivity Tips, Habit Building & Focus Strategies",
  description:
    "Science-backed articles on the Pomodoro technique, habit building, mood tracking, sleep improvement, and free productivity apps for Android — from the Stride team.",
  keywords: [
    "productivity blog", "focus tips", "habit building guide", "pomodoro technique",
    "mood tracking", "sleep quality tips", "free productivity apps android",
  ],
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Stride Blog | Productivity Tips, Habit Building & Focus Strategies",
    description: "Science-backed articles on focus, habits, mood tracking, and sleep — free guides from Stride.",
    url: `${BASE_URL}/blog`,
    siteName: "Stride",
    type: "website",
    images: [{ url: `${BASE_URL}/assets/icon.png`, width: 1024, height: 1024, alt: "Stride Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stride Blog | Productivity & Wellness",
    description: "Science-backed articles on focus, habits, mood tracking, and sleep.",
    images: [`${BASE_URL}/assets/icon.png`],
    creator: "@stride_app",
  },
};

export default function BlogIndex() {
  const [featured, ...rest] = articles;
  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)", color: "var(--t1)" }}>
      {/* Schema: CollectionPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "CollectionPage",
        name: "Stride Blog", description: "Science-backed articles on productivity, habits, focus, and wellness.",
        url: `${BASE_URL}/blog`, publisher: { "@type": "Organization", name: "Stride", url: BASE_URL },
      })}} />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,8,26,0.85)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid var(--border-accent)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/icon.png" alt="Stride" width={34} height={34} className="rounded-xl" style={{ boxShadow: "0 0 16px rgba(16,185,129,0.3)" }} />
            <span className="font-black text-lg tracking-tight gradient-text">Stride</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-sm font-medium hidden sm:block" style={{ color: "#10B981" }}>Blog</Link>
            <Link href="/#faq" className="text-sm font-medium hidden sm:block transition-colors hover:text-white" style={{ color: "var(--t3)" }}>FAQ</Link>
            <a href="https://play.google.com/store/apps/details?id=com.stride.app" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl text-white text-sm font-bold glow-button" style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
              Download Free
            </a>
          </div>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <section className="relative pt-36 pb-16 px-6 text-center" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 600, height: 400, background: "radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.12) 0%, transparent 65%)" }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)", color: "#34D399" }}>
            Focus · Habits · Wellbeing
          </div>
          <h1 className="font-black tracking-tight mb-4" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}>
            Productivity Tips, Habit Building<br />
            & <span className="gradient-text">Focus Strategies</span>
          </h1>
          <p className="text-lg" style={{ color: "var(--t2)" }}>
            Science-backed guides on the Pomodoro technique, habit formation, mood tracking, and sleep quality — to help you focus better and feel good doing it.
          </p>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section className="px-6 pb-12" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <Link href={`/blog/${featured.slug}`} className="block group">
            <div className="rounded-3xl p-8 md:p-12 transition-all duration-300 group-hover:border-[rgba(16,185,129,0.3)]" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(5,150,105,0.04) 100%)", border: "1px solid rgba(16,185,129,0.18)" }}>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="text-6xl" style={{ animation: "float 4s ease-in-out infinite" }}>{featured.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>{featured.category}</span>
                    <span className="text-xs" style={{ color: "var(--t3)" }}>{formatDate(featured.date)} · {featured.readTime} min read</span>
                  </div>
                  <h2 className="font-black text-2xl md:text-3xl mb-3 group-hover:text-[#10B981] transition-colors">{featured.title}</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: "var(--t2)" }}>{featured.description}</p>
                  <span className="text-sm font-bold" style={{ color: "#10B981" }}>Read article →</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="px-6 pb-28" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="block group">
                <div className="h-full rounded-2xl p-7 transition-all duration-300 group-hover:border-[rgba(16,185,129,0.25)] group-hover:translate-y-[-4px]" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid var(--border-subtle)" }}>
                  <div className="text-4xl mb-4">{article.emoji}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(16,185,129,0.1)", color: "#34D399" }}>{article.category}</span>
                    <span className="text-xs" style={{ color: "var(--t3)" }}>{article.readTime} min read</span>
                  </div>
                  <h2 className="font-black text-lg mb-2 group-hover:text-[#10B981] transition-colors leading-snug">{article.title}</h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--t2)" }}>{article.description}</p>
                  <span className="text-xs font-bold" style={{ color: "var(--t3)" }}>{formatDate(article.date)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative py-10 px-6" style={{ zIndex: 1, borderTop: "1px solid var(--border-accent)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm" style={{ color: "var(--t4)" }}>
          <div className="flex items-center gap-2.5">
            <Image src="/assets/icon.png" alt="Stride" width={26} height={26} className="rounded-lg" />
            <span className="font-semibold" style={{ color: "var(--t3)" }}>Stride</span>
            <span>© 2026</span>
          </div>
          <div className="flex items-center gap-8">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <a href="mailto:contact@strideapp.co" className="transition-colors hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
