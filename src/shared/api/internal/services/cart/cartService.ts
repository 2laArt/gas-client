import { axiosClassic } from '../../config'
import { IAddToCart, ICartItem, IUpdateCountCartItem } from './types'

export const cartService = {
  getCart: async (userId: number): Promise<ICartItem[]> => {
    const { data } = await axiosClassic.get(`/shopping-cart/${userId}`)
    return data
  },
  addToCart: async (requestData: IAddToCart): Promise<ICartItem> => {
    const { data } = await axiosClassic.post(`/shopping-cart/add`, requestData)
    return data
  },
  updateCount: async ({ count, partId }: IUpdateCountCartItem) => {
    const { data } = await axiosClassic.patch(
      `/shopping-cart/count/${partId}`,
      { count }
    )
    return data
  },
  updateTotalPrice: async (partId: number, totalPrice: number) => {
    const { data } = await axiosClassic.patch(
      `/shopping-cart/total-price/${partId}`,
      { totalPrice }
    )
    return data
  },
  deleteOneFromCart: async (partId: number) => {
    const { data } = await axiosClassic.delete(`/shopping-cart/one/${partId}`)
    return data
  },
  deleteAll: async (userId: number) => {
    const { data } = await axiosClassic.delete(`/shopping-cart/all/${userId}`)
    return data
  },
}
