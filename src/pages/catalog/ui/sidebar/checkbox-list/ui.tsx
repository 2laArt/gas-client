import style from './style.module.scss'
import clsx from 'clsx'
import { Event } from 'effector'
import {
  TypeToggleCheckboxes,
  type TypeCheckboxState,
  type TypeFiltersFieldsCheckbox,
} from 'pages/catalog/model'
import { type FC } from 'react'
import { brands } from 'shared/config'

interface ICheckboxList {
  section: TypeFiltersFieldsCheckbox
  checkboxes: TypeCheckboxState
  toggleCheckboxes: Event<TypeToggleCheckboxes>
  className?: string
}
export const CheckboxList: FC<ICheckboxList> = ({
  section,
  checkboxes,
  toggleCheckboxes,
  className,
}) => {
  const toggle = (checkbox: string) => {
    toggleCheckboxes({ section: section, checkboxes: [checkbox] })
  }
  const resetAll = () => {
    toggleCheckboxes({ section: section, checkboxes: [] })
  }
  const selectAll = () => {
    toggleCheckboxes({ section: section, checkboxes: brands[section] })
  }
  return (
    <div>
      <div className={style.btns}>
        <button onClick={selectAll}>select all</button>
        <button onClick={resetAll}>reset all</button>
      </div>
      <ul className={clsx('small_scroll', style.ul, className)}>
        {Object.keys(checkboxes).map((checkbox) => (
          <li className={style.li} key={checkbox}>
            {/* 
						TODO: CREATE CUSTOM CHECKBOX
						*/}
            <label>
              <input
                type="checkbox"
                onChange={() => toggle(checkbox)}
                checked={checkboxes[checkbox]}
              />
              {checkbox}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
