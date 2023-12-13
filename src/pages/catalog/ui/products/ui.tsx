import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { memo, type FC } from 'react'
import { type IBoilerPart } from 'shared/api'
import { $auth } from 'shared/store'
import { Title } from 'shared/ui'
import { SkeletonProduct } from 'shared/ui/skeleton-product'
import { ProductItem } from 'widgets/product-item'

interface ICatalogProducts {
  isSpinner: boolean
  products: IBoilerPart[]
  limit: number
}
export const CatalogProducts: FC<ICatalogProducts> = memo(
  ({ isSpinner, products, limit }) => {
    const { username } = useStore($auth)
    const Products = products.map((item) => (
      <ProductItem
        key={item.id}
        className={clsx(style.product, style.product_w)}
        {...item}
        username={username}
      />
    ))
    return (
      <div className={style.products}>
        {isSpinner ? (
          [...Array(limit)].map((_, index) => (
            <SkeletonProduct key={index} className={style.product_w} />
          ))
        ) : products?.length ? (
          Products
        ) : (
          <Title as="h6" size="large">
            No Products Found
          </Title>
        )}
      </div>
    )
  }
)
