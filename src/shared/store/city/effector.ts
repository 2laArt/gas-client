import { setUserCity } from './store'
import { IGetUserCityFx } from './type'
import { createEffect } from 'effector'
import { toast } from 'react-toastify'
import { getGeoApi } from 'shared/api'

export const getUserCityFx = createEffect(
  async ({ coords, setSpinner }: IGetUserCityFx) => {
    try {
      setSpinner(true)
      const { data } = await getGeoApi(coords)
      if (!data.features.length) {
        toast.error('City not Found')
        return
      }
      setUserCity({
        city: data.features[0].properties.city,
        address: data.features[0].properties.address,
      })
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }
)
