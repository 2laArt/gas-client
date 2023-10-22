import style from './style.module.scss'
import clsx from 'clsx'
import type { CSSProperties, FC } from 'react'

interface SpinnerProps {
  className?: string
  color?: string
  size?: number
  strokeWidth?: number
}

export const Spinner: FC<SpinnerProps> = ({
  className,
  color = '#000',
  size = 30,
  strokeWidth = 3,
}) => (
  <span className={style.box}>
    <span
      className={clsx(style.spinner, className)}
      style={
        {
          '--spinner-size': `${size}px`,
          '--spinner-color': `${color}`,
          '--spinner-stroke': `${strokeWidth}px`,
        } as CSSProperties
      }
    ></span>
  </span>
)
