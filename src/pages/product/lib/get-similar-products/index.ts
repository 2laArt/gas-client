import { toast } from 'react-toastify'
import { boilerService } from 'shared/api'

interface IPriceRange {
  currentPrice: number
  maxLimit: number
  minLimit: number
}

export const getSimilarProducts = async (params: IPriceRange) => {
  const { priceFrom, priceTo } = getPriceRange(params)
  try {
    const { data } = await boilerService.filters({
      priceFrom: priceFrom.toString(),
      priceTo: priceTo.toString(),
      offset: '0',
      limit: '10',
    })
    return data.rows
  } catch (e) {
    toast.error('Something is Wrong')
  }
}

const getPriceRange = ({ currentPrice, maxLimit, minLimit }: IPriceRange) => {
  const step: number = 15e2
  if (currentPrice + step > maxLimit) {
    return { priceFrom: currentPrice - step, priceTo: maxLimit }
  }
  if (currentPrice - step > minLimit) {
    return { priceFrom: minLimit, priceTo: currentPrice + step }
  }
  return { priceFrom: currentPrice - step, priceTo: currentPrice + step }
}
