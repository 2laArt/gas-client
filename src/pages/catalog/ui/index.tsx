import {
  filtersToQuery,
  switchFilterByParams,
  useIsChangedFilters,
  useUpdatedQuery,
  type TypeCatalogRouterQuery,
} from '../lib'
import {
  $filters,
  setCatalogPrice,
  toggleCheckboxes,
  type TypeCatalogSorting,
} from '../model'
import { CatalogHeader } from './header/ui'
import { CatalogProducts } from './products'
import { CatalogSidebar } from './sidebar'
import style from './style.module.scss'
import { type ICatalogProps } from './type'
import { useStore } from 'effector-react'
import { Pagination } from 'features/pagination'
import { type NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useMemo } from 'react'
import { useMediaQuery } from 'shared/lib'
import { Title } from 'shared/ui'

export const Catalog: NextPage = () => {
  const router = useRouter() as TypeCatalogRouterQuery
  const filters = useStore($filters)
  const is768 = useMediaQuery(768)
  const isChanged = useIsChangedFilters(router.query, filtersToQuery(filters))
  const updateRouter = useUpdatedQuery(router)
  const applyFilters = () => {
    updateRouter({ ...filtersToQuery(filters), ...{ offset: '0' } })
  }

  const resetFilters = () => {
    updateRouter({
      boiler: undefined,
      parts: undefined,
      priceFrom: undefined,
      priceTo: undefined,
    })
  }
  const disabledReset = useMemo(
    () => !Object.values(filtersToQuery(filters)).filter((item) => item).length,
    [filters, filtersToQuery]
  )
  const selectSort = (first: TypeCatalogSorting) => updateRouter({ first })
  const offsetProps = {
    offset: Number(router.query.offset) + 1,
    setOffset: (page: string) =>
      updateRouter({ offset: (Number(page) - 1).toString() }),
  }
  const catalogProps: ICatalogProps = {
    details: filters.details,
    toggleCheckboxes,
    retailer: filters.retailer,
    disabledReset,
    disabledSubmit: isChanged,
    isMobile: is768,
    resetFilters,
    applyFilters,
  }
  useEffect(() => {
    if (!router.isReady) return
    if (!router.query.first || !router.query.first) {
      updateRouter({})
      return
    }
    switchFilterByParams(router.query)
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
          price={filters.price}
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
