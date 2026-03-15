"use client"

import { motion } from "framer-motion"
import { HERO_PILLS } from "@/lib/constants"
import { HERO_FADE_UP } from "@/lib/animations"

export default function Hero() {
  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden grid-texture"
      aria-label="Hero"
    >
      {/* Background orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "rgba(29, 158, 117, 0.18)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: "rgba(127, 119, 221, 0.16)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Pre-label */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="mb-4"
        >
          <span
            className="section-label"
          >
            August 2026 · KSUM, Kochi, Kerala
          </span>
        </motion.div>

        {/* Giant headline */}
        <div className="mb-6">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={HERO_FADE_UP}
          >
            <h1
              className="leading-[0.88] text-[#1A1A18] select-none"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(5rem, 18vw, 14rem)",
                letterSpacing: "-0.02em",
              }}
            >
              ETH
            </h1>
          </motion.div>
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={HERO_FADE_UP}
          >
            <h1
              className="leading-[0.88] select-none"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(5rem, 18vw, 14rem)",
                letterSpacing: "-0.02em",
                color: "#1D9E75",
              }}
            >
              Kochi
            </h1>
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="text-xl sm:text-2xl text-[#1A1A18]/75 mb-2 max-w-xl"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          Where the backwaters meet the blockchain.
        </motion.p>

        {/* Description */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="text-base sm:text-lg text-[#1A1A18]/55 mb-8 max-w-lg font-light"
        >
          South India&apos;s first Ethereum conference &amp; hackathon.
          August 2026, Kochi, Kerala.
        </motion.p>

        {/* Pills */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="flex flex-wrap gap-2 mb-10"
        >
          {HERO_PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A18]/6 border border-[#1A1A18]/10 text-sm text-[#1A1A18]/70"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              <span>{pill.emoji}</span>
              <span>{pill.label}</span>
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1D9E75] text-white font-medium text-base hover:bg-[#178a64] transition-all duration-200 hover:shadow-lg hover:shadow-[#1D9E75]/25 active:scale-[0.98]"
          >
            Join the waitlist
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
            </svg>
          </a>
          <a
            href="/hackathon"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#1A1A18]/15 text-[#1A1A18]/70 font-medium text-base hover:border-[#1A1A18]/30 hover:text-[#1A1A18] transition-all duration-200"
          >
            Hackathon details
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs text-[#1A1A18]/30 section-label">scroll</span>
          <svg className="w-4 h-4 text-[#1A1A18]/25" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v10m-4-4 4 4 4-4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
