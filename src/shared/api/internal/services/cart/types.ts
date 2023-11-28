export interface ICartItem {
  id: number
  name: string
  price: number
  image: string
  in_stock: number
  parts_manufacturer: string
  boiler_manufacturer: string
  count: number
  total_price: number
  userId: number
  partId: number
}
export interface IAddToCart {
  userId?: number
  username: string
  partId: number
}
export interface IUpdateCountCartItem {
  partId: number
  count: number
}
export interface IUpdateTotalPrice {
  partId: number
  totalPrice: number
}
