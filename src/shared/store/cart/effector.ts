import {
  addItemToCart,
  removeCartItem,
  setCart,
  setCartQueryStatus,
  updateCountCartItem,
} from './store'
import { createEffect } from 'effector'
import { toast } from 'react-toastify'
import {
  IAddToCart,
  ICartItem,
  IUpdateCountCartItem,
  cartService,
} from 'shared/api'

export const getCartFx = createEffect(async (userId: number) => {
  try {
    setCartQueryStatus('process')
    const response: ICartItem[] = await cartService.getCart(userId)
    setCart(response)
    return response
  } catch (error) {
    toast.error((error as Error).message)
  } finally {
    setCartQueryStatus('finished')
  }
})
export const addToCartFx = createEffect(async (requestData: IAddToCart) => {
  try {
    const response: ICartItem = await cartService.addToCart(requestData)
    addItemToCart(response)
    return response
  } catch (error) {
    toast.error((error as Error).message)
  }
})
export const updateCountCartItemFx = createEffect(
  async (requestData: IUpdateCountCartItem) => {
    try {
      const response: ICartItem = await cartService.updateCount(requestData)
      updateCountCartItem(requestData)
      return response
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
export const deleteOneFromCartFx = createEffect(async (partId: number) => {
  try {
    const response: ICartItem[] = await cartService.deleteOneFromCart(partId)
    removeCartItem({ partId })
    return response
  } catch (error) {
    toast.error((error as Error).message)
  }
})
export const deleteAllCartFx = createEffect(async (userId: number) => {
  try {
    const response: ICartItem[] = await cartService.deleteAll(userId)
    setCart([])
    return response
  } catch (error) {
    toast.error((error as Error).message)
  }
})
