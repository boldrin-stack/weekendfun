"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { EMAIL, TWITTER, TWITTER_URL, DOMAIN, TAGLINE, ORGANISER } from "@/lib/constants"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Speakers", href: "/speakers" },
  { label: "Hackathon", href: "/hackathon" },
  { label: "Sponsors", href: "/sponsors" },
]

const STANDALONE_ROUTES = ["/real-arabia", "/easybroker"]

export default function Footer() {
  const pathname = usePathname()

  if (STANDALONE_ROUTES.some((route) => pathname?.startsWith(route))) {
    return null
  }

  return (
    <footer className="bg-[#1A1A18] text-[#F6F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-3">
            <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-syne)" }}>
              <span className="text-[#F6F5F1]">ETH</span>
              <span className="text-[#1D9E75]"> Kochi</span>
            </div>
            <p className="text-sm text-[#F6F5F1]/50 max-w-xs leading-relaxed">
              {TAGLINE}
            </p>
            <p className="text-xs text-[#F6F5F1]/30 font-mono" style={{ fontFamily: "var(--font-dm-mono)" }}>
              August 2026 · KSUM, Kochi, Kerala
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-widest text-[#F6F5F1]/30 uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Pages
            </p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F6F5F1]/55 hover:text-[#1D9E75] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs font-mono tracking-widest text-[#F6F5F1]/30 uppercase" style={{ fontFamily: "var(--font-dm-mono)" }}>
              Connect
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#F6F5F1]/55 hover:text-[#1D9E75] transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                {TWITTER}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-[#F6F5F1]/55 hover:text-[#1D9E75] transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#F6F5F1]/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-[#F6F5F1]/30" style={{ fontFamily: "var(--font-dm-mono)" }}>
            ETH Kochi 2026 · Organised by {ORGANISER} · Kochi, Kerala, India
          </p>
          <p className="text-xs text-[#F6F5F1]/30" style={{ fontFamily: "var(--font-dm-mono)" }}>
            {DOMAIN}
          </p>
        </div>
      </div>
    </footer>
  )
}
