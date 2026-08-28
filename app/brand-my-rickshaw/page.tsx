"use client"

import { useMemo, useState } from "react"
import RickshawViewer from "@/components/brand-my-rickshaw/RickshawViewer"
import SlotDrawer from "@/components/brand-my-rickshaw/SlotDrawer"
import CountdownTimer from "@/components/brand-my-rickshaw/CountdownTimer"
import { RICKSHAW_SLOTS, formatInr, getSlot } from "@/lib/rickshaw-data"

const AUCTION_ENDS_AT = new Date("2026-09-02T18:30:00+05:30").getTime()

const FAQ_ITEMS = [
  {
    q: "Who can bid on a slot?",
    a: "Any registered brand or individual with a valid email, phone number, and billing details. There's no minimum spend to create an account.",
  },
  {
    q: "Is the deposit refundable?",
    a: "Yes. The deposit only confirms and activates your bid. If you're outbid before the auction closes, it's refunded automatically.",
  },
  {
    q: "How is the winner selected?",
    a: "The highest confirmed bid on each slot when its auction timer hits zero wins that slot. Each slot runs its own independent auction.",
  },
  {
    q: "What happens if a winner delays payment?",
    a: "Winning bidders must clear the remaining balance within the payment deadline shown at checkout. If it's missed, the slot is re-listed.",
  },
]

export default function BrandMyRickshawPage() {
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null)

  const selectedSlot = selectedSlotId ? getSlot(selectedSlotId) ?? null : null

  const stats = useMemo(() => {
    const totalBids = RICKSHAW_SLOTS.reduce((sum, s) => sum + s.bidCount, 0)
    const highestBid = Math.max(...RICKSHAW_SLOTS.map((s) => s.currentBid))
    const liveSlots = RICKSHAW_SLOTS.filter((s) => s.bidCount > 0).length
    return { totalBids, highestBid, liveSlots, totalSlots: RICKSHAW_SLOTS.length }
  }, [])

  return (
    <>
      <nav className="bmr-nav">
        <span className="bmr-logo">Brand My Rickshaw</span>
        <a href="#slots" className="bmr-nav-cta">
          Bid on a slot
        </a>
      </nav>

      <section className="bmr-hero">
        <div className="bmr-hero-copy">
          <p className="bmr-eyebrow">One rickshaw · Live citywide campaign</p>
          <h1>Your brand, riding through the city, one bid at a time.</h1>
          <p className="bmr-hero-sub">
            Spin the rickshaw, pick an ad slot, and bid live. Every panel is a real placement
            brands are actively competing for.
          </p>
          <a href="#slots" className="bmr-cta-primary">
            Bid on a slot
          </a>
        </div>

        <div className="bmr-hero-viewer">
          <RickshawViewer selectedSlotId={selectedSlotId} onSelectSlot={setSelectedSlotId} />
        </div>
      </section>

      <section className="bmr-strip">
        <h2>What is Brand My Rickshaw?</h2>
        <p>
          One autorickshaw, split into individually auctioned ad slots: front, rear, and both
          sides. You bid on the exact panel you want, pay a small refundable deposit to confirm,
          and your logo goes live on the vehicle as it moves through the city.
        </p>
        <div className="bmr-feature-row">
          <div className="bmr-feature-card">
            <strong>Real vehicle, real routes</strong>
            <p>One physical rickshaw driving real city streets, not a digital mockup.</p>
          </div>
          <div className="bmr-feature-card">
            <strong>Transparent live bidding</strong>
            <p>Every bid, every slot, every countdown is visible to everyone in real time.</p>
          </div>
          <div className="bmr-feature-card">
            <strong>Refundable deposits</strong>
            <p>Outbid? Your deposit is returned automatically, no manual refund requests.</p>
          </div>
        </div>
      </section>

      <section className="bmr-auction-status">
        <div className="bmr-auction-status-left">
          <p className="bmr-eyebrow">Live auction status</p>
          <h2>Campaign closes in</h2>
          <CountdownTimer endsAt={AUCTION_ENDS_AT} />
        </div>
        <div className="bmr-auction-stats">
          <div>
            <span>{stats.liveSlots}</span>
            <small>of {stats.totalSlots} slots have bids</small>
          </div>
          <div>
            <span>{stats.totalBids}</span>
            <small>total bids placed</small>
          </div>
          <div>
            <span>{formatInr(stats.highestBid)}</span>
            <small>highest current bid</small>
          </div>
        </div>
      </section>

      <section id="slots" className="bmr-slot-grid-section">
        <h2>Available ad spaces</h2>
        <div className="bmr-slot-grid">
          {RICKSHAW_SLOTS.map((slot) => (
            <button
              key={slot.id}
              type="button"
              className="bmr-slot-card"
              onClick={() => setSelectedSlotId(slot.id)}
            >
              <div className="bmr-slot-card-top">
                <span className={`bmr-pill ${slot.bidCount > 0 ? "bmr-pill-live" : "bmr-pill-open"}`}>
                  {slot.bidCount > 0 ? "Live bidding" : "Open (no bids yet)"}
                </span>
                <span className="bmr-slot-card-dims">{slot.dimensions}</span>
              </div>
              <h3>{slot.label}</h3>
              <div className="bmr-slot-card-bottom">
                <div>
                  <small>{slot.bidCount > 0 ? "Current bid" : "Starting bid"}</small>
                  <strong>{formatInr(slot.currentBid || slot.startingBid)}</strong>
                </div>
                <div>
                  <small>Bidders</small>
                  <strong>{slot.bidCount}</strong>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="bmr-how">
        <h2>How bidding works</h2>
        <ol>
          <li>Enter your bid amount for the slot you want.</li>
          <li>We validate it against the minimum next-bid increment.</li>
          <li>A refundable deposit is calculated automatically.</li>
          <li>Pay the deposit: your bid activates and shows in the live feed.</li>
          <li>Outbid? Your deposit is refunded automatically.</li>
          <li>Auction ends → winner pays the remaining balance by the deadline.</li>
        </ol>
      </section>

      <section className="bmr-trust">
        <h2>Auction rules</h2>
        <ul>
          <li>Bids are final once submitted.</li>
          <li>Each ad slot runs its own independent auction and countdown.</li>
          <li>A refundable deposit is required to confirm and activate any bid.</li>
          <li>Winning bidders must complete the balance within the payment deadline.</li>
          <li>If payment isn&apos;t completed in time, the slot is re-listed.</li>
          <li>We make no guarantee of impressions or ROI; this is street advertising.</li>
        </ul>
      </section>

      <section className="bmr-faq">
        <h2>Frequently asked</h2>
        <div className="bmr-faq-list">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bmr-footer">
        <div>
          <span className="bmr-logo">Brand My Rickshaw</span>
          <p>One rickshaw. Real streets. Live bids.</p>
        </div>
        <div className="bmr-footer-links">
          <span>How It Works</span>
          <span>FAQ</span>
          <span>Terms &amp; Policies</span>
          <span>Contact</span>
        </div>
        <p className="bmr-footer-copy">© 2026 Brand My Rickshaw. All bids are final.</p>
      </footer>

      <SlotDrawer slot={selectedSlot} onClose={() => setSelectedSlotId(null)} />
    </>
  )
}
