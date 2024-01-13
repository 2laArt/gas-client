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
  fetchCatalogProductsFx,
  setCatalogSorting,
  type ICatalogFilterPrice,
} from 'pages/catalog/model'
import { useEffect, useState } from 'react'
import { type IFiltersParams } from 'shared/api'
import { compareObjects } from 'shared/lib'

interface IGetProducts {
  price: ICatalogFilterPrice
  query: TypeCatalogQueryParams
  limit: number
  ignoreKey: keyof TypeNewQueryParams
}
interface IFetchProductsReturn {
  isLoadProducts: boolean
  fetchProducts: VoidFunction
}
type TypeUseGetProducts = (params: IGetProducts) => IFetchProductsReturn

interface IUpdatingRouter {
  isReady: boolean
  isProducts: boolean
  query: TypeCatalogQueryParams
  ignoreKey: keyof TypeNewQueryParams
  updateRouter: TypeUpdateQueryParams
  fetchProducts: VoidFunction
}
export const useCatalogLifeCycle = () => {
  const limit = useStore($catalogLimit)
  const filters = useStore($filters)
  const { rows: products, count: totalCount } = useStore($catalogProducts)
  const router = useRouter() as TypeCatalogRouterQuery
  const { query, isReady } = router
  const updateRouter = useUpdatedQuery(router)
  const ignoreKey = 'first' as keyof TypeNewQueryParams
  const isProducts = !!products.length
  const { fetchProducts, isLoadProducts } = useGetProducts({
    ignoreKey,
    limit,
    price: filters.price,
    query,
  })

  useEffect(() => {
    updatingRouter({
      isReady,
      query,
      updateRouter,
      ignoreKey,
      isProducts,
      fetchProducts,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query, router.isReady])
  return {
    query,
    updateRouter,
    limit,
    totalCount,
    filters,
    products,
    isLoadProducts: isLoadProducts,
  }
}

export const updatingRouter = ({
  isReady,
  query,
  updateRouter,
  ignoreKey,
  fetchProducts,
  isProducts,
}: IUpdatingRouter) => {
  const prevQuery = localStorage.getItem('catalog')
  if (!isReady) return
  if (prevQuery && query.offset && !query.first)
    return updateRouter(JSON.parse(prevQuery))
  if (!query.offset || !query.first) return updateRouter({})
  if (
    !isProducts ||
    (prevQuery && !compareObjects(JSON.parse(prevQuery), query, ignoreKey))
  ) {
    fetchProducts()
  }
  switchFilterByParams(query)
  localStorage.setItem('catalog', JSON.stringify(query))
}
const useGetProducts: TypeUseGetProducts = ({
  ignoreKey,
  limit,
  price,
  query,
}) => {
  const [isLoad, setIsLoad] = useState<boolean>(false)
  const copy = { ...query }
  delete copy[ignoreKey]
  const params: IFiltersParams = Object.assign({
    priseTo: price.max.limit,
    priseFrom: price.min.limit,
    limit,
    ...copy,
  })
  const fetchProducts = () => {
    setIsLoad(true)
    fetchCatalogProductsFx(params).finally(() => {
      setCatalogSorting(query.first)
      setTimeout(() => setIsLoad(false), 1000)
    })
  }
  return { fetchProducts, isLoadProducts: isLoad }
}
