import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { Pagination } from 'features/pagination'
import { useLimitProducts } from 'pages/new-parts/lib'
import { useMemo, type FC, useState } from 'react'
import { type IBoilerParts } from 'shared/api'
import { $auth } from 'shared/store'
import { ProductItem } from 'widgets/product-item'

interface INewParts {
  newParts: IBoilerParts
}
export const NewPartsProducts: FC<INewParts> = ({ newParts }) => {
  const { username } = useStore($auth)
  const [page, setPage] = useState<number>(0)

  const { end, start, limit } = useLimitProducts({
    page,
    total: newParts.count,
  })
  const switchPage = (offset: string) => {
    setPage(+offset - 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const Parts = useMemo(
    () =>
      newParts.rows
        .slice(start, end)
        .map((item) => (
          <ProductItem
            key={item.id}
            className={clsx(style.product, style.product_w)}
            {...item}
            username={username}
          />
        )),
    [newParts.rows, username, start, end]
  )
  return (
    <div>
      <div className={style.products}>{Parts}</div>
      <Pagination
        limit={limit}
        totalCount={newParts.count}
        offset={page + 1}
        setOffset={switchPage}
      />
    </div>
  )
}
