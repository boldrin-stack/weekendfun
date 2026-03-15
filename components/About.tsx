"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { STATS } from "@/lib/constants"
import { useCountUp } from "@/lib/useCountUp"
import { FADE_UP } from "@/lib/animations"

function StatNumber({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const numericPart = parseInt(value.replace(/\D/g, ""), 10)
  const suffix = value.replace(/[0-9]/g, "")
  const count = useCountUp(inView ? numericPart : 0, 1400)

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span
        className="text-4xl sm:text-5xl font-bold leading-none text-[#1A1A18]"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        {count}
        {suffix}
      </span>
      <span className="section-label">{label}</span>
    </div>
  )
}

const ELEPHANT_VIDEO = "https://github.com/user-attachments/assets/794d188c-629d-49e4-9e5d-6ef89bd87188"

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="about" className="py-24 sm:py-32 bg-[#F6F5F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">

          {/* Left: copy */}
          <div>
            <motion.p
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="section-label mb-4"
            >
              About
            </motion.p>
            <motion.h2
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="text-4xl sm:text-5xl font-bold text-[#1A1A18] mb-8 leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Kerala is ready.
            </motion.h2>
            <motion.p
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="text-lg text-[#1A1A18]/65 mb-5 leading-relaxed"
            >
              Kochi is home to one of India&apos;s fastest-growing tech ecosystems — backed by KSUM, a thriving FOSS culture, and thousands of engineering graduates every year.
            </motion.p>
            <motion.p
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={FADE_UP}
              className="text-lg text-[#1A1A18]/65 leading-relaxed"
            >
              ETH Kochi brings the Ethereum ecosystem to South India for the first time. Two days. One conference. One hackathon. 500+ builders, students, and founders in one room.
            </motion.p>
          </div>

          {/* Centre: elephant video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center"
          >
            <video
              src={ELEPHANT_VIDEO}
              autoPlay
              muted
              loop
              playsInline
              className="w-64 lg:w-80 xl:w-96 object-contain drop-shadow-2xl"
              style={{ maxHeight: "520px" }}
            />
          </motion.div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i + 2}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={FADE_UP}
                className="p-6 rounded-2xl bg-white border border-[#1A1A18]/6"
              >
                <StatNumber value={stat.number} label={stat.label} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
