import { ICatalogService } from 'shared/api'

export interface ICatalogParams extends Omit<ICatalogService, 'limit'> {
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
  catalog: '/catalog',
  // catalog: (params: ICatalogParams): string => {
  //   const searchParams = new URLSearchParams({ ...params })
  //   const url = `/catalog?${searchParams}`

  //   return url
  // },

  catalogProduct: (id: Id): string => `/catalog/${id}`,
}
