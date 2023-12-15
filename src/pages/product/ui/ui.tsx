import { ProductPageImages } from './images-section/ui'
import { ProductPageInfo } from './info-section/ui'
import style from './style.module.scss'
import clsx from 'clsx'
import { type NextPage } from 'next'
import { type IBoilerPart } from 'shared/api'
import { Title } from 'shared/ui'

export interface IProductPageProps {
  product: IBoilerPart
}
export const ProductPage: NextPage<IProductPageProps> = ({ product }) => {
  return (
    product && (
      <>
        <div className={style.product}>
          <Title size="xl">{product.name}</Title>
          <div className={clsx('card', style.box)}>
            <div className={style.left}>
              <div className={style.images_box}>
                {product.images ? (
                  <ProductPageImages images={JSON.parse(product.images)} />
                ) : (
                  <mark>something is wrong</mark>
                )}
              </div>
            </div>
            <ProductPageInfo {...product} />
          </div>
          <div>
            <div>
              <h3 className={style.title_slider}>Recommendations</h3>
            </div>
          </div>
        </div>
      </>
    )
  )
}
