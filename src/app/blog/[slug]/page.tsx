import Image from "next/image";
import Link from "next/link";
import { articles, getArticle, formatDate, type Block } from "@/lib/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const BASE_URL = "https://getstrideapp.vercel.app";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const url = `${BASE_URL}/blog/${slug}`;
  const ogImage = `${BASE_URL}/assets/icon.png`;

  return {
    title: `${article.title} — Stride Blog`,
    description: article.description,
    keywords: [article.category.toLowerCase(), "productivity", "android app", "Stride", "free app"],
    authors: [{ name: "Stride", url: BASE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      siteName: "Stride",
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ["Stride"],
      tags: [article.category, "productivity", "focus", "android"],
      images: [{ url: ogImage, width: 1024, height: 1024, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [ogImage],
      creator: "@stride_app",
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i} className="font-black text-2xl md:text-3xl mt-12 mb-4 tracking-tight">{block.text}</h2>;
    case "h3":
      return <h3 key={i} className="font-black text-xl mt-8 mb-3" style={{ color: "#10B981" }}>{block.text}</h3>;
    case "p":
      return <p key={i} className="text-base leading-[1.85] mb-5" style={{ color: "var(--t2)" }}>{block.text}</p>;
    case "ul":
      return (
        <ul key={i} className="mb-5 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--t2)" }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#10B981" }} />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mb-5 space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--t2)" }}>
              <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mt-0.5" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>{j + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div key={i} className="my-6 p-5 rounded-2xl" style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}>
          <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--t2)" }}>
            <span className="font-black mr-2" style={{ color: "#10B981" }}>💡 Tip:</span>
            {block.text}
          </p>
        </div>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-8 pl-6 py-1" style={{ borderLeft: "3px solid #10B981" }}>
          <p className="text-lg italic leading-relaxed mb-2" style={{ color: "var(--t2)" }}>{block.text}</p>
          {block.author && <cite className="text-sm not-italic font-semibold" style={{ color: "var(--t3)" }}>{block.author}</cite>}
        </blockquote>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter(a => a.slug !== article.slug).slice(0, 2);
  const articleUrl = `${BASE_URL}/blog/${slug}`;

  const bodyText = article.content
    .filter((b): b is Extract<Block, { type: "p" }> => b.type === "p")
    .map(b => b.text)
    .join(" ");

  const wordCount = Math.round(bodyText.split(" ").length);

  return (
    <main className="relative min-h-screen overflow-x-hidden" style={{ background: "var(--bg)", color: "var(--t1)" }}>

      {/* ── Schema: BlogPosting ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.description,
            image: { "@type": "ImageObject", url: `${BASE_URL}/assets/icon.png`, width: 1024, height: 1024 },
            datePublished: article.date,
            dateModified: article.date,
            timeRequired: `PT${article.readTime}M`,
            wordCount,
            keywords: [article.category, "productivity", "android", "free app", "Stride"],
            url: articleUrl,
            inLanguage: "en-US",
            author: { "@type": "Organization", name: "Stride", url: BASE_URL },
            publisher: {
              "@type": "Organization",
              name: "Stride",
              url: BASE_URL,
              logo: { "@type": "ImageObject", url: `${BASE_URL}/assets/icon.png`, width: 1024, height: 1024 },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
            articleBody: bodyText,
            articleSection: article.category,
          }),
        }}
      />

      {/* ── Schema: BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
            ],
          }),
        }}
      />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(8,8,26,0.85)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", borderBottom: "1px solid var(--border-accent)" }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/assets/icon.png" alt="Stride" width={34} height={34} className="rounded-xl" style={{ boxShadow: "0 0 16px rgba(16,185,129,0.3)" }} />
            <span className="font-black text-lg tracking-tight gradient-text">Stride</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/blog" className="text-sm font-medium hidden sm:block" style={{ color: "#10B981" }}>Blog</Link>
            <a href="https://play.google.com/store/apps/details?id=com.stride.app" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl text-white text-sm font-bold glow-button" style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
              Download Free
            </a>
          </div>
        </div>
      </nav>

      {/* ── ARTICLE HEADER ── */}
      <section className="relative pt-36 pb-12 px-6" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 600, height: 400, background: "radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.1) 0%, transparent 65%)" }} />
        <div className="relative max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs mb-8" style={{ color: "var(--t3)" }}>
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
            <span>/</span>
            <span style={{ color: "var(--t2)" }}>{article.category}</span>
          </nav>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: "rgba(16,185,129,0.15)", color: "#10B981" }}>{article.category}</span>
            <span className="text-xs" style={{ color: "var(--t3)" }}>{formatDate(article.date)} · {article.readTime} min read</span>
          </div>
          <div className="text-6xl mb-6" style={{ animation: "float 4s ease-in-out infinite" }}>{article.emoji}</div>
          <h1 className="font-black tracking-tight leading-[1.1] mb-5" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>{article.title}</h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--t2)" }}>{article.description}</p>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="px-6 pb-16" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 pt-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            {article.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* ── CTA CARD ── */}
          <div className="rounded-3xl p-8 text-center mb-16" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.05) 100%)", border: "1px solid rgba(16,185,129,0.2)" }}>
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-black text-xl mb-2">Try it for free on Android</h3>
            <p className="text-sm mb-5" style={{ color: "var(--t2)" }}>Stride combines everything in this article — timer, habits, mood, sleep — in one free app. No subscription, no paywall.</p>
            <a href="https://play.google.com/store/apps/details?id=com.stride.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold glow-button" style={{ background: "linear-gradient(135deg, #10B981, #059669)" }}>
              Download Stride — Free
            </a>
          </div>

          {/* ── RELATED ARTICLES ── */}
          {related.length > 0 && (
            <div>
              <h2 className="font-black text-lg mb-5" style={{ color: "var(--t3)" }}>More articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {related.map(a => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="block group">
                    <div className="p-5 rounded-2xl transition-all duration-300 group-hover:border-[rgba(16,185,129,0.25)]" style={{ background: "rgba(255,255,255,0.025)", border: "1px solid var(--border-subtle)" }}>
                      <div className="text-3xl mb-3">{a.emoji}</div>
                      <span className="text-xs font-bold px-2 py-1 rounded-full mr-2" style={{ background: "rgba(16,185,129,0.1)", color: "#34D399" }}>{a.category}</span>
                      <h3 className="font-black text-base mt-3 mb-1 group-hover:text-[#10B981] transition-colors leading-snug">{a.title}</h3>
                      <p className="text-xs" style={{ color: "var(--t3)" }}>{a.readTime} min read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
            <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
