import type {
  IFiltersStore,
  TypeCatalogStorePrices,
  TypeToggleCheckboxes,
} from './type'

export const setCatalogPriceCb = (
  state: IFiltersStore,
  { newMax, newMin }: TypeCatalogStorePrices
) => {
  let {
    max: { value: max, limit },
    min: { value: min },
  } = state.price
  if (newMin) min = Number(newMin) < max ? Number(newMin) : max - 1
  else min = 0
  if (newMax)
    max =
      Number(newMax) > Number(min) && Number(newMax) <= limit
        ? Number(newMax)
        : min + 1
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
  { section, checkboxes }: TypeToggleCheckboxes
) => {
  const isSingle = checkboxes.length === 1
  const newState = { ...state[section].checkboxes }

  if (isSingle && checkboxes[0] in newState) {
    newState[checkboxes[0]] = !newState[checkboxes[0]]
  } else {
    for (let key in newState) {
      if (checkboxes.includes(key)) newState[key] = true
      else newState[key] = false
    }
  }

  return {
    ...state,
    [section]: {
      ...state[section],
      checkboxes: newState,
    },
    changed: true,
  }
}
