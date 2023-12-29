import { observeAboutPage } from '../lib'
import { AboutCards } from './cards'
import style from './style.module.scss'
import clsx from 'clsx'
import { type NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { setMeta } from 'shared/store'

export const About: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    observeAboutPage(ref, style.show)
  }, [])
  useLayoutEffect(() => {
    setMeta({
      title: 'About the Store',
      description:
        'Here you will find and get acquainted with our ideology and goals',
    })
  }, [])
  const arr = [...Array(4)].map((_, idx) => (
    <div key={idx} className={style.child}>
      <Image
        src={`/images/about-imgs/about${idx + 1}.jpg`}
        alt={`images-boiler${idx + 1}`}
        width={400}
        height={400}
        priority
      />
      <div className={clsx('small_scroll', style.text)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        animi veritatis doloremque, nostrum ea dolorum, unde dolores architecto
        cum fugit atque. Quia vel quisquam facere, nihil reprehenderit
        blanditiis quis at? Officiis ipsa quas doloribus sequi, placeat
        cupiditate vel magnam at voluptatum tempora consectetur ratione nisi
        tenetur necessitatibus eligendi iure deleniti quia explicabo eum maxime,
        animi molestiae recusandae! Dolorum, at laborum.
      </div>
    </div>
  ))

  return (
    <div className={style.parent} ref={ref}>
      <div className={style.child}>
        <Image
          src={`/images/about-imgs/about2.jpg`}
          alt={`images-boiler`}
          width={400}
          height={400}
          priority
        />
        <div className={clsx('small_scroll', style.text)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          animi veritatis doloremque, nostrum ea dolorum, unde dolores
          architecto cum fugit atque. Quia vel quisquam facere, nihil
          reprehenderit blanditiis quis at? Officiis ipsa quas doloribus sequi,
          placeat cupiditate vel magnam at voluptatum tempora consectetur
          ratione nisi tenetur necessitatibus eligendi iure deleniti quia
          explicabo eum maxime, animi molestiae recusandae! Dolorum, at laborum.
        </div>
      </div>
      <div className={style.cards_box}>
        <AboutCards />
      </div>
      <div className={style.child}>
        <Image
          src={`/images/about-imgs/about3.jpg`}
          alt={`images-boiler`}
          width={400}
          height={400}
          priority
        />
        <div className={clsx('small_scroll', style.text)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          animi veritatis doloremque, nostrum ea dolorum, unde dolores
          architecto cum fugit atque. Quia vel quisquam facere, nihil
          reprehenderit blanditiis quis at? Officiis ipsa quas doloribus sequi,
          placeat cupiditate vel magnam at voluptatum tempora consectetur
          ratione nisi tenetur necessitatibus eligendi iure deleniti quia
          explicabo eum maxime, animi molestiae recusandae! Dolorum, at laborum.
        </div>
      </div>
    </div>
  )
}
