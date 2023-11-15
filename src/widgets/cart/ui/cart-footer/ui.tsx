import style from './style.module.scss'
import clsx from 'clsx'
import { type FC } from 'react'
import { formatToCurrency } from 'shared/lib'

export interface ICartFooter {
  totalPrice: number
  footerAbsolute?: boolean
  cartLength: number
  onFooterClick: VoidFunction
  btnText: string
}

export const CartFooter: FC<ICartFooter> = ({
  footerAbsolute,
  btnText,
  totalPrice,
  cartLength,
  onFooterClick,
}) => {
  return (
    <div
      className={clsx('card', style.footer, {
        [style.footer_sticky]: footerAbsolute,
      })}
    >
      <div>
        <span>Total Mount</span>
        <span>{formatToCurrency(totalPrice)}</span>
      </div>

      <button
        className={clsx(style.footer_btn)}
        onClick={onFooterClick}
        disabled={!cartLength}
      >
        {btnText}
      </button>
    </div>
  )
}
