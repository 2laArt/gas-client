import style from './style.module.scss'
import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import { Footer } from 'widgets/footer'
import { Header } from 'widgets/header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <section className={clsx(`${style.section_my} container`)}>
        {children}
      </section>
      <Footer />
    </div>
  )
}
