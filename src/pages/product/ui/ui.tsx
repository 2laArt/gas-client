import { getSimilarProducts } from '../lib'
import { ProductPageImages } from './images-section/ui'
import { ProductPageInfo } from './info-section/ui'
import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { type NextPage } from 'next'
import { $filters } from 'pages/catalog/model'
import { useEffect, useLayoutEffect, useState } from 'react'
import { type IBoilerPart } from 'shared/api'
import { setMeta } from 'shared/store'
import { Title } from 'shared/ui'
import { ProductSlider } from 'widgets/product-slider'

export interface IProductPageProps {
  product: IBoilerPart
}
export const ProductPage: NextPage<IProductPageProps> = ({ product }) => {
  const {
    price: { max, min },
  } = useStore($filters)
  const [similar, setSimilar] = useState<IBoilerPart[]>([])
  const [spinner, setSpinner] = useState<boolean>(true)

  useEffect(() => {
    setSpinner(true)
    getSimilarProducts({
      currentPrice: product.price,
      maxLimit: max.limit,
      minLimit: min.limit,
    })
      .then((data) => setSimilar(data ?? []))
      .finally(() => setTimeout(() => setSpinner(false), 2000))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useLayoutEffect(() => {
    setMeta({
      title: product.name,
      description: product.description,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return product ? (
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
          {!!similar.length && (
            <div>
              <h3 className={style.title_slider}>Recommendations</h3>
              <ProductSlider
                products={similar}
                spinner={spinner}
                options={{
                  autoplay: false,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <Title as="h6" size="xl">
      Product is not Found
    </Title>
  )
}
