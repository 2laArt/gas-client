import style from './style.module.scss'
import clsx from 'clsx'
import { type FC } from 'react'
import { formatToCurrency } from 'shared/lib'
import { Button } from 'shared/ui'

export interface ICartFooter {
  totalPrice: number
  footerAbsolute?: boolean
  cartLength: number
  onFooterClick: VoidFunction
  btnText: string
  className?: string
}

export const CartFooter: FC<ICartFooter> = ({
  footerAbsolute,
  btnText,
  totalPrice,
  cartLength,
  onFooterClick,
  className,
}) => {
  return (
    <div
      className={clsx(style.footer, className, {
        [style.footer_sticky]: footerAbsolute,
      })}
    >
      <div>
        <span>Total Mount</span>
        <span>{formatToCurrency(totalPrice)}</span>
      </div>
      <Button
        color="transparent"
        className={clsx(style.footer_btn)}
        size="medium"
        onClick={onFooterClick}
        disabled={!cartLength}
      >
        {btnText}
      </Button>
    </div>
  )
}
