export interface IBoilerPart {
  id: number
  name: string
  price: number
  images: string
  in_stock: number
  parts_manufacturer: string
  boiler_manufacturer: string
  vendor_code: string
  description: string
  bestseller: boolean
  new: boolean
  popularity: number
  compatibility: string
}
export interface IBoilerParts {
  count: number
  rows: IBoilerPart[]
}
export type BoilerEndpoints =
  | 'new'
  | 'bestsellers'
  | 'search'
  | `find/${string}`

export interface IFilters {
  boiler?: string[]
  parts?: string[]
  priceFrom?: string
  priceTo?: string
  offset: string
  limit: string
}
