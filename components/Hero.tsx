"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { HERO_PILLS } from "@/lib/constants"
import { HERO_FADE_UP } from "@/lib/animations"
import Elephant from "@/components/Elephant"

const VIDEO_URL =
  "https://github.com/user-attachments/assets/ea237255-d3d4-4249-8d6d-35c7f6053f4d"

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
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Full-screen background video ── */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />

      {/* Dark gradient overlay — top-heavy so text stays legible */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(to bottom, rgba(10,20,15,0.82) 0%, rgba(10,20,15,0.65) 50%, rgba(10,20,15,0.80) 100%)",
        }}
      />

      {/* Subtle grid texture on top of video */}
      <div
        className="absolute inset-0 grid-texture"
        style={{ zIndex: 2, opacity: 0.35 }}
      />

      {/* Green orb top-right */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ zIndex: 2, background: "rgba(29,158,117,0.18)", filter: "blur(110px)" }}
      />

      {/* ── Content ── */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20" style={{ zIndex: 3 }}>

        {/* Pre-label */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={HERO_FADE_UP} className="mb-4">
          <span className="section-label" style={{ color: "rgba(246,245,241,0.5)" }}>
            August 2026 · KSUM, Kochi, Kerala
          </span>
        </motion.div>

        {/* Giant headline */}
        <div className="mb-6">
          <motion.div custom={1} initial="hidden" animate="visible" variants={HERO_FADE_UP}>
            <h1
              className="leading-[0.88] text-white select-none"
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
          className="text-xl sm:text-2xl text-white/80 mb-2 max-w-xl font-bold"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Where the backwaters meet the blockchain.
        </motion.p>

        {/* Description */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="text-base sm:text-lg text-white/50 mb-8 max-w-lg font-light"
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/8 text-sm text-white/70 backdrop-blur-sm"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              <span>{pill.emoji}</span>
              <span>{pill.label}</span>
            </span>
          ))}
        </motion.div>

        {/* Waitlist CTA */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={HERO_FADE_UP}
          className="flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <div className="flex flex-col gap-3">
            <a
              href="#waitlist"
              onClick={scrollToWaitlist}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1D9E75] text-white font-semibold text-lg hover:bg-[#178a64] transition-all duration-200 hover:shadow-xl hover:shadow-[#1D9E75]/40 active:scale-[0.98]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Get early access
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
              </svg>
            </a>
            <div className="flex items-center gap-2 pl-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] animate-pulse" />
              <span className="text-xs text-white/40" style={{ fontFamily: "var(--font-dm-mono)" }}>
                {count} builders already on the list
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-10 bg-white/10" />

          <p className="text-sm text-white/35 max-w-[220px] leading-snug">
            Early bird passes, speaker drops &amp; updates — waitlist first.
          </p>
        </motion.div>
      </div>

      {/* Elephant — floats over video, right side */}
      <div className="absolute bottom-0 right-4 lg:right-12 hidden md:block" style={{ zIndex: 3 }}>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Elephant />
        </motion.div>
      </div>

      {/* "KERALA WITH BLOCKCHAIN" stamp */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ zIndex: 3 }}
      >
        <span
          className="text-xs tracking-[0.3em] text-white/25"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          KERALA WITH BLOCKCHAIN
        </span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{ zIndex: 3 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <svg className="w-4 h-4 text-white/20" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v10m-4-4 4 4 4-4" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
