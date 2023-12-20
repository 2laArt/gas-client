import style from './style.module.scss'
import { useState } from 'react'
import { type ISignUpData } from 'shared/api'
import { signUpFx } from 'shared/store'
import { Form, InputForm, type TypeOnSubmitForm } from 'shared/ui'
import { Button } from 'shared/ui/button'

interface IForm {
  switchForm: () => void
}
export const SignUp = ({ switchForm }: IForm) => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const onSubmit: TypeOnSubmitForm<ISignUpData> = ({ data, resetField }) => {
    !spinner && signUpFx({ data, resetField, setSpinner, switchForm })
  }
  return (
    <Form defaultValues={{} as ISignUpData} onSubmit={onSubmit}>
      <h2 className={style.title}>Sign in to Website</h2>

      <span className={style.form__span}>or use your email account</span>

      <InputForm
        name="username"
        type="username"
        options={{ required: 'Username required' }}
      />
      <InputForm name="email" type="email" />
      <InputForm name="password" type="password" />

      <Button
        auth
        size="big"
        color="blue"
        rounded
        loading={spinner}
        spinner={{ color: 'bg-white' }}
      >
        Sign Up
      </Button>
    </Form>
  )
}
