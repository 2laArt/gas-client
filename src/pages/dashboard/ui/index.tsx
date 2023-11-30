import { getDashboardData } from '../lib'
import { BrandsSlider } from './brands-slider'
import { DashboardAlert } from './dashboard-alert'
import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { type NextPage } from 'next'
import { useEffect, useState } from 'react'
import { type IBoilerPart } from 'shared/api'
import { $cart, $cartQueryStatus, $cartTotalPrice } from 'shared/store'
import { Dropdown, Title } from 'shared/ui'
import { ProductSlider } from 'widgets/product-slider'

interface IDashboard {
  newParts: IBoilerPart[]
  bestsellers: IBoilerPart[]
}
export const Dashboard: NextPage<IDashboard> = () => {
  const cartQueryStatus = useStore($cartQueryStatus)
  const { length: cartLength } = useStore($cart)
  const totalPrice = useStore($cartTotalPrice)
  const [bestsellers, setBestsellers] = useState<IBoilerPart[] | string>('')
  const [newParts, setNewParts] = useState<IBoilerPart[] | string>('')
  const [spinner, setSpinner] = useState<boolean>(false)
  const [isDisplayAlert, setDisplayAlert] = useState<boolean>(false)

  useEffect(() => {
    ;(async function () {
      setSpinner(true)
      const { bestsellers, newParts } = await getDashboardData()
      setBestsellers(bestsellers)
      setNewParts(newParts)
      setTimeout(() => setSpinner(false), 1000)
    })()
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
        <ProductSlider products={bestsellers} spinner={spinner} />
      </div>
      <div>
        <Title className={style.title_slider} as="h2">
          New Parts
        </Title>
        <ProductSlider products={newParts} spinner={spinner} />
      </div>
      <div className={clsx('card', style.about)}>
        <Title className={style.title_slider} as="h2">
          About Company
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsam illo consequatur voluptas, sed quaerat, cupiditate
          reprehenderit, dolorum nemo rerum omnis! Ex sint illum dolores dolorum
          ullam doloribus nam a? Illum quod blanditiis optio placeat delectus,
          veniam ratione voluptatum dolor iure fuga excepturi ipsum. Debitis
          mollitia ullam nesciunt nisi id voluptate vitae beatae accusantium
          hic, sit quia dolores ipsum neque!
        </p>
      </div>
    </div>
  )
}
