import { type TypeCatalogQueryParams } from '../use-update-query'

const prepareToCompare = (arr: string): string =>
  arr.toLowerCase().split(',').sort().join(',')

const compareParams = (a?: string, b?: string): boolean =>
  prepareToCompare(a ?? '') === prepareToCompare(b ?? '')

export const useIsChangedFilters = (
  query: Omit<TypeCatalogQueryParams, 'offset' | 'first'>,
  filters: Partial<TypeCatalogQueryParams>
) => {
  for (let keyProp in filters) {
    const filter = filters[keyProp as keyof typeof filters]
    const param = query[keyProp as keyof typeof query]
    const notEqual = !compareParams(filter, param)
    if (notEqual) return false
  }
  return true
}
