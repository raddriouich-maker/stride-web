"use client";

const items = [
  "⏱️ Pomodoro Timer", "✅ Habit Tracker", "😊 Mood Journal",
  "😴 Sleep Tracker", "💧 Water Intake", "🫁 Breathing", "🏆 Challenges",
  "📊 Weekly Stats", "🤝 Daily Coach", "🗓️ Calendar", "🔔 Smart Reminders",
  "🌍 10 Languages", "📤 Data Export", "🎨 8 Themes", "💯 100% Free",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden py-4" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <div className="flex gap-6 marquee-track">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.18)", color: "rgba(240,240,255,0.7)" }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
