"use client"

import { X } from "lucide-react"
import { BHK_OPTIONS, PROPERTY_TYPE_OPTIONS } from "@/lib/easybroker/types"
import type { Bhk, PropertyType } from "@/lib/easybroker/types"

export default function FilterPanel({
  bhk,
  propertyType,
  onToggleBhk,
  onTogglePropertyType,
  onClear,
  onClose,
}: {
  bhk: Bhk[]
  propertyType: PropertyType[]
  onToggleBhk: (value: Bhk) => void
  onTogglePropertyType: (value: PropertyType) => void
  onClear: () => void
  onClose: () => void
}) {
  return (
    <div className="pointer-events-auto absolute right-3 top-16 z-[1000] w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-900">Filters</h2>
        <button type="button" onClick={onClose} aria-label="Close filters">
          <X className="size-4 text-slate-500" />
        </button>
      </div>

      <p className="mb-1.5 text-xs font-medium text-slate-500">BHK</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {BHK_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onToggleBhk(option)}
            className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
              bhk.includes(option)
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <p className="mb-1.5 text-xs font-medium text-slate-500">Property type</p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {PROPERTY_TYPE_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onTogglePropertyType(option)}
            className={`rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
              propertyType.includes(option)
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 text-slate-600 hover:border-slate-300"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onClear}
        className="w-full rounded-full border border-slate-200 py-1.5 text-xs font-medium text-slate-600 hover:border-slate-300"
      >
        Clear filters
      </button>
    </div>
  )
}
