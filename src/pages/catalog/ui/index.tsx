import { $filters, setCatalogPrice, toggleCheckboxes } from '../model'
import { CatalogHeader } from './header/ui'
import { CatalogProducts } from './products'
import { CatalogSidebar } from './sidebar'
import style from './style.module.scss'
import { useStore } from 'effector-react'
import { Pagination } from 'features/pagination'
import { type NextPage } from 'next'
import { useState } from 'react'
import { Title } from 'shared/ui'

export const Catalog: NextPage = () => {
  const { price, details, retailer } = useStore($filters)
  const [offset, setOffset] = useState<number>(0)
  return (
    <div className={style.catalog}>
      <Title size="xl">Catalog</Title>
      <CatalogHeader
        details={details}
        toggleCheckboxes={toggleCheckboxes}
        retailer={retailer}
        disabledReset={false}
        disabledSubmit={false}
        resetFilters={() => {}}
        applyFilters={() => {}}
      />
      <div className={style.main}>
        <CatalogSidebar
          details={details}
          price={price}
          retailer={retailer}
          disabledReset={false}
          disabledSubmit={false}
          getProducts={() => {}}
          toggleCheckboxes={toggleCheckboxes}
          resetFilters={() => {}}
          setPrice={setCatalogPrice}
        />
        <div className={style.middle}>
          <CatalogProducts isSpinner={true} products={[]} />
          <Pagination
            totalCount={100}
            limit={10}
            offset={offset}
            setOffset={(e) => setOffset(+e)}
          />
        </div>
      </div>
    </div>
  )
}
