import style from './style.module.scss'
import clsx from 'clsx'
import { type FC, type PropsWithChildren } from 'react'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <main className={clsx(`${style.main} container`)}>{children}</main>
      <Footer />
    </div>
  )
}
