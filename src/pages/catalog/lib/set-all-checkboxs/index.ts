import { TypeCheckboxState } from 'pages/catalog/model/filters/type'

interface ICheckboxInitial {
  initState: boolean
  brands: string[]
}
export const setAllCheckboxes = ({
  initState,
  brands,
}: ICheckboxInitial): TypeCheckboxState =>
  brands && Object.fromEntries(brands.map((item) => [item, initState]))
