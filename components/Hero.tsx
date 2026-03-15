"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HERO_PILLS } from "@/lib/constants"
import { HERO_FADE_UP } from "@/lib/animations"
import Elephant from "@/components/Elephant"
import NamasteVideo from "@/components/NamasteVideo"

const WAITLIST_STORAGE_KEY = "eth_kochi_waitlist_count"
const BASE_COUNT = 47

export default function Hero() {
  const [count, setCount] = useState(BASE_COUNT)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(WAITLIST_STORAGE_KEY)
      if (stored) setCount(parseInt(stored, 10))
    } catch {
      // localStorage not available
    }
  }, [])

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
        className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ background: "rgba(29, 158, 117, 0.14)", filter: "blur(120px)" }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "rgba(127, 119, 221, 0.12)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        {/* Pre-label */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={HERO_FADE_UP} className="mb-4">
          <span className="section-label">August 2026 · KSUM, Kochi, Kerala</span>
        </motion.div>

        {/* Giant headline */}
        <div className="mb-6">
          <motion.div custom={1} initial="hidden" animate="visible" variants={HERO_FADE_UP}>
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
          <motion.div custom={2} initial="hidden" animate="visible" variants={HERO_FADE_UP}>
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

        {/* Waitlist CTA — primary focus */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="flex flex-col sm:flex-row sm:items-center gap-5"
        >
          {/* Big waitlist block */}
          <div className="flex flex-col gap-3">
            <a
              href="#waitlist"
              onClick={scrollToWaitlist}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D9E75] text-white font-semibold text-lg hover:bg-[#178a64] transition-all duration-200 hover:shadow-xl hover:shadow-[#1D9E75]/30 active:scale-[0.98]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Get early access
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
              </svg>
            </a>
            {/* Live counter inline */}
            <div className="flex items-center gap-2 pl-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-pulse" />
              <span
                className="text-xs text-[#1A1A18]/45"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {count} builders already on the list
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-10 bg-[#1A1A18]/10" />

          {/* Secondary note */}
          <p className="text-sm text-[#1A1A18]/45 max-w-[220px] leading-snug">
            Early bird passes, speaker drops &amp; updates — waitlist first.
          </p>
        </motion.div>
      </div>

      {/* Elephant — right side decoration */}
      <div className="absolute bottom-0 right-4 lg:right-12 hidden md:block opacity-80">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Elephant />
        </motion.div>
      </div>

      {/* Namaste video — scroll-triggered, full-width bottom of hero */}
      <NamasteVideo />

      {/* SVG hands fallback hidden when video is present */}

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="section-label text-[#1A1A18]/25">scroll</span>
          <svg className="w-4 h-4 text-[#1A1A18]/20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v10m-4-4 4 4 4-4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
