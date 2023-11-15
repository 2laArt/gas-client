import { CartFooter, ICartFooter } from './cart-footer'
import style from './style.module.scss'
import clsx from 'clsx'
import { CartItem } from 'entities/cart-item'
import { CartItemCounter, DeleteCartItem } from 'features/cart-item'
import { FC } from 'react'
import { ICartItem } from 'shared/api'

interface IOrderCartFC extends ICartFooter {
  cart: ICartItem[]
}

export const OrdersCart: FC<IOrderCartFC> = ({
  btnText,
  cartLength,
  footerAbsolute,
  onFooterClick,
  totalPrice,
  cart,
}) => {
  return (
    <div className={style.cart}>
      <div className={style.cart_box}>
        <div className={clsx('card', style.middle)}>
          {!!cart.length ? (
            <div className={style.cart_list}>
              {cart.map((item) => (
                <CartItem
                  CounterItem={CartItemCounter}
                  DeleteItem={DeleteCartItem}
                  {...item}
                  key={item.id}
                />
              ))}
            </div>
          ) : (
            <span>The Cart is Empty</span>
          )}
        </div>
      </div>
      <CartFooter
        btnText={btnText}
        cartLength={cartLength}
        footerAbsolute={footerAbsolute}
        onFooterClick={onFooterClick}
        totalPrice={totalPrice}
      />
    </div>
  )
}
