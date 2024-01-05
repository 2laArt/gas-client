import style from './style.module.scss'
import clsx from 'clsx'
import { ReactNode, useState, type FC, type PropsWithChildren } from 'react'
import { Dropdown } from 'shared/ui'

interface IAccordion extends PropsWithChildren {
  title: ReactNode | string
  defaultOpen?: boolean
  className?: string
}
export const Accordion: FC<IAccordion> = ({
  title,
  defaultOpen = true,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen)
  return (
    <div className={clsx(style.accordion, className)}>
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
