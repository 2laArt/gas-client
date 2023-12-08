import { type ISortingProps } from '../ui'
import { sortOptions } from './data'
import style from './style.module.scss'
import { TypeCatalogSorting } from 'pages/catalog/model'
import { type ChangeEvent, type FC } from 'react'

export const SelectSort: FC<ISortingProps> = ({ setCatalogSort, sort }) => {
  const handlerSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value as TypeCatalogSorting
    setCatalogSort(value)
  }

  return (
    <select
      value={sort}
      className={style.select}
      onChange={handlerSelectChange}
    >
      {sortOptions.map((item) => (
        <option value={item.value} key={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  )
}
