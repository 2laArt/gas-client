import { switchFilterByParams } from '../switch-filter-by-params'
import {
  useUpdatedQuery,
  type TypeCatalogQueryParams,
  type TypeCatalogRouterQuery,
  type TypeNewQueryParams,
  type TypeUpdateQueryParams,
} from '../use-update-query'
import { useStore } from 'effector-react'
import { useRouter } from 'next/router'
import {
  $catalogLimit,
  $catalogProducts,
  $filters,
  ICatalogFilterPrice,
  fetchCatalogProductsFx,
} from 'pages/catalog/model'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { compareObjects } from 'shared/lib'

interface IUpdatingRouter {
  isReady: boolean
  query: TypeCatalogQueryParams
  limit: number
  updateRouter: TypeUpdateQueryParams
  setLoading: Dispatch<SetStateAction<boolean>>
}
export const useCatalogLifeCycle = () => {
  const limit = useStore($catalogLimit)
  const filters = useStore($filters)
  const { rows: products } = useStore($catalogProducts)
  const router = useRouter() as TypeCatalogRouterQuery
  const { query, isReady } = router
  const updateRouter = useUpdatedQuery(router)
  const [isLoadProducts, setIsLoadProducts] = useState<boolean>(true)

  useEffect(() => {
    updatingRouter({
      isReady,
      query,
      limit,
      updateRouter,
      setLoading: setIsLoadProducts,
    })
  }, [router.query, router.isReady])
  return {
    query,
    updateRouter,
    limit,
    filters,
    products,
    isLoadProducts,
  }
}

export const updatingRouter = ({
  isReady,
  query,
  updateRouter,
  setLoading,
  limit,
}: IUpdatingRouter) => {
  const prevQuery = localStorage.getItem('catalog')
  const ignoreKey = 'first' as keyof TypeNewQueryParams
  if (!isReady) return
  if (prevQuery && query.offset && !query.first)
    return updateRouter(JSON.parse(prevQuery))
  if (!query.offset || !query.first) return updateRouter({})
  if (prevQuery && !compareObjects(JSON.parse(prevQuery), query, ignoreKey)) {
    // getProducts(fil )
    console.log('get products')
  }
  switchFilterByParams(query)
  localStorage.setItem('catalog', JSON.stringify(query))
}
const getProducts = (
  price: ICatalogFilterPrice,
  query: TypeCatalogQueryParams,
  limit: number,
  ignoreKey: keyof TypeNewQueryParams
) => {
  const copy = { ...query }
  delete copy[ignoreKey]
  const params = Object.assign({
    priseTo: price.max.limit,
    priseFrom: price.min.limit,
    limit,
    copy,
  })
  fetchCatalogProductsFx(params)
}
