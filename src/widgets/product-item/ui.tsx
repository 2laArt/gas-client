import style from './style.module.scss'
import clsx from 'clsx'
import { CartToggleBtn } from 'features/cart-toggle'
import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import { formatToCurrency } from 'shared/lib'
import { paths } from 'shared/routing'

interface IProductItem {
  className?: string
  images: string
  id: number
  name: string
  price: number
  vendor_code: string
  username: string
}

export const ProductItem: FC<IProductItem> = ({
  images,
  id,
  name,
  vendor_code,
  price,
  className,
  username,
}) => {
  return (
    <div className={clsx('card', style.product_item, className)}>
      <div className={style.product_item_image}>
        <Image
          priority
          src={JSON.parse(images)[0]}
          alt={name}
          width={232}
          height={174}
        />
      </div>
      <div className={style.product_item_name}>
        {!!username ? (
          <Link
            className={style.a}
            href={paths.catalogProduct(id)}
            data-replace={name}
          >
            <span>{name}</span>
          </Link>
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div className={style.product_item_vender}>
        Vender Code: {vendor_code}
      </div>
      <div className={style.product_item_price}>
        {formatToCurrency(price)}

        {!!username && <CartToggleBtn partId={id} username={username} />}
      </div>
    </div>
  )
}
