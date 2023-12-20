import style from './style.module.scss'
import { type FC } from 'react'
import {
  Button,
  Form,
  InputForm,
  Textarea,
  Title,
  type TypeOnSubmitForm,
} from 'shared/ui'

export interface IContactsFormData {
  name: string
  email: string
  telephone: string
  message: string
}
interface IContactsForm {
  onSubmit: TypeOnSubmitForm<IContactsFormData>
  spinner: boolean
}
export const ContactsForm: FC<IContactsForm> = ({ onSubmit, spinner }) => {
  return (
    <>
      <Title as="h3" size="medium">
        Feedback Form
      </Title>
      <div>
        <Form
          defaultValues={{} as IContactsFormData}
          className={style.form}
          onSubmit={onSubmit}
        >
          <h5>Name</h5>
          <InputForm name="name" type="text" />
          <h5>Phone Number</h5>
          <InputForm name="telephone" type="tel" />
          <h5>Email</h5>
          <InputForm name="email" type="email" />
          <Textarea name="message" />
          <div className={style.btn}>
            <Button loading={spinner} spinner={{ size: 20 }}>
              SEND
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}
