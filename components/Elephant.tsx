"use client"

import { motion } from "framer-motion"

export default function Elephant() {
  return (
    <div className="pointer-events-none select-none" aria-hidden>
      <svg
        width="180"
        height="200"
        viewBox="0 0 180 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <ellipse cx="90" cy="130" rx="58" ry="46" fill="#607D8B" />

        {/* Head */}
        <ellipse cx="90" cy="80" rx="38" ry="36" fill="#607D8B" />

        {/* Ear left */}
        <motion.ellipse
          cx="55" cy="76" rx="22" ry="26" fill="#78909C"
          animate={{ rotateY: [0, 20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "68px 76px" }}
        />

        {/* Ear right */}
        <motion.ellipse
          cx="125" cy="76" rx="22" ry="26" fill="#78909C"
          animate={{ rotateY: [0, -20, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          style={{ transformOrigin: "112px 76px" }}
        />

        {/* Tusks */}
        <path d="M78 108 Q68 120 62 130" stroke="#ECEFF1" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M102 108 Q112 120 118 130" stroke="#ECEFF1" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* Trunk — swings */}
        <motion.path
          stroke="#546E7A"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M90 112 Q88 132 84 150 Q80 166 85 175 Q90 180 96 175",
              "M90 112 Q92 132 98 150 Q104 166 102 175 Q98 180 92 175",
              "M90 112 Q88 132 84 150 Q80 166 85 175 Q90 180 96 175",
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          d="M90 112 Q88 132 84 150 Q80 166 85 175 Q90 180 96 175"
        />
        {/* Trunk tip highlight */}
        <motion.circle
          cx="96" cy="175" r="6" fill="#546E7A"
          animate={{
            cx: [96, 92, 96],
            cy: [175, 175, 175],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Eyes */}
        <circle cx="76" cy="72" r="5" fill="#263238" />
        <circle cx="104" cy="72" r="5" fill="#263238" />
        <circle cx="77" cy="71" r="2" fill="white" />
        <circle cx="105" cy="71" r="2" fill="white" />

        {/* Legs */}
        <rect x="52" y="168" width="22" height="30" rx="8" fill="#546E7A" />
        <rect x="78" y="168" width="22" height="30" rx="8" fill="#546E7A" />
        <rect x="104" y="168" width="22" height="30" rx="8" fill="#546E7A" />

        {/* Tail */}
        <motion.path
          d="M148 128 Q158 120 155 112 Q152 106 156 100"
          stroke="#546E7A" strokeWidth="3" strokeLinecap="round" fill="none"
          animate={{
            d: [
              "M148 128 Q158 120 155 112 Q152 106 156 100",
              "M148 128 Q162 122 160 114 Q158 108 163 103",
              "M148 128 Q158 120 155 112 Q152 106 156 100",
            ],
          }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative caparison (festival cloth) */}
        <path
          d="M55 118 Q90 110 125 118 Q128 130 125 140 Q90 148 55 140 Q52 130 55 118 Z"
          fill="#BA7517" opacity="0.85"
        />
        <path
          d="M60 118 Q90 112 120 118"
          stroke="#F6D670" strokeWidth="1.5" strokeDasharray="4 3" fill="none"
        />
        <path
          d="M57 130 Q90 125 123 130"
          stroke="#F6D670" strokeWidth="1" strokeDasharray="3 3" fill="none"
        />
        {/* Forehead jewel */}
        <circle cx="90" cy="65" r="5" fill="#BA7517" />
        <circle cx="90" cy="65" r="3" fill="#F6D670" />

        {/* Gentle body sway */}
      </svg>
    </div>
  )
}
