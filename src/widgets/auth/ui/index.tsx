import { AuthForm } from './auth-form'
import { IIntroSwitch, IntroSwitch } from './intro-switch/ui'
import style from './style.module.scss'
import clsx from 'clsx'
import { FC } from 'react'

const texts: { signIn: IIntroSwitch; signUp: IIntroSwitch } = {
  signIn: {
    title: 'Welcome Back !',
    description:
      'To keep connected with us please login with your personal info',
    buttonText: 'SIGN IN',
  },
  signUp: {
    title: 'Hello Friend !',
    description: 'Enter your personal details and start journey with us',
    buttonText: 'SIGN UP',
  },
}

export const AuthPage: FC = () => {
  return (
    <div className={clsx(style.main)}>
      <AuthForm />
      <IntroSwitch {...texts.signIn} />
    </div>
  )
}
