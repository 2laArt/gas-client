import style from './style.module.scss'
import Image from 'next/image'
import { useState, type FC } from 'react'
import { useMediaQuery } from 'shared/lib'
import { Slider } from 'shared/ui'

export const ProductPageImages: FC<{ images: string[] }> = ({ images }) => {
  const [activeImg, setActiveImg] = useState<string>(images[0])
  const is768 = useMediaQuery(768)

  const Item = (item: string, idx: number) => (
    <div className={style.image} key={idx}>
      <Image
        src={item}
        width={648}
        height={488}
        alt={`image ${idx}`}
        priority
        onClick={() => is768 && setActiveImg(item)}
      />
    </div>
  )
  return (
    <div>
      {!is768 && (
        <div className={style.image_active}>
          <Image
            src={activeImg}
            alt="product"
            width={648}
            height={488}
            priority
          />
        </div>
      )}
      <div className={style.images}>
        <Slider
          slideClassName={style.slide}
          slideActiveClass={style.active}
          items={images}
          renderItem={Item}
          options={{
            breakpoints: {
              768: {
                slidesPerView: 'auto',
                centeredSlides: false,
                loop: false,
                slideActiveClass: undefined,
                spaceBetween: 12,
              },
              518: {
                slidesPerView: 1.5,
              },
            },
            slidesPerView: 1.2,
            centeredSlides: true,
            scrollbar: {
              dragClass: style.scrollbar,
            },
            autoplay: false,
            loop: true,
            spaceBetween: 20,
          }}
        />
      </div>
    </div>
  )
}
