import type {
  ICatalogFilterPrice,
  IFilterChecklist,
  TypeCatalogSorting,
  TypeToggleCheckboxes,
} from '../model'
import type { sidebarTitles } from './data'
import type { Event } from 'effector'

type TypeSetPrice = (price: number) => void

export interface IPricingProps {
  setMinPrice: TypeSetPrice
  setMaxPrice: TypeSetPrice
  price: ICatalogFilterPrice
}

export interface ISortingProps {
  sort: string
  setCatalogSort: (sortOption: TypeCatalogSorting) => void
}

export interface ICatalogSidebarProps extends ICatalogProps, IPricingProps {
  sidebarTitles: typeof sidebarTitles
}

export interface ICatalogProps {
  details: IFilterChecklist
  retailer: IFilterChecklist
  resetFilters: VoidFunction
  disabledReset: boolean
  disabledSubmit: boolean
  toggleCheckboxes: Event<TypeToggleCheckboxes>
  applyFilters: VoidFunction
}
