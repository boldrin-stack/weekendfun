"use client"

import { useEffect, useRef, useState } from "react"

export default function ElephantCursor() {
  const [pos, setPos] = useState({ x: -300, y: -300 })
  const [dir, setDir] = useState(1)   // 1 = facing right, -1 = left
  const [idle, setIdle] = useState(false)
  const [visible, setVisible] = useState(false)
  const lastX = useRef(-1)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    document.body.style.cursor = "none"
    setVisible(true)

    const onMove = (e: MouseEvent) => {
      if (lastX.current !== -1) {
        const dx = e.clientX - lastX.current
        if (Math.abs(dx) > 3) setDir(dx > 0 ? 1 : -1)
      }
      lastX.current = e.clientX
      setPos({ x: e.clientX, y: e.clientY })
      setIdle(false)
      clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setIdle(true), 1800)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      document.body.style.cursor = ""
      clearTimeout(idleTimer.current)
    }
  }, [])

  if (!visible) return null

  // Ear flap keyframes via CSS animation injected once
  const earAnim = idle ? "ear-flap 0.8s ease-in-out infinite alternate" : "none"
  const trunkAnim = idle ? "trunk-wave 1.4s ease-in-out infinite" : "none"

  return (
    <>
      <style>{`
        @keyframes ear-flap {
          from { transform-origin: right center; transform: scaleX(1); }
          to   { transform-origin: right center; transform: scaleX(1.35); }
        }
        @keyframes trunk-wave {
          0%,100% { d: path("M22 28 Q30 34 36 28 Q40 22 38 17"); }
          50%      { d: path("M22 28 Q28 36 36 34 Q42 30 42 24"); }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          // offset so trunk tip is the pointer
          transform: `translate(${dir === 1 ? "-8px" : "-40px"}, -22px) scaleX(${dir})`,
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform, left, top",
        }}
      >
        <svg width="48" height="52" viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="22" cy="36" rx="16" ry="13" fill="#607D8B" />

          {/* Left ear (animates when idle) */}
          <ellipse
            cx="9" cy="21" rx="9" ry="12" fill="#78909C"
            style={{ animation: earAnim, transformOrigin: "18px 21px" }}
          />

          {/* Head */}
          <circle cx="22" cy="20" r="13" fill="#607D8B" />

          {/* Right ear */}
          <ellipse cx="35" cy="21" rx="9" ry="12" fill="#78909C"
            style={{ animation: earAnim, animationDelay: "0.15s", transformOrigin: "26px 21px" }}
          />

          {/* Festival caparison */}
          <path
            d="M8 32 Q22 27 36 32 Q38 39 36 43 Q22 47 8 43 Q6 39 8 32 Z"
            fill="#BA7517" opacity="0.9"
          />
          <path d="M10 32 Q22 29 34 32" stroke="#F6D670" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />

          {/* Forehead jewel */}
          <circle cx="22" cy="13" r="3.5" fill="#BA7517" />
          <circle cx="22" cy="13" r="2" fill="#F6D670" />

          {/* Eyes */}
          <circle cx="17" cy="19" r="2.5" fill="#1A1A18" />
          <circle cx="17.8" cy="18.2" r="1" fill="white" />

          {/* Trunk — pointing right (the pointer direction) */}
          <path
            d="M22 28 Q30 34 36 28 Q40 22 38 17"
            stroke="#546E7A" strokeWidth="5" strokeLinecap="round" fill="none"
            style={{ animation: trunkAnim }}
          />

          {/* Legs */}
          <rect x="10" y="46" width="8" height="6" rx="3" fill="#546E7A" />
          <rect x="22" y="46" width="8" height="6" rx="3" fill="#546E7A" />
        </svg>
      </div>
    </>
  )
}
