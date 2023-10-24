import style from './style.module.scss'
import clsx from 'clsx'
import { useState, type PropsWithChildren } from 'react'
import { Form, IOnSubmit, InputForm } from 'shared/ui'
import { Button } from 'shared/ui/button'

export interface ISignIn {
  username: string
  password: string
}
interface IForm<E extends object> extends PropsWithChildren {
  onSubmit?: ({}: IOnSubmit<E>) => void
}
export const AuthForm = <E extends ISignIn>({ children }: IForm<E>) => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const onSubmit = ({ data, resetField }: IOnSubmit<ISignIn>) => {
    console.log(data)
  }
  return (
    <div className={clsx(style.container, style.a_container)}>
      <Form defaultValues={{} as ISignIn} onSubmit={onSubmit}>
        <h2 className={clsx(style.form_title, style.title)}>
          Sign in to Website
        </h2>

        <span className={style.form__span}>or use your email account</span>

        <InputForm
          name="username"
          type="username"
          options={{ required: 'Username required' }}
        />
        <InputForm name="password" type="password" />

        <Button color="blue" auth size="big" rounded>
          Button Text
        </Button>
      </Form>
    </div>
  )
}
