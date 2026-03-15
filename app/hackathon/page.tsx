import type { Metadata } from "next"
import { DEVFOLIO_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Hackathon — ETH Kochi 2026",
  description: "ETH Kochi 2026 Hackathon — 200 builders, sponsor bounties, 24 hours to ship.",
}

export default function HackathonPage() {
  return (
    <div className="min-h-screen bg-[#1A1A18] flex items-center justify-center pt-16">
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <p
          className="section-label mb-4"
          style={{ color: "rgba(246,245,241,0.35)" }}
        >
          Hackathon
        </p>
        <h1
          className="text-5xl sm:text-6xl font-bold text-[#F6F5F1] mb-6 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Hackathon details<br />coming soon.
        </h1>
        <p className="text-lg text-[#F6F5F1]/50 mb-10 leading-relaxed">
          200 builders. Sponsor bounties. Mentors on the floor. 24 hours to ship something real.
          Full details dropping soon — register your interest on Devfolio in the meantime.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={DEVFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D9E75] text-white font-medium hover:bg-[#178a64] transition-colors duration-200"
          >
            {/* TODO: Update DEVFOLIO_URL in lib/constants.ts with actual event URL */}
            Register on Devfolio
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13 13 3m0 0H6m7 0v7" />
            </svg>
          </a>
          <a
            href="/#waitlist"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-[#F6F5F1]/65 hover:border-white/30 hover:text-[#F6F5F1] transition-all duration-200 font-medium"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  )
}
