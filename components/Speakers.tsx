"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"

function scrollToWaitlist(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
}

export default function Speakers() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="speakers" className="py-24 sm:py-32 bg-[#1A1A18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-4"
          style={{ color: "rgba(246,245,241,0.35)" }}
        >
          Speakers
        </motion.p>
        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-4xl sm:text-5xl font-bold text-[#F6F5F1] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Announcing soon.
        </motion.h2>
        <motion.p
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-[#F6F5F1]/45 mb-12 max-w-lg"
        >
          Speakers from across the Ethereum ecosystem. Announcements start May 2026.
        </motion.p>

        {/* Speaker placeholder grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              custom={i + 3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-full aspect-square rounded-2xl border border-white/8 bg-white/4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <span
                className="text-xs text-[#F6F5F1]/30"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                TBA
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          custom={9}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
        >
          <a
            href="#waitlist"
            onClick={scrollToWaitlist}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1D9E75]/40 text-[#1D9E75] text-sm font-medium hover:bg-[#1D9E75]/10 transition-colors duration-200"
          >
            Get notified when speakers are announced
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10m-4-4 4 4-4 4" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
