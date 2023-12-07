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

export interface IFiltersParams {
  boiler?: string
  parts?: string
  priceFrom?: string
  priceTo?: string
  offset: string
  limit: string
}
