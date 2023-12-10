import { ChangeButtons } from '../change-buttons'
import type { ICatalogProps, ISortingProps } from '../type'
import { SelectSort } from './select-sort'
import { SelectedCategories } from './selected-categories'
import style from './style.module.scss'
import clsx from 'clsx'
import { getCheckedCheckboxes } from 'pages/catalog/lib'
import { type TypeCheckboxState } from 'pages/catalog/model'
import { type FC } from 'react'
import { Dropdown } from 'shared/ui'

interface ICatalogHeader extends ICatalogProps, ISortingProps {
  setOpen: VoidFunction
  isMobile: boolean
}

export const CatalogHeader: FC<ICatalogHeader> = ({
  resetFilters,
  details,
  retailer,
  disabledReset,
  disabledSubmit,
  applyFilters,
  isMobile,
  toggleCheckboxes,
  setCatalogSort,
  sort,
  setOpen,
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
            <button
              data-include="included"
              className={style.filter}
              onClick={setOpen}
            >
              <span>Δ</span> Filters
            </button>
          )}
          <SelectSort setCatalogSort={setCatalogSort} sort={sort} />
        </div>
      </div>
    </div>
  )
}
