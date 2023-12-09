import { setCatalogPriceCb, toggleCheckboxesCb } from './cb'
import type {
  IFiltersStore,
  TypeCatalogStorePrices,
  TypeToggleCheckboxes,
} from './type'
import { createEvent, createStore } from 'effector-next'
import { filterDefault } from 'pages/catalog/lib'

export const toggleCheckboxes = createEvent<TypeToggleCheckboxes>()
export const resetCheckboxes = createEvent()
export const setCatalogPrice = createEvent<TypeCatalogStorePrices>()

export const $filters = createStore<IFiltersStore>(filterDefault())
  .on(toggleCheckboxes, toggleCheckboxesCb)

  .on(setCatalogPrice, setCatalogPriceCb)

  .on(resetCheckboxes, (state) => ({
    ...filterDefault(),
    price: state.price,
    changed: false,
  }))
