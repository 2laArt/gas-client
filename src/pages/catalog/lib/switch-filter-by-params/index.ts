import { type TypeCatalogQueryParams } from '../use-update-query'
import {
  setCatalogPrice,
  setCatalogSorting,
  toggleCheckboxes,
} from 'pages/catalog/model'

const f = (str?: string): string[] =>
  (str ? decodeURIComponent(str) : []) as string[]

export const switchFilterByParams = (query: TypeCatalogQueryParams) => {
  toggleCheckboxes({
    section: 'details',
    checkboxes: f(query.parts),
    isMulti: true,
  })
  toggleCheckboxes({
    section: 'retailer',
    checkboxes: f(query.boiler),
    isMulti: true,
  })
  setCatalogPrice({
    newMax: Number(query.priceTo) || undefined,
    newMin: Number(query.priceFrom) || undefined,
  })
  setCatalogSorting(query.first)
}
