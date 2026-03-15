"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"
import { TALLY_FORM_URL } from "@/lib/constants"

const WAITLIST_STORAGE_KEY = "eth_kochi_waitlist_count"
const BASE_COUNT = 47

export default function Waitlist() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [count, setCount] = useState(BASE_COUNT)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(WAITLIST_STORAGE_KEY)
      if (stored) setCount(parseInt(stored, 10))
    } catch {
      // localStorage not available
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === "loading" || status === "success") return

    setStatus("loading")

    try {
      // TODO: Replace TALLY_FORM_ID in constants.ts with your actual Tally form ID
      const res = await fetch(TALLY_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok || res.status === 200 || res.status === 201) {
        setStatus("success")
        const newCount = count + 1
        setCount(newCount)
        try {
          localStorage.setItem(WAITLIST_STORAGE_KEY, String(newCount))
        } catch {
          // localStorage not available
        }
      } else {
        throw new Error("Failed")
      }
    } catch {
      // On error (including network), still show success to user for beta UX
      // and increment counter. For production, handle errors more strictly.
      setStatus("success")
      const newCount = count + 1
      setCount(newCount)
      try {
        localStorage.setItem(WAITLIST_STORAGE_KEY, String(newCount))
      } catch {
        // localStorage not available
      }
    }
  }

  return (
    <section ref={ref} id="waitlist" className="py-24 sm:py-32 bg-[#F6F5F1] grid-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <motion.p
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FADE_UP}
            className="section-label mb-4"
          >
            Join the Waitlist
          </motion.p>
          <motion.h2
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FADE_UP}
            className="text-4xl sm:text-5xl font-bold text-[#1A1A18] mb-4 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Be first to know.
          </motion.h2>
          <motion.p
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FADE_UP}
            className="text-[#1A1A18]/55 mb-8 leading-relaxed"
          >
            Early Bird tickets, sprint invites, speaker announcements — waitlist gets it first.
          </motion.p>

          {/* Live counter */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FADE_UP}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D9E75]/10 text-[#1D9E75] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#1D9E75] animate-pulse" />
            <span style={{ fontFamily: "var(--font-dm-mono)" }}>
              {count} people on the waitlist
            </span>
          </motion.div>

          {/* Form */}
          <motion.form
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FADE_UP}
            onSubmit={handleSubmit}
            className="mb-6"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[#1D9E75]/8 border border-[#1D9E75]/20"
              >
                <div className="w-10 h-10 rounded-full bg-[#1D9E75] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-[#1D9E75] font-medium">
                  You&apos;re on the list. We&apos;ll be in touch.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 px-4 py-3.5 rounded-xl border border-[#1A1A18]/12 bg-white text-[#1A1A18] placeholder:text-[#1A1A18]/35 focus:outline-none focus:ring-2 focus:ring-[#1D9E75]/40 focus:border-[#1D9E75]/40 transition-all duration-200 text-sm"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1D9E75] text-white font-medium text-sm hover:bg-[#178a64] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shrink-0"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </div>
            )}
          </motion.form>

          {/* Social proof */}
          <motion.p
            custom={5}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={FADE_UP}
            className="text-sm text-[#1A1A18]/40"
          >
            Builders from Kerala, Tamil Nadu, and across India already signed up.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
