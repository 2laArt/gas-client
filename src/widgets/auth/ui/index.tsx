import { SignIn, SignUp } from './auth-form'
import { IntroSwitch } from './intro-switch/ui'
import style from './style.module.scss'
import clsx from 'clsx'
import { useRef, useState, type FC, type MutableRefObject } from 'react'
import { SwitchMode } from 'shared/ui/switch-mode/ui'

interface ITexts {
  title: string
  description: string
  buttonText: string
}
const texts: { signIn: ITexts; signUp: ITexts } = {
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
  const [isAnimated, setIsAnimated] = useState<boolean>(true)
  const switchC1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchC2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCtn = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle2 = useRef() as MutableRefObject<HTMLDivElement>
  const bContainer = useRef() as MutableRefObject<HTMLDivElement>
  const aContainer = useRef() as MutableRefObject<HTMLDivElement>
  const switchForm = () => {
    if (!isAnimated) return
    setIsAnimated(false)
    switchCtn.current.classList.add(style.is_gx)
    setTimeout(() => {
      switchCtn.current.classList.remove(style.is_gx)
      setIsAnimated(true)
    }, 1500)

    switchCtn.current.classList.toggle(style.is_txr)
    switchCircle1.current.classList.toggle(style.is_txr)
    switchCircle2.current.classList.toggle(style.is_txr)

    switchC1.current.classList.toggle(style.is_hidden)
    switchC2.current.classList.toggle(style.is_hidden)
    setTimeout(() => {
      aContainer.current.classList.toggle(style.is_txl)
      bContainer.current.classList.toggle(style.is_txl)
      bContainer.current.classList.toggle(style.is_z200)
    }, 300)
  }
  return (
    <div className={clsx(style.main)}>
      <div className={style.mood}>
        <SwitchMode />
      </div>
      <div
        className={clsx(style.container, style.a_container)}
        ref={aContainer}
      >
        {/* form sign up */}
        <SignUp />
      </div>
      <div
        className={clsx(style.container, style.b_container)}
        ref={bContainer}
      >
        {/* form sign in */}
        <SignIn />
      </div>
      <div className={clsx(style.switch)} ref={switchCtn}>
        <div className={style.switch__circle} ref={switchCircle1}></div>
        <div
          className={clsx(style.switch__circle, style.switch__circle_t)}
          ref={switchCircle2}
        ></div>
        {/* form sign in */}
        <div className={style.switch__container} ref={switchC1}>
          <IntroSwitch
            {...texts.signIn}
            switchForm={switchForm}
            spinner={!isAnimated}
          />
        </div>
        {/* form sign up */}
        <div
          className={clsx(style.switch__container, style.is_hidden)}
          ref={switchC2}
        >
          <IntroSwitch
            {...texts.signUp}
            switchForm={switchForm}
            spinner={!isAnimated}
          />
        </div>
      </div>
    </div>
  )
}
