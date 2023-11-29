import { IUserCity } from './type'
import { createEffect, createStore } from 'effector'
import { getGeoApi, type ICoords } from 'shared/api'

export const getUserCityFx = createEffect(async (coords: ICoords) => {
  return (await getGeoApi(coords)).data
})

export const $userCity = createStore<IUserCity>({} as IUserCity).on(
  getUserCityFx.doneData,
  (_, data) => ({
    city: data.features[0].properties.city,
    address: data.features[0].properties.address,
  })
)
