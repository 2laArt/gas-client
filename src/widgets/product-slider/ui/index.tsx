import { SkeletonProduct } from './skeleton-product'
import style from './style.module.scss'
import { ProductItem } from 'entities/product-item'
import { CartToggleBtn } from 'features/cart-toggle'
import { type FC } from 'react'
import { type IBoilerPart } from 'shared/api'
import { Slider, Title } from 'shared/ui'

interface IDashboardSlider {
  products: IBoilerPart[] | string
  spinner: boolean
}

export const ProductSlider: FC<IDashboardSlider> = ({ products, spinner }) => {
  const isProducts = Array.isArray(products) && !!products.length
  const isWaring = !isProducts && !spinner && typeof products === 'string'
  const renderItem = (item: any, idx: number) =>
    isProducts && !spinner ? (
      <ProductItem
        {...item}
        key={idx}
        toggleBtn={
          <CartToggleBtn username="test" name={item.name} partId={item.id} />
        }
      />
    ) : (
      <SkeletonProduct key={idx} />
    )
  return (
    <div className={style.slider}>
      {isWaring && (
        <Title as="h4" size="large" className={style.slider_wrong_title}>
          {products}
        </Title>
      )}

      <Slider
        items={isProducts ? products : [...Array(6)]}
        renderItem={renderItem}
      />
    </div>
  )
}
