import type { Metadata } from "next"
import { SPONSOR_TIERS, EMAIL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Sponsors — ETH Kochi 2026",
  description: "Sponsor ETH Kochi 2026 and reach 500+ Ethereum builders across South India.",
}

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-[#F6F5F1] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-4">Sponsors</p>
          <h1
            className="text-5xl sm:text-6xl font-bold text-[#1A1A18] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Sponsor<br />ETH Kochi 2026.
          </h1>
          <p className="text-xl text-[#1A1A18]/55 mb-8 leading-relaxed">
            Reach 500+ Ethereum builders across South India. Sponsor bounties, tracks, and more.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1D9E75] text-white font-medium hover:bg-[#178a64] transition-colors duration-200"
          >
            Become a Sponsor
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Sponsor tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPONSOR_TIERS.map((tier, i) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-6 border flex flex-col gap-5 ${
                i === 0
                  ? "bg-[#1A1A18] border-[#1A1A18] text-white"
                  : "bg-white border-[#1A1A18]/8"
              }`}
            >
              <div>
                <p
                  className={`section-label mb-2 ${i === 0 ? "" : ""}`}
                  style={{ color: i === 0 ? "rgba(246,245,241,0.35)" : undefined }}
                >
                  {tier.name}
                </p>
                <p
                  className={`text-3xl font-bold ${i === 0 ? "text-[#F6F5F1]" : "text-[#1A1A18]"}`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {tier.price}
                </p>
              </div>

              <ul className="flex-1 space-y-2">
                {tier.perks.map((perk) => (
                  <li
                    key={perk}
                    className={`flex items-start gap-2 text-sm ${
                      i === 0 ? "text-[#F6F5F1]/65" : "text-[#1A1A18]/60"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 shrink-0 mt-0.5 ${i === 0 ? "text-[#1D9E75]" : "text-[#1D9E75]"}`}
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l4 4 6-6" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${EMAIL}?subject=ETH Kochi 2026 ${tier.name} Sponsorship`}
                className={`inline-flex items-center justify-center py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  i === 0
                    ? "bg-[#1D9E75] text-white hover:bg-[#178a64]"
                    : "bg-[#1A1A18]/6 text-[#1A1A18] hover:bg-[#1A1A18]/12"
                }`}
              >
                Get in touch
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-[#1A1A18]/6">
          <p className="text-[#1A1A18]/55 text-sm">
            Custom sponsorship packages available. Reach out at{" "}
            <a href={`mailto:${EMAIL}`} className="text-[#1D9E75] hover:underline font-medium">
              {EMAIL}
            </a>{" "}
            to discuss what works best for your brand.
          </p>
        </div>
      </div>
    </div>
  )
}
