import style from './style.module.scss'
import clsx from 'clsx'
import { PropsWithChildren, ReactNode } from 'react'
import { useMediaQuery } from 'shared/lib'

interface IFooterColum extends PropsWithChildren {
  title?: ReactNode | string
}

export const FooterColum = ({ children, title }: IFooterColum) => {
  const is518 = useMediaQuery(518)
  return (
    <div className={clsx(style.col)}>
      {!is518 ? (
        <>
          <h6>{title}</h6>
          <div className={style.content}>{children}</div>
        </>
      ) : (
        'mobile'
      )}
    </div>
  )
}
