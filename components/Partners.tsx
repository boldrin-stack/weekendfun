"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"
import { PARTNERS, EMAIL } from "@/lib/constants"

export default function Partners() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="partners" className="py-24 sm:py-32 bg-[#1A1A18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-4"
          style={{ color: "rgba(246,245,241,0.35)" }}
        >
          Community & Partners
        </motion.p>
        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-4xl sm:text-5xl font-bold text-[#F6F5F1] mb-12 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Built with the community.
        </motion.h2>

        {/* Partner pills */}
        <motion.div
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="flex flex-wrap gap-3 mb-6"
        >
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/6 border border-white/10 text-[#F6F5F1]/65 text-sm font-medium hover:bg-white/10 hover:text-[#F6F5F1] hover:border-[#1D9E75]/40 transition-all duration-200"
            >
              {partner.name}
            </a>
          ))}
        </motion.div>

        <motion.p
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-[#F6F5F1]/35 text-sm mb-16"
        >
          Interested in partnering?{" "}
          <a
            href={`mailto:${EMAIL}`}
            className="text-[#1D9E75] hover:underline"
          >
            {EMAIL}
          </a>
        </motion.p>

        {/* Sponsor sub-section */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="rounded-3xl p-8 sm:p-12 border border-white/8"
          style={{ background: "rgba(246,245,241,0.04)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div className="max-w-lg">
              <p className="section-label mb-3" style={{ color: "rgba(246,245,241,0.35)" }}>
                Sponsor ETH Kochi
              </p>
              <h3
                className="text-2xl sm:text-3xl font-bold text-[#F6F5F1] mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Reach 500+ Ethereum builders across South India.
              </h3>
              <p className="text-[#F6F5F1]/50 leading-relaxed">
                Sponsor bounties, tracks, and more. Get your brand in front of the next wave of Web3 builders.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="/sponsors"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1D9E75] text-white font-medium hover:bg-[#178a64] transition-colors duration-200 whitespace-nowrap"
              >
                View Sponsor Tiers
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
