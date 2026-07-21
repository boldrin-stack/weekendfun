import type { Listing } from "./types"

export const KOCHI_CENTER: [number, number] = [9.9994, 76.3223]

export const AREAS: { name: string; lat: number; lng: number }[] = [
  { name: "Kakkanad", lat: 10.0068, lng: 76.3488 },
  { name: "Kalamassery", lat: 10.054, lng: 76.3208 },
  { name: "Edappally", lat: 10.0263, lng: 76.3086 },
  { name: "Kaloor", lat: 9.9868, lng: 76.2999 },
  { name: "Vyttila", lat: 9.9679, lng: 76.3184 },
  { name: "Palarivattom", lat: 10.0022, lng: 76.3086 },
  { name: "Thrippunithura", lat: 9.9459, lng: 76.3487 },
  { name: "Vennala", lat: 10.0126, lng: 76.3013 },
  { name: "Thammanam", lat: 9.995, lng: 76.302 },
  { name: "Aluva", lat: 10.1081, lng: 76.3517 },
  { name: "Kundannoor", lat: 9.955, lng: 76.313 },
  { name: "Pathadipalam", lat: 10.021, lng: 76.32 },
  { name: "Kadavanthra", lat: 9.96, lng: 76.295 },
  { name: "Infopark", lat: 10.0134, lng: 76.3585 },
]

export function nearestArea(lat: number, lng: number): string {
  let best = AREAS[0]
  let bestDist = Infinity
  for (const candidate of AREAS) {
    const dist = (candidate.lat - lat) ** 2 + (candidate.lng - lng) ** 2
    if (dist < bestDist) {
      bestDist = dist
      best = candidate
    }
  }
  return best.name
}

export function formatPricePin(amount: number): string {
  if (amount >= 1000) {
    const k = amount / 1000
    return `₹${Number.isInteger(k) ? k : k.toFixed(1)}k`
  }
  return `₹${amount}`
}

export function formatPriceFull(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`
}

export const MOCK_LISTINGS: Listing[] = [
  {
    id: "l1",
    kind: "for-rent",
    title: "2BHK semi-furnished flat near Infopark",
    description:
      "Bright 2BHK, covered parking, 24x7 water, 5 min walk to Infopark Phase 1.",
    price: 15000,
    area: "Kakkanad",
    bhk: "2 BHK",
    propertyType: "Apartment",
    furnishing: "Semi-furnished",
    tenantPref: "Family",
    lat: 10.0072,
    lng: 76.3487,
    postedAt: "2026-07-15",
    phone: "+919846000001",
    verified: true,
    isNew: false,
  },
  {
    id: "l2",
    kind: "for-rent",
    title: "Single room for bachelors",
    description: "PG-style room, shared kitchen, walking distance to Edappally metro.",
    price: 7000,
    area: "Edappally",
    bhk: "1 BHK",
    propertyType: "Room",
    furnishing: "Furnished",
    tenantPref: "Bachelors",
    lat: 10.0263,
    lng: 76.3086,
    postedAt: "2026-07-18",
    phone: "+919846000002",
    verified: true,
    isNew: true,
  },
  {
    id: "l3",
    kind: "wanted",
    title: "Looking for a 1BHK near Kakkanad",
    description: "Working professional, need semi-furnished 1BHK near Infopark.",
    price: 12000,
    area: "Infopark",
    bhk: "1 BHK",
    propertyType: "Apartment",
    furnishing: "Semi-furnished",
    tenantPref: "Bachelors",
    lat: 10.0134,
    lng: 76.3585,
    postedAt: "2026-07-19",
    phone: "+919846000003",
    verified: false,
    isNew: true,
  },
  {
    id: "l4",
    kind: "for-rent",
    title: "Bed space in shared flat, HMT Road",
    description: "Single bed in a 3-bed shared flat, bachelors only, food not included.",
    price: 6000,
    area: "Kalamassery",
    bhk: "2 BHK",
    propertyType: "PG / Shared",
    furnishing: "Furnished",
    tenantPref: "Bachelors",
    lat: 10.054,
    lng: 76.3208,
    postedAt: "2026-07-11",
    phone: "+919846000004",
    verified: true,
    isNew: false,
  },
  {
    id: "l5",
    kind: "for-rent",
    title: "3BHK independent house",
    description: "Spacious house with a small garden, close to Thrikkakara junction.",
    price: 20000,
    area: "Kakkanad",
    bhk: "3 BHK",
    propertyType: "House",
    furnishing: "Unfurnished",
    tenantPref: "Family",
    lat: 10.0432,
    lng: 76.3374,
    postedAt: "2026-07-12",
    phone: "+919846000005",
    verified: false,
    isNew: false,
  },
  {
    id: "l6",
    kind: "wanted",
    title: "Family looking for 3BHK near Kaloor",
    description: "Relocating to Kochi, need an unfurnished or semi-furnished 3BHK.",
    price: 22000,
    area: "Kaloor",
    bhk: "3 BHK",
    propertyType: "Apartment",
    furnishing: "Unfurnished",
    tenantPref: "Family",
    lat: 9.9868,
    lng: 76.2999,
    postedAt: "2026-07-19",
    phone: "+919846000006",
    verified: false,
    isNew: true,
  },
  {
    id: "l7",
    kind: "for-rent",
    title: "PG for working women, food included",
    description: "Shared PG near Vyttila hub, 3 meals included, curfew 10pm.",
    price: 8000,
    area: "Vyttila",
    bhk: "1 BHK",
    propertyType: "PG / Shared",
    furnishing: "Furnished",
    tenantPref: "Bachelors",
    lat: 9.9679,
    lng: 76.3184,
    postedAt: "2026-07-14",
    phone: "+919846000007",
    verified: true,
    isNew: false,
  },
  {
    id: "l8",
    kind: "for-rent",
    title: "Villa with private garden",
    description: "4BHK villa in a gated community, close to Aluva metro.",
    price: 35000,
    area: "Aluva",
    bhk: "4+ BHK",
    propertyType: "Villa",
    furnishing: "Furnished",
    tenantPref: "Family",
    lat: 10.1081,
    lng: 76.3517,
    postedAt: "2026-07-08",
    phone: "+919846000008",
    verified: true,
    isNew: false,
  },
  {
    id: "l9",
    kind: "for-rent",
    title: "2BHK near Palarivattom flyover",
    description: "Well connected, close to NH66, semi-furnished, no brokerage.",
    price: 17000,
    area: "Palarivattom",
    bhk: "2 BHK",
    propertyType: "Apartment",
    furnishing: "Semi-furnished",
    tenantPref: "Any",
    lat: 10.0022,
    lng: 76.3086,
    postedAt: "2026-07-11",
    phone: "+919846000009",
    verified: false,
    isNew: false,
  },
]
