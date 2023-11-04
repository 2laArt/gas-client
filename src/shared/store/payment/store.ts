import { createEvent, createStore } from 'effector'

export const setCheckedStatus = createEvent<boolean>()
export const $checkedPaymentStatus = createStore<boolean>(false).on(
  setCheckedStatus,
  (_, status) => status
)
