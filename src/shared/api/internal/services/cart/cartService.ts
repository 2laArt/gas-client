import { BasicService } from '../../config'
import {
  IAddToCart,
  ICartItem,
  IUpdateCountCartItem,
  IUpdateTotalPrice,
} from './types'
import { AxiosRequestConfig } from 'axios'

class CartService extends BasicService<string> {
  getCart(userId: number, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance<ICartItem[]>({
      ...config,
      method: 'get',
      url: this._baseUrl(`/${userId}`),
    })
  }
  addToCart(requestData: IAddToCart, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance<ICartItem>({
      ...config,
      method: 'post',
      url: this._baseUrl('/add'),
      data: requestData,
    })
  }
  updateCount(
    { count, partId }: IUpdateCountCartItem,
    config: Partial<AxiosRequestConfig> = {}
  ) {
    return this._instance<{ count: number }>({
      ...config,
      method: 'patch',
      url: this._baseUrl(`/count/${partId}`),
      data: { count },
    })
  }
  updateTotalPrice(
    { partId, totalPrice }: IUpdateTotalPrice,
    config: Partial<AxiosRequestConfig> = {}
  ) {
    return this._instance<{ total_price: number }>({
      ...config,
      method: 'patch',
      url: this._baseUrl(`/total-price/${partId}`),
      data: { totalPrice },
    })
  }
  deleteOneFromCart(partId: number, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'delete',
      url: this._baseUrl(`/one/${partId}`),
    })
  }
  deleteAll(userId: number, config: Partial<AxiosRequestConfig> = {}) {
    return this._instance({
      ...config,
      method: 'delete',
      url: this._baseUrl(`/all/${userId}`),
    })
  }
}
export const cartService = new CartService('shopping-cart')
