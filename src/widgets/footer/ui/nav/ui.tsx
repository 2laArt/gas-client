import { contacts, navItems } from './config'
import style from './style.module.scss'
import { FooterContact } from './ui/contact'
import { FooterColum } from './ui/footer-colum'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { paths } from 'shared/routing'
import { ActiveLink, Icon } from 'shared/ui'

export const FooterNav: FC = () => {
  const { store, company } = navItems
  const { route } = useRouter()
  return (
    <div className={style.nav}>
      <div className={style.logo_box}>
        <ActiveLink
          pathname={route}
          href={paths.dashboard}
          className={style.logo}
        >
          <span>
            <Icon type="common" name="logo-footer" />
          </span>
          GAS
        </ActiveLink>
      </div>

      <FooterColum title={store.title}>
        {store.items.map((item) => (
          <div key={item.href}>
            <ActiveLink pathname={route} href={item.href}>
              {item.text}
            </ActiveLink>
          </div>
        ))}
      </FooterColum>
      <FooterColum title={company.title}>
        {company.items.map((item) => (
          <div key={item.href}>
            <ActiveLink pathname={route} href={item.href}>
              {item.text}
            </ActiveLink>
          </div>
        ))}
      </FooterColum>
      <FooterColum title={contacts.title}>
        {contacts.items.map((item) => (
          <FooterContact
            key={item.href}
            href={item.href}
            icon={item.icon}
            text={item.text}
            title={item.title}
          />
        ))}
      </FooterColum>
    </div>
  )
}
