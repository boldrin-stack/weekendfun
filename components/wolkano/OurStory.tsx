const collageItems = [
  { emoji: "🧇", label: "Artisan Waffles", bg: "from-[#C87941] to-[#7D3E10]" },
  { emoji: "🥐", label: "French Patisseries", bg: "from-[#F7C162] to-[#C87941]" },
  { emoji: "🍦", label: "Premium Ice Cream", bg: "from-[#E91B8D] to-[#8E0F52]" },
  { emoji: "🎂", label: "Designer Cakes", bg: "from-[#00B8A0] to-[#007A6C]" },
  { emoji: "🥜", label: "Pista Kunafa", bg: "from-[#7D5A1E] to-[#4A3210]" },
  { emoji: "🍨", label: "Sundae Towers", bg: "from-[#9B59B6] to-[#6C3483]" },
]

const milestones = [
  { year: "2021", text: "Born in Kochi with one small outlet and a big dream." },
  { year: "2022", text: "Launched French patisserie range — Kochi's first." },
  { year: "2023", text: "Expanded to 3 outlets across the city." },
  { year: "2024+", text: "Pioneering fusion desserts like Pista Kunafa Waffles & Ice Cream Koshari." },
]

export default function OurStory() {
  return (
    <section id="story" className="py-20 md:py-28" style={{ background: "#1E0A06" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-7">
            <div>
              <div
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(233,27,141,0.15)",
                  color: "#E91B8D",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-jakarta)",
                }}
              >
                Our Story
              </div>
              <h2
                className="text-3xl sm:text-4xl xl:text-5xl font-black leading-tight text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                3 years strong.{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(135deg, #E91B8D 0%, #C87941 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Forever sweet.
                </span>
              </h2>
            </div>

            <p
              className="text-white/60 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Born in Kochi in 2021, Wolkano Creamery started with a simple belief: that premium desserts shouldn&apos;t
              be reserved for five-star hotels. We brought French patisserie craftsmanship to the streets of Kochi —
              paired with the warmth and energy of a late-night dessert bar.
            </p>

            <p
              className="text-white/60 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our menu is a constant experiment. From Pista Kunafa Waffles to Ice Cream Koshari to Caramel Popcorn
              Sundaes — we never stop pushing the boundaries of what a dessert can be. Each creation is tested,
              tasted, and refined until it earns its place on the menu.
            </p>

            {/* Milestones */}
            <div className="flex flex-col gap-4">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="shrink-0 w-14 text-xs font-black text-[#E91B8D] pt-0.5"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {m.year}
                  </div>
                  <div className="flex-1">
                    <div className="w-full h-px bg-white/10 mb-2 mt-2.5" />
                    <p
                      className="text-sm text-white/55 leading-relaxed"
                      style={{ fontFamily: "var(--font-jakarta)" }}
                    >
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "3", label: "Outlets", suffix: "+" },
                { value: "50", label: "Menu Items", suffix: "+" },
                { value: "5K", label: "Happy Customers", suffix: "+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/8">
                  <p
                    className="text-2xl font-black text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {stat.value}
                    <span className="text-[#E91B8D]">{stat.suffix}</span>
                  </p>
                  <p
                    className="text-xs text-white/40 mt-1"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo collage */}
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            {collageItems.map((item, i) => (
              <div
                key={item.label}
                className={`relative bg-gradient-to-br ${item.bg} rounded-2xl flex flex-col items-center justify-center overflow-hidden group cursor-pointer ${i === 0 ? "row-span-2 aspect-auto" : "aspect-square"}`}
                style={{ minHeight: i === 0 ? "100%" : undefined }}
              >
                <span
                  className={`${i === 0 ? "text-7xl" : "text-4xl"} w-float group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.25))",
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  {item.emoji}
                </span>
                <p
                  className={`text-white font-bold ${i === 0 ? "text-sm mt-3" : "text-xs mt-2"} text-center px-2`}
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.label}
                </p>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
