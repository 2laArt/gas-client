import { SearchInput } from './search'
import style from './style.module.scss'
import clsx from 'clsx'
import { type FC } from 'react'
import { useMediaQuery } from 'shared/lib'
import { Icon } from 'shared/ui'
import { SwitchMode } from 'shared/ui/switch-mode/ui'

const HeaderBottom: FC = () => {
  const isMedia768 = useMediaQuery(768)
  return (
    <div className={style.bottom}>
      <div className="container">
        {!isMedia768 && (
          <div className={clsx(style.side, style.icon)}>
            <Icon type="common" name="logo" />
          </div>
        )}
        <SearchInput />
        <div className={style.side}>
          {!isMedia768 && <SwitchMode />}
          {/* <CartNav /> */}
          Cart
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
