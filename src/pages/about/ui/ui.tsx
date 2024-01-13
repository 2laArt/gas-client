import { useObserveAboutPage } from '../lib'
import { AboutCards } from './cards'
import style from './style.module.scss'
import clsx from 'clsx'
import { type NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useLayoutEffect } from 'react'
import { useMediaQuery } from 'shared/lib'
import { setMeta } from 'shared/store'

export const About: NextPage = () => {
  const { ref, connect, disconnect } = useObserveAboutPage(style.show)
  const is640 = useMediaQuery(640)
  useEffect(() => {
    if (is640) {
      disconnect()
    } else {
      connect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [is640])
  useLayoutEffect(() => {
    setMeta({
      title: 'About the Store',
      description:
        'Here you will find and get acquainted with our ideology and goals',
    })
  }, [])

  return (
    <div className={style.parent} ref={ref}>
      <div className={clsx(style.child)}>
        <Image
          src={`/images/about-imgs/about2.jpg`}
          alt={`images-boiler`}
          width={400}
          height={400}
          priority
        />
        <div className={clsx('small_scroll', style.text)}>
          The oil & gas industry works closely with government to protect the
          health and safety of workers and public. Industry regulations reflect
          modern scientific knowledge about hazards and the technology available
          to reduce them. New designed management systems in petroleum industry
          are safer not only for workers, but for environment too.
        </div>
      </div>
      <div className={clsx(style.cards_box)}>
        <AboutCards />
      </div>
      <div className={clsx(style.child)}>
        <Image
          src={`/images/about-imgs/about3.jpg`}
          alt={`images-boiler`}
          width={400}
          height={400}
          priority
        />
        <div className={clsx('small_scroll', style.text)}>
          Today protecting terrestrial ecosystems is a key aspect of development
          of oil & gas industry. Most land use by oil and gas industry is
          temporary. Seismic crews conduct the surveys and move on. The average
          well produces for about 20 to 25 years. Other facilities will be shut
          down as soon resources are depleted and new technologies emerge.
          National and foreign operating companies are responsible for sites
          until reclamation is complete. New technologies allows the industry to
          reduce impacts considerably. The design of new facilities now shall
          include full cycle provisions - from construction through
          decommissioning.
        </div>
      </div>
    </div>
  )
}
