"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FADE_UP } from "@/lib/animations"
import {
  CONFERENCE_TICKETS,
  HACKATHON_TICKETS,
  BUILDER_PASS,
  DEVFOLIO_URL,
} from "@/lib/constants"

function scrollToWaitlist(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
}

interface TicketCardProps {
  name: string
  price: string
  description: string
  badge: string | null
  isFeatured: boolean
  type: "conference" | "hackathon" | "combo"
  delay: number
  inView: boolean
}

function TicketCard({
  name,
  price,
  description,
  badge,
  isFeatured,
  type,
  delay,
  inView,
}: TicketCardProps) {
  const isHackathon = type === "hackathon"
  const isCombo = type === "combo"

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={FADE_UP}
      className={`relative rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-300
        hover:shadow-lg hover:-translate-y-0.5
        ${isFeatured
          ? "bg-[#1D9E75] border-[#1D9E75] text-white"
          : "bg-white border-[#1A1A18]/8 hover:border-[#1D9E75]/40"
        }`}
    >
      {/* Badge */}
      {badge && (
        <span
          className={`absolute -top-2.5 left-5 text-xs font-medium px-3 py-1 rounded-full
            ${isFeatured
              ? "bg-[#BA7517] text-white"
              : "bg-[#1A1A18] text-white"
            }`}
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {badge}
        </span>
      )}

      <div className="flex items-start justify-between">
        <div>
          <p
            className={`text-xs tracking-widest uppercase mb-1 ${isFeatured ? "text-white/60" : "text-[#1A1A18]/40"}`}
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {isCombo ? "Combo" : isHackathon ? "Hackathon" : "Conference"}
          </p>
          <h3
            className={`text-lg font-bold ${isFeatured ? "text-white" : "text-[#1A1A18]"}`}
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {name}
          </h3>
        </div>
        <span
          className={`text-2xl font-bold tabular-nums ${isFeatured ? "text-white" : "text-[#1A1A18]"}`}
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {price}
        </span>
      </div>

      <p className={`text-sm leading-relaxed flex-1 ${isFeatured ? "text-white/70" : "text-[#1A1A18]/55"}`}>
        {description}
      </p>

      {isHackathon ? (
        <a
          href={DEVFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200
            ${isFeatured
              ? "bg-white text-[#1D9E75] hover:bg-[#f0faf6]"
              : "bg-[#1A1A18] text-white hover:bg-[#333]"
            }`}
        >
          {/* TODO: Update with actual Devfolio event URL */}
          Register on Devfolio
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13 13 3m0 0H6m7 0v7" />
          </svg>
        </a>
      ) : (
        <a
          href="#waitlist"
          onClick={scrollToWaitlist}
          className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200
            ${isFeatured
              ? "bg-white text-[#1D9E75] hover:bg-[#f0faf6]"
              : "bg-[#1D9E75]/10 text-[#1D9E75] hover:bg-[#1D9E75]/18"
            }`}
        >
          Get Ticket
        </a>
      )}
    </motion.div>
  )
}

export default function Tickets() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const allConf = CONFERENCE_TICKETS
  const allHack = HACKATHON_TICKETS

  return (
    <section ref={ref} id="tickets" className="py-24 sm:py-32 bg-[#F6F5F1] grid-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-4"
        >
          Tickets
        </motion.p>
        <motion.h2
          custom={1}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-4xl sm:text-5xl font-bold text-[#1A1A18] mb-4 leading-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Get your spot.
        </motion.h2>
        <motion.p
          custom={2}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="text-[#1A1A18]/55 mb-12"
        >
          Student promo codes available at college activations.
        </motion.p>

        {/* Conference tickets label */}
        <motion.p
          custom={3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-5"
        >
          Conference Tickets
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {allConf.map((ticket, i) => (
            <TicketCard key={ticket.id} {...ticket} delay={0.1 * (i + 4)} inView={inView} />
          ))}
        </div>

        {/* Hackathon tickets label */}
        <motion.p
          custom={7}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
          className="section-label mb-5 mt-10"
        >
          Hackathon Tickets
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {allHack.map((ticket, i) => (
            <TicketCard key={ticket.id} {...ticket} delay={0.1 * (i + 8)} inView={inView} />
          ))}
        </div>

        {/* Builder pass */}
        <motion.div
          custom={11}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={FADE_UP}
        >
          <p className="section-label mb-5 mt-10">Best Value</p>
          <div className="max-w-sm">
            <TicketCard
              {...BUILDER_PASS}
              delay={0.1 * 11}
              inView={inView}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
