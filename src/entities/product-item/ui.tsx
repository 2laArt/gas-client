import style from './style.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { type FC } from 'react'
import { type IBoilerPart } from 'shared/api'
import { formatToCurrency } from 'shared/lib'
import { paths } from 'shared/routing'

type ConditionalType = { [key: string]: string | number }

interface IProductItem<T = ConditionalType> extends IBoilerPart {
  className?: string
  CartToggle: FC<T>
}
export const ProductItem: FC<IProductItem> = ({
  images,
  id,
  name,
  vendor_code,
  price,
  className,
  CartToggle,
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
        <Link className={style.a} href={paths.catalogProduct(id)}>
          {name}
        </Link>
      </div>
      <div className={style.product_item_vender}>
        Vender Code: {vendor_code}
      </div>
      <div className={style.product_item_price}>
        {formatToCurrency(price)}
        {/*  */}
        <CartToggle />
        {/*  */}
      </div>
    </div>
  )
}
