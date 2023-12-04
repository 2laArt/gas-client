import style from './style.module.scss'
import { type ICatalogFilterPrice } from 'pages/catalog/model'
import { type CSSProperties, type FC } from 'react'
import { COLORS } from 'shared/config'

type ChangePriceType = (price: number) => void

type ColorsType = {
  track?: keyof typeof COLORS
  circle?: keyof typeof COLORS
}

interface IPriceRange extends ICatalogFilterPrice {
  setMaxPrice: ChangePriceType
  setMinPrice: ChangePriceType
}

export const DoubleRange: FC<IPriceRange & ColorsType> = ({
  max,
  min,
  setMaxPrice,
  setMinPrice,
  circle = 'white',
  track = 'blue',
}) => {
  return (
    <div className={style.double_range_box}>
      <div
        className={style.double_range}
        style={
          {
            '--track': `${COLORS[track]}`,
            '--circle': `${COLORS[circle]}`,
          } as CSSProperties
        }
      >
        <span
          className={style.range_track}
          style={{
            left: `${(min.value / max.limit) * 100}%`,
            width: `${((max.value - min.value) / max.limit) * 100}%`,
          }}
        />
        <input
          type="range"
          onInput={(e) => setMinPrice(+e.currentTarget.value)}
          max={max.limit}
          min={min.limit}
          style={{
            zIndex: min.value > max.limit / 2 ? 10 : 0,
          }}
          value={min.value}
        />
        <input
          type="range"
          onInput={(e) => setMaxPrice(+e.currentTarget.value)}
          style={{
            zIndex: max.value < max.limit / 2 ? 10 : 0,
          }}
          value={max.value}
          max={max.limit}
          min={min.limit}
        />
        {/* <span className={style.minValue} />
        <span className={style.maxValue} /> */}
      </div>
    </div>
  )
}
