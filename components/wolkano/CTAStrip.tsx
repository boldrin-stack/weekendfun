export default function CTAStrip() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #E91B8D 0%, #C0166F 40%, #8E0F52 70%, #C87941 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute -top-16 -right-16 w-80 h-80 rounded-full opacity-20 w-blob"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15 w-blob"
        style={{ background: "radial-gradient(circle, #fff 0%, transparent 70%)", filter: "blur(30px)", animationDelay: "5s" }}
      />

      {/* Floating dots */}
      {[
        { top: "20%", left: "5%", size: 10, delay: 0 },
        { top: "60%", left: "10%", size: 6, delay: 1 },
        { top: "30%", right: "8%", size: 8, delay: 0.5 },
        { top: "70%", right: "5%", size: 5, delay: 1.5 },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/30 w-float hidden sm:block"
          style={{
            top: dot.top,
            left: "left" in dot ? dot.left : undefined,
            right: "right" in dot ? dot.right : undefined,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        {/* Emoji */}
        <span className="text-5xl w-float" style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.2))" }}>
          🌋
        </span>

        {/* Headline */}
        <div>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Craving dessert?
          </h2>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white/85 leading-tight italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Order Wolkano now.
          </h2>
        </div>

        <p
          className="text-white/75 text-base sm:text-lg max-w-md"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          We&apos;re open till 1 AM. In-store or delivered — happiness is always one tap away.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Swiggy */}
          <a
            href="#"
            className="flex items-center gap-3 bg-white text-[#1E0A06] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-orange-50 transition-colors shadow-xl group"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <svg viewBox="0 0 40 40" className="w-6 h-6 shrink-0" fill="none">
              <circle cx="20" cy="20" r="20" fill="#FC5A03"/>
              <path d="M28 16.5c0 5.3-7.5 11.5-8 11.5s-8-6.2-8-11.5a8 8 0 0116 0z" fill="white"/>
              <circle cx="20" cy="16" r="3.5" fill="#FC5A03"/>
            </svg>
            Order on Swiggy
          </a>

          {/* Zomato */}
          <a
            href="#"
            className="flex items-center gap-3 bg-white text-[#1E0A06] px-6 py-3.5 rounded-full font-bold text-sm hover:bg-red-50 transition-colors shadow-xl group"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <svg viewBox="0 0 40 40" className="w-6 h-6 shrink-0" fill="none">
              <circle cx="20" cy="20" r="20" fill="#E23744"/>
              <text x="8" y="27" fontSize="16" fontWeight="900" fill="white">Z</text>
            </svg>
            Order on Zomato
          </a>

          {/* Call */}
          <a
            href="tel:+91"
            className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3.5 rounded-full font-bold text-sm hover:bg-white/25 transition-colors"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.024.76-1.904 1.777-2.01a48.2 48.2 0 015.55-.274c1.018.056 1.822.876 1.944 1.892l.14 1.147a2.003 2.003 0 01-1.397 2.17l-.73.22a12.006 12.006 0 004.58 4.58l.22-.73a2.003 2.003 0 012.17-1.397l1.147.14c1.016.123 1.836.926 1.892 1.944a48.2 48.2 0 01-.274 5.55C21.566 21.24 20.686 22 19.662 22 10.608 22 3.25 14.657 3.25 5.603c0-.407.02-.812.025-1.213" />
            </svg>
            Call to Order
          </a>
        </div>

        {/* Footnote */}
        <p className="text-white/50 text-xs" style={{ fontFamily: "var(--font-jakarta)" }}>
          Available for delivery across Kochi · Also available for pre-order and bulk orders
        </p>
      </div>
    </section>
  )
}
