import { Accordion } from '../accordion'
import { ChangeButtons } from '../change-buttons'
import type { ICatalogSidebarProps } from '../type'
import { CheckboxList } from './checkbox-list'
import { DoubleRange } from './double-range'
import { InputPrice } from './input-price'
import style from './style.module.scss'
import clsx from 'clsx'
import { type FC } from 'react'
import { Title } from 'shared/ui'

const titles = {
  boiler: 'Boiler Manufacturer',
  price: 'Price',
  parts: 'Manufacturer of Spare Parts',
}
export const CatalogSidebar: FC<ICatalogSidebarProps> = ({
  applyFilters,
  details,
  disabledReset,
  disabledSubmit,
  price: { max, min },
  resetFilters,
  retailer,
  toggleCheckboxes,
  setMaxPrice,
  setMinPrice,
}) => {
  return (
    <div className={clsx('card', style.sidebar)}>
      <Title as="h4" size="small">
        Filters
      </Title>
      <div className="boilers">
        <Accordion title={titles.boiler}>
          <CheckboxList
            section={retailer.title}
            checkboxes={retailer.checkboxes}
            toggleCheckboxes={toggleCheckboxes}
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
            checkboxes={details.checkboxes}
            toggleCheckboxes={toggleCheckboxes}
          />
        </Accordion>
        <div className={style.footer}>
          <ChangeButtons
            btnTop={{
              title: 'Show',
              disabled: disabledSubmit,
              onClick: applyFilters,
            }}
            btnBottom={{
              disabled: disabledReset,
              title: 'Reset',
              onClick: resetFilters,
            }}
          />
        </div>
      </div>
    </div>
  )
}
