import { getCheckedCheckboxes } from '../get-checked-checkboxes'
import { NextRouter } from 'next/router'
import {
  type ICatalogPrice,
  type IFilterChecklist,
  type IFiltersStore,
} from 'pages/catalog/model'
import { type IFiltersParams } from 'shared/api'
import { type ICatalogQueryParams } from 'shared/routing'

export type TypeCatalogRouterQuery = NextRouter & {
  query: ICatalogQueryParams
}

export const updatedQueryParams = (
  query: ICatalogQueryParams,
  filters: IFiltersStore
) => {
  const queryEntries = Object.entries(query)
  const filtersEntries = Object.entries(getActiveFilters(filters))
  const queryFilters = filtersEntries.reduce((prev, next) => {
    if (!!next[1]) {
      prev.push([next[0], encodeURIComponent(next[1] as string)])
    }
    return prev
  }, [] as unknown[])
  const uniqueKeys = [...new Map(Object.assign(queryEntries, queryFilters))]
  const queryParams = Object.fromEntries(uniqueKeys.filter((item) => !!item[1]))
  return queryParams
}

export const getActiveFilters = (
  filters: Omit<IFiltersStore, 'changed'>
): Omit<IFiltersParams, 'offset' | 'limit'> => {
  const {
    details,
    price: { max, min },
    retailer,
  } = filters
  const priceToQuery = (price: ICatalogPrice) =>
    price.limit === price.value ? undefined : price.value.toString()

  const brandsToQuery = (filter: IFilterChecklist) => {
    const brands = getCheckedCheckboxes(filter.checkboxes)
    return !!brands.length ? brands : undefined
  }
  return {
    priceFrom: priceToQuery(min),
    priceTo: priceToQuery(max),
    parts: brandsToQuery(details),
    boiler: brandsToQuery(retailer),
  }
}
