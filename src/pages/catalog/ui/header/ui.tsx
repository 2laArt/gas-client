import { ChangeButtons } from '../change-buttons'
import { ICatalogProps } from '../type'
import { SelectSort } from './select-sort'
import { SelectedCategories } from './selected-categories'
import style from './style.module.scss'
import clsx from 'clsx'
import { getCheckedCheckboxes } from 'pages/catalog/lib'
import { type TypeCheckboxState } from 'pages/catalog/model'
import { type FC } from 'react'
import { Dropdown } from 'shared/ui'

export const CatalogHeader: FC<ICatalogProps> = ({
  resetFilters,
  details,
  retailer,
  disabledReset,
  disabledSubmit,
  applyFilters,
  isMobile,
  toggleCheckboxes,
}) => {
  const checkedBrands = (boxes: TypeCheckboxState) =>
    !!getCheckedCheckboxes(boxes).length
  return (
    <div className={clsx('card', style.header)}>
      <Dropdown isOpen={checkedBrands(retailer.checkboxes)}>
        <SelectedCategories
          title={retailer.title}
          isMobile={isMobile}
          checkboxes={retailer.checkboxes}
          resetFilter={(checkboxes) =>
            toggleCheckboxes({ section: retailer.title, checkboxes })
          }
        />
      </Dropdown>

      <Dropdown isOpen={checkedBrands(details.checkboxes)}>
        <SelectedCategories
          isMobile={isMobile}
          title={details.title}
          checkboxes={details.checkboxes}
          resetFilter={(checkboxes) =>
            toggleCheckboxes({ section: details.title, checkboxes })
          }
        />
      </Dropdown>

      <div className={style.header_bottom}>
        <div className={style.btns}>
          <ChangeButtons
            btnTop={{
              title: 'Apply Filters',
              disabled: disabledSubmit,
              onClick: applyFilters,
            }}
            btnBottom={{
              disabled: disabledReset,
              title: 'Reset Filters',
              onClick: resetFilters,
            }}
          />
        </div>
        {/*  */}
        <div className={style.footer}>
          {isMobile && (
            <button className={style.filter} onClick={() => {}}>
              <span>Δ</span> Filters
            </button>
          )}
          <SelectSort />
        </div>
      </div>
    </div>
  )
}
