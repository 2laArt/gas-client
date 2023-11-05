import { NextRouter } from 'next/router'
import type { Dispatch, SetStateAction } from 'react'
import type { UseFormReset } from 'react-hook-form'
import { ISignInData, ISignUpData } from 'shared/api'

export interface ISignInFields {
  data: ISignInData
  resetField: UseFormReset<any>
  setSpinner: Dispatch<SetStateAction<boolean>>
  router: NextRouter
}
export interface ISignUpFields extends Omit<ISignInFields, 'data' | 'router'> {
  data: ISignUpData
  switchForm: () => void
}
