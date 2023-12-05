import style from './style.module.scss'
import { useStore } from 'effector-react'
import { type FC } from 'react'
import { type IBoilerPart } from 'shared/api'
import { $auth } from 'shared/store'
import { SkeletonProduct, Slider, Title } from 'shared/ui'
import { ProductItem } from 'widgets/product-item'

interface IDashboardSlider {
  products: IBoilerPart[] | string
  spinner: boolean
}

export const ProductSlider: FC<IDashboardSlider> = ({ products, spinner }) => {
  const { username } = useStore($auth)
  const isProducts = Array.isArray(products) && !!products.length
  const isWaring = !isProducts && !spinner && typeof products === 'string'
  const renderItem = (item: any, idx: number) =>
    isProducts && !spinner ? (
      <ProductItem {...item} key={idx} username={username} />
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