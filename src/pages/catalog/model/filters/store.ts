import { setCatalogPriceCb, toggleCheckboxesCb } from './cb'
import type {
  IFiltersStore,
  TypeCatalogStorePrices,
  TypeResetCheckbox,
  TypeToggleCheckbox,
} from './type'
import { createEvent, createStore } from 'effector-next'
import { filterDefault, setAllCheckboxes } from 'pages/catalog/lib'
import { brands } from 'shared/config'

export const toggleCheckboxes = createEvent<TypeToggleCheckbox>()

export const selectAllSectionFilters = createEvent<TypeResetCheckbox>()

export const setDefaultFilters = createEvent()
export const resetCheckboxes = createEvent()

export const setCatalogPrice = createEvent<TypeCatalogStorePrices>()

export const $filters = createStore<IFiltersStore>(filterDefault())
  .on(toggleCheckboxes, toggleCheckboxesCb)
  .on(selectAllSectionFilters, (state, { section }) => ({
    ...state,
    [section]: {
      ...state[section],
      checkboxes: setAllCheckboxes({
        brands: brands[section],
        initState: true,
      }),
    },
    changed: true,
  }))
  .on(setCatalogPrice, setCatalogPriceCb)

  .on(resetCheckboxes, (state) => ({
    ...filterDefault(),
    price: state.price,
    changed: false,
  }))
  .on(setDefaultFilters, (_) => filterDefault())
