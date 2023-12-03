import { $filters, setCatalogPrice } from '../model'
import { PriceRange } from './sidebar/price-range'
import { useStore } from 'effector-react'
import { type NextPage } from 'next'

export const Catalog: NextPage = () => {
  const { price } = useStore($filters)
  return (
    <div>
      Catalog
      <PriceRange title="Price" setPrice={setCatalogPrice} {...price} />
    </div>
  )
}
