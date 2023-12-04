import style from './style.module.scss'
import clsx from 'clsx'
import { useState, type FC, type PropsWithChildren } from 'react'
import { Dropdown } from 'shared/ui'

interface IAccordion extends PropsWithChildren {
  title: string
  defaultIsOpen?: boolean
}
export const Accordion: FC<IAccordion> = ({
  title,
  defaultIsOpen = true,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultIsOpen)
  return (
    <div className={style.accordion}>
      <button
        className={clsx(style.head, isOpen && style.open)}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </button>
      <Dropdown isOpen={isOpen} className={style.drop}>
        {children}
      </Dropdown>
    </div>
  )
}
