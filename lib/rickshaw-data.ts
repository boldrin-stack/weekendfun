export interface SlotRect {
  x: number
  y: number
  width: number
  height: number
}

export interface RickshawSlot {
  id: string
  label: string
  dimensions: string
  startingBid: number
  currentBid: number
  minIncrement: number
  deposit: number
  bidCount: number
  currentBrand: { name: string; logoUrl?: string } | null
}

export interface ViewPlacement {
  slotId: string
  rect: SlotRect
}

export interface RickshawView {
  id: string
  label: string
  image: string
  alt: string
  placements: ViewPlacement[]
}

export const RICKSHAW_SLOTS: RickshawSlot[] = [
  {
    id: "front-roof-strip",
    label: "Front Roof Strip",
    dimensions: "62in × 14in",
    startingBid: 8000,
    currentBid: 12500,
    minIncrement: 500,
    deposit: 2000,
    bidCount: 6,
    currentBrand: { name: "Kettlebrew Coffee" },
  },
  {
    id: "front-lower-panel",
    label: "Front Grille Panel",
    dimensions: "24in × 15in",
    startingBid: 5000,
    currentBid: 5000,
    minIncrement: 250,
    deposit: 1000,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "rear-roof-strip",
    label: "Rear Roof Strip",
    dimensions: "56in × 12in",
    startingBid: 7000,
    currentBid: 9500,
    minIncrement: 500,
    deposit: 1500,
    bidCount: 4,
    currentBrand: null,
  },
  {
    id: "rear-window-panel",
    label: "Rear Window Panel",
    dimensions: "48in × 36in",
    startingBid: 15000,
    currentBid: 23000,
    minIncrement: 1000,
    deposit: 4000,
    bidCount: 11,
    currentBrand: { name: "Zo House" },
  },
  {
    id: "rear-bumper-panel",
    label: "Rear Bumper Panel",
    dimensions: "22in × 14in",
    startingBid: 4000,
    currentBid: 4000,
    minIncrement: 250,
    deposit: 800,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "right-roof-upper",
    label: "Right Roof Panel — Upper",
    dimensions: "44in × 22in",
    startingBid: 9000,
    currentBid: 14000,
    minIncrement: 500,
    deposit: 2000,
    bidCount: 7,
    currentBrand: null,
  },
  {
    id: "right-roof-lower",
    label: "Right Roof Panel — Lower",
    dimensions: "44in × 22in",
    startingBid: 9000,
    currentBid: 9000,
    minIncrement: 500,
    deposit: 2000,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "right-door-panel",
    label: "Right Door Panel",
    dimensions: "26in × 22in",
    startingBid: 6000,
    currentBid: 8500,
    minIncrement: 500,
    deposit: 1500,
    bidCount: 5,
    currentBrand: null,
  },
  {
    id: "right-rear-upper",
    label: "Right Rear Panel — Upper",
    dimensions: "24in × 11in",
    startingBid: 3500,
    currentBid: 3500,
    minIncrement: 250,
    deposit: 700,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "right-rear-lower",
    label: "Right Rear Panel — Lower",
    dimensions: "24in × 12in",
    startingBid: 3500,
    currentBid: 3500,
    minIncrement: 250,
    deposit: 700,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "left-roof-upper",
    label: "Left Roof Panel — Upper",
    dimensions: "44in × 22in",
    startingBid: 9000,
    currentBid: 9000,
    minIncrement: 500,
    deposit: 2000,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "left-roof-lower",
    label: "Left Roof Panel — Lower",
    dimensions: "44in × 22in",
    startingBid: 9000,
    currentBid: 11000,
    minIncrement: 500,
    deposit: 2000,
    bidCount: 3,
    currentBrand: null,
  },
  {
    id: "left-door-panel",
    label: "Left Door Panel",
    dimensions: "26in × 22in",
    startingBid: 6000,
    currentBid: 6000,
    minIncrement: 500,
    deposit: 1500,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "left-rear-upper",
    label: "Left Rear Panel — Upper",
    dimensions: "24in × 11in",
    startingBid: 3500,
    currentBid: 3500,
    minIncrement: 250,
    deposit: 700,
    bidCount: 0,
    currentBrand: null,
  },
  {
    id: "left-rear-lower",
    label: "Left Rear Panel — Lower",
    dimensions: "24in × 12in",
    startingBid: 3500,
    currentBid: 4200,
    minIncrement: 250,
    deposit: 700,
    bidCount: 2,
    currentBrand: null,
  },
]

export const RICKSHAW_VIEWS: RickshawView[] = [
  {
    id: "front",
    label: "Front",
    image: "/rickshaw/front.webp",
    alt: "Front view of the branded rickshaw",
    placements: [
      { slotId: "front-roof-strip", rect: { x: 38.5, y: 6.7, width: 22.9, height: 5.6 } },
      { slotId: "front-lower-panel", rect: { x: 44.3, y: 56.2, width: 10.4, height: 8.4 } },
    ],
  },
  {
    id: "right",
    label: "Right",
    image: "/rickshaw/right.webp",
    alt: "Right side view of the branded rickshaw",
    placements: [
      { slotId: "right-roof-upper", rect: { x: 57.3, y: 18.5, width: 23.4, height: 14.7 } },
      { slotId: "right-roof-lower", rect: { x: 57.1, y: 35.7, width: 25.2, height: 14.8 } },
      { slotId: "right-door-panel", rect: { x: 41.8, y: 58.6, width: 10.0, height: 15.8 } },
      { slotId: "right-rear-upper", rect: { x: 70.8, y: 54.6, width: 13.1, height: 6.3 } },
      { slotId: "right-rear-lower", rect: { x: 70.3, y: 64.0, width: 14.5, height: 7.6 } },
    ],
  },
  {
    id: "rear",
    label: "Rear",
    image: "/rickshaw/rear.webp",
    alt: "Rear view of the branded rickshaw",
    placements: [
      { slotId: "rear-roof-strip", rect: { x: 38.9, y: 11.0, width: 22.8, height: 5.7 } },
      { slotId: "rear-window-panel", rect: { x: 37.6, y: 19.9, width: 24.8, height: 26.3 } },
      { slotId: "rear-bumper-panel", rect: { x: 45.5, y: 56.7, width: 9.2, height: 10.5 } },
    ],
  },
  {
    id: "left",
    label: "Left",
    image: "/rickshaw/left.webp",
    alt: "Left side view of the branded rickshaw",
    placements: [
      { slotId: "left-roof-upper", rect: { x: 59.9, y: 21.5, width: 19.2, height: 13.7 } },
      { slotId: "left-roof-lower", rect: { x: 59.9, y: 37.6, width: 21.7, height: 13.6 } },
      { slotId: "left-door-panel", rect: { x: 44.3, y: 58.4, width: 9.5, height: 14.8 } },
      { slotId: "left-rear-upper", rect: { x: 71.6, y: 54.5, width: 11.0, height: 6.0 } },
      { slotId: "left-rear-lower", rect: { x: 71.1, y: 63.6, width: 12.4, height: 7.3 } },
    ],
  },
]

export function getSlot(slotId: string): RickshawSlot | undefined {
  return RICKSHAW_SLOTS.find((slot) => slot.id === slotId)
}

export function firstViewIndexForSlot(slotId: string): number {
  const index = RICKSHAW_VIEWS.findIndex((view) =>
    view.placements.some((placement) => placement.slotId === slotId),
  )
  return index === -1 ? 0 : index
}

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}
