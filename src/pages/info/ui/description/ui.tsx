import { type IInteractiveSigns } from '../config'
import style from './style.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { type FC } from 'react'
import { Title } from 'shared/ui'

interface IInfoDescription extends IInteractiveSigns {
  imgSize: number
}
export const InfoDescription: FC<IInfoDescription> = ({
  imgSize,
  name,
  text,
}) => {
  return (
    <div className={clsx('small_scroll', style.description)}>
      <Image
        src={`/images/boiler/parts/${name}.png`}
        alt={'part'}
        width={imgSize}
        height={imgSize}
      />
      <Title size="medium" as="h2">
        {name}
      </Title>
      <p> {text}</p>
    </div>
  )
}
