import style from './style.module.scss'
import clsx from 'clsx'
import { useStore } from 'effector-react'
import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { getUserCityFx } from 'shared/store'
import { $userCity } from 'shared/store/city/store'
import { Button } from 'shared/ui/button'

export const Location: FC = () => {
  const { city } = useStore($userCity)
  const [spinner, setSpinner] = useState<boolean>(false)
  const successFunction = (position: GeolocationPosition) => {
    const { latitude: lat, longitude: lon } = position.coords
    getUserCityFx({ coords: { lat, lon }, setSpinner })
  }
  const errorFunction = () => {
    toast.error('Geocoder failed')
  }
  const getUserPosition = () => {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction)
  }
  return (
    <Button
      loading={spinner}
      onClick={getUserPosition}
      disabled={!!city}
      className={clsx(style.location, city && 'pointer-events-none')}
    >
      <span className="inline-block -rotate-45">➢</span>
      <span className={style.location_box}>{city ? city : 'Location...'}</span>
    </Button>
  )
}
