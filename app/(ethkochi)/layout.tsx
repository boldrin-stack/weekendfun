import type { Metadata } from "next"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import ElephantCursor from "@/components/ElephantCursor"

export const metadata: Metadata = {
  title: "ETH Kochi 2026 — Where the backwaters meet the blockchain.",
  description:
    "South India's first Ethereum conference & hackathon. August 2026, KSUM, Kochi, Kerala. Organised by Web3 Kerala Community.",
  openGraph: {
    title: "ETH Kochi 2026",
    description: "South India's first Ethereum conference & hackathon. August 2026, Kochi, Kerala.",
    url: "https://ethkochi.in",
    siteName: "ETH Kochi 2026",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETH Kochi 2026",
    description: "South India's first Ethereum conference & hackathon. August 2026, Kochi, Kerala.",
    creator: "@web3_kerala",
  },
  metadataBase: new URL("https://ethkochi.in"),
}

export default function ETHKochiLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ElephantCursor />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
