import style from './style.module.scss'
import clsx from 'clsx'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from 'shared/ui/spinner'

export const Location: FC = () => {
  const city = 'city'
  const [spinner, setSpinner] = useState<boolean>(false)
  const successFunction = (position: GeolocationPosition) => {
    const { latitude: lat, longitude: lon } = position.coords
    // getUserCityFx
  }
  const errorFunction = () => {
    toast.error('Geocoder failed')
  }
  const getUserPosition = () => {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction)
  }
  return (
    <button
      onClick={getUserPosition}
      className={clsx(style.location, city && 'pointer-events-none')}
    >
      <span className="inline-block -rotate-45">➢</span>
      <span className={style.location_box}>
        {spinner ? <Spinner /> : city ? city : 'Location...'}
      </span>
    </button>
  )
}
