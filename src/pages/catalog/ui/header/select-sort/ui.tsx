import style from './style.module.scss'
import { useRouter } from 'next/router'
import { useState, type ChangeEvent, type FC } from 'react'

const options: { value: any; text: string }[] = [
  {
    value: 'cheap',
    text: 'First Cheap',
  },
  {
    value: 'expensive',
    text: 'First Expensive',
  },
  {
    value: 'popular',
    text: 'By Popularity',
  },
]

export const SelectSort: FC = () => {
  const [sort, setSort] = useState<any>()
  const router = useRouter()

  const handlerSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.currentTarget
    setSort(value)
  }

  return (
    <select
      value={sort}
      className={style.select}
      onChange={handlerSelectChange}
    >
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  )
}
