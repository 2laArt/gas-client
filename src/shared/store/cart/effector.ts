import {
  addItemToCart,
  removeCartItem,
  setCart,
  setCartQueryStatus,
  updateCountCartItem,
} from './store'
import { createEffect } from 'effector'
import { toast } from 'react-toastify'
import { IAddToCart, IUpdateCountCartItem, cartService } from 'shared/api'

export const getCartFx = createEffect(async (userId: number) => {
  try {
    setCartQueryStatus('process')
    const { data } = await cartService.getCart(userId)
    setCart(data)
    return data
  } catch (error) {
    toast.error((error as Error).message)
  } finally {
    setCartQueryStatus('finished')
  }
})
export const addToCartFx = createEffect(async (requestData: IAddToCart) => {
  try {
    const { data } = await cartService.addToCart(requestData)
    addItemToCart(data)
    return data
  } catch (error) {
    toast.error((error as Error).message)
  }
})
export const updateCountCartItemFx = createEffect(
  async (requestData: IUpdateCountCartItem) => {
    try {
      const { data } = await cartService.updateCount(requestData)
      updateCountCartItem(requestData)
      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
export const deleteOneFromCartFx = createEffect(async (partId: number) => {
  try {
    const data = await cartService.deleteOneFromCart(partId)
    removeCartItem({ partId })
    return data
  } catch (error) {
    toast.error((error as Error).message)
  }
})
export const deleteAllCartFx = createEffect(async (userId: number) => {
  try {
    const data = await cartService.deleteAll(userId)
    setCart([])
    return data
  } catch (error) {
    toast.error((error as Error).message)
  }
})
