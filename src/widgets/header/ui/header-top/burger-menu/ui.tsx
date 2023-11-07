import style from './style.module.scss'
import clsx from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

interface IBurger {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
export const BurgerMenu: FC<IBurger> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
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
