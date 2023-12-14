import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { CartToggleBtn } from 'features/cart-toggle'
import { useState, type FC } from 'react'
import { formatToCurrency } from 'shared/lib'
import { $auth } from 'shared/store'

interface IInfo {
  price: number
  name: string
  in_stock: number
  id: number
  compatibility: string
  description: string
  vendor_code: string
}
type TypeSection = 'compatibility' | 'description'
const sections: TypeSection[] = ['compatibility', 'description']
export const ProductPageInfo: FC<IInfo> = ({
  name,
  id,
  price,
  vendor_code,
  in_stock,
  ...props
}) => {
  const { username } = useStore($auth)
  const [section, setSection] = useState<TypeSection>('description')

  return (
    <div className={style.info}>
      <div className={style.info_top}>
        <div>
          <div className={style.price}>{formatToCurrency(price)}</div>
          <div className={style.in_stoke}>
            {!!in_stock ? 'available in stock' : 'out of stock'}
          </div>
          <div className={style.code}>Vender Code: {vendor_code}</div>
        </div>

        <div>
          {!!in_stock && (
            <CartToggleBtn
              className={style.toggle}
              username={username}
              partId={id}
              size="big"
            />
          )}
        </div>
      </div>
      <div className={style.switchers_box}>
        <div className={style.switchers_btn}>
          {sections.map((item) => (
            <button
              key={item}
              className={clsx(section === item && style.active)}
              onClick={() => setSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={style.text}>
          <h3>{name}</h3>
          <p>
            {props[section]}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            vero itaque neque excepturi molestiae est doloremque porro natus eos
            commodi culpa, illum nam corporis iste modi ut optio animi
            veritatis. Cumque ad, quidem eos et laborum earum, dignissimos
            delectus qui laudantium labore maiores vitae modi quaerat suscipit
            sunt deserunt quam quis rem illo voluptatum dicta provident.
            Deleniti accusamus ducimus sequi.
          </p>
        </div>
      </div>
    </div>
  )
}
