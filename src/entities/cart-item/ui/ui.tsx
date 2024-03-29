import { getTitleNoDots } from '../lib'
import style from './style.module.scss'
import Image from 'next/image'
import { memo, type FC } from 'react'
import { type ICartItem } from 'shared/api'
import { formatToCurrency } from 'shared/lib'

interface ICartItemComponent<D = any, C = any> extends ICartItem {
  DeleteItem: FC<D>
  CounterItem: FC<C>
}
// eslint-disable-next-line react/display-name
export const CartItem: FC<ICartItemComponent> = memo(
  ({
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
            <CounterItem
              count={countState}
              partId={partId}
              inStock={in_stock}
            />
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
)
