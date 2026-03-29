"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function WolkanoNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { label: "Flavours", href: "/wolkano#signatures" },
    { label: "Menu", href: "/wolkano/menu" },
    { label: "Locations", href: "/wolkano#locations" },
    { label: "Our Story", href: "/wolkano#story" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-lg shadow-[0_2px_20px_rgba(30,10,6,0.08)] border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/wolkano" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E91B8D] to-[#C87941] flex items-center justify-center text-white text-lg shadow-md">
              🌋
            </div>
            <div className="leading-tight">
              <span
                className="font-black text-xl text-[#1E0A06] block"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Wolkano
              </span>
              <span
                className="text-[10px] font-bold tracking-[0.2em] text-[#C87941] block uppercase -mt-0.5"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Creamery
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#1E0A06]/65 hover:text-[#E91B8D] transition-colors duration-200"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+91"
              className="text-sm font-semibold text-[#1E0A06]/60 hover:text-[#1E0A06] transition-colors flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.024.76-1.904 1.777-2.01a48.2 48.2 0 0 1 5.55-.274c1.018.056 1.822.876 1.944 1.892l.14 1.147a2.003 2.003 0 0 1-1.397 2.17l-.73.22a12.006 12.006 0 0 0 4.58 4.58l.22-.73a2.003 2.003 0 0 1 2.17-1.397l1.147.14c1.016.123 1.836.926 1.892 1.944a48.2 48.2 0 0 1-.274 5.55C21.566 21.24 20.686 22 19.662 22c-9.054 0-16.397-7.343-16.397-16.397-.001-.407.02-.812.025-1.213"/>
              </svg>
              Call to Order
            </a>
            <a
              href="#"
              className="w-btn-primary !py-2.5 !px-5 !text-sm"
            >
              Order Online
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 -mr-1 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#1E0A06] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1E0A06] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#1E0A06] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t border-black/5 px-5 pt-4 pb-6 flex flex-col gap-1"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-[#1E0A06] py-3 border-b border-black/5 flex items-center justify-between"
            >
              {link.label}
              <svg className="w-4 h-4 text-[#1E0A06]/30" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 3l5 5-5 5" />
              </svg>
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a href="tel:+91" className="text-sm font-semibold text-[#1E0A06]/60 text-center py-2">
              📞 Call to Order
            </a>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="w-btn-primary text-center"
            >
              🛍 Order Online
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
