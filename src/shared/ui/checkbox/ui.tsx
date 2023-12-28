import style from './style.module.scss'
import { CSSProperties, InputHTMLAttributes, type FC } from 'react'
import { COLORS } from 'shared/config'

interface ICheckbox
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'normal' | 'big'
  color?: 'blue' | 'yellow' | 'tomato'
  className?: string
}

export const Checkbox: FC<ICheckbox> = ({
  color = 'blue',
  size = 'normal',
  ...props
}) => {
  const sizes = {
    normal: '20px',
    big: '40px',
  }
  return (
    <input
      type="checkbox"
      className={style.checkbox}
      style={
        {
          '--color': `${COLORS[color as keyof typeof COLORS]}`,
          '--size': sizes[size as keyof typeof sizes],
        } as CSSProperties
      }
      {...props}
    />
  )
}
