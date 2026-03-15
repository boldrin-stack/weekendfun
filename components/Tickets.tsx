"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"

function scrollToWaitlist(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
}

const PASS_TYPES = [
  {
    label: "Conference Pass",
    icon: "🎤",
    hint: "Day 1 · Talks, panels, networking",
  },
  {
    label: "Hackathon Pass",
    icon: "⚡",
    hint: "Day 2 · 24h build, bounties, mentors",
  },
  {
    label: "Builder Pass",
    icon: "🔥",
    hint: "Both days · Best value",
    highlight: true,
  },
]

export default function Tickets() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="tickets" className="py-24 sm:py-32 bg-[#F6F5F1] grid-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-4"
        >
          Passes
        </motion.p>
        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-4xl sm:text-5xl font-bold text-[#1A1A18] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Passes reveal soon.
        </motion.h2>
        <motion.p
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-[#1A1A18]/55 mb-12 max-w-lg leading-relaxed"
        >
          Waitlist members get early bird pricing before public launch.
          Join now to lock your spot.
        </motion.p>

        {/* Pass type preview — no prices */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {PASS_TYPES.map((pass, i) => (
            <motion.div
              key={pass.label}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className={`relative rounded-2xl p-6 border flex flex-col gap-4
                ${pass.highlight
                  ? "bg-[#1A1A18] border-[#1A1A18]"
                  : "bg-white border-[#1A1A18]/8"
                }`}
            >
              {pass.highlight && (
                <span
                  className="absolute -top-2.5 left-5 text-xs font-medium px-3 py-1 rounded-full bg-[#1D9E75] text-white"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Best value
                </span>
              )}
              <span className="text-3xl">{pass.icon}</span>
              <div>
                <h3
                  className={`text-lg font-bold mb-1 ${pass.highlight ? "text-white" : "text-[#1A1A18]"}`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {pass.label}
                </h3>
                <p className={`text-sm ${pass.highlight ? "text-white/50" : "text-[#1A1A18]/45"}`}>
                  {pass.hint}
                </p>
              </div>
              {/* Price placeholder */}
              <div
                className={`inline-flex items-center gap-2 text-sm ${pass.highlight ? "text-white/35" : "text-[#1A1A18]/30"}`}
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                <span className="w-12 h-4 rounded bg-current opacity-20 inline-block" />
                <span>Price TBA</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single CTA */}
        <motion.div
          custom={6}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1D9E75] text-white font-medium hover:bg-[#178a64] transition-colors duration-200"
          >
            Join waitlist for early bird pricing
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
            </svg>
          </a>
          <p className="text-sm text-[#1A1A18]/40">
            Student discounts available · College ID required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
