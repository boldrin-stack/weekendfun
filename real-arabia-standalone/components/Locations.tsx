"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

/*
  Locations Section
  ─────────────────────────────────────────────────────────────
  Responsive grid of outlet cards (3 cols on md, 2 on sm, 1 on xs).
  Each card:
    • Illustrated façade: Arabic arch + Kerala sloping roof SVG
    • Outlet name, area, address
    • "View on Map" link + "Order on Swiggy" button
    • On hover: background warms, windows glow (CSS ra-location-card)

  Animation:
  • Cards stagger-fade-up on scroll into view.
  • Scooter icon animates across the bottom of the section when it
    enters the viewport. Implemented via CSS keyframe `ra-scooter`.
    To use JS instead: set a state `scooterStart` when isInView fires,
    then apply an animationPlayState toggle.
  ─────────────────────────────────────────────────────────────
*/

const OUTLETS = [
  {
    id: 1,
    name: "Real Arabia",
    area: "Ravipuram",
    address: "MG Road, Ravipuram, Ernakulam – 682 016",
    mapUrl: "#",
    swiggyUrl: "#",
    roofColor: "#4A3020",
    wallColor: "#3D2510",
  },
]

export default function Locations() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: "-60px" })

  return (
    <section
      ref={sectionRef}
      id="locations"
      className="py-20 md:py-28 px-6 md:px-16 relative overflow-hidden"
      style={{ background: "var(--ra-dark)" }}
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-12">
        <p className="ra-label mb-3">ഞങ്ങൾ എവിടെ · Find Us</p>
        <h2
          className="ra-display text-4xl md:text-6xl"
          style={{ color: "var(--ra-sand)" }}
        >
          Our{" "}
          <span style={{ color: "var(--ra-gold)" }}>Locations</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-sm mx-auto grid grid-cols-1 gap-6">
        {OUTLETS.map((outlet, i) => (
          <motion.div
            key={outlet.id}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
          >
            <LocationCard outlet={outlet} />
          </motion.div>
        ))}
      </div>

      {/* ── Scooter animation track ──────────────────────── */}
      {/*
        The .ra-scooter CSS keyframe moves the element from
        translateX(-80px) to translateX(100vw + 80px) over 8s, looping.
        Only plays when section is visible (use animation-play-state).
      */}
      <div className="relative mt-12 overflow-hidden h-10">
        {/* Dotted road */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: "repeating-linear-gradient(90deg, rgba(201,151,58,0.3) 0, rgba(201,151,58,0.3) 12px, transparent 12px, transparent 24px)" }}
        />
        {/* Scooter */}
        <div
          className="ra-scooter absolute top-1/2 -translate-y-1/2 text-2xl"
          style={{ animationPlayState: isInView ? "running" : "paused" }}
        >
          🛵
        </div>
      </div>

      {/* Gold kasavu bottom border */}
      <div className="ra-kasavu mt-12 max-w-6xl mx-auto" />
    </section>
  )
}

function LocationCard({ outlet }: { outlet: (typeof OUTLETS)[number] }) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  /* ── 3D tilt ──────────────────────────────────────── */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = (e.clientX - left) / width  - 0.5
    const y = (e.clientY - top)  / height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`
    el.style.transition = "transform 0.08s ease"
  }
  const handleMouseLeaveCard = () => {
    const el = cardRef.current
    if (!el) return
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)"
    el.style.transition = "transform 0.45s ease"
    setHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className="ra-location-card ra-card flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveCard}
      style={{
        background: hovered
          ? "linear-gradient(135deg, var(--ra-smoke) 0%, #3d2020 100%)"
          : "var(--ra-smoke)",
        transition: "background 0.4s ease",
        willChange: "transform",
      }}
    >
      {/* Illustrated façade */}
      <div
        className="relative overflow-hidden flex items-end justify-center pt-6"
        style={{ height: "140px" }}
      >
        <FacadeSVG
          roofColor={outlet.roofColor}
          wallColor={outlet.wallColor}
          hovered={hovered}
        />
        {/* Night sky in card header */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, #0D1B2A 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Card info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="ra-label mb-1" style={{ color: "var(--ra-gold)" }}>
          {outlet.area}
        </span>
        <h3
          className="ra-display text-xl mb-2"
          style={{ color: "var(--ra-sand)" }}
        >
          {outlet.name}
        </h3>
        <p
          className="text-sm mb-4 flex-1"
          style={{ color: "rgba(242,232,213,0.5)" }}
        >
          {outlet.address}
        </p>

        <div className="flex gap-3">
          <a
            href={outlet.mapUrl}
            className="flex-1 text-center text-xs py-2 rounded-sm"
            style={{
              border: "1px solid rgba(201,151,58,0.35)",
              color: "var(--ra-gold)",
            }}
          >
            📍 View on Map
          </a>
          <a
            href={outlet.swiggyUrl}
            className="flex-1 text-center text-xs py-2 rounded-sm ra-btn-primary"
            style={{ fontSize: "0.75rem", padding: "0.5rem 0" }}
          >
            Order Swiggy
          </a>
        </div>
      </div>
    </div>
  )
}

/* SVG façade: Arabic arch door + Kerala sloped roof + glowing windows */
function FacadeSVG({
  roofColor,
  wallColor,
  hovered,
}: {
  roofColor: string
  wallColor: string
  hovered: boolean
}) {
  const windowFill = hovered ? "rgba(201,151,58,0.85)" : "rgba(201,151,58,0.25)"
  const windowGlow = hovered ? "0 0 10px rgba(201,151,58,0.8)" : "none"

  return (
    <svg width="160" height="120" viewBox="0 0 160 120">
      {/* Kerala sloped roof */}
      <path d="M10 55 L80 20 L150 55 Z" fill={roofColor} />
      {/* Roof ridge gold line */}
      <line x1="10" y1="55" x2="150" y2="55" stroke="rgba(201,151,58,0.5)" strokeWidth="1.5" />

      {/* Main wall */}
      <rect x="25" y="55" width="110" height="60" fill={wallColor} />

      {/* Arabic arch door (center) */}
      <path
        d="M60 115 L60 82 Q80 65 100 82 L100 115 Z"
        fill="rgba(26,13,13,0.8)"
        stroke="rgba(201,151,58,0.5)"
        strokeWidth="1"
      />

      {/* Windows – ra-window class for CSS hover */}
      <rect
        x="30" y="65"
        width="20" height="18"
        rx="8" ry="8"
        fill={windowFill}
        className="ra-window"
        style={{ filter: windowGlow, transition: "fill 0.4s, filter 0.4s" }}
      />
      <rect
        x="110" y="65"
        width="20" height="18"
        rx="8" ry="8"
        fill={windowFill}
        className="ra-window"
        style={{ filter: windowGlow, transition: "fill 0.4s, filter 0.4s" }}
      />

      {/* Dome finial */}
      <ellipse cx="80" cy="20" rx="12" ry="7" fill={roofColor} />
      <path d="M78 13 Q80 5 82 13 Z" fill="rgba(201,151,58,0.7)" />

      {/* Ground line */}
      <line x1="0" y1="116" x2="160" y2="116" stroke="rgba(201,151,58,0.2)" strokeWidth="1" />
    </svg>
  )
}
