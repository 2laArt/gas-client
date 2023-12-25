import style from './style.module.scss'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { type ISignInData } from 'shared/api'
import { signInFx } from 'shared/store'
import { Form, InputForm, type TypeOnSubmitForm } from 'shared/ui'
import { Button } from 'shared/ui/button'

export const SignIn = () => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const router = useRouter()
  const onSubmit: TypeOnSubmitForm<ISignInData> = ({ data, resetField }) => {
    !spinner && signInFx({ data, resetField, router, setSpinner })
  }
  return (
    <Form defaultValues={{} as ISignInData} onSubmit={onSubmit}>
      <h2 className={style.title}>Sign in to the GAS website</h2>

      <span className={style.form__span}>
        Please fill in the required fields
      </span>

      <InputForm
        name="username"
        type="username"
        options={{ required: 'Username required' }}
      />
      <InputForm name="password" type="password" />

      <Button
        auth
        size="big"
        color="blue"
        rounded
        loading={spinner}
        spinner={{ color: 'bg-white' }}
      >
        Sign In
      </Button>
    </Form>
  )
}
