"use client"

import { useEffect, useRef } from "react"

interface Spark {
  x: number; y: number
  vx: number; vy: number
  life: number; decay: number
  r: number; g: number; b: number
  size: number
}

// Kerala palette: teal, gold, purple, white, orange
const PALETTE: [number, number, number][] = [
  [29, 158, 117],
  [246, 214, 112],
  [127, 119, 221],
  [246, 245, 241],
  [255, 140, 50],
  [29, 200, 140],
]

function burst(x: number, y: number, count = 90): Spark[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5
    const speed = 1.5 + Math.random() * 7
    const [r, g, b] = PALETTE[Math.floor(Math.random() * PALETTE.length)]
    return {
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.5,
      life: 1,
      decay: 0.008 + Math.random() * 0.008,
      r, g, b,
      size: 1.5 + Math.random() * 3,
    }
  })
}

// Web Audio chenda drum hit
function playChendaBeat() {
  try {
    const ac = new AudioContext()
    const now = ac.currentTime

    // Body thud
    const osc = ac.createOscillator()
    const gBody = ac.createGain()
    osc.type = "sine"
    osc.frequency.setValueAtTime(180, now)
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.1)
    gBody.gain.setValueAtTime(1.4, now)
    gBody.gain.exponentialRampToValueAtTime(0.001, now + 0.35)
    osc.connect(gBody); gBody.connect(ac.destination)
    osc.start(now); osc.stop(now + 0.35)

    // Sharp crack (noise transient)
    const bufLen = Math.floor(ac.sampleRate * 0.08)
    const buf = ac.createBuffer(1, bufLen, ac.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < bufLen; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufLen * 0.06))
    }
    const noise = ac.createBufferSource()
    noise.buffer = buf
    const gNoise = ac.createGain()
    gNoise.gain.setValueAtTime(1.0, now)
    gNoise.gain.exponentialRampToValueAtTime(0.001, now + 0.07)
    noise.connect(gNoise); gNoise.connect(ac.destination)
    noise.start(now)

    // Mid clang
    const osc2 = ac.createOscillator()
    const g2 = ac.createGain()
    osc2.type = "square"
    osc2.frequency.value = 380
    g2.gain.setValueAtTime(0.25, now)
    g2.gain.exponentialRampToValueAtTime(0.001, now + 0.1)
    osc2.connect(g2); g2.connect(ac.destination)
    osc2.start(now); osc2.stop(now + 0.1)
  } catch {
    // AudioContext unavailable
  }
}

interface FireworksProps {
  active: boolean
  onDone: () => void
}

export default function Fireworks({ active, onDone }: FireworksProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparks = useRef<Spark[]>([])
  const raf = useRef(0)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    const ctx = canvas.getContext("2d")!
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const W = window.innerWidth
    const H = window.innerHeight

    // Schedule multiple bursts across the screen
    const launchPoints = [
      { x: W * 0.20, y: H * 0.35 },
      { x: W * 0.50, y: H * 0.20 },
      { x: W * 0.80, y: H * 0.30 },
      { x: W * 0.35, y: H * 0.50 },
      { x: W * 0.65, y: H * 0.45 },
      { x: W * 0.50, y: H * 0.60 },
    ]

    launchPoints.forEach(({ x, y }, i) => {
      setTimeout(() => {
        sparks.current.push(...burst(x, y))
        playChendaBeat()
      }, i * 200)
    })

    const startedAt = Date.now()

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const alive = sparks.current.filter(s => s.life > 0)

      for (const s of alive) {
        s.vy += 0.1   // gravity
        s.vx *= 0.98
        s.vy *= 0.98
        s.x += s.vx
        s.y += s.vy
        s.life -= s.decay

        const alpha = Math.max(0, s.life)
        ctx.globalAlpha = alpha
        ctx.fillStyle = `rgb(${s.r},${s.g},${s.b})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size * alpha, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      sparks.current = alive

      if (Date.now() - startedAt < 4500) {
        raf.current = requestAnimationFrame(draw)
      } else {
        sparks.current = []
        onDone()
      }
    }

    draw()
    return () => cancelAnimationFrame(raf.current)
  }, [active, onDone])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 99998, width: "100vw", height: "100vh" }}
    />
  )
}
