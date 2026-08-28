"use client"

import { useEffect } from "react"
import { RickshawSlot, formatInr } from "@/lib/rickshaw-data"

interface SlotDrawerProps {
  slot: RickshawSlot | null
  onClose: () => void
}

export default function SlotDrawer({ slot, onClose }: SlotDrawerProps) {
  const isOpen = slot !== null

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose])

  return (
    <>
      <div
        className="rw-drawer-backdrop"
        data-open={isOpen}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="rw-drawer"
        data-open={isOpen}
        role="dialog"
        aria-modal="true"
        aria-label={slot ? `${slot.label} details` : "Slot details"}
      >
        {slot && (
          <>
            <div className="rw-drawer-handle" />
            <button type="button" className="rw-drawer-close" onClick={onClose} aria-label="Close">
              ×
            </button>

            <p className="rw-drawer-eyebrow">Ad slot</p>
            <h2>{slot.label}</h2>
            <p className="rw-drawer-dims">{slot.dimensions}</p>

            <dl className="rw-drawer-stats">
              <div>
                <dt>Starting bid</dt>
                <dd>{formatInr(slot.startingBid)}</dd>
              </div>
              <div>
                <dt>Current bid</dt>
                <dd>{formatInr(slot.currentBid)}</dd>
              </div>
              <div>
                <dt>Minimum next bid</dt>
                <dd>{formatInr(slot.currentBid + slot.minIncrement)}</dd>
              </div>
              <div>
                <dt>Refundable deposit</dt>
                <dd>{formatInr(slot.deposit)}</dd>
              </div>
              <div>
                <dt>Current brand</dt>
                <dd>{slot.currentBrand ? slot.currentBrand.name : "No bids yet"}</dd>
              </div>
              <div>
                <dt>Bid count</dt>
                <dd>{slot.bidCount}</dd>
              </div>
            </dl>

            <ul className="rw-drawer-rules">
              <li>Bids are final once submitted.</li>
              <li>A refundable deposit confirms your bid and activates it.</li>
              <li>If outbid, your deposit is refunded automatically.</li>
              <li>Winners settle the balance within the payment deadline or the slot is re-listed.</li>
            </ul>

            <button type="button" className="rw-drawer-cta">
              {slot.currentBrand ? "Outbid" : "Place Bid"}
            </button>
          </>
        )}
      </aside>
    </>
  )
}
