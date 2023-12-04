import style from './style.module.scss'
import { getCheckedCheckboxes } from 'pages/catalog/lib'
import {
  type IFilterChecklist,
  type TypeToggleCheckbox,
} from 'pages/catalog/model'
import { type FC } from 'react'
import { Icon } from 'shared/ui'

interface ISelectedCategories extends IFilterChecklist {
  resetFilter: (checkbox: string[]) => TypeToggleCheckbox
}
export const SelectedCategories: FC<ISelectedCategories> = ({
  checkboxes,
  title,
  resetFilter,
}) => {
  return (
    <div className={style.categories}>
      <h4 className={style.categories_title}>{title}:</h4>
      <div className={style.categories_items}>
        {getCheckedCheckboxes(checkboxes).map((category, idx) => (
          <span key={idx} className={style.categories_item}>
            {category}
            <button
              className={style.close}
              onClick={() => resetFilter([category])}
            >
              <Icon type="common" name="close" />
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}
