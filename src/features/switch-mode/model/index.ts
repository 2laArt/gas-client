import { createEvent, createStore } from 'effector-next'

interface IThemes {
  dark: 'dark'
  light: 'light'
}
export type modeType = 'dark' | 'light'
export const themes: IThemes = {
  dark: 'dark',
  light: 'light',
}
export const setMode = createEvent<modeType>()

export const $mode = createStore<modeType>(themes.light).on(
  setMode,
  (_, mode) => mode
)
