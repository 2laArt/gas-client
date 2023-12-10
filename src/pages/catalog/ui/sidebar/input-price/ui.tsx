import style from './style.module.scss'
import { formationPriceRange } from 'pages/catalog/lib'
import {
  KeyboardEvent,
  useEffect,
  useState,
  type FC,
  type FormEvent,
  type ReactNode,
} from 'react'
import { formatStrToNumber } from 'shared/lib'

interface IInputPrice {
  price: number
  limit: { max: number; min: number }
  setPrice: (price: number) => void
  placeholder: string
  icon?: ReactNode
}

interface IIconCurrency {
  value: string
  icon: ReactNode
}

const IconCurrency: FC<IIconCurrency> = ({ value, icon = '₽' }) =>
  value !== '' && (
    <span
      style={{
        left: value.length * 7 + 12 + 'px',
      }}
    >
      {icon}
    </span>
  )

export const InputPrice: FC<IInputPrice> = ({
  price,
  setPrice,
  limit,
  placeholder,
  icon,
}) => {
  const [value, setValue] = useState<string>(formationPriceRange(price))
  useEffect(() => {
    setValue(formationPriceRange(price.toString()))
  }, [price])
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(formationPriceRange(e.currentTarget.value))
  }
  const setPriceStore = () => {
    setValue(formationPriceRange(price.toString()))
    if (Number(value) !== price) setPrice(formatStrToNumber(value))
  }
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setPriceStore()
    }
  }

  return (
    <label className={style.label}>
      <IconCurrency value={value} icon={icon} />
      <input
        type="text"
        onBlur={setPriceStore}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={value}
        max={limit.max}
        min={limit.min}
      />
    </label>
  )
}
