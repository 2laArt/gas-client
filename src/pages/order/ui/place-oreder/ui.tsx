import style from './style.module.scss'
import clsx from 'clsx'
import { useState, type FC } from 'react'
import { type ICartItem } from 'shared/api'
import { formatToCurrency } from 'shared/lib'
import { Button, Checkbox, Title } from 'shared/ui'

interface IPaceOrder {
  isEdit: boolean
  cart: ICartItem[]
  totalPrice: number
  onPayment: VoidFunction
  className?: string
}
export const PlaceOrder: FC<IPaceOrder> = ({
  isEdit,
  cart,
  totalPrice,
  onPayment,
}) => {
  const [isAgreed, setIsAgreed] = useState<boolean>(false)
  return (
    <div className={clsx('card', style.place_order, !isEdit && style.edited)}>
      <Title as="h3" size="large">
        Total
      </Title>
      <div className={style.content}>
        <div>
          <span>Products ({cart.length})</span>
          <span>{formatToCurrency(totalPrice)}</span>
        </div>
        <div>
          <span>Total price </span>
          <span className={style.lg}>{formatToCurrency(totalPrice)}</span>
        </div>
        <div className={style.btn_box}>
          <Button
            disabled={!cart.length || !isAgreed || isEdit}
            onClick={onPayment}
            color="yellow"
            size="big"
            className={style.btn_order}
          >
            Confirm the Order
          </Button>
        </div>
        {!!cart.length && (
          <label className={style.label}>
            <Checkbox
              color="yellow"
              checked={isAgreed}
              onChange={() => setIsAgreed((prev) => !prev)}
            />
            <span>
              <mark>I agree with the terms.</mark>
              Terms of use of the trading platform and refund rules
            </span>
          </label>
        )}
      </div>
    </div>
  )
}
