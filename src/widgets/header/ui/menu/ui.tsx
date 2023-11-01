import { Location } from '../location'
import { items } from './config'
import style from './style.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { LegacyRef, forwardRef } from 'react'
import { useMediaQuery } from 'shared/lib'
import { ActiveLink } from 'shared/ui/active-link'
import { SwitchMode } from 'shared/ui/switch-mode/ui'

interface IMenu {
  className?: string
  isOpen: boolean
}

export const Menu = forwardRef<HTMLElement, IMenu>(({ className }, ref) => {
  const is768 = useMediaQuery(768)
  const { asPath } = useRouter()
  return (
    <>
      <nav
        className={clsx(style.nav, className)}
        ref={ref as LegacyRef<HTMLElement>}
      >
        <div>
          {is768 && (
            <div className="absolute top-4 right-2">
              <SwitchMode />
            </div>
          )}
          {items.map(({ href, text }, idx) => (
            <ActiveLink key={idx} href={href} asPath={asPath}>
              {text}
            </ActiveLink>
          ))}

          {is768 && <Location />}
        </div>
      </nav>
    </>
  )
})
