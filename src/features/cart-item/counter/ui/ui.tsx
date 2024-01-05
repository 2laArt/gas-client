import style from './style.module.scss'
import { FC, useEffect, useState } from 'react'
import { updateCountCartItemFx } from 'shared/store/cart'
import { Spinner } from 'shared/ui'

export interface ICartItemCounter {
  count: number
  inStock: number
  partId: number
}

export const CartItemCounter: FC<ICartItemCounter> = ({
  count,
  inStock,
  partId,
}) => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const [warning, setWarning] = useState<string>('')

  const countIncrement = () => {
    if (count < inStock) {
      setSpinner(true)
      !spinner &&
        updateCountCartItemFx({ partId, count: count + 1 }).finally(() =>
          setSpinner(false)
        )
    } else {
      setWarning((prev) => 'Max limit')
    }
  }
  const countDecrement = () => {
    if (count > 1) {
      setSpinner(true)
      !spinner &&
        updateCountCartItemFx({ partId, count: count - 1 }).finally(() =>
          setSpinner(false)
        )
    } else {
      setWarning((prev) => 'Min limit')
    }
  }
  useEffect(() => {
    setWarning('')
  }, [count])
  return (
    <div className={style.counter}>
      <button onClick={countDecrement} disabled={spinner}>
        <span> &#8722; </span>
      </button>
      <span className={style.count}>
        {spinner ? <Spinner size={16} /> : count}
      </span>
      <button onClick={countIncrement} disabled={spinner}>
        <span>+</span>
      </button>
      {!!warning && (
        <span
          data-include="included"
          onClick={() => setWarning('')}
          className={style.warning}
        >
          {warning}
        </span>
      )}
    </div>
  )
}
