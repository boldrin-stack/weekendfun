"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "All Items", emoji: "✨" },
  { id: "sundaes", label: "Ice Cream Sundaes", emoji: "🍨" },
  { id: "waffles", label: "Waffles", emoji: "🧇" },
  { id: "macarons", label: "Macarons & Chocolates", emoji: "🍫" },
  { id: "pastries", label: "Pastries", emoji: "🥐" },
  { id: "cakes", label: "Cakes", emoji: "🎂" },
  { id: "icecreamcakes", label: "Ice Cream Cakes", emoji: "🍰" },
  { id: "shakes", label: "Thick Shakes", emoji: "🥤" },
]

type MenuItem = {
  name: string
  description: string
  price: string
  tag?: string
  category: string
  emoji: string
  grad: string
}

const allItems: MenuItem[] = [
  // Ice Cream Sundaes
  { category: "sundaes", emoji: "🍨", grad: "from-[#E91B8D] to-[#8E0F52]", name: "Wolkano Classic Sundae", description: "3 scoops vanilla, hot fudge, whipped cream, cherry on top — the original.", price: "₹249", tag: "Bestseller" },
  { category: "sundaes", emoji: "🍫", grad: "from-[#3D1E0C] to-[#7D3E10]", name: "Brownie Overload Sundae", description: "Warm brownies with chocolate ice cream and salted caramel drizzle.", price: "₹299" },
  { category: "sundaes", emoji: "🍓", grad: "from-[#FF6B9D] to-[#E91B8D]", name: "Strawberry Fields Sundae", description: "Fresh strawberry compote with strawberry ice cream and sprinkles.", price: "₹269", tag: "Seasonal" },
  { category: "sundaes", emoji: "🍿", grad: "from-[#C87941] to-[#A85E2A]", name: "Caramel Popcorn Sundae", description: "Our famous caramel popcorn ice cream loaded with toffee sauce.", price: "₹279", tag: "Original" },
  { category: "sundaes", emoji: "🍪", grad: "from-[#1E0A06] to-[#3D1E0C]", name: "Oreo Dream Sundae", description: "Crushed Oreos, cream cheese ice cream, chocolate syrup.", price: "₹289" },
  { category: "sundaes", emoji: "🥭", grad: "from-[#F7C162] to-[#C87941]", name: "Mango Tango Sundae", description: "Alphonso mango sorbet with fresh fruit and coconut cream.", price: "₹259", tag: "Seasonal" },

  // Waffles
  { category: "waffles", emoji: "🧇", grad: "from-[#C87941] to-[#7D3E10]", name: "Chocolate Wolkano Waffle Combo", description: "Belgian chocolate waffle + 2 scoops premium ice cream + hot fudge.", price: "₹349", tag: "Bestseller" },
  { category: "waffles", emoji: "🍫", grad: "from-[#3D1E0C] to-[#7D3E10]", name: "Crazy Nutella Waffle Combo", description: "Golden waffle with Nutella, banana, fresh cream swirls.", price: "₹329", tag: "Fan Fav" },
  { category: "waffles", emoji: "🥜", grad: "from-[#00B8A0] to-[#007A6C]", name: "Pista Kunafa Chocolate Waffle", description: "Kunafa-style waffle with pistachio cream and dark chocolate.", price: "₹379", tag: "Original" },
  { category: "waffles", emoji: "🍪", grad: "from-[#C87941] to-[#A85E2A]", name: "Lotus Biscoff Waffle", description: "Classic waffle with Biscoff spread, caramelised biscuits and vanilla.", price: "₹319" },
  { category: "waffles", emoji: "🫧", grad: "from-[#E91B8D] to-[#C87941]", name: "Bubble Waffle Sundae", description: "Hong Kong bubble waffle with ice cream, sauce and toppings.", price: "₹359" },
  { category: "waffles", emoji: "🧈", grad: "from-[#F7C162] to-[#C87941]", name: "Classic Butter Maple Waffle", description: "Simple, perfect — Belgian waffle with butter and maple syrup.", price: "₹199" },

  // Macarons & Chocolates
  { category: "macarons", emoji: "🎀", grad: "from-[#E91B8D] to-[#8E0F52]", name: "Classic Macarons (Box of 6)", description: "Rose, Pistachio, Salted Caramel, Chocolate, Vanilla, Raspberry.", price: "₹399" },
  { category: "macarons", emoji: "🍫", grad: "from-[#1E0A06] to-[#3D1E0C]", name: "Dark Chocolate Truffles", description: "Handmade truffles with 70% dark chocolate ganache.", price: "₹349 for 8", tag: "Premium" },
  { category: "macarons", emoji: "🪵", grad: "from-[#3D1E0C] to-[#7D3E10]", name: "Chocolate Bark", description: "Artisanal chocolate bark with nuts, dried fruits and sea salt.", price: "₹249" },
  { category: "macarons", emoji: "🫘", grad: "from-[#C87941] to-[#7D3E10]", name: "Assorted Pralines", description: "French-style pralines with almond, hazelnut and caramel.", price: "₹449 for 12" },
  { category: "macarons", emoji: "🍦", grad: "from-[#E91B8D] to-[#C87941]", name: "Macaron Ice Cream Sandwich", description: "Two giant macarons hugging a scoop of premium ice cream.", price: "₹199", tag: "New" },

  // Pastries
  { category: "pastries", emoji: "🥐", grad: "from-[#F7C162] to-[#C87941]", name: "Butter Croissant", description: "Perfectly laminated croissant baked fresh every morning.", price: "₹149" },
  { category: "pastries", emoji: "🌾", grad: "from-[#C87941] to-[#A85E2A]", name: "Almond Croissant", description: "Frangipane-filled croissant with toasted flaked almonds.", price: "₹179", tag: "Bestseller" },
  { category: "pastries", emoji: "⚡", grad: "from-[#1E0A06] to-[#3D1E0C]", name: "Chocolate Éclair", description: "Choux pastry filled with chocolate cream, glazed with dark ganache.", price: "₹199" },
  { category: "pastries", emoji: "🌸", grad: "from-[#E91B8D] to-[#8E0F52]", name: "Paris-Brest", description: "Classic choux ring with praline cream — our French heritage dessert.", price: "₹229", tag: "Signature" },
  { category: "pastries", emoji: "🍓", grad: "from-[#FF6B9D] to-[#E91B8D]", name: "Fruit Tart", description: "Crispy tart shell, crème pâtissière, seasonal fresh fruits.", price: "₹249" },
  { category: "pastries", emoji: "📐", grad: "from-[#F7C162] to-[#C87941]", name: "Mille-Feuille", description: "Layers of puff pastry with vanilla cream and caramel glaze.", price: "₹259", tag: "Seasonal" },

  // Cakes
  { category: "cakes", emoji: "🎂", grad: "from-[#1E0A06] to-[#3D1E0C]", name: "Belgian Chocolate Truffle Cake", description: "5-layer dark chocolate cake with truffle cream — celebration ready.", price: "From ₹999", tag: "Pre-order" },
  { category: "cakes", emoji: "🍰", grad: "from-[#FF6B9D] to-[#E91B8D]", name: "Strawberry Cheesecake", description: "New York style baked cheesecake with fresh strawberry compote.", price: "₹699 / slice ₹249" },
  { category: "cakes", emoji: "🎵", grad: "from-[#3D1E0C] to-[#C87941]", name: "Opera Cake", description: "Classic French opera cake with coffee buttercream and chocolate.", price: "From ₹1,099", tag: "Premium" },
  { category: "cakes", emoji: "🌊", grad: "from-[#C87941] to-[#7D3E10]", name: "Salted Caramel Drip Cake", description: "Vanilla sponge, caramel buttercream, dramatic salted caramel drip.", price: "From ₹1,299" },
  { category: "cakes", emoji: "🍋", grad: "from-[#00B8A0] to-[#007A6C]", name: "Lemon Blueberry Cake", description: "Light, zingy lemon sponge with blueberry jam and cream cheese frosting.", price: "From ₹899", tag: "Seasonal" },

  // Ice Cream Cakes
  { category: "icecreamcakes", emoji: "🌋", grad: "from-[#E91B8D] to-[#C87941]", name: "Wolkano Ice Cream Cake", description: "Our signature — chocolate sponge with 3 layers of premium ice cream.", price: "From ₹1,199", tag: "Signature" },
  { category: "icecreamcakes", emoji: "🌈", grad: "from-[#E91B8D] to-[#9B59B6]", name: "Rainbow Sprinkle Ice Cream Cake", description: "Funfetti ice cream cake perfect for birthday celebrations.", price: "From ₹999" },
  { category: "icecreamcakes", emoji: "🍪", grad: "from-[#1E0A06] to-[#3D1E0C]", name: "Cookies & Cream Ice Cream Cake", description: "Oreo crumb base with cookies & cream ice cream and cream frosting.", price: "From ₹1,099", tag: "Bestseller" },
  { category: "icecreamcakes", emoji: "🥭", grad: "from-[#F7C162] to-[#00B8A0]", name: "Mango Sorbet Cake", description: "Fresh mango sorbet layered with coconut ice cream on a sponge base.", price: "From ₹1,149", tag: "Seasonal" },

  // Thick Shakes
  { category: "shakes", emoji: "🥤", grad: "from-[#1E0A06] to-[#3D1E0C]", name: "Classic Chocolate Thick Shake", description: "Rich, creamy chocolate shake blended with premium ice cream.", price: "₹199", tag: "Bestseller" },
  { category: "shakes", emoji: "🍓", grad: "from-[#FF6B9D] to-[#E91B8D]", name: "Strawberry Dream Shake", description: "Fresh strawberries blended with vanilla ice cream and milk.", price: "₹189" },
  { category: "shakes", emoji: "🍮", grad: "from-[#C87941] to-[#A85E2A]", name: "Salted Caramel Shake", description: "Buttery caramel sauce with vanilla ice cream and a pinch of sea salt.", price: "₹219", tag: "Signature" },
  { category: "shakes", emoji: "🍫", grad: "from-[#3D1E0C] to-[#7D3E10]", name: "Nutella Hazelnut Shake", description: "Thick Nutella blended with hazelnut ice cream and whipped cream.", price: "₹229" },
  { category: "shakes", emoji: "🥜", grad: "from-[#C87941] to-[#7D3E10]", name: "Peanut Butter & Cookie Shake", description: "Peanut butter, cookie dough ice cream, crushed cookies.", price: "₹249", tag: "New" },
  { category: "shakes", emoji: "🥭", grad: "from-[#F7C162] to-[#C87941]", name: "Mango Lassi Shake", description: "Our Kochi twist — thick mango shake with a hint of rose water.", price: "₹179" },
]

export default function MenuPageContent() {
  const [active, setActive] = useState("all")
  const [search, setSearch] = useState("")

  const filtered = allItems.filter((item) => {
    const matchCat = active === "all" || item.category === active
    const q = search.toLowerCase()
    const matchSearch = !q || item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1E0A06]/30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search menu items…"
          className="w-full pl-11 pr-4 py-3 rounded-full border-2 border-black/10 bg-white text-sm text-[#1E0A06] placeholder-[#1E0A06]/35 focus:outline-none focus:border-[#E91B8D] transition-colors"
          style={{ fontFamily: "var(--font-jakarta)" }}
        />
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2.5 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              active === cat.id
                ? "bg-[#E91B8D] text-white border-[#E91B8D] shadow-[0_4px_16px_rgba(233,27,141,0.3)]"
                : "bg-white text-[#1E0A06]/70 border-black/10 hover:border-[#E91B8D] hover:text-[#E91B8D]"
            }`}
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <span>{cat.emoji}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-[#1E0A06]/45" style={{ fontFamily: "var(--font-jakarta)" }}>
          {filtered.length} item{filtered.length !== 1 ? "s" : ""} found
        </p>
        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-xs text-[#E91B8D] font-semibold"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Clear search ×
          </button>
        )}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item) => (
            <div
              key={`${item.category}-${item.name}`}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(30,10,6,0.07)] hover:shadow-[0_8px_32px_rgba(233,27,141,0.12)] hover:-translate-y-1 transition-all duration-250 flex flex-col"
            >
              {/* Image area */}
              <div className={`h-32 bg-gradient-to-br ${item.grad} flex items-center justify-center relative`}>
                <span className="text-5xl" style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.2))" }}>
                  {item.emoji}
                </span>
                {item.tag && (
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2.5 flex-1">
                <h3
                  className="text-sm font-bold text-[#1E0A06] leading-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="text-xs text-[#1E0A06]/55 leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-black/5">
                  <span
                    className="text-base font-black text-[#E91B8D]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {item.price}
                  </span>
                  <button
                    className="text-xs font-bold text-white bg-[#E91B8D] px-3 py-1.5 rounded-full hover:bg-[#C0166F] transition-colors"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <span className="text-6xl block mb-4">🍦</span>
          <p className="text-lg font-bold text-[#1E0A06]/40" style={{ fontFamily: "var(--font-playfair)" }}>
            No items found
          </p>
          <p className="text-sm text-[#1E0A06]/30 mt-2" style={{ fontFamily: "var(--font-jakarta)" }}>
            Try a different search or category
          </p>
          <button
            onClick={() => { setSearch(""); setActive("all") }}
            className="mt-6 w-btn-primary !py-2.5 !text-sm"
          >
            Show All Items
          </button>
        </div>
      )}
    </div>
  )
}
