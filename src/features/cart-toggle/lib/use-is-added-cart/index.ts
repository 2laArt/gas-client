import { useStore } from 'effector-react'
import { useMemo } from 'react'
import { $cart } from 'shared/store'

export const useIsAddedToCart = (partId: number) => {
  const cart = useStore($cart)
  return useMemo(
    () => cart.some((item) => item.partId === partId),
    [cart, partId]
  )
}
