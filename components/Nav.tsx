"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Speakers", href: "/speakers" },
  { label: "Hackathon", href: "/hackathon" },
  { label: "Sponsors", href: "/sponsors" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#F6F5F1]/85 border-b border-black/8 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <span
              className="font-bold text-xl leading-none tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-[#1A1A18]">ETH</span>
              <span className="text-[#1D9E75]"> Kochi</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1A1A18]/65 hover:text-[#1A1A18] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              onClick={scrollToWaitlist}
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-[#1D9E75] text-white text-sm font-medium hover:bg-[#178a64] transition-colors duration-200"
            >
              Join Waitlist
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-[#1A1A18] transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#1A1A18] transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#1A1A18] transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden backdrop-blur-md bg-[#F6F5F1]/95 border-b border-black/8"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[#1A1A18] py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#waitlist"
                onClick={scrollToWaitlist}
                className="inline-flex items-center justify-center px-4 py-3 rounded-full bg-[#1D9E75] text-white text-base font-medium mt-2"
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
