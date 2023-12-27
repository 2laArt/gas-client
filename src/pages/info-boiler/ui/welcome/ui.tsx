import style from './style.module.scss'
import clsx from 'clsx'
import { type FC } from 'react'
import { Icon, Title } from 'shared/ui'

export const InfoWelcome: FC = () => {
  return (
    <div className={clsx('card', style.welcome)}>
      <Title size="xl">Selection of Details</Title>
      <div className={style.ps}>
        <p>
          Hello, here we will help you choose spare parts using the example of
          an interactive model.
        </p>
        <p className="py-2">
          Please click on the{' '}
          <span className={style.sign_welcome}>
            <Icon type="common" name="exclamation" />
          </span>{' '}
          signs
        </p>
      </div>
    </div>
  )
}
