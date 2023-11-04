import { TypeCartQueryStatus } from './type'
import { createEvent, createStore } from 'effector-next'
import { ICartItem, IUpdateCountCartItem } from 'shared/api'

export const setCart = createEvent<ICartItem[]>()
export const removeCartItem = createEvent<{ partId: number }>()
export const updateCountCartItem = createEvent<IUpdateCountCartItem>()
export const addItemToCart = createEvent<ICartItem>()
export const foo = createEvent<string>()
export const $cart = createStore<ICartItem[]>([])
  .on(setCart, (_, cart) => cart)
  .on(removeCartItem, (state, { partId }) => [
    ...state.filter((item) => item.partId !== partId),
  ])
  .on(addItemToCart, (state, item) => [...state, item])
  .on(updateCountCartItem, (state, { partId, count }) =>
    state.map((item) => (item.partId === partId ? { ...item, count } : item))
  )

export const $cartTotalPrice = $cart.map((state) =>
  state.reduce((a, b) => a + b.price * b.count, 0)
)

export const setCartQueryStatus = createEvent<TypeCartQueryStatus>()
export const $cartQueryStatus = createStore<TypeCartQueryStatus>('start').on(
  setCartQueryStatus,
  (_, status) => status
)
