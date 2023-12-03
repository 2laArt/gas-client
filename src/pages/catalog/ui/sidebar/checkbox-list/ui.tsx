import style from './style.module.scss'
import clsx from 'clsx'
import {
  selectAllSectionFilters,
  type TypeCheckboxState,
  type TypeFiltersFieldsCheckbox,
  type TypeToggleCheckbox,
} from 'pages/catalog/model'
import { type FC } from 'react'

interface ICheckboxList {
  section: TypeFiltersFieldsCheckbox
  selectedCheckbox: TypeCheckboxState
  setSelectedCheckboxes: (
    checkboxes: string[],
    isState: boolean
  ) => TypeToggleCheckbox
  className?: string
}
export const CheckboxList: FC<ICheckboxList> = ({
  section,
  selectedCheckbox,
  setSelectedCheckboxes,
  className,
}) => {
  return (
    <div>
      <button
        className={style.select_all}
        onClick={() => selectAllSectionFilters({ section })}
      >
        select all
      </button>
      <ul className={clsx('small_scroll', className)}>
        {Object.keys(selectedCheckbox).map((checkbox) => (
          <li className={style.li} key={checkbox}>
            {/* 
						TODO: CREATE CUSTOM CHECKBOX
						*/}
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  setSelectedCheckboxes([checkbox], !selectedCheckbox[checkbox])
                }
                checked={selectedCheckbox[checkbox]}
              />
              {checkbox}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
