import type { Metadata } from "next"
import "@/app/globals.css"
import "./brand-my-rickshaw.css"

export const metadata: Metadata = {
  title: "Brand My Rickshaw: Bid on Ad Space on India's Streets",
  description:
    "One rickshaw, real streets, live bidding. Bid on ad slots across a branded autorickshaw and put your logo where the traffic already is.",
}

export default function BrandMyRickshawLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bmr-root">
      <main>{children}</main>
    </div>
  )
}
