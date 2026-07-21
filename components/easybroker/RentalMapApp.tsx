"use client"

import dynamic from "next/dynamic"
import { useMemo, useState } from "react"
import { Plus } from "lucide-react"
import FilterPanel from "./FilterPanel"
import ListingDetailCard from "./ListingDetailCard"
import PostPropertyFlow from "./PostPropertyFlow"
import TopBar from "./TopBar"
import { KOCHI_CENTER, MOCK_LISTINGS } from "@/lib/easybroker/mock-data"
import type { Bhk, FilterValue, Listing, PropertyType } from "@/lib/easybroker/types"

const MapView = dynamic(() => import("./MapView"), { ssr: false })

export default function RentalMapApp() {
  const [listings, setListings] = useState<Listing[]>(MOCK_LISTINGS)
  const [filter, setFilter] = useState<FilterValue>("all")
  const [bhkFilter, setBhkFilter] = useState<Bhk[]>([])
  const [typeFilter, setTypeFilter] = useState<PropertyType[]>([])
  const [filterPanelOpen, setFilterPanelOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [draft, setDraft] = useState<{ lat: number; lng: number } | null>(null)
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null)

  const visibleListings = useMemo(() => {
    return listings.filter((listing) => {
      if (filter !== "all" && listing.kind !== filter) return false
      if (bhkFilter.length > 0 && !bhkFilter.includes(listing.bhk)) return false
      if (typeFilter.length > 0 && !typeFilter.includes(listing.propertyType)) return false
      return true
    })
  }, [listings, filter, bhkFilter, typeFilter])

  const selectedListing = listings.find((listing) => listing.id === selectedId) ?? null

  function toggleBhk(value: Bhk) {
    setBhkFilter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  function toggleType(value: PropertyType) {
    setTypeFilter((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]))
  }

  function handlePublish(listing: Listing) {
    setListings((prev) => [listing, ...prev])
    setDraft(null)
    setSelectedId(listing.id)
    setFlyTarget([listing.lat, listing.lng])
  }

  return (
    <div className="relative h-svh w-full overflow-hidden bg-slate-100">
      <MapView
        listings={visibleListings}
        selectedId={selectedId}
        onSelect={(id) => {
          setSelectedId(id)
          setDraft(null)
        }}
        onPickLocation={(lat, lng) => {
          setSelectedId(null)
          setDraft({ lat, lng })
        }}
        flyTarget={flyTarget}
      />

      <TopBar
        filter={filter}
        onFilterChange={setFilter}
        onToggleFilters={() => setFilterPanelOpen((open) => !open)}
        filtersActive={bhkFilter.length > 0 || typeFilter.length > 0}
      />

      {filterPanelOpen && (
        <FilterPanel
          bhk={bhkFilter}
          propertyType={typeFilter}
          onToggleBhk={toggleBhk}
          onTogglePropertyType={toggleType}
          onClear={() => {
            setBhkFilter([])
            setTypeFilter([])
          }}
          onClose={() => setFilterPanelOpen(false)}
        />
      )}

      {selectedListing && !draft && (
        <ListingDetailCard listing={selectedListing} onClose={() => setSelectedId(null)} />
      )}

      {draft && (
        <PostPropertyFlow lat={draft.lat} lng={draft.lng} onCancel={() => setDraft(null)} onSubmit={handlePublish} />
      )}

      {!draft && (
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[1000] flex justify-center">
          <button
            type="button"
            onClick={() => setDraft({ lat: KOCHI_CENTER[0], lng: KOCHI_CENTER[1] })}
            className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-700"
          >
            <Plus className="size-4" />
            List Your Property
          </button>
        </div>
      )}
    </div>
  )
}
