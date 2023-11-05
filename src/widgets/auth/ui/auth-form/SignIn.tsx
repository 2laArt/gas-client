import style from './style.module.scss'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ISignInData } from 'shared/api'
import { signInFx } from 'shared/store'
import { Form, IOnSubmit, InputForm } from 'shared/ui'
import { Button } from 'shared/ui/button'

export const SignIn = () => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const router = useRouter()
  const onSubmit = ({ data, resetField }: IOnSubmit<ISignInData>) => {
    !spinner && signInFx({ data, resetField, router, setSpinner })
  }
  return (
    <Form defaultValues={{} as ISignInData} onSubmit={onSubmit}>
      <h2 className={style.title}>Sign in to Website</h2>

      <span className={style.form__span}>or use your email account</span>

      <InputForm
        name="username"
        type="username"
        options={{ required: 'Username required' }}
      />
      <InputForm name="password" type="password" />

      <Button color="blue" auth size="big" loading={spinner} rounded>
        Button Text
      </Button>
    </Form>
  )
}
