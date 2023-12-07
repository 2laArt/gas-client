import { IFiltersParams } from 'shared/api'

export interface ICatalogQueryParams extends Omit<IFiltersParams, 'limit'> {
  first?: string
}

type Id = number | null | undefined

export const paths = {
  auth: '/',
  dashboard: '/dashboard',
  about: '/about',
  order: '/order',
  contacts: '/contacts',
  shoppingPayment: '/shopping-payment',
  wholesaleBuyers: '/wholesale-buyers',
  catalog: (
    params: ICatalogQueryParams = {
      offset: '0',
      first: 'popular',
    }
  ): string => {
    const searchParams = new URLSearchParams(Object.entries(params)).toString()
    const url = `/catalog?${searchParams}`

    return url
  },

  catalogProduct: (id: Id): string => `/catalog/${id}`,
}
