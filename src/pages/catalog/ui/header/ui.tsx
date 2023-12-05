import clsx from 'clsx'
import { type Event } from 'effector'
import { getCheckedCheckboxes } from 'pages/catalog/lib'
import {
  type IFilterChecklist,
  type TypeCheckboxState,
  type TypeToggleCheckbox,
} from 'pages/catalog/model'
import { type FC } from 'react'
import { Dropdown } from 'shared/ui'
import { SelectSort } from './select-sort'
import { SelectedCategories } from './selected-categories'
import style from './style.module.scss'

interface ICatalogHeader {
  details: IFilterChecklist
  retailer: IFilterChecklist
  resetFilters: VoidFunction
  disabledReset: boolean
  disabledSubmit: boolean
  toggleCheckboxes: Event<TypeToggleCheckbox>
  applyFilters: VoidFunction
}
export const CatalogHeader: FC<ICatalogHeader> = ({
  resetFilters,
  details,
  retailer,
  disabledReset,
  disabledSubmit,
  applyFilters,
  toggleCheckboxes
}) => {
  const checkedBrands = (boxes: TypeCheckboxState) =>
    !!getCheckedCheckboxes(boxes).length
  return (
    <div className={clsx('card', style.header)}>
      <Dropdown isOpen={checkedBrands(retailer.checkboxes)}>
        <SelectedCategories
          title={retailer.title}
          checkboxes={retailer.checkboxes}
          resetFilter={(checkboxes) =>
            toggleCheckboxes({ section: retailer.title, checkboxes })
          }
        />
      </Dropdown>

      <Dropdown isOpen={checkedBrands(details.checkboxes)}>
        <SelectedCategories
          title={details.title}
          checkboxes={details.checkboxes}
          resetFilter={(checkboxes) =>
            toggleCheckboxes({ section: details.title, checkboxes })
          }
        />
      </Dropdown>
      <div className={style.header_bottoms}>
        <div>
          <button onClick={() => resetFilters()} disabled={disabledReset}>
            Reset Filters
          </button>
          <button onClick={applyFilters} disabled={disabledSubmit}>
            Apply Filters
          </button>
        </div>
        <SelectSort />
      </div>
    </div>
  )
}
