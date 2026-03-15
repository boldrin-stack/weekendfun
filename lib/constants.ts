// ETH Kochi 2026 — Constants & Copy
// Update this file to change event data without touching components

export const EVENT_NAME = "ETH Kochi"
export const TAGLINE = "Where the backwaters meet the blockchain."
export const DATE = "August 2026"
export const DATE_DISPLAY = "August 2026 (dates TBC)"
export const VENUE = "KSUM, Kochi, Kerala"
export const EMAIL = "web3kerala@gmail.com"
export const TWITTER = "@web3_kerala"
export const TWITTER_URL = "https://twitter.com/web3_kerala"
export const DOMAIN = "ethkochi.in"
export const ORGANISER = "Web3 Kerala Community"

// TODO: Replace with actual Tally form ID when available
export const TALLY_FORM_ID = "TALLY_FORM_ID"
export const TALLY_FORM_URL = `https://tally.so/r/${TALLY_FORM_ID}`

// TODO: Replace with actual Devfolio event URL
export const DEVFOLIO_URL = "https://devfolio.co"

// Colors
export const COLORS = {
  primary: "#1D9E75",
  secondary: "#7F77DD",
  accent: "#BA7517",
  background: "#F6F5F1",
  text: "#1A1A18",
}

// Stats for About section
export const STATS = [
  { number: "500+", label: "Attendees" },
  { number: "2", label: "Days" },
  { number: "4", label: "Tracks" },
  { number: "200", label: "Hackers" },
]

// Conference tracks
export const TRACKS = [
  {
    id: "01",
    title: "AI × Crypto",
    description: "Agents, zkML, on-chain AI, decentralised compute",
    color: "#1D9E75",
  },
  {
    id: "02",
    title: "DeFi & Web3 Finance",
    description: "Lending, DEXes, RWA, payments infrastructure",
    color: "#7F77DD",
  },
  {
    id: "03",
    title: "Public Goods & Impact",
    description: "Gitcoin, Hypercerts, local governance, climate",
    color: "#BA7517",
  },
  {
    id: "04",
    title: "Gaming & NFTs",
    description: "Fully on-chain games, digital ownership, creator economy",
    color: "#1D9E75",
  },
]

// Hackathon sprint themes
export const SPRINT_THEMES = [
  {
    number: "01",
    title: "AI Agents that interact with smart contracts",
  },
  {
    number: "02",
    title: "LLM-powered DeFi tools & dashboards",
  },
  {
    number: "03",
    title: "On-chain identity + AI personalisation",
  },
  {
    number: "04",
    title: "AI for public goods — funding & governance",
  },
  {
    number: "05",
    title: "Gaming NPCs + on-chain AI mechanics",
  },
  {
    number: "06",
    title: "Open build — pre-hackathon warm-up",
  },
]

// Ticket tiers
export const CONFERENCE_TICKETS = [
  {
    id: "early-bird",
    name: "Early Bird",
    price: "₹199",
    description: "First 100 registrants. All access + swag bag.",
    badge: "Limited — 100 spots",
    isFeatured: false,
    type: "conference" as const,
  },
  {
    id: "general",
    name: "General",
    price: "₹499",
    description: "All access + swag bag.",
    badge: null,
    isFeatured: false,
    type: "conference" as const,
  },
  {
    id: "student",
    name: "Student",
    price: "₹99",
    description: "Valid college ID required.",
    badge: null,
    isFeatured: false,
    type: "conference" as const,
  },
]

export const HACKATHON_TICKETS = [
  {
    id: "solo-hacker",
    name: "Solo Hacker",
    price: "₹149",
    description: "Individual registration for the hackathon.",
    badge: null,
    isFeatured: false,
    type: "hackathon" as const,
  },
  {
    id: "team",
    name: "Team (up to 4)",
    price: "₹399",
    description: "Register your full team.",
    badge: null,
    isFeatured: false,
    type: "hackathon" as const,
  },
  {
    id: "student-team",
    name: "Student Team",
    price: "₹199",
    description: "Team registration with valid student IDs.",
    badge: null,
    isFeatured: false,
    type: "hackathon" as const,
  },
]

export const BUILDER_PASS = {
  id: "builder-pass",
  name: "Builder Pass",
  price: "₹299",
  description: "Conference Day 1 + Hackathon Day 2. Best value.",
  badge: "Best Value",
  isFeatured: true,
  type: "combo" as const,
}

// Community partners
export const PARTNERS = [
  { name: "AthenaFoss", url: "#" },
  { name: "Web3 Chennai", url: "#" },
  { name: "Devfolio", url: "https://devfolio.co" },
  { name: "KSUM", url: "https://startupmission.kerala.gov.in" },
  { name: "Tinker Space", url: "https://tinkerspace.in" },
]

// Sponsor tiers for /sponsors page
export const SPONSOR_TIERS = [
  {
    name: "Title Sponsor",
    price: "₹5,00,000",
    perks: [
      "Exclusive naming rights",
      "Keynote slot (30 min)",
      "Prime booth space",
      "Logo on all materials",
      "5 free passes",
      "Social media spotlight",
      "Hackathon track naming",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "₹2,00,000",
    perks: [
      "Premium booth space",
      "Talk slot (20 min)",
      "Logo on all materials",
      "3 free passes",
      "Social media mention",
      "Hackathon bounty track",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "₹75,000",
    perks: [
      "Booth space",
      "Logo on website",
      "2 free passes",
      "Social media mention",
    ],
  },
  {
    name: "Community Sponsor",
    price: "₹25,000",
    perks: [
      "Logo on website",
      "1 free pass",
      "Social media shoutout",
    ],
  },
]

// Hero meta pills
export const HERO_PILLS = [
  { emoji: "📍", label: "KSUM, Kochi" },
  { emoji: "🎤", label: "300+ at conference" },
  { emoji: "⚡", label: "200 hackers" },
]
