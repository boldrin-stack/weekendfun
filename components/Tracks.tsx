"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"
import { TRACKS } from "@/lib/constants"

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
          className="text-4xl sm:text-5xl font-bold text-[#1A1A18] mb-12 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Four tracks.<br />Four opportunities.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TRACKS.map((track, i) => (
            <motion.div
              key={track.id}
              custom={i + 2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="group relative rounded-2xl p-6 bg-white border border-[#1A1A18]/6 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A1A18]/6 transition-all duration-300 flex gap-5"
              style={{ borderLeft: `3px solid ${track.color}` }}
            >
              <div className="shrink-0 mt-0.5">
                <span
                  className="text-xs font-medium"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    color: track.color,
                  }}
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
                <p className="text-sm text-[#1A1A18]/55 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
