import { FooterNav } from './nav'
import { PaymentSocial } from './payment-social'
import style from './style.module.scss'
import { type FC } from 'react'

export const Footer: FC = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <FooterNav />
        <PaymentSocial />
        <div className={style.copyright}>&#9400; GAS copyright 2023</div>
      </div>
    </div>
  )
}
