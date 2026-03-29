import type { Metadata } from "next"
import WolkanoNav from "@/components/wolkano/WolkanoNav"
import WolkanoFooter from "@/components/wolkano/WolkanoFooter"
import MobileOrderButton from "@/components/wolkano/MobileOrderButton"

export const metadata: Metadata = {
  title: "Wolkano Creamery — Premium Ice Creams & Desserts in Kochi",
  description:
    "Smiles, sugar, and zero regrets. Premium ice creams, waffles, French patisseries and more in Kochi. Open 12 PM – 1 AM at Vyttila, Willingdon Island & Fort Kochi.",
  openGraph: {
    title: "Wolkano Creamery",
    description: "Premium ice creams, waffles, French patisseries and more in Kochi. Open till 1 AM.",
    siteName: "Wolkano Creamery",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wolkano Creamery",
    description: "Premium ice creams, waffles, French patisseries and more in Kochi. Open till 1 AM.",
    creator: "@wolkanocreamery",
  },
}

export default function WolkanoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="wolkano">
      <WolkanoNav />
      <main>{children}</main>
      <WolkanoFooter />
      <MobileOrderButton />
    </div>
  )
}
