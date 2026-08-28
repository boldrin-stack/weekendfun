"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  RICKSHAW_SLOTS,
  RICKSHAW_VIEWS,
  firstViewIndexForSlot,
  formatInr,
  getSlot,
} from "@/lib/rickshaw-data"

const TRANSITION_MS = 400

interface RickshawViewerProps {
  selectedSlotId: string | null
  onSelectSlot: (slotId: string) => void
}

export default function RickshawViewer({ selectedSlotId, onSelectSlot }: RickshawViewerProps) {
  const [viewIndex, setViewIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeView = RICKSHAW_VIEWS[viewIndex]

  useEffect(() => {
    RICKSHAW_VIEWS.forEach((view) => {
      const preload = new window.Image()
      preload.src = view.image
    })
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const lockDuring = useCallback(
    (run: () => void) => {
      if (isTransitioning) return
      run()
      if (prefersReducedMotion) return
      setIsTransitioning(true)
      timeoutRef.current = setTimeout(() => setIsTransitioning(false), TRANSITION_MS)
    },
    [isTransitioning, prefersReducedMotion],
  )

  const changeView = useCallback(
    (dir: 1 | -1) => {
      lockDuring(() => {
        setDirection(dir)
        setViewIndex((current) => (current + dir + RICKSHAW_VIEWS.length) % RICKSHAW_VIEWS.length)
      })
    },
    [lockDuring],
  )

  const goToView = useCallback(
    (index: number) => {
      if (index === viewIndex) return
      lockDuring(() => {
        setDirection(index > viewIndex ? 1 : -1)
        setViewIndex(index)
      })
    },
    [lockDuring, viewIndex],
  )

  const selectSlotAndReveal = useCallback(
    (slotId: string) => {
      onSelectSlot(slotId)
      const targetIndex = firstViewIndexForSlot(slotId)
      const isVisibleNow = activeView.placements.some((p) => p.slotId === slotId)
      if (!isVisibleNow) goToView(targetIndex)
    },
    [activeView, goToView, onSelectSlot],
  )

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") changeView(1)
    if (event.key === "ArrowLeft") changeView(-1)
  }

  const slideOffset = prefersReducedMotion ? 0 : 24
  const scaleFrom = prefersReducedMotion ? 1 : 0.98
  const duration = prefersReducedMotion ? 0 : TRANSITION_MS / 1000

  return (
    <div className="rw-viewer">
      <div
        className="rw-stage"
        role="group"
        aria-roledescription="carousel"
        aria-label="360 degree rickshaw preview"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <button
          type="button"
          className="rw-arrow rw-arrow-prev"
          onClick={() => changeView(-1)}
          disabled={isTransitioning}
          aria-label="Rotate to previous angle"
        >
          ‹
        </button>

        <div className="rw-frame">
          <AnimatePresence mode="sync" initial={false}>
            <motion.img
              key={activeView.id}
              src={activeView.image}
              alt={activeView.alt}
              className="rw-image"
              draggable={false}
              initial={{ opacity: 0, x: direction * slideOffset, scale: scaleFrom }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -slideOffset, scale: scaleFrom }}
              transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>

          <svg className="rw-slot-layer" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {activeView.placements.map((placement) => {
              const slot = getSlot(placement.slotId)
              if (!slot) return null
              const isSelected = selectedSlotId === placement.slotId
              return (
                <rect
                  key={placement.slotId}
                  x={placement.rect.x}
                  y={placement.rect.y}
                  width={placement.rect.width}
                  height={placement.rect.height}
                  className={`rw-hotspot${isSelected ? " rw-hotspot-selected" : ""}`}
                  onClick={() => selectSlotAndReveal(placement.slotId)}
                >
                  <title>
                    {`${slot.label} — ${formatInr(slot.currentBid || slot.startingBid)}`}
                  </title>
                </rect>
              )
            })}
          </svg>

          {activeView.placements.map((placement) => {
            const slot = getSlot(placement.slotId)
            if (!slot?.currentBrand) return null
            return (
              <div
                key={`${placement.slotId}-brand`}
                className="rw-brand-badge"
                style={{
                  left: `${placement.rect.x}%`,
                  top: `${placement.rect.y}%`,
                  width: `${placement.rect.width}%`,
                  height: `${placement.rect.height}%`,
                }}
              >
                <span>{slot.currentBrand.name}</span>
              </div>
            )
          })}
        </div>

        <button
          type="button"
          className="rw-arrow rw-arrow-next"
          onClick={() => changeView(1)}
          disabled={isTransitioning}
          aria-label="Rotate to next angle"
        >
          ›
        </button>
      </div>

      <div className="rw-dots">
        {RICKSHAW_VIEWS.map((view, index) => (
          <button
            key={view.id}
            type="button"
            className={`rw-dot${index === viewIndex ? " rw-dot-active" : ""}`}
            onClick={() => goToView(index)}
            aria-current={index === viewIndex}
          >
            {view.label}
          </button>
        ))}
      </div>

      <div className="rw-slot-list">
        <h3>Every ad placement on this rickshaw</h3>
        <ul>
          {RICKSHAW_SLOTS.map((slot) => (
            <li key={slot.id}>
              <button
                type="button"
                className={`rw-slot-row${selectedSlotId === slot.id ? " rw-slot-row-selected" : ""}`}
                onClick={() => selectSlotAndReveal(slot.id)}
              >
                <span className="rw-slot-row-label">
                  {slot.label}
                  {slot.currentBrand && <em>{slot.currentBrand.name}</em>}
                </span>
                <span className="rw-slot-row-bid">
                  {formatInr(slot.currentBid || slot.startingBid)}
                  <small>{slot.bidCount} bids</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
