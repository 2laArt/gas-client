import { Location } from '../../../../../features/location'
import { items } from './config'
import style from './style.module.scss'
import clsx from 'clsx'
import { SwitchMode } from 'features/switch-mode'
import { useRouter } from 'next/router'
import { LegacyRef, forwardRef } from 'react'
import { useMediaQuery } from 'shared/lib'
import { ActiveLink } from 'shared/ui/active-link'

interface IMenu {
  className?: string
  isOpen: boolean
}

// eslint-disable-next-line react/display-name
export const Menu = forwardRef<HTMLElement, IMenu>(
  ({ className, isOpen }, ref) => {
    const is768 = useMediaQuery(768)
    const { route } = useRouter()

    return (
      <>
        <nav
          className={clsx(style.nav, !isOpen && style.close, className)}
          ref={ref as LegacyRef<HTMLElement>}
        >
          {is768 && (
            <div className={style.mode}>
              <SwitchMode />
            </div>
          )}
          <ul>
            {items.map(({ href, text }, idx) => (
              <li key={idx}>
                <ActiveLink href={href} pathname={route}>
                  {text}
                </ActiveLink>
              </li>
            ))}

            {is768 && (
              <li>
                <Location />
              </li>
            )}
          </ul>
        </nav>
      </>
    )
  }
)
