export type ListingKind = "for-rent" | "wanted"
export type FilterValue = "all" | ListingKind

export type PropertyType = "Apartment" | "House" | "Villa" | "Room" | "PG / Shared"
export type Furnishing = "Furnished" | "Semi-furnished" | "Unfurnished"
export type TenantPref = "Family" | "Bachelors" | "Any"
export type Bhk = "1 BHK" | "2 BHK" | "3 BHK" | "4+ BHK"

export interface Listing {
  id: string
  kind: ListingKind
  title: string
  description: string
  price: number
  area: string
  bhk: Bhk
  propertyType: PropertyType
  furnishing: Furnishing
  tenantPref: TenantPref
  lat: number
  lng: number
  postedAt: string
  phone: string
  verified: boolean
  isNew: boolean
}

export const BHK_OPTIONS: Bhk[] = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"]

export const PROPERTY_TYPE_OPTIONS: PropertyType[] = [
  "Apartment",
  "House",
  "Villa",
  "Room",
  "PG / Shared",
]

export const FURNISHING_OPTIONS: Furnishing[] = [
  "Furnished",
  "Semi-furnished",
  "Unfurnished",
]

export const TENANT_OPTIONS: TenantPref[] = ["Family", "Bachelors", "Any"]
