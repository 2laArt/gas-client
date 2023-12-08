import { sortingProductCatalog } from './cb'
import { type TypeCatalogSorting } from './type'
import { createEffect, createEvent, createStore } from 'effector'
import { toast } from 'react-toastify'
import {
  boilerService,
  type IBoilerParts,
  type IFiltersParams,
} from 'shared/api'

export const setCatalogSorting = createEvent<TypeCatalogSorting>()
export const fetchCatalogProductsFx = createEffect(
  async (filters: IFiltersParams) => {
    try {
      return (await boilerService.filters(filters)).data
    } catch (e) {
      toast.error((e as Error).message)
    }
  }
)
export const $catalogProducts = createStore<IBoilerParts>({
  rows: [],
  count: 0,
} as IBoilerParts)
  .on(fetchCatalogProductsFx.doneData, (_, products) => products)
  .on(setCatalogSorting, sortingProductCatalog)
