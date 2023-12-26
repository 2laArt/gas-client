import style from './style.module.scss'
import { type NextPage } from 'next'
import { Icon } from 'shared/ui'

export const Loading: NextPage = () => {
  return (
    <div className={style.loading}>
      <span className={style.icon}>
        <div className={style.text}>Loading ...</div>
        <Icon type="common" name="logo" />
      </span>
    </div>
  )
}
