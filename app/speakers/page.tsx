import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Speakers — ETH Kochi 2026",
  description: "Speaker lineup for ETH Kochi 2026. Announcements start May 2026.",
}

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] flex items-center justify-center pt-16">
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <p
          className="section-label mb-4"
        >
          Speakers
        </p>
        <h1
          className="text-5xl sm:text-6xl font-bold text-[#1A1A18] mb-6 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Coming soon.
        </h1>
        <p className="text-lg text-[#1A1A18]/55 mb-10 leading-relaxed">
          We&apos;re curating an incredible lineup of Ethereum builders, researchers, and founders.
          Speaker announcements start May 2026.
        </p>
        <a
          href="/#waitlist"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D9E75] text-white font-medium hover:bg-[#178a64] transition-colors duration-200"
        >
          Get notified when speakers are announced
        </a>
      </div>
    </div>
  )
}
