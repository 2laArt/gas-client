import type {
  IFiltersStore,
  TypeCatalogStorePrices,
  TypeToggleCheckbox,
} from './type'
import { setAllCheckboxes } from 'pages/catalog/lib'
import { brands } from 'shared/config'

export const setCatalogPriceCb = (
  state: IFiltersStore,
  { newMax, newMin }: TypeCatalogStorePrices
) => {
  let {
    max: { value: max, limit },
    min: { value: min },
  } = state.price
  if (newMin) min = +newMin < max ? Number(newMin) : max - 1
  else min = 0
  if (newMax) max = +newMax > +min && +newMax <= limit ? +newMax : min + 1
  else max = limit
  return {
    ...state,
    price: {
      min: {
        ...state.price.min,
        value: min,
      },
      max: {
        ...state.price.max,
        value: max,
      },
    },
    changed: true,
  }
}
export const toggleCheckboxesCb = (
  state: IFiltersStore,
  { section, checkboxes, isState = false }: TypeToggleCheckbox
) => {
  let changedBoxes: { [k: string]: boolean }
  if (checkboxes.length < 1) {
    changedBoxes = setAllCheckboxes({
      brands: brands[section],
      initState: false,
    })
  } else {
    changedBoxes = Object.fromEntries(
      Object.entries(state[section].checkboxes).map((item) =>
        checkboxes.includes(item[0]) ? [item[0], isState] : item
      )
    )
  }
  return {
    ...state,
    [section]: {
      ...state[section],
      checkboxes: changedBoxes,
    },
    changed: true,
  }
}
