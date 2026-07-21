"use client"

import { Building2, SlidersHorizontal } from "lucide-react"
import type { FilterValue } from "@/lib/easybroker/types"

const TABS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "for-rent", label: "For Rent" },
  { value: "wanted", label: "Wanted" },
]

export default function TopBar({
  filter,
  onFilterChange,
  onToggleFilters,
  filtersActive,
}: {
  filter: FilterValue
  onFilterChange: (value: FilterValue) => void
  onToggleFilters: () => void
  filtersActive: boolean
}) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-3 z-[1000] flex flex-wrap items-center justify-between gap-2 px-3">
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur">
        <Building2 className="size-4 text-blue-600" aria-hidden />
        <span className="text-sm font-extrabold tracking-tight text-slate-900">
          Easy<span className="text-blue-600">Broker</span>
        </span>
        <span className="ml-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
          Map
        </span>
      </div>

      <div className="pointer-events-auto flex items-center gap-1.5">
        <div className="flex gap-1 rounded-full border border-slate-200 bg-white/95 p-1 shadow-sm backdrop-blur">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => onFilterChange(tab.value)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                filter === tab.value ? "bg-blue-600 text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={onToggleFilters}
          aria-label="More filters"
          className="relative flex size-8 items-center justify-center rounded-full border border-slate-200 bg-white/95 shadow-sm backdrop-blur"
        >
          <SlidersHorizontal className="size-4 text-slate-700" aria-hidden />
          {filtersActive && <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-orange-500" />}
        </button>
      </div>
    </div>
  )
}
