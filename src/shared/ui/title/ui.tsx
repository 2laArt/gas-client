import styles from './style.module.scss'
import clsx from 'clsx'
import {
  memo,
  type ComponentProps,
  type ElementType,
  type ReactNode,
} from 'react'

interface TitleOwnProps<E extends ElementType = ElementType> {
  className?: string
  children: ReactNode
  size?: 'small' | 'medium' | 'large' | 'xl'
  as?: E
}

const DEFAULT_ELEMENT: ElementType = 'h1'

export type TitleProps<E extends ElementType> = TitleOwnProps<E> &
  Omit<ComponentProps<E>, keyof TitleOwnProps>

export const Title = <E extends ElementType = typeof DEFAULT_ELEMENT>({
  className,
  children,
  size = 'large',
  as,
  ...props
}: TitleProps<E>) => {
  const Element = as || DEFAULT_ELEMENT

  return (
    <Element className={clsx(styles.title, styles[size], className)} {...props}>
      {children}
    </Element>
  )
}
