export type TypeCheckboxState = { [key: string]: boolean }

export type TypeFiltersFields = 'retailer' | 'details' | 'price'
export type TypeFiltersFieldsCheckbox = 'retailer' | 'details'
export interface IFilterChecklist {
  title: TypeFiltersFieldsCheckbox
  checkboxes: TypeCheckboxState
}
export interface ICatalogPrice {
  value: number
  limit: number
}
export interface ICatalogFilterPrice {
  min: ICatalogPrice
  max: ICatalogPrice
}
export interface IFiltersStore {
  retailer: IFilterChecklist
  details: IFilterChecklist
  price: ICatalogFilterPrice
  changed: boolean
}

export type TypeToggleCheckboxes = {
  section: TypeFiltersFieldsCheckbox
  checkboxes: string[]
  isMulti?: boolean
}

export type TypeResetCheckbox = Omit<TypeToggleCheckboxes, 'checkboxes'>
export type TypeCatalogStorePrices = {
  newMin?: number
  newMax?: number
}
