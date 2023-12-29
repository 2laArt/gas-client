import style from './style.module.scss'
import clsx from 'clsx'
import { type FC } from 'react'
import { useMediaQuery } from 'shared/lib'
import { Button } from 'shared/ui/button'

export interface IIntroTexts {
  title: string
  description: string
  buttonText: string
}
interface IIntroSwitch extends IIntroTexts {
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
  const is768 = useMediaQuery(768)
  return (
    <>
      {!is768 && (
        <>
          <h2 className={clsx(style.switch__title, style.title)}>{title}</h2>
          <p className={clsx(style.switch__description, style.description)}>
            {description}
          </p>
        </>
      )}
      {/*  */}
      <Button
        auth
        size="big"
        color="blue"
        rounded
        loading={spinner}
        onClick={switchForm}
        className={style.btn}
        spinner={{ color: 'bg-white' }}
      >
        {buttonText}
      </Button>
    </>
  )
}
