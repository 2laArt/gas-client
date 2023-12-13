import { ChangeButtons } from '../../change-buttons'
import { SelectSort } from '../select-sort'
import { type ICatalogHeader } from '../ui'
import style from './style.module.scss'
import { memo, type FC } from 'react'

interface IBottom
  extends Omit<ICatalogHeader, 'retailer' | 'details' | 'toggleCheckboxes'> {}
export const CatalogHeaderBottom: FC<IBottom> = memo(
  ({
    applyFilters,
    disabledReset,
    disabledSubmit,
    resetFilters,
    setOpen,
    sort,
    isMobile,
    setCatalogSort,
  }) => {
    return (
      <div className={style.bottom}>
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
    )
  }
)
