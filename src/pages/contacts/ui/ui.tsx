import { useSubmitEmail } from '../lib'
import { ContactsForm } from './contacts-form'
import { ContactsInfo } from './contacts-info'
import style from './style.module.scss'
import clsx from 'clsx'
import { type NextPage } from 'next'
import { Title } from 'shared/ui'

export const Contacts: NextPage = () => {
  const { sendEmail, spinner } = useSubmitEmail()
  return (
    <div className={style.contacts}>
      <Title size="xl">Contacts</Title>
      <div className={style.boxes}>
        <div className={clsx('card', style.box)}>
          <ContactsInfo />
        </div>
        <div className={clsx('card', style.box)}>
          <ContactsForm onSubmit={sendEmail} spinner={spinner} />
        </div>
      </div>
    </div>
  )
}
