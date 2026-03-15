"use client"

import { motion } from "framer-motion"

export default function KeralaScene() {
  return (
    <div className="relative w-full overflow-hidden bg-[#0e1a14]" style={{ height: "220px" }}>
      {/* Sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #0e1a14 0%, #1a3a28 50%, #1D9E75 100%)",
        }}
      />

      {/* Stars */}
      {[
        { x: "8%", y: "12%", r: 1.2 }, { x: "18%", y: "8%", r: 0.8 },
        { x: "30%", y: "15%", r: 1 }, { x: "45%", y: "6%", r: 1.4 },
        { x: "60%", y: "11%", r: 0.9 }, { x: "72%", y: "7%", r: 1.1 },
        { x: "85%", y: "14%", r: 0.7 }, { x: "92%", y: "9%", r: 1.3 },
        { x: "25%", y: "20%", r: 0.6 }, { x: "55%", y: "18%", r: 0.8 },
        { x: "78%", y: "20%", r: 1.0 },
      ].map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: star.x, top: star.y, width: star.r * 2, height: star.r * 2 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Moon */}
      <div
        className="absolute rounded-full"
        style={{
          right: "12%", top: "10%", width: 28, height: 28,
          background: "#f5e6b0",
          boxShadow: "0 0 18px 6px rgba(245,230,176,0.25)",
        }}
      />

      {/* Water */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "70px", background: "rgba(29,158,117,0.35)" }}
      />

      {/* Water shimmer lines */}
      {[20, 35, 55, 70, 85].map((x, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${x}%`, bottom: "20px",
            width: "40px", height: "2px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "2px",
          }}
          animate={{ scaleX: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* Boat 1 */}
      <motion.g
        style={{ position: "absolute", bottom: "52px", left: "18%" }}
        animate={{ x: [0, 18, 0], y: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
          <path d="M5 20 Q30 28 55 20 L50 22 Q30 32 10 22 Z" fill="#8B4513" />
          <line x1="28" y1="2" x2="28" y2="20" stroke="#6B3410" strokeWidth="1.5" />
          <path d="M28 3 L42 12 L28 12 Z" fill="rgba(246,245,241,0.7)" />
        </svg>
      </motion.g>

      {/* Boat 2 */}
      <motion.g
        style={{ position: "absolute", bottom: "48px", left: "55%" }}
        animate={{ x: [0, -14, 0], y: [0, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="50" height="26" viewBox="0 0 50 26" fill="none">
          <path d="M4 17 Q25 24 46 17 L42 19 Q25 27 8 19 Z" fill="#7a3b10" />
          <line x1="23" y1="2" x2="23" y2="17" stroke="#5a2c0e" strokeWidth="1.5" />
          <path d="M23 3 L35 10 L23 10 Z" fill="rgba(246,245,241,0.6)" />
        </svg>
      </motion.g>

      {/* Left coconut tree */}
      <svg
        className="absolute"
        style={{ left: "2%", bottom: "50px" }}
        width="80" height="160" viewBox="0 0 80 160" fill="none"
      >
        {/* Trunk */}
        <motion.path
          d="M40 155 Q38 130 42 100 Q44 70 40 40"
          stroke="#5D4037" strokeWidth="6" strokeLinecap="round" fill="none"
          animate={{ d: ["M40 155 Q38 130 42 100 Q44 70 40 40", "M40 155 Q36 130 44 100 Q46 70 42 38", "M40 155 Q38 130 42 100 Q44 70 40 40"] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Fronds */}
        {[
          { d: "M40 40 Q20 20 5 30", d2: "M40 40 Q18 18 4 28" },
          { d: "M40 40 Q60 18 72 25", d2: "M40 40 Q62 16 74 23" },
          { d: "M40 40 Q15 35 2 50", d2: "M40 40 Q13 33 1 48" },
          { d: "M40 40 Q62 35 75 50", d2: "M40 40 Q64 33 77 48" },
          { d: "M40 40 Q35 18 30 5", d2: "M40 40 Q33 16 28 3" },
        ].map((frond, i) => (
          <motion.path
            key={i}
            stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" fill="none"
            animate={{ d: [frond.d, frond.d2, frond.d] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            d={frond.d}
          />
        ))}
        {/* Coconuts */}
        <circle cx="38" cy="44" r="4" fill="#8B6914" />
        <circle cx="44" cy="46" r="3.5" fill="#7a5e12" />
      </svg>

      {/* Right coconut tree */}
      <svg
        className="absolute"
        style={{ right: "3%", bottom: "55px" }}
        width="70" height="145" viewBox="0 0 70 145" fill="none"
      >
        <motion.path
          d="M35 140 Q37 115 33 88 Q30 60 35 35"
          stroke="#5D4037" strokeWidth="5.5" strokeLinecap="round" fill="none"
          animate={{ d: ["M35 140 Q37 115 33 88 Q30 60 35 35", "M35 140 Q39 115 31 88 Q28 60 37 33", "M35 140 Q37 115 33 88 Q30 60 35 35"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        {[
          { d: "M35 35 Q18 18 5 26", d2: "M35 35 Q16 16 4 24" },
          { d: "M35 35 Q52 16 63 22", d2: "M35 35 Q54 14 65 20" },
          { d: "M35 35 Q14 30 3 44", d2: "M35 35 Q12 28 2 42" },
          { d: "M35 35 Q55 30 66 44", d2: "M35 35 Q57 28 68 42" },
          { d: "M35 35 Q30 16 26 4", d2: "M35 35 Q28 14 24 2" },
        ].map((frond, i) => (
          <motion.path
            key={i}
            stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" fill="none"
            animate={{ d: [frond.d, frond.d2, frond.d] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 + i * 0.1 }}
            d={frond.d}
          />
        ))}
        <circle cx="33" cy="38" r="3.5" fill="#8B6914" />
        <circle cx="38" cy="40" r="3" fill="#7a5e12" />
      </svg>

      {/* Centre small tree */}
      <svg
        className="absolute"
        style={{ left: "48%", bottom: "58px" }}
        width="50" height="110" viewBox="0 0 50 110" fill="none"
      >
        <motion.path
          d="M25 105 Q26 82 24 60 Q23 38 25 20"
          stroke="#5D4037" strokeWidth="4" strokeLinecap="round" fill="none"
          animate={{ d: ["M25 105 Q26 82 24 60 Q23 38 25 20", "M25 105 Q28 82 22 60 Q21 38 27 18", "M25 105 Q26 82 24 60 Q23 38 25 20"] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        {[
          { d: "M25 20 Q12 10 4 16", d2: "M25 20 Q10 8 3 14" },
          { d: "M25 20 Q37 9 44 15", d2: "M25 20 Q39 7 46 13" },
          { d: "M25 20 Q10 18 2 28", d2: "M25 20 Q8 16 1 26" },
          { d: "M25 20 Q39 18 47 28", d2: "M25 20 Q41 16 49 26" },
        ].map((frond, i) => (
          <motion.path
            key={i}
            stroke="#388E3C" strokeWidth="2" strokeLinecap="round" fill="none"
            animate={{ d: [frond.d, frond.d2, frond.d] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 + i * 0.1 }}
            d={frond.d}
          />
        ))}
        <circle cx="24" cy="23" r="3" fill="#8B6914" />
      </svg>

      {/* Ripples on water */}
      {[40, 65].map((x, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[rgba(255,255,255,0.12)]"
          style={{ left: `${x}%`, bottom: "18px", width: 0, height: 0 }}
          animate={{ width: [0, 50, 0], height: [0, 16, 0], opacity: [0, 0.4, 0], marginLeft: [0, -25, 0], marginBottom: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: i * 1.5 }}
        />
      ))}
    </div>
  )
}
