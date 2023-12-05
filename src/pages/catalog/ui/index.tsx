import { $filters, setCatalogPrice, toggleCheckboxes } from '../model'
import { CatalogHeader } from './header/ui'
import { CatalogProducts } from './products'
import { CatalogSidebar } from './sidebar'
import style from './style.module.scss'
import { useStore } from 'effector-react'
import { Pagination } from 'features/pagination'
import { type NextPage } from 'next'
import { useState } from 'react'
import { useMediaQuery } from 'shared/lib'
import { Title } from 'shared/ui'

export const Catalog: NextPage = () => {
  const { price, details, retailer } = useStore($filters)
  const is768 = useMediaQuery(768)
  const [offset, setOffset] = useState<number>(0)

  const catalogProps = {
    details,
    toggleCheckboxes,
    retailer,
    disabledReset: false,
    disabledSubmit: false,
    resetFilters: () => {},
    applyFilters: () => {},
    isMobile: is768,
  }
  return (
    <div className={style.catalog}>
      <Title size="xl">Catalog</Title>
      <CatalogHeader {...catalogProps} />
      <div className={style.main}>
        <CatalogSidebar
          {...catalogProps}
          price={price}
          setPrice={setCatalogPrice}
        />
        <div className={style.middle}>
          <CatalogProducts isSpinner={false} products={[]} />
          <Pagination
            totalCount={70}
            limit={10}
            offset={offset}
            setOffset={(e) => setOffset(+e)}
          />
        </div>
      </div>
    </div>
  )
}
