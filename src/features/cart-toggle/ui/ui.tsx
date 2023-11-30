import { toggleCartItem, useIsAddedToCart, type IToggleCart } from '../lib'
import style from './style.module.scss'
import clsx from 'clsx'
import { useState, type FC } from 'react'
import { Button, Icon } from 'shared/ui'

interface ICartToggleBtn extends Omit<IToggleCart, 'isAdded'> {
  size?: 'sm' | 'big'
  text?: string
  name: string
}
export const CartToggleBtn: FC<ICartToggleBtn> = ({
  size = 'sm',
  text,
  partId,
  username,
}) => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const isAdded = useIsAddedToCart(partId)
  const toggle = () => {
    setSpinner(true)
    toggleCartItem({ isAdded, partId, username }).finally(() => {
      setSpinner(false)
    })
  }
  return (
    <Button
      className={clsx(style.btn)}
      color={isAdded ? 'cyan' : 'yellow'}
      size={size}
      onClick={toggle}
      spinner={{ size: 20, color: 'white' }}
      loading={spinner}
    >
      <span className={style.icon}>
        <Icon type="common" name={isAdded ? 'added-cart' : 'cart'} />
      </span>
      {text}
    </Button>
  )
}
