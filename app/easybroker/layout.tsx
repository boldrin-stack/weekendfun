import type { Metadata } from "next"
import "@/app/globals.css"
import "./easybroker.css"

export const metadata: Metadata = {
  title: "EasyBroker — Rentals in Kochi, on a Map",
  description:
    "Browse bachelor-friendly rooms, flats and houses for rent in Kochi on an interactive map. List your property in a minute.",
}

export default function EasyBrokerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="eb-root">{children}</div>
}
