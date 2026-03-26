"use client"

import { useRef } from "react"
import { motion, useSpring } from "framer-motion"

/*
  MagneticButton — wraps any button/link with a magnetic pull effect.
  The element shifts toward the cursor when it is within `radius` px.
  On mouse leave it springs back to center.
*/
interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href?: string
  onClick?: () => void
  strength?: number   // how many px to pull (default 10)
}

export default function MagneticButton({
  children,
  className,
  style,
  href,
  onClick,
  strength = 10,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(0, { stiffness: 180, damping: 14 })
  const y = useSpring(0, { stiffness: 180, damping: 14 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * (strength / 50))
    y.set((e.clientY - cy) * (strength / 50))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const inner = href ? (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  ) : (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  )

  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {inner}
    </motion.div>
  )
}
