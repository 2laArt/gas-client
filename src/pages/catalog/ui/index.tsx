import {
  filtersToQuery,
  useUpdatedQuery,
  type TypeCatalogQueryParams,
  type TypeCatalogRouterQuery,
} from '../lib'
import {
  $filters,
  TypeCatalogSorting,
  setCatalogPrice,
  setCatalogSorting,
  toggleCheckboxes,
} from '../model'
import { CatalogHeader } from './header/ui'
import { CatalogProducts } from './products'
import { CatalogSidebar } from './sidebar'
import style from './style.module.scss'
import { useStore } from 'effector-react'
import { Pagination } from 'features/pagination'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMediaQuery } from 'shared/lib'
import { Title } from 'shared/ui'

export const Catalog: NextPage = () => {
  const router = useRouter() as TypeCatalogRouterQuery
  const { price, details, retailer } = useStore($filters)
  const filters = useStore($filters)
  const is768 = useMediaQuery(768)
  const updateRouter = useUpdatedQuery(router)
  const applyFilters = () => {
    updateRouter(filtersToQuery(filters))
  }
  const selectSort = (first: TypeCatalogSorting) => updateRouter({ first })
  const offsetProps = {
    offset: Number(router.query.offset) + 1,
    setOffset: (page: string) =>
      updateRouter({ offset: (Number(page) - 1).toString() }),
  }
  const catalogProps = {
    details,
    toggleCheckboxes,
    retailer,
    disabledReset: false,
    disabledSubmit: false,
    isMobile: is768,
    resetFilters: () => {},
    applyFilters,
  }

  const startFilters = (query: TypeCatalogQueryParams) => {
    toggleCheckboxes({
      section: 'details',
      checkboxes: (query.parts ?? '').split(','),
      isState: true,
    })
    toggleCheckboxes({
      section: 'retailer',
      checkboxes: (query.boiler ?? '').split(','),
      isState: true,
    })
    setCatalogPrice({
      newMax: Number(query.priceTo) || undefined,
      newMin: Number(query.priceFrom) || undefined,
    })
    setCatalogSorting(router.query.first)
  }
  useEffect(() => {
    if (!router.isReady) return
    if (!router.query.first || !router.query.first) {
      updateRouter({})
      return
    }
    startFilters(router.query)
  }, [router.query, router.isReady])

  return (
    <div className={style.catalog}>
      <Title size="xl">Catalog</Title>
      <CatalogHeader
        {...catalogProps}
        setCatalogSort={selectSort}
        sort={router.query.first}
      />
      <div className={style.main}>
        <CatalogSidebar
          {...catalogProps}
          price={price}
          setPrice={setCatalogPrice}
        />
        <div className={style.middle}>
          <CatalogProducts isSpinner={false} products={[]} />
          <Pagination totalCount={70} limit={10} {...offsetProps} />
        </div>
      </div>
    </div>
  )
}
