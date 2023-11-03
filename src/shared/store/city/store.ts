import { IUserCity } from './type'
import { createEvent, createStore } from 'effector'

export const setUserCity = createEvent<Partial<IUserCity>>()
export const $userCity = createStore<IUserCity>({} as IUserCity).on(
  setUserCity,
  (state, params) => ({ ...state, ...params })
)
