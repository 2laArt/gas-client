import { type NextRouter } from 'next/router'
import { type IFiltersParams } from 'shared/api'

export type TypeCatalogQueryParams = Omit<IFiltersParams, 'limit'> & {
  first: string
}
export type TypeNewQueryParams = Partial<TypeCatalogQueryParams>
export type TypeCatalogRouterQuery = NextRouter & {
  query: TypeCatalogQueryParams
}

export const useUpdatedQuery = (router: TypeCatalogRouterQuery) => {
  return (newParams: TypeNewQueryParams) => updateQueryParams(router, newParams)
}
const updateQueryParams = (
  { query, push }: TypeCatalogRouterQuery,
  newParams: TypeNewQueryParams
): TypeCatalogQueryParams => {
  const params = Object.assign(
    { offset: '0', first: 'popular' },
    query,
    newParams
  )
  const paramsEntries = Object.entries(params)
  const paramsWithValue = paramsEntries.filter(([key, value]) => !!value)
  const newQueryParams = Object.fromEntries(
    paramsWithValue
  ) as TypeCatalogQueryParams

  push({ query: newQueryParams })
  return newQueryParams
}
