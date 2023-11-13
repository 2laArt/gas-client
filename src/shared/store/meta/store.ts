import { createEvent, createStore } from 'effector'

export interface IMeta {
  title: string
  description?: string
}
export const setMeta = createEvent<IMeta>()
export const $meta = createStore({} as IMeta).on(
  setMeta,
  (_, payload) => payload
)
