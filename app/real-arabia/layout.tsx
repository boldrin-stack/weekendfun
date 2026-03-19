import type { Metadata } from "next"
import "@/app/globals.css"
import "./real-arabia.css"

export const metadata: Metadata = {
  title: "Real Arabia — Authentic Arabic Grills in Kochi, Kerala",
  description:
    "Real Arabia brings the finest Arabic grills, shawarma, and al-faham to Kochi. Where Arabian nights meet Kerala's coastal soul.",
}

export default function RealArabiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="ra-root">
      <main>{children}</main>
    </div>
  )
}
