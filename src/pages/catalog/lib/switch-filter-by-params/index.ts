import { type TypeCatalogQueryParams } from '../use-update-query'
import {
  setCatalogPrice,
  setCatalogSorting,
  toggleCheckboxes,
} from 'pages/catalog/model'

export const switchFilterByParams = (query: TypeCatalogQueryParams) => {
  toggleCheckboxes({
    section: 'details',
    checkboxes: (query.parts ?? '').split(','),
  })
  toggleCheckboxes({
    section: 'retailer',
    checkboxes: (query.boiler ?? '').split(','),
  })
  setCatalogPrice({
    newMax: Number(query.priceTo) || undefined,
    newMin: Number(query.priceFrom) || undefined,
  })
  setCatalogSorting(query.first)
}
