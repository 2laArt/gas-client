import style from '../auth.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { Form, IOnSubmit, InputForm } from 'shared/ui'

export interface ISignIn {
  username: string
  password: string
}
export const SignIn: FC = () => {
  const router = useRouter()
  const [spinner, setSpinner] = useState<boolean>(false)
  const onSubmit = ({ data, resetField }: IOnSubmit<ISignIn>) => {
    // !spinner && signInFx({ data, resetField, setSpinner, router })
  }
  return (
    <Form defaultValues={{} as ISignIn} onSubmit={onSubmit}>
      <h2 className={clsx(style.form_title, style.title)}>
        Sign in to Website
      </h2>
      <div className={style.form__icons}>
        <img className={style.form__icon} src="" alt="" />
        <img className={style.form__icon} src="" />
        <img className={style.form__icon} src="" />
      </div>
      <span className={style.form__span}>or use your email account</span>

      <InputForm
        name="username"
        type="username"
        // options={inputOption({ required: 'This field is required' })}
      />
      <InputForm
        name="password"
        type="password"
        //  options={passwordOptions()}
      />

      <a className={style.form__link}>Forgot your password?</a>
      <button className={clsx(style.form__button, style.button, style.submit)}>
        {spinner ? ' <Spinner /> ' : 'SIGN IN'}
      </button>
    </Form>
  )
}
