"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

/*
  FooterScene – "Night in Kochi"
  ─────────────────────────────────────────────────────────────
  Full-width footer with:
    • Layered night-time silhouette SVG:
        - Background: dark sky with twinkling stars
        - Mid: mosque dome, church spire, residential blocks
        - Foreground: coconut trees, houseboats, water
    • Gold kasavu top border
    • Navigation links: Menu, Locations, Contact, Order
    • Social icon placeholders
    • Bottom: brand tagline + copyright

  Animations (CSS keyframes):
    • Stars: `.ra-star` (twinkle pulse, defined in real-arabia.css)
    • Drifting cloud: `.ra-cloud` (slow horizontal oscillation)
    • Slow window blink: custom `ra-window-blink` keyframe defined below
      (windows in silhouette blocks turn on/off at different intervals)
  ─────────────────────────────────────────────────────────────
*/

const NAV_LINKS = [
  { label: "Menu",      mlLabel: "മെനു",      href: "#menu" },
  { label: "Locations", mlLabel: "ലൊക്കേഷൻ", href: "#locations" },
  { label: "Story",     mlLabel: "കഥ",         href: "#story" },
  { label: "Contact",   mlLabel: "ബന്ധപ്പെടൂ", href: "#contact" },
  { label: "Order Now", mlLabel: "ഓർഡർ",       href: "#order" },
]

const SOCIAL_LINKS = [
  { icon: "📸", label: "Instagram", href: "#" },
  { icon: "📘", label: "Facebook",  href: "#" },
  { icon: "▶️", label: "YouTube",   href: "#" },
  { icon: "🐦", label: "Twitter",   href: "#" },
]

export default function FooterScene() {
  const footerRef = useRef<HTMLDivElement>(null)
  const isInView  = useInView(footerRef, { once: true, margin: "-40px" })

  return (
    <footer
      ref={footerRef}
      id="contact"
      style={{ background: "#0D0808", position: "relative", overflow: "hidden" }}
    >
      {/* Kasavu top border */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, transparent, var(--ra-gold), var(--ra-gold), transparent)",
          boxShadow: "0 -3px 0 0 rgba(201,151,58,0.2)",
        }}
      />

      {/* Night skyline scene */}
      <div className="relative w-full" style={{ height: "220px" }}>
        {/* ── Sky gradient ─────────────────────────────── */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #050A14 0%, #0D1520 50%, #1A0D0D 100%)",
          }}
        />

        {/* ── Twinkling stars ──────────────────────────── */}
        {STAR_POSITIONS.map((s, i) => (
          <div
            key={i}
            className={`absolute rounded-full ra-star ${i % 3 === 1 ? "ra-star-2" : i % 3 === 2 ? "ra-star-3" : ""}`}
            style={{
              left:   `${s.x}%`,
              top:    `${s.y}%`,
              width:  `${s.size}px`,
              height: `${s.size}px`,
              background: "white",
            }}
          />
        ))}

        {/* ── Drifting cloud ───────────────────────────── */}
        <div
          className="ra-cloud absolute opacity-10"
          style={{ top: "12%", left: "20%", color: "white", fontSize: "3rem" }}
        >
          ☁
        </div>
        <div
          className="ra-cloud absolute opacity-8"
          style={{ top: "8%", right: "25%", color: "white", fontSize: "2rem", animationDelay: "8s" }}
        >
          ☁
        </div>

        {/* ── Silhouette SVG scene ─────────────────────── */}
        <svg
          viewBox="0 0 1200 220"
          preserveAspectRatio="xMidYMax meet"
          className="absolute bottom-0 left-0 w-full"
        >
          {/* ── Background skyline (silhouettes) ─────── */}
          {/* Mosque dome + minaret */}
          <path d="M80 180 L80 120 L95 100 L95 80 Q95 65 100 65 Q105 65 105 80 L105 100 L120 120 L120 180 Z" fill="#0A0505" />
          <ellipse cx="100" cy="65" rx="15" ry="10" fill="#0A0505" />
          {/* Second minaret */}
          <rect x="140" y="100" width="8" height="80" fill="#0A0505" />
          <path d="M140 100 Q144 88 148 100 Z" fill="#0A0505" />

          {/* Church spire */}
          <rect x="300" y="90" width="30" height="90" fill="#0A0505" />
          <path d="M295 90 L315 55 L335 90 Z" fill="#0A0505" />
          <rect x="312" y="55" width="6" height="20" fill="#0A0505" />

          {/* Apartment blocks */}
          <rect x="450" y="110" width="60" height="70" fill="#0A0505" />
          <rect x="520" y="95" width="50" height="85" fill="#0A0505" />
          <rect x="580" y="115" width="70" height="65" fill="#0A0505" />

          {/* More buildings */}
          <rect x="680" y="100" width="55" height="80" fill="#0A0505" />
          <rect x="745" y="118" width="45" height="62" fill="#0A0505" />
          <rect x="800" y="85" width="65" height="95" fill="#0A0505" />

          {/* ── Blinking windows ─────────────────────── */}
          {WINDOW_DEFS.map((w, i) => (
            <rect
              key={i}
              x={w.x} y={w.y} width={w.w} height={w.h}
              fill={`rgba(201,151,58,${w.bright})`}
              style={{ animation: `ra-window-blink ${w.dur}s ${w.delay}s ease-in-out infinite alternate` }}
            />
          ))}

          {/* ── Foreground: coconut trees ─────────────── */}
          {/* Left tree */}
          <path d="M200 220 Q202 180 198 150 Q196 120 200 100" stroke="#1A2A12" strokeWidth="5" fill="none" />
          <path d="M200 100 Q182 85 170 92" stroke="#1A3A1A" strokeWidth="2.5" fill="none" />
          <path d="M200 100 Q218 82 228 90" stroke="#1A3A1A" strokeWidth="2.5" fill="none" />
          <path d="M200 100 Q194 80 196 68" stroke="#1A3A1A" strokeWidth="2" fill="none" />
          <path d="M200 100 Q208 78 210 68" stroke="#1A3A1A" strokeWidth="2" fill="none" />

          {/* Right tree */}
          <path d="M960 220 Q962 180 958 155 Q955 125 960 105" stroke="#1A2A12" strokeWidth="5" fill="none" />
          <path d="M960 105 Q942 90 932 97" stroke="#1A3A1A" strokeWidth="2.5" fill="none" />
          <path d="M960 105 Q978 87 988 95" stroke="#1A3A1A" strokeWidth="2.5" fill="none" />
          <path d="M960 105 Q954 84 956 72" stroke="#1A3A1A" strokeWidth="2" fill="none" />
          <path d="M960 105 Q968 82 970 72" stroke="#1A3A1A" strokeWidth="2" fill="none" />

          {/* ── Waterfront ────────────────────────────── */}
          <path d="M0 195 Q200 188 400 193 Q600 198 800 191 Q1000 185 1200 193 L1200 220 L0 220 Z" fill="#0D1520" />
          {/* Water shimmer line */}
          <path d="M0 195 Q200 188 400 193 Q600 198 800 191 Q1000 185 1200 193" fill="none" stroke="rgba(201,151,58,0.15)" strokeWidth="1" />

          {/* Houseboat silhouette */}
          <path d="M500 192 Q600 186 700 192 L695 198 Q600 203 505 198 Z" fill="#1A1005" />
          <rect x="520" y="178" width="160" height="16" rx="1" fill="#141008" />
          <path d="M510 180 L600 168 L690 180 Z" fill="#1A140A" />

          {/* ── Lanterns on string ───────────────────── */}
          <line x1="150" y1="60" x2="1050" y2="60" stroke="rgba(201,151,58,0.12)" strokeWidth="1" />
          {LANTERN_X_POSITIONS.map((x, i) => (
            <g key={i}>
              <line x1={x} y1="60" x2={x} y2="75" stroke="rgba(201,151,58,0.3)" strokeWidth="1" />
              <rect
                x={x - 4} y="75" width="8" height="14"
                rx="4"
                fill={`rgba(201,151,58,${0.5 + (i % 3) * 0.15})`}
                style={{ animation: `ra-lantern-glow ${2.5 + i * 0.3}s ease-in-out infinite` }}
              />
            </g>
          ))}
        </svg>

        {/* window-blink + lantern-glow keyframes injected here */}
        <style>{`
          @keyframes ra-window-blink {
            from { opacity: 0.15; }
            to   { opacity: 0.85; }
          }
          @keyframes ra-lantern-glow {
            0%, 100% { filter: drop-shadow(0 0 4px rgba(201,151,58,0.5)); }
            50%       { filter: drop-shadow(0 0 12px rgba(201,151,58,1)); }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="ra-window-blink"], [style*="ra-lantern-glow"] { animation: none !important; }
          }
        `}</style>
      </div>

      {/* ── Footer content ───────────────────────────── */}
      <div
        className="px-6 md:px-16 py-12"
        style={{ background: "#0A0505" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Brand */}
          <div className="text-center mb-10">
            <div className="ra-label mb-2">كوچي  ·  Kochi, Kerala</div>
            <div
              className="ra-display text-3xl md:text-4xl mb-2"
              style={{ color: "var(--ra-gold)" }}
            >
              ◆ REAL ARABIA ◆
            </div>
            <p
              className="text-sm max-w-sm mx-auto"
              style={{ color: "rgba(242,232,213,0.4)" }}
            >
              Where Arabian nights meet Kerala&apos;s coastal soul.
              <br />
              <span style={{ fontFamily: "var(--font-dm-sans)" }}>
                അറബ് രാത്രിയും കേരളത്തിൻ്റെ ആത്മാവും ഒന്നിക്കുന്നിടം.
              </span>
            </p>
          </div>

          {/* Nav + social row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            {/* Nav links */}
            <nav className="flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:opacity-100 transition-opacity"
                  style={{ color: "rgba(242,232,213,0.55)" }}
                >
                  {link.label}
                  <span className="ml-1.5 text-xs" style={{ color: "rgba(201,151,58,0.4)" }}>
                    {link.mlLabel}
                  </span>
                </a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex gap-5">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  className="text-xl opacity-40 hover:opacity-100 transition-opacity"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Kasavu divider */}
          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,151,58,0.4), transparent)",
              marginBottom: "1.5rem",
            }}
          />

          {/* Copyright */}
          <div
            className="text-center text-xs"
            style={{ color: "rgba(242,232,213,0.25)" }}
          >
            © {new Date().getFullYear()} Real Arabia Restaurants Pvt. Ltd. · Kochi, Kerala
            &nbsp;·&nbsp; All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── Static data for scene elements ──────────────────────── */

const STAR_POSITIONS = [
  { x: 5,  y: 8,  size: 1.5 },
  { x: 12, y: 15, size: 1   },
  { x: 22, y: 6,  size: 2   },
  { x: 35, y: 11, size: 1.5 },
  { x: 48, y: 5,  size: 1   },
  { x: 55, y: 14, size: 2   },
  { x: 63, y: 8,  size: 1   },
  { x: 72, y: 4,  size: 1.5 },
  { x: 80, y: 12, size: 1   },
  { x: 88, y: 7,  size: 2   },
  { x: 93, y: 16, size: 1   },
  { x: 98, y: 9,  size: 1.5 },
  { x: 28, y: 20, size: 1   },
  { x: 42, y: 18, size: 1.5 },
  { x: 68, y: 20, size: 1   },
]

const WINDOW_DEFS = [
  // Apartment block 1
  { x: 455, y: 118, w: 10, h: 10, bright: 0.6, dur: 5,   delay: 0   },
  { x: 472, y: 118, w: 10, h: 10, bright: 0.3, dur: 7,   delay: 1.5 },
  { x: 455, y: 135, w: 10, h: 10, bright: 0.5, dur: 4.5, delay: 0.8 },
  { x: 472, y: 135, w: 10, h: 10, bright: 0.7, dur: 6,   delay: 2.2 },
  // Apartment block 2
  { x: 525, y: 103, w: 10, h: 10, bright: 0.5, dur: 5.5, delay: 0.3 },
  { x: 542, y: 103, w: 10, h: 10, bright: 0.8, dur: 3.5, delay: 1   },
  { x: 525, y: 120, w: 10, h: 10, bright: 0.3, dur: 6.5, delay: 2.5 },
  // Block 3
  { x: 690, y: 108, w: 10, h: 10, bright: 0.6, dur: 4,   delay: 0.6 },
  { x: 707, y: 108, w: 10, h: 10, bright: 0.4, dur: 7,   delay: 1.8 },
  { x: 690, y: 125, w: 10, h: 10, bright: 0.7, dur: 5,   delay: 3   },
  { x: 707, y: 125, w: 10, h: 10, bright: 0.3, dur: 6,   delay: 0.2 },
  // Tall building
  { x: 810, y: 95,  w: 10, h: 10, bright: 0.5, dur: 5,   delay: 1.2 },
  { x: 827, y: 95,  w: 10, h: 10, bright: 0.8, dur: 3.8, delay: 2   },
  { x: 844, y: 95,  w: 10, h: 10, bright: 0.4, dur: 6.2, delay: 0.7 },
  { x: 810, y: 112, w: 10, h: 10, bright: 0.6, dur: 4.5, delay: 1.5 },
  { x: 827, y: 112, w: 10, h: 10, bright: 0.3, dur: 7.5, delay: 3.2 },
]

const LANTERN_X_POSITIONS = [
  200, 260, 320, 380, 440, 500, 560, 620, 680, 740, 800, 860, 920, 980
]
