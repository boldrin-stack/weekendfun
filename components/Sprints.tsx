"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"
import { SPRINT_THEMES } from "@/lib/constants"

function scrollToWaitlist(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
}

export default function Sprints() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="sprints" className="py-24 sm:py-32 bg-[#F6F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="section-label mb-4"
            >
              Pre-Event
            </motion.p>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="text-4xl sm:text-5xl font-bold text-[#1A1A18] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Weekly AI × Web3<br />Build Sprints
            </motion.h2>
            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="text-lg text-[#1A1A18]/60 mb-8 leading-relaxed"
            >
              Starting May 2026 at Tinker Space, Kochi. Build AI-powered Web3 products every week
              with free LLM API grants. 6 sprints, all skill levels welcome. Best builders get
              fast-tracked to the hackathon.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="flex flex-wrap gap-3 mb-8"
            >
              {["6 Sprints", "Free LLM API grants", "All skill levels", "Fast-track to hackathon"].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-full bg-[#1D9E75]/10 text-[#1D9E75] text-sm font-medium"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
            >
              <a
                href="#waitlist"
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D9E75] text-white text-sm font-medium hover:bg-[#178a64] transition-colors duration-200"
              >
                Join the sprint series
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Sprint list */}
          <div className="space-y-3">
            {SPRINT_THEMES.map((sprint, i) => (
              <motion.div
                key={sprint.number}
                custom={i + 5}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={FADE_UP}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#1A1A18]/6 hover:border-[#1D9E75]/30 hover:bg-[#f0faf6] transition-colors duration-200"
              >
                <span
                  className="shrink-0 text-xs text-[#1D9E75] pt-0.5"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Sprint {sprint.number}
                </span>
                <p className="text-sm font-medium text-[#1A1A18]/75 leading-relaxed">
                  {sprint.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
