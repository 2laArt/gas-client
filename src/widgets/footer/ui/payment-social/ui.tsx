import { items } from './data'
import style from './style.module.scss'
import Link from 'next/link'
import { useMemo, type FC } from 'react'
import { Icon } from 'shared/ui'

export const PaymentSocial: FC = () => {
  const Payment = useMemo(
    () =>
      items.payment.map((item) => (
        <Icon type="payment" name={item} key={item} />
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.payment]
  )
  const Social = useMemo(
    () =>
      items.social.map((item) => (
        <Link href={item.href} key={item.href} target="_blank">
          <Icon type="social" name={item.icon} />
        </Link>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items.social]
  )
  return (
    <div className={style.section}>
      <div className={style.payment}>
        <h6>Payment Methods:</h6>
        {Payment}
      </div>

      <div className={style.social}>
        <h6>Our socials:</h6>
        {Social}
      </div>
    </div>
  )
}
