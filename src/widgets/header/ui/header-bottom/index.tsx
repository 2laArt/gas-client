import { HeaderCart } from './cart'
import { SearchInput } from './search'
import style from './style.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { type FC } from 'react'
import { useMediaQuery } from 'shared/lib'
import { paths } from 'shared/routing'
import { Icon, SwitchMode } from 'shared/ui'

const HeaderBottom: FC = () => {
  const isMedia768 = useMediaQuery(768)
  return (
    <div className={style.bottom}>
      <div className="container">
        {!isMedia768 && (
          <div className={clsx(style.side, style.logo)}>
            <Link href={paths.dashboard} className={style.logo}>
              <Icon type="common" name="logo" /> <span>GAS</span>
            </Link>
          </div>
        )}
        <SearchInput />
        <div className={style.side}>
          {!isMedia768 && <SwitchMode />}
          <HeaderCart />
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
