import style from './style.module.scss'
import clsx from 'clsx'
import { type FC } from 'react'
import { Button } from 'shared/ui/button'

export interface IIntroSwitch {
  title: string
  description: string
  buttonText: string
  spinner: boolean
  switchForm: () => void
}

export const IntroSwitch: FC<IIntroSwitch> = ({
  buttonText,
  description,
  title,
  spinner,
  switchForm,
}) => {
  return (
    <>
      <h2 className={clsx(style.switch__title, style.title)}>{title}</h2>
      <p className={clsx(style.switch__description, style.description)}>
        {description}
      </p>
      {/*  */}
      <div className={style.btn_box}>
        <Button
          auth
          size="big"
          color="blue"
          rounded
          loading={spinner}
          onClick={switchForm}
        >
          {' '}
          {buttonText}
        </Button>
      </div>
    </>
  )
}
