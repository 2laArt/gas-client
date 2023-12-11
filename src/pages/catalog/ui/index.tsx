import { filtersToQuery, useCatalogLifeCycle } from '../lib'
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
import { useMemo } from 'react'
import { useClickOutside, useMediaQuery } from 'shared/lib'
import { Title } from 'shared/ui'

export const Catalog: NextPage = () => {
  const { query, updateRouter, limit, filters, products, isLoadProducts } =
    useCatalogLifeCycle()

  const is768 = useMediaQuery(768)
  const { isOpen, ref: sidebarRef, setIsOpen } = useClickOutside(false)
  // const isChanged = useIsChangedFilters(query, filtersToQuery(filters))
  const isChanged = false
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
  const selectSort = (first: TypeCatalogSorting) => updateRouter({ first })
  const offsetProps = {
    offset: Number(query.offset) + 1,
    setOffset: (page: string) =>
      updateRouter({ offset: (Number(page) - 1).toString() }),
  }
  const resetFilters = () => {
    updateRouter({
      boiler: undefined,
      parts: undefined,
      priceFrom: undefined,
      priceTo: undefined,
    })
  }
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
          <CatalogProducts isSpinner={isLoadProducts} products={products} />
          <Pagination totalCount={70} limit={limit} {...offsetProps} />
        </div>
      </div>
    </div>
  )
}
