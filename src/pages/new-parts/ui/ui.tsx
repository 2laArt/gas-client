import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { useMemo, type FC } from 'react'
import { type IBoilerParts } from 'shared/api'
import { $auth } from 'shared/store'
import { Title } from 'shared/ui'
import { ProductItem } from 'widgets/product-item'

interface INewParts {
  newParts: IBoilerParts
}
export const NewParts: FC<INewParts> = ({ newParts }) => {
  const { username } = useStore($auth)
  const Parts = useMemo(
    () =>
      newParts.rows.map((item) => (
        <ProductItem
          key={item.id}
          className={clsx(style.product, style.product_w)}
          {...item}
          username={username}
        />
      )),
    [newParts]
  )
  return (
    <div className={style.new_parts}>
      <Title size="xl">New Parts</Title>
      <div className={style.products}>{Parts}</div>
    </div>
  )
}
