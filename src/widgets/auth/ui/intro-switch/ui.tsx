import style from './style.module.scss'
import clsx from 'clsx'
import { useRef, type FC, type MutableRefObject } from 'react'
import { Button } from 'shared/ui/button'

export interface IIntroSwitch {
  title: string
  description: string
  buttonText: string
}

export const IntroSwitch: FC<IIntroSwitch> = ({
  buttonText,
  description,
  title,
}) => {
  const introSwitch = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchForm = () => {}
  return (
    <div className={clsx(style.switch)} ref={introSwitch}>
      <div className={style.switch__circle} ref={switchCircle1}></div>
      <div
        className={clsx(style.switch__circle, style.switch__circle_t)}
        ref={switchCircle2}
      ></div>
      <div className={clsx(style.switch__container, style.is_hidden)}>
        {/* 768  */}
        <>
          <h2 className={clsx(style.switch__title, style.title)}>{title}</h2>
          <p className={clsx(style.switch__description, style.description)}>
            {description}
          </p>
        </>
        {/*  */}
        <div className={style.btn_box}>
          <Button
            auth
            size="big"
            color="blue"
            rounded
            loading
            onClick={switchForm}
          />
        </div>
      </div>
    </div>
  )
}
