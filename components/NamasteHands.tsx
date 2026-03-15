"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function NamasteHands() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // As user scrolls 0–300px, hands slide in from sides and meet
  const leftX = useTransform(scrollY, [0, 280], [-90, 0])
  const rightX = useTransform(scrollY, [0, 280], [90, 0])
  const opacity = useTransform(scrollY, [0, 80, 260, 340], [0, 1, 1, 0])
  // Slight bow — both tilt inward as they meet
  const leftRotate = useTransform(scrollY, [0, 280], [12, 0])
  const rightRotate = useTransform(scrollY, [0, 280], [-12, 0])
  // Glow pulse once hands meet
  const glowOpacity = useTransform(scrollY, [220, 280, 340], [0, 0.6, 0])

  return (
    <div ref={ref} className="pointer-events-none select-none" aria-hidden>
      <motion.div
        style={{ opacity }}
        className="relative flex items-end justify-center gap-0"
      >
        {/* Glow behind hands when joined */}
        <motion.div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full"
          style={{
            opacity: glowOpacity,
            background: "radial-gradient(circle, rgba(29,158,117,0.5) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* Left hand */}
        <motion.div style={{ x: leftX, rotate: leftRotate, originX: 1, originY: 1 }}>
          <svg width="52" height="72" viewBox="0 0 52 72" fill="none">
            {/* Palm */}
            <path
              d="M10 65 Q8 50 10 38 Q11 28 14 20 Q16 14 20 10 Q23 6 26 8 Q30 10 28 18 Q26 26 25 35"
              fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8"
            />
            {/* Fingers */}
            <path d="M14 20 Q13 12 15 6 Q17 2 20 4 Q22 6 21 14" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M20 10 Q20 2 23 1 Q26 0 27 6 Q27 12 26 18" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M25 14 Q26 6 29 5 Q32 4 32 11 Q31 18 29 24" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M28 18 Q30 12 33 12 Q36 13 35 19 Q33 26 31 30" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            {/* Thumb */}
            <path d="M10 38 Q6 34 5 28 Q5 22 9 22 Q12 23 13 30" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            {/* Wrist */}
            <path d="M8 65 Q6 62 7 55 Q8 48 10 42 L18 42 Q20 48 20 55 Q20 62 18 65 Z" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            {/* Cuff detail */}
            <path d="M7 60 Q13 62 19 60" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>

        {/* Right hand (mirrored) */}
        <motion.div style={{ x: rightX, rotate: rightRotate, originX: 0, originY: 1, scaleX: -1 }}>
          <svg width="52" height="72" viewBox="0 0 52 72" fill="none">
            <path
              d="M10 65 Q8 50 10 38 Q11 28 14 20 Q16 14 20 10 Q23 6 26 8 Q30 10 28 18 Q26 26 25 35"
              fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8"
            />
            <path d="M14 20 Q13 12 15 6 Q17 2 20 4 Q22 6 21 14" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M20 10 Q20 2 23 1 Q26 0 27 6 Q27 12 26 18" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M25 14 Q26 6 29 5 Q32 4 32 11 Q31 18 29 24" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M28 18 Q30 12 33 12 Q36 13 35 19 Q33 26 31 30" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M10 38 Q6 34 5 28 Q5 22 9 22 Q12 23 13 30" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M8 65 Q6 62 7 55 Q8 48 10 42 L18 42 Q20 48 20 55 Q20 62 18 65 Z" fill="#F5CBA7" stroke="#D4A574" strokeWidth="0.8" />
            <path d="M7 60 Q13 62 19 60" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}
