import { SelectSort } from './select-sort'
import { SelectedCategories } from './selected-categories'
import style from './style.module.scss'
import clsx from 'clsx'
import { getCheckedCheckboxes } from 'pages/catalog/lib'
import {
  toggleCheckboxes,
  type IFilterChecklist,
  type TypeCheckboxState,
} from 'pages/catalog/model'
import { type FC } from 'react'
import { Dropdown } from 'shared/ui'

interface ICatalogHeader {
  details: IFilterChecklist
  retailer: IFilterChecklist
  resetFilters: VoidFunction
  disabledReset: boolean
  disabledSubmit: boolean
  applyFilters: VoidFunction
}
export const CatalogHeader: FC<ICatalogHeader> = ({
  resetFilters,
  details,
  retailer,
  disabledReset,
  disabledSubmit,
  applyFilters,
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
