import { BurgerMenu } from './burger-menu'
import { Location } from './location'
import { Menu } from './menu'
import { Profile } from './profile'
import style from './style.module.scss'
import { RefObject, type FC } from 'react'
import { useClickOutside, useLockedBody, useMediaQuery } from 'shared/lib'
import { Icon } from 'shared/ui'

const HeaderTop: FC = () => {
  const isMedia768 = useMediaQuery(768)
  const { setIsOpen, isOpen, ref } = useClickOutside(false)
  const Overlay = useLockedBody(isOpen)
  return (
    <div className={style.menu}>
      <div className={`container`}>
        {Overlay}
        {!isMedia768 && (
          <>
            <Location />
          </>
        )}
        <Menu
          className={!isOpen ? style.close : ''}
          isOpen={isOpen}
          ref={ref as RefObject<HTMLElement>}
        />
        {isMedia768 && (
          <>
            <BurgerMenu
              isOpen={isOpen}
              setIsOpen={() => setIsOpen((prev) => !prev)}
            />
            <span className={style.logo}>
              <Icon type="common" name="logo" />
            </span>
          </>
        )}
        <Profile />
      </div>
    </div>
  )
}

export default HeaderTop
