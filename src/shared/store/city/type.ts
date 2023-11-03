import { Dispatch, SetStateAction } from 'react'
import { ICoords } from 'shared/api'

export interface IUserCity {
  city: string
  address: string
}

export interface IGetUserCityFx {
  coords: ICoords
  setSpinner: Dispatch<SetStateAction<boolean>>
}
