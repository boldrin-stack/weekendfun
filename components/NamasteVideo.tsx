"use client"

import { motion, useScroll, useTransform } from "framer-motion"

// GitHub user-attachment URL for the Namaste hands video
const VIDEO_URL =
  "https://github.com/user-attachments/assets/ea237255-d3d4-4249-8d6d-35c7f6053f4d"

export default function NamasteVideo() {
  const { scrollY } = useScroll()

  // Fade in as soon as page loads, fade out as user scrolls past hero
  const opacity = useTransform(scrollY, [0, 100, 380, 520], [0.9, 1, 0.8, 0])
  // Slight upward drift as user scrolls (parallax)
  const y = useTransform(scrollY, [0, 500], [0, -40])

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-10"
      aria-hidden
    >
      {/* "KERALA WITH BLOCKCHAIN" label above */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center mb-2"
      >
        <span
          className="text-xs tracking-[0.25em] text-[#1D9E75]/60"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          KERALA WITH BLOCKCHAIN
        </span>
      </motion.div>

      {/* Video */}
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative"
      >
        {/* Green glow behind video */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(29,158,117,0.2) 0%, transparent 70%)",
            filter: "blur(16px)",
          }}
        />

        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="w-[340px] sm:w-[460px] md:w-[560px] lg:w-[640px] h-auto object-contain drop-shadow-2xl"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 20%, black 80%, transparent 100%)",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
