"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

// Simplified Kerala outline — viewBox 0 0 140 520
// West coast (left) = Arabian Sea, East (right) = Western Ghats
// Going clockwise from NW corner
const KERALA_PATH =
  "M 52,8 C 64,6 82,10 98,24 L 114,52 C 120,72 122,96 116,120 " +
  "L 112,148 C 116,172 116,196 110,220 L 102,246 " +
  "C 106,270 104,296 98,320 L 90,346 " +
  "C 88,372 86,398 80,422 L 72,448 " +
  "C 64,468 54,486 44,496 C 34,506 20,504 13,490 " +
  "C 5,473 4,450 7,424 L 10,394 " +
  "C 8,366 12,340 16,316 L 20,290 " +
  "C 16,264 12,236 16,210 L 20,184 " +
  "C 16,156 14,128 18,102 L 24,76 " +
  "C 20,52 24,28 34,16 C 40,8 46,9 52,8 Z"

// Kochi: ~60% down the map, near the western coast
const KOCHI = { x: 16, y: 320 }

export default function KeralaMap() {
  const pathRef = useRef<SVGPathElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapRef, { once: true, margin: "-80px" })
  const [dashLen, setDashLen] = useState(0)
  const [kochiVisible, setKochiVisible] = useState(false)

  useEffect(() => {
    if (pathRef.current) {
      setDashLen(pathRef.current.getTotalLength())
    }
  }, [])

  // Show Kochi label after the stroke finishes drawing
  useEffect(() => {
    if (inView && dashLen > 0) {
      const t = setTimeout(() => setKochiVisible(true), 2600)
      return () => clearTimeout(t)
    }
  }, [inView, dashLen])

  return (
    <div ref={wrapRef} className="flex flex-col items-center gap-2 select-none">
      <svg
        viewBox="0 0 140 520"
        width="110"
        height="410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Kerala map"
      >
        {/* Filled shape — fades in after stroke finishes */}
        <motion.path
          d={KERALA_PATH}
          fill="#1D9E75"
          initial={{ opacity: 0 }}
          animate={kochiVisible ? { opacity: 0.12 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Animated stroke — draws itself */}
        <path
          ref={pathRef}
          d={KERALA_PATH}
          stroke="#1D9E75"
          strokeWidth="2"
          fill="none"
          style={{
            strokeDasharray: dashLen || 2000,
            strokeDashoffset: inView && dashLen ? 0 : dashLen || 2000,
            transition: dashLen ? "stroke-dashoffset 2.4s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        />

        {/* Kochi pulse ring */}
        {kochiVisible && (
          <>
            <motion.circle
              cx={KOCHI.x} cy={KOCHI.y} r={6}
              fill="#1D9E75" opacity={0.3}
              animate={{ r: [6, 14, 6], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx={KOCHI.x} cy={KOCHI.y} r={3.5}
              fill="#1D9E75"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, type: "spring" }}
            />
            <motion.text
              x={KOCHI.x + 8} y={KOCHI.y + 4}
              fontSize="10" fill="#1D9E75"
              fontFamily="var(--font-dm-mono)"
              initial={{ opacity: 0, x: KOCHI.x + 4 }}
              animate={{ opacity: 1, x: KOCHI.x + 8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kochi
            </motion.text>
          </>
        )}
      </svg>

      <motion.p
        initial={{ opacity: 0 }}
        animate={kochiVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[10px] tracking-widest uppercase"
        style={{ fontFamily: "var(--font-dm-mono)", color: "#1D9E75" }}
      >
        Kerala, India
      </motion.p>
    </div>
  )
}
