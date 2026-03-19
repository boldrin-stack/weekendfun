import Link from "next/link"

const signatures = [
  {
    emoji: "🧇",
    name: "Chocolate Wolkano Waffle Combo",
    description: "Rich Belgian chocolate waffle with 2 scoops of premium ice cream and hot fudge sauce.",
    price: "₹349",
    tag: "Bestseller",
    tagColor: "bg-[#E91B8D] text-white",
    grad: "from-[#3D1E0C] to-[#7D3E10]",
    badge: "🔥",
  },
  {
    emoji: "🍫",
    name: "Crazy Nutella Waffle Combo",
    description: "Crispy golden waffle smothered in Nutella, sliced bananas and fresh cream swirls.",
    price: "₹329",
    tag: "Fan Fav",
    tagColor: "bg-[#C87941] text-white",
    grad: "from-[#C87941] to-[#A85E2A]",
    badge: "❤️",
  },
  {
    emoji: "🥜",
    name: "Pista Kunafa Chocolate Waffle",
    description: "A Wolkano original — crispy kunafa-style waffle topped with pistachio cream and dark chocolate.",
    price: "₹379",
    tag: "Original",
    tagColor: "bg-[#00B8A0] text-white",
    grad: "from-[#00B8A0] to-[#007A6C]",
    badge: "⭐",
  },
  {
    emoji: "🍨",
    name: "Ice Cream Sundaes",
    description: "Towering sundaes with house-made sauces, crushed cookies, and whipped cream clouds.",
    price: "₹249",
    tag: "Seasonal",
    tagColor: "bg-[#E91B8D] text-white",
    grad: "from-[#E91B8D] to-[#8E0F52]",
    badge: "🌟",
  },
  {
    emoji: "🎂",
    name: "Designer Cakes",
    description: "Custom celebration cakes crafted by our French-trained pastry team. Order 48 hrs in advance.",
    price: "From ₹799",
    tag: "Pre-order",
    tagColor: "bg-[#C87941] text-white",
    grad: "from-[#F7C162] to-[#C87941]",
    badge: "🎉",
  },
  {
    emoji: "🥐",
    name: "French Patisseries",
    description: "Handcrafted croissants, éclairs, macarons and tarts — Kochi's finest French corner.",
    price: "₹149+",
    tag: "Daily Fresh",
    tagColor: "bg-[#00B8A0] text-white",
    grad: "from-[#F7C162] via-[#E8A832] to-[#C87941]",
    badge: "🥖",
  },
]

export default function SignatureItems() {
  return (
    <section id="signatures" className="py-20 md:py-28" style={{ background: "#FFF9F5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-section-tag mx-auto mb-4">Our Signatures</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E0A06] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Made to be{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #E91B8D 0%, #C87941 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              obsessed over
            </span>
          </h2>
          <p
            className="text-[#1E0A06]/55 max-w-xl mx-auto text-base sm:text-lg"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Every item on our signature menu is a labour of love — tested, tasted, and approved by Kochi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {signatures.map((item) => (
            <div key={item.name} className="w-card flex flex-col">
              {/* Image area */}
              <div className={`relative h-48 bg-gradient-to-br ${item.grad} flex items-center justify-center overflow-hidden`}>
                {/* Tag */}
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${item.tagColor}`}>
                  {item.tag}
                </span>
                {/* Badge */}
                <span className="absolute top-3 right-3 text-xl">{item.badge}</span>
                {/* Emoji */}
                <span className="text-7xl w-float" style={{ filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.2))" }}>
                  {item.emoji}
                </span>
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3
                  className="text-lg font-bold text-[#1E0A06]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-sm text-[#1E0A06]/55 leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2 border-t border-black/5">
                  <span
                    className="text-xl font-black text-[#E91B8D]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.price}
                  </span>
                  <Link
                    href="/wolkano/menu"
                    className="text-sm font-bold text-[#E91B8D] border border-[#E91B8D] px-4 py-1.5 rounded-full hover:bg-[#FDE8F5] transition-colors"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/wolkano/menu" className="w-btn-outline">
            Browse Full Menu →
          </Link>
        </div>
      </div>
    </section>
  )
}
