import style from './style.module.scss'
import { FC } from 'react'
import { Icon, IconName } from 'shared/ui'

export interface IFooterContact {
  icon: IconName<'common'>
  href: string
  text: string
  title: string
}

export const FooterContact: FC<IFooterContact> = ({
  href,
  icon,
  text,
  title,
}) => {
  return (
    <div className={style.contact}>
      <div>{title}</div>
      <div>
        <a className={style.link} href={href}>
          <span className={style.icon}>
            <Icon type="common" name={icon} />
          </span>
          {text}
        </a>
      </div>
    </div>
  )
}
