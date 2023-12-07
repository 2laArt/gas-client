import { type TypeNewQueryParams } from '../use-update-query'
import {
  type ICatalogPrice,
  type IFilterChecklist,
  type IFiltersStore,
  type TypeCheckboxState,
} from 'pages/catalog/model'

const priceToQuery = (price: ICatalogPrice) =>
  price.limit === price.value ? undefined : price.value.toString()

const brandsToQuery = (filter: IFilterChecklist) => {
  const brands = getCheckedCheckboxes(filter.checkboxes)
  return brands.join(',')
}

export const filtersToQuery = (
  filters: Omit<IFiltersStore, 'changed'>
): TypeNewQueryParams => {
  const {
    details,
    price: { max, min },
    retailer,
  } = filters

  return {
    priceFrom: priceToQuery(min),
    priceTo: priceToQuery(max),
    parts: brandsToQuery(details),
    boiler: brandsToQuery(retailer),
    offset: '0',
  }
}
export const getCheckedCheckboxes = (checkboxes: TypeCheckboxState): string[] =>
  Object.entries(checkboxes).reduce((prev, cur) => {
    if (cur[1]) {
      prev.push(cur[0])
    }
    return prev
  }, [] as string[])
