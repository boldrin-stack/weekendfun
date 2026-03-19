"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

/*
  MenuPreview Section
  ─────────────────────────────────────────────────────────────
  Stateful tabbed menu with 5 categories.
  Active tab highlights with gold underline.
  Tab content: fade + slight slide-up on switch via AnimatePresence.
  Section header has a looping rotating shawarma spit icon (.ra-spit-spin).
  ─────────────────────────────────────────────────────────────
*/

type MenuItem = {
  name: string
  desc: string
  price: string
  emoji: string
}

type Category = {
  id: string
  label: string
  mlLabel: string
  items: MenuItem[]
}

const CATEGORIES: Category[] = [
  {
    id: "shawarma",
    label: "Shawarma",
    mlLabel: "ഷവർമ",
    items: [
      { name: "Chicken Shawarma", desc: "Classic white sauce & pickles in khubz", price: "₹99", emoji: "🌯" },
      { name: "Beef Shawarma", desc: "Tender beef, tahini, jalapeños", price: "₹129", emoji: "🥙" },
      { name: "Jumbo Shawarma", desc: "Double-fill chicken, fries inside", price: "₹149", emoji: "🌮" },
      { name: "Shawarma Plate", desc: "Served with rice, salad & garlic dip", price: "₹189", emoji: "🍽️" },
    ],
  },
  {
    id: "grills",
    label: "Grills & Al-Faham",
    mlLabel: "ഗ്രിൽ",
    items: [
      { name: "Half Al-Faham", desc: "Marinated half-chicken, charcoal grilled", price: "₹299", emoji: "🍗" },
      { name: "Full Al-Faham", desc: "Whole chicken, family-style platter", price: "₹549", emoji: "🍖" },
      { name: "Seekh Kebab (6 pcs)", desc: "Minced beef kebab on skewer", price: "₹249", emoji: "🔥" },
      { name: "Shish Tawook", desc: "Marinated chicken cubes, garlic sauce", price: "₹229", emoji: "🥩" },
    ],
  },
  {
    id: "rice",
    label: "Rice & Sides",
    mlLabel: "ചോറ്",
    items: [
      { name: "Mandi Rice", desc: "Saffron basmati, slow-cooked chicken", price: "₹279", emoji: "🍚" },
      { name: "Kabsa", desc: "Spiced Arabian rice with raisins & nuts", price: "₹259", emoji: "🥘" },
      { name: "Hummus Plate", desc: "Creamy hummus, olive oil, warm bread", price: "₹89", emoji: "🫘" },
      { name: "Fattoush Salad", desc: "Fresh herbs, toasted bread, lemon dressing", price: "₹79", emoji: "🥗" },
    ],
  },
  {
    id: "family",
    label: "Family Combos",
    mlLabel: "ഫാമിലി",
    items: [
      { name: "Family Feast A", desc: "2 Al-Faham + 4 Shawarma + 2 Mandi Rice", price: "₹999", emoji: "👨‍👩‍👧‍👦" },
      { name: "Family Feast B", desc: "Mixed grill platter + 4 rice + salads", price: "₹1,199", emoji: "🍱" },
      { name: "Party Pack", desc: "20 pcs shawarma rolls for gatherings", price: "₹1,599", emoji: "🎉" },
      { name: "Office Lunch Box", desc: "Shawarma + rice + drink, 5-person pack", price: "₹699", emoji: "📦" },
    ],
  },
  {
    id: "kerala",
    label: "Kerala Specials",
    mlLabel: "കേരള",
    items: [
      { name: "Porotta Combo", desc: "Flaky porotta + Arabic chicken curry", price: "₹189", emoji: "🫓" },
      { name: "Pathiri Wrap", desc: "Rice-flour pathiri rolled with shawarma filling", price: "₹139", emoji: "🫔" },
      { name: "Beef Ularthiyathu", desc: "Kerala-style dry beef with shawarma spice twist", price: "₹229", emoji: "🍛" },
      { name: "Coconut Milk Biriyani", desc: "Aromatic rice, Kerala-Arabic spice blend", price: "₹249", emoji: "🌴" },
    ],
  },
]

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState("shawarma")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: "-60px" })

  const activeCategory = CATEGORIES.find((c) => c.id === activeTab)!

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-20 md:py-28 px-6 md:px-16"
      style={{ background: "var(--ra-smoke)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header + spinning spit */}
        <div className="flex items-center gap-4 mb-4">
          <div className="ra-spit-spin text-3xl" aria-hidden="true">🥙</div>
          <p className="ra-label">മെനു · Menu Preview</p>
        </div>

        <motion.h2
          className="ra-display text-4xl md:text-6xl mb-10"
          style={{ color: "var(--ra-sand)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What&apos;s on the{" "}
          <span style={{ color: "var(--ra-gold)" }}>Fire</span>
        </motion.h2>

        {/* Tab bar */}
        <div
          className="flex gap-1 overflow-x-auto pb-2 mb-10 ra-hscroll"
          style={{ borderBottom: "1px solid rgba(201,151,58,0.2)" }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`ra-tab ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
              <span
                className="ml-2 text-xs"
                style={{ color: "rgba(242,232,213,0.35)", fontFamily: "var(--font-dm-sans)" }}
              >
                {cat.mlLabel}
              </span>
            </button>
          ))}
        </div>

        {/* Tab content – animated swap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
          >
            {activeCategory.items.map((item, i) => (
              <MenuItemCard key={i} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Full menu CTA */}
        <div className="mt-12 text-center">
          <a href="#" className="ra-btn-outline inline-block">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className="ra-card p-5 flex flex-col">
      <div className="text-4xl mb-3">{item.emoji}</div>
      <h3
        className="ra-display text-lg mb-1"
        style={{ color: "var(--ra-sand)" }}
      >
        {item.name}
      </h3>
      <p
        className="text-sm flex-1 mb-4"
        style={{ color: "rgba(242,232,213,0.5)" }}
      >
        {item.desc}
      </p>
      <div className="flex items-center justify-between">
        <span
          className="ra-display text-lg"
          style={{ color: "var(--ra-gold)" }}
        >
          {item.price}
        </span>
        <button
          className="text-xs px-3 py-1"
          style={{
            background: "rgba(201,151,58,0.12)",
            color: "var(--ra-gold)",
            border: "1px solid rgba(201,151,58,0.3)",
            borderRadius: "2px",
          }}
        >
          + Add
        </button>
      </div>
    </div>
  )
}
