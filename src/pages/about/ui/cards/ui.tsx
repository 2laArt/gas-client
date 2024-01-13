import { cardsContent } from './config'
import style from './style.module.scss'
import clsx from 'clsx'
import { CSSProperties, useMemo, type FC } from 'react'
import { Title } from 'shared/ui'

export const AboutCards: FC = () => {
  const Items = useMemo(
    () =>
      cardsContent.map((item) => (
        <div
          className={style.card}
          key={item.title}
          style={
            {
              '--image-bg': `url(${item.imgBg})`,
            } as CSSProperties
          }
        >
          <div className={clsx('card', style.cover)}>
            <Title as="h5" size="medium">
              {item.title}
            </Title>
            <div className={style.card_back}>
              <div className={style.text}>{item.text}</div>
            </div>
          </div>
        </div>
      )),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cardsContent]
  )

  return <>{Items}</>
}
