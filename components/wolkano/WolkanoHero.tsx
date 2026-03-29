import Link from "next/link"

const heroImages = [
  {
    label: "Waffles",
    emoji: "🧇",
    grad: "from-[#C87941] via-[#A85E2A] to-[#7D3E10]",
    tag: "Bestseller",
  },
  {
    label: "Ice Cream",
    emoji: "🍦",
    grad: "from-[#E91B8D] via-[#C0166F] to-[#8E0F52]",
    tag: "Premium",
  },
  {
    label: "Patisserie",
    emoji: "🥐",
    grad: "from-[#F7C162] via-[#E8A832] to-[#C87941]",
    tag: "French",
  },
  {
    label: "Sundaes",
    emoji: "🍨",
    grad: "from-[#00B8A0] via-[#009E8A] to-[#007A6C]",
    tag: "Seasonal",
  },
]

export default function WolkanoHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, #FDE8F5 0%, transparent 55%), radial-gradient(ellipse at 100% 0%, #FFF3E0 0%, transparent 55%), linear-gradient(135deg, #FFF9F5 0%, #FFFBF8 50%, #FFF0F8 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 w-blob"
        style={{
          background: "radial-gradient(circle, #E91B8D 0%, #C87941 100%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-15 w-blob"
        style={{
          background: "radial-gradient(circle, #00B8A0 0%, #E91B8D 100%)",
          filter: "blur(50px)",
          animationDelay: "3s",
        }}
      />

      {/* Floating sprinkle dots */}
      {[
        { top: "15%", left: "8%", color: "#E91B8D", size: 10, delay: 0 },
        { top: "25%", left: "15%", color: "#C87941", size: 6, delay: 1 },
        { top: "70%", left: "5%", color: "#00B8A0", size: 8, delay: 2 },
        { top: "60%", right: "8%", color: "#E91B8D", size: 7, delay: 0.5 },
        { top: "10%", right: "20%", color: "#C87941", size: 5, delay: 1.5 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full w-float hidden md:block"
          style={{
            top: dot.top,
            left: "left" in dot ? dot.left : undefined,
            right: "right" in dot ? dot.right : undefined,
            width: dot.size,
            height: dot.size,
            background: dot.color,
            opacity: 0.6,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Badge */}
            <div className="w-section-tag self-start">🌋 New in Kochi</div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] text-[#1E0A06]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Smiles, sugar,{" "}
              <span
                className="italic"
                style={{
                  background: "linear-gradient(135deg, #E91B8D 0%, #C87941 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                and zero
              </span>{" "}
              regrets.
            </h1>

            {/* Subtext */}
            <p
              className="text-base sm:text-lg text-[#1E0A06]/60 leading-relaxed max-w-md"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Premium ice creams, waffles, French patisseries and more in Kochi.
              Open till 1 am — because dessert has no curfew.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Link href="/wolkano/menu" className="w-btn-primary">
                🍦 View Menu
              </Link>
              <a href="#" className="w-btn-outline">
                Order Online
              </a>
            </div>

            {/* Social proof strip */}
            <div
              className="flex items-center gap-5 pt-2"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              <div className="flex -space-x-2">
                {["#E91B8D", "#C87941", "#00B8A0", "#7B3F00"].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-bold"
                    style={{ background: c, zIndex: 4 - i }}
                  >
                    {["A", "R", "S", "M"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-3.5 h-3.5 w-star" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#1E0A06]/50 mt-0.5">Loved by 5,000+ dessert fans in Kochi</p>
              </div>
            </div>
          </div>

          {/* Right: 2×2 image grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroImages.map((item) => (
              <div
                key={item.label}
                className={`relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br ${item.grad} flex flex-col items-center justify-center shadow-lg group cursor-pointer`}
              >
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
                {/* Emoji */}
                <span
                  className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-300 w-float"
                  style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))" }}
                >
                  {item.emoji}
                </span>
                {/* Label */}
                <p className="mt-3 text-white font-bold text-sm sm:text-base" style={{ fontFamily: "var(--font-jakarta)" }}>
                  {item.label}
                </p>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFF9F5] to-transparent pointer-events-none" />
    </section>
  )
}
