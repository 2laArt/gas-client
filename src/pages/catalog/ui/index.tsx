import { $filters, setCatalogPrice, toggleCheckboxes } from '../model'
import { CatalogSidebar } from './sidebar'
import { useStore } from 'effector-react'
import { type NextPage } from 'next'

export const Catalog: NextPage = () => {
  const { price, details, retailer } = useStore($filters)
  return (
    <div>
      Catalog
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
