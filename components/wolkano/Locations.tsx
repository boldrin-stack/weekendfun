const outlets = [
  {
    name: "Vyttila",
    area: "Kochi",
    address: "Subhash Chandra Bose Road, Jawahar Nagar, Vyttila, Kochi – 682019",
    hours: "12:00 PM – 1:00 AM",
    daysOpen: "Open all days",
    phone: "+91 98XXX XXXXX",
    mapUrl: "#",
    highlight: "Flagship Store",
    emoji: "🏪",
    grad: "from-[#E91B8D] to-[#8E0F52]",
  },
  {
    name: "Willingdon Island",
    area: "Kochi",
    address: "Willingdon Island, Kochi – 682003",
    hours: "12:00 PM – 1:00 AM",
    daysOpen: "Open all days",
    phone: "+91 98XXX XXXXX",
    mapUrl: "#",
    highlight: "Harbour View",
    emoji: "⚓",
    grad: "from-[#C87941] to-[#7D3E10]",
  },
  {
    name: "Fort Kochi",
    area: "Kochi",
    address: "Fort Kochi, Ernakulam – 682001",
    hours: "12:00 PM – 1:00 AM",
    daysOpen: "Open all days",
    phone: "+91 98XXX XXXXX",
    mapUrl: "#",
    highlight: "Heritage Quarter",
    emoji: "🏰",
    grad: "from-[#00B8A0] to-[#007A6C]",
  },
]

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28" style={{ background: "#FFF9F5" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="w-section-tag mx-auto mb-4">Find Us</div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E0A06] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Visit{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #E91B8D 0%, #C87941 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Wolkano
            </span>
          </h2>
          <p
            className="text-[#1E0A06]/55 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            Three locations across Kochi. All open till 1 am — because your dessert cravings don&apos;t sleep.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outlets.map((outlet) => (
            <div key={outlet.name} className="w-card overflow-visible">
              {/* Card header */}
              <div className={`relative h-36 bg-gradient-to-br ${outlet.grad} rounded-t-[1.25rem] flex items-center justify-center overflow-hidden`}>
                <span className="text-6xl" style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))" }}>
                  {outlet.emoji}
                </span>
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {outlet.highlight}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-4" style={{ fontFamily: "var(--font-jakarta)" }}>
                <div>
                  <h3
                    className="text-xl font-black text-[#1E0A06]"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {outlet.name}
                  </h3>
                  <p className="text-sm text-[#1E0A06]/45 font-medium">{outlet.area}</p>
                </div>

                {/* Address */}
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-[#E91B8D] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                  </svg>
                  <p className="text-sm text-[#1E0A06]/60 leading-relaxed">{outlet.address}</p>
                </div>

                {/* Hours */}
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-[#E91B8D] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3"/>
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-[#1E0A06]">{outlet.hours}</p>
                    <p className="text-xs text-[#1E0A06]/45">{outlet.daysOpen}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-2.5">
                  <svg className="w-4 h-4 text-[#E91B8D] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.024.76-1.904 1.777-2.01a48.2 48.2 0 0 1 5.55-.274c1.018.056 1.822.876 1.944 1.892l.14 1.147a2.003 2.003 0 0 1-1.397 2.17l-.73.22a12.006 12.006 0 0 0 4.58 4.58l.22-.73a2.003 2.003 0 0 1 2.17-1.397l1.147.14c1.016.123 1.836.926 1.892 1.944a48.2 48.2 0 0 1-.274 5.55C21.566 21.24 20.686 22 19.662 22c-9.054 0-16.397-7.343-16.397-16.397-.001-.407.02-.812.025-1.213"/>
                  </svg>
                  <p className="text-sm text-[#1E0A06]/60">{outlet.phone}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-black/5" />

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={outlet.mapUrl}
                    className="flex-1 text-center text-sm font-bold text-white bg-[#E91B8D] px-4 py-2.5 rounded-full hover:bg-[#C0166F] transition-colors"
                  >
                    View on Maps
                  </a>
                  <a
                    href={`tel:${outlet.phone}`}
                    className="flex-1 text-center text-sm font-bold text-[#E91B8D] border-2 border-[#E91B8D] px-4 py-2.5 rounded-full hover:bg-[#FDE8F5] transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hours note */}
        <div
          className="mt-10 text-center p-5 rounded-2xl border border-[#E91B8D]/20 bg-[#FDE8F5]"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          <p className="text-sm font-semibold text-[#E91B8D]">
            🕛 All outlets open daily from 12:00 PM to 1:00 AM · Holiday hours may vary · Call ahead to confirm
          </p>
        </div>
      </div>
    </section>
  )
}
