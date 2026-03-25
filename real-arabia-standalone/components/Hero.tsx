"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/*
  Hero Section – Real Arabia
  ─────────────────────────────────────────────────────────────
  Layout: Full-screen split scene.
  Left half  → Arabic courtyard grill (shawarma spit, al-faham grill).
  Right half → Kerala waterfront / Kochi night street with lights.
  Overlaid: logo, heading, sub-heading, two CTAs.

  Animations (Framer Motion):
  • Parallax: left/right panels shift at different scroll rates via
    useScroll + useTransform on translateY.
  • Steam: CSS keyframe `.ra-steam` (see real-arabia.css).
  • Lantern glow: CSS keyframe `.ra-lantern`.
  • Hero text + CTAs: fade-up on mount with staggered delay.
  • Mobile: split becomes stacked; both panels visible top → bottom.
  ─────────────────────────────────────────────────────────────
*/

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Parallax transforms for the two background panels
  const leftY  = useTransform(scrollY, [0, 600], [0, 80])
  const rightY = useTransform(scrollY, [0, 600], [0, 40])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex items-end"
      style={{ background: "var(--ra-dark)" }}
    >
      {/* ── Mashrabiya overlay ──────────────────────────────── */}
      <div className="absolute inset-0 ra-mashrabiya pointer-events-none z-10" />

      {/* ── Split background panels ─────────────────────────── */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left – Arabic grill scene */}
        <motion.div
          style={{ y: leftY }}
          className="relative w-full md:w-1/2 h-1/2 md:h-full flex-shrink-0"
        >
          {/* Simulated grill-scene gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 60% 80%, #8B2500 0%, #3D1200 40%, #1A0D0D 100%)",
            }}
          />
          {/* Arch silhouette frame */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-64 opacity-20"
            style={{
              background: "rgba(201,151,58,0.15)",
              borderRadius: "50% 50% 0 0 / 35% 35% 0 0",
              border: "1px solid rgba(201,151,58,0.3)",
            }}
          />
          {/* Hanging lanterns */}
          <div className="absolute top-8 left-1/4 flex gap-8">
            <LanternSVG />
            <LanternSVG delay={0.6} />
            <LanternSVG delay={1.2} />
          </div>
          {/* Grill glow */}
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(ellipse, #FF6B00 0%, rgba(255,107,0,0) 70%)",
              filter: "blur(6px)",
            }}
          />
          {/* Steam plumes */}
          <div className="absolute bottom-16 left-[44%] flex gap-3">
            <SteamPlume />
            <SteamPlume extraClass="ra-steam-2" />
            <SteamPlume extraClass="ra-steam-3" />
          </div>
          {/* Shawarma spit icon */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 ra-spit-spin opacity-70">
            <ShawarmaSpit />
          </div>
        </motion.div>

        {/* Right – Kerala waterfront */}
        <motion.div
          style={{ y: rightY }}
          className="relative w-full md:w-1/2 h-1/2 md:h-full flex-shrink-0"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 40% 70%, #0A2E1F 0%, #061A10 40%, #1A0D0D 100%)",
            }}
          />
          {/* Night sky gradient */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "linear-gradient(to bottom, #0D1B2A 0%, transparent 60%)",
            }}
          />
          {/* Stars */}
          <div className="absolute top-6 right-8 w-1 h-1 rounded-full bg-white ra-star" />
          <div className="absolute top-14 right-20 w-0.5 h-0.5 rounded-full bg-white ra-star ra-star-2" />
          <div className="absolute top-10 right-36 w-1 h-1 rounded-full bg-white ra-star ra-star-3" />
          <div className="absolute top-20 right-12 w-0.5 h-0.5 rounded-full bg-white ra-star" style={{ animationDelay: "0.3s" }} />
          {/* Coconut tree silhouettes */}
          <CoconutTreeSVG className="absolute bottom-0 left-8 opacity-60" height={180} />
          <CoconutTreeSVG className="absolute bottom-0 right-12 opacity-40" height={140} />
          {/* Houseboat silhouette */}
          <HouseboatSVG className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-50" />
          {/* Water reflection */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(27,107,58,0.15))",
            }}
          />
          {/* String lights */}
          <div className="absolute top-24 left-0 right-0 flex justify-around">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full ra-star"
                style={{
                  background: i % 2 === 0 ? "#C9973A" : "#FF6B35",
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: `0 0 6px ${i % 2 === 0 ? "#C9973A" : "#FF6B35"}`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Gradient overlay (bottom fade to dark) ────────────── */}
      <div className="absolute inset-0 ra-hero-gradient z-20 pointer-events-none" />
      <div className="absolute inset-0 ra-vignette z-20 pointer-events-none" />

      {/* ── Center seam – gold divider line ─────────────────── */}
      <div
        className="absolute top-0 bottom-0 left-1/2 -translate-x-px w-px z-25 hidden md:block"
        style={{ background: "linear-gradient(to bottom, transparent, var(--ra-gold), transparent)" }}
      />

      {/* ── Foreground content ──────────────────────────────── */}
      <div className="relative z-30 w-full px-6 md:px-16 pb-16 md:pb-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute top-8 left-1/2 -translate-x-1/2 text-center"
        >
          <div className="ra-label mb-1">كوچي  ·  Kochi</div>
          <div
            className="ra-display text-2xl md:text-3xl"
            style={{ color: "var(--ra-gold)", letterSpacing: "0.08em" }}
          >
            ◆ REAL ARABIA ◆
          </div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="ra-label mb-4"
          >
            Where Arabia meets Kerala
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="ra-display text-5xl md:text-7xl lg:text-8xl mb-6"
            style={{ color: "var(--ra-sand)" }}
          >
            Grilled to{" "}
            <span style={{ color: "var(--ra-gold)" }}>Perfection.</span>
            <br />
            Served with{" "}
            <span style={{ color: "var(--ra-green)" }}>Soul.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(242,232,213,0.7)" }}
          >
            Authentic shawarma, al-faham grills, and Kerala-fused Arabic flavours —
            straight from the charcoal, straight to your heart.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#menu" className="ra-btn-primary text-center">
              View Menu
            </a>
            <a href="#order" className="ra-btn-outline text-center">
              Order Now{" "}
              <span className="ml-2 opacity-60 text-sm">ഓർഡർ ചെയ്യൂ</span>
            </a>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="ra-label" style={{ color: "rgba(201,151,58,0.5)" }}>scroll</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-0.5 h-8"
            style={{ background: "linear-gradient(to bottom, var(--ra-gold), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  )
}

/* ── Small inline SVG helpers ─────────────────────────── */

function LanternSVG({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      width="18" height="36"
      viewBox="0 0 18 36"
      className="ra-lantern"
      style={{ animationDelay: `${delay}s` }}
    >
      <line x1="9" y1="0" x2="9" y2="5" stroke="#C9973A" strokeWidth="1.5" />
      <rect x="4" y="5" width="10" height="22" rx="5" fill="rgba(201,151,58,0.6)" />
      <ellipse cx="9" cy="6" rx="5" ry="2" fill="#C9973A" />
      <ellipse cx="9" cy="26" rx="5" ry="2" fill="#C9973A" />
      <line x1="9" y1="28" x2="9" y2="36" stroke="#C9973A" strokeWidth="1.5" />
    </svg>
  )
}

function SteamPlume({ extraClass = "" }: { extraClass?: string }) {
  return (
    <div
      className={`ra-steam ${extraClass} w-2 h-8 rounded-full opacity-40`}
      style={{ background: "linear-gradient(to top, rgba(255,255,255,0.6), transparent)" }}
    />
  )
}

function ShawarmaSpit() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(201,151,58,0.4)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="16" cy="16" r="8" fill="rgba(139,69,0,0.5)" />
      <circle cx="16" cy="16" r="3" fill="rgba(201,151,58,0.8)" />
    </svg>
  )
}

function CoconutTreeSVG({ className = "", height = 160 }: { className?: string; height?: number }) {
  const w = height * 0.4
  return (
    <svg width={w} height={height} viewBox="0 0 60 200" className={className}>
      {/* Trunk */}
      <path d="M28 200 Q30 160 32 120 Q34 80 30 40" stroke="#4A3728" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Fronds */}
      <path d="M30 40 Q10 20 0 30" stroke="#1B6B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 40 Q50 15 60 25" stroke="#1B6B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 40 Q20 10 25 0" stroke="#1B6B3A" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M30 40 Q40 10 38 0" stroke="#1B6B3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M30 40 Q5 35 0 45" stroke="#1B6B3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M30 40 Q55 35 60 45" stroke="#1B6B3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function HouseboatSVG({ className = "" }: { className?: string }) {
  return (
    <svg width="200" height="60" viewBox="0 0 200 60" className={className}>
      {/* Hull */}
      <path d="M10 45 Q100 55 190 45 L185 52 Q100 62 15 52 Z" fill="#2E1A0A" />
      {/* Cabin */}
      <rect x="40" y="20" width="120" height="28" rx="2" fill="#3D2510" />
      {/* Sloped Kerala roof */}
      <path d="M30 22 L100 8 L170 22 Z" fill="#4A3020" />
      {/* Windows */}
      <rect x="55" y="28" width="14" height="12" rx="1" fill="rgba(201,151,58,0.5)" />
      <rect x="80" y="28" width="14" height="12" rx="1" fill="rgba(201,151,58,0.3)" />
      <rect x="105" y="28" width="14" height="12" rx="1" fill="rgba(201,151,58,0.5)" />
      <rect x="130" y="28" width="14" height="12" rx="1" fill="rgba(201,151,58,0.2)" />
    </svg>
  )
}
