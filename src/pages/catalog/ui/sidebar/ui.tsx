import { Accordion } from './accordion'
import { CheckboxList } from './checkbox-list'
import { DoubleRange } from './double-range'
import { SidebarButtons } from './footer-btns'
import { InputPrice } from './input-price'
import style from './style.module.scss'
import clsx from 'clsx'
import { type Event } from 'effector'
import {
  type IFiltersStore,
  type TypeCatalogStorePrices,
  type TypeToggleCheckbox,
} from 'pages/catalog/model'
import { type FC } from 'react'
import { Title } from 'shared/ui'

export interface ICatalogSidebar extends Omit<IFiltersStore, 'changed'> {
  getProducts: (params?: IFiltersStore) => void
  resetFilters: VoidFunction
  setPrice: Event<TypeCatalogStorePrices>
  toggleCheckboxes: Event<TypeToggleCheckbox>
  disabledReset: boolean
  disabledSubmit: boolean
}
export const titles = {
  boiler: 'Boiler Manufacturer',
  price: 'Price',
  parts: 'Manufacturer of Spare Parts',
}

export const CatalogSidebar: FC<ICatalogSidebar> = ({
  getProducts,
  resetFilters,
  disabledReset,
  disabledSubmit,
  toggleCheckboxes,
  setPrice,
  details,
  retailer,
  price: { max, min },
}) => {
  const setMinPrice = (price: number) => {
    setPrice({ newMin: price, newMax: max.value })
  }
  const setMaxPrice = (price: number) => {
    setPrice({ newMax: price, newMin: min.value })
  }
  return (
    <div className={clsx('card', style.sidebar)}>
      <Title as="h4" size="small">
        Filters
      </Title>
      <div className="boilers">
        <Accordion title={titles.boiler}>
          <CheckboxList
            section={retailer.title}
            selectedCheckbox={retailer.checkboxes}
            setSelectedCheckboxes={(checkboxes, isState) =>
              toggleCheckboxes({ section: retailer.title, checkboxes, isState })
            }
          />
        </Accordion>
        <Accordion title={titles.price}>
          <div className={style.range}>
            <div className={style.inputs_number}>
              <InputPrice
                placeholder={`from ${min.limit}`}
                price={min.value}
                limit={{ max: max.limit, min: min.limit }}
                setPrice={setMinPrice}
              />

              <InputPrice
                placeholder={`to ${max.limit}`}
                price={max.value}
                limit={{ max: max.limit, min: min.limit }}
                setPrice={setMaxPrice}
              />
            </div>
            <DoubleRange
              max={max}
              min={min}
              setMaxPrice={setMaxPrice}
              setMinPrice={setMinPrice}
            />
          </div>
        </Accordion>
        <Accordion title={titles.parts}>
          <CheckboxList
            section={details.title}
            selectedCheckbox={details.checkboxes}
            setSelectedCheckboxes={(checkboxes, isState) =>
              toggleCheckboxes({ section: details.title, checkboxes, isState })
            }
          />
        </Accordion>
        <SidebarButtons
          btnTop={{
            title: 'Show',
            disabled: disabledSubmit,
            onClick: () => getProducts(),
          }}
          btnBottom={{
            disabled: disabledReset,
            title: 'Reset',
            onClick: resetFilters,
          }}
        />
      </div>
    </div>
  )
}
