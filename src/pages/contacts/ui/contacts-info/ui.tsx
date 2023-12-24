import { contactsData } from './config'
import style from './style.module.scss'
import { type FC } from 'react'
import { Title } from 'shared/ui'

export const ContactsInfo: FC = () => {
  return (
    <>
      <Title as="h3" size="medium">
        Gas Boiler Parts Store
      </Title>
      <div>
        {contactsData.map((item, idx) => (
          <div className={style.contact} key={idx}>
            {item.name}:{' '}
            {item.href ? (
              <a href={item.href} target="_blank">
                <span>{item.content}</span>
              </a>
            ) : (
              <span>{item.content}</span>
            )}
          </div>
        ))}
      </div>
      <div></div>
      <Title as="h3" size="medium">
        Remark
      </Title>
      <p>
        <mark className={style.mark}>
          If you liked my works, you can write to me about it or about something
          else.
        </mark>
      </p>
    </>
  )
}
