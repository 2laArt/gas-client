import { TypeCatalogSorting } from 'pages/catalog/model'

export const sortOptions: { value: TypeCatalogSorting; text: string }[] = [
  {
    value: 'cheap',
    text: 'First Cheap',
  },
  {
    value: 'expensive',
    text: 'First Expensive',
  },
  {
    value: 'popular',
    text: 'By Popularity',
  },
  {
    value: 'alphabetically',
    text: 'By Alphabet',
  },
]
