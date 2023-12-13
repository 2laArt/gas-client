import type { ICatalogProps, ISortingProps } from '../type'
import { CatalogHeaderBottom } from './bottom/ui'
import { SelectedCategories } from './selected-categories'
import style from './style.module.scss'
import clsx from 'clsx'
import { getCheckedCheckboxes } from 'pages/catalog/lib'
import { type TypeCheckboxState } from 'pages/catalog/model'
import { useCallback, type FC } from 'react'
import { Dropdown } from 'shared/ui'

export interface ICatalogHeader extends ICatalogProps, ISortingProps {
  setOpen: VoidFunction
  isMobile: boolean
}

export const CatalogHeader: FC<ICatalogHeader> = ({
  details,
  retailer,
  toggleCheckboxes,
  isMobile,
  ...props
}) => {
  const checkedBrands = useCallback(
    (boxes: TypeCheckboxState) => !!getCheckedCheckboxes(boxes).length,
    []
  )
  const toggleDetails = useCallback(
    (checkboxes: string[]) =>
      toggleCheckboxes({ section: details.title, checkboxes }),
    []
  )
  const toggleRetailer = useCallback(
    (checkboxes: string[]) =>
      toggleCheckboxes({ section: retailer.title, checkboxes }),
    []
  )
  return (
    <div className={clsx('card', style.header)}>
      <Dropdown isOpen={checkedBrands(retailer.checkboxes)}>
        <SelectedCategories
          title={retailer.title}
          isMobile={isMobile}
          checkboxes={retailer.checkboxes}
          resetFilter={toggleRetailer}
        />
      </Dropdown>

      <Dropdown isOpen={checkedBrands(details.checkboxes)}>
        <SelectedCategories
          isMobile={isMobile}
          title={details.title}
          checkboxes={details.checkboxes}
          resetFilter={toggleDetails}
        />
      </Dropdown>

      <CatalogHeaderBottom {...props} isMobile={isMobile} />
    </div>
  )
}
{
  /* <div className={style.header_bottom}>
        <div className={style.bottom_left}>
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
        <div className={style.bottom_right}>
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
       */
}
