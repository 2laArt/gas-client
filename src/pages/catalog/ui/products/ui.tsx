import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { type FC } from 'react'
import { IBoilerPart } from 'shared/api'
import { $auth } from 'shared/store'
import { Title } from 'shared/ui'
import { SkeletonProduct } from 'shared/ui/skeleton-product'
import { ProductItem } from 'widgets/product-item'

interface ICatalogProducts {
  isSpinner: boolean
  products: IBoilerPart[]
}
export const CatalogProducts: FC<ICatalogProducts> = ({
  isSpinner,
  products,
}) => {
  const { username } = useStore($auth)
  return (
    <div className={style.products}>
      {isSpinner ? (
        [...Array(20)].map((_, index) => (
          <SkeletonProduct key={index} className={style.product_w} />
        ))
      ) : products?.length ? (
        products.map((item) => (
          <ProductItem
            key={item.id}
            className={clsx(style.product, style.product_w)}
            {...item}
            username={username}
          />
        ))
      ) : (
        <Title as="h6" size="large">
          No Products Found
        </Title>
      )}
    </div>
  )
}
