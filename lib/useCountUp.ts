"use client"

import { useState, useEffect } from "react"

export function useCountUp(target: number, duration = 1200): number {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (target === 0) {
      setCount(0)
      return
    }
    const startTime = performance.now()
    let raf: number

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        raf = requestAnimationFrame(step)
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return count
}
