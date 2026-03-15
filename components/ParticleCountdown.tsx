"use client"

import { useEffect, useRef, useCallback } from "react"

// August 1 2026 9am IST
const EVENT_DATE = new Date("2026-08-01T09:00:00+05:30")

function getTimeLeft() {
  const ms = Math.max(0, EVENT_DATE.getTime() - Date.now())
  return {
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms % 86400000) / 3600000),
    m: Math.floor((ms % 3600000) / 60000),
    s: Math.floor((ms % 60000) / 1000),
  }
}
const p2 = (n: number) => String(n).padStart(2, "0")

interface Particle {
  x: number; y: number
  tx: number; ty: number
  vx: number; vy: number
  r: number; g: number; b: number
}

function sampleText(W: number, H: number): Particle[] {
  const off = document.createElement("canvas")
  off.width = W; off.height = H
  const ctx = off.getContext("2d")!
  ctx.clearRect(0, 0, W, H)

  const t = getTimeLeft()
  const parts: Array<{ text: string; rgb: [number, number, number] }> = [
    { text: p2(t.d), rgb: [246, 245, 241] },
    { text: "d ", rgb: [29, 158, 117] },
    { text: p2(t.h), rgb: [246, 245, 241] },
    { text: "h ", rgb: [29, 158, 117] },
    { text: p2(t.m), rgb: [246, 245, 241] },
    { text: "m ", rgb: [29, 158, 117] },
    { text: p2(t.s), rgb: [127, 119, 221] },
    { text: "s", rgb: [127, 119, 221] },
  ]

  const fs = Math.min(Math.floor(H * 0.5), 68)
  ctx.font = `900 ${fs}px 'Arial Black', Arial, sans-serif`
  ctx.textBaseline = "middle"

  const widths = parts.map(p => ctx.measureText(p.text).width)
  const total = widths.reduce((a, b) => a + b, 0)
  let x = (W - total) / 2

  parts.forEach((p, i) => {
    ctx.fillStyle = `rgb(${p.rgb[0]},${p.rgb[1]},${p.rgb[2]})`
    ctx.fillText(p.text, x, H / 2)
    x += widths[i]
  })

  const { data } = ctx.getImageData(0, 0, W, H)
  const result: Particle[] = []
  const step = 4

  for (let py = 0; py < H; py += step) {
    for (let px = 0; px < W; px += step) {
      const i = (py * W + px) * 4
      if (data[i + 3] > 100) {
        result.push({
          x: px, y: py,
          tx: px, ty: py,
          vx: 0, vy: 0,
          r: data[i], g: data[i + 1], b: data[i + 2],
        })
      }
    }
  }
  return result
}

export default function ParticleCountdown() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -9999, y: -9999 })
  const raf = useRef(0)
  const lastSec = useRef(-1)
  const dims = useRef({ W: 0, H: 0 })

  const rebuild = useCallback((W: number, H: number) => {
    const newPts = sampleText(W, H)
    const old = particles.current
    particles.current = newPts.map((np, i) => {
      const op = old[i]
      if (op) {
        op.tx = np.tx; op.ty = np.ty
        op.r = np.r; op.g = np.g; op.b = np.b
        return op
      }
      // New particle enters from a random edge
      const side = Math.floor(Math.random() * 4)
      return {
        ...np,
        x: side === 0 ? Math.random() * W : side === 1 ? W : side === 2 ? Math.random() * W : 0,
        y: side === 0 ? 0 : side === 1 ? Math.random() * H : side === 2 ? H : Math.random() * H,
      }
    })
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      dims.current = { W, H }
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      rebuild(W, H)
    }

    const ro = new ResizeObserver(setup)
    ro.observe(canvas)
    setup()

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 } }
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseleave", onLeave)

    const interval = setInterval(() => {
      const s = getTimeLeft().s
      if (s !== lastSec.current) {
        lastSec.current = s
        rebuild(dims.current.W, dims.current.H)
      }
    }, 220)

    const draw = () => {
      const { W, H } = dims.current
      ctx.clearRect(0, 0, W, H)
      const { x: mx, y: my } = mouse.current
      const R = 80, SPRING = 0.075, DAMP = 0.80

      for (const p of particles.current) {
        const dx = p.x - mx
        const dy = p.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < R * R && d2 > 0) {
          const d = Math.sqrt(d2)
          const f = ((R - d) / R) * 9
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
        }
        p.vx += (p.tx - p.x) * SPRING
        p.vy += (p.ty - p.y) * SPRING
        p.vx *= DAMP
        p.vy *= DAMP
        p.x += p.vx
        p.y += p.vy

        ctx.globalAlpha = 0.92
        ctx.fillStyle = `rgb(${p.r},${p.g},${p.b})`
        ctx.fillRect(p.x - 1.5, p.y - 1.5, 3, 3)
      }
      ctx.globalAlpha = 1
      raf.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      ro.disconnect()
      clearInterval(interval)
      cancelAnimationFrame(raf.current)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseleave", onLeave)
    }
  }, [rebuild])

  return (
    <div className="w-full">
      <p className="text-center text-xs tracking-widest uppercase mb-3"
        style={{ fontFamily: "var(--font-dm-mono)", color: "rgba(246,245,241,0.3)" }}>
        until eth kochi
      </p>
      <canvas
        ref={canvasRef}
        className="w-full cursor-crosshair"
        style={{ height: "110px", display: "block" }}
        title="Hover to scatter the particles"
      />
    </div>
  )
}
