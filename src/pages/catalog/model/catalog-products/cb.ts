import { type TypeCatalogSorting } from './type'
import { type IBoilerParts } from 'shared/api'

export const sortingProductCatalog = (
  state: IBoilerParts,
  sorting: TypeCatalogSorting
) => {
  switch (sorting) {
    case 'cheap':
      return {
        ...state,
        rows: state.rows.toSorted((a, b) => a.price - b.price),
      }
    case 'expensive':
      return {
        ...state,
        rows: state.rows.toSorted((a, b) => b.price - a.price),
      }
    case 'popular':
      return {
        ...state,
        rows: state.rows.toSorted((a, b) => b.popularity - a.popularity),
      }
    case 'alphabetically':
      const collator = new Intl.Collator('en')
      return {
        ...state,
        rows: state.rows.toSorted((a, b) => collator.compare(a.name, b.name)),
      }
  }
}
