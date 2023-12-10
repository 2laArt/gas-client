import { ChangeButtons } from '../change-buttons'
import { CheckboxList } from '../sidebar/checkbox-list'
import { DoubleRange } from '../sidebar/double-range'
import { InputPrice } from '../sidebar/input-price'
import type { ICatalogSidebarProps } from '../type'
import style from './style.module.scss'
import { MobileTopSide } from './top'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { forwardRef, useState, type LegacyRef } from 'react'
import { useLockedBody } from 'shared/lib'

interface IMobileSidebar extends ICatalogSidebarProps {
  setClose: VoidFunction
  isOpen: boolean
}
export const CatalogSidebarMobile = forwardRef<HTMLElement, IMobileSidebar>(
  (
    {
      applyFilters,
      details,
      disabledReset,
      disabledSubmit,
      price: { max, min },
      setClose,
      resetFilters,
      retailer,
      setMaxPrice,
      setMinPrice,
      toggleCheckboxes,
      isOpen,
    },
    ref
  ) => {
    const titles = {
      retailer: 'Boiler Manufacturer',
      price: 'Price',
      details: 'Manufacturer of Spare Parts',
    }
    const [section, setSection] = useState<keyof typeof sections>('filters')
    const Overlay = useLockedBody({ isOpen, bpHidden: 'md' })
    const isHome = section === 'filters'
    const comeback = () => {
      if (isHome) setClose()
      setSection('filters')
    }
    const apply = () => {
      setClose()
      applyFilters()
    }
    const sections = {
      details: (
        <CheckboxList
          className={style.ul}
          section={details.title}
          checkboxes={details.checkboxes}
          toggleCheckboxes={toggleCheckboxes}
        />
      ),
      retailer: (
        <CheckboxList
          className={style.ul}
          section={retailer.title}
          checkboxes={retailer.checkboxes}
          toggleCheckboxes={toggleCheckboxes}
        />
      ),
      price: (
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
      ),
      filters: (
        <div>
          {Object.keys(titles).map(
            (item) =>
              !!isHome && (
                <button
                  key={item}
                  className={style.content_h}
                  onClick={() => setSection(item as keyof typeof sections)}
                  data-include="included"
                >
                  {titles[item as keyof typeof titles]}
                </button>
              )
          )}
        </div>
      ),
    }
    return (
      <>
        {Overlay}
        <div
          className={clsx(style.sidebar, !isOpen && style.close)}
          ref={ref as LegacyRef<HTMLDivElement>}
        >
          <MobileTopSide
            disabledReset={disabledReset}
            comeback={comeback}
            resetFilters={resetFilters}
            section={section}
          />

          <div className={clsx('small_scroll', style.content)}>
            <motion.div
              key={section}
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: '0',
              }}
            >
              {sections[section]}
            </motion.div>
          </div>
          <ChangeButtons
            btnTop={{
              title: 'Show',
              disabled: disabledSubmit,
              onClick: apply,
            }}
            btnBottom={{
              disabled: disabledReset,
              title: isHome ? 'Reset' : 'Leave',
              onClick: isHome ? resetFilters : () => setSection('filters'),
            }}
          />
        </div>
      </>
    )
  }
)
