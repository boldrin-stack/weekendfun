"use client"

import { useState } from "react"
import Link from "next/link"

const categories = [
  { id: "sundaes", label: "Ice Cream Sundaes", emoji: "🍨" },
  { id: "waffles", label: "Waffles", emoji: "🧇" },
  { id: "macarons", label: "Macarons & Chocolates", emoji: "🍫" },
  { id: "pastries", label: "Pastries", emoji: "🥐" },
  { id: "cakes", label: "Cakes", emoji: "🎂" },
  { id: "icecreamcakes", label: "Ice Cream Cakes", emoji: "🍰" },
  { id: "shakes", label: "Thick Shakes", emoji: "🥤" },
]

const menuItems: Record<string, Array<{ name: string; description: string; price: string; tag?: string }>> = {
  sundaes: [
    { name: "Wolkano Classic Sundae", description: "3 scoops vanilla, hot fudge, whipped cream, cherry on top.", price: "₹249", tag: "Bestseller" },
    { name: "Brownie Overload Sundae", description: "Warm brownies with chocolate ice cream and salted caramel drizzle.", price: "₹299" },
    { name: "Strawberry Fields Sundae", description: "Fresh strawberry compote with strawberry ice cream and sprinkles.", price: "₹269", tag: "Seasonal" },
    { name: "Caramel Popcorn Sundae", description: "Our famous caramel popcorn ice cream loaded with toffee sauce.", price: "₹279", tag: "Original" },
    { name: "Oreo Dream Sundae", description: "Crushed Oreos, cream cheese ice cream, chocolate syrup.", price: "₹289" },
    { name: "Mango Tango Sundae", description: "Alphonso mango sorbet with fresh fruit and coconut cream.", price: "₹259", tag: "Seasonal" },
  ],
  waffles: [
    { name: "Chocolate Wolkano Waffle Combo", description: "Belgian chocolate waffle + 2 scoops premium ice cream + hot fudge.", price: "₹349", tag: "Bestseller" },
    { name: "Crazy Nutella Waffle Combo", description: "Golden waffle with Nutella, banana, fresh cream swirls.", price: "₹329", tag: "Fan Fav" },
    { name: "Pista Kunafa Chocolate Waffle", description: "Kunafa-style waffle with pistachio cream and dark chocolate.", price: "₹379", tag: "Original" },
    { name: "Lotus Biscoff Waffle", description: "Classic waffle with Biscoff spread, caramelised biscuits and vanilla.", price: "₹319" },
    { name: "Bubble Waffle Sundae", description: "Hong Kong bubble waffle with ice cream, sauce and toppings.", price: "₹359" },
    { name: "Classic Butter Maple Waffle", description: "Simple, perfect — Belgian waffle with butter and maple syrup.", price: "₹199" },
  ],
  macarons: [
    { name: "Classic Macarons (Box of 6)", description: "Rose, Pistachio, Salted Caramel, Chocolate, Vanilla, Raspberry.", price: "₹399" },
    { name: "Dark Chocolate Truffles", description: "Handmade truffles with 70% dark chocolate ganache.", price: "₹349 for 8", tag: "Premium" },
    { name: "Chocolate Bark", description: "Artisanal chocolate bark with nuts, dried fruits and sea salt.", price: "₹249" },
    { name: "Assorted Pralines", description: "French-style pralines with almond, hazelnut and caramel.", price: "₹449 for 12" },
    { name: "Macaron Ice Cream Sandwich", description: "Two giant macarons hugging a scoop of premium ice cream.", price: "₹199", tag: "New" },
  ],
  pastries: [
    { name: "Butter Croissant", description: "Perfectly laminated croissant baked fresh every morning.", price: "₹149" },
    { name: "Almond Croissant", description: "Frangipane-filled croissant with toasted flaked almonds.", price: "₹179", tag: "Bestseller" },
    { name: "Chocolate Éclair", description: "Choux pastry filled with chocolate cream, glazed with dark ganache.", price: "₹199" },
    { name: "Paris-Brest", description: "Classic choux ring with praline cream — our French heritage dessert.", price: "₹229", tag: "Signature" },
    { name: "Fruit Tart", description: "Crispy tart shell, crème pâtissière, seasonal fresh fruits.", price: "₹249" },
    { name: "Mille-Feuille", description: "Layers of puff pastry with vanilla cream and caramel glaze.", price: "₹259", tag: "Seasonal" },
  ],
  cakes: [
    { name: "Belgian Chocolate Truffle Cake", description: "5-layer dark chocolate cake with truffle cream — celebration ready.", price: "From ₹999", tag: "Pre-order" },
    { name: "Strawberry Cheesecake", description: "New York style baked cheesecake with fresh strawberry compote.", price: "₹699 / slice ₹249" },
    { name: "Opera Cake", description: "Classic French opera cake with coffee buttercream and chocolate.", price: "From ₹1,099", tag: "Premium" },
    { name: "Salted Caramel Drip Cake", description: "Vanilla sponge layers, caramel buttercream, dramatic salted caramel drip.", price: "From ₹1,299" },
    { name: "Lemon Blueberry Cake", description: "Light, zingy lemon sponge with blueberry jam and cream cheese frosting.", price: "From ₹899", tag: "Seasonal" },
  ],
  icecreamcakes: [
    { name: "Wolkano Ice Cream Cake", description: "Our signature — chocolate sponge with 3 layers of premium ice cream.", price: "From ₹1,199", tag: "Signature" },
    { name: "Rainbow Sprinkle Ice Cream Cake", description: "Funfetti ice cream cake perfect for birthday celebrations.", price: "From ₹999" },
    { name: "Cookies & Cream Ice Cream Cake", description: "Oreo crumb base with cookies & cream ice cream and cream frosting.", price: "From ₹1,099", tag: "Bestseller" },
    { name: "Mango Sorbet Cake", description: "Fresh mango sorbet layered with coconut ice cream on a sponge base.", price: "From ₹1,149", tag: "Seasonal" },
  ],
  shakes: [
    { name: "Classic Chocolate Thick Shake", description: "Rich, creamy chocolate shake blended with premium ice cream.", price: "₹199", tag: "Bestseller" },
    { name: "Strawberry Dream Shake", description: "Fresh strawberries blended with vanilla ice cream and milk.", price: "₹189" },
    { name: "Salted Caramel Shake", description: "Buttery caramel sauce with vanilla ice cream and a pinch of sea salt.", price: "₹219", tag: "Signature" },
    { name: "Nutella Hazelnut Shake", description: "Thick Nutella blended with hazelnut ice cream and whipped cream.", price: "₹229" },
    { name: "Peanut Butter & Cookie Shake", description: "Peanut butter, cookie dough ice cream, crushed cookies.", price: "₹249", tag: "New" },
    { name: "Mango Lassi Shake", description: "Our Kochi twist — thick mango shake with a hint of rose water.", price: "₹179" },
  ],
}

export default function MenuCategories() {
  const [active, setActive] = useState("sundaes")
  const items = menuItems[active] ?? []

  return (
    <section id="menu" className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-section-tag mx-auto mb-4">Full Menu</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E0A06] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Something for every craving
          </h2>
          <p
            className="text-[#1E0A06]/55 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Pick a category and discover what awaits. We update the menu seasonally.
          </p>
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

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-[#FFF9F5] rounded-2xl p-5 border border-black/5 hover:border-[#E91B8D]/25 hover:shadow-[0_4px_24px_rgba(233,27,141,0.08)] transition-all duration-250 flex flex-col gap-3"
            >
              {item.tag && (
                <span className="w-section-tag self-start !text-[10px]">{item.tag}</span>
              )}
              <h3
                className="text-base font-bold text-[#1E0A06]"
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
              <div className="flex items-center justify-between pt-3 border-t border-black/5">
                <span
                  className="text-lg font-black text-[#E91B8D]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.price}
                </span>
                <button
                  className="text-xs font-bold text-white bg-[#E91B8D] px-3.5 py-1.5 rounded-full hover:bg-[#C0166F] transition-colors"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu */}
        <div className="text-center mt-12">
          <Link href="/wolkano/menu" className="w-btn-primary">
            See Full Menu →
          </Link>
        </div>
      </div>
    </section>
  )
}
