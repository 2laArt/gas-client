import { toggleCartItem, useIsAddedToCart, type IToggleCart } from '../lib'
import style from './style.module.scss'
import clsx from 'clsx'
import { useState, type FC } from 'react'
import { Button, Icon } from 'shared/ui'

interface ICartToggleBtn extends Omit<IToggleCart, 'isAdded'> {
  size?: 'sm' | 'big'
  className?: string
}
export const CartToggleBtn: FC<ICartToggleBtn> = ({
  size = 'sm',
  partId,
  username,
  className,
}) => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const isAdded = useIsAddedToCart(partId)
  const toggle = () => {
    setSpinner(true)
    toggleCartItem({ isAdded, partId, username }).finally(() => {
      setSpinner(false)
    })
  }
  const isBig = size === 'big'
  return (
    <Button
      className={clsx(style.btn, className)}
      color={isAdded ? 'cyan' : 'yellow'}
      size={size}
      onClick={toggle}
      spinner={{ size: isBig ? 30 : 20, color: 'white' }}
      loading={spinner}
    >
      <span className={clsx(style.icon, isBig && style.icon_m)}>
        <Icon type="common" name={isAdded ? 'added-cart' : 'cart'} />
      </span>
      {isBig && (isAdded ? 'remove' : 'add')}
    </Button>
  )
}
