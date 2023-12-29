import { PlaceOrder } from './place-oreder'
import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { useLayoutEffect, useState } from 'react'
import { $auth, $cart, $cartTotalPrice, paymentFx, setMeta } from 'shared/store'
import { Icon, Title } from 'shared/ui'
import { OrdersCart } from 'widgets/cart'

export const Order: NextPage = () => {
  const cart = useStore($cart)
  const { email } = useStore($auth)
  const totalPrice = useStore($cartTotalPrice)
  const [isEdit, setEdit] = useState<boolean>(true)
  const router = useRouter()
  const onPayment = () =>
    paymentFx({ description: email, router, amount: totalPrice })

  useLayoutEffect(() => {
    setMeta({
      title: 'The Order',
      description: 'Confirmation and Purchase of Goods',
    })
  }, [])
  return (
    <div className={clsx(style.order)}>
      <div className={style.order_box}>
        <div className={clsx('card', style.header)}>
          <Title className={style.title} size="large">
            <span className={style.icon_cart}>
              <Icon
                type="common"
                name={!!cart.length ? 'added-cart' : 'cart'}
              />
            </span>
            <span>The Order</span>
          </Title>
          <button
            disabled={!cart.length}
            onClick={() => setEdit((prev) => !prev)}
          >
            <span className={style.edit_icon}>
              <Icon type="common" name="pen" />
            </span>
            <span className={style.edit_text}>Edit</span>
          </button>
        </div>
        <div className={clsx(style.drop, isEdit && style.drop_open)}>
          <div className={style.drop_box}>
            <OrdersCart
              classNameList="card"
              classNameFooter="card"
              btnText="Place to Order"
              cart={cart}
              cartLength={cart.length}
              onFooterClick={() => setEdit(false)}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
      <PlaceOrder
        isEdit={isEdit}
        cart={cart}
        totalPrice={totalPrice}
        onPayment={onPayment}
      />
    </div>
  )
}
