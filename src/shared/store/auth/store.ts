import { createEvent, createStore } from 'effector-next'
import { ICheckAuth } from 'shared/api'

export const setAuth = createEvent<ICheckAuth>()

export const $auth = createStore<ICheckAuth>({} as ICheckAuth).on(
  setAuth,
  (_, auth) => auth
)
