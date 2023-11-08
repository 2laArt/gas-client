import style from './style.module.scss'
import clsx from 'clsx'
import { FC } from 'react'

interface IBurger {
  isOpen: boolean
  setIsOpen: VoidFunction
}
export const BurgerMenu: FC<IBurger> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      data-include="included"
      onClick={setIsOpen}
      className={clsx(style.burger_menu, isOpen && style.open)}
    >
      <div className={style.burger_box}>
        <span />
        <span />
        <span />
      </div>
    </button>
  )
}
