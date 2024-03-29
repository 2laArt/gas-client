import {
  filtersToQuery,
  useCatalogLifeCycle,
  useIsChangedFilters,
} from '../lib'
import {
  setCatalogPrice,
  toggleCheckboxes,
  type TypeCatalogSorting,
} from '../model'
import { sidebarTitles } from './data'
import { CatalogHeader } from './header/ui'
import { CatalogSidebarMobile } from './mobile-sidebar'
import { CatalogProducts } from './products'
import { CatalogSidebar } from './sidebar'
import style from './style.module.scss'
import type { ICatalogProps, ICatalogSidebarProps } from './type'
import { Pagination } from 'features/pagination'
import { type NextPage } from 'next'
import { useCallback, useLayoutEffect, useMemo } from 'react'
import { useClickOutside, useMediaQuery } from 'shared/lib'
import { setMeta } from 'shared/store'
import { Title } from 'shared/ui'

export const Catalog: NextPage = () => {
  const {
    query,
    updateRouter,
    limit,
    filters,
    products,
    isLoadProducts,
    totalCount,
  } = useCatalogLifeCycle()

  const is768 = useMediaQuery(768)
  const { isOpen, ref: sidebarRef, setIsOpen } = useClickOutside(false)
  const isChanged = useIsChangedFilters(query, filtersToQuery(filters))
  const applyFilters = () => {
    updateRouter({ ...filtersToQuery(filters), ...{ offset: '0' } })
  }
  const setMinPrice = (price: number) => {
    setCatalogPrice({ newMin: price, newMax: filters.price.max.value })
  }

  const setMaxPrice = (price: number) => {
    setCatalogPrice({ newMax: price, newMin: filters.price.min.value })
  }

  const disabledReset = useMemo(
    () => !Object.values(filtersToQuery(filters)).filter((item) => item).length,
    [filters]
  )
  const isShowPagination = useMemo(
    () => totalCount / limit > 1,
    [totalCount, limit]
  )
  const selectSort = (first: TypeCatalogSorting) => updateRouter({ first })

  const offsetProps = {
    offset: Number(query.offset) + 1,
    setOffset: (page: string) =>
      updateRouter({ offset: (Number(page) - 1).toString() }),
  }
  const resetFilters = useCallback(() => {
    updateRouter({
      boiler: undefined,
      parts: undefined,
      priceFrom: undefined,
      priceTo: undefined,
    })
  }, [updateRouter])
  const catalogProps: ICatalogProps = {
    details: filters.details,
    toggleCheckboxes,
    retailer: filters.retailer,
    disabledReset,
    disabledSubmit: isChanged,
    resetFilters,
    applyFilters,
  }
  const sidebarProps: ICatalogSidebarProps = {
    ...catalogProps,
    price: filters.price,
    setMaxPrice,
    setMinPrice,
    sidebarTitles,
  }
  useLayoutEffect(() => {
    setMeta({
      title: 'Catalog',
      description: 'We will help you choose the best options',
    })
  }, [])
  return (
    <div className={style.catalog}>
      <Title size="xl">Catalog</Title>
      <CatalogHeader
        {...catalogProps}
        setCatalogSort={selectSort}
        sort={query.first}
        isMobile={is768}
        setOpen={() => setIsOpen(true)}
      />

      <div className={style.main}>
        {is768 ? (
          <CatalogSidebarMobile
            {...sidebarProps}
            isOpen={isOpen}
            setClose={() => setIsOpen(false)}
            ref={sidebarRef}
          />
        ) : (
          <CatalogSidebar {...sidebarProps} />
        )}

        <div className={style.middle}>
          <CatalogProducts
            limit={limit}
            isSpinner={isLoadProducts}
            products={products}
          />
          {isShowPagination && (
            <Pagination
              totalCount={totalCount}
              limit={limit}
              {...offsetProps}
            />
          )}
        </div>
      </div>
    </div>
  )
}
