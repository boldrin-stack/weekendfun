"use client"

import { motion, useScroll, useTransform } from "framer-motion"

// Big 3D reaching hand SVG — left hand pointing right
function LeftHand({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="320"
      height="220"
      viewBox="0 0 320 220"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="palmL" cx="55%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#E8A87C" />
          <stop offset="40%" stopColor="#C8813A" />
          <stop offset="100%" stopColor="#8B5520" />
        </radialGradient>
        <radialGradient id="fingerL" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#EFBA87" />
          <stop offset="50%" stopColor="#C8813A" />
          <stop offset="100%" stopColor="#9B6030" />
        </radialGradient>
        <radialGradient id="knuckleL" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4956A" />
          <stop offset="100%" stopColor="#A06030" />
        </radialGradient>
        <filter id="shadowL" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="8" dy="12" stdDeviation="14" floodColor="#5a3010" floodOpacity="0.5" />
        </filter>
        <linearGradient id="wristL" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B5520" />
          <stop offset="60%" stopColor="#C8813A" />
          <stop offset="100%" stopColor="#E8A87C" />
        </linearGradient>
      </defs>

      <g filter="url(#shadowL)">
        {/* Wrist / forearm coming from left */}
        <path
          d="M0 120 Q20 105 50 108 Q80 110 105 115 Q118 118 125 125 Q118 135 105 138 Q80 142 50 140 Q20 140 0 130 Z"
          fill="url(#wristL)"
        />
        {/* Wrist shading */}
        <path
          d="M0 120 Q20 110 50 112 Q80 114 100 118"
          stroke="rgba(255,220,180,0.3)" strokeWidth="3" fill="none" strokeLinecap="round"
        />

        {/* Palm */}
        <path
          d="M105 100 Q120 88 138 85 Q155 83 168 88 Q178 92 180 102 Q182 115 178 128 Q174 140 162 145 Q148 150 132 148 Q116 145 106 136 Q98 128 100 115 Z"
          fill="url(#palmL)"
        />
        {/* Palm highlight */}
        <path
          d="M115 96 Q130 90 148 89 Q162 89 170 96"
          stroke="rgba(255,220,180,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round"
        />
        {/* Palm crease lines */}
        <path d="M112 118 Q138 112 168 116" stroke="rgba(100,50,10,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M114 128 Q140 122 166 126" stroke="rgba(100,50,10,0.2)" strokeWidth="1" fill="none" strokeLinecap="round" />

        {/* Index finger — extended pointing right */}
        <path
          d="M178 100 Q195 90 220 85 Q248 80 278 82 Q298 84 312 88 Q320 91 320 96 Q320 101 312 104 Q298 108 278 108 Q248 110 220 108 Q195 106 178 100 Z"
          fill="url(#fingerL)"
        />
        {/* Index finger highlight */}
        <path
          d="M185 93 Q210 87 245 84 Q275 82 305 86"
          stroke="rgba(255,230,200,0.4)" strokeWidth="2" fill="none" strokeLinecap="round"
        />
        {/* Index finger knuckle */}
        <ellipse cx="210" cy="96" rx="8" ry="6" fill="url(#knuckleL)" opacity="0.6" />
        <ellipse cx="240" cy="95" rx="8" ry="6" fill="url(#knuckleL)" opacity="0.5" />
        {/* Fingernail tip */}
        <path
          d="M308 89 Q318 91 320 96 Q320 101 316 104 Q310 107 306 106"
          fill="#d4956a" stroke="rgba(150,80,30,0.4)" strokeWidth="0.8"
        />
        <ellipse cx="312" cy="97" rx="5" ry="7" fill="rgba(220,170,120,0.5)" />

        {/* Middle finger — slightly curled back */}
        <path
          d="M175 88 Q190 72 210 68 Q228 65 242 70 Q252 74 252 82 Q250 90 238 94 Q224 97 208 96 Q192 94 178 88 Z"
          fill="url(#fingerL)"
        />
        <path d="M180 80 Q200 72 225 70" stroke="rgba(255,230,200,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <ellipse cx="215" cy="79" rx="7" ry="5" fill="url(#knuckleL)" opacity="0.5" />

        {/* Ring finger — more curled */}
        <path
          d="M170 140 Q182 124 196 120 Q210 116 220 120 Q228 125 226 134 Q223 143 212 147 Q198 150 186 147 Q174 144 170 140 Z"
          fill="url(#fingerL)"
        />
        <path d="M175 131 Q192 124 215 124" stroke="rgba(255,230,200,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Pinky — most curled */}
        <path
          d="M162 148 Q170 135 180 132 Q190 129 197 133 Q202 138 200 145 Q197 152 188 155 Q178 157 170 154 Q163 151 162 148 Z"
          fill="url(#fingerL)"
        />

        {/* Thumb — visible below palm */}
        <path
          d="M108 136 Q100 148 96 158 Q93 165 96 170 Q100 174 106 172 Q114 168 118 158 Q122 148 120 140 Z"
          fill="url(#fingerL)"
        />
        <path d="M100 150 Q108 155 116 152" stroke="rgba(255,230,200,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

// Right hand — mirror of left, pointing left toward center
function RightHand({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="320"
      height="220"
      viewBox="0 0 320 220"
      fill="none"
      style={{ ...style, transform: `scaleX(-1) ${style?.transform ?? ""}` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="palmR" cx="55%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#DFA070" />
          <stop offset="40%" stopColor="#B87030" />
          <stop offset="100%" stopColor="#7A4818" />
        </radialGradient>
        <radialGradient id="fingerR" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#E8A870" />
          <stop offset="50%" stopColor="#B87030" />
          <stop offset="100%" stopColor="#8A5228" />
        </radialGradient>
        <radialGradient id="knuckleR" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C48060" />
          <stop offset="100%" stopColor="#905028" />
        </radialGradient>
        <filter id="shadowR" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="-8" dy="12" stdDeviation="14" floodColor="#4a2808" floodOpacity="0.5" />
        </filter>
        <linearGradient id="wristR" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#7A4818" />
          <stop offset="60%" stopColor="#B87030" />
          <stop offset="100%" stopColor="#DFA070" />
        </linearGradient>
      </defs>

      <g filter="url(#shadowR)">
        <path
          d="M0 120 Q20 105 50 108 Q80 110 105 115 Q118 118 125 125 Q118 135 105 138 Q80 142 50 140 Q20 140 0 130 Z"
          fill="url(#wristR)"
        />
        <path
          d="M0 120 Q20 110 50 112 Q80 114 100 118"
          stroke="rgba(255,220,180,0.3)" strokeWidth="3" fill="none" strokeLinecap="round"
        />
        <path
          d="M105 100 Q120 88 138 85 Q155 83 168 88 Q178 92 180 102 Q182 115 178 128 Q174 140 162 145 Q148 150 132 148 Q116 145 106 136 Q98 128 100 115 Z"
          fill="url(#palmR)"
        />
        <path
          d="M115 96 Q130 90 148 89 Q162 89 170 96"
          stroke="rgba(255,220,180,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round"
        />
        <path d="M112 118 Q138 112 168 116" stroke="rgba(80,35,8,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M114 128 Q140 122 166 126" stroke="rgba(80,35,8,0.2)" strokeWidth="1" fill="none" strokeLinecap="round" />
        <path
          d="M178 100 Q195 90 220 85 Q248 80 278 82 Q298 84 312 88 Q320 91 320 96 Q320 101 312 104 Q298 108 278 108 Q248 110 220 108 Q195 106 178 100 Z"
          fill="url(#fingerR)"
        />
        <path
          d="M185 93 Q210 87 245 84 Q275 82 305 86"
          stroke="rgba(255,230,200,0.4)" strokeWidth="2" fill="none" strokeLinecap="round"
        />
        <ellipse cx="210" cy="96" rx="8" ry="6" fill="url(#knuckleR)" opacity="0.6" />
        <ellipse cx="240" cy="95" rx="8" ry="6" fill="url(#knuckleR)" opacity="0.5" />
        <path
          d="M308 89 Q318 91 320 96 Q320 101 316 104 Q310 107 306 106"
          fill="#c48060" stroke="rgba(120,60,20,0.4)" strokeWidth="0.8"
        />
        <ellipse cx="312" cy="97" rx="5" ry="7" fill="rgba(200,150,100,0.5)" />
        <path
          d="M175 88 Q190 72 210 68 Q228 65 242 70 Q252 74 252 82 Q250 90 238 94 Q224 97 208 96 Q192 94 178 88 Z"
          fill="url(#fingerR)"
        />
        <path d="M180 80 Q200 72 225 70" stroke="rgba(255,230,200,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <ellipse cx="215" cy="79" rx="7" ry="5" fill="url(#knuckleR)" opacity="0.5" />
        <path
          d="M170 140 Q182 124 196 120 Q210 116 220 120 Q228 125 226 134 Q223 143 212 147 Q198 150 186 147 Q174 144 170 140 Z"
          fill="url(#fingerR)"
        />
        <path d="M175 131 Q192 124 215 124" stroke="rgba(255,230,200,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path
          d="M162 148 Q170 135 180 132 Q190 129 197 133 Q202 138 200 145 Q197 152 188 155 Q178 157 170 154 Q163 151 162 148 Z"
          fill="url(#fingerR)"
        />
        <path
          d="M108 136 Q100 148 96 158 Q93 165 96 170 Q100 174 106 172 Q114 168 118 158 Q122 148 120 140 Z"
          fill="url(#fingerR)"
        />
        <path d="M100 150 Q108 155 116 152" stroke="rgba(255,230,200,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function NamasteHands() {
  const { scrollY } = useScroll()

  // Left hand: slides in from left edge
  const leftX = useTransform(scrollY, [0, 320], [-340, 0])
  // Right hand: slides in from right edge
  const rightX = useTransform(scrollY, [0, 320], [340, 0])
  // Both fade in as they come in, fade out as user scrolls past hero
  const opacity = useTransform(scrollY, [0, 60, 300, 420], [0, 1, 1, 0])
  // Subtle vertical float once in position
  const leftY = useTransform(scrollY, [0, 320], [30, 0])
  const rightY = useTransform(scrollY, [0, 320], [-30, 0])

  // Glow between fingertips when nearly touching
  const glowOpacity = useTransform(scrollY, [250, 320, 420], [0, 0.8, 0])
  const glowScale = useTransform(scrollY, [250, 320], [0.5, 1])

  return (
    <div
      className="pointer-events-none select-none absolute inset-x-0"
      style={{ bottom: "80px" }}
      aria-hidden
    >
      <motion.div style={{ opacity }} className="relative w-full flex items-center justify-between">

        {/* Left hand */}
        <motion.div
          style={{ x: leftX, y: leftY }}
          className="relative -ml-4 sm:ml-0"
        >
          <LeftHand />
        </motion.div>

        {/* Center: glow + text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
          {/* Spark glow between fingertips */}
          <motion.div
            style={{ opacity: glowOpacity, scale: glowScale }}
            className="w-24 h-24 rounded-full"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(29,158,117,0.7) 0%, rgba(29,158,117,0.3) 40%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
          </motion.div>

          {/* "KERALA WITH BLOCKCHAIN" rotated text */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute"
          >
            <svg width="28" height="140" viewBox="0 0 28 140">
              <text
                x="14"
                y="0"
                fill="rgba(29,158,117,0.7)"
                fontSize="9"
                fontFamily="var(--font-dm-mono), monospace"
                fontWeight="500"
                letterSpacing="3"
                textAnchor="middle"
                transform="rotate(90, 14, 70)"
              >
                KERALA WITH BLOCKCHAIN
              </text>
            </svg>
          </motion.div>
        </div>

        {/* Right hand */}
        <motion.div
          style={{ x: rightX, y: rightY }}
          className="relative -mr-4 sm:mr-0"
        >
          <RightHand />
        </motion.div>
      </motion.div>
    </div>
  )
}
