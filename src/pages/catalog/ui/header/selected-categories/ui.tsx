import style from './style.module.scss'
import { getCheckedCheckboxes } from 'pages/catalog/lib'
import {
  type IFilterChecklist,
  type TypeToggleCheckbox,
} from 'pages/catalog/model'
import { useMemo, type FC } from 'react'
import { Icon } from 'shared/ui'

interface ISelectedCategories extends IFilterChecklist {
  resetFilter: (checkbox: string[]) => TypeToggleCheckbox
  isMobile: boolean
}
export const SelectedCategories: FC<ISelectedCategories> = ({
  checkboxes,
  title,
  resetFilter,
  isMobile,
}) => {
  const chips = useMemo(
    () =>
      getCheckedCheckboxes(checkboxes).map((category, idx) =>
        isMobile ? (
          <button
            key={idx}
            className={style.categories_item}
            onClick={() => resetFilter([category])}
          >
            {category}
          </button>
        ) : (
          <span key={idx} className={style.categories_item}>
            {category}
            <button
              className={style.close}
              onClick={() => resetFilter([category])}
            >
              <Icon type="common" name="close" />
            </button>
          </span>
        )
      ),
    [checkboxes, isMobile, resetFilter]
  )
  return (
    <div className={style.categories}>
      <h4 className={style.categories_title}>{title}:</h4>
      <div className={style.categories_items}>{chips}</div>
    </div>
  )
}
