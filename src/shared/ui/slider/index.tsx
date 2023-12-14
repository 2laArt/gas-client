import style from './style.module.scss'
import clsx from 'clsx'
import { useCallback, type ReactNode } from 'react'
import 'swiper/css'
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import { type SwiperOptions } from 'swiper/types/swiper-options'

export interface ISlider<T> extends SwiperProps {
  items: T[] | undefined
  prevBtnClass?: string
  nextBtnClass?: string
  renderItem: (item: T, idx: number) => ReactNode
  className?: string
  slideClassName?: string
  containerOffsets?: boolean
  options?: SwiperOptions
}
export function Slider<T>({
  items,
  renderItem,
  className,
  slideClassName,
  navigation = true,
  options,
  modules,
  prevBtnClass,
  nextBtnClass,
  ...props
}: ISlider<T>) {
  const renderItems = useCallback(
    (_items: typeof items) =>
      _items?.map((item, idx) => (
        <SwiperSlide
          style={{ width: 'auto' }}
          className={slideClassName}
          key={idx}
        >
          {renderItem(item, idx)}
        </SwiperSlide>
      )),
    [slideClassName, renderItem]
  )

  const swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',

    loop: true,
    autoplay: {
      delay: 2000,
      pauseOnMouseEnter: true,
    },
    scrollbar: false,
    ...options,
  }
  const DEFAULT_MODULES = [Navigation, Autoplay, Scrollbar]
  return (
    <Swiper
      className={clsx(style.slider, className)}
      modules={[...(modules ?? DEFAULT_MODULES)]}
      {...swiperOptions}
      {...props}
    >
      {renderItems(items)}
    </Swiper>
  )
}
