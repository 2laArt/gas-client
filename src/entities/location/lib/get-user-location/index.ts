import { getUserCityFx } from 'entities/location/model'
import type { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import { type ICoords } from 'shared/api'

export const getUserLocation = (
  setSpinner: Dispatch<SetStateAction<boolean>>
) => {
  const getLocation = async ({ lon, lat }: ICoords) => {
    try {
      setSpinner(true)
      const data = await getUserCityFx({ lat, lon })
      if (!data.features.length) {
        toast.error('City not Found')
        return
      }
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }

  const successFunction = (position: GeolocationPosition) => {
    const { latitude: lat, longitude: lon } = position.coords
    getLocation({ lat, lon })
  }
  const errorFunction = () => {
    toast.error('Geocoder failed')
  }
  navigator.geolocation.getCurrentPosition(successFunction, errorFunction)
}
