import { observeAboutPage } from '../lib'
import style from './style.module.scss'
import { type NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export const About: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    observeAboutPage(ref, style.show)
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
      <div className={style.text}>
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
      {arr}
    </div>
  )
}
