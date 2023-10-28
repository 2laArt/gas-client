import { axiosClassic } from '../../config'
import { IBoilerParts } from '../boiler'
import { ICatalogService } from './types'

export const catalogService = {
  products: async ({
    limit = '20',
    offset = '0',
    boiler,
    parts,
    priceFrom,
    priceTo,
  }: ICatalogService): Promise<IBoilerParts> => {
    const { data } = await axiosClassic.get(
      `/boiler-parts
			?limit=${limit}
			&offset=${offset}
			${boiler ? `&boiler=${boiler}` : ''}
			${parts ? `&parts=${parts}` : ''}
			${priceFrom ? `&priceFrom=${priceFrom}` : ''}
			${priceTo ? `&priceTo=${priceTo}` : ''}`
    )
    return data
  },
}
