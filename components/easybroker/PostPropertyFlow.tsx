"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { AREAS, nearestArea } from "@/lib/easybroker/mock-data"
import {
  BHK_OPTIONS,
  FURNISHING_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
  TENANT_OPTIONS,
} from "@/lib/easybroker/types"
import type { Bhk, Furnishing, Listing, ListingKind, PropertyType, TenantPref } from "@/lib/easybroker/types"

export default function PostPropertyFlow({
  lat,
  lng,
  onCancel,
  onSubmit,
}: {
  lat: number
  lng: number
  onCancel: () => void
  onSubmit: (listing: Listing) => void
}) {
  const [kind, setKind] = useState<ListingKind | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [area, setArea] = useState(nearestArea(lat, lng))
  const [bhk, setBhk] = useState<Bhk>("1 BHK")
  const [propertyType, setPropertyType] = useState<PropertyType>("Apartment")
  const [furnishing, setFurnishing] = useState<Furnishing>("Semi-furnished")
  const [tenantPref, setTenantPref] = useState<TenantPref>("Any")
  const [phone, setPhone] = useState("")

  if (!kind) {
    return (
      <div className="pointer-events-auto absolute inset-x-3 bottom-24 z-[1000] mx-auto max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">List a property here?</h2>
            <p className="text-xs text-slate-500">Near {nearestArea(lat, lng)}</p>
          </div>
          <button type="button" onClick={onCancel} aria-label="Cancel">
            <X className="size-4 text-slate-400" />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setKind("for-rent")}
            className="flex-1 rounded-full bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            For Rent
          </button>
          <button
            type="button"
            onClick={() => setKind("wanted")}
            className="flex-1 rounded-full bg-amber-500 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Wanted
          </button>
        </div>
      </div>
    )
  }

  const canSubmit = title.trim() !== "" && price.trim() !== "" && phone.trim() !== ""

  function handleSubmit() {
    if (!canSubmit || !kind) return
    onSubmit({
      id: `local-${Date.now()}`,
      kind,
      title: title.trim(),
      description: description.trim(),
      price: Number(price) || 0,
      area,
      bhk,
      propertyType,
      furnishing,
      tenantPref,
      lat,
      lng,
      postedAt: new Date().toISOString(),
      phone: phone.trim(),
      verified: false,
      isNew: true,
    })
  }

  return (
    <div className="pointer-events-auto absolute inset-x-3 bottom-6 top-16 z-[1000] mx-auto max-w-sm overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-900">List your property</h2>
        <button type="button" onClick={onCancel} aria-label="Cancel">
          <X className="size-4 text-slate-400" />
        </button>
      </div>

      <div className="mb-3 flex gap-1 rounded-full bg-slate-100 p-1">
        <button
          type="button"
          onClick={() => setKind("for-rent")}
          className={`flex-1 rounded-full py-1.5 text-xs font-semibold ${
            kind === "for-rent" ? "bg-blue-600 text-white" : "text-slate-500"
          }`}
        >
          For Rent
        </button>
        <button
          type="button"
          onClick={() => setKind("wanted")}
          className={`flex-1 rounded-full py-1.5 text-xs font-semibold ${
            kind === "wanted" ? "bg-amber-500 text-white" : "text-slate-500"
          }`}
        >
          Wanted
        </button>
      </div>

      <label className="mb-1 block text-xs font-medium text-slate-500">Title</label>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="2BHK near Kakkanad Infopark"
        className="mb-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
      />

      <label className="mb-1 block text-xs font-medium text-slate-500">Description</label>
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Details: size, furnishing, deposit, availability..."
        rows={3}
        className="mb-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
      />

      <div className="mb-3 grid grid-cols-2 gap-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">
            {kind === "for-rent" ? "Rent (₹/mo)" : "Max budget (₹)"}
          </label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            inputMode="numeric"
            placeholder="15000"
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-500">Area</label>
          <select
            value={area}
            onChange={(event) => setArea(event.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
          >
            {AREAS.map((a) => (
              <option key={a.name} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ChipGroup label="BHK" options={BHK_OPTIONS} value={bhk} onChange={setBhk} />
      <ChipGroup label="Property type" options={PROPERTY_TYPE_OPTIONS} value={propertyType} onChange={setPropertyType} />
      <ChipGroup label="Furnishing" options={FURNISHING_OPTIONS} value={furnishing} onChange={setFurnishing} />
      <ChipGroup label="Tenants" options={TENANT_OPTIONS} value={tenantPref} onChange={setTenantPref} />

      <label className="mb-1 block text-xs font-medium text-slate-500">Your WhatsApp number</label>
      <input
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="9876543210"
        className="mb-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400"
      />

      <button
        type="button"
        disabled={!canSubmit}
        onClick={handleSubmit}
        className="w-full rounded-full bg-blue-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        Publish listing
      </button>
    </div>
  )
}

function ChipGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: readonly T[]
  value: T
  onChange: (value: T) => void
}) {
  return (
    <div className="mb-3">
      <p className="mb-1.5 text-xs font-medium text-slate-500">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
              value === option
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
