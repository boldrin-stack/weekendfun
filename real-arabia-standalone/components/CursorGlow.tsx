"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

/*
  Custom cursor: warm amber radial glow that follows the mouse.
  Two layers — large soft ambient + small sharp gold dot.
  Hidden on touch devices (pointer: coarse).
*/
export default function CursorGlow() {
  const mouseX = useMotionValue(-300)
  const mouseY = useMotionValue(-300)

  // Outer glow follows with spring lag
  const glowX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.6 })
  const glowY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.6 })

  // Inner dot follows tightly
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 28 })
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 28 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Outer ambient glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9996] hidden md:block"
        style={{
          left: glowX,
          top: glowY,
          x: "-50%",
          y: "-50%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,151,58,0.09) 0%, rgba(201,151,58,0.03) 45%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      {/* Inner gold dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9997] hidden md:block"
        style={{
          left: dotX,
          top: dotY,
          x: "-50%",
          y: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--ra-gold)",
          boxShadow: "0 0 14px rgba(201,151,58,0.9)",
        }}
      />
    </>
  )
}
