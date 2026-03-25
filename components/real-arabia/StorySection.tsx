"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

/*
  StorySection – "From Arabia to Kochi"
  ─────────────────────────────────────────────────────────────
  Two-column section:
    Left  → Brand story text
    Right → SVG journey map: Arabian desert → spice route → Kerala coast

  Animation:
  • SVG path: stroke-dashoffset trick (CSS class `.ra-path-draw`).
    When section enters view → add `.ra-drawn` class → dashoffset 0.
    Transition: 2s ease (defined in real-arabia.css).
  • Icons: fade + slide-up stagger via Framer Motion, triggered by
    useInView with `once: true`.
  ─────────────────────────────────────────────────────────────
*/

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pathRef    = useRef<SVGPathElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: "-80px" })

  // Trigger CSS class-based path drawing
  useEffect(() => {
    if (isInView && pathRef.current) {
      pathRef.current.classList.add("ra-drawn")
    }
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-20 md:py-32 px-6 md:px-16 ra-mashrabiya"
      style={{ background: "var(--ra-smoke)" }}
    >
      {/* Kasavu top border */}
      <div className="ra-kasavu-top mb-16" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* ── Left: Story text ────────────────────────────── */}
        <div>
          <motion.p
            className="ra-label mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Story · ഞങ്ങളുടെ കഥ
          </motion.p>

          <motion.h2
            className="ra-display text-4xl md:text-5xl mb-8"
            style={{ color: "var(--ra-sand)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            From Arabia{" "}
            <span style={{ color: "var(--ra-gold)" }}>to</span>{" "}
            <span style={{ color: "var(--ra-green)" }}>Kochi</span>
          </motion.h2>

          {[
            "Real Arabia was born from a simple love — the smoky scent of charcoal, the warmth of Arabic spices, and the vibrant street life of Kochi's lanes.",
            "Our founders travelled the Gulf, learning the art of al-faham grilling and slow-cooked mandi, then brought those traditions home to Kerala — fusing them with the bold, coconut-rich soul of Malayali cooking.",
            "Today, Real Arabia serves thousands across Kochi, a place where every shawarma roll carries the story of two cultures meeting at the water's edge.",
          ].map((para, i) => (
            <motion.p
              key={i}
              className="mb-5 text-base md:text-lg leading-relaxed"
              style={{ color: "rgba(242,232,213,0.7)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.15 }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#locations" className="ra-btn-primary inline-block mt-4">
              Find Us Near You
            </a>
          </motion.div>
        </div>

        {/* ── Right: Journey map ───────────────────────────── */}
        <div className="flex justify-center">
          <JourneyMap pathRef={pathRef} isInView={isInView} />
        </div>
      </div>

      {/* Kasavu bottom border */}
      <div className="ra-kasavu mt-16" />
    </section>
  )
}

/* Journey SVG map with dotted animated path + milestone icons */
function JourneyMap({
  pathRef,
  isInView,
}: {
  pathRef: React.RefObject<SVGPathElement | null>
  isInView: boolean
}) {
  const milestones = [
    { x: 60,  y: 60,  emoji: "🏜️", label: "Arabia" },
    { x: 150, y: 110, emoji: "🌶️", label: "Spice Route" },
    { x: 200, y: 180, emoji: "⚓",  label: "Kochi Port" },
    { x: 240, y: 270, emoji: "🥥",  label: "Kerala" },
  ]

  return (
    <div
      className="relative rounded-lg p-4"
      style={{
        background: "rgba(26,13,13,0.6)",
        border: "1px solid rgba(201,151,58,0.2)",
        width: "300px",
        height: "360px",
      }}
    >
      <svg
        width="300"
        height="360"
        viewBox="0 0 300 360"
        className="absolute inset-0"
      >
        {/* Animated journey path */}
        <path
          ref={pathRef}
          d="M60,60 C90,80 120,95 150,110 C180,125 195,155 200,180 C205,205 225,245 240,270"
          fill="none"
          stroke="var(--ra-gold)"
          strokeWidth="2"
          strokeDasharray="6 4"
          className="ra-path-draw"
          style={{ transition: "stroke-dashoffset 2s ease" }}
        />

        {/* Milestone dots */}
        {milestones.map((m, i) => (
          <circle
            key={i}
            cx={m.x}
            cy={m.y}
            r="6"
            fill="var(--ra-gold)"
            opacity="0.4"
          />
        ))}
      </svg>

      {/* Milestone labels with stagger animation */}
      {milestones.map((m, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center"
          style={{ left: m.x - 20, top: m.y - 44 }}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.35 }}
        >
          <span className="text-2xl">{m.emoji}</span>
          <span
            className="ra-label mt-1 text-center"
            style={{ fontSize: "0.6rem" }}
          >
            {m.label}
          </span>
        </motion.div>
      ))}

      {/* Background texture */}
      <div
        className="absolute inset-0 rounded-lg ra-mashrabiya opacity-20 pointer-events-none"
      />

      {/* Caption */}
      <div
        className="absolute bottom-4 left-0 right-0 text-center ra-label"
        style={{ color: "rgba(201,151,58,0.5)" }}
      >
        A journey of flavour
      </div>
    </div>
  )
}
