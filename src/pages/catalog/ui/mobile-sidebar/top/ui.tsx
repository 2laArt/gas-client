import style from './style.module.scss'
import { type FC } from 'react'

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
        <span>🡰</span>
        <span>{section || 'Filters'}</span>
      </button>
    </div>
  )
}
