const reviews = [
  {
    name: "Aditya R.",
    location: "Ernakulam",
    rating: 5,
    review: "Hands down the best waffles I've had in Kochi. The Pista Kunafa waffle is absolutely unreal — never seen anything like it in Kerala!",
    avatar: "A",
    color: "#E91B8D",
    item: "Pista Kunafa Waffle",
  },
  {
    name: "Shreya M.",
    location: "Vyttila",
    rating: 5,
    review: "Went for ice cream, stayed for the croissants. Wolkano's French patisseries are the real deal. The almond croissant is criminally good.",
    avatar: "S",
    color: "#C87941",
    item: "Almond Croissant",
  },
  {
    name: "Rahul K.",
    location: "Fort Kochi",
    rating: 5,
    review: "Perfect late-night spot! Open till 1am, amazing desserts, great vibe. The Brownie Overload Sundae at midnight hits differently.",
    avatar: "R",
    color: "#00B8A0",
    item: "Brownie Sundae",
  },
  {
    name: "Meera P.",
    location: "Willingdon Island",
    rating: 5,
    review: "Ordered a custom birthday cake from Wolkano and it was gorgeous — tasted even better than it looked. Will definitely order again!",
    avatar: "M",
    color: "#9B59B6",
    item: "Custom Birthday Cake",
  },
]

const instaGrid = [
  { emoji: "🧇", bg: "from-[#C87941] to-[#7D3E10]", likes: "2.1K" },
  { emoji: "🍦", bg: "from-[#E91B8D] to-[#8E0F52]", likes: "1.8K" },
  { emoji: "🥐", bg: "from-[#F7C162] to-[#C87941]", likes: "1.4K" },
  { emoji: "🎂", bg: "from-[#00B8A0] to-[#007A6C]", likes: "3.2K" },
  { emoji: "🍨", bg: "from-[#9B59B6] to-[#6C3483]", likes: "2.5K" },
  { emoji: "🥜", bg: "from-[#7D5A1E] to-[#4A3210]", likes: "1.9K" },
  { emoji: "🍫", bg: "from-[#3D1E0C] to-[#1E0A06]", likes: "2.8K" },
  { emoji: "🥤", bg: "from-[#E91B8D] to-[#C87941]", likes: "1.6K" },
]

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
        {/* Reviews */}
        <div>
          <div className="text-center mb-12">
            <div className="w-section-tag mx-auto mb-4">Reviews</div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E0A06] mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Kochi loves Wolkano
            </h2>
            <p
              className="text-[#1E0A06]/55 max-w-md mx-auto"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Don&apos;t just take our word for it — here&apos;s what our dessert family has to say.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-[#FFF9F5] rounded-2xl p-6 border border-black/5 flex flex-col gap-4 hover:shadow-[0_8px_32px_rgba(233,27,141,0.1)] transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 w-star" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-sm text-[#1E0A06]/70 leading-relaxed flex-1 italic"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Item ordered */}
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#E91B8D]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-[#E91B8D] font-semibold" style={{ fontFamily: "var(--font-jakarta)" }}>
                    Ordered: {review.item}
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-black/5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ background: review.color, fontFamily: "var(--font-jakarta)" }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1E0A06]" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {review.name}
                    </p>
                    <p className="text-xs text-[#1E0A06]/40" style={{ fontFamily: "var(--font-jakarta)" }}>
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram section */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <div className="w-section-tag mb-3">Instagram</div>
              <h2
                className="text-2xl sm:text-3xl font-black text-[#1E0A06]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Follow our sweet feed
              </h2>
            </div>
            <a
              href="https://instagram.com/wolkanocreamery.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-btn-primary shrink-0"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @wolkanocreamery.in
            </a>
          </div>

          {/* Instagram grid */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
            {instaGrid.map((item, i) => (
              <div
                key={i}
                className={`relative aspect-square rounded-xl bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center overflow-hidden group cursor-pointer`}
              >
                <span className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                {/* Like overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="text-white text-xs font-bold" style={{ fontFamily: "var(--font-jakarta)" }}>
                      ❤️ {item.likes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
