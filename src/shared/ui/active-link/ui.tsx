import style from './style.module.scss'
import clsx from 'clsx'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface IActiveLink extends PropsWithChildren {
  href: string
  asPath: string
  className?: string
}
export const ActiveLink: FC<IActiveLink> = ({
  href,
  asPath,
  children,
  className,
}) => {
  const isActive = asPath.includes(href)
  return (
    <Link
      href={href}
      className={clsx(style.link, isActive && style.link_active, className)}
    >
      {children}
    </Link>
  )
}
