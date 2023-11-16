import { addToCartFx, deleteOneFromCartFx } from 'shared/store'

export interface IToggleCart {
  username: string
  isAdded: boolean
  partId: number
}
export const toggleCartItem = ({ isAdded, partId, username }: IToggleCart) => {
  return isAdded
    ? deleteOneFromCartFx(partId)
    : addToCartFx({ partId, username })
}
