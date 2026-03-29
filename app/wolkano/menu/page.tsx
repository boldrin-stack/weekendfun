import type { Metadata } from "next"
import MenuPageContent from "@/components/wolkano/MenuPageContent"

export const metadata: Metadata = {
  title: "Menu — Wolkano Creamery | Ice Creams, Waffles, Patisseries & More",
  description:
    "Browse the full Wolkano Creamery menu. Ice cream sundaes, waffles, macarons, French pastries, cakes, ice cream cakes and thick shakes — all made with premium ingredients in Kochi.",
}

export default function MenuPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 0%, #FDE8F5 0%, transparent 55%), radial-gradient(ellipse at 70% 100%, #FFF3E0 0%, transparent 55%), linear-gradient(180deg, #FFF9F5 0%, #fff 100%)",
          }}
        />

        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-25 w-blob"
          style={{
            background: "radial-gradient(circle, #E91B8D 0%, #C87941 100%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-section-tag mx-auto mb-5">Full Menu</div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1E0A06] mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Scoop Into{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #E91B8D 0%, #C87941 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Happiness
            </span>
          </h1>
          <p
            className="text-[#1E0A06]/55 max-w-xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Explore our curated collection of artisanal desserts, crafted with premium ingredients and a sprinkle of joy.
          </p>

          {/* Category strip */}
          <div
            className="flex flex-wrap gap-2 justify-center mt-8"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            {["🍨 Ice Cream Sundaes", "🧇 Waffles", "🍫 Macarons & Chocolates", "🥐 Pastries", "🎂 Cakes", "🍰 Ice Cream Cakes", "🥤 Thick Shakes"].map((label) => (
              <span
                key={label}
                className="px-4 py-1.5 rounded-full border border-black/10 text-sm text-[#1E0A06]/65 bg-white font-medium"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive menu content */}
      <section className="pb-20" style={{ background: "#FFF9F5" }}>
        <MenuPageContent />
      </section>

      {/* Newsletter strip */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FDE8F5 0%, #FFF3E0 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <h2
            className="text-2xl sm:text-3xl font-black text-[#1E0A06]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sweet deals in your inbox?
          </h2>
          <p
            className="text-[#1E0A06]/55 text-sm sm:text-base"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Join our Sweet Society and get 15% off your first online order!
          </p>
          <div className="flex gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border-2 border-black/10 bg-white text-sm focus:outline-none focus:border-[#E91B8D] transition-colors text-[#1E0A06]"
              style={{ fontFamily: "var(--font-jakarta)" }}
            />
            <button
              className="w-btn-primary !py-3 !px-6 !text-sm shrink-0"
            >
              Sign Me Up
            </button>
          </div>
          <p
            className="text-[#1E0A06]/35 text-xs"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            No spam. Just sweets. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}
