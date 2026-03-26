"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

/*
  Stats Section — animated counters that count up when scrolled into view.
  Uses a setInterval loop for the number animation.
*/

const STATS = [
  { value: 6,  suffix: "+",  label: "Outlets in Kochi",  icon: "🏪" },
  { value: 1,  suffix: "M+", label: "Meals Served",       icon: "🌯" },
  { value: 15, suffix: "+",  label: "Years of Flavour",   icon: "🔥" },
  { value: 50, suffix: "+",  label: "Menu Items",         icon: "📜" },
]

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let current = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, active])

  return count
}

function StatCard({
  stat,
  active,
  index,
}: {
  stat: (typeof STATS)[number]
  active: boolean
  index: number
}) {
  const count = useCounter(stat.value, 1800, active)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col items-center text-center py-10 px-4"
      style={{ borderRight: index < STATS.length - 1 ? "1px solid rgba(201,151,58,0.15)" : "none" }}
    >
      <motion.div
        className="text-4xl mb-4"
        animate={active ? { scale: [1, 1.25, 1] } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
      >
        {stat.icon}
      </motion.div>
      <div
        className="ra-display text-5xl md:text-6xl mb-2"
        style={{ color: "var(--ra-gold)" }}
      >
        {count}
        {stat.suffix}
      </div>
      <div
        className="ra-label"
        style={{ color: "rgba(242,232,213,0.5)", fontSize: "0.65rem" }}
      >
        {stat.label}
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      ref={ref}
      className="ra-mashrabiya relative"
      style={{ background: "var(--ra-smoke)" }}
    >
      <div className="ra-kasavu-top" />

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} active={isInView} index={i} />
        ))}
      </div>

      <div className="ra-kasavu" />
    </section>
  )
}
