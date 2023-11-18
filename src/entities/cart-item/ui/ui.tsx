import { getTitleNoDots } from '../lib'
import style from './style.module.scss'
import Image from 'next/image'
import { type FC } from 'react'
import { ICartItem } from 'shared/api'
import { formatToCurrency } from 'shared/lib'

type ConditionalType = { [key: string]: string | number }

interface ICartItemComponent<D = ConditionalType, C = ConditionalType>
  extends ICartItem {
  DeleteItem: FC<D>
  CounterItem: FC<C>
}
export const CartItem: FC<ICartItemComponent> = ({
  count: countState,
  partId,
  image,
  price,
  name,
  in_stock,
  boiler_manufacturer,
  parts_manufacturer,
  DeleteItem,
  CounterItem,
}) => {
  const title = getTitleNoDots(name, boiler_manufacturer, parts_manufacturer)
  return (
    <div className={style.item_box}>
      <div className={style.item}>
        <div className={style.left_part}>
          <div className={style.img_title}>
            <Image
              style={{ height: '79px' }}
              src={image}
              alt={name}
              width={79}
              height={79}
              blurDataURL={image}
            />
            <h6>{title}</h6>
          </div>
          <CounterItem count={countState} partId={partId} inStock={in_stock} />
        </div>
        <div className={style.right_part}>
          <div className={style.price}>
            {formatToCurrency(price * countState)}
          </div>

          <DeleteItem partId={partId} />
        </div>
      </div>
    </div>
  )
}
