import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import { useEffect, useState, type FC } from 'react'
import { useClickOutside } from 'shared/lib'
import { paths } from 'shared/routing'
import { $auth, $cart, $cartTotalPrice } from 'shared/store'
import { Dropdown, Icon } from 'shared/ui'
import { OrdersCart } from 'widgets/cart'

export const HeaderCart: FC = () => {
  const { ref, isOpen, setIsOpen } = useClickOutside(false)
  const cart = useStore($cart)
  const user = useStore($auth)
  const totalPrice = useStore($cartTotalPrice)
  const router = useRouter()
  const goToCart = () => router.push(paths.order)
  const [isCartPage, setIsCartPage] = useState<boolean>()
  useEffect(() => {
    setIsCartPage(router.pathname === paths.order)
  }, [router.pathname])
  return (
    <div ref={ref} className={style.cart}>
      <button
        className={style.cart_btn}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className={style.cart_icon}>
          <Icon type="common" name={'cart'} />
        </span>
      </button>
      <Dropdown
        isOpen={isOpen && !!user.username && !isCartPage}
        className={clsx('small_scroll', 'card', style.cart_drop)}
      >
        <div className={clsx(style.cart_header)}>
          <span className={style.cart_header_icon}>
            <Icon type="common" name={!!cart.length ? 'added-cart' : 'cart'} />
          </span>
          Orders Cart
        </div>
        <OrdersCart
          cart={cart}
          btnText="Go to Cart"
          cartLength={cart.length}
          onFooterClick={goToCart}
          totalPrice={totalPrice}
          footerAbsolute
        />
      </Dropdown>
    </div>
  )
}
