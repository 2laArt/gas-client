import style from './style.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface IActiveLink extends PropsWithChildren {
  href: string
  pathname: string
  className?: string
}
export const ActiveLink: FC<IActiveLink> = ({
  href,
  pathname,
  children,
  className,
}) => {
  const isActive = href.includes(pathname)
  return (
    <Link
      href={href}
      className={clsx(style.link, isActive && style.link_active, className)}
    >
      {children}
    </Link>
  )
}
