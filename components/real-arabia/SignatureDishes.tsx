"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/*
  SignatureDishes Section
  ─────────────────────────────────────────────────────────────
  Horizontal scroll strip of arch-framed dish cards.
  Each card:
    • Arch shape (border-radius CSS trick)
    • Image placeholder (coloured gradient stand-in)
    • Gold kasavu bottom stripe
    • Name, short description, price

  Animations (Framer Motion):
  • Cards stagger-fade-up when the section scrolls into view.
    Trigger: useInView on the wrapper, once: true.
    Duration: 0.6s, stagger: 0.12s, y: 40 → 0.
  • Hover: scale(1.04) + slight rotateY(3deg) + gold glow shadow.
    Pure CSS transition (no JS needed).
  ─────────────────────────────────────────────────────────────
*/

const DISHES = [
  {
    id: 1,
    name: "Classic Shawarma",
    desc: "Slow-roasted chicken, garlic sauce, pickled veg in warm khubz",
    price: "₹99",
    gradient: "radial-gradient(ellipse at 40% 30%, #8B2500, #3D1200)",
    emoji: "🌯",
  },
  {
    id: 2,
    name: "Al-Faham Grill",
    desc: "Marinated half-chicken over charcoal, Arabic spice rub",
    price: "₹349",
    gradient: "radial-gradient(ellipse at 50% 40%, #7A3A00, #2E1400)",
    emoji: "🍗",
  },
  {
    id: 3,
    name: "Kerala Porotta Combo",
    desc: "Flaky porotta with spiced Arabic-style chicken curry",
    price: "₹189",
    gradient: "radial-gradient(ellipse at 60% 50%, #1B6B3A, #0A2E1A)",
    emoji: "🫓",
  },
  {
    id: 4,
    name: "Mandi Rice",
    desc: "Slow-cooked basmati with whole chicken, saffron & dried fruits",
    price: "₹279",
    gradient: "radial-gradient(ellipse at 30% 60%, #6B5B00, #2E2800)",
    emoji: "🍚",
  },
  {
    id: 5,
    name: "Mixed Grill Platter",
    desc: "Seekh kebab, shish tawook, grilled kofta, hummus & flatbread",
    price: "₹599",
    gradient: "radial-gradient(ellipse at 50% 30%, #6B1A00, #2E0D00)",
    emoji: "🥙",
  },
  {
    id: 6,
    name: "Beef Shawarma",
    desc: "Tender beef strips, tahini, jalapeño, fresh tomato & onion",
    price: "₹129",
    gradient: "radial-gradient(ellipse at 40% 50%, #4A1A00, #1E0800)",
    emoji: "🥩",
  },
]

export default function SignatureDishes() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      id="dishes"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--ra-dark)" }}
    >
      {/* Section header */}
      <div className="px-6 md:px-16 mb-12">
        <p className="ra-label mb-3">ഞങ്ങളുടെ വിഭവങ്ങൾ · Our Dishes</p>
        <div className="flex items-end gap-6">
          <h2
            className="ra-display text-4xl md:text-6xl"
            style={{ color: "var(--ra-sand)" }}
          >
            Signature{" "}
            <span style={{ color: "var(--ra-gold)" }}>Flavours</span>
          </h2>
          <div className="hidden md:block ra-divider flex-1 mb-3" />
        </div>
      </div>

      {/* Horizontal scroll strip */}
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

      {/* Gold kasavu section divider */}
      <div className="mt-16 ra-kasavu mx-6 md:mx-16" />
    </section>
  )
}

function DishCard({ dish }: { dish: (typeof DISHES)[number] }) {
  return (
    <div
      className="ra-card flex flex-col"
      style={{ width: "220px", flexShrink: 0 }}
    >
      {/* Arch image area */}
      <div
        className="ra-arch w-full relative overflow-hidden"
        style={{ height: "200px" }}
      >
        {/* Gradient placeholder (swap with <img> in production) */}
        <div
          className="absolute inset-0"
          style={{ background: dish.gradient }}
        />
        {/* Emoji stand-in for food photo */}
        <div className="absolute inset-0 flex items-center justify-center text-7xl">
          {dish.emoji}
        </div>
        {/* Charcoal glow on hover — CSS handles this via ra-card:hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(255,80,0,0.35), transparent)",
          }}
        />
        {/* Mashrabiya overlay inside arch */}
        <div className="absolute inset-0 ra-mashrabiya opacity-30 pointer-events-none" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="ra-display text-lg mb-1"
          style={{ color: "var(--ra-sand)" }}
        >
          {dish.name}
        </h3>
        <p
          className="text-sm leading-snug flex-1"
          style={{ color: "rgba(242,232,213,0.55)" }}
        >
          {dish.desc}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span
            className="ra-display text-xl"
            style={{ color: "var(--ra-gold)" }}
          >
            {dish.price}
          </span>
          <button
            className="text-xs px-3 py-1 rounded-sm"
            style={{
              background: "rgba(201,151,58,0.15)",
              color: "var(--ra-gold)",
              border: "1px solid rgba(201,151,58,0.3)",
            }}
          >
            + Add
          </button>
        </div>
      </div>

      {/* Kasavu gold bottom stripe */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--ra-gold) 30%, var(--ra-gold) 70%, transparent 100%)",
        }}
      />
    </div>
  )
}
