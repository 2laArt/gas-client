import { brandItems, type IBrandItem } from './config'
import style from './style.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Slider } from 'shared/ui'

export const BrandsSlider: FC = () => {
  const itemCallback = (item: IBrandItem) => (
    <div
      key={item.id}
      className={clsx('card', style.slide_item)}
      style={{ width: '180px' }}
    >
      {/* <img src={item.img} alt={item.alt} /> */}
      <Image alt={item.alt} src={item.img} width={144} height={44} />
    </div>
  )
  return (
    <div className={style.slider}>
      <Slider items={brandItems} renderItem={itemCallback} />
    </div>
  )
}