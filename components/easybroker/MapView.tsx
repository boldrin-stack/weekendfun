"use client"

import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { useEffect, useMemo } from "react"
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet"
import { KOCHI_CENTER, formatPricePin } from "@/lib/easybroker/mock-data"
import type { Listing } from "@/lib/easybroker/types"

function buildPinIcon(listing: Listing, isSelected: boolean) {
  const color = listing.kind === "for-rent" ? "#2563eb" : "#f59e0b"
  return L.divIcon({
    html: `<div class="eb-pin${isSelected ? " eb-pin-selected" : ""}" style="background:${color}">${formatPricePin(
      listing.price
    )}</div>`,
    className: "eb-pin-wrap",
    iconSize: [1, 1],
    iconAnchor: [0, 0],
  })
}

function ClickCatcher({ onPick }: { onPick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(event) {
      onPick(event.latlng.lat, event.latlng.lng)
    },
  })
  return null
}

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap()
  useEffect(() => {
    if (target) {
      map.flyTo(target, Math.max(map.getZoom(), 14), { duration: 0.6 })
    }
  }, [target, map])
  return null
}

export default function MapView({
  listings,
  selectedId,
  onSelect,
  onPickLocation,
  flyTarget,
}: {
  listings: Listing[]
  selectedId: string | null
  onSelect: (id: string) => void
  onPickLocation: (lat: number, lng: number) => void
  flyTarget: [number, number] | null
}) {
  const icons = useMemo(
    () => new Map(listings.map((listing) => [listing.id, buildPinIcon(listing, listing.id === selectedId)])),
    [listings, selectedId]
  )

  return (
    <MapContainer center={KOCHI_CENTER} zoom={12} className="h-full w-full" zoomControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ClickCatcher onPick={onPickLocation} />
      <FlyTo target={flyTarget} />
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={[listing.lat, listing.lng]}
          icon={icons.get(listing.id)}
          eventHandlers={{ click: () => onSelect(listing.id) }}
        />
      ))}
    </MapContainer>
  )
}
