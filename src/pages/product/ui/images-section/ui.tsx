import style from './style.module.scss'
import Image from 'next/image'
import { useState, type FC } from 'react'
import { useMediaQuery } from 'shared/lib'
import { Slider } from 'shared/ui'
import { EffectCards } from 'swiper/modules'
import { type SwiperOptions } from 'swiper/types'

export const ProductPageImages: FC<{ images: string[] }> = ({ images }) => {
  const [activeImg, setActiveImg] = useState<string>(images[0])
  const is768 = useMediaQuery(768)
  const options: SwiperOptions = {
    spaceBetween: 12,
    scrollbar: {
      dragClass: style.scrollbar,
    },
    autoplay: false,
    loop: false,
  }
  const optionsMobile: SwiperOptions = {
    effect: 'cards',
    autoplay: false,
    loop: true,
    centeredSlides: true,
  }
  const Item = (item: string, idx: number) => (
    <div className={style.image} key={idx}>
      <Image
        src={item}
        width={648}
        height={488}
        alt={`boiler image ${idx}`}
        priority
        onClick={() => !is768 && setActiveImg(item)}
      />
    </div>
  )

  return (
    <div>
      {!is768 ? (
        <>
          <div className={style.image_active}>
            <Image
              src={activeImg}
              alt="product"
              width={648}
              height={488}
              priority
            />
          </div>
          <div className={style.images}>
            <Slider
              navigation={false}
              slidesPerGroupSkip={undefined}
              items={images}
              renderItem={Item}
              options={options}
            />
          </div>
        </>
      ) : (
        <div className={style.images}>
          <Slider
            navigation={false}
            slideClassName={style.slide_mobile}
            items={images}
            renderItem={Item}
            options={optionsMobile}
            modules={[EffectCards]}
          />
        </div>
      )}
    </div>
  )
}
