import type { Metadata } from "next";

const BASE_URL = "https://getstrideapp.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy — Stride",
  description:
    "Stride privacy policy. All data stored locally on your device. No server, no account, no personal data collection. Only Google AdMob for ads.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  openGraph: {
    title: "Privacy Policy — Stride",
    description: "How Stride handles your data. TL;DR: all data stays on your device.",
    url: `${BASE_URL}/privacy`,
    siteName: "Stride",
    type: "website",
  },
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-emerald-400 text-sm mb-8 inline-block hover:underline">
          ← Back to Stride
        </a>
        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
            <p>
              Stride is a free Android productivity application. We are
              committed to protecting your privacy. This policy explains what
              data is collected, how it is used, and your rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              2. Data Stored Locally
            </h2>
            <p>
              All personal data you enter into Stride (focus sessions, habits,
              mood logs, journal entries, sleep logs, water intake, challenge
              progress, badges) is stored{" "}
              <strong className="text-white">exclusively on your device</strong>.
              We do not have a server. We do not collect, transmit, or store any
              of this data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              3. Third-Party Advertising (Google AdMob)
            </h2>
            <p>
              Stride displays ads provided by Google AdMob. AdMob may collect:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
              <li>Advertising identifier (Android Ad ID)</li>
              <li>Device information (model, OS version)</li>
              <li>Approximate location (IP-based)</li>
              <li>App usage data for ad targeting</li>
            </ul>
            <p className="mt-3">
              You can opt out of personalized ads in your Android device settings
              under <em>Google → Ads → Opt out of Ads Personalization</em>.
            </p>
            <p className="mt-2">
              For more information, see{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-emerald-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              4. Permissions
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong className="text-white">INTERNET</strong> — Required for
                AdMob ads
              </li>
              <li>
                <strong className="text-white">POST_NOTIFICATIONS</strong> —
                For habit and streak reminders
              </li>
              <li>
                <strong className="text-white">
                  RECEIVE_BOOT_COMPLETED
                </strong>{" "}
                — To restore reminders after device reboot
              </li>
              <li>
                <strong className="text-white">
                  SCHEDULE_EXACT_ALARM
                </strong>{" "}
                — For precise reminder timing
              </li>
              <li>
                <strong className="text-white">FOREGROUND_SERVICE</strong> —
                For the Pomodoro timer
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              5. No Account Required
            </h2>
            <p>
              Stride does not require registration, login, or any account.
              We do not collect your name, email address, or any personal
              identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              6. Your Rights (GDPR & CCPA)
            </h2>
            <p>
              Since all your data is stored locally on your device, you can
              delete all data at any time by uninstalling the app. There is no
              data on our servers to request deletion of.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children</h2>
            <p>
              Stride is not directed at children under 13. We do not
              knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              For any privacy questions, contact us at{" "}
              <a
                href="mailto:contact@strideapp.co"
                className="text-emerald-400 underline"
              >
                contact@strideapp.co
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
