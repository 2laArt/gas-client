import { type NextRouter } from 'next/router'
import { TypeCatalogSorting } from 'pages/catalog/model'
import { type IFiltersParams } from 'shared/api'

export type TypeCatalogQueryParams = Omit<IFiltersParams, 'limit'> & {
  first: TypeCatalogSorting
}
export type TypeNewQueryParams = Partial<TypeCatalogQueryParams>
export type TypeCatalogRouterQuery = NextRouter & {
  query: TypeCatalogQueryParams
}
export type TypeUpdateQueryParams = (
  newParams: TypeNewQueryParams
) => TypeCatalogQueryParams

export const useUpdatedQuery = (
  router: TypeCatalogRouterQuery
): TypeUpdateQueryParams => {
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
  console.log(params)
  const s: unknown[] = []
  const paramsEntries = Object.entries(params)
  const paramsWithValue = paramsEntries.filter(([key, value]) => !!value)
  // const paramsToQuery = paramsEntries.reduce((state, item) => {
  //   if (item[1] && item[1].length) {
  //     if (Array.isArray(item[1])) state.push([item[0], JSON.stringify(item[1])])
  //     state.push(item as [string, string])
  //   }
  //   return state
  // }, [] as Array<[string, string]>)
  const newQueryParams = Object.fromEntries(
    paramsWithValue
  ) as TypeCatalogQueryParams

  push({ query: newQueryParams }, undefined, { shallow: true })
  return newQueryParams
}
