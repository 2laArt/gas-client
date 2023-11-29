import { BurgerMenu } from './burger-menu'
import { Menu } from './menu'
import { Profile } from './profile'
import style from './style.module.scss'
import { Location } from 'features/location'
import Link from 'next/link'
import { RefObject, type FC } from 'react'
import { useClickOutside, useLockedBody, useMediaQuery } from 'shared/lib'
import { paths } from 'shared/routing'
import { Icon } from 'shared/ui'

const HeaderTop: FC = () => {
  const isMedia768 = useMediaQuery(768)
  const { isOpen, setIsOpen, ref } = useClickOutside(false)
  const Overlay = useLockedBody({
    isOpen,
    bpHidden: 'md',
  })

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
            <Link href={paths.dashboard} className={style.logo}>
              <Icon type="common" name="logo" /> <span>GAS</span>
            </Link>
          </>
        )}
        <Profile />
      </div>
    </div>
  )
}

export default HeaderTop
