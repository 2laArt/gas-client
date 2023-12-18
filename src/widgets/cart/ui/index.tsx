import { CartFooter, ICartFooter } from './cart-footer'
import style from './style.module.scss'
import clsx from 'clsx'
import { CartItem } from 'entities/cart-item'
import { CartItemCounter, DeleteCartItem } from 'features/cart-item'
import { FC } from 'react'
import { ICartItem } from 'shared/api'

interface IOrderCartFC extends Omit<ICartFooter, 'className'> {
  cart: ICartItem[]
  classNameList?: string
  classNameFooter?: string
}

export const OrdersCart: FC<IOrderCartFC> = ({
  btnText,
  cartLength,
  footerAbsolute,
  onFooterClick,
  totalPrice,
  cart,
  classNameList,
  classNameFooter,
}) => {
  return (
    <div className={style.cart}>
      <div className={style.cart_box}>
        <div className={style.middle}>
          {!!cart.length ? (
            <div className={clsx(style.cart_list, classNameList)}>
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
        className={classNameFooter}
        btnText={btnText}
        cartLength={cartLength}
        footerAbsolute={footerAbsolute}
        onFooterClick={onFooterClick}
        totalPrice={totalPrice}
      />
    </div>
  )
}
