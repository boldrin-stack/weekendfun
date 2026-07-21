"use client"

import { BadgeCheck, Flag, MessageCircle, X } from "lucide-react"
import { formatPriceFull } from "@/lib/easybroker/mock-data"
import type { Listing } from "@/lib/easybroker/types"

export default function ListingDetailCard({
  listing,
  onClose,
}: {
  listing: Listing
  onClose: () => void
}) {
  const whatsappHref = `https://wa.me/${listing.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hi, I'm interested in "${listing.title}" listed on EasyBroker.`
  )}`

  return (
    <div className="pointer-events-auto absolute bottom-6 right-3 z-[1000] w-[340px] max-w-[calc(100vw-1.5rem)] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
              listing.kind === "for-rent" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
            }`}
          >
            {listing.kind === "for-rent" ? "For Rent" : "Wanted"}
          </span>
          {listing.isNew && (
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-[11px] font-semibold text-white">New</span>
          )}
          {listing.verified && (
            <span className="inline-flex items-center gap-0.5 rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-semibold text-green-600">
              <BadgeCheck className="size-3" /> Verified
            </span>
          )}
        </div>
        <button type="button" onClick={onClose} aria-label="Close">
          <X className="size-4 text-slate-400" />
        </button>
      </div>

      <h3 className="text-base font-semibold text-slate-900">{listing.title}</h3>
      <p className="mb-2 text-xs text-slate-500">
        {listing.area} ·{" "}
        {new Date(listing.postedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {[listing.bhk, listing.propertyType, listing.furnishing, listing.tenantPref].map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
            {tag}
          </span>
        ))}
      </div>

      <p className="mb-1 text-xl font-bold text-slate-900">
        {formatPriceFull(listing.price)}
        <span className="ml-1 text-xs font-normal text-slate-500">
          {listing.kind === "for-rent" ? "/mo" : "max budget"}
        </span>
      </p>
      <p className="mb-3 text-sm text-slate-600">{listing.description}</p>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
      >
        <MessageCircle className="size-4" />
        Contact on WhatsApp
      </a>
      <button
        type="button"
        className="mt-2 flex w-full items-center justify-center gap-1 text-xs font-medium text-slate-400 hover:text-slate-600"
      >
        <Flag className="size-3" />
        Report this listing
      </button>
    </div>
  )
}
