"use client"

import { useEffect, useState } from "react"

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function CountdownTimer({ endsAt }: { endsAt: number }) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft(endsAt))
    const interval = setInterval(() => setTimeLeft(getTimeLeft(endsAt)), 1000)
    return () => clearInterval(interval)
  }, [endsAt])

  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return (
    <div className="rw-countdown" role="timer" aria-label="Auction time remaining">
      {[
        ["Days", display.days],
        ["Hrs", display.hours],
        ["Min", display.minutes],
        ["Sec", display.seconds],
      ].map(([label, value]) => (
        <div key={label as string} className="rw-countdown-unit">
          <span>{String(value).padStart(2, "0")}</span>
          <small>{label}</small>
        </div>
      ))}
    </div>
  )
}
