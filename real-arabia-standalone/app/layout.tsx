import type { Metadata } from "next"
import "./globals.css"
import CursorGlow from "@/components/CursorGlow"
import ScrollProgress from "@/components/ScrollProgress"

export const metadata: Metadata = {
  title: "Real Arabia — Authentic Arabic Grills in Kochi, Kerala",
  description:
    "Real Arabia brings the finest Arabic grills, shawarma, and al-faham to Kochi. Where Arabian nights meet Kerala's coastal soul.",
  openGraph: {
    title: "Real Arabia",
    description: "Authentic Arabic grills, shawarma & al-faham in Kochi, Kerala.",
    siteName: "Real Arabia",
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="ra-root antialiased">
        <ScrollProgress />
        <CursorGlow />
        <main>{children}</main>
      </body>
    </html>
  )
}
