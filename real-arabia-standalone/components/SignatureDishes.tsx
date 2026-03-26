"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const DISHES = [
  { id: 1, name: "Classic Shawarma",    desc: "Slow-roasted chicken, garlic sauce, pickled veg in warm khubz", price: "₹99",  gradient: "radial-gradient(ellipse at 40% 30%, #8B2500, #3D1200)", emoji: "🌯" },
  { id: 2, name: "Al-Faham Grill",      desc: "Marinated half-chicken over charcoal, Arabic spice rub",        price: "₹349", gradient: "radial-gradient(ellipse at 50% 40%, #7A3A00, #2E1400)", emoji: "🍗" },
  { id: 3, name: "Kerala Porotta Combo",desc: "Flaky porotta with spiced Arabic-style chicken curry",           price: "₹189", gradient: "radial-gradient(ellipse at 60% 50%, #1B6B3A, #0A2E1A)", emoji: "🫓" },
  { id: 4, name: "Mandi Rice",          desc: "Slow-cooked basmati with whole chicken, saffron & dried fruits", price: "₹279", gradient: "radial-gradient(ellipse at 30% 60%, #6B5B00, #2E2800)", emoji: "🍚" },
  { id: 5, name: "Mixed Grill Platter", desc: "Seekh kebab, shish tawook, grilled kofta, hummus & flatbread",  price: "₹599", gradient: "radial-gradient(ellipse at 50% 30%, #6B1A00, #2E0D00)", emoji: "🥙" },
  { id: 6, name: "Beef Shawarma",       desc: "Tender beef strips, tahini, jalapeño, fresh tomato & onion",    price: "₹129", gradient: "radial-gradient(ellipse at 40% 50%, #4A1A00, #1E0800)", emoji: "🥩" },
]

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="dishes" className="py-20 md:py-28 overflow-hidden" style={{ background: "var(--ra-dark)" }}>
      <div className="px-6 md:px-16 mb-12">
        <p className="ra-label mb-3">ഞങ്ങളുടെ വിഭവങ്ങൾ · Our Dishes</p>
        <div className="flex items-end gap-6">
          <h2 className="ra-display text-4xl md:text-6xl" style={{ color: "var(--ra-sand)" }}>
            Signature <span style={{ color: "var(--ra-gold)" }}>Flavours</span>
          </h2>
          <div className="hidden md:block ra-divider flex-1 mb-3" />
        </div>
      </div>

      <div className="ra-hscroll px-6 md:px-16">
        <div className="flex gap-6 w-max pb-4">
          {DISHES.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 ra-kasavu mx-6 md:mx-16" />
    </section>
  )
}

function DishCard({ dish }: { dish: (typeof DISHES)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [added, setAdded] = useState(false)
  const [bursts, setBursts] = useState<number[]>([])

  /* ── 3D tilt on mouse move ──────────────────────────── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width  - 0.5
    const y = (e.clientY - top)  / height - 0.5
    el.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`
    el.style.transition = "transform 0.08s ease"
  }
  const handleMouseLeave = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)"
    el.style.transition = "transform 0.45s ease"
  }

  /* ── Add-to-cart pop + particle burst ───────────────── */
  const handleAdd = () => {
    if (added) return
    setAdded(true)
    setBursts(Array.from({ length: 6 }, (_, i) => i))
    setTimeout(() => { setAdded(false); setBursts([]) }, 900)
  }

  return (
    <div
      ref={cardRef}
      className="ra-card flex flex-col"
      style={{ width: "220px", flexShrink: 0, willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Arch image area */}
      <div className="ra-arch w-full relative overflow-hidden" style={{ height: "200px" }}>
        <div className="absolute inset-0" style={{ background: dish.gradient }} />
        <div className="absolute inset-0 flex items-center justify-center text-7xl">{dish.emoji}</div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(255,80,0,0.35), transparent)" }}
        />
        <div className="absolute inset-0 ra-mashrabiya opacity-30 pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        <h3 className="ra-display text-lg mb-1" style={{ color: "var(--ra-sand)" }}>{dish.name}</h3>
        <p className="text-sm leading-snug flex-1" style={{ color: "rgba(242,232,213,0.55)" }}>{dish.desc}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="ra-display text-xl" style={{ color: "var(--ra-gold)" }}>{dish.price}</span>

          {/* Add button with pop + burst */}
          <div className="relative">
            <motion.button
              onClick={handleAdd}
              animate={added ? { scale: [1, 1.45, 0.88, 1.12, 1] } : { scale: 1 }}
              transition={{ duration: 0.45 }}
              className="text-xs px-3 py-1 rounded-sm"
              style={{
                background: added ? "rgba(201,151,58,0.35)" : "rgba(201,151,58,0.15)",
                color: "var(--ra-gold)",
                border: "1px solid rgba(201,151,58,0.3)",
              }}
            >
              {added ? "✓ Added!" : "+ Add"}
            </motion.button>

            {/* Particle burst (absolutely inside card) */}
            <AnimatePresence>
              {added && bursts.map((i) => (
                <motion.div
                  key={i}
                  className="pointer-events-none absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    background: i % 2 === 0 ? "var(--ra-gold)" : "var(--ra-green)",
                    top: "50%",
                    left: "50%",
                    zIndex: 10,
                  }}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  animate={{
                    opacity: 0,
                    scale: 0,
                    x: Math.cos((i / 6) * Math.PI * 2) * 30,
                    y: Math.sin((i / 6) * Math.PI * 2) * 30,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Kasavu gold bottom stripe */}
      <div className="h-1 w-full" style={{
        background: "linear-gradient(90deg, transparent 0%, var(--ra-gold) 30%, var(--ra-gold) 70%, transparent 100%)",
      }} />
    </div>
  )
}
