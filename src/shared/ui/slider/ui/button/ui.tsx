import styles from './style.module.scss'
import clsx from 'clsx'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Icon } from 'shared/ui'

interface SliderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
  ({ className }, ref) => (
    <button className={clsx(styles.btn, className)} ref={ref}>
      <span>
        <Icon type="common" name="chevron" />
      </span>
    </button>
  )
)
