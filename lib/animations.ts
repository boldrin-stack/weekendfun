import type { Variants } from "framer-motion"

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

export function fadeUpVariants(stagger = 0.1, duration = 0.55): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * stagger,
        duration,
        ease: EASE,
      },
    }),
  }
}

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.55,
      ease: EASE,
    },
  }),
}

export const HERO_FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: EASE,
    },
  }),
}
