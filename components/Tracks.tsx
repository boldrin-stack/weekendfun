"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"
import { TRACKS } from "@/lib/constants"

function scrollToWaitlist(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
}

export default function Tracks() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="tracks" className="py-24 sm:py-32 bg-[#F6F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-4"
        >
          Tracks
        </motion.p>
        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-4xl sm:text-5xl font-bold text-[#1A1A18] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Four tracks.<br />Four opportunities.
        </motion.h2>
        <motion.p
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-[#1A1A18]/50 mb-12 max-w-md"
        >
          Track details dropping soon. Get on the waitlist to be first to know.
        </motion.p>

        {/* Blurred grid with reveal overlay */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="relative"
        >
          {/* Cards — blurred & non-interactive */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 select-none pointer-events-none"
            style={{ filter: "blur(5px)", opacity: 0.4 }}
          >
            {TRACKS.map((track) => (
              <div
                key={track.id}
                className="rounded-2xl p-6 bg-white border border-[#1A1A18]/6 flex gap-5"
                style={{ borderLeft: `3px solid ${track.color}` }}
              >
                <div className="shrink-0 mt-0.5">
                  <span
                    className="text-xs font-medium"
                    style={{ fontFamily: "var(--font-dm-mono)", color: track.color }}
                  >
                    {track.id}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-[#1A1A18] mb-1.5"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {track.title}
                  </h3>
                  <p className="text-sm text-[#1A1A18]/55 leading-relaxed">{track.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-8 py-7 rounded-2xl bg-[#F6F5F1]/90 backdrop-blur-sm border border-[#1A1A18]/8 shadow-lg">
              <span className="section-label block mb-3">Revealing soon</span>
              <p
                className="text-xl sm:text-2xl font-bold text-[#1A1A18] mb-5 leading-snug"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                4 tracks. Details dropping<br className="hidden sm:block" /> before August.
              </p>
              <a
                href="#waitlist"
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1D9E75] text-white text-sm font-medium hover:bg-[#178a64] transition-colors duration-200"
              >
                Notify me first
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
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
