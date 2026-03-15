"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"

const days = [
  {
    day: "Day 01",
    title: "Conference",
    description:
      "300+ attendees. Keynotes, panels, and talks across 4 tracks. Builders, founders, and researchers on one stage.",
    color: "#1D9E75",
    icon: "🎤",
  },
  {
    day: "Day 02",
    title: "Hackathon",
    description:
      "200 builders. Sponsor bounties. Mentors on the floor. 24 hours to ship something real.",
    color: "#7F77DD",
    icon: "⚡",
  },
]

export default function EventFormat() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="event" className="py-24 sm:py-32 bg-[#1A1A18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-4"
          style={{ color: "rgba(246,245,241,0.35)" }}
        >
          The Event
        </motion.p>
        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-4xl sm:text-5xl font-bold text-[#F6F5F1] mb-12 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Two days.<br />One mission.
        </motion.h2>

        {/* Day cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {days.map((day, i) => (
            <motion.div
              key={day.day}
              custom={i + 2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="group relative rounded-3xl p-8 border border-white/8 overflow-hidden hover:-translate-y-1 transition-transform duration-300"
              style={{ background: "rgba(246,245,241,0.04)" }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ background: day.color }}
              />

              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: day.color,
                  }}
                >
                  {day.day}
                </span>
                <span className="text-3xl">{day.icon}</span>
              </div>

              <h3
                className="text-3xl font-bold text-[#F6F5F1] mb-4"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {day.title}
              </h3>
              <p className="text-[#F6F5F1]/55 leading-relaxed">
                {day.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlight strip */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="rounded-2xl p-6 border border-[#BA7517]/30"
          style={{ background: "rgba(186, 117, 23, 0.08)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="text-2xl">🌱</span>
            <div>
              <p className="text-[#BA7517] font-medium mb-1">Pre-event</p>
              <p className="text-[#F6F5F1]/65 text-sm leading-relaxed">
                Weekly AI × Web3 build sprints at Tinker Space starting May 2026.
                Free LLM API grants for all participants.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
