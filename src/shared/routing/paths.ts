import { IFilters } from 'shared/api'

export interface ICatalogParams extends Omit<IFilters, 'limit'> {
  first?: string
  page?: string
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
    params: ICatalogParams = { offset: '1', page: '1', first: 'popular' }
  ): string => {
    const searchParams = new URLSearchParams(Object.entries(params)).toString()
    const url = `/catalog?${searchParams}`

    return url
  },

  catalogProduct: (id: Id): string => `/catalog/${id}`,
}
