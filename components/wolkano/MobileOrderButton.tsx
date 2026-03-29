"use client"

import { useEffect, useState } from "react"

export default function MobileOrderButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t border-black/8 px-4 py-3 flex gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.12)]">
        <a
          href="tel:+91"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border-2 border-[#E91B8D] text-[#E91B8D] font-bold text-sm"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.024.76-1.904 1.777-2.01a48.2 48.2 0 015.55-.274c1.018.056 1.822.876 1.944 1.892l.14 1.147a2.003 2.003 0 01-1.397 2.17l-.73.22a12.006 12.006 0 004.58 4.58l.22-.73a2.003 2.003 0 012.17-1.397l1.147.14c1.016.123 1.836.926 1.892 1.944a48.2 48.2 0 01-.274 5.55C21.566 21.24 20.686 22 19.662 22 10.608 22 3.25 14.657 3.25 5.603c0-.407.02-.812.025-1.213" />
          </svg>
          Call
        </a>
        <a
          href="#"
          className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-full bg-[#E91B8D] text-white font-bold text-sm shadow-[0_4px_16px_rgba(233,27,141,0.4)]"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          🛍 Order Online
        </a>
      </div>
    </div>
  )
}
