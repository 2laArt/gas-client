import type { IFilterChecklist, TypeToggleCheckbox } from '../model'
import type { Event } from 'effector'

export interface ICatalogProps {
  details: IFilterChecklist
  retailer: IFilterChecklist
  resetFilters: VoidFunction
  disabledReset: boolean
  disabledSubmit: boolean
  toggleCheckboxes: Event<TypeToggleCheckbox>
  applyFilters: VoidFunction
  isMobile: boolean
}
