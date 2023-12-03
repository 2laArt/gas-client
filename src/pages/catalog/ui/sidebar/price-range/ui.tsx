import { InputPrice } from './input-price'
import style from './style.module.scss'
import { Event } from 'effector'
import {
  type ICatalogFilterPrice,
  type TypeCatalogStorePrices,
} from 'pages/catalog/model'
import { type FC } from 'react'

interface IPriceRange extends ICatalogFilterPrice {
  title: string
  setPrice: Event<TypeCatalogStorePrices>
}

export const PriceRange: FC<IPriceRange> = ({ max, min, title, setPrice }) => {
  const setPriceMin = (price: number) => {
    setPrice({ newMin: price, newMax: max.value })
  }
  const setPriceMax = (price: number) => {
    setPrice({ newMax: price, newMin: min.value })
  }
  return (
    // TODO: CATALOG DROPDOWN
    <div className={style.range}>
      <div className={style.inputs_number}>
        <InputPrice
          placeholder={`from ${min.limit}`}
          price={min.value}
          limit={{ max: max.limit, min: min.limit }}
          setPrice={setPriceMin}
        />

        <InputPrice
          placeholder={`to ${max.limit}`}
          price={max.value}
          limit={{ max: max.limit, min: min.limit }}
          setPrice={setPriceMax}
        />
      </div>
      <div className={style.double_range_box}>
        <div className={style.double_range}>
          <span
            className={style.range_track}
            style={{
              left: `${(min.value / max.limit) * 100}%`,
              width: `${((max.value - min.value) / max.limit) * 100}%`,
            }}
          />
          <input
            type="range"
            onInput={(e) => setPriceMin(+e.currentTarget.value)}
            max={max.limit}
            min={min.limit}
            style={{
              zIndex: min.value > max.limit / 2 ? 10 : 0,
            }}
            value={min.value}
          />
          <input
            type="range"
            onInput={(e) => setPriceMax(+e.currentTarget.value)}
            style={{
              zIndex: max.value < max.limit / 2 ? 10 : 0,
            }}
            value={max.value}
            max={max.limit}
            min={min.limit}
          />
          <span className={style.minValue} />
          <span className={style.maxValue} />
        </div>
      </div>
    </div>
  )
}

{
  /* <label>
            <IconCurrency value={min.value} />
            <input
              type="text"
              onChange={setPriceMin}
              placeholder={`from ${min.limit}`}
              value={formationPriceRange(min.value)}
              max={max.limit}
              min={min.limit}
            />
          </label> */
}

{
  /* <label>
            <IconCurrency value={max.value} />
            <input
              type="text"
              onInput={setPriceMax}
              value={formationPriceRange(max.value)}
              placeholder={`to ${max.limit}`}
              max={max.limit}
              min={min.limit}
            />
          </label> */
}
