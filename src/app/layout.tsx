import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://strideapp.vercel.app";
const OG_IMAGE = `${BASE_URL}/assets/icon.png`;

export const metadata: Metadata = {
  title: "Stride — Free Pomodoro, Habit Tracker & Mood Journal for Android",
  description:
    "Stay focused, build habits, and track your mood — all in one free Android app. Pomodoro timer, habit tracker, mood journal, sleep tracker, breathing exercises. No subscription, no paywall.",
  keywords: [
    "pomodoro timer android",
    "free habit tracker app",
    "mood journal app",
    "focus app android",
    "productivity app free",
    "sleep tracker android",
    "daily routine app",
    "breathing exercises app",
    "Stride",
    "free pomodoro app",
  ],
  authors: [{ name: "Stride", url: BASE_URL }],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Stride — Free Pomodoro, Habit Tracker & Mood Journal",
    description:
      "The only free Android app combining Pomodoro + Habits + Mood + Sleep + Journal. No subscription ever.",
    url: BASE_URL,
    siteName: "Stride",
    images: [{ url: OG_IMAGE, width: 1024, height: 1024, alt: "Stride App Icon" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stride — Free Pomodoro, Habit Tracker & Mood Journal",
    description: "The only free Android app combining Pomodoro + Habits + Mood + Sleep + Journal.",
    images: [OG_IMAGE],
    creator: "@stride_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/icon.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

        {/* Schema: SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Stride",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "Android",
              url: BASE_URL,
              downloadUrl: "https://play.google.com/store/apps/details?id=com.stride.app",
              identifier: "com.stride.app",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              description:
                "Stride is a free all-in-one productivity app for Android combining a Pomodoro timer with 9 ambient sounds, habit tracker with 28 templates, mood journal, sleep tracker, water intake, breathing exercises, and a smart daily coach. Available in 10 languages. No subscription, no paywall.",
              featureList: [
                "Pomodoro timer with 9 ambient sounds",
                "Habit tracker with 28 templates",
                "Mood journal with 12 tags",
                "Sleep tracker",
                "Water intake tracker",
                "Breathing exercises",
                "Smart daily coach",
                "10 languages including Arabic RTL",
              ],
              screenshot: `${BASE_URL}/assets/screen-habits.jpg`,
              publisher: {
                "@type": "Organization",
                name: "Stride",
                url: BASE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: OG_IMAGE,
                  width: 1024,
                  height: 1024,
                },
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
            }),
          }}
        />

        {/* Schema: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Stride",
              url: BASE_URL,
              description: "Free Android productivity app — Pomodoro timer, habit tracker, mood journal, sleep tracker.",
              publisher: {
                "@type": "Organization",
                name: "Stride",
                url: BASE_URL,
              },
            }),
          }}
        />

        {/* Schema: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Stride really free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, 100% free. No subscription, no premium tier, no hidden features behind a paywall. Stride is supported by minimal, non-intrusive ads. Every feature is available to every user, for free.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the Pomodoro technique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Pomodoro technique is a time management method where you work in focused intervals (typically 25 minutes) followed by short breaks (5 minutes). After 4 sessions, you take a longer break. Stride includes a fully customizable Pomodoro timer with 9 ambient sounds including Rain, Forest, Cafe, Fireplace, and Lofi.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Stride work offline?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All your data — habits, sessions, mood logs, journal entries, sleep logs — is stored locally on your device. You don't need an internet connection to use any core features. Internet is only required to load ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How is Stride different from Forest or Habitica?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Forest focuses only on the Pomodoro timer and requires a paid upgrade. Habitica is a gamified habit tracker with a subscription. Stride combines both — plus mood tracking, sleep tracking, water intake, breathing exercises, and a daily journal — all completely free in a single app.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many habit templates are available?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Stride includes 28 pre-built habit templates across 5 categories: Health, Productivity, Wellbeing, Social, and Medication. You can also create fully custom habits with individual reminders and flexible frequency.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What ambient sounds does Stride have?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Stride includes 9 ambient soundscapes for focus sessions: Rain, Forest, Cafe, Fireplace, Birds, Lofi Chill, Lofi Jazz, Ocean, and Heavy Rain.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is my data private?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. All personal data is stored exclusively on your device — Stride has no server. We don't collect, transmit, or store your habits, mood logs, journal entries, or any personal information. The only third-party service is Google AdMob for ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What languages does Stride support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Stride is available in 10 languages: English, French, Arabic (with full RTL support), Spanish, Portuguese (Brazil), Turkish, Hindi, German, Indonesian, and Japanese.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
