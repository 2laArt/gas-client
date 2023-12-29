import HeaderBottom from './header-bottom'
import HeaderTop from './header-top'
import { useStore } from 'effector-react'
import { useEffect, type FC } from 'react'
import { $auth } from 'shared/store'
import { $cartQueryStatus, getCartFx } from 'shared/store/cart'
import { $checkedPaymentStatus, checkPayment } from 'shared/store/payment'

export const Header: FC = () => {
  const cartQueryStatus = useStore($cartQueryStatus)
  const checkedPaymentStatus = useStore($checkedPaymentStatus)
  const { userId } = useStore($auth)
  useEffect(() => {
    const paymentId = sessionStorage.getItem('paymentId')
    if (paymentId && !checkedPaymentStatus) checkPayment({ paymentId, userId })
  }, [])
  useEffect(() => {
    if (cartQueryStatus === 'start' && userId) {
      getCartFx(userId)
    }
  }, [userId])

  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}
