"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

/*
  Reviews Section
  ─────────────────────────────────────────────────────────────
  Auto-advance carousel of customer quotes.
  Cards shaped like Arabic windows (arched top, border-radius trick).
  Background: soft mashrabiya pattern + floating icons.

  Animation:
  • Active card: fade + scale(0.96 → 1) on entry, fade out on exit.
    AnimatePresence handles the swap; auto-advance via setInterval.
    Interval pauses on hover (clearInterval in onMouseEnter).
  • Floating icons: gentle float up/down using Framer Motion animate loop.
  • Dots nav: click to jump to a specific review.
  ─────────────────────────────────────────────────────────────
*/

const REVIEWS = [
  {
    id: 1,
    name: "Anjana R.",
    area: "Fort Kochi",
    rating: 5,
    text: "Best shawarma in Kochi, no contest! The garlic sauce alone is worth the trip. My whole family goes every Friday night.",
    avatar: "🧕",
  },
  {
    id: 2,
    name: "Rahul M.",
    area: "Edappally",
    rating: 5,
    text: "The Al-Faham here reminds me of the real deal from Oman. The spice blend is perfect — smoky, aromatic, and not too heavy.",
    avatar: "👨",
  },
  {
    id: 3,
    name: "Fathima K.",
    area: "Kakkanad",
    rating: 5,
    text: "Love the Porotta Combo! It's uniquely Kochi — you can taste both the Arabic spices and the Kerala touch in every bite.",
    avatar: "👩",
  },
  {
    id: 4,
    name: "Thomas V.",
    area: "Palarivattom",
    rating: 4,
    text: "Ordered the family combo for my son's birthday. Fast delivery, generous portions, and the Mandi rice was absolutely fragrant!",
    avatar: "🧔",
  },
  {
    id: 5,
    name: "Sreelakshmi P.",
    area: "Aluva",
    rating: 5,
    text: "The beef shawarma here has the perfect balance of heat and tang. Plus it actually stays intact — no messy wrap falling apart!",
    avatar: "👩‍🦱",
  },
]

const FLOAT_ICONS = ["⭐", "🌶️", "🌯", "✨", "🍗", "🥙", "⭐", "✨"]

export default function Reviews() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: "-80px" })
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advance = useCallback(() => {
    setActiveIdx((i) => (i + 1) % REVIEWS.length)
  }, [])

  // Auto-advance every 4s; pause on hover
  useEffect(() => {
    if (paused || !isInView) return
    intervalRef.current = setInterval(advance, 4000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, isInView, advance])

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="py-20 md:py-28 px-6 md:px-16 relative overflow-hidden"
      style={{ background: "var(--ra-dark)" }}
    >
      {/* Mashrabiya bg */}
      <div className="absolute inset-0 ra-mashrabiya opacity-40 pointer-events-none" />

      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOAT_ICONS.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            style={{
              left: `${(i * 13 + 5) % 95}%`,
              top: `${(i * 17 + 10) % 80}%`,
            }}
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="ra-label mb-3">Customer Love · ഉപഭോക്‌താക്കൾ</p>
          <h2
            className="ra-display text-4xl md:text-5xl"
            style={{ color: "var(--ra-sand)" }}
          >
            What Kochi{" "}
            <span style={{ color: "var(--ra-gold)" }}>Says</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative min-h-[280px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={REVIEWS[activeIdx].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="ra-review-card"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 justify-center">
                {Array.from({ length: REVIEWS[activeIdx].rating }).map((_, i) => (
                  <span key={i} className="text-lg" style={{ color: "var(--ra-gold)" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-base md:text-lg leading-relaxed text-center mb-6 italic"
                style={{ color: "rgba(242,232,213,0.85)" }}
              >
                &ldquo;{REVIEWS[activeIdx].text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">{REVIEWS[activeIdx].avatar}</span>
                <div>
                  <div
                    className="ra-display text-base"
                    style={{ color: "var(--ra-sand)" }}
                  >
                    {REVIEWS[activeIdx].name}
                  </div>
                  <div className="ra-label" style={{ color: "var(--ra-green)", fontSize: "0.62rem" }}>
                    {REVIEWS[activeIdx].area}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex gap-3 justify-center mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIdx ? "24px" : "8px",
                height: "8px",
                background: i === activeIdx ? "var(--ra-gold)" : "rgba(201,151,58,0.3)",
              }}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            className="ra-btn-outline text-sm py-2 px-4"
            onClick={() => setActiveIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
          >
            ← Prev
          </button>
          <button
            className="ra-btn-outline text-sm py-2 px-4"
            onClick={advance}
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}
