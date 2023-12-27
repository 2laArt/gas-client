import { LogoElement } from './logo'
import style from './style.module.scss'
import { type NextPage } from 'next'

export const Loading: NextPage = () => {
  return (
    <div className={style.loading}>
      <span className={style.icon}>
        <div className={style.text}>Loading ...</div>
        <LogoElement />
      </span>
    </div>
  )
}
