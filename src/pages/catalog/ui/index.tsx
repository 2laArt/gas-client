import { $filters, setCatalogPrice, toggleCheckboxes } from '../model'
import { CatalogHeader } from './header/ui'
import { CatalogSidebar } from './sidebar'
import { useStore } from 'effector-react'
import { type NextPage } from 'next'

export const Catalog: NextPage = () => {
  const { price, details, retailer } = useStore($filters)
  return (
    <div>
      Catalog
      <CatalogHeader
        details={details}
        retailer={retailer}
        disabledReset={false}
        disabledSubmit={false}
        resetFilters={() => {}}
        applyFilters={() => {}}
      />
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
    </div>
  )
}
