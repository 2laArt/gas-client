import style from './style.module.scss'
import { type FC } from 'react'
import { Icon } from 'shared/ui'

interface ITopSide {
  comeback: () => void
  section: string
  resetFilters: () => void
  disabledReset: boolean
}
export const MobileTopSide: FC<ITopSide> = ({
  comeback,
  resetFilters,
  section,
  disabledReset,
}) => {
  return (
    <div className={style.top_btns}>
      <button onClick={comeback}>
        <span className={style.icon}>
          <Icon type="common" name="arrow-back" />
        </span>
        <span>{section || 'Filters'}</span>
      </button>
    </div>
  )
}
