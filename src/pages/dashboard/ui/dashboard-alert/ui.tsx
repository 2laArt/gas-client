import style from './style.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { type FC } from 'react'
import { formatToCurrency } from 'shared/lib'
import { Button, Icon } from 'shared/ui'

interface IDashboardAlert {
  count: number
  totalPrice: number
  closeAlert: () => void
}
export const DashboardAlert: FC<IDashboardAlert> = ({
  count,
  closeAlert,
  totalPrice,
}) => {
  const textMessage = count === 1 ? 'product' : 'products'
  return (
    <div className={clsx('card', style.alert)}>
      <div className={style.alert_info}>
        <div>
          There are {count} {textMessage} in the basket
        </div>
        <div>Total Price: {formatToCurrency(totalPrice)}</div>
      </div>
      <div className={style.alert_btns}>
        <Link href="/cart">go to cart</Link>
        <Link href="/cart">place an order</Link>
      </div>
      <Button onClick={closeAlert} className={style.close} color="transparent">
        <span>
          <Icon type="common" name="close" />
        </span>
      </Button>
    </div>
  )
}
