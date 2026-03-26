"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/*
  Thin gold progress bar pinned to the very top of the page.
  Grows from left to right as the user scrolls down.
  Spring-smoothed so it doesn't feel jittery.
*/
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[9998] h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--ra-gold) 0%, var(--ra-green) 50%, var(--ra-gold) 100%)",
        boxShadow: "0 0 10px rgba(201,151,58,0.7)",
      }}
    />
  )
}
