import { items } from './config'
import style from './style.module.scss'
import Link from 'next/link'
import { type FC } from 'react'
import { Icon } from 'shared/ui'

export const PaymentSocial: FC = () => {
  return (
    <div className={style.section}>
      <div className={style.payment}>
        <h6>Payment Methods:</h6>
        {items.payment.map((item) => (
          <Icon type="payment" name={item} />
        ))}
      </div>

      <div className={style.social}>
        <h6>Our socials:</h6>
        {items.social.map((item) => (
          <Link href={item.href} key={item.href}>
            <Icon type="social" name={item.icon} />
          </Link>
        ))}
      </div>
    </div>
  )
}
