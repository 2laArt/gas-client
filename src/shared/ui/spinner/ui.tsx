import style from './style.module.scss'
import clsx from 'clsx'
import type { CSSProperties, FC } from 'react'
import { COLORS } from 'shared/config'

export interface SpinnerProps {
  className?: string
  color?: keyof typeof COLORS
  size?: number
  strokeWidth?: number
}
export const Spinner: FC<SpinnerProps> = ({
  className,
  color,
  size = 30,
  strokeWidth = 3,
}) => (
  <span className={style.box}>
    <span
      className={clsx(style.spinner, className)}
      style={
        {
          '--spinner-size': `${size}px`,
          '--spinner-color': `${color && COLORS[color]}`,
          '--spinner-stroke': `${strokeWidth}px`,
          [style.default]: !color,
        } as CSSProperties
      }
    ></span>
  </span>
)
