import { Spinner, SpinnerProps } from '../spinner'
import style from './style.module.scss'
import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  loading?: boolean
  rounded?: boolean
  auth?: boolean
  disabled?: boolean
  color?: 'cyan' | 'yellow' | 'blue' | 'transparent'
  size?: 'sm' | 'regular' | 'medium' | 'big'
  spinner?: SpinnerProps
  disabledStyle?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  auth,
  rounded,
  loading,
  className,
  color = 'blue',
  size = 'regular',
  spinner = { size: 15 },
  disabled,
  disabledStyle,
  ...props
}) => {
  return (
    <button
      className={clsx(
        style.button,
        style[color],
        style[size],
        {
          [style.auth]: auth,
          [style.rounded]: rounded,
          [style.disabled]: disabledStyle,
        },

        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && <Spinner {...spinner} />}
      <span className={clsx(loading && style.opacity)}>{children}</span>
    </button>
  )
}
