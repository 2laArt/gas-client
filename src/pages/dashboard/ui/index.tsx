import { BrandsSlider } from './brands-slider'
import { advList } from './config'
import { DashboardAlert } from './dashboard-alert'
import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { type NextPage } from 'next'
import { useEffect, useLayoutEffect, useState } from 'react'
import { type IBoilerPart } from 'shared/api'
import { useMediaQuery } from 'shared/lib'
import { $cart, $cartQueryStatus, $cartTotalPrice, setMeta } from 'shared/store'
import { Dropdown, Title } from 'shared/ui'
import { type SwiperOptions } from 'swiper/types'
import { ProductSlider } from 'widgets/product-slider'

interface IDashboard {
  newParts: IBoilerPart[] | string
  bestsellers: IBoilerPart[] | string
}
export const Dashboard: NextPage<IDashboard> = ({ bestsellers, newParts }) => {
  const cartQueryStatus = useStore($cartQueryStatus)
  const { length: cartLength } = useStore($cart)
  const totalPrice = useStore($cartTotalPrice)
  const [isDisplayAlert, setDisplayAlert] = useState<boolean>(false)
  const is768 = useMediaQuery(768)
  const options: SwiperOptions = {
    autoplay: !is768,
  }
  useLayoutEffect(() => {
    setMeta({
      title: 'Dashboard',
      description: 'Get to know our store',
    })
  }, [])
  useEffect(() => {
    if (cartQueryStatus === 'finished') {
      setTimeout(() => setDisplayAlert(!!cartLength), 3000)
    }
  }, [cartQueryStatus, cartLength])
  return (
    <div className={style.dashboard}>
      <Dropdown isOpen={isDisplayAlert}>
        <DashboardAlert
          closeAlert={() => setDisplayAlert(false)}
          count={cartLength}
          totalPrice={totalPrice}
        />
      </Dropdown>

      <Title size="xl">Details for gas boilers</Title>
      <BrandsSlider />
      <div>
        <Title className={style.title_slider} as="h2">
          Bestsellers
        </Title>
        <ProductSlider options={options} products={bestsellers} />
      </div>
      <div>
        <Title className={style.title_slider} as="h2">
          New Parts
        </Title>
        <ProductSlider options={options} products={newParts} />
      </div>
      <div className={clsx('card', style.about)}>
        <Title className={style.title_slider} as="h2">
          List of Advantages
        </Title>
        <ul>
          {advList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
