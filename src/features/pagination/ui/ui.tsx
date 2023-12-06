import { DOTS, usePagination } from '../lib'
import style from './style.module.scss'
import clsx from 'clsx'
import { useEffect, useState, type FC } from 'react'

interface IPagination {
  totalCount: number
  limit: number
  offset: number
  setOffset: (offset: string) => void
}
export const Pagination: FC<IPagination> = ({
  totalCount,
  limit,
  offset,
  setOffset,
}) => {
  const [page, setPage] = useState<number>(1)
  const pages = usePagination({
    currentPage: page,
    pageSize: limit,
    totalCount: totalCount,
  })
  const clickPage = (item: string | number) => {
    if (typeof item === 'string' || isNaN(item) || item === page) return
    setOffset(`${item - 1}`)
  }
  useEffect(() => {
    setPage(offset + 1 || 1)
  }, [offset])
  return (
    <div className={style.pagination}>
      {pages?.map((item, idx) =>
        item === DOTS ? (
          <span key={idx} className={clsx(style.item)}>
            {item}
          </span>
        ) : (
          <button
            key={idx}
            onClick={() => clickPage(item)}
            className={clsx(
              style.item,
              style.btn,
              page === item && style.active
            )}
          >
            {item}
          </button>
        )
      )}
    </div>
  )
}
